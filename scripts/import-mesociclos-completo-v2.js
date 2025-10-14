const { createClient } = require('@supabase/supabase-js');
const { neon } = require('@neondatabase/serverless');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const databaseUrl = process.env.DATABASE_URL;

const supabase = createClient(supabaseUrl, supabaseKey);
const sql = neon(databaseUrl);

async function downloadMesocicloCompleto() {
  try {
    console.log('📥 Descargando mesociclo-completo.json del bucket de Supabase...');
    
    const { data, error } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .download('Mesociclo/mesociclo-completo.json');
    
    if (error) {
      console.error('❌ Error al descargar:', error);
      return null;
    }
    
    const text = await data.text();
    const jsonData = JSON.parse(text);
    
    console.log('✅ Archivo descargado correctamente');
    return jsonData;
    
  } catch (error) {
    console.error('❌ Error:', error);
    return null;
  }
}

async function importMesociclos(mesociclosData) {
  try {
    console.log('\n📦 Iniciando importación de mesociclos...');
    
    let mesociclosImported = 0;
    let sesionesImported = 0;
    let microciclosImported = 0;
    
    for (const meso of mesociclosData) {
      // Saltar si es un objeto de selects (no tiene estructura de mesociclo)
      if (meso.selects || !meso.semanas) {
        continue;
      }
      
      const mesoId = meso.id;
      const totalSemanas = meso.semanas ? meso.semanas.length : 0;
      
      console.log(`\n🔄 Procesando Mesociclo ID: ${mesoId} (${totalSemanas} semanas)`);
      
      // Insertar mesociclo
      const mesoResult = await sql`
        INSERT INTO mesociclos (
          codigo,
          nombre,
          descripcion,
          semanas,
          estado
        ) VALUES (
          ${`MESO-${mesoId}`},
          ${`Mesociclo ${mesoId}`},
          ${`Mesociclo importado con ${totalSemanas} semanas`},
          ${totalSemanas},
          'planificado'
        )
        RETURNING id
      `;
      
      const mesocicloId = mesoResult[0].id;
      mesociclosImported++;
      
      // Procesar cada semana como un microciclo
      if (meso.semanas && Array.isArray(meso.semanas)) {
        for (let semanaIdx = 0; semanaIdx < meso.semanas.length; semanaIdx++) {
          const semana = meso.semanas[semanaIdx];
          const semanaNumero = semanaIdx + 1;
          
          // Insertar microciclo para esta semana
          const microResult = await sql`
            INSERT INTO microciclos (
              mesociclo_id,
              nombre,
              descripcion,
              semana_numero,
              estado
            ) VALUES (
              ${mesocicloId},
              ${semana.nombreSemana || `Semana ${semanaNumero}`},
              ${`${semana.nombreSemana || 'Semana'} del mesociclo ${mesoId}`},
              ${semanaNumero},
              'planificado'
            )
            RETURNING id
          `;
          
          const microcicloId = microResult[0].id;
          microciclosImported++;
          
          // Procesar cada día de la semana
          if (semana.dias && Array.isArray(semana.dias)) {
            for (const dia of semana.dias) {
              // Procesar cada ejercicio/sesión del día
              if (dia.ejercicios && Array.isArray(dia.ejercicios)) {
                for (const ejercicio of dia.ejercicios) {
                  // Combinar descripciones en un solo texto con saltos de línea
                  const descripcionCompleta = ejercicio.descripciones 
                    ? ejercicio.descripciones.join('\n')
                    : '';
                  
                  // Determinar tipo de sesión basado en el nombre
                  let tipoSesion = 'entrenamiento';
                  const nombreLower = (ejercicio.nombreSesion || '').toLowerCase();
                  if (nombreLower.includes('carrera') || nombreLower.includes('correr')) {
                    tipoSesion = 'carrera';
                  } else if (nombreLower.includes('natacion') || nombreLower.includes('swim')) {
                    tipoSesion = 'natacion';
                  } else if (nombreLower.includes('ciclismo') || nombreLower.includes('bici')) {
                    tipoSesion = 'ciclismo';
                  } else if (nombreLower.includes('funcional') || nombreLower.includes('fuerza') || nombreLower.includes('core')) {
                    tipoSesion = 'fuerza';
                  }
                  
                  await sql`
                    INSERT INTO sesiones (
                      microciclo_id,
                      mesociclo_id,
                      nombre_sesion,
                      descripcion,
                      tipo_sesion,
                      hora,
                      estado,
                      notas
                    ) VALUES (
                      ${microcicloId},
                      ${mesocicloId},
                      ${ejercicio.nombreSesion || 'Sesión'},
                      ${descripcionCompleta},
                      ${tipoSesion},
                      ${ejercicio.hora || null},
                      'planificada',
                      ${`Día: ${dia.nombre}`}
                    )
                  `;
                  
                  sesionesImported++;
                }
              }
            }
          }
        }
      }
    }
    
    console.log('\n✅ Importación completada:');
    console.log(`   📊 ${mesociclosImported} mesociclos`);
    console.log(`   📅 ${microciclosImported} microciclos (semanas)`);
    console.log(`   🏃 ${sesionesImported} sesiones`);
    
  } catch (error) {
    console.error('❌ Error en importación:', error);
    throw error;
  }
}

async function main() {
  try {
    const mesociclosData = await downloadMesocicloCompleto();
    
    if (!mesociclosData) {
      console.error('❌ No se pudo descargar el archivo');
      process.exit(1);
    }
    
    console.log(`📋 Total de entradas en JSON: ${mesociclosData.length}`);
    
    // Contar cuántos son mesociclos reales (tienen semanas)
    const mesociclosReales = mesociclosData.filter(m => m.semanas && !m.selects);
    console.log(`📋 Mesociclos válidos para importar: ${mesociclosReales.length}`);
    
    await importMesociclos(mesociclosData);
    
    console.log('\n🎉 Proceso completado exitosamente!');
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Error fatal:', error);
    process.exit(1);
  }
}

main();
