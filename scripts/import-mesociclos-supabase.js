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

async function importarMesociclos() {
  try {
    console.log('=== IMPORTACIÓN DE MESOCICLOS DESDE SUPABASE ===\n');

    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log('✅ Conectado a Supabase');

    console.log('📥 Descargando Mesociclo/mesociclo-completo.json...\n');
    const { data: fileData, error: downloadError } = await supabase
      .storage
      .from(supabaseBucket)
      .download('Mesociclo/mesociclo-completo.json');

    if (downloadError) {
      throw new Error('Error al descargar JSON: ' + downloadError.message);
    }

    const jsonText = await fileData.text();
    const mesociclosData = JSON.parse(jsonText);

    console.log(`✅ JSON descargado: ${mesociclosData.length} mesociclos encontrados\n`);

    let insertados = 0;
    let errores = 0;

    // Solo importar mesociclos con sesiones
    const mesosConSesiones = mesociclosData.filter(m => 
      m.semanas && m.semanas.some(s => 
        s.dias && s.dias.some(d => 
          d.ejercicios && d.ejercicios.length > 0
        )
      )
    );
    
    console.log(`📊 Mesociclos con sesiones: ${mesosConSesiones.length} de ${mesociclosData.length}\n`);
    
    // Solo importar los primeros 10 para prueba
    const mesosParaImportar = mesosConSesiones.slice(0, 10);
    console.log(`📋 Importando ${mesosParaImportar.length} mesociclos de prueba\n`);
    
    for (const meso of mesosParaImportar) {
      try {
        const codigoCombo = meso.combobox?.find(c => c.name === 'Mesocyclesmesocycle[codigo]');
        const codigo = codigoCombo?.selected || `MESO-${meso.id}`;
        
        const profileCombo = meso.combobox?.find(c => c.name === 'Mesocyclesmesocycle[profile_id]');
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

        if (!atletaId) {
          console.log(`📋 Mesociclo ${codigo}: Plantilla (sin atleta específico)`);
        }

        const weeksCombo = meso.combobox?.find(c => c.name === 'weeks_select');
        const numSemanas = parseInt(weeksCombo?.selected || meso.semanas?.length || 4);
        
        const fechaInicio = new Date();
        const fechaFin = new Date();
        fechaFin.setDate(fechaInicio.getDate() + (numSemanas * 7));

        const mesocicloResult = await pool.query(
          `INSERT INTO mesociclos 
           (atleta_id, codigo, nombre, semanas, fecha_inicio, fecha_fin, tipo_mesociclo, estado)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
           ON CONFLICT (codigo) DO UPDATE 
           SET nombre = EXCLUDED.nombre, semanas = EXCLUDED.semanas
           RETURNING id`,
          [
            atletaId,
            codigo,
            codigo,
            numSemanas,
            fechaInicio.toISOString().split('T')[0],
            fechaFin.toISOString().split('T')[0],
            'base',
            'planificado'
          ]
        );

        const mesocicloId = mesocicloResult.rows[0].id;
        console.log(`✅ Mesociclo creado: ${codigo} (ID: ${mesocicloId})`);

        let totalSesiones = 0;

        if (meso.semanas && Array.isArray(meso.semanas)) {
          for (let semanaIdx = 0; semanaIdx < meso.semanas.length; semanaIdx++) {
            const semana = meso.semanas[semanaIdx];
            const numeroSemana = semanaIdx + 1;
            
            const inicioSemana = new Date(fechaInicio);
            inicioSemana.setDate(inicioSemana.getDate() + (semanaIdx * 7));
            const finSemana = new Date(inicioSemana);
            finSemana.setDate(finSemana.getDate() + 6);

            const microcicloResult = await pool.query(
              `INSERT INTO microciclos 
               (mesociclo_id, atleta_id, semana_numero, fecha_inicio, fecha_fin)
               VALUES ($1, $2, $3, $4, $5)
               RETURNING id`,
              [
                mesocicloId,
                atletaId,
                numeroSemana,
                inicioSemana.toISOString().split('T')[0],
                finSemana.toISOString().split('T')[0]
              ]
            );

            const microcicloId = microcicloResult.rows[0].id;

            if (semana.dias && Array.isArray(semana.dias)) {
              for (let diaIdx = 0; diaIdx < semana.dias.length; diaIdx++) {
                const dia = semana.dias[diaIdx];
                const nombreDia = dia.nombre;
                const diaEnum = diasMap[nombreDia] || nombreDia;
                
                // Calculate the date for this session
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
                       (microciclo_id, mesociclo_id, atleta_id, fecha, hora, nombre_sesion, descripcion, tipo_sesion, estado, notas)
                       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
                      [
                        microcicloId,
                        mesocicloId,
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
          }
        }

        console.log(`   → ${totalSesiones} sesiones creadas\n`);
        insertados++;

      } catch (error) {
        console.error(`❌ Error procesando mesociclo:`, error.message);
        errores++;
      }
    }

    console.log('\n=== RESUMEN DE IMPORTACIÓN ===');
    console.log(`✅ Mesociclos insertados: ${insertados}`);
    console.log(`❌ Errores: ${errores}`);
    console.log(`📊 Total procesados: ${mesosConSesiones.length}`);

  } catch (error) {
    console.error('❌ Error general:', error);
  } finally {
    await pool.end();
  }
}

importarMesociclos();
