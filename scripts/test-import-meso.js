const { Pool } = require('pg');
const { createClient } = require('@supabase/supabase-js');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function importar() {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    );

    const { data: fileData } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .download('Mesociclo/mesociclo-completo.json');

    const mesociclosData = JSON.parse(await fileData.text());
    
    // Find one mesociclo with sessions
    const mesoConSesiones = mesociclosData.find(m => 
      m.semanas && m.semanas.some(s => 
        s.dias && s.dias.some(d => 
          d.ejercicios && d.ejercicios.length > 0
        )
      )
    );

    if (!mesoConSesiones) {
      console.log('No se encontró mesociclo con sesiones');
      return;
    }

    console.log('Mesociclo encontrado:', mesoConSesiones.id);
    console.log('Estructura de semanas:', mesoConSesiones.semanas.length);
    
    if (mesoConSesiones.semanas[0]) {
      console.log('Primera semana:', JSON.stringify(mesoConSesiones.semanas[0], null, 2).substring(0, 500));
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await pool.end();
  }
}

importar();
