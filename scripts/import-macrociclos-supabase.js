const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseBucket = process.env.SUPABASE_BUCKET;

const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL
});

// Mapeo de días en español a enum de PostgreSQL
const diasMap = {
  'Lunes': 'Lunes',
  'Martes': 'Martes',
  'Miércoles': 'Miercoles', // Note: sin tilde en el enum
  'Miercoles': 'Miercoles',
  'Jueves': 'Jueves',
  'Viernes': 'Viernes',
  'Sábado': 'Sabado', // Note: sin tilde en el enum
  'Sabado': 'Sabado',
  'Domingo': 'Domingo'
};

async function importarMacrociclos() {
  try {
    console.log('=== IMPORTACIÓN DE MACROCICLOS DESDE SUPABASE ===\n');

    // 1. Conectar a Supabase
    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log('✅ Conectado a Supabase');

    // 2. Descargar el archivo JSON
    console.log('📥 Descargando Macrociclo/macrociclo-completo.json...\n');
    const { data: fileData, error: downloadError } = await supabase
      .storage
      .from(supabaseBucket)
      .download('Macrociclo/macrociclo-completo.json');

    if (downloadError) {
      throw new Error('Error al descargar JSON: ' + downloadError.message);
    }

    const jsonText = await fileData.text();
    const macrociclosData = JSON.parse(jsonText);

    console.log(`✅ JSON descargado: ${macrociclosData.length} macrociclos encontrados\n`);

    // 3. Procesar cada macrociclo
    let insertados = 0;
    let errores = 0;

    for (const macro of macrociclosData) {
      try {
        // Obtener nombre del atleta del combobox
        const profileCombo = macro.combobox?.find(c => c.name === 'Mesocyclesmesocycle[profile_id]');
        const nombreAtleta = profileCombo?.selected || null;

        // Buscar atleta por nombre (buscar en nombre o apellido)
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
            console.log(`✅ Atleta encontrado: ${nombreAtleta} (ID: ${atletaId})`);
          } else {
            console.log(`⚠️  Atleta no encontrado: ${nombreAtleta} - Importando sin atleta`);
          }
        }

        // Obtener información adicional del combobox
        const deporteCombo = macro.combobox?.find(c => c.name === 'sport_select');
        const distanciaCombo = macro.combobox?.find(c => c.name === 'distance_select');
        
        const deporte = deporteCombo?.selected || 'No especificado';
        const distancia = distanciaCombo?.selected || '';
        
        // Generar fechas estimadas (hoy + número de semanas)
        const numSemanas = macro.semanas?.length || 1;
        const fechaInicio = new Date();
        const fechaFin = new Date();
        fechaFin.setDate(fechaFin.getDate() + (numSemanas * 7));

        const nombreMacro = `${deporte}${distancia ? ' - ' + distancia : ''} (ID: ${macro.id})`;

        // Verificar si ya existe un macrociclo con el mismo ID original
        const existeResult = await pool.query(
          `SELECT id FROM macrociclos WHERE nombre LIKE $1`,
          [`%ID: ${macro.id})%`]
        );

        let macrocicloId;

        if (existeResult.rows.length > 0) {
          macrocicloId = existeResult.rows[0].id;
          console.log(`🔄 Macrociclo ya existe: ${nombreMacro} - Actualizando...`);
          
          // Eliminar microciclos y sesiones anteriores
          await pool.query('DELETE FROM sesiones WHERE macrociclo_id = $1', [macrocicloId]);
          await pool.query('DELETE FROM microciclos WHERE atleta_id = $1 AND nombre LIKE $2', 
            [atletaId, `%${nombreMacro}%`]);
          
        } else {
          // Insertar macrociclo
          const macroResult = await pool.query(
            `INSERT INTO macrociclos 
            (atleta_id, nombre, descripcion, fecha_inicio, fecha_fin, objetivo_principal, estado)
            VALUES ($1, $2, $3, $4, $5, $6, 'planificado')
            RETURNING id`,
            [
              atletaId,
              nombreMacro,
              `Macrociclo de ${deporte} ${distancia}. Importado desde Supabase.`,
              fechaInicio.toISOString().split('T')[0],
              fechaFin.toISOString().split('T')[0],
              `Preparación para ${deporte} ${distancia}`
            ]
          );

          macrocicloId = macroResult.rows[0].id;
          console.log(`✅ Macrociclo creado: ${nombreMacro} (ID: ${macrocicloId})`);
        }

        // 4. Crear microciclos (semanas) y sesiones
        let sesionesCreadas = 0;
        
        for (let i = 0; i < (macro.semanas || []).length; i++) {
          const semana = macro.semanas[i];
          const semanaNum = i + 1;
          
          // Calcular fechas de la semana
          const inicioSemana = new Date(fechaInicio);
          inicioSemana.setDate(inicioSemana.getDate() + (i * 7));
          const finSemana = new Date(inicioSemana);
          finSemana.setDate(finSemana.getDate() + 6);

          // Crear microciclo (si hay atleta)
          let microcicloId = null;
          if (atletaId) {
            const microResult = await pool.query(
              `INSERT INTO microciclos 
              (atleta_id, mesociclo_id, nombre, descripcion, semana_numero, fecha_inicio, fecha_fin, estado)
              VALUES ($1, NULL, $2, $3, $4, $5, $6, 'planificado')
              RETURNING id`,
              [
                atletaId,
                `${nombreMacro} - ${semana.nombreSemana}`,
                `Semana ${semanaNum} del macrociclo`,
                semanaNum,
                inicioSemana.toISOString().split('T')[0],
                finSemana.toISOString().split('T')[0]
              ]
            );
            microcicloId = microResult.rows[0].id;
          }

          // Crear sesiones para cada día
          for (const dia of (semana.dias || [])) {
            const diaEnum = diasMap[dia.nombre] || dia.nombre;
            
            // Calcular la fecha del día de la semana
            const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
            const diaIndex = diasSemana.indexOf(diaEnum);
            const fechaDia = new Date(inicioSemana);
            
            if (diaIndex >= 0) {
              const diff = (diaIndex - inicioSemana.getDay() + 7) % 7;
              fechaDia.setDate(inicioSemana.getDate() + diff);
            }

            for (const ejercicio of (dia.ejercicios || [])) {
              // Unir todas las descripciones en una sola
              const descripcionCompleta = (ejercicio.descripciones || []).join('\n');
              
              await pool.query(
                `INSERT INTO sesiones 
                (atleta_id, microciclo_id, macrociclo_id, fecha, hora, nombre_sesion, descripcion, estado)
                VALUES ($1, $2, $3, $4, $5, $6, $7, 'planificada')`,
                [
                  atletaId, // Puede ser NULL para plantillas
                  microcicloId,
                  macrocicloId,
                  fechaDia.toISOString().split('T')[0],
                  ejercicio.hora || '00:00:00',
                  ejercicio.nombreSesion || 'Sin nombre',
                  descripcionCompleta
                ]
              );
              sesionesCreadas++;
            }
          }
        }

        console.log(`   └─ ${sesionesCreadas} sesiones creadas\n`);
        insertados++;

      } catch (macroError) {
        errores++;
        console.error(`❌ Error procesando macrociclo ${macro.id}:`, macroError.message);
      }
    }

    // 5. Mostrar resumen
    console.log('\n=== RESUMEN DE IMPORTACIÓN ===');
    console.log(`Total de macrociclos en JSON: ${macrociclosData.length}`);
    console.log(`✅ Procesados exitosamente: ${insertados}`);
    console.log(`❌ Errores: ${errores}`);
    console.log('\n✅ Importación completada');

    await pool.end();
    process.exit(0);

  } catch (error) {
    console.error('\n❌ ERROR FATAL:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

importarMacrociclos();
