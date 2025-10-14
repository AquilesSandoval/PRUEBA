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
      console.log(`\n🔄 Procesando: ${meso.nombre || meso.codigo}`);
      
      // Insertar mesociclo
      const mesoResult = await sql`
        INSERT INTO mesociclos (
          codigo,
          nombre,
          descripcion,
          macrociclo_id,
          atleta_id,
          fecha_inicio,
          fecha_fin,
          semanas,
          objetivo,
          tipo_mesociclo,
          estado,
          notas
        ) VALUES (
          ${meso.codigo || null},
          ${meso.nombre || null},
          ${meso.descripcion || null},
          ${meso.macrociclo_id || null},
          ${meso.atleta_id || null},
          ${meso.fecha_inicio || null},
          ${meso.fecha_fin || null},
          ${meso.semanas || meso.duracion_semanas || null},
          ${meso.objetivo || null},
          ${meso.tipo_mesociclo || null},
          ${meso.estado || 'planificado'},
          ${meso.notas || null}
        )
        RETURNING id
      `;
      
      const mesocicloId = mesoResult[0].id;
      mesociclosImported++;
      
      // Importar microciclos del mesociclo
      if (meso.microciclos && Array.isArray(meso.microciclos)) {
        for (const micro of meso.microciclos) {
          const microResult = await sql`
            INSERT INTO microciclos (
              mesociclo_id,
              atleta_id,
              nombre,
              descripcion,
              semana_numero,
              fecha_inicio,
              fecha_fin,
              carga_planificada,
              objetivo_semanal,
              estado,
              notas
            ) VALUES (
              ${mesocicloId},
              ${micro.atleta_id || null},
              ${micro.nombre || null},
              ${micro.descripcion || null},
              ${micro.semana_numero || 1},
              ${micro.fecha_inicio || null},
              ${micro.fecha_fin || null},
              ${micro.carga_planificada || null},
              ${micro.objetivo_semanal || null},
              ${micro.estado || 'planificado'},
              ${micro.notas || null}
            )
            RETURNING id
          `;
          
          const microcicloId = microResult[0].id;
          microciclosImported++;
          
          // Importar sesiones del microciclo
          if (micro.sesiones && Array.isArray(micro.sesiones)) {
            for (const sesion of micro.sesiones) {
              await sql`
                INSERT INTO sesiones (
                  microciclo_id,
                  mesociclo_id,
                  atleta_id,
                  nombre_sesion,
                  descripcion,
                  tipo_sesion,
                  ejercicios,
                  fecha,
                  hora,
                  duracion_minutos,
                  ubicacion,
                  estado,
                  notas
                ) VALUES (
                  ${microcicloId},
                  ${mesocicloId},
                  ${sesion.atleta_id || null},
                  ${sesion.nombre_sesion || sesion.nombre || null},
                  ${sesion.descripcion || null},
                  ${sesion.tipo_sesion || null},
                  ${sesion.ejercicios ? JSON.stringify(sesion.ejercicios) : null},
                  ${sesion.fecha || null},
                  ${sesion.hora || null},
                  ${sesion.duracion_minutos || null},
                  ${sesion.ubicacion || null},
                  ${sesion.estado || 'planificada'},
                  ${sesion.notas || (sesion.dia ? `Día: ${sesion.dia}` : null)}
                )
              `;
              
              sesionesImported++;
            }
          }
        }
      }
      
      // También importar sesiones directas del mesociclo (si existen)
      if (meso.sesiones && Array.isArray(meso.sesiones)) {
        for (const sesion of meso.sesiones) {
          await sql`
            INSERT INTO sesiones (
              mesociclo_id,
              atleta_id,
              nombre_sesion,
              descripcion,
              tipo_sesion,
              ejercicios,
              fecha,
              hora,
              duracion_minutos,
              ubicacion,
              estado,
              notas
            ) VALUES (
              ${mesocicloId},
              ${sesion.atleta_id || null},
              ${sesion.nombre_sesion || sesion.nombre || null},
              ${sesion.descripcion || null},
              ${sesion.tipo_sesion || null},
              ${sesion.ejercicios ? JSON.stringify(sesion.ejercicios) : null},
              ${sesion.fecha || null},
              ${sesion.hora || null},
              ${sesion.duracion_minutos || null},
              ${sesion.ubicacion || null},
              ${sesion.estado || 'planificada'},
              ${sesion.notas || (sesion.dia ? `Día: ${sesion.dia}` : null)}
            )
          `;
          
          sesionesImported++;
        }
      }
    }
    
    console.log('\n✅ Importación completada:');
    console.log(`   📊 ${mesociclosImported} mesociclos`);
    console.log(`   📅 ${microciclosImported} microciclos`);
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
    
    console.log(`📋 Total de mesociclos a importar: ${mesociclosData.length}`);
    
    await importMesociclos(mesociclosData);
    
    console.log('\n🎉 Proceso completado exitosamente!');
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Error fatal:', error);
    process.exit(1);
  }
}

main();
