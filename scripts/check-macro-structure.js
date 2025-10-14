const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

(async () => {
  try {
    const { data } = await supabase.storage.from(process.env.SUPABASE_BUCKET).download('Macrociclo/macrociclo-completo.json');
    const macros = JSON.parse(await data.text());
    
    console.log('=== ESTRUCTURA DEL PRIMER MACROCICLO ===\n');
    const primer = macros[0];
    console.log(JSON.stringify(primer, null, 2).substring(0, 3000));
    
    console.log('\n\n=== ESTRUCTURA DE UNA SEMANA ===\n');
    if (primer.semanas && primer.semanas[0]) {
      console.log(JSON.stringify(primer.semanas[0], null, 2).substring(0, 2000));
    }
    
    console.log('\n\n=== TODOS LOS CAMPOS DEL MACROCICLO ===');
    console.log(Object.keys(primer));
    
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
