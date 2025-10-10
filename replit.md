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
   - Clean, simplified form with essential athlete fields
   - Input validation and required field indicators
   - Real-time API integration with success/error handling
   - Redirect to athlete list after successful creation
   - Icons: 💾 Save button, Cancel button with icon

3. **Athlete List with Cards** (`ATLETAS/Atletas INICIO.html`):
   - Replaced static table with dynamic card-based grid layout
   - Real-time athlete loading from API
   - Search functionality (by name, email, phone)
   - Filter by sport (Carrera, Bici, Natación, Triatlón, Otro)
   - Card displays: photo, name, age, email, phone, sport badge
   - Action buttons per card: ✏️ Edit, 🗑️ Delete
   - Sport-specific color coding for visual differentiation
   - Responsive 3-column grid (adjusts to screen size)

4. **UI Enhancements**:
   - Added emoji icons to all interactive buttons (☰ menu, ✏️ edit, 🗑️ delete, 💾 save)
   - Hover effects on athlete cards
   - Color-coded sport badges
   - Loading states and empty state messaging
   - Confirmation dialogs for delete operations

2. **Index page redesign:**
   - Replaced world map with ALL IN YOUR MIND logo
   - Removed "Actividades realizadas", "Actividades programadas", "Competiciones" sections
   - Kept only: Logo, "Mis pendientes", "Cumpleaños del Mes"

3. **JavaScript error fixes:**
   - Fixed DataTable initialization errors by adding existence checks
   - Fixed Leaflet map errors by conditionally initializing map code only when map element exists
   - All console errors resolved - application runs cleanly

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
- ✅ UI enhanced with emoji icons on all interactive buttons
- ⚠️ Some frontend features may need additional API endpoints
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
