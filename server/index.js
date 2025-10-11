const express = require('express');
const cors = require('cors');
const path = require('path');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;

// Database connection
const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL
});

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
      return res.status(404).json({ error: 'Athlete not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching athlete:', error);
    res.status(500).json({ error: 'Error fetching athlete' });
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
