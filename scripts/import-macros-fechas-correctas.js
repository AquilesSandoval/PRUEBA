const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const diasMap = {
  'Lunes': 0,
  'Martes': 1,
  'Miércoles': 2,
  'Miercoles': 2,
  'Jueves': 3,
  'Viernes': 4,
  'Sábado': 5,
  'Sabado': 5,
  'Domingo': 6
};

(async () => {
  try {
    console.log('=== IMPORTACIÓN CORRECTA DE MACROCICLOS ===\n');
    
    const { data } = await supabase.storage.from(process.env.SUPABASE_BUCKET).download('Macrociclo/macrociclo-completo.json');
    const macros = JSON.parse(await data.text());
    console.log(`✅ ${macros.length} macrociclos en archivo\n`);
    
    let totalMacros = 0;
    let totalSesiones = 0;
    
    for (const macro of macros) {
      const deporte = macro.combobox?.find(c => c.name === 'sport_select')?.selected || 'Deporte';
      const distancia = macro.combobox?.find(c => c.name === 'distance_select')?.selected || '--';
      const nombreMacro = `${deporte} - ${distancia} (ID: ${macro.id})`;
      
      const numSemanas = macro.semanas?.length || 1;
      
      // Usar una fecha de inicio fija: 2025-01-06 (lunes)
      const fechaInicio = new Date('2025-01-06');
      const fechaFin = new Date(fechaInicio);
      fechaFin.setDate(fechaFin.getDate() + (numSemanas * 7));
      
      const macroResult = await pool.query(
        `INSERT INTO macrociclos (atleta_id, nombre, descripcion, fecha_inicio, fecha_fin, objetivo_principal, estado)
         VALUES (NULL, $1, $2, $3, $4, $5, 'planificado') RETURNING id`,
        [nombreMacro, `Macrociclo ${deporte} ${distancia}`, fechaInicio.toISOString().split('T')[0],
         fechaFin.toISOString().split('T')[0], `Preparación ${deporte} - ${distancia}`]
      );
      
      const macrocicloId = macroResult.rows[0].id;
      const sesionesData = [];
      
      // Procesar cada semana
      for (let semanaIndex = 0; semanaIndex < (macro.semanas || []).length; semanaIndex++) {
        const semana = macro.semanas[semanaIndex];
        
        // Calcular fecha de inicio de esta semana: fecha_inicio + (semanaIndex * 7 días)
        const inicioSemana = new Date(fechaInicio);
        inicioSemana.setDate(inicioSemana.getDate() + (semanaIndex * 7));
        
        // Procesar cada día
        for (const dia of (semana.dias || [])) {
          const diaOffset = diasMap[dia.nombre] !== undefined ? diasMap[dia.nombre] : 0;
          
          // Fecha del día = inicio de semana + offset del día
          const fechaDia = new Date(inicioSemana);
          fechaDia.setDate(inicioSemana.getDate() + diaOffset);
          
          // Procesar cada ejercicio del día
          for (const ejercicio of (dia.ejercicios || [])) {
            const nombreSesion = ejercicio.nombreSesion || 'Sin nombre';
            const descripcion = (ejercicio.descripciones || []).join('\n');
            let hora = ejercicio.hora || '00:00';
            if (hora.length === 5) hora = `${hora}:00`;
            
            sesionesData.push({
              macrocicloId,
              fecha: fechaDia.toISOString().split('T')[0],
              hora,
              nombre: nombreSesion,
              descripcion
            });
          }
        }
      }
      
      // Insertar sesiones en lotes
      const BATCH_SIZE = 100;
      for (let i = 0; i < sesionesData.length; i += BATCH_SIZE) {
        const batch = sesionesData.slice(i, i + BATCH_SIZE);
        const values = batch.map((_, idx) => {
          const offset = idx * 5;
          return `(NULL, NULL, $${offset+1}, $${offset+2}, $${offset+3}, $${offset+4}, $${offset+5}, 'planificada')`;
        }).join(',');
        
        const params = batch.flatMap(s => [s.macrocicloId, s.fecha, s.hora, s.nombre, s.descripcion]);
        
        await pool.query(
          `INSERT INTO sesiones (atleta_id, microciclo_id, macrociclo_id, fecha, hora, nombre_sesion, descripcion, estado) 
           VALUES ${values}`,
          params
        );
      }
      
      console.log(`✅ ${nombreMacro} → ${numSemanas} semanas, ${sesionesData.length} sesiones`);
      totalMacros++;
      totalSesiones += sesionesData.length;
    }
    
    console.log(`\n=== RESUMEN ===`);
    console.log(`✅ Macrociclos: ${totalMacros}`);
    console.log(`✅ Sesiones: ${totalSesiones}`);
    
    const check = await pool.query(`
      SELECT 
        COUNT(*) as macros, 
        (SELECT COUNT(*) FROM sesiones WHERE macrociclo_id IS NOT NULL) as sesiones 
      FROM macrociclos
    `);
    console.log(`\n📊 BD: ${check.rows[0].macros} macrociclos, ${check.rows[0].sesiones} sesiones`);
    
    // Verificar cálculo de semanas
    const semanaCheck = await pool.query(`
      SELECT 
        m.nombre,
        s.fecha,
        m.fecha_inicio,
        EXTRACT(WEEK FROM s.fecha) - EXTRACT(WEEK FROM m.fecha_inicio) + 1 as semana_calculada
      FROM sesiones s
      JOIN macrociclos m ON s.macrociclo_id = m.id
      WHERE m.nombre LIKE '%ID: 1736%'
      ORDER BY s.fecha
      LIMIT 5
    `);
    
    console.log(`\n🔍 Verificación de cálculo de semanas (Macrociclo 1736):`);
    semanaCheck.rows.forEach(row => {
      console.log(`   Fecha: ${row.fecha}, Semana calculada: ${row.semana_calculada}`);
    });
    
    await pool.end();
  } catch (error) {
    console.error('❌ Error:', error.message);
    await pool.end();
    process.exit(1);
  }
})();
