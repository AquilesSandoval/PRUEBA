const express = require('express');
const cors = require('cors');
const path = require('path');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = 5000;

// Database connection
const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL
});

// Supabase client initialization
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseBucket = process.env.SUPABASE_BUCKET;

let supabase = null;
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
  console.log('Supabase client initialized successfully');
} else {
  console.warn('Supabase credentials not found. Supabase features will be disabled.');
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, '..')));

// Special handling for files with spaces in their names
app.get('/INFORMES/REPORTES/LACTATO/INFORME%20LACTATO.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'INFORMES', 'REPORTES', 'LACTATO', 'INFORME LACTATO.html'));
});

// JWT Secret - MUST be set via environment variable
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error('FATAL: JWT_SECRET environment variable is not set!');
  console.error('Authentication cannot function without a secure JWT secret.');
  console.error('Please set the JWT_SECRET environment variable and restart the server.');
  process.exit(1);
}

// Authentication endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Usuario y contraseña son requeridos' 
      });
    }

    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1 AND activo = true',
      [username]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ 
        success: false, 
        message: 'Usuario o contraseña incorrectos' 
      });
    }

    const user = result.rows[0];
    const validPassword = await bcrypt.compare(password, user.password_hash);

    if (!validPassword) {
      return res.status(401).json({ 
        success: false, 
        message: 'Usuario o contraseña incorrectos' 
      });
    }

    const token = jwt.sign(
      { 
        id: user.id, 
        username: user.username, 
        rol: user.rol 
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      message: 'Login exitoso',
      token: token,
      user: {
        id: user.id,
        username: user.username,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error en el servidor' 
    });
  }
});

// API Routes

// Pendientes (tasks) endpoints - stub responses for now
app.get('/api/pendientes', async (req, res) => {
  res.json([]);
});

app.post('/api/pendientes', async (req, res) => {
  res.json({ success: true, message: 'Pendiente creado' });
});

app.put('/api/pendientes/:id', async (req, res) => {
  res.json({ success: true, message: 'Pendiente actualizado' });
});

app.delete('/api/pendientes/:id', async (req, res) => {
  res.json({ success: true, message: 'Pendiente eliminado' });
});

// Ubicaciones endpoints - stub responses
app.post('/api/ubicaciones', async (req, res) => {
  res.json({ success: true, message: 'Ubicación guardada' });
});

app.delete('/api/ubicaciones', async (req, res) => {
  res.json({ success: true, message: 'Ubicación eliminada' });
});

// User data endpoints
app.post('/api/user-data', async (req, res) => {
  res.json({ success: true, message: 'Datos guardados' });
});

// Mesociclos folder endpoint
app.get('/api/mesociclos/folder', async (req, res) => {
  res.send('<option value="">Seleccione una carpeta</option>');
});

// Circuitos endpoints
app.delete('/api/circuitos/:id', async (req, res) => {
  res.json({ success: true, message: 'Circuito eliminado' });
});

// Sessions support endpoints
app.get('/api/sessions/cities', async (req, res) => {
  res.json([
    { id: 1, text: 'Madrid' },
    { id: 2, text: 'Barcelona' },
    { id: 3, text: 'Valencia' }
  ]);
});

app.get('/api/sessions/sports', async (req, res) => {
  res.send('<option value="1">Carrera</option><option value="2">Bici</option><option value="3">Natación</option>');
});

app.get('/api/sessions/disciplines', async (req, res) => {
  res.send('<option value="">Seleccione disciplina</option>');
});

app.get('/api/sessions/contains', async (req, res) => {
  res.send('<option value="8">Continuo</option><option value="9">Intervalos</option>');
});

app.get('/api/sessions/levels', async (req, res) => {
  res.send('<option value="1">Básico</option><option value="2">Intermedio</option><option value="3">Avanzado</option>');
});

// Language change endpoint
app.post('/api/language/change', async (req, res) => {
  res.json({ success: true });
});

// Activities endpoints
app.delete('/api/activities/:id', async (req, res) => {
  res.send('Exito');
});

// Athletes endpoints
app.get('/api/athletes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM atletas WHERE activo = true ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching athletes:', error);
    res.status(500).json({ error: 'Error fetching athletes' });
  }
});

app.get('/api/athletes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM atletas WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Athlete not found' });
    }
    res.json({ success: true, athlete: result.rows[0] });
  } catch (error) {
    console.error('Error fetching athlete:', error);
    res.status(500).json({ success: false, error: 'Error fetching athlete' });
  }
});

app.post('/api/athletes', async (req, res) => {
  try {
    const { 
      nombre, 
      apellido, 
      fecha_nacimiento, 
      email, 
      telefono, 
      deporte_principal, 
      genero, 
      peso, 
      altura,
      notas 
    } = req.body;
    
    // Validate required fields
    if (!nombre || !apellido) {
      return res.status(400).json({ 
        success: false,
        error: 'Nombre y apellido son requeridos' 
      });
    }
    
    // Validate nombre and apellido are strings and not empty after trim
    if (typeof nombre !== 'string' || nombre.trim() === '') {
      return res.status(400).json({ 
        success: false,
        error: 'Nombre debe ser un texto válido' 
      });
    }
    
    if (typeof apellido !== 'string' || apellido.trim() === '') {
      return res.status(400).json({ 
        success: false,
        error: 'Apellido debe ser un texto válido' 
      });
    }
    
    const result = await pool.query(
      `INSERT INTO atletas (
        nombre, apellido, fecha_nacimiento, email, telefono, 
        deporte_principal, genero, peso, altura, notas, activo
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, true) RETURNING *`,
      [nombre.trim(), apellido.trim(), fecha_nacimiento, email, telefono, deporte_principal, genero, peso, altura, notas]
    );
    
    res.status(201).json({
      success: true,
      message: 'Atleta creado exitosamente',
      atleta: result.rows[0]
    });
  } catch (error) {
    console.error('Error creating athlete:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al crear atleta',
      message: error.message 
    });
  }
});

app.put('/api/athletes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      nombre, 
      apellido, 
      fecha_nacimiento, 
      email, 
      telefono, 
      deporte_principal, 
      genero, 
      peso, 
      altura,
      notas 
    } = req.body;
    
    // Validate required fields
    if (!nombre || !apellido) {
      return res.status(400).json({ 
        success: false,
        error: 'Nombre y apellido son requeridos' 
      });
    }
    
    // Validate nombre and apellido are strings and not empty after trim
    if (typeof nombre !== 'string' || nombre.trim() === '') {
      return res.status(400).json({ 
        success: false,
        error: 'Nombre debe ser un texto válido' 
      });
    }
    
    if (typeof apellido !== 'string' || apellido.trim() === '') {
      return res.status(400).json({ 
        success: false,
        error: 'Apellido debe ser un texto válido' 
      });
    }
    
    const result = await pool.query(
      `UPDATE atletas SET 
        nombre = $1, apellido = $2, fecha_nacimiento = $3, email = $4, telefono = $5,
        deporte_principal = $6, genero = $7, peso = $8, altura = $9, notas = $10,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $11 RETURNING *`,
      [nombre.trim(), apellido.trim(), fecha_nacimiento, email, telefono, deporte_principal, genero, peso, altura, notas, id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Atleta no encontrado' });
    }
    
    res.json({
      success: true,
      message: 'Atleta actualizado exitosamente',
      atleta: result.rows[0]
    });
  } catch (error) {
    console.error('Error updating athlete:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al actualizar atleta',
      message: error.message 
    });
  }
});

app.delete('/api/athletes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Soft delete - just mark as inactive
    const result = await pool.query(
      'UPDATE atletas SET activo = false WHERE id = $1 RETURNING *',
      [id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Atleta no encontrado' });
    }
    
    res.json({
      success: true,
      message: 'Atleta eliminado exitosamente'
    });
  } catch (error) {
    console.error('Error deleting athlete:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al eliminar atleta',
      message: error.message 
    });
  }
});

// Sessions endpoints
app.get('/api/sessions', async (req, res) => {
  try {
    const { atleta_id } = req.query;
    let query = 'SELECT * FROM sesiones ORDER BY fecha DESC';
    let params = [];
    
    if (atleta_id) {
      query = 'SELECT * FROM sesiones WHERE atleta_id = $1 ORDER BY fecha DESC';
      params = [atleta_id];
    }
    
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching sessions:', error);
    res.status(500).json({ error: 'Error fetching sessions' });
  }
});

app.post('/api/sessions', async (req, res) => {
  try {
    const { atleta_id, fecha, nombre_sesion, tipo_sesion, duracion_minutos, distancia_km } = req.body;
    const result = await pool.query(
      'INSERT INTO sesiones (atleta_id, fecha, nombre_sesion, tipo_sesion, duracion_minutos, distancia_km) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [atleta_id, fecha, nombre_sesion, tipo_sesion, duracion_minutos, distancia_km]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating session:', error);
    res.status(500).json({ error: 'Error creating session' });
  }
});

// Informes endpoints
app.get('/api/informes/ergo/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `SELECT i.*, ie.*, a.nombre, a.apellido, a.foto_url 
       FROM informes i 
       JOIN informes_ergo ie ON i.id = ie.informe_id 
       JOIN atletas a ON i.atleta_id = a.id 
       WHERE i.id = $1`,
      [id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Report not found' });
    }
    
    // Transform to expected frontend format
    const row = result.rows[0];
    const data = {
      informe: {
        id: row.id,
        fecha: row.fecha_evaluacion,
        medico: row.evaluador,
        protocolo: row.protocolo_prueba,
        atleta: {
          nombre: row.nombre,
          apellido: row.apellido,
          foto: row.foto_url
        }
      },
      composicion_corporal: {
        peso_kg: 70,
        estatura_cm: 175,
        imc: 22.9,
        porcentaje_grasa: 15,
        porcentaje_musculo: 45,
        peso_graso_kg: 10.5,
        peso_muscular_kg: 31.5,
        comentario: row.conclusiones
      },
      gasto_energetico_reposo: {
        vo2_promedio: row.vo2max,
        fc_reposo: row.fc_reposo,
        gasto_diario_kcal: 2000,
        mets: 1.0,
        mets_ajustados: 1.0,
        rq: 0.85,
        cho_porcentaje: 50,
        grasa_porcentaje: 50,
        cho_gramos_dia: 250,
        grasa_gramos_dia: 100,
        grasa_esperada_porcentaje: 15,
        muscular_peso_ideal_porcentaje: 45,
        masa_grasa_perder_kg: 0,
        peso_ideal_kg: 70,
        comentario: row.recomendaciones_entrenamiento
      }
    };
    
    res.json(data);
  } catch (error) {
    console.error('Error fetching ergo report:', error);
    res.status(500).json({ error: 'Error fetching ergo report' });
  }
});

app.get('/api/informes/lactato/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `SELECT i.*, il.*, a.nombre, a.apellido, a.foto_url 
       FROM informes i 
       JOIN informes_lactato il ON i.id = il.informe_id 
       JOIN atletas a ON i.atleta_id = a.id 
       WHERE i.id = $1`,
      [id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Report not found' });
    }
    
    const row = result.rows[0];
    
    // Parsear datos_mediciones si es un string JSON
    let datosMediciones = {};
    if (row.datos_mediciones) {
      datosMediciones = typeof row.datos_mediciones === 'string' 
        ? JSON.parse(row.datos_mediciones) 
        : row.datos_mediciones;
    }
    
    const data = {
      success: true,
      informe: {
        id: row.id,
        atleta_nombre: `${row.nombre} ${row.apellido}`,
        fecha_prueba: row.fecha_prueba,
        deporte: row.deporte,
        protocolo_prueba: row.protocolo_prueba,
        umbral_aerobico_fc: row.umbral_aerobico_fc,
        umbral_aerobico_velocidad: row.umbral_aerobico_velocidad,
        umbral_aerobico_lactato: row.umbral_aerobico_lactato,
        umbral_anaerobico_fc: row.umbral_anaerobico_fc,
        umbral_anaerobico_velocidad: row.umbral_anaerobico_velocidad,
        umbral_anaerobico_lactato: row.umbral_anaerobico_lactato,
        datos_mediciones: datosMediciones,
        conclusiones: row.conclusiones,
        recomendaciones_entrenamiento: row.recomendaciones_entrenamiento,
        notas: row.notas,
        foto_url: row.foto_url
      }
    };
    
    res.json(data);
  } catch (error) {
    console.error('Error fetching lactato report:', error);
    res.status(500).json({ success: false, error: 'Error fetching lactato report' });
  }
});

// Get all athletes for informes page
app.get('/api/informes/athletes', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, nombre, apellido, email, telefono, foto_url, deporte_principal 
       FROM atletas 
       WHERE activo = true 
       ORDER BY nombre, apellido`
    );
    res.json({ success: true, athletes: result.rows });
  } catch (error) {
    console.error('Error fetching athletes for informes:', error);
    res.status(500).json({ error: 'Error fetching athletes' });
  }
});

// Get informes by athlete
app.get('/api/informes/by-athlete/:athleteId', async (req, res) => {
  try {
    const { athleteId } = req.params;
    const result = await pool.query(
      `SELECT i.*, 
              il.umbral_aerobico_fc as lactato_umbral_aerobico,
              il.umbral_anaerobico_fc as lactato_umbral_anaerobico,
              ie.vo2max as ergo_vo2max,
              ie.fc_maxima as ergo_fc_maxima
       FROM informes i
       LEFT JOIN informes_lactato il ON i.id = il.informe_id
       LEFT JOIN informes_ergo ie ON i.id = ie.informe_id
       WHERE i.atleta_id = $1
       ORDER BY i.fecha_evaluacion DESC`,
      [athleteId]
    );
    res.json({ success: true, informes: result.rows });
  } catch (error) {
    console.error('Error fetching informes by athlete:', error);
    res.status(500).json({ error: 'Error fetching informes' });
  }
});

// Create lactato report
app.post('/api/informes/lactato', async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    
    const {
      atleta_id,
      fecha_prueba,
      deporte,
      protocolo_prueba,
      umbral_aerobico_fc,
      umbral_aerobico_velocidad,
      umbral_aerobico_lactato,
      umbral_anaerobico_fc,
      umbral_anaerobico_velocidad,
      umbral_anaerobico_lactato,
      datos_mediciones,
      conclusiones,
      recomendaciones_entrenamiento,
      notas
    } = req.body;
    
    // Create main informe record
    const informeResult = await client.query(
      `INSERT INTO informes (atleta_id, tipo_informe, fecha_evaluacion, nombre_informe, datos_informe, conclusiones, recomendaciones)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [
        atleta_id,
        'lactato',
        fecha_prueba,
        `Informe de Lactato - ${deporte || 'Carrera'}`,
        JSON.stringify(datos_mediciones || {}),
        conclusiones,
        recomendaciones_entrenamiento
      ]
    );
    
    const informe_id = informeResult.rows[0].id;
    
    // Create lactato specific record - SOLO campos que existen en la tabla
    const lactatoResult = await client.query(
      `INSERT INTO informes_lactato (
        informe_id, atleta_id, fecha_prueba, deporte, protocolo_prueba,
        umbral_aerobico_fc, umbral_aerobico_velocidad, umbral_aerobico_lactato,
        umbral_anaerobico_fc, umbral_anaerobico_velocidad, umbral_anaerobico_lactato,
        datos_mediciones, conclusiones, recomendaciones_entrenamiento, notas
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
      RETURNING *`,
      [
        informe_id, atleta_id, fecha_prueba, deporte, protocolo_prueba,
        umbral_aerobico_fc, umbral_aerobico_velocidad, umbral_aerobico_lactato,
        umbral_anaerobico_fc, umbral_anaerobico_velocidad, umbral_anaerobico_lactato,
        JSON.stringify(datos_mediciones || {}), conclusiones, recomendaciones_entrenamiento, notas
      ]
    );
    
    await client.query('COMMIT');
    res.status(201).json({ 
      success: true, 
      informe_id: informe_id,
      lactato_id: lactatoResult.rows[0].id
    });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error creating lactato report:', error);
    res.status(500).json({ error: 'Error creating lactato report' });
  } finally {
    client.release();
  }
});

// Create ergo report
app.post('/api/informes/ergo', async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    
    const {
      atleta_id,
      fecha_prueba,
      deporte,
      protocolo_prueba,
      vo2max,
      vo2max_absoluto,
      vco2max,
      ventilacion_maxima,
      fc_maxima,
      fc_reposo,
      fc_umbral_ventilatorio_1,
      fc_umbral_ventilatorio_2,
      vel_umbral_ventilatorio_1,
      vel_umbral_ventilatorio_2,
      potencia_maxima,
      potencia_umbral,
      cociente_respiratorio_max,
      equivalente_ventilatorio_o2,
      equivalente_ventilatorio_co2,
      datos_mediciones,
      conclusiones,
      recomendaciones_entrenamiento,
      zonas_entrenamiento,
      notas
    } = req.body;
    
    // Create main informe record
    const informeResult = await client.query(
      `INSERT INTO informes (atleta_id, tipo_informe, fecha_evaluacion, nombre_informe, datos_informe, conclusiones, recomendaciones)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [
        atleta_id,
        'ergoespirometrico',
        fecha_prueba,
        `Informe Ergoespirométrico - ${deporte}`,
        JSON.stringify(datos_mediciones || {}),
        conclusiones,
        recomendaciones_entrenamiento
      ]
    );
    
    const informe_id = informeResult.rows[0].id;
    
    // Create ergo specific record
    const ergoResult = await client.query(
      `INSERT INTO informes_ergo (
        informe_id, atleta_id, fecha_prueba, deporte, protocolo_prueba,
        vo2max, vo2max_absoluto, vco2max, ventilacion_maxima,
        fc_maxima, fc_reposo,
        fc_umbral_ventilatorio_1, fc_umbral_ventilatorio_2,
        vel_umbral_ventilatorio_1, vel_umbral_ventilatorio_2,
        potencia_maxima, potencia_umbral,
        cociente_respiratorio_max, equivalente_ventilatorio_o2, equivalente_ventilatorio_co2,
        datos_mediciones, conclusiones, recomendaciones_entrenamiento, zonas_entrenamiento, notas
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25)
      RETURNING *`,
      [
        informe_id, atleta_id, fecha_prueba, deporte, protocolo_prueba,
        vo2max, vo2max_absoluto, vco2max, ventilacion_maxima,
        fc_maxima, fc_reposo,
        fc_umbral_ventilatorio_1, fc_umbral_ventilatorio_2,
        vel_umbral_ventilatorio_1, vel_umbral_ventilatorio_2,
        potencia_maxima, potencia_umbral,
        cociente_respiratorio_max, equivalente_ventilatorio_o2, equivalente_ventilatorio_co2,
        JSON.stringify(datos_mediciones || {}), conclusiones, recomendaciones_entrenamiento, 
        JSON.stringify(zonas_entrenamiento || {}), notas
      ]
    );
    
    await client.query('COMMIT');
    res.status(201).json({ 
      success: true, 
      informe_id: informe_id,
      ergo_id: ergoResult.rows[0].id
    });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error creating ergo report:', error);
    res.status(500).json({ error: 'Error creating ergo report' });
  } finally {
    client.release();
  }
});

// Dashboard planification endpoint
app.get('/api/dashboard/planificacion/:atletaId', async (req, res) => {
  try {
    const { atletaId } = req.params;
    
    // Get athlete data
    const atletaResult = await pool.query(
      'SELECT id, nombre, apellido, foto_url, deporte_principal, email FROM atletas WHERE id = $1',
      [atletaId]
    );
    
    if (atletaResult.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Atleta no encontrado' });
    }
    
    // Get macrociclos
    const macrociclosResult = await pool.query(
      `SELECT id, nombre, descripcion, fecha_inicio, fecha_fin, objetivo_principal, estado 
       FROM macrociclos WHERE atleta_id = $1 ORDER BY fecha_inicio`,
      [atletaId]
    );
    
    // Get mesociclos
    const mesociclosResult = await pool.query(
      `SELECT id, macrociclo_id, nombre, descripcion, fecha_inicio, fecha_fin, objetivo, tipo_mesociclo 
       FROM mesociclos WHERE atleta_id = $1 ORDER BY fecha_inicio`,
      [atletaId]
    );
    
    // Get microciclos
    const microciclosResult = await pool.query(
      `SELECT id, mesociclo_id, nombre, semana_numero, descripcion, fecha_inicio, fecha_fin 
       FROM microciclos WHERE atleta_id = $1 ORDER BY fecha_inicio`,
      [atletaId]
    );
    
    res.json({
      success: true,
      atleta: atletaResult.rows[0],
      macrociclos: macrociclosResult.rows,
      mesociclos: mesociclosResult.rows,
      microciclos: microciclosResult.rows,
      competiciones: [], // TODO: Add when competition table is available
      tests: [] // TODO: Add when tests table is available
    });
    
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ success: false, error: 'Error al obtener datos del dashboard' });
  }
});

// PARQ Entrevistas - Obtener datos de entrevista
app.get('/api/parq/get-data/:atletaId/:tipo', async (req, res) => {
  try {
    const { atletaId, tipo } = req.params;
    
    const result = await pool.query(
      `SELECT * FROM entrevistas 
       WHERE atleta_id = $1 AND tipo_entrevista = $2 
       ORDER BY created_at DESC 
       LIMIT 1`,
      [atletaId, tipo]
    );
    
    if (result.rows.length > 0) {
      res.json({
        success: true,
        data: result.rows[0]
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'No se encontraron datos de entrevista'
      });
    }
  } catch (error) {
    console.error('Error al obtener datos de entrevista:', error);
    res.status(500).json({
      success: false,
      error: 'Error al obtener datos de entrevista'
    });
  }
});

// PARQ Entrevistas - Guardar datos de entrevista
app.post('/api/parq/save-data', async (req, res) => {
  try {
    const { atleta_id, tipo_entrevista, datos_entrevista } = req.body;
    
    if (!atleta_id || !tipo_entrevista || !datos_entrevista) {
      return res.status(400).json({
        success: false,
        error: 'Faltan datos requeridos'
      });
    }
    
    // Verificar si ya existe una entrevista de este tipo para este atleta
    const existingResult = await pool.query(
      'SELECT id FROM entrevistas WHERE atleta_id = $1 AND tipo_entrevista = $2',
      [atleta_id, tipo_entrevista]
    );
    
    let result;
    
    if (existingResult.rows.length > 0) {
      // Actualizar entrevista existente
      result = await pool.query(
        `UPDATE entrevistas 
         SET datos_entrevista = $1, 
             fecha_entrevista = CURRENT_DATE,
             updated_at = CURRENT_TIMESTAMP
         WHERE atleta_id = $2 AND tipo_entrevista = $3
         RETURNING *`,
        [JSON.stringify(datos_entrevista), atleta_id, tipo_entrevista]
      );
    } else {
      // Crear nueva entrevista
      result = await pool.query(
        `INSERT INTO entrevistas 
         (atleta_id, tipo_entrevista, fecha_entrevista, datos_entrevista)
         VALUES ($1, $2, CURRENT_DATE, $3)
         RETURNING *`,
        [atleta_id, tipo_entrevista, JSON.stringify(datos_entrevista)]
      );
    }
    
    res.json({
      success: true,
      data: result.rows[0]
    });
    
  } catch (error) {
    console.error('Error al guardar datos de entrevista:', error);
    res.status(500).json({
      success: false,
      error: 'Error al guardar datos de entrevista'
    });
  }
});

// Get macrociclos
app.get('/api/macrociclos', async (req, res) => {
  try {
    const { atleta_id } = req.query;
    
    let query = `
      SELECT 
        m.*,
        a.nombre as atleta_nombre,
        a.apellido as atleta_apellido,
        (SELECT COUNT(*) FROM sesiones WHERE macrociclo_id = m.id) as total_sesiones
      FROM macrociclos m
      LEFT JOIN atletas a ON m.atleta_id = a.id
    `;
    
    const params = [];
    if (atleta_id) {
      query += ' WHERE m.atleta_id = $1';
      params.push(atleta_id);
    }
    
    query += ' ORDER BY m.id ASC';
    
    const result = await pool.query(query, params);
    
    res.json({
      success: true,
      macrociclos: result.rows
    });
    
  } catch (error) {
    console.error('Error al obtener macrociclos:', error);
    res.status(500).json({
      success: false,
      error: 'Error al obtener macrociclos'
    });
  }
});

// Get single macrociclo with details
app.get('/api/macrociclos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const macroResult = await pool.query(
      `SELECT 
        m.*,
        a.nombre as atleta_nombre,
        a.apellido as atleta_apellido
      FROM macrociclos m
      LEFT JOIN atletas a ON m.atleta_id = a.id
      WHERE m.id = $1`,
      [id]
    );
    
    if (macroResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Macrociclo no encontrado'
      });
    }
    
    // Get sesiones del macrociclo agrupadas por semana
    const sesionesResult = await pool.query(
      `SELECT 
        s.*,
        EXTRACT(WEEK FROM s.fecha) - EXTRACT(WEEK FROM m.fecha_inicio) + 1 as semana_numero,
        EXTRACT(DOW FROM s.fecha) as dia_semana,
        TO_CHAR(s.fecha, 'Day') as dia_nombre
       FROM sesiones s
       JOIN macrociclos m ON s.macrociclo_id = m.id
       WHERE s.macrociclo_id = $1 
       ORDER BY s.fecha, s.hora`,
      [id]
    );
    
    // Agrupar sesiones por semana y día
    const semanas = {};
    sesionesResult.rows.forEach(sesion => {
      const semanaNum = sesion.semana_numero;
      if (!semanas[semanaNum]) {
        semanas[semanaNum] = {
          numero: semanaNum,
          dias: {}
        };
      }
      
      const diaNum = sesion.dia_semana;
      if (!semanas[semanaNum].dias[diaNum]) {
        semanas[semanaNum].dias[diaNum] = {
          nombre: sesion.dia_nombre.trim(),
          fecha: sesion.fecha,
          sesiones: []
        };
      }
      
      semanas[semanaNum].dias[diaNum].sesiones.push(sesion);
    });
    
    // Convertir a array ordenado
    const semanasArray = Object.values(semanas).sort((a, b) => a.numero - b.numero);
    semanasArray.forEach(semana => {
      semana.dias = Object.values(semana.dias).sort((a, b) => {
        const order = { 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6, 'Sunday': 7 };
        const aDay = a.nombre.includes('Monday') ? 1 : a.nombre.includes('Tuesday') ? 2 : a.nombre.includes('Wednesday') ? 3 : 
                     a.nombre.includes('Thursday') ? 4 : a.nombre.includes('Friday') ? 5 : a.nombre.includes('Saturday') ? 6 : 7;
        const bDay = b.nombre.includes('Monday') ? 1 : b.nombre.includes('Tuesday') ? 2 : b.nombre.includes('Wednesday') ? 3 : 
                     b.nombre.includes('Thursday') ? 4 : b.nombre.includes('Friday') ? 5 : b.nombre.includes('Saturday') ? 6 : 7;
        return aDay - bDay;
      });
    });
    
    res.json({
      success: true,
      macrociclo: {
        ...macroResult.rows[0],
        semanas: semanasArray,
        total_sesiones: sesionesResult.rows.length
      }
    });
    
  } catch (error) {
    console.error('Error al obtener macrociclo:', error);
    res.status(500).json({
      success: false,
      error: 'Error al obtener macrociclo'
    });
  }
});

// Get mesociclos with pagination
app.get('/api/mesociclos', async (req, res) => {
  try {
    const { atleta_id, page = 1, limit = 50 } = req.query;
    const offset = (page - 1) * limit;
    
    let countQuery = `SELECT COUNT(*) as total FROM mesociclos m`;
    let query = `
      SELECT 
        m.*,
        a.nombre as atleta_nombre,
        a.apellido as atleta_apellido
      FROM mesociclos m
      LEFT JOIN atletas a ON m.atleta_id = a.id
    `;
    
    const params = [];
    const countParams = [];
    
    if (atleta_id) {
      query += ' WHERE m.atleta_id = $1';
      countQuery += ' WHERE m.atleta_id = $1';
      params.push(atleta_id);
      countParams.push(atleta_id);
    }
    
    query += ` ORDER BY m.id DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(limit, offset);
    
    const [result, countResult] = await Promise.all([
      pool.query(query, params),
      pool.query(countQuery, countParams)
    ]);
    
    const total = parseInt(countResult.rows[0].total);
    const totalPages = Math.ceil(total / limit);
    
    res.json({
      success: true,
      mesociclos: result.rows,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages
      }
    });
    
  } catch (error) {
    console.error('Error al obtener mesociclos:', error);
    res.status(500).json({
      success: false,
      error: 'Error al obtener mesociclos'
    });
  }
});

// Get single mesociclo with details
app.get('/api/mesociclos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const mesoResult = await pool.query(
      `SELECT 
        m.*,
        a.nombre as atleta_nombre,
        a.apellido as atleta_apellido
      FROM mesociclos m
      LEFT JOIN atletas a ON m.atleta_id = a.id
      WHERE m.id = $1`,
      [id]
    );
    
    if (mesoResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Mesociclo no encontrado'
      });
    }
    
    // Get sesiones del mesociclo agrupadas por semana
    const sesionesResult = await pool.query(
      `SELECT 
        s.*,
        EXTRACT(WEEK FROM s.fecha) - EXTRACT(WEEK FROM m.fecha_inicio) + 1 as semana_numero,
        TRIM(TO_CHAR(s.fecha, 'Day')) as dia_nombre
       FROM sesiones s
       JOIN mesociclos m ON s.mesociclo_id = m.id
       WHERE s.mesociclo_id = $1 
       ORDER BY s.fecha, s.hora`,
      [id]
    );
    
    // Agrupar sesiones por semana y día
    const semanas = {};
    sesionesResult.rows.forEach(sesion => {
      const semanaNum = sesion.semana_numero;
      if (!semanas[semanaNum]) {
        semanas[semanaNum] = {
          numero: semanaNum,
          dias: {}
        };
      }
      
      const diaNombre = sesion.dia_nombre;
      if (!semanas[semanaNum].dias[diaNombre]) {
        semanas[semanaNum].dias[diaNombre] = {
          nombre: diaNombre,
          sesiones: []
        };
      }
      
      semanas[semanaNum].dias[diaNombre].sesiones.push({
        id: sesion.id,
        nombre: sesion.nombre_sesion,
        descripcion: sesion.descripcion,
        hora: sesion.hora,
        tipo_sesion: sesion.tipo_sesion,
        estado: sesion.estado
      });
    });
    
    // Convertir a array ordenado
    const semanasArray = Object.values(semanas).sort((a, b) => a.numero - b.numero);
    const diasOrden = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const diasEspanol = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    
    semanasArray.forEach(semana => {
      semana.dias = Object.values(semana.dias).map(dia => {
        const diaIndex = diasOrden.indexOf(dia.nombre);
        return {
          ...dia,
          nombre: diaIndex >= 0 ? diasEspanol[diaIndex] : dia.nombre
        };
      }).sort((a, b) => {
        return diasEspanol.indexOf(a.nombre) - diasEspanol.indexOf(b.nombre);
      });
    });
    
    res.json({
      success: true,
      mesociclo: {
        ...mesoResult.rows[0],
        semanas: semanasArray,
        total_sesiones: sesionesResult.rows.length
      }
    });
    
  } catch (error) {
    console.error('Error al obtener mesociclo:', error);
    res.status(500).json({
      success: false,
      error: 'Error al obtener mesociclo'
    });
  }
});

// Get all microciclos with pagination
app.get('/api/microciclos', async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const offset = (page - 1) * limit;
    
    const result = await pool.query(
      `SELECT 
        mc.*,
        a.nombre as atleta_nombre,
        a.apellido as atleta_apellido,
        COUNT(s.id) as total_sesiones
      FROM microciclos mc
      LEFT JOIN atletas a ON mc.atleta_id = a.id
      LEFT JOIN sesiones s ON s.microciclo_id = mc.id
      GROUP BY mc.id, a.id
      ORDER BY mc.created_at DESC
      LIMIT $1 OFFSET $2`,
      [limit, offset]
    );
    
    const countResult = await pool.query('SELECT COUNT(DISTINCT mc.id) as total FROM microciclos mc');
    
    const total = parseInt(countResult.rows[0].total);
    const totalPages = Math.ceil(total / limit);
    
    res.json({
      success: true,
      microciclos: result.rows,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages
      }
    });
    
  } catch (error) {
    console.error('Error al obtener microciclos:', error);
    res.status(500).json({
      success: false,
      error: 'Error al obtener microciclos'
    });
  }
});

// Get single microciclo with details
app.get('/api/microciclos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const microResult = await pool.query(
      `SELECT 
        mc.*,
        a.nombre as atleta_nombre,
        a.apellido as atleta_apellido
      FROM microciclos mc
      LEFT JOIN atletas a ON mc.atleta_id = a.id
      WHERE mc.id = $1`,
      [id]
    );
    
    if (microResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Microciclo no encontrado'
      });
    }
    
    // Get sesiones del microciclo agrupadas por día
    const sesionesResult = await pool.query(
      `SELECT 
        s.*,
        REGEXP_REPLACE(s.notas, 'Día: ', '', 'i') as dia_nombre
       FROM sesiones s
       WHERE s.microciclo_id = $1 
       ORDER BY 
       CASE REGEXP_REPLACE(s.notas, 'Día: ', '', 'i')
         WHEN 'Lunes' THEN 1
         WHEN 'Martes' THEN 2
         WHEN 'Miercoles' THEN 3
         WHEN 'Jueves' THEN 4
         WHEN 'Viernes' THEN 5
         WHEN 'Sabado' THEN 6
         WHEN 'Domingo' THEN 7
       END,
       s.hora`,
      [id]
    );
    
    // Agrupar sesiones por día
    const dias = {};
    sesionesResult.rows.forEach(sesion => {
      const diaNombre = sesion.dia_nombre;
      if (!dias[diaNombre]) {
        dias[diaNombre] = {
          nombre: diaNombre,
          sesiones: []
        };
      }
      
      dias[diaNombre].sesiones.push({
        id: sesion.id,
        nombre: sesion.nombre_sesion,
        descripcion: sesion.descripcion,
        hora: sesion.hora,
        tipo_sesion: sesion.tipo_sesion,
        estado: sesion.estado
      });
    });
    
    // Convertir a array ordenado
    const diasOrden = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    const diasArray = Object.values(dias).sort((a, b) => {
      return diasOrden.indexOf(a.nombre) - diasOrden.indexOf(b.nombre);
    });
    
    res.json({
      success: true,
      microciclo: {
        ...microResult.rows[0],
        dias: diasArray,
        total_sesiones: sesionesResult.rows.length
      }
    });
    
  } catch (error) {
    console.error('Error al obtener microciclo:', error);
    res.status(500).json({
      success: false,
      error: 'Error al obtener microciclo'
    });
  }
});

// Get birthdays by month
app.get('/api/birthdays/:month', async (req, res) => {
  try {
    const { month } = req.params; // 1-12
    
    // Query para obtener atletas que cumplen años en el mes especificado
    const result = await pool.query(
      `SELECT id, nombre, apellido, fecha_nacimiento, foto_url, deporte_principal
       FROM atletas 
       WHERE EXTRACT(MONTH FROM fecha_nacimiento) = $1
         AND activo = true
       ORDER BY EXTRACT(DAY FROM fecha_nacimiento) ASC`,
      [month]
    );
    
    res.json({
      success: true,
      birthdays: result.rows
    });
    
  } catch (error) {
    console.error('Error al obtener cumpleaños:', error);
    res.status(500).json({
      success: false,
      error: 'Error al obtener cumpleaños'
    });
  }
});

// Supabase Sync Endpoint - Sincronizar atletas desde Supabase Storage
app.post('/api/sync/atletas-supabase', async (req, res) => {
  try {
    if (!supabase) {
      return res.status(503).json({
        success: false,
        error: 'Supabase no está configurado. Verifica las credenciales.'
      });
    }

    console.log('[SUPABASE SYNC] Iniciando sincronización de atletas...');

    // 1. Descargar el archivo JSON desde Supabase Storage
    const { data: fileData, error: downloadError } = await supabase
      .storage
      .from(supabaseBucket)
      .download('Atletas/datos_atletas_completo.json');

    if (downloadError) {
      console.error('[SUPABASE SYNC] Error al descargar JSON:', downloadError);
      return res.status(500).json({
        success: false,
        error: 'Error al descargar datos desde Supabase: ' + downloadError.message
      });
    }

    // 2. Leer el contenido del archivo
    const jsonText = await fileData.text();
    const atletasData = JSON.parse(jsonText);

    console.log(`[SUPABASE SYNC] ${atletasData.length} atletas encontrados en JSON`);

    // 3. Procesar cada atleta
    let insertados = 0;
    let actualizados = 0;
    let errores = 0;

    for (const atleta of atletasData) {
      try {
        // Generar la URL de la foto desde Supabase Storage
        const fotoUrl = `${supabaseUrl}/storage/v1/object/public/${supabaseBucket}/AtletasFotos/${atleta.id}.jpg`;

        // Verificar si el atleta ya existe
        const checkResult = await pool.query(
          'SELECT id FROM atletas WHERE id = $1',
          [atleta.id]
        );

        if (checkResult.rows.length > 0) {
          // Actualizar atleta existente
          await pool.query(
            `UPDATE atletas SET
              nombre = $1,
              apellido = $2,
              fecha_nacimiento = $3,
              email = $4,
              telefono = $5,
              foto_url = $6,
              deporte_principal = $7,
              genero = $8,
              peso = $9,
              altura = $10,
              notas = $11,
              updated_at = CURRENT_TIMESTAMP
            WHERE id = $12`,
            [
              atleta.nombre,
              atleta.apellido,
              atleta.fecha_nacimiento || null,
              atleta.email || null,
              atleta.telefono || null,
              fotoUrl,
              atleta.deporte_principal || null,
              atleta.genero || null,
              atleta.peso || null,
              atleta.altura || null,
              atleta.notas || null,
              atleta.id
            ]
          );
          actualizados++;
          console.log(`[SUPABASE SYNC] ✅ Actualizado: ${atleta.nombre} ${atleta.apellido} (ID: ${atleta.id})`);
        } else {
          // Insertar nuevo atleta
          await pool.query(
            `INSERT INTO atletas 
            (id, nombre, apellido, fecha_nacimiento, email, telefono, foto_url, 
             deporte_principal, genero, peso, altura, notas, activo)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, true)`,
            [
              atleta.id,
              atleta.nombre,
              atleta.apellido,
              atleta.fecha_nacimiento || null,
              atleta.email || null,
              atleta.telefono || null,
              fotoUrl,
              atleta.deporte_principal || null,
              atleta.genero || null,
              atleta.peso || null,
              atleta.altura || null,
              atleta.notas || null
            ]
          );
          insertados++;
          console.log(`[SUPABASE SYNC] ✅ Insertado: ${atleta.nombre} ${atleta.apellido} (ID: ${atleta.id})`);
        }
      } catch (atletaError) {
        errores++;
        console.error(`[SUPABASE SYNC] ❌ Error procesando atleta ${atleta.id}:`, atletaError.message);
      }
    }

    console.log('[SUPABASE SYNC] Sincronización completada');
    console.log(`  - Insertados: ${insertados}`);
    console.log(`  - Actualizados: ${actualizados}`);
    console.log(`  - Errores: ${errores}`);

    res.json({
      success: true,
      message: 'Sincronización completada',
      stats: {
        total: atletasData.length,
        insertados,
        actualizados,
        errores
      }
    });

  } catch (error) {
    console.error('[SUPABASE SYNC] Error general:', error);
    res.status(500).json({
      success: false,
      error: 'Error al sincronizar atletas: ' + error.message
    });
  }
});

// Default route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Catch-all for HTML pages
app.get('/:page.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', req.path));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`AIYM Training App server running on http://0.0.0.0:${PORT}`);
  console.log(`Database connected: ${process.env.DATABASE_URL ? 'Yes' : 'No'}`);
});
