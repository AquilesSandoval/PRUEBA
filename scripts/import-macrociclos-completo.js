const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Mapeo de días para normalizar nombres
const diasMap = {
  'Lunes': 'Lunes',
  'Martes': 'Martes',
  'Miércoles': 'Miercoles',
  'Miercoles': 'Miercoles',
  'Jueves': 'Jueves',
  'Viernes': 'Viernes',
  'Sábado': 'Sabado',
  'Sabado': 'Sabado',
  'Domingo': 'Domingo'
};

(async () => {
  try {
    console.log('=== IMPORTACIÓN COMPLETA DE MACROCICLOS ===\n');
    
    // Descargar archivo JSON
    console.log('📥 Descargando Macrociclo/macrociclo-completo.json...');
    const { data, error } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .download('Macrociclo/macrociclo-completo.json');
    
    if (error) throw error;
    
    const macros = JSON.parse(await data.text());
    console.log(`✅ ${macros.length} macrociclos encontrados en el archivo\n`);
    
    let totalMacros = 0;
    let totalSesiones = 0;
    
    for (const macro of macros) {
      // Extraer datos del combobox
      const deporte = macro.combobox?.find(c => c.name === 'sport_select')?.selected || 'Deporte';
      const distancia = macro.combobox?.find(c => c.name === 'distance_select')?.selected || '--';
      
      // Crear nombre del macrociclo
      const nombreMacro = `${deporte} - ${distancia} (ID: ${macro.id})`;
      
      // Calcular fechas basadas en número de semanas
      const numSemanas = macro.semanas?.length || 1;
      const fechaInicio = new Date();
      const fechaFin = new Date();
      fechaFin.setDate(fechaFin.getDate() + (numSemanas * 7));
      
      // Insertar macrociclo
      const macroResult = await pool.query(
        `INSERT INTO macrociclos (atleta_id, nombre, descripcion, fecha_inicio, fecha_fin, objetivo_principal, estado)
         VALUES (NULL, $1, $2, $3, $4, $5, 'planificado') RETURNING id`,
        [
          nombreMacro,
          `Macrociclo de ${deporte} para distancia ${distancia}`,
          fechaInicio.toISOString().split('T')[0],
          fechaFin.toISOString().split('T')[0],
          `Preparación para ${deporte} - ${distancia}`
        ]
      );
      
      const macrocicloId = macroResult.rows[0].id;
      let sesionesCreadas = 0;
      
      // Procesar cada semana
      for (let semanaIndex = 0; semanaIndex < (macro.semanas || []).length; semanaIndex++) {
        const semana = macro.semanas[semanaIndex];
        
        // Calcular fecha de inicio de la semana
        const inicioSemana = new Date(fechaInicio);
        inicioSemana.setDate(inicioSemana.getDate() + (semanaIndex * 7));
        
        // Procesar cada día de la semana
        for (const dia of (semana.dias || [])) {
          const diaEnum = diasMap[dia.nombre] || dia.nombre;
          
          // Calcular fecha específica del día
          const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
          const diaIndex = diasSemana.indexOf(diaEnum);
          const fechaDia = new Date(inicioSemana);
          
          if (diaIndex >= 0) {
            const diff = (diaIndex - inicioSemana.getDay() + 7) % 7;
            fechaDia.setDate(inicioSemana.getDate() + diff);
          }
          
          // Procesar cada ejercicio del día
          for (const ejercicio of (dia.ejercicios || [])) {
            // Respetar TODOS los campos del ejercicio
            const nombreSesion = ejercicio.nombreSesion || 'Sin nombre';
            const descripciones = ejercicio.descripciones || [];
            const hora = ejercicio.hora || '00:00:00';
            
            // Unir descripciones con saltos de línea
            const descripcionCompleta = descripciones.join('\n');
            
            // Convertir hora a formato HH:MM:SS si es necesario
            let horaFormateada = hora;
            if (hora.length === 5) { // formato "00:00"
              horaFormateada = `${hora}:00`;
            }
            
            // Insertar sesión con TODOS los datos
            await pool.query(
              `INSERT INTO sesiones (
                atleta_id, 
                microciclo_id, 
                macrociclo_id, 
                fecha, 
                hora, 
                nombre_sesion, 
                descripcion, 
                estado
              ) VALUES (NULL, NULL, $1, $2, $3, $4, $5, 'planificada')`,
              [
                macrocicloId,
                fechaDia.toISOString().split('T')[0],
                horaFormateada,
                nombreSesion,
                descripcionCompleta
              ]
            );
            
            sesionesCreadas++;
          }
        }
      }
      
      console.log(`✅ ${nombreMacro}`);
      console.log(`   └─ ${semana.dias ? semana.dias.length : 0} días × ${macro.semanas?.length || 0} semanas = ${sesionesCreadas} sesiones`);
      
      totalMacros++;
      totalSesiones += sesionesCreadas;
    }
    
    console.log('\n=== RESUMEN FINAL ===');
    console.log(`✅ Macrociclos importados: ${totalMacros}`);
    console.log(`✅ Sesiones creadas: ${totalSesiones}`);
    
    // Verificar orden
    const ordenResult = await pool.query(
      'SELECT id, nombre FROM macrociclos ORDER BY id ASC LIMIT 5'
    );
    console.log('\n📋 Primeros 5 macrociclos (orden ascendente por ID):');
    ordenResult.rows.forEach(row => {
      console.log(`   ${row.id}: ${row.nombre}`);
    });
    
    await pool.end();
    console.log('\n🎉 Importación completada exitosamente');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
})();
