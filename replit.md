# AIYM Training Application

## Overview
AIYM is a comprehensive athlete training management system designed to streamline athlete, training cycle, session, and performance assessment management for sports trainers. The project aims to provide a robust, modern platform for efficient athletic program administration and performance tracking, leveraging Node.js/Express and PostgreSQL.

## Recent Changes
- **Dashboard Redesign - Enhanced (Oct 16, 2025)**: Complete visual overhaul of index.html with modern, dynamic design featuring:
  - New color palette: #28a9e2 (primary blue), #0e4165 (dark blue), #add6e8 (light blue), #67889e (medium blue)
  - Dynamic image carousel with 5 high-impact stock photos and auto-rotation (5s intervals)
  - Advanced CSS animations: carouselFade, slideInFromLeft/Right, slideUpFade, bounceIn, textGlow, countUp, floatAnimation
  - Modernized "Mis Pendientes" and "Cumpleaños del Mes" cards with gradient headers and hover effects
  - Animated statistics cards with image icons (replaced Font Awesome) showing Atletas Activos, Programas en Curso, Ejercicios Disponibles (512), Sesiones Completadas
  - Enhanced footer with navigation links, social media icons with rotation animations
  - Custom CSS (index-modern.css) with 15+ animations and transformations
  - Carousel JavaScript (index-carousel.js) with smooth transitions, zoom effects, and dot navigation
  - Interactive hover effects: scale, rotate, glow, slide, bounce, and color transitions
- **Microcycle Loading Indicator (Oct 16, 2025)**: Added spinner and "Cargando microciclos..." message to INICIO MICRO.js to improve UX during 2-3 second data load
- **Microcycle Navigation Fix (Oct 15, 2025)**: Updated detalle-microciclo.html links to MICROSICLO.html in INICIO MICRO.js and listado-microciclos.html
- **Exercise Display System (Oct 2025)**: Migrated from imagen_path/video_path to imagen_url/video_url with public Supabase Storage URLs (512 exercises)

## User Preferences
- I want iterative development.
- Ask before making major changes.
- I prefer detailed explanations.
- Do not make changes to the folder `Z`.
- Do not make changes to the file `Y`.

## System Architecture
The application follows a traditional architecture with a clear separation of concerns, utilizing a RESTful API for data operations and serving static files.

### UI/UX Decisions
The frontend uses static HTML/CSS/JavaScript with jQuery, Bootstrap, and Leaflet for interactivity and mapping. The design emphasizes a clean, minimalist aesthetic with Font Awesome icons, the 'Touch Me Sans Petite Semi Bold' font globally, and sport-specific color coding using #4acf74 (green) and #b2c4ce (blue-gray) for Macrociclo and Mesociclo sections. Visualizations are powered by Highcharts. Exercise descriptions display with line breaks for better readability (one line per sub-exercise).

### Technical Implementations
- **Backend**: Node.js with Express, running on port 5000.
- **Frontend**: Static HTML/CSS/JavaScript, jQuery, Bootstrap, and Leaflet.
- **Database**: PostgreSQL (Neon).
- **Authentication**: JWT-based with 24-hour token expiration and Bcrypt password hashing.
- **API Adapter**: `api-adapter.js` ensures compatibility for legacy AJAX calls.

### Feature Specifications
- **Athlete Management (ATLETAS)**: Full CRUD for athletes, including profiles, Garmin/Strava integration, interviews (PARQ, cardiovascular), and assessments. Features card-based listings with search/filter and soft-delete. Photos are dynamically loaded from Supabase Storage with correct extensions.
- **Training Cycle Management (MACRO/MESO/MICRO)**: Supports Macrocycles (6-12 months), Mesocycles (3-6 weeks), and Microcycles (weekly). Includes fully functional macrocycle, mesocycle, and microcycle systems with pagination (50 per page) and offline architecture. All data imported from Supabase Storage buckets. Exercise descriptions display with white-space: pre-line for line-separated sub-exercises. Uses #4acf74 and #b2c4ce color scheme.
  - **Macrocycles**: 50 imported from macrociclo-completo.json (Supabase Storage, carpeta Macrociclo) with 5,185 sessions. All exercise data from each week of each macrocycle is preserved: nombreSesion, descripciones (with line breaks), and hora. Dates calculated correctly from fixed start date (2025-01-06) to ensure proper week numbering. Macrocycles are displayed in ascending order by ID (lowest ID first). Macrocycle names updated with structured codes from codigos_macrociclos.txt (Supabase Storage). API endpoint ORDER BY id ASC
  - **Mesocycles**: 1,092 imported from mesociclo-completo.json with 32,549 sesiones. Each mesociclo preserves complete week>day>exercise structure with fecha, hora, nombre_sesion, and descripciones (line-separated). Full pagination implemented (50 per page) in both listado-mesociclos.html and INICIO MESO.html. Mesocycle names updated with structured codes from codigos_mesociclos.txt (Supabase Storage). Mesocycles displayed in descending ID order (highest ID first). API endpoint ORDER BY id DESC
  - **Microcycles**: 15,657 imported from 160 JSON files (microciclo-1.json to microciclo-160.json) with 68,394 sessions. Weekly planning structure with complete day-by-day exercise data. Pagination of 100 per page, displayed in ascending order (first from JSON 1 at top). API endpoint ORDER BY id ASC
- **Performance Reports (INFORMES)**: Ergospirometric tests and lactate analysis. Dynamic report forms with sport-specific data capture and real-time Highcharts visualizations.
- **Exercise Management (EJERCICIOS)**: Complete 3-level exercise system with 512 exercises imported from Supabase Storage across 12 categories. Features folder-based navigation, circular images, and video support. Exercise images and videos are stored as public Supabase Storage URLs in `imagen_url` and `video_url` fields.
  - **Main Interface (POSIBLES NO NECESARIOS/EJERCICIO/EJERCICIO INICIO.html)**: Tab-based UI with 3 levels - Carpetas (folders), Lista de Ejercicios (exercise list), and Detalle (detail). Real-time search/filter functionality. Seamless navigation between tabs with back buttons. Fully integrated with Express API (replacing legacy PHP/Yii system). Displays exercise images (circular thumbnails) and videos (embedded player).
  - **Level 1 - Carpetas**: Lists 12 exercise categories (Automasaje, Calentamiento_Natacion_con_Elasticos, Embarazadas, FUNCIONALES_EN_CASA, Lanzamientos, QR_4.15.1-4, Saltos, Tecnica_de_Carrera, Tecnica_de_Nado) with exercise counts. Also available as standalone page: EJERCICIOS/carpetas-ejercicios.html
  - **Level 2 - Lista**: Displays exercises from selected category with circular images and names. Shows all exercises (limit 1000). Also available as standalone page: EJERCICIOS/lista-ejercicios.html
  - **Level 3 - Detalle**: Full exercise details including image, video (if available), technical description, athlete description, category, level, sport type. Also available as standalone page: EJERCICIOS/detalle-ejercicio.html
  - **Data Source**: Imported from Supabase Storage bucket (Ejercicios folder) with JSON metadata, JPG images, and MP4 videos. Each exercise preserves original attributes from JSON files. Media URLs stored in imagen_url and video_url fields pointing to Supabase public storage.
  - **API Endpoints**: GET /api/ejercicios/carpetas, GET /api/ejercicios/carpeta/:nombre, GET /api/ejercicios/:id
- **Additional Features**: Modules for circuits, drills, and sessions. Comprehensive interview system (PARQ, cardiovascular, strength, injuries, objectives, sensorial) with dynamic data handling. Dynamic display of athlete birthdays with monthly navigation.

### System Design Choices
The system serves static files and exposes a RESTful API. The database schema in `schema.sql` defines tables for athletes, training cycles, sessions, reports, user authentication, exercises, circuits, drills, training zones, and interviews, including a custom `rutina_dia` table for daily routines. All frontend resources (jQuery, Bootstrap, SweetAlert, Atlantis, custom icons) are served locally to ensure 100% offline functionality.

## External Dependencies
- **Database**: PostgreSQL (Neon)
- **Frontend Libraries**:
    - jQuery
    - Bootstrap
    - Leaflet
    - Font Awesome
    - Highcharts
    - SweetAlert
- **Backend Libraries**:
    - Express.js
    - jsonwebtoken
    - bcrypt
    - Supabase client (for data import from Supabase Storage)