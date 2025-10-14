const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const diasMap = {
  'Lunes': 'Lunes', 'Martes': 'Martes', 'Miércoles': 'Miercoles', 'Miercoles': 'Miercoles',
  'Jueves': 'Jueves', 'Viernes': 'Viernes', 'Sábado': 'Sabado', 'Sabado': 'Sabado', 'Domingo': 'Domingo'
};

(async () => {
  try {
    console.log('=== IMPORTACIÓN DE MACROCICLOS ===\n');
    
    const { data } = await supabase.storage.from(process.env.SUPABASE_BUCKET).download('Macrociclo/macrociclo-completo.json');
    const macros = JSON.parse(await data.text());
    console.log(`✅ ${macros.length} macrociclos en archivo\n`);
    
    let totalMacros = 0;
    let totalSesiones = 0;
    
    for (const macro of macros) {
      const deporte = macro.combobox?.find(c => c.name === 'sport_select')?.selected || 'Deporte';
      const distancia = macro.combobox?.find(c => c.name === 'distance_select')?.selected || '--';
      const nombreMacro = `${deporte} - ${distancia} (ID: ${macro.id})`;
      
      // Verificar si existe
      const existe = await pool.query('SELECT id FROM macrociclos WHERE nombre = $1', [nombreMacro]);
      if (existe.rows.length > 0) {
        console.log(`⏭️  Ya existe: ${nombreMacro}`);
        continue;
      }
      
      const numSemanas = macro.semanas?.length || 1;
      const fechaInicio = new Date();
      const fechaFin = new Date();
      fechaFin.setDate(fechaFin.getDate() + (numSemanas * 7));
      
      const macroResult = await pool.query(
        `INSERT INTO macrociclos (atleta_id, nombre, descripcion, fecha_inicio, fecha_fin, objetivo_principal, estado)
         VALUES (NULL, $1, $2, $3, $4, $5, 'planificado') RETURNING id`,
        [nombreMacro, `Macrociclo ${deporte} ${distancia}`, fechaInicio.toISOString().split('T')[0],
         fechaFin.toISOString().split('T')[0], `Preparación ${deporte} - ${distancia}`]
      );
      
      const macrocicloId = macroResult.rows[0].id;
      const sesionesData = [];
      
      // Recolectar sesiones
      for (let semanaIndex = 0; semanaIndex < (macro.semanas || []).length; semanaIndex++) {
        const semana = macro.semanas[semanaIndex];
        const inicioSemana = new Date(fechaInicio);
        inicioSemana.setDate(inicioSemana.getDate() + (semanaIndex * 7));
        
        for (const dia of (semana.dias || [])) {
          const diaEnum = diasMap[dia.nombre] || dia.nombre;
          const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
          const diaIndex = diasSemana.indexOf(diaEnum);
          const fechaDia = new Date(inicioSemana);
          
          if (diaIndex >= 0) {
            const diff = (diaIndex - inicioSemana.getDay() + 7) % 7;
            fechaDia.setDate(inicioSemana.getDate() + diff);
          }
          
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
      
      // Insertar sesiones en lotes de 100
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
      
      console.log(`✅ ${nombreMacro} → ${sesionesData.length} sesiones`);
      totalMacros++;
      totalSesiones += sesionesData.length;
    }
    
    console.log(`\n=== RESUMEN ===`);
    console.log(`✅ Macrociclos: ${totalMacros}`);
    console.log(`✅ Sesiones: ${totalSesiones}`);
    
    const check = await pool.query('SELECT COUNT(*) as macros, (SELECT COUNT(*) FROM sesiones WHERE macrociclo_id IS NOT NULL) as sesiones FROM macrociclos');
    console.log(`\n📊 BD: ${check.rows[0].macros} macrociclos, ${check.rows[0].sesiones} sesiones`);
    
    await pool.end();
  } catch (error) {
    console.error('❌ Error:', error.message);
    await pool.end();
    process.exit(1);
  }
})();
