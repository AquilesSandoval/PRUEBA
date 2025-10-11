# AIYM Training Application

## Overview
AIYM is a comprehensive athlete training management system designed to streamline athlete, training cycle, session, and performance assessment management for sports trainers. Originally built with a PHP/Yii backend, this version has been migrated to Node.js/Express and PostgreSQL. The project's ambition is to provide a robust, modern platform for efficient athletic program administration and performance tracking.

## User Preferences
- I want iterative development.
- Ask before making major changes.
- I prefer detailed explanations.
- Do not make changes to the folder `Z`.
- Do not make changes to the file `Y`.

## System Architecture
The application follows a traditional architecture with a clear separation of concerns:
-   **UI/UX Decisions**: The frontend utilizes static HTML/CSS/JavaScript with jQuery, Bootstrap, and Leaflet for interactivity and mapping. The design emphasizes a clean, minimalist aesthetic with Font Awesome icons, a modern 'Inter' font, and sport-specific color coding for visual differentiation (e.g., on athlete cards).
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
-   **System Design Choices**: The system serves static files from the root directory and exposes a RESTful API for data operations. The database schema is defined in `schema.sql`, encompassing tables for athletes, training cycles, sessions, reports, and user authentication.

## External Dependencies
-   **Database**: PostgreSQL (Neon)
-   **Frontend Libraries**:
    -   jQuery
    -   Bootstrap
    -   Leaflet (for maps)
    -   Font Awesome (icons)
    -   Highcharts (for data visualization in reports)
-   **Backend Libraries**:
    -   Express.js
    -   jsonwebtoken (JWT authentication)
    -   bcrypt (password hashing)

## Recent Changes

### Athlete Edit Functionality Fixed (October 11, 2025)
- ✅ **FIXED**: Edit button now loads correct athlete data
- **Backend API**: Updated `GET /api/athletes/:id` to return `{success: true, athlete: {...}}` format
- **JavaScript Updates** (`ATLETAS/EDITAR/Atletas Editar.js`):
  - Loads all available athlete fields from database: nombre, apellido, email, telefono, fecha_nacimiento, deporte_principal, genero, peso, altura, notas
  - Correctly reads athlete ID from URL parameter
  - Populates form fields with selected athlete's data
  - Save button updates athlete with all modified fields
  - Redirect to athlete list after successful save
- **Data Flow**: List page → Click Edit → Pass ID via URL → Load athlete data → Edit → Save → Update database → Redirect to list

### Lactate Report Visualization (October 11, 2025)
- ✅ **File renamed**: `INFORME LACTATO.html` → `informe-lactato.html` (removed spaces for better URL handling)
- Created `informe-lactato-api.js` replacing ALL hardcoded data
- Fetches data from `GET /api/informes/lactato/:id` endpoint
- Renders dynamic Highcharts graphs with FC, LA, and RPE from user submissions
- Displays athlete name, test date, and sport from database
- Populates "Datos de la prueba" containers with real test data
- Fills "Zonas de entrenamiento" (Zona 2, 4, 6) with actual submitted zone data
- Updated redirect in `agregar-lactato-api.js` to use new filename