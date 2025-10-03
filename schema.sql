-- ============================================================================
-- SCHEMA DE BASE DE DATOS - APLICACIÓN DE ENTRENAMIENTO
-- ============================================================================
-- Sistema de gestión de entrenamiento para atletas
-- Soporta: Atletas, Sesiones, Ciclos (Macro/Meso/Micro), Informes, Ejercicios
-- ============================================================================

-- Tabla para almacenar los atletas
CREATE TABLE atletas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE,
    email VARCHAR(255) UNIQUE,
    telefono VARCHAR(50),
    foto_url VARCHAR(500),
    deporte_principal ENUM('Carrera', 'Bici', 'Natación', 'Triatlón', 'Otro') DEFAULT 'Carrera',
    genero ENUM('M', 'F', 'Otro'),
    peso DECIMAL(5,2) COMMENT 'Peso en kg',
    altura DECIMAL(5,2) COMMENT 'Altura en cm',
    garmin_conectado BOOLEAN DEFAULT FALSE,
    strava_conectado BOOLEAN DEFAULT FALSE,
    garmin_user_id VARCHAR(255),
    strava_user_id VARCHAR(255),
    activo BOOLEAN DEFAULT TRUE,
    notas TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_activo (activo),
    INDEX idx_deporte (deporte_principal)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para macrociclos (planificación a largo plazo, ej: 6-12 meses)
CREATE TABLE macrociclos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    atleta_id INT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    objetivo_principal TEXT,
    estado ENUM('planificado', 'en_progreso', 'completado', 'cancelado') DEFAULT 'planificado',
    notas TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (atleta_id) REFERENCES atletas(id) ON DELETE CASCADE,
    INDEX idx_atleta (atleta_id),
    INDEX idx_estado (estado),
    INDEX idx_fechas (fecha_inicio, fecha_fin)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para mesociclos (planificación media, ej: 3-6 semanas)
CREATE TABLE mesociclos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    macrociclo_id INT,
    atleta_id INT NOT NULL,
    codigo VARCHAR(50) UNIQUE COMMENT 'Código único del mesociclo (ej: ME1C10KTR)',
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    semanas INT NOT NULL DEFAULT 4 COMMENT 'Duración en semanas',
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    tipo_mesociclo ENUM('base', 'desarrollo', 'intensificación', 'tapering', 'competición', 'recuperación') DEFAULT 'base',
    objetivo TEXT,
    estado ENUM('planificado', 'en_progreso', 'completado', 'cancelado') DEFAULT 'planificado',
    notas TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (macrociclo_id) REFERENCES macrociclos(id) ON DELETE SET NULL,
    FOREIGN KEY (atleta_id) REFERENCES atletas(id) ON DELETE CASCADE,
    INDEX idx_macrociclo (macrociclo_id),
    INDEX idx_atleta (atleta_id),
    INDEX idx_estado (estado),
    INDEX idx_fechas (fecha_inicio, fecha_fin)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para microciclos (planificación semanal)
CREATE TABLE microciclos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    mesociclo_id INT,
    atleta_id INT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    semana_numero INT NOT NULL COMMENT 'Número de semana dentro del mesociclo',
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    carga_planificada ENUM('baja', 'moderada', 'alta', 'muy_alta') DEFAULT 'moderada',
    objetivo_semanal TEXT,
    estado ENUM('planificado', 'en_progreso', 'completado', 'cancelado') DEFAULT 'planificado',
    notas TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (mesociclo_id) REFERENCES mesociclos(id) ON DELETE SET NULL,
    FOREIGN KEY (atleta_id) REFERENCES atletas(id) ON DELETE CASCADE,
    INDEX idx_mesociclo (mesociclo_id),
    INDEX idx_atleta (atleta_id),
    INDEX idx_estado (estado),
    INDEX idx_fechas (fecha_inicio, fecha_fin)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para sesiones de entrenamiento
CREATE TABLE sesiones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    atleta_id INT NOT NULL,
    microciclo_id INT,
    mesociclo_id INT,
    macrociclo_id INT,
    fecha DATE NOT NULL,
    hora TIME,
    nombre_sesion VARCHAR(255),
    descripcion TEXT,
    tipo_sesion ENUM('running', 'cycling', 'swimming', 'strength', 'otro') DEFAULT 'running',
    duracion_minutos INT COMMENT 'Duración planificada en minutos',
    distancia_km DECIMAL(8,2) COMMENT 'Distancia planificada en km',
    zona_entrenamiento INT COMMENT 'Zona de entrenamiento (1-10)',
    intensidad ENUM('recuperación', 'aeróbica', 'umbral', 'vo2max', 'anaeróbica') DEFAULT 'aeróbica',
    
    -- Datos realizados (después de completar la sesión)
    completada BOOLEAN DEFAULT FALSE,
    duracion_real_minutos INT,
    distancia_real_km DECIMAL(8,2),
    ritmo_medio VARCHAR(20) COMMENT 'Formato mm:ss por km',
    frecuencia_cardiaca_media INT,
    frecuencia_cardiaca_max INT,
    calorias INT,
    percepcion_esfuerzo INT COMMENT 'RPE 1-10',
    
    -- Integración con dispositivos
    garmin_activity_id VARCHAR(255),
    strava_activity_id VARCHAR(255),
    datos_dispositivo JSON COMMENT 'Datos adicionales del dispositivo',
    
    estado ENUM('planificada', 'completada', 'cancelada', 'reprogramada') DEFAULT 'planificada',
    notas TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (atleta_id) REFERENCES atletas(id) ON DELETE CASCADE,
    FOREIGN KEY (microciclo_id) REFERENCES microciclos(id) ON DELETE SET NULL,
    FOREIGN KEY (mesociclo_id) REFERENCES mesociclos(id) ON DELETE SET NULL,
    FOREIGN KEY (macrociclo_id) REFERENCES macrociclos(id) ON DELETE SET NULL,
    INDEX idx_atleta (atleta_id),
    INDEX idx_fecha (fecha),
    INDEX idx_tipo (tipo_sesion),
    INDEX idx_estado (estado),
    INDEX idx_completada (completada)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para ejercicios (biblioteca de ejercicios)
CREATE TABLE ejercicios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    categoria ENUM('fuerza', 'flexibilidad', 'core', 'pliometría', 'técnica', 'movilidad', 'otro') DEFAULT 'fuerza',
    grupo_muscular VARCHAR(100) COMMENT 'Ej: piernas, brazos, espalda, etc',
    equipamiento VARCHAR(255) COMMENT 'Equipamiento necesario',
    dificultad ENUM('principiante', 'intermedio', 'avanzado') DEFAULT 'intermedio',
    video_url VARCHAR(500),
    imagen_url VARCHAR(500),
    instrucciones TEXT,
    notas TEXT,
    activo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_categoria (categoria),
    INDEX idx_activo (activo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para circuitos de entrenamiento
CREATE TABLE circuitos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    tipo_circuito ENUM('fuerza', 'cardio', 'hiit', 'funcional', 'mixto') DEFAULT 'funcional',
    duracion_estimada_minutos INT,
    nivel_dificultad ENUM('principiante', 'intermedio', 'avanzado') DEFAULT 'intermedio',
    objetivo TEXT,
    ecos_totales INT COMMENT 'ECOS totales del circuito',
    calorias_estimadas INT,
    estado BOOLEAN DEFAULT TRUE,
    notas TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_tipo (tipo_circuito),
    INDEX idx_estado (estado)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para ejercicios dentro de un circuito
CREATE TABLE circuitos_ejercicios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    circuito_id INT NOT NULL,
    ejercicio_id INT NOT NULL,
    orden INT NOT NULL COMMENT 'Orden del ejercicio en el circuito',
    categoria INT COMMENT 'Categoría de intensidad 1-5',
    series INT DEFAULT 1,
    repeticiones INT,
    tiempo_segundos INT,
    peso_kg DECIMAL(6,2),
    descanso_segundos INT,
    notas TEXT,
    FOREIGN KEY (circuito_id) REFERENCES circuitos(id) ON DELETE CASCADE,
    FOREIGN KEY (ejercicio_id) REFERENCES ejercicios(id) ON DELETE CASCADE,
    INDEX idx_circuito (circuito_id),
    INDEX idx_ejercicio (ejercicio_id),
    INDEX idx_orden (orden)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para asignar circuitos a sesiones
CREATE TABLE sesiones_circuitos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sesion_id INT NOT NULL,
    circuito_id INT NOT NULL,
    orden INT DEFAULT 1,
    completado BOOLEAN DEFAULT FALSE,
    notas TEXT,
    FOREIGN KEY (sesion_id) REFERENCES sesiones(id) ON DELETE CASCADE,
    FOREIGN KEY (circuito_id) REFERENCES circuitos(id) ON DELETE CASCADE,
    INDEX idx_sesion (sesion_id),
    INDEX idx_circuito (circuito_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para informes de rendimiento (genérico)
CREATE TABLE informes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    atleta_id INT NOT NULL,
    tipo_informe ENUM('lactato', 'ergoespirometrico', 'antropometrico', 'fuerza', 'otro') NOT NULL,
    fecha_evaluacion DATE NOT NULL,
    nombre_informe VARCHAR(255),
    evaluador VARCHAR(255) COMMENT 'Nombre del profesional que realizó la evaluación',
    lugar VARCHAR(255),
    datos_informe JSON COMMENT 'Datos específicos del informe en formato JSON',
    archivo_adjunto_url VARCHAR(500),
    conclusiones TEXT,
    recomendaciones TEXT,
    notas TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (atleta_id) REFERENCES atletas(id) ON DELETE CASCADE,
    INDEX idx_atleta (atleta_id),
    INDEX idx_tipo (tipo_informe),
    INDEX idx_fecha (fecha_evaluacion)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para informes de lactato (detalle específico)
CREATE TABLE informes_lactato (
    id INT PRIMARY KEY AUTO_INCREMENT,
    informe_id INT NOT NULL,
    atleta_id INT NOT NULL,
    fecha_prueba DATE NOT NULL,
    deporte ENUM('Carrera', 'Bici', 'Natación') NOT NULL,
    protocolo_prueba VARCHAR(255),
    temperatura_ambiente DECIMAL(4,1),
    humedad_ambiente DECIMAL(5,2),
    
    -- Umbrales identificados
    umbral_aerobico_fc INT COMMENT 'Frecuencia cardíaca en umbral aeróbico',
    umbral_aerobico_velocidad DECIMAL(5,2) COMMENT 'Velocidad en umbral aeróbico',
    umbral_aerobico_lactato DECIMAL(4,2) COMMENT 'Lactato en umbral aeróbico (mmol/L)',
    
    umbral_anaerobico_fc INT,
    umbral_anaerobico_velocidad DECIMAL(5,2),
    umbral_anaerobico_lactato DECIMAL(4,2),
    
    vo2max_estimado DECIMAL(5,2) COMMENT 'VO2max en ml/kg/min',
    fc_maxima_alcanzada INT,
    
    datos_mediciones JSON COMMENT 'Array con todas las mediciones (velocidad, FC, lactato por etapa)',
    conclusiones TEXT,
    recomendaciones_entrenamiento TEXT,
    notas TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (informe_id) REFERENCES informes(id) ON DELETE CASCADE,
    FOREIGN KEY (atleta_id) REFERENCES atletas(id) ON DELETE CASCADE,
    INDEX idx_informe (informe_id),
    INDEX idx_atleta (atleta_id),
    INDEX idx_fecha (fecha_prueba)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para informes ergoespirométricos
CREATE TABLE informes_ergo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    informe_id INT NOT NULL,
    atleta_id INT NOT NULL,
    fecha_prueba DATE NOT NULL,
    deporte ENUM('Carrera', 'Bici', 'Natación', 'Otro') NOT NULL,
    protocolo_prueba VARCHAR(255),
    
    -- Resultados principales
    vo2max DECIMAL(5,2) COMMENT 'VO2max en ml/kg/min',
    vo2max_absoluto DECIMAL(7,2) COMMENT 'VO2max en l/min',
    vco2max DECIMAL(5,2),
    ventilacion_maxima DECIMAL(6,2) COMMENT 'Ventilación máxima (L/min)',
    
    fc_maxima INT,
    fc_reposo INT,
    fc_umbral_ventilatorio_1 INT COMMENT 'VT1',
    fc_umbral_ventilatorio_2 INT COMMENT 'VT2',
    
    vel_umbral_ventilatorio_1 DECIMAL(5,2),
    vel_umbral_ventilatorio_2 DECIMAL(5,2),
    
    potencia_maxima INT COMMENT 'Potencia máxima en watts',
    potencia_umbral INT COMMENT 'Potencia en umbral',
    
    cociente_respiratorio_max DECIMAL(4,2) COMMENT 'RER máximo',
    equivalente_ventilatorio_o2 DECIMAL(5,2),
    equivalente_ventilatorio_co2 DECIMAL(5,2),
    
    datos_mediciones JSON COMMENT 'Datos completos de la prueba por etapa',
    conclusiones TEXT,
    recomendaciones_entrenamiento TEXT,
    zonas_entrenamiento JSON COMMENT 'Zonas de entrenamiento calculadas',
    notas TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (informe_id) REFERENCES informes(id) ON DELETE CASCADE,
    FOREIGN KEY (atleta_id) REFERENCES atletas(id) ON DELETE CASCADE,
    INDEX idx_informe (informe_id),
    INDEX idx_atleta (atleta_id),
    INDEX idx_fecha (fecha_prueba)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para zonas de entrenamiento personalizadas
CREATE TABLE zonas_entrenamiento (
    id INT PRIMARY KEY AUTO_INCREMENT,
    atleta_id INT NOT NULL,
    deporte ENUM('Carrera', 'Bici', 'Natación', 'General') NOT NULL,
    tipo_zona ENUM('frecuencia_cardiaca', 'ritmo', 'potencia', 'velocidad') NOT NULL,
    
    -- Zonas 1-10 (algunas pueden ser NULL)
    zona_1_min DECIMAL(8,2),
    zona_1_max DECIMAL(8,2),
    zona_2_min DECIMAL(8,2),
    zona_2_max DECIMAL(8,2),
    zona_3_min DECIMAL(8,2),
    zona_3_max DECIMAL(8,2),
    zona_4_min DECIMAL(8,2),
    zona_4_max DECIMAL(8,2),
    zona_5_min DECIMAL(8,2),
    zona_5_max DECIMAL(8,2),
    zona_6_min DECIMAL(8,2),
    zona_6_max DECIMAL(8,2),
    zona_7_min DECIMAL(8,2),
    zona_7_max DECIMAL(8,2),
    zona_8_min DECIMAL(8,2),
    zona_8_max DECIMAL(8,2),
    zona_9_min DECIMAL(8,2),
    zona_9_max DECIMAL(8,2),
    zona_10_min DECIMAL(8,2),
    zona_10_max DECIMAL(8,2),
    
    fecha_desde DATE NOT NULL,
    fecha_hasta DATE,
    basado_en_informe_id INT COMMENT 'Informe que generó estas zonas',
    activo BOOLEAN DEFAULT TRUE,
    notas TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (atleta_id) REFERENCES atletas(id) ON DELETE CASCADE,
    FOREIGN KEY (basado_en_informe_id) REFERENCES informes(id) ON DELETE SET NULL,
    INDEX idx_atleta (atleta_id),
    INDEX idx_deporte (deporte),
    INDEX idx_activo (activo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para entrevistas/cuestionarios de atletas
CREATE TABLE entrevistas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    atleta_id INT NOT NULL,
    tipo_entrevista ENUM('PARQ', 'lesiones', 'objetivos', 'fuerza', 'cardiovascular', 'sensorial', 'otros') NOT NULL,
    fecha_entrevista DATE NOT NULL,
    datos_entrevista JSON COMMENT 'Respuestas del cuestionario en formato JSON',
    evaluador VARCHAR(255),
    conclusiones TEXT,
    notas TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (atleta_id) REFERENCES atletas(id) ON DELETE CASCADE,
    INDEX idx_atleta (atleta_id),
    INDEX idx_tipo (tipo_entrevista),
    INDEX idx_fecha (fecha_entrevista)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para drills/ejercicios técnicos (especialmente natación)
CREATE TABLE drills (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    deporte ENUM('Natación', 'Carrera', 'Bici', 'Otro') NOT NULL,
    categoria VARCHAR(100) COMMENT 'Ej: técnica, resistencia, velocidad',
    objetivo TEXT,
    nivel_dificultad ENUM('principiante', 'intermedio', 'avanzado') DEFAULT 'intermedio',
    duracion_estimada_minutos INT,
    distancia_metros INT,
    instrucciones TEXT,
    video_url VARCHAR(500),
    notas TEXT,
    activo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_deporte (deporte),
    INDEX idx_activo (activo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para bloques de drills (agrupación de drills)
CREATE TABLE bloques_drills (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    deporte ENUM('Natación', 'Carrera', 'Bici', 'Otro') NOT NULL,
    duracion_total_minutos INT,
    distancia_total_metros INT,
    objetivo TEXT,
    estado BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_deporte (deporte),
    INDEX idx_estado (estado)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para drills dentro de bloques
CREATE TABLE bloques_drills_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    bloque_id INT NOT NULL,
    drill_id INT NOT NULL,
    orden INT NOT NULL,
    repeticiones INT DEFAULT 1,
    distancia_metros INT,
    tiempo_segundos INT,
    intensidad VARCHAR(50),
    descanso_segundos INT,
    notas TEXT,
    FOREIGN KEY (bloque_id) REFERENCES bloques_drills(id) ON DELETE CASCADE,
    FOREIGN KEY (drill_id) REFERENCES drills(id) ON DELETE CASCADE,
    INDEX idx_bloque (bloque_id),
    INDEX idx_drill (drill_id),
    INDEX idx_orden (orden)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para planes predefinidos (templates de mesociclos)
CREATE TABLE planes_predefinidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    semanas INT NOT NULL,
    deporte_principal ENUM('Carrera', 'Bici', 'Natación', 'Triatlón', 'Fuerza', 'Mixto') DEFAULT 'Carrera',
    nivel_dificultad ENUM('principiante', 'intermedio', 'avanzado') DEFAULT 'intermedio',
    objetivo TEXT,
    configuracion_sesiones JSON COMMENT 'Configuración de sesiones del plan',
    publico BOOLEAN DEFAULT TRUE,
    veces_usado INT DEFAULT 0,
    creado_por VARCHAR(255),
    notas TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_codigo (codigo),
    INDEX idx_deporte (deporte_principal),
    INDEX idx_publico (publico)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para actividades importadas de Garmin/Strava
CREATE TABLE actividades_importadas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    atleta_id INT NOT NULL,
    sesion_id INT COMMENT 'Sesión asociada si existe',
    fuente ENUM('garmin', 'strava', 'manual') NOT NULL,
    actividad_externa_id VARCHAR(255),
    fecha_actividad DATETIME NOT NULL,
    nombre VARCHAR(255),
    tipo_actividad VARCHAR(100),
    duracion_segundos INT,
    distancia_metros DECIMAL(10,2),
    calorias INT,
    ritmo_medio VARCHAR(20),
    fc_media INT,
    fc_max INT,
    elevacion_ganada_metros DECIMAL(8,2),
    datos_completos JSON COMMENT 'Todos los datos de la actividad',
    procesada BOOLEAN DEFAULT FALSE,
    fecha_importacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (atleta_id) REFERENCES atletas(id) ON DELETE CASCADE,
    FOREIGN KEY (sesion_id) REFERENCES sesiones(id) ON DELETE SET NULL,
    INDEX idx_atleta (atleta_id),
    INDEX idx_fuente (fuente),
    INDEX idx_fecha (fecha_actividad),
    INDEX idx_externa (actividad_externa_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla para estadísticas y métricas de rendimiento
CREATE TABLE metricas_rendimiento (
    id INT PRIMARY KEY AUTO_INCREMENT,
    atleta_id INT NOT NULL,
    fecha DATE NOT NULL,
    tipo_metrica ENUM('peso', 'grasa_corporal', 'vo2max', 'fc_reposo', 'vfc', 'carga_entrenamiento', 'fatiga', 'otro') NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    unidad VARCHAR(50),
    fuente VARCHAR(100) COMMENT 'Origen de la métrica: manual, garmin, balanza, etc',
    notas TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (atleta_id) REFERENCES atletas(id) ON DELETE CASCADE,
    INDEX idx_atleta (atleta_id),
    INDEX idx_fecha (fecha),
    INDEX idx_tipo (tipo_metrica)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- FIN DEL SCHEMA
-- ============================================================================
