const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseBucket = process.env.SUPABASE_BUCKET;

async function checkMacrociclos() {
  try {
    console.log('=== VERIFICACIÓN DE MACROCICLOS ===\n');

    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log('✅ Conectado a Supabase');

    // Descargar el archivo JSON
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

    // Mostrar estructura del primer macrociclo
    console.log('📋 Estructura del primer macrociclo:');
    console.log(JSON.stringify(macrociclosData[0], null, 2));
    console.log('\n');

    // Mostrar estructura del segundo si hay
    if (macrociclosData.length > 1) {
      console.log('📋 Estructura del segundo macrociclo:');
      console.log(JSON.stringify(macrociclosData[1], null, 2));
      console.log('\n');
    }

    // Analizar campos comunes
    const firstMacro = macrociclosData[0];
    console.log('🔍 Campos encontrados en el primer macrociclo:');
    Object.keys(firstMacro).forEach(key => {
      const value = firstMacro[key];
      const type = Array.isArray(value) ? 'array' : typeof value;
      console.log(`  - ${key}: ${type}`);
      if (Array.isArray(value) && value.length > 0) {
        console.log(`    └─ Primer elemento: ${JSON.stringify(value[0])}`);
      }
    });

    process.exit(0);

  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

checkMacrociclos();
