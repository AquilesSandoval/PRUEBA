import { createClient } from '@supabase/supabase-js';
import pkg from 'pg';
const { Client } = pkg;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const bucketName = process.env.SUPABASE_BUCKET;

const supabase = createClient(supabaseUrl, supabaseKey);

const dbClient = new Client({
  connectionString: process.env.DATABASE_URL,
});

const diasSemana = {
  'Lunes': 0,
  'Martes': 1,
  'Miércoles': 2,
  'Jueves': 3,
  'Viernes': 4,
  'Sábado': 5,
  'Domingo': 6
};

function calcularFecha(fechaInicio, numeroSemana, nombreDia) {
  const fecha = new Date(fechaInicio);
  const diasAgregar = (numeroSemana - 1) * 7 + diasSemana[nombreDia];
  fecha.setDate(fecha.getDate() + diasAgregar);
  return fecha.toISOString().split('T')[0];
}

async function importMesociclos() {
  try {
    await dbClient.connect();
    console.log('✅ Conectado a la base de datos');

    // Descargar JSON de mesociclos
    console.log('\n📥 Descargando mesociclo-completo.json...');
    const { data: jsonData, error: jsonError } = await supabase.storage
      .from(bucketName)
      .download('Mesociclo/mesociclo-completo.json');

    if (jsonError) {
      console.error('❌ Error descargando JSON:', jsonError);
      return;
    }

    const mesociclosData = JSON.parse(await jsonData.text());
    console.log(`✅ Descargados ${mesociclosData.length} mesociclos del JSON`);

    // Descargar códigos de nombres
    console.log('\n📥 Descargando codigos_mesociclos.txt...');
    const { data: codigosData, error: codigosError } = await supabase.storage
      .from(bucketName)
      .download('Mesociclo/codigos_mesociclos.txt');

    if (codigosError) {
      console.error('❌ Error descargando códigos:', codigosError);
      return;
    }

    const codigos = (await codigosData.text()).split(',').map(c => c.trim()).filter(c => c);
    console.log(`✅ Descargados ${codigos.length} códigos de nombres`);

    if (mesociclosData.length !== codigos.length) {
      console.error(`❌ ERROR: ${mesociclosData.length} mesociclos pero ${codigos.length} códigos`);
      return;
    }

    console.log('\n🔄 Importando mesociclos...');
    
    let totalSesiones = 0;
    const fechaInicioBase = '2025-01-06';

    for (let i = 0; i < mesociclosData.length; i++) {
      const mesoData = mesociclosData[i];
      const codigo = codigos[i];
      const mesoId = mesoData.id;
      const numSemanas = mesoData.semanas ? mesoData.semanas.length : 0;

      // Insertar mesociclo
      await dbClient.query(
        `INSERT INTO mesociclos (id, nombre, semanas, fecha_inicio) 
         VALUES ($1, $2, $3, $4)`,
        [mesoId, codigo, numSemanas, fechaInicioBase]
      );

      // Insertar sesiones
      let sesionesCount = 0;
      if (mesoData.semanas) {
        for (let s = 0; s < mesoData.semanas.length; s++) {
          const semana = mesoData.semanas[s];
          const numeroSemana = s + 1;

          if (semana.dias) {
            for (const dia of semana.dias) {
              if (dia.ejercicios) {
                for (const ejercicio of dia.ejercicios) {
                  const fecha = calcularFecha(fechaInicioBase, numeroSemana, dia.nombre);
                  const descripcion = ejercicio.descripciones ? ejercicio.descripciones.join('\n') : '';
                  const nombreSesion = ejercicio.nombreSesion || 'Sin nombre';
                  const hora = ejercicio.hora || '08:00';

                  await dbClient.query(
                    `INSERT INTO sesiones (mesociclo_id, fecha, hora, nombre_sesion, descripcion)
                     VALUES ($1, $2, $3, $4, $5)`,
                    [mesoId, fecha, hora, nombreSesion, descripcion]
                  );

                  sesionesCount++;
                }
              }
            }
          }
        }
      }

      totalSesiones += sesionesCount;

      if ((i + 1) % 100 === 0 || i === 0 || i === mesociclosData.length - 1) {
        console.log(`  ${i + 1}. ID ${mesoId} (${codigo}) - ${numSemanas} semanas, ${sesionesCount} sesiones`);
      }
    }

    console.log(`\n✅ Importación completa:`);
    console.log(`   - ${mesociclosData.length} mesociclos`);
    console.log(`   - ${totalSesiones} sesiones`);

    // Verificar primer mesociclo
    console.log('\n📋 Verificando primer mesociclo (ID 30901):');
    const firstMeso = await dbClient.query(
      `SELECT id, nombre, semanas FROM mesociclos WHERE id = 30901`
    );
    
    if (firstMeso.rows.length > 0) {
      console.log(`   ID: ${firstMeso.rows[0].id}`);
      console.log(`   Nombre: ${firstMeso.rows[0].nombre}`);
      console.log(`   Semanas: ${firstMeso.rows[0].semanas}`);

      const primerasSesiones = await dbClient.query(
        `SELECT fecha, hora, nombre_sesion, descripcion
         FROM sesiones 
         WHERE mesociclo_id = 30901 
         ORDER BY fecha, hora 
         LIMIT 1`
      );

      console.log('\n   Primera sesión:');
      if (primerasSesiones.rows.length > 0) {
        const s = primerasSesiones.rows[0];
        console.log(`     ${s.fecha} ${s.hora} - ${s.nombre_sesion}`);
        console.log(`     Descripción:\n${s.descripcion.split('\n').map(l => '       ' + l).join('\n')}`);
      }
    } else {
      console.log('   ❌ No se encontró el mesociclo con ID 30901');
    }

    // Verificar orden en listado
    console.log('\n📋 Primeros 5 mesociclos (orden ascendente):');
    const primeros = await dbClient.query(
      `SELECT id, nombre FROM mesociclos ORDER BY id ASC LIMIT 5`
    );
    primeros.rows.forEach(m => {
      console.log(`   ID ${m.id}: ${m.nombre}`);
    });

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await dbClient.end();
  }
}

importMesociclos();
