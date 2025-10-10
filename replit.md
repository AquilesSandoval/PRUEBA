# AIYM Training Application

## Overview
AIYM is a comprehensive athlete training management system originally built with a PHP/Yii backend. This version has been migrated to run on Replit with a Node.js/Express backend and PostgreSQL database.

## Project Structure

### Backend
- **Server**: Node.js with Express (port 5000)
- **Database**: PostgreSQL (Neon)
- **Location**: `/server/index.js`

### Frontend
- **Type**: Static HTML/CSS/JavaScript
- **Framework**: jQuery, Bootstrap, Leaflet (maps)
- **Location**: Root directory with subdirectories for different modules

### Main Modules
1. **ATLETAS** - Athlete management
   - Dashboard, profiles, Garmin/Strava integration
   - Interviews and assessments (PARQ, cardiovascular, etc.)

2. **MACRO/MESO/MICRO** - Training cycle management
   - Macrocycles (6-12 months)
   - Mesocycles (3-6 weeks)
   - Microcycles (weekly)

3. **INFORMES** - Performance reports
   - Ergospirometric tests
   - Lactate analysis

4. **POSIBLES NO NECESARIOS** - Additional features
   - Exercises, circuits, drills, sessions

## Database Schema

The database includes the following main tables:
- `atletas` - Athletes information
- `macrociclos`, `mesociclos`, `microciclos` - Training cycles
- `sesiones` - Training sessions
- `ejercicios` - Exercise library
- `circuitos` - Circuit training
- `informes`, `informes_ergo`, `informes_lactato` - Performance reports
- `entrevistas` - Athlete interviews/questionnaires
- `drills` - Technical drills
- `zonas_entrenamiento` - Training zones

Full schema available in `schema.sql`

## API Structure

The backend provides REST API endpoints:

### Athletes
- GET `/api/athletes` - List all athletes
- GET `/api/athletes/:id` - Get athlete details
- POST `/api/athletes` - Create new athlete

### Sessions
- GET `/api/sessions` - List sessions
- POST `/api/sessions` - Create session

### Reports
- GET `/api/informes/ergo/:id` - Get ergospirometric report
- GET `/api/informes/lactato/:id` - Get lactate report

### Support Endpoints
- Various endpoints for dropdowns, lookups, etc.

## API Adapter

The `api-adapter.js` file provides compatibility between the old PHP routes and new Express API. It intercepts AJAX calls from the original frontend and redirects them to the new backend.

## Authentication

The application now includes a secure authentication system:

### Login Credentials (Development)
- **Username**: `admin`
- **Password**: `admin123`
- **Role**: Admin

### Authentication Features
- JWT-based authentication with 24-hour token expiration
- Bcrypt password hashing for security
- Session persistence with "Remember Me" functionality
- Login page with custom background image
- Logout functionality redirects to login page

### Database Tables
- `users` - User authentication and profile information
  - Fields: id, username, password_hash, email, nombre, rol, activo

### API Endpoints
- `POST /api/login` - Authenticate user and receive JWT token
  - Request: `{ username, password }`
  - Response: `{ success, token, user }`

## Recent Changes

**Date**: October 9-10, 2025

### Migration from PHP/Yii to Node.js/Express
1. Created PostgreSQL database with complete schema
2. Built Express backend with REST API endpoints
3. Implemented API compatibility layer for frontend
4. Configured static file serving
5. Set up workflow to run on port 5000

### Authentication System Implementation
1. Created `users` table in database
2. Added JWT authentication with bcrypt password hashing
3. Created login page with custom background image
4. Updated all "Salir" (logout) buttons to redirect to login
5. Implemented secure login flow with token-based authentication

### UI Simplification (October 10, 2025)
1. **Navbar cleanup (applied to ALL 39 HTML files):**
   - Removed language selector
   - Removed "Lecciones" option
   - Removed "Progresión", "Personal", "Sesión" from Training menu
   - Removed "Dashboard" and "Perfiles" from main menu
   - Removed "Patrocinios" from profile menu, kept only logout option
   - Created automated Node.js script (`update_navbars.js`) to apply changes consistently across entire project

### Athlete CRUD Implementation (October 10, 2025)
1. **Backend API Endpoints** (`/server/index.js`):
   - `GET /api/athletes` - List all active athletes
   - `GET /api/athletes/:id` - Get specific athlete details
   - `POST /api/athletes` - Create new athlete with all fields
   - `PUT /api/athletes/:id` - Update athlete information
   - `DELETE /api/athletes/:id` - Soft delete (marks as inactive)
   - All endpoints support: nombre, apellido, fecha_nacimiento, email, telefono, deporte_principal, genero, peso, altura, notas

2. **Athlete Add Form** (`ATLETAS/Atletas AGREGAR.html`):
   - Comprehensive form with ALL athlete fields matching design requirements
   - Fields include: nombre, apellidos, fecha_nacimiento, empresa, correo, contraseña
   - Training zones: Default Control Zonas para Carrera/Natación/Ciclismo (FC, Potencia, Velocidad)
   - Additional fields: teléfono, forma, fatiga, deporte, tipo de contrato
   - Toggle switch for "Activo" status
   - Emergency contacts (2 sets): contacto, teléfono, parentesco
   - Medical info: tipo de sangre, alergias, datos gastos médicos
   - Other: hospital, número afiliación federación
   - File uploads: foto, concierto, electrocardiograma
   - Input validation and required field indicators
   - Real-time API integration with success/error handling
   - Redirect to athlete list after successful creation
   - Minimalist Font Awesome icons for all buttons

3. **Athlete List with Cards** (`ATLETAS/Atletas INICIO.html`):
   - Replaced static table with dynamic card-based grid layout
   - Real-time athlete loading from API
   - Search functionality (by name, email, phone)
   - Filter by sport (Carrera, Bici, Natación, Triatlón, Otro)
   - Card displays: photo, name, age, email, phone, sport badge
   - Action buttons per card with Font Awesome icons: <i class="fas fa-edit"> Edit, <i class="fas fa-trash"> Delete
   - Sport-specific color coding for visual differentiation
   - Responsive 3-column grid (adjusts to screen size)

4. **Athlete Edit Form** (`ATLETAS/EDITAR/Atletas Editar.html` & `Atletas Editar.js`):
   - Migrated from old PHP/Yii framework to new Express API
   - Uses `PUT /api/athletes/:id` endpoint for updates
   - Loads athlete data from API on page load
   - Email validation and required field checking
   - Real-time API integration with success/error handling
   - Redirect to athlete list after successful update
   - Delete functionality integrated with confirmation dialog

5. **UI Enhancements & Icon Updates**:
   - Replaced emoji icons with minimalist Font Awesome icons where appropriate
   - Menu hamburguesa: Restored original <i class="icon-options-vertical"> icon (3 vertical dots)
   - Edit button: <i class="fas fa-edit"> on athlete cards
   - Delete button: <i class="fas fa-trash"> on athlete cards
   - Save button: <i class="fa fa-check"> in edit form
   - Modern Inter font applied across all pages (assets/modern-font.css)
   - Hover effects on athlete cards
   - Color-coded sport badges
   - Loading states and empty state messaging
   - Confirmation dialogs for delete operations

6. **Index page redesign:**
   - Replaced world map with ALL IN YOUR MIND logo
   - Kept "Mis pendientes" card with "Añadir pendiente" button
   - Kept "Cumpleaños del Mes" card
   - Clean, minimalist design

3. **JavaScript error fixes:**
   - Fixed DataTable initialization errors by adding existence checks
   - Fixed Leaflet map errors by conditionally initializing map code only when map element exists
   - All console errors resolved - application runs cleanly

### Reports System Implementation (October 10, 2025)
1. **Backend API Endpoints** (`/server/index.js`):
   - `GET /api/informes/athletes` - List all active athletes for reports
   - `GET /api/informes/by-athlete/:athleteId` - Get all reports for a specific athlete
   - `POST /api/informes/lactato` - Create lactate report with transaction safety
   - `POST /api/informes/ergo` - Create ergospirometric report with transaction safety
   - `GET /api/informes/lactato/:id` - Get specific lactate report (legacy endpoint)
   - `GET /api/informes/ergo/:id` - Get specific ergospirometric report (legacy endpoint)

2. **Reports Main Page** (`INFORMES/Informes Inicio.html`):
   - Athlete list table with action buttons for each athlete
   - Quick access buttons: Consulta, Informe de lactato, Informe ergoespirométrico
   - Action buttons per athlete: Lactato, Ergoespirométrico, Informes, Eliminar
   - Dynamic athlete loading from API
   - Filter counter showing results
   - Removed "Datos año" button as requested

3. **Lactate Report Form Integration** (`INFORMES/REPORTES/LACTATO/AGREGAR LACTATO.html`):
   - Uses original AGREGAR LACTATO.html file with API integration
   - Accepts athlete_id from URL parameter via `agregar-lactato-api.js`
   - Integrates with existing form fields and validation
   - Collects all test data including measurement table
   - Saves to database via POST /api/informes/lactato
   - Redirects to INFORME LACTATO.html after successful save
   - Preserves original UI/UX and functionality

4. **Ergospirometric Report Form Integration** (`INFORMES/REPORTES/ERGO/AGREGAR ERGO.html`):
   - Uses original AGREGAR ERGO.html file with API integration
   - Accepts athlete_id from URL parameter via `agregar-ergo-api.js`
   - Integrates with existing form fields and validation
   - Collects all ergospirometric test data
   - Saves to database via POST /api/informes/ergo
   - Redirects to ERGOESPIROMETRICO.html after successful save
   - Preserves original UI/UX and functionality

### Current State
- ✅ Database schema created with users table and atletas table
- ✅ Backend server running on port 5000
- ✅ Static files serving correctly
- ✅ API adapter intercepting old routes
- ✅ Authentication system with login/logout flow working
- ✅ JWT token generation with secure secret
- ✅ Logout properly clears authentication tokens
- ✅ Navbar simplified across all 39 HTML pages consistently
- ✅ All JavaScript console errors resolved
- ✅ Complete athlete CRUD functionality implemented
  - ✅ Create new athletes via form (ATLETAS/Atletas AGREGAR.html)
  - ✅ List athletes in card-based layout with search and filters
  - ✅ Edit athletes (integration with existing EDITAR page)
  - ✅ Delete athletes (soft delete with confirmation)
- ✅ Reports system foundation implemented
  - ✅ Main reports page with athlete list and action buttons
  - ✅ Lactate report form with full data capture and API integration
  - ✅ Ergospirometric report form with full data capture and API integration
  - ✅ Backend API endpoints for creating and retrieving reports
  - ⚠️ Visualization pages pending (INFORME LACTATO.html, ERGOESPIROMETRICO.html)
  - ⚠️ Reports history page pending (REPORTES.html)
- ⚠️ JWT verification middleware not yet implemented on protected routes (recommended for production)

## Running the Application

The application runs automatically via the configured workflow:
```bash
npm start
```

Server runs on: `http://0.0.0.0:5000`

## Environment Variables

Required environment variables (auto-configured by Replit):
- `DATABASE_URL` - PostgreSQL connection string
- `PGHOST`, `PGPORT`, `PGUSER`, `PGPASSWORD`, `PGDATABASE` - Database credentials

## Development Notes

### Adding New API Endpoints
1. Add route handler in `/server/index.js`
2. Update `/api-adapter.js` if mapping from old PHP route
3. Restart the workflow

### Database Changes
The schema is managed via direct SQL. To modify:
1. Update schema in database
2. Document changes in `schema.sql`

### Frontend Modifications
Frontend files are served statically. Changes take effect immediately (browser refresh may be needed).

## Known Issues

- Some advanced features from original PHP backend may need additional API endpoints

## Architecture

This is a traditional server-rendered application with:
- Backend API for data operations
- Static frontend with jQuery for interactivity
- PostgreSQL for data persistence
- Leaflet for map visualizations
- Bootstrap for UI components

The application was designed for sports trainers to manage athletes, training cycles, sessions, and performance assessments.
