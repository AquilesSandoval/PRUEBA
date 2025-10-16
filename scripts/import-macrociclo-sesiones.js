const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function importarMacrociclosYSesiones() {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    );

    console.log('Descargando macrociclo-completo.json desde Supabase...');
    
    const { data: fileData, error } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .download('Macrociclo/macrociclo-completo.json');

    if (error) {
      throw new Error(`Error descargando archivo: ${error.message}`);
    }

    const macrociclosData = JSON.parse(await fileData.text());
    console.log(`Total macrociclos en JSON: ${macrociclosData.length}`);

    let totalMacrociclosImportados = 0;
    let totalSesionesImportadas = 0;
    let errorCount = 0;

    // Fecha de inicio fija según documentación
    const FECHA_INICIO_BASE = new Date('2025-01-06');

    for (const macroData of macrociclosData) {
      try {
        const macrocicloId = macroData.id;
        
        // Extraer nombre del atleta del combobox
        let nombreAtleta = 'Sin nombre';
        if (macroData.combobox && macroData.combobox[0] && macroData.combobox[0].selected) {
          nombreAtleta = macroData.combobox[0].selected;
        }

        // Calcular duración en semanas
        const numSemanas = macroData.semanas ? macroData.semanas.length : 0;
        
        if (numSemanas === 0) {
          console.log(`⚠️  Macrociclo ${macrocicloId} sin semanas, saltando...`);
          continue;
        }

        // Calcular fechas
        const fechaInicio = new Date(FECHA_INICIO_BASE);
        const fechaFin = new Date(FECHA_INICIO_BASE);
        fechaFin.setDate(fechaFin.getDate() + (numSemanas * 7));

        // Verificar si ya existe
        const existeResult = await pool.query(
          'SELECT id FROM macrociclos WHERE id = $1',
          [macrocicloId]
        );

        if (existeResult.rows.length === 0) {
          // Insertar macrociclo usando el ID del JSON
          await pool.query(
            `INSERT INTO macrociclos (
              id, nombre, fecha_inicio, fecha_fin, estado
            ) VALUES ($1, $2, $3, $4, $5)`,
            [
              macrocicloId,
              `MACRO-${macrocicloId} (${nombreAtleta})`,
              fechaInicio.toISOString().split('T')[0],
              fechaFin.toISOString().split('T')[0],
              'planificado'
            ]
          );
          totalMacrociclosImportados++;
          console.log(`\n✓ Macrociclo ${macrocicloId} insertado`);
        } else {
          console.log(`\n→ Macrociclo ${macrocicloId} ya existe`);
        }

        // Verificar si ya tiene sesiones importadas
        const sesionesExistentesResult = await pool.query(
          'SELECT COUNT(*) as total FROM sesiones WHERE macrociclo_id = $1',
          [macrocicloId]
        );
        
        if (parseInt(sesionesExistentesResult.rows[0].total) > 0) {
          console.log(`  → Ya tiene sesiones importadas, saltando...`);
          continue;
        }

        // Importar sesiones
        let sesionesDelMacro = 0;

        for (let semanaIndex = 0; semanaIndex < macroData.semanas.length; semanaIndex++) {
          const semana = macroData.semanas[semanaIndex];
          
          if (!semana.dias || !Array.isArray(semana.dias)) {
            continue;
          }

          for (const dia of semana.dias) {
            if (!dia.ejercicios || !Array.isArray(dia.ejercicios)) {
              continue;
            }

            // Calcular día de la semana (0=Lunes, 6=Domingo)
            const nombreDia = dia.nombre?.toLowerCase() || '';
            let diaOffset = 0;
            if (nombreDia.includes('lunes')) diaOffset = 0;
            else if (nombreDia.includes('martes')) diaOffset = 1;
            else if (nombreDia.includes('miércoles') || nombreDia.includes('miercoles')) diaOffset = 2;
            else if (nombreDia.includes('jueves')) diaOffset = 3;
            else if (nombreDia.includes('viernes')) diaOffset = 4;
            else if (nombreDia.includes('sábado') || nombreDia.includes('sabado')) diaOffset = 5;
            else if (nombreDia.includes('domingo')) diaOffset = 6;

            for (const ejercicio of dia.ejercicios) {
              try {
                // Calcular la fecha de la sesión
                const diasDesdeInicio = (semanaIndex * 7) + diaOffset;
                const fechaSesion = new Date(fechaInicio);
                fechaSesion.setDate(fechaSesion.getDate() + diasDesdeInicio);

                // Convertir descripciones array a string con saltos de línea
                let descripcionTexto = '';
                if (Array.isArray(ejercicio.descripciones)) {
                  descripcionTexto = ejercicio.descripciones.join('\n');
                } else if (ejercicio.descripciones) {
                  descripcionTexto = ejercicio.descripciones;
                }

                // Insertar la sesión
                await pool.query(
                  `INSERT INTO sesiones (
                    macrociclo_id,
                    fecha,
                    hora,
                    nombre_sesion,
                    descripcion,
                    tipo_sesion,
                    estado
                  ) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                  [
                    macrocicloId,
                    fechaSesion.toISOString().split('T')[0],
                    ejercicio.hora || '00:00',
                    ejercicio.nombreSesion || 'Sesión',
                    descripcionTexto,
                    'running',
                    'planificada'
                  ]
                );

                sesionesDelMacro++;
                totalSesionesImportadas++;

              } catch (sesionError) {
                errorCount++;
                console.error(`  Error insertando sesión: ${sesionError.message}`);
              }
            }
          }
        }

        console.log(`  ✓ ${sesionesDelMacro} sesiones importadas`);

      } catch (macroError) {
        console.error(`Error procesando macrociclo ${macroData.id}: ${macroError.message}`);
        errorCount++;
      }
    }

    // Actualizar la secuencia de IDs para evitar conflictos futuros
    const maxIdResult = await pool.query('SELECT MAX(id) as max_id FROM macrociclos');
    const maxId = maxIdResult.rows[0].max_id || 0;
    await pool.query(`SELECT setval('macrociclos_id_seq', $1, true)`, [maxId + 1]);

    console.log('\n=== RESUMEN DE IMPORTACIÓN ===');
    console.log(`Macrociclos insertados: ${totalMacrociclosImportados}`);
    console.log(`Total sesiones importadas: ${totalSesionesImportadas}`);
    console.log(`Errores: ${errorCount}`);

    // Verificar resultado
    const countResult = await pool.query(
      'SELECT COUNT(*) as total FROM sesiones WHERE macrociclo_id IS NOT NULL'
    );
    console.log(`Sesiones con macrociclo_id en BD: ${countResult.rows[0].total}`);

  } catch (error) {
    console.error('Error fatal:', error);
  } finally {
    await pool.end();
  }
}

importarMacrociclosYSesiones();
