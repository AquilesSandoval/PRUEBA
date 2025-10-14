const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const diasMap = {
  'Lunes': 'Lunes', 'Martes': 'Martes', 'Miércoles': 'Miercoles', 'Miercoles': 'Miercoles',
  'Jueves': 'Jueves', 'Viernes': 'Viernes', 'Sábado': 'Sabado', 'Sabado': 'Sabado', 'Domingo': 'Domingo'
};

(async () => {
  const client = await pool.connect();
  
  try {
    console.log('=== IMPORTACIÓN COMPLETA DE MACROCICLOS ===\n');
    
    // Descargar archivo
    const { data } = await supabase.storage.from(process.env.SUPABASE_BUCKET).download('Macrociclo/macrociclo-completo.json');
    const macros = JSON.parse(await data.text());
    console.log(`✅ ${macros.length} macrociclos encontrados\n`);
    
    let totalMacros = 0;
    let totalSesiones = 0;
    
    for (const macro of macros) {
      const deporte = macro.combobox?.find(c => c.name === 'sport_select')?.selected || 'Deporte';
      const distancia = macro.combobox?.find(c => c.name === 'distance_select')?.selected || '--';
      const nombreMacro = `${deporte} - ${distancia} (ID: ${macro.id})`;
      
      // Verificar si ya existe
      const existe = await client.query('SELECT id FROM macrociclos WHERE nombre = $1', [nombreMacro]);
      if (existe.rows.length > 0) {
        console.log(`⏭️  Saltando duplicado: ${nombreMacro}`);
        continue;
      }
      
      const numSemanas = macro.semanas?.length || 1;
      const fechaInicio = new Date();
      const fechaFin = new Date();
      fechaFin.setDate(fechaFin.getDate() + (numSemanas * 7));
      
      // Insertar macrociclo
      const macroResult = await client.query(
        `INSERT INTO macrociclos (atleta_id, nombre, descripcion, fecha_inicio, fecha_fin, objetivo_principal, estado)
         VALUES (NULL, $1, $2, $3, $4, $5, 'planificado') RETURNING id`,
        [nombreMacro, `Macrociclo de ${deporte} ${distancia}`, fechaInicio.toISOString().split('T')[0],
         fechaFin.toISOString().split('T')[0], `Preparación ${deporte} - ${distancia}`]
      );
      
      const macrocicloId = macroResult.rows[0].id;
      const sesiones = [];
      
      // Recolectar todas las sesiones
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
            const descripcionCompleta = (ejercicio.descripciones || []).join('\n');
            let horaFormateada = ejercicio.hora || '00:00:00';
            if (horaFormateada.length === 5) horaFormateada = `${horaFormateada}:00`;
            
            sesiones.push({
              macrocicloId,
              fecha: fechaDia.toISOString().split('T')[0],
              hora: horaFormateada,
              nombre: nombreSesion,
              descripcion: descripcionCompleta
            });
          }
        }
      }
      
      // Insertar sesiones en batch
      if (sesiones.length > 0) {
        const values = sesiones.map((s, i) => 
          `(NULL, NULL, ${s.macrocicloId}, '${s.fecha}', '${s.hora}', $${i*2+1}, $${i*2+2}, 'planificada')`
        ).join(',');
        
        const params = sesiones.flatMap(s => [s.nombre, s.descripcion]);
        
        await client.query(
          `INSERT INTO sesiones (atleta_id, microciclo_id, macrociclo_id, fecha, hora, nombre_sesion, descripcion, estado) 
           VALUES ${values}`,
          params
        );
      }
      
      console.log(`✅ ${nombreMacro} → ${sesiones.length} sesiones`);
      totalMacros++;
      totalSesiones += sesiones.length;
    }
    
    console.log(`\n=== RESUMEN ===`);
    console.log(`✅ Macrociclos: ${totalMacros}`);
    console.log(`✅ Sesiones: ${totalSesiones}`);
    
    // Mostrar orden
    const orden = await client.query('SELECT id, nombre FROM macrociclos ORDER BY id ASC LIMIT 5');
    console.log(`\n📋 Primeros 5 (orden ascendente):`);
    orden.rows.forEach(r => console.log(`   ${r.id}: ${r.nombre}`));
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
})();
