const { createClient } = require('@supabase/supabase-js');
const { Client } = require('pg');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const bucketName = process.env.SUPABASE_BUCKET;
const supabase = createClient(supabaseUrl, supabaseKey);

const client = new Client({
    connectionString: process.env.DATABASE_URL
});

const carpetas = [
    'Automasaje',
    'Calentamiento_Natacion_con_Elasticos',
    'Embarazadas',
    'FUNCIONALES_EN_CASA',
    'Lanzamientos',
    'QR_4.15.1',
    'QR_4.15.2',
    'QR_4.15.3',
    'QR_4.15.4',
    'Saltos',
    'Tecnica_de_Carrera',
    'Tecnica_de_Nado',
    'Todo'
];

async function importEjercicios() {
    try {
        await client.connect();
        console.log('Conectado a la base de datos PostgreSQL');

        let totalImported = 0;

        for (const carpeta of carpetas) {
            console.log(`\n📁 Procesando carpeta: ${carpeta}`);
            
            const { data: files, error } = await supabase.storage
                .from(bucketName)
                .list(`Ejercicios/${carpeta}`, { limit: 1000 });

            if (error) {
                console.error(`❌ Error listando archivos de ${carpeta}:`, error);
                continue;
            }

            // Agrupar archivos por nombre base
            const ejerciciosMap = new Map();
            
            files.forEach(file => {
                const fileNameParts = file.name.split('.');
                const extension = fileNameParts.pop();
                const baseName = fileNameParts.join('.');
                
                if (!ejerciciosMap.has(baseName)) {
                    ejerciciosMap.set(baseName, {
                        baseName,
                        json: null,
                        imagen: null,
                        video: null
                    });
                }
                
                const ejercicio = ejerciciosMap.get(baseName);
                if (extension === 'json') ejercicio.json = file.name;
                if (extension === 'jpg' || extension === 'png') ejercicio.imagen = file.name;
                if (extension === 'mp4') ejercicio.video = file.name;
            });

            // Importar cada ejercicio
            for (const [baseName, archivos] of ejerciciosMap) {
                if (!archivos.json) {
                    console.log(`⚠️  Saltando ${baseName} - no tiene JSON`);
                    continue;
                }

                try {
                    // Descargar y parsear JSON
                    const { data: jsonData, error: jsonError } = await supabase.storage
                        .from(bucketName)
                        .download(`Ejercicios/${carpeta}/${archivos.json}`);

                    if (jsonError) {
                        console.error(`❌ Error descargando JSON ${archivos.json}:`, jsonError);
                        continue;
                    }

                    const jsonText = await jsonData.text();
                    const ejercicioData = JSON.parse(jsonText);

                    // Construir rutas públicas de Supabase
                    const imagenPath = archivos.imagen 
                        ? `${supabaseUrl}/storage/v1/object/public/${bucketName}/Ejercicios/${carpeta}/${archivos.imagen}`
                        : null;
                    
                    const videoPath = archivos.video
                        ? `${supabaseUrl}/storage/v1/object/public/${bucketName}/Ejercicios/${carpeta}/${archivos.video}`
                        : null;

                    // Insertar en la base de datos
                    await client.query(`
                        INSERT INTO ejercicios (
                            carpeta,
                            nombre,
                            descripcion_atleta,
                            categoria,
                            nivel,
                            deporte,
                            tipo,
                            descripcion_tecnica,
                            imagen_path,
                            video_path,
                            activo
                        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
                        ON CONFLICT DO NOTHING
                    `, [
                        carpeta,
                        ejercicioData.Nombre || baseName,
                        ejercicioData['Descripción atleta'] || ejercicioData.descripcion_atleta || '',
                        ejercicioData['Categoría'] || ejercicioData.categoria || 'otro',
                        ejercicioData.Nivel || ejercicioData.nivel || 'intermedio',
                        ejercicioData.Deporte || ejercicioData.deporte || 'Varios',
                        ejercicioData.Tipo || ejercicioData.tipo || '',
                        ejercicioData['Descripción técnica'] || ejercicioData.descripcion_tecnica || '',
                        imagenPath,
                        videoPath,
                        ejercicioData.Activo === '1' || ejercicioData.activo === true
                    ]);

                    totalImported++;
                    console.log(`✅ ${baseName} importado correctamente`);

                } catch (err) {
                    console.error(`❌ Error procesando ${baseName}:`, err.message);
                }
            }

            console.log(`✅ Carpeta ${carpeta} procesada - ${ejerciciosMap.size} ejercicios encontrados`);
        }

        console.log(`\n🎉 Importación completada: ${totalImported} ejercicios importados`);

    } catch (error) {
        console.error('❌ Error general:', error);
    } finally {
        await client.end();
        console.log('Conexión a la base de datos cerrada');
    }
}

// Ejecutar importación
importEjercicios().catch(console.error);
