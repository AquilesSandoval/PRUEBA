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