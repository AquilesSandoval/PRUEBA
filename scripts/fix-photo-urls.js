const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');

// Configuración
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseBucket = process.env.SUPABASE_BUCKET;

const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL
});

async function corregirURLsFotos() {
  try {
    console.log('=== CORRECCIÓN DE URLs DE FOTOS ===\n');

    // 1. Conectar a Supabase
    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log('✅ Conectado a Supabase');

    // 2. Listar todas las fotos en la carpeta AtletasFotos
    console.log('📥 Listando archivos en AtletasFotos...\n');
    const { data: files, error: listError } = await supabase
      .storage
      .from(supabaseBucket)
      .list('AtletasFotos', {
        limit: 1000,
        sortBy: { column: 'name', order: 'asc' }
      });

    if (listError) {
      throw new Error('Error al listar archivos: ' + listError.message);
    }

    console.log(`✅ Encontrados ${files.length} archivos en AtletasFotos\n`);

    // 3. Mostrar primeros archivos para verificar estructura
    console.log('📋 Primeros 10 archivos encontrados:');
    files.slice(0, 10).forEach(file => {
      console.log(`  - ${file.name}`);
    });
    console.log('\n');

    // 4. Crear mapa de ID a extensión
    const fotoMap = {};
    files.forEach(file => {
      // Extraer el ID (nombre sin extensión)
      const match = file.name.match(/^(\d+)\.(jpg|jpeg|png)$/i);
      if (match) {
        const id = match[1];
        const extension = match[2].toLowerCase();
        fotoMap[id] = extension;
      }
    });

    console.log(`📊 Fotos mapeadas: ${Object.keys(fotoMap).length}`);
    console.log('Extensiones encontradas:', 
      Object.values(fotoMap).reduce((acc, ext) => {
        acc[ext] = (acc[ext] || 0) + 1;
        return acc;
      }, {}));
    console.log('\n');

    // 5. Obtener todos los atletas de la base de datos
    const atletasResult = await pool.query('SELECT id, nombre, apellido FROM atletas');
    console.log(`👥 Atletas en BD: ${atletasResult.rows.length}\n`);

    // 6. Actualizar URLs
    let actualizados = 0;
    let sinFoto = 0;

    for (const atleta of atletasResult.rows) {
      const extension = fotoMap[atleta.id];
      
      if (extension) {
        const nuevaUrl = `${supabaseUrl}/storage/v1/object/public/${supabaseBucket}/AtletasFotos/${atleta.id}.${extension}`;
        
        await pool.query(
          'UPDATE atletas SET foto_url = $1 WHERE id = $2',
          [nuevaUrl, atleta.id]
        );
        
        actualizados++;
        console.log(`✅ Actualizado: ${atleta.nombre} ${atleta.apellido} (ID: ${atleta.id}) - .${extension}`);
      } else {
        sinFoto++;
        console.log(`⚠️  Sin foto: ${atleta.nombre} ${atleta.apellido} (ID: ${atleta.id})`);
      }
    }

    // 7. Resumen
    console.log('\n=== RESUMEN ===');
    console.log(`✅ URLs actualizadas: ${actualizados}`);
    console.log(`⚠️  Sin foto: ${sinFoto}`);
    console.log('\n✅ Proceso completado');

    await pool.end();
    process.exit(0);

  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

corregirURLsFotos();
