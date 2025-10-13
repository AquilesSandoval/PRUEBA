const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');

// Configuración de Supabase desde variables de entorno
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseBucket = process.env.SUPABASE_BUCKET;

// Configuración de PostgreSQL
const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL
});

async function importarAtletas() {
  try {
    console.log('=== IMPORTACIÓN DE ATLETAS DESDE SUPABASE ===\n');

    // 1. Conectar a Supabase
    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log('✅ Conectado a Supabase');

    // 2. Listar fotos para mapear extensiones
    console.log('📸 Detectando extensiones de fotos...');
    const { data: files, error: listError } = await supabase
      .storage
      .from(supabaseBucket)
      .list('AtletasFotos', {
        limit: 1000,
        sortBy: { column: 'name', order: 'asc' }
      });

    if (listError) {
      console.warn('⚠️  No se pudieron listar fotos:', listError.message);
    }

    // Crear mapa de ID a extensión
    const fotoMap = {};
    if (files) {
      files.forEach(file => {
        const match = file.name.match(/^(\d+)\.(jpg|jpeg|png)$/i);
        if (match) {
          fotoMap[match[1]] = match[2].toLowerCase();
        }
      });
      console.log(`✅ ${Object.keys(fotoMap).length} fotos mapeadas\n`);
    }

    // 3. Descargar el archivo JSON
    console.log('📥 Descargando datos_atletas_completo.json...');
    const { data: fileData, error: downloadError } = await supabase
      .storage
      .from(supabaseBucket)
      .download('Atletas/datos_atletas_completo.json');

    if (downloadError) {
      throw new Error('Error al descargar JSON: ' + downloadError.message);
    }

    // 4. Leer el contenido del archivo
    const jsonText = await fileData.text();
    const atletasData = JSON.parse(jsonText);

    console.log(`✅ JSON descargado: ${atletasData.length} atletas encontrados\n`);

    // 4. Mostrar estructura del primer atleta para verificar campos
    console.log('📋 Estructura del primer atleta:');
    console.log(JSON.stringify(atletasData[0], null, 2));
    console.log('\n');

    // 5. Procesar cada atleta
    let insertados = 0;
    let actualizados = 0;
    let errores = 0;

    for (const atleta of atletasData) {
      try {
        // Generar la URL de la foto desde Supabase Storage con extensión correcta
        const extension = fotoMap[atleta.id] || 'jpg'; // Default a jpg si no se encuentra
        const fotoUrl = `${supabaseUrl}/storage/v1/object/public/${supabaseBucket}/AtletasFotos/${atleta.id}.${extension}`;

        // Verificar si el atleta ya existe
        const checkResult = await pool.query(
          'SELECT id FROM atletas WHERE id = $1',
          [atleta.id]
        );

        // Mapear campos del JSON a nombres correctos
        const nombre = atleta['Nombre(s)'] || atleta.nombre || '';
        const apellido = atleta['Apellidos'] || atleta.apellido || '';
        const fechaNacimiento = atleta['Fecha Nacimiento'] || atleta.fecha_nacimiento || null;
        const email = atleta['Correo'] || atleta.email || null;
        const telefono = atleta['Telefono'] || atleta.telefono || null;
        const deportePrincipal = atleta['Deporte'] || atleta.deporte_principal || null;

        if (checkResult.rows.length > 0) {
          // Actualizar atleta existente
          await pool.query(
            `UPDATE atletas SET
              nombre = $1,
              apellido = $2,
              fecha_nacimiento = $3,
              email = $4,
              telefono = $5,
              foto_url = $6,
              deporte_principal = $7,
              genero = $8,
              peso = $9,
              altura = $10,
              notas = $11,
              updated_at = CURRENT_TIMESTAMP
            WHERE id = $12`,
            [
              nombre,
              apellido,
              fechaNacimiento,
              email,
              telefono,
              fotoUrl,
              deportePrincipal,
              atleta.genero || null,
              atleta.peso || null,
              atleta.altura || null,
              atleta.notas || null,
              atleta.id
            ]
          );
          actualizados++;
          console.log(`🔄 Actualizado: ${nombre} ${apellido} (ID: ${atleta.id})`);
        } else {
          // Insertar nuevo atleta
          await pool.query(
            `INSERT INTO atletas 
            (id, nombre, apellido, fecha_nacimiento, email, telefono, foto_url, 
             deporte_principal, genero, peso, altura, notas, activo)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, true)`,
            [
              atleta.id,
              nombre,
              apellido,
              fechaNacimiento,
              email,
              telefono,
              fotoUrl,
              deportePrincipal,
              atleta.genero || null,
              atleta.peso || null,
              atleta.altura || null,
              atleta.notas || null
            ]
          );
          insertados++;
          console.log(`✅ Insertado: ${nombre} ${apellido} (ID: ${atleta.id})`);
        }
      } catch (atletaError) {
        errores++;
        console.error(`❌ Error procesando atleta ${atleta.id}:`, atletaError.message);
      }
    }

    // 6. Mostrar resumen
    console.log('\n=== RESUMEN DE IMPORTACIÓN ===');
    console.log(`Total de atletas en JSON: ${atletasData.length}`);
    console.log(`✅ Insertados: ${insertados}`);
    console.log(`🔄 Actualizados: ${actualizados}`);
    console.log(`❌ Errores: ${errores}`);
    console.log('\n✅ Importación completada exitosamente');

    // 7. Cerrar conexión
    await pool.end();
    process.exit(0);

  } catch (error) {
    console.error('\n❌ ERROR FATAL:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Ejecutar importación
importarAtletas();
