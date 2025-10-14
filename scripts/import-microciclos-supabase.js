const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseBucket = process.env.SUPABASE_BUCKET;

const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL
});

const diasMap = {
  'Lunes': 'Lunes',
  'Martes': 'Martes',
  'Miércoles': 'Miercoles',
  'Miercoles': 'Miercoles',
  'Jueves': 'Jueves',
  'Viernes': 'Viernes',
  'Sábado': 'Sabado',
  'Sabado': 'Sabado',
  'Domingo': 'Domingo'
};

async function importarMicrociclos() {
  try {
    console.log('=== IMPORTACIÓN DE MICROCICLOS DESDE SUPABASE ===\n');

    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log('✅ Conectado a Supabase');

    // Listar todos los archivos JSON en la carpeta Microciclo
    console.log('📥 Listando archivos JSON en Microciclo/...\n');
    const { data: files, error: listError } = await supabase
      .storage
      .from(supabaseBucket)
      .list('Microciclo', { limit: 1000 });

    if (listError) {
      throw new Error('Error al listar archivos: ' + listError.message);
    }

    const jsonFiles = files.filter(f => f.name.endsWith('.json'));
    console.log(`✅ ${jsonFiles.length} archivos JSON encontrados\n`);

    let insertados = 0;
    let errores = 0;

    // Importar todos los microciclos
    for (const file of jsonFiles) {
      try {
        console.log(`📥 Descargando ${file.name}...`);
        
        const { data: fileData, error: downloadError } = await supabase
          .storage
          .from(supabaseBucket)
          .download(`Microciclo/${file.name}`);

        if (downloadError) {
          console.error(`❌ Error descargando ${file.name}:`, downloadError.message);
          errores++;
          continue;
        }

        const jsonText = await fileData.text();
        const microciclosData = JSON.parse(jsonText);

        // Procesar cada microciclo en el archivo
        for (const micro of microciclosData) {
          try {
            const microId = micro.id;
            const nombre = `MICRO-${microId}`;
            
            // Verificar si ya existe
            const existente = await pool.query(
              'SELECT id FROM microciclos WHERE nombre = $1',
              [nombre]
            );

            if (existente.rows.length > 0) {
              console.log(`⏭️  Microciclo ${nombre} ya existe, omitiendo...`);
              continue;
            }

            // Los microciclos son plantillas sin atleta ni mesociclo específico
            const numSemanas = micro.semanas?.length || 1;
            const fechaInicio = new Date();
            const fechaFin = new Date();
            fechaFin.setDate(fechaInicio.getDate() + (numSemanas * 7));

            // Insertar el microciclo (permitiendo NULL en mesociclo_id y atleta_id para plantillas)
            const microcicloResult = await pool.query(
              `INSERT INTO microciclos 
               (mesociclo_id, atleta_id, nombre, semana_numero, fecha_inicio, fecha_fin, objetivo_semanal, estado)
               VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
               RETURNING id`,
              [
                null, // mesociclo_id
                null, // atleta_id  
                nombre,
                1, // semana_numero por defecto
                fechaInicio.toISOString().split('T')[0],
                fechaFin.toISOString().split('T')[0],
                null, // objetivo_semanal
                'planificado'
              ]
            );

            const microcicloId = microcicloResult.rows[0].id;
            console.log(`✅ Microciclo creado: ${nombre} (ID: ${microcicloId})`);

            let totalSesiones = 0;

            // Procesar semanas y sesiones
            if (micro.semanas && Array.isArray(micro.semanas)) {
              for (let semanaIdx = 0; semanaIdx < micro.semanas.length; semanaIdx++) {
                const semana = micro.semanas[semanaIdx];
                const inicioSemana = new Date(fechaInicio);
                inicioSemana.setDate(inicioSemana.getDate() + (semanaIdx * 7));

                if (semana.dias && Array.isArray(semana.dias)) {
                  for (let diaIdx = 0; diaIdx < semana.dias.length; diaIdx++) {
                    const dia = semana.dias[diaIdx];
                    const nombreDia = dia.nombre;
                    const diaEnum = diasMap[nombreDia] || nombreDia;
                    
                    // Calcular la fecha para esta sesión
                    const fechaSesion = new Date(inicioSemana);
                    fechaSesion.setDate(fechaSesion.getDate() + diaIdx);
                    
                    if (dia.ejercicios && Array.isArray(dia.ejercicios)) {
                      for (const ejercicio of dia.ejercicios) {
                        const nombreSesion = ejercicio.nombreSesion || 'Sesión';
                        const descripciones = ejercicio.descripciones || [];
                        const descripcionCompleta = descripciones.join('\n');
                        const hora = ejercicio.hora || '08:00';

                        await pool.query(
                          `INSERT INTO sesiones 
                           (microciclo_id, atleta_id, fecha, hora, nombre_sesion, descripcion, tipo_sesion, estado, notas)
                           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
                          [
                            microcicloId,
                            null, // atleta_id
                            fechaSesion.toISOString().split('T')[0],
                            hora,
                            nombreSesion,
                            descripcionCompleta,
                            nombreSesion,
                            'planificada',
                            `Día: ${diaEnum}`
                          ]
                        );

                        totalSesiones++;
                      }
                    }
                  }
                }
              }
            }

            console.log(`   → ${totalSesiones} sesiones creadas\n`);
            insertados++;

          } catch (microError) {
            console.error(`❌ Error procesando microciclo ${micro.id}:`, microError.message);
            errores++;
          }
        }

      } catch (fileError) {
        console.error(`❌ Error procesando archivo ${file.name}:`, fileError.message);
        errores++;
      }
    }

    console.log('\n=== RESUMEN DE IMPORTACIÓN ===');
    console.log(`✅ Microciclos insertados: ${insertados}`);
    console.log(`❌ Errores: ${errores}`);
    console.log(`📊 Total archivos procesados: ${jsonFiles.length}`);

  } catch (error) {
    console.error('❌ Error general:', error);
  } finally {
    await pool.end();
    process.exit(0);
  }
}

importarMicrociclos();
