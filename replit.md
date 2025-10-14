# AIYM Training Application

## Overview
AIYM is a comprehensive athlete training management system designed to streamline athlete, training cycle, session, and performance assessment management for sports trainers. The project aims to provide a robust, modern platform for efficient athletic program administration and performance tracking, leveraging Node.js/Express and PostgreSQL.

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
  - **Macrocycles**: 50 imported from macrociclo-completo.json (Supabase Storage) with 5,053 sessions
  - **Mesocycles**: 1,092 imported from mesociclo-completo.json with 3,416 microciclos (semanas) and 32,489 sesiones. Full pagination implemented in both listado-mesociclos.html and INICIO MESO.html. Mesocycle names updated with structured codes from codigos_mesociclos.txt (Supabase Storage)
  - **Microcycles**: 103 imported with 279+ sessions, weekly planning structure
- **Performance Reports (INFORMES)**: Ergospirometric tests and lactate analysis. Dynamic report forms with sport-specific data capture and real-time Highcharts visualizations.
- **Additional Features**: Modules for exercises, circuits, drills, and sessions. Comprehensive interview system (PARQ, cardiovascular, strength, injuries, objectives, sensorial) with dynamic data handling. Dynamic display of athlete birthdays with monthly navigation.

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