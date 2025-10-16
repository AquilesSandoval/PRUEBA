const { createClient } = require('@supabase/supabase-js');

async function verificarEstructura() {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    );

    const { data: fileData } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .download('Macrociclo/macrociclo-completo.json');

    const macrociclosData = JSON.parse(await fileData.text());
    
    console.log('Total macrociclos:', macrociclosData.length);
    console.log('\nPrimer macrociclo:');
    console.log(JSON.stringify(macrociclosData[0], null, 2).substring(0, 1000));
    
    console.log('\nCampos del primer macrociclo:');
    console.log(Object.keys(macrociclosData[0]));
    
    console.log('\n\nPrimeros 5 macrociclos (id, combobox y semanas):');
    macrociclosData.slice(0, 5).forEach(m => {
      console.log(`\nID JSON: ${m.id}`);
      console.log(`Semanas: ${m.semanas?.length || 0}`);
      if (m.combobox && m.combobox[0]) {
        console.log(`Combobox[0]:`, JSON.stringify(m.combobox[0]));
      }
    });
    
    console.log('\n\nTodos los IDs del JSON:');
    console.log(macrociclosData.map(m => m.id).join(', '));

  } catch (error) {
    console.error('Error:', error);
  }
}

verificarEstructura();
