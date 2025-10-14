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

    // Descargar JSON
    console.log('\n📥 Descargando mesociclo-completo.json...');
    const { data: jsonData, error: jsonError } = await supabase.storage
      .from(bucketName)
      .download('Mesociclo/mesociclo-completo.json');

    if (jsonError) throw jsonError;

    const mesociclosData = JSON.parse(await jsonData.text());
    console.log(`✅ Descargados ${mesociclosData.length} mesociclos`);

    // Descargar códigos
    console.log('\n📥 Descargando codigos_mesociclos.txt...');
    const { data: codigosData, error: codigosError } = await supabase.storage
      .from(bucketName)
      .download('Mesociclo/codigos_mesociclos.txt');

    if (codigosError) throw codigosError;

    const codigos = (await codigosData.text()).split(',').map(c => c.trim()).filter(c => c);
    console.log(`✅ Descargados ${codigos.length} códigos\n`);

    if (mesociclosData.length !== codigos.length) {
      throw new Error(`Mismatch: ${mesociclosData.length} mesociclos vs ${codigos.length} códigos`);
    }

    const fechaInicioBase = '2025-01-06';
    let totalSesiones = 0;

    // Preparar datos
    const mesociclosValues = [];
    const sesionesValues = [];

    console.log('🔄 Procesando datos...');

    for (let i = 0; i < mesociclosData.length; i++) {
      const mesoData = mesociclosData[i];
      const codigo = codigos[i];
      const mesoId = mesoData.id;
      const numSemanas = mesoData.semanas ? mesoData.semanas.length : 0;

      mesociclosValues.push(`(${mesoId}, '${codigo}', ${numSemanas}, '${fechaInicioBase}')`);

      if (mesoData.semanas) {
        for (let s = 0; s < mesoData.semanas.length; s++) {
          const semana = mesoData.semanas[s];
          const numeroSemana = s + 1;

          if (semana.dias) {
            for (const dia of semana.dias) {
              if (dia.ejercicios) {
                for (const ejercicio of dia.ejercicios) {
                  const fecha = calcularFecha(fechaInicioBase, numeroSemana, dia.nombre);
                  const descripcion = ejercicio.descripciones ? 
                    ejercicio.descripciones.join('\n').replace(/'/g, "''") : '';
                  const nombreSesion = (ejercicio.nombreSesion || 'Sin nombre').replace(/'/g, "''");
                  const hora = ejercicio.hora || '08:00';

                  sesionesValues.push(
                    `(${mesoId}, '${fecha}', '${hora}', '${nombreSesion}', '${descripcion}')`
                  );
                  totalSesiones++;
                }
              }
            }
          }
        }
      }

      if ((i + 1) % 200 === 0) {
        console.log(`  Procesados ${i + 1}/${mesociclosData.length} mesociclos...`);
      }
    }

    console.log('✅ Datos procesados\n');

    // Insertar mesociclos por lotes
    console.log('💾 Insertando mesociclos...');
    const batchSize = 500;
    for (let i = 0; i < mesociclosValues.length; i += batchSize) {
      const batch = mesociclosValues.slice(i, i + batchSize);
      const query = `INSERT INTO mesociclos (id, nombre, semanas, fecha_inicio) VALUES ${batch.join(',')}`;
      await dbClient.query(query);
      console.log(`  Insertados ${Math.min(i + batchSize, mesociclosValues.length)}/${mesociclosValues.length}`);
    }

    // Insertar sesiones por lotes
    console.log('\n💾 Insertando sesiones...');
    for (let i = 0; i < sesionesValues.length; i += batchSize) {
      const batch = sesionesValues.slice(i, i + batchSize);
      const query = `INSERT INTO sesiones (mesociclo_id, fecha, hora, nombre_sesion, descripcion) VALUES ${batch.join(',')}`;
      await dbClient.query(query);
      console.log(`  Insertadas ${Math.min(i + batchSize, sesionesValues.length)}/${sesionesValues.length}`);
    }

    console.log(`\n✅ Importación completa: ${mesociclosData.length} mesociclos, ${totalSesiones} sesiones`);

    // Verificar primer mesociclo
    console.log('\n📋 Verificación - Primer mesociclo (ID 30901):');
    const first = await dbClient.query(
      `SELECT id, nombre, semanas FROM mesociclos WHERE id = 30901`
    );
    
    if (first.rows.length > 0) {
      console.log(`   ID: ${first.rows[0].id}, Nombre: ${first.rows[0].nombre}, Semanas: ${first.rows[0].semanas}`);

      const sesion = await dbClient.query(
        `SELECT fecha, hora, nombre_sesion, descripcion
         FROM sesiones WHERE mesociclo_id = 30901 ORDER BY fecha, hora LIMIT 1`
      );

      if (sesion.rows.length > 0) {
        const s = sesion.rows[0];
        console.log(`\n   Primera sesión: ${s.fecha} ${s.hora} - ${s.nombre_sesion}`);
        console.log(`   Descripción:`);
        s.descripcion.split('\n').forEach(l => console.log(`     ${l}`));
      }
    }

    // Orden del listado
    console.log('\n📋 Primeros 3 mesociclos (orden ascendente):');
    const top3 = await dbClient.query(
      `SELECT id, nombre FROM mesociclos ORDER BY id ASC LIMIT 3`
    );
    top3.rows.forEach(m => console.log(`   ID ${m.id}: ${m.nombre}`));

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await dbClient.end();
  }
}

importMesociclos();
