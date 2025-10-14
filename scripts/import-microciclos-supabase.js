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

    let totalMicrociclos = 0;
    let totalSesiones = 0;
    let errores = 0;

    // Procesar solo los primeros 20 archivos (2000 microciclos aprox)
    const MAX_ARCHIVOS = 20;
    for (let i = 1; i <= MAX_ARCHIVOS; i++) {
      const fileName = `Microciclo/microciclo-${i}.json`;
      console.log(`\n📥 Descargando ${fileName}...`);
      
      try {
        const { data: fileData, error: downloadError } = await supabase
          .storage
          .from(supabaseBucket)
          .download(fileName);

        if (downloadError) {
          console.log(`❌ Error al descargar ${fileName}: ${downloadError.message}`);
          errores++;
          continue;
        }

        const jsonText = await fileData.text();
        const microciclosData = JSON.parse(jsonText);

        console.log(`   📊 ${microciclosData.length} microciclos encontrados en archivo ${i}`);

        // Procesar cada microciclo del archivo
        for (const micro of microciclosData) {
          try {
            // Extraer código del microciclo
            const codigoCombo = micro.combobox?.find(c => c.name === 'Microcyclesmicrocycle[codigo]');
            const codigo = codigoCombo?.selected || `MICRO-${micro.id}`;
            
            // Buscar atleta si existe
            const profileCombo = micro.combobox?.find(c => c.name === 'Microcyclesmicrocycle[profile_id]');
            const nombreAtleta = profileCombo?.selected || null;

            let atletaId = null;
            if (nombreAtleta && nombreAtleta !== '-- --') {
              const atletaResult = await pool.query(
                `SELECT id FROM atletas 
                 WHERE CONCAT(nombre, ' ', apellido) ILIKE $1 
                    OR nombre ILIKE $1 
                    OR apellido ILIKE $1
                 LIMIT 1`,
                [nombreAtleta]
              );
              
              if (atletaResult.rows.length > 0) {
                atletaId = atletaResult.rows[0].id;
              }
            }

            // Obtener número de semana
            const weekCombo = micro.combobox?.find(c => c.name === 'Microcyclesmicrocycle[week]');
            const semanaNumero = parseInt(weekCombo?.selected || '1');

            // Calcular fechas
            const fechaInicio = new Date();
            const fechaFin = new Date();
            fechaFin.setDate(fechaInicio.getDate() + 7);

            // Insertar microciclo
            const microcicloResult = await pool.query(
              `INSERT INTO microciclos 
               (mesociclo_id, atleta_id, nombre, semana_numero, fecha_inicio, fecha_fin, estado)
               VALUES ($1, $2, $3, $4, $5, $6, $7)
               ON CONFLICT DO NOTHING
               RETURNING id`,
              [
                null, // mesociclo_id (plantilla)
                atletaId,
                codigo,
                semanaNumero,
                fechaInicio.toISOString().split('T')[0],
                fechaFin.toISOString().split('T')[0],
                'planificado'
              ]
            );

            if (microcicloResult.rows.length === 0) {
              continue; // Ya existe
            }

            const microcicloId = microcicloResult.rows[0].id;
            totalMicrociclos++;

            // Insertar sesiones si existen
            if (micro.dias && Array.isArray(micro.dias)) {
              for (let diaIdx = 0; diaIdx < micro.dias.length; diaIdx++) {
                const dia = micro.dias[diaIdx];
                const nombreDia = dia.nombre;
                const diaEnum = diasMap[nombreDia] || nombreDia;
                
                // Calcular fecha de la sesión
                const fechaSesion = new Date(fechaInicio);
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
                        atletaId,
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

          } catch (err) {
            console.log(`   ❌ Error procesando microciclo: ${err.message}`);
            errores++;
          }
        }

        console.log(`   ✅ Archivo ${i} procesado`);

      } catch (err) {
        console.log(`❌ Error con archivo ${i}: ${err.message}`);
        errores++;
      }
    }

    console.log('\n=== RESUMEN DE IMPORTACIÓN ===');
    console.log(`✅ Microciclos insertados: ${totalMicrociclos}`);
    console.log(`✅ Sesiones insertadas: ${totalSesiones}`);
    console.log(`❌ Errores: ${errores}`);

  } catch (error) {
    console.error('Error fatal:', error);
  } finally {
    await pool.end();
    process.exit(0);
  }
}

importarMicrociclos();
