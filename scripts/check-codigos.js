import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const bucketName = process.env.SUPABASE_BUCKET;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkCodigos() {
  try {
    const { data, error } = await supabase.storage
      .from(bucketName)
      .download('Macrociclo/codigos_macrociclos.txt');

    if (error) {
      console.error('Error:', error);
      return;
    }

    const text = await data.text();
    console.log('CONTENIDO COMPLETO DEL ARCHIVO:');
    console.log('='.repeat(80));
    console.log(text);
    console.log('='.repeat(80));
    
    const codigos = text.split(',').map(c => c.trim()).filter(c => c);
    console.log(`\nTotal de códigos encontrados: ${codigos.length}`);
    console.log('\nLista numerada de códigos:');
    codigos.forEach((codigo, i) => {
      console.log(`${i + 1}. ${codigo}`);
    });

  } catch (error) {
    console.error('Error:', error);
  }
}

checkCodigos();
