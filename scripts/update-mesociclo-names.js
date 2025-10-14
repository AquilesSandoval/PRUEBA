const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseBucket = process.env.SUPABASE_BUCKET;

const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL
});

async function updateMesocicloNames() {
  try {
    console.log('🔄 Iniciando actualización de nombres de mesociclos...\n');

    // 1. Inicializar cliente de Supabase
    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log('✅ Cliente de Supabase inicializado');

    // 2. Descargar archivo de códigos desde Supabase Storage
    console.log(`📥 Descargando archivo codigos_mesociclos.txt del bucket "${supabaseBucket}"...`);
    
    const { data, error } = await supabase.storage
      .from(supabaseBucket)
      .download('Mesociclo/codigos_mesociclos.txt');

    if (error) {
      throw new Error(`Error al descargar archivo: ${error.message || 'Error desconocido'}`);
    }

    if (!data) {
      throw new Error('No se recibieron datos del archivo');
    }

    console.log('✅ Archivo descargado exitosamente');

    // 3. Leer contenido del archivo
    const text = await data.text();
    const codigos = text.split(',').map(codigo => codigo.trim()).filter(codigo => codigo);
    
    console.log(`📋 Total de códigos encontrados: ${codigos.length}\n`);

    // 4. Obtener mesociclos de la base de datos ordenados por ID
    console.log('📊 Consultando mesociclos en la base de datos...');
    const result = await pool.query(
      'SELECT id, nombre FROM mesociclos ORDER BY id ASC'
    );

    const mesociclos = result.rows;
    console.log(`✅ Total de mesociclos en BD: ${mesociclos.length}\n`);

    // 5. Validar que tengamos la misma cantidad
    if (codigos.length !== mesociclos.length) {
      console.warn(`⚠️  ADVERTENCIA: Hay ${codigos.length} códigos pero ${mesociclos.length} mesociclos`);
      console.warn(`   Se actualizarán los primeros ${Math.min(codigos.length, mesociclos.length)} registros\n`);
    }

    // 6. Actualizar nombres
    console.log('🔄 Actualizando nombres de mesociclos...\n');
    
    let updated = 0;
    const maxUpdates = Math.min(codigos.length, mesociclos.length);

    for (let i = 0; i < maxUpdates; i++) {
      const mesociclo = mesociclos[i];
      const nuevoCodigo = codigos[i];

      await pool.query(
        'UPDATE mesociclos SET nombre = $1 WHERE id = $2',
        [nuevoCodigo, mesociclo.id]
      );

      updated++;
      
      if (i < 10 || i >= maxUpdates - 5) {
        console.log(`  ${i + 1}. ID ${mesociclo.id}: "${mesociclo.nombre}" → "${nuevoCodigo}"`);
      } else if (i === 10) {
        console.log(`  ... (actualizando registros ${i + 1} a ${maxUpdates - 5}) ...`);
      }
    }

    console.log(`\n✅ Actualización completada: ${updated} mesociclos actualizados`);

    // 7. Verificar algunos resultados
    console.log('\n📋 Verificación de primeros 5 registros:');
    const verification = await pool.query(
      'SELECT id, nombre FROM mesociclos ORDER BY id ASC LIMIT 5'
    );

    verification.rows.forEach((row, i) => {
      console.log(`  ${i + 1}. ID ${row.id}: ${row.nombre}`);
    });

    console.log('\n🎉 Proceso finalizado exitosamente!');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

updateMesocicloNames();
