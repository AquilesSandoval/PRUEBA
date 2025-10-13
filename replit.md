# AIYM Training Application

## Overview
AIYM is a comprehensive athlete training management system designed to streamline athlete, training cycle, session, and performance assessment management for sports trainers. The project's ambition is to provide a robust, modern platform for efficient athletic program administration and performance tracking. It has been migrated to Node.js/Express and PostgreSQL.

## User Preferences
- I want iterative development.
- Ask before making major changes.
- I prefer detailed explanations.
- Do not make changes to the folder `Z`.
- Do not make changes to the file `Y`.

## System Architecture
The application follows a traditional architecture with a clear separation of concerns.

-   **UI/UX Decisions**: The frontend utilizes static HTML/CSS/JavaScript with jQuery, Bootstrap, and Leaflet for interactivity and mapping. The design emphasizes a clean, minimalist aesthetic with Font Awesome icons, a modern 'Inter' font, and sport-specific color coding.
-   **Technical Implementations**:
    -   **Backend**: Node.js with Express, running on port 5000.
    -   **Frontend**: Static HTML/CSS/JavaScript with jQuery, Bootstrap, and Leaflet.
    -   **Database**: PostgreSQL (Neon).
    -   **Authentication**: JWT-based authentication with 24-hour token expiration and Bcrypt password hashing.
    -   **API Adapter**: `api-adapter.js` provides compatibility for legacy AJAX calls from the original frontend to the new Express API.
-   **Feature Specifications**:
    -   **Athlete Management (ATLETAS)**: Dashboard, profiles, Garmin/Strava integration, interviews, and assessments (PARQ, cardiovascular). Full CRUD functionality for athletes including comprehensive forms, card-based listings with search/filter, and soft-delete capabilities.
    -   **Training Cycle Management (MACRO/MESO/MICRO)**: Support for Macrocycles (6-12 months), Mesocycles (3-6 weeks), and Microcycles (weekly).
    -   **Performance Reports (INFORMES)**: Ergospirometric tests and lactate analysis. Dynamic report forms with sport-specific data capture and real-time Highcharts visualizations for lactate reports (FC, LA, RPE).
    -   **Additional Features**: Modules for exercises, circuits, drills, and sessions are included.
    -   **Interviews**: Complete system for PARQ, cardiovascular, strength, injuries, objectives, and sensorial interviews with dynamic data loading and saving.
    -   **Birthdays**: Dynamic display of athlete birthdays with monthly navigation.
-   **System Design Choices**: The system serves static files from the root directory and exposes a RESTful API for data operations. The database schema is defined in `schema.sql`, encompassing tables for athletes, training cycles, sessions, reports, user authentication, exercises, circuits, drills, training zones, and interviews. A custom `rutina_dia` table exists for daily routines.

## External Dependencies
-   **Database**: PostgreSQL (Neon)
-   **Frontend Libraries**:
    -   jQuery
    -   Bootstrap
    -   Leaflet (for maps)
    -   Font Awesome (icons)
    -   Highcharts (for data visualization in reports)
    -   SweetAlert (for alerts)
-   **Backend Libraries**:
    -   Express.js
    -   jsonwebtoken (JWT authentication)
    -   bcrypt (password hashing)
    -   Supabase client (for data import from Supabase Storage)

## Recent Changes

### Vistas de Macrociclos y Detalle de Ejercicios (October 13, 2025)
- ✅ **Sistema completo de visualización de macrociclos** - Lista y detalle con ejercicios por semana y día
- **Páginas Creadas**:
  - `MACRO/macrociclos-lista.html` - Lista todos los macrociclos con tarjetas informativas
  - `MACRO/macrociclo-detalle.html` - Muestra ejercicios organizados por semana y día
  - `MACRO/INICIO MACRO.html` - Actualizado con botón para acceder a lista de macrociclos
- **Endpoint API Mejorado** (`server/index.js`):
  - `GET /api/macrociclos/:id` - Agrupación automática de sesiones por semana y día
  - Devuelve estructura: macrociclo → semanas → días → sesiones
  - Incluye ordenamiento automático de días (Lunes-Domingo)
  - Calcula número de semana basado en fecha de inicio
- **UI/UX de Lista**:
  - Tarjetas con información: nombre, atleta/plantilla, fechas, número de sesiones
  - Badge de "Plantilla" o "Atleta: Nombre"
  - Botón "Ver detalle" en cada tarjeta
  - Diseño responsive con hover effects
- **UI/UX de Detalle**:
  - Header con información general del macrociclo
  - Semanas agrupadas en tarjetas con fondo azul #003B5C
  - Días organizados con nombre traducido (Lunes, Martes, etc.)
  - Sesiones con nombre, descripción y hora
  - Indicador "Descanso" para días sin sesiones
  - Navegación: botón "Volver a la lista"

### Importación de Macrociclos desde Supabase (October 13, 2025)
- ✅ **50 macrociclos importados con 4,880+ sesiones** - Plantillas de entrenamiento para diferentes niveles
- **Modificaciones al Esquema**:
  - `macrociclos.atleta_id` ahora permite NULL (plantillas sin atleta específico)
  - `sesiones.atleta_id` ahora permite NULL (sesiones de plantillas)
- **Script de Importación** (`scripts/import-macrociclos-supabase.js`):
  - Descarga `Macrociclo/macrociclo-completo.json` desde Supabase Storage
  - Identifica atleta por nombre del combobox profile_id
  - Crea macrociclo con deporte y distancia del JSON
  - Genera fechas automáticas basadas en número de semanas
  - Crea microciclos para cada semana del macrociclo
  - Crea sesiones para cada ejercicio de cada día
  - Maneja plantillas genéricas: CORREDORA N2, CORREDOR A1, TRIATLETA HOMBRE B1, etc.
- **Endpoints API Creados** (`server/index.js`):
  - `GET /api/macrociclos` - Lista todos los macrociclos con filtro opcional por atleta_id
  - `GET /api/macrociclos/:id` - Obtiene un macrociclo con todas sus sesiones agrupadas
  - Incluye información de atleta (nombre, apellido) y conteo de sesiones
- **Macrociclos Importados**:
  - Carrera: 5K, 10K, 21K, 42K (niveles SE, IN, B1, B2, A1, A2, N1, N2)
  - Triatlón: IMN, SPR, BSSP (niveles para hombres y mujeres)
  - Total: 50 plantillas de macrociclos con estructura completa de semanas y sesiones

### Cumpleaños del Mes - Iconos de Navegación Mejorados (October 13, 2025)
- ✅ **Iconos de navegación ahora visibles** - Chevron izquierda/derecha con estilo mejorado
- **Cambios en UI** (`index.html`):
  - Iconos cambiados de `fa-angle-left/right` a `fa-chevron-left/right`
  - Estilo agregado: font-size 18px, color #003B5C, márgenes de 8px
  - Navegación mensual funcional para explorar cumpleaños de cualquier mes

### Corrección de URLs de Fotos de Atletas (October 13, 2025)
- ✅ **525 URLs de fotos corregidas** - Detección automática de extensiones (jpg, jpeg, png)
- **Script de Corrección** (`scripts/fix-photo-urls.js`):
  - Lista archivos en bucket `AtletasFotos` de Supabase
  - Detecta extensión real de cada foto: 281 .png, 137 .jpeg, 107 .jpg
  - Actualiza URLs en base de datos con extensión correcta
  - 525 atletas con foto actualizada, 68 sin foto en bucket
- **Script de Importación Mejorado** (`scripts/import-atletas-supabase.js`):
  - Detección automática de extensiones antes de importar
  - Genera URLs correctas: `{SUPABASE_URL}/storage/v1/object/public/{BUCKET}/AtletasFotos/{id}.{extension}`
  - Mapeo inteligente de ID a extensión real del archivo
- **Resultado**: Fotos ahora se cargan correctamente en todas las páginas (cumpleaños, lista atletas, dashboard)

### Cumpleaños del Mes - Funcionalidad Dinámica (October 13, 2025)
- ✅ **Sistema de cumpleaños completamente funcional** - Navegación mensual y carga dinámica de atletas
- **Backend API** (`server/index.js`):
  - Endpoint `GET /api/birthdays/:month` - Obtiene atletas que cumplen años en mes específico (1-12)
  - Query PostgreSQL con `EXTRACT(MONTH FROM fecha_nacimiento)` para filtrar por mes
  - Ordenado por día del mes ascendente
  - Solo muestra atletas activos
- **Frontend Updates** (`index.html`):
  - ID `birthdayContainer` para contenedor dinámico
  - ID `currentMonthName` para mostrar nombre del mes actual
  - Spinner de carga mientras se obtienen datos
- **JavaScript** (`index-birthdays.js`):
  - Variable `currentMonth` con mes actual del sistema
  - Función `loadBirthdays(month)` - Fetch a API y muestra atletas
  - Función `displayBirthdays(birthdays)` - Renderiza tarjetas con foto, nombre, fecha
  - Navegación mensual con botones izquierda/derecha (`#left_date`, `#right_date`)
  - Manejo de estados: loading, sin cumpleaños, error
  - Auto-carga del mes actual al cargar página
- **UI/UX**:
  - Tarjetas con foto circular, nombre completo, y fecha de cumpleaños
  - Ícono de pastel de cumpleaños en cada tarjeta
  - Mensajes informativos cuando no hay cumpleaños
  - Navegación fluida entre meses del año