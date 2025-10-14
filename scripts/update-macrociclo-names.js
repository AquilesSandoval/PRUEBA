import { createClient } from '@supabase/supabase-js';
import pkg from 'pg';
const { Client } = pkg;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const bucketName = process.env.SUPABASE_BUCKET;

const supabase = createClient(supabaseUrl, supabaseKey);

const dbClient = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function updateMacrocicloNames() {
  try {
    await dbClient.connect();
    console.log('Conectado a la base de datos');

    console.log('Descargando codigos_macrociclos.txt desde Supabase Storage...');
    const { data, error } = await supabase.storage
      .from(bucketName)
      .download('Macrociclo/codigos_macrociclos.txt');

    if (error) {
      console.error('Error descargando archivo:', error);
      return;
    }

    const text = await data.text();
    const codigos = text.split(',').map(c => c.trim()).filter(c => c);
    
    console.log(`✅ Descargados ${codigos.length} códigos`);
    console.log('Primeros 5 códigos:', codigos.slice(0, 5));

    const result = await dbClient.query(
      'SELECT id FROM macrociclos ORDER BY id ASC'
    );
    
    const macrociclos = result.rows;
    console.log(`\n📊 Encontrados ${macrociclos.length} macrociclos en DB`);
    console.log(`Rango de IDs: ${macrociclos[0].id} - ${macrociclos[macrociclos.length - 1].id}`);

    if (macrociclos.length !== codigos.length) {
      console.error(`❌ ERROR: ${macrociclos.length} macrociclos pero ${codigos.length} códigos`);
      return;
    }

    console.log('\n🔄 Actualizando nombres...');
    for (let i = 0; i < macrociclos.length; i++) {
      const macroId = macrociclos[i].id;
      const codigo = codigos[i];

      await dbClient.query(
        'UPDATE macrociclos SET nombre = $1 WHERE id = $2',
        [codigo, macroId]
      );

      if ((i + 1) % 10 === 0 || i === 0 || i === macrociclos.length - 1) {
        console.log(`  ${i + 1}. ID ${macroId} → "${codigo}"`);
      }
    }

    console.log('\n✅ Nombres actualizados correctamente');

    const verify = await dbClient.query(
      'SELECT id, nombre FROM macrociclos ORDER BY id ASC LIMIT 5'
    );
    console.log('\n📋 Verificación (primeros 5):');
    verify.rows.forEach(row => {
      console.log(`  ID ${row.id}: ${row.nombre}`);
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await dbClient.end();
  }
}

updateMacrocicloNames();
