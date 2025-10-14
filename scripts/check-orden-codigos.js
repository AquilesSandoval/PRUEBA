import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const bucketName = process.env.SUPABASE_BUCKET;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkOrden() {
  try {
    // Descargar JSON
    const { data: jsonData } = await supabase.storage
      .from(bucketName)
      .download('Mesociclo/mesociclo-completo.json');

    const mesociclosData = JSON.parse(await jsonData.text());

    // Descargar códigos
    const { data: codigosData } = await supabase.storage
      .from(bucketName)
      .download('Mesociclo/codigos_mesociclos.txt');

    const codigos = (await codigosData.text()).split(',').map(c => c.trim()).filter(c => c);

    console.log('📋 ORDEN DEL JSON Y CÓDIGOS:\n');
    console.log(`Total en JSON: ${mesociclosData.length}`);
    console.log(`Total códigos: ${codigos.length}\n`);

    console.log('Primeros 5 del JSON:');
    for (let i = 0; i < 5; i++) {
      console.log(`  ${i + 1}. ID ${mesociclosData[i].id} → Código: ${codigos[i]}`);
    }

    console.log(`\nÚltimos 3 del JSON:`);
    for (let i = mesociclosData.length - 3; i < mesociclosData.length; i++) {
      console.log(`  ${i + 1}. ID ${mesociclosData[i].id} → Código: ${codigos[i]}`);
    }

    // Verificar si 30901 es el primero
    const primeroEnJSON = mesociclosData[0].id;
    console.log(`\n🔍 El primer mesociclo en el JSON es ID: ${primeroEnJSON}`);
    console.log(`🔍 El primer código es: ${codigos[0]}`);
    
    if (primeroEnJSON === 30901) {
      console.log('\n✅ CORRECTO: ID 30901 es el primero en el JSON');
    } else {
      console.log(`\n⚠️  ATENCIÓN: El primero en el JSON es ID ${primeroEnJSON}, no 30901`);
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

checkOrden();
