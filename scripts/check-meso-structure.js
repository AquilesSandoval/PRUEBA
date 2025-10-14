const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function checkJson() {
  const { data } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET)
    .download('Mesociclo/mesociclo-completo.json');
  
  const text = await data.text();
  const jsonData = JSON.parse(text);
  
  console.log('Total mesociclos:', jsonData.length);
  console.log('\nPrimera entrada:');
  console.log(JSON.stringify(jsonData[0], null, 2));
  
  console.log('\nSegunda entrada:');
  console.log(JSON.stringify(jsonData[1], null, 2));
}

checkJson();
