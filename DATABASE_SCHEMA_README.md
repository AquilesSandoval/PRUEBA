# Database Schema Documentation

## Overview

This database schema supports a comprehensive training application for athletes. It manages the complete training lifecycle including athletes, training cycles (macro/meso/micro), sessions, exercises, reports, and performance metrics.

## Database Structure

### Core Tables

#### 1. **atletas** (Athletes)
Main table storing athlete information including:
- Personal details (name, birth date, contact info)
- Physical metrics (weight, height)
- Sport preferences
- Integration with Garmin and Strava
- Status and notes

#### 2. Training Cycles Hierarchy

**macrociclos** → **mesociclos** → **microciclos** → **sesiones**

- **macrociclos**: Long-term planning (6-12 months)
- **mesociclos**: Medium-term planning (3-6 weeks)
- **microciclos**: Weekly planning
- **sesiones**: Individual training sessions

Each level maintains references to the parent level and athlete, supporting both hierarchical and direct athlete relationships.

### Exercise and Circuit Management

#### 3. **ejercicios** (Exercises)
Library of exercises with:
- Category and muscle group classification
- Difficulty level
- Instructions and media (video, images)
- Equipment requirements

#### 4. **circuitos** (Circuits)
Training circuits that group multiple exercises:
- Circuit type (strength, cardio, HIIT, functional)
- Estimated duration and calories
- ECOS totals

#### 5. **circuitos_ejercicios**
Junction table linking exercises to circuits with:
- Order and category
- Sets, repetitions, weight
- Rest periods

#### 6. **sesiones_circuitos**
Links circuits to training sessions

### Reports and Assessments

#### 7. **informes** (Reports)
Generic reports table supporting multiple assessment types:
- Lactate tests
- Ergoespirometric tests
- Anthropometric measurements
- Strength assessments
- JSON storage for flexible data

#### 8. **informes_lactato** (Lactate Reports)
Detailed lactate test results:
- Aerobic and anaerobic thresholds
- Heart rate zones
- VO2max estimates
- All measurement data in JSON

#### 9. **informes_ergo** (Ergoespirometric Reports)
Comprehensive cardiorespiratory assessment:
- VO2max (relative and absolute)
- Ventilatory thresholds (VT1, VT2)
- Power metrics
- Respiratory quotient
- Training zones calculation

### Training Zone Management

#### 10. **zonas_entrenamiento** (Training Zones)
Personalized training zones for each athlete:
- Sport-specific zones
- Zone type (heart rate, pace, power, speed)
- 10 configurable zones
- Validity period
- Linked to assessment reports

### Interviews and Questionnaires

#### 11. **entrevistas** (Interviews)
Athlete assessment questionnaires:
- PARQ (Physical Activity Readiness)
- Injury history
- Goals and objectives
- Strength assessment
- Cardiovascular health
- Sensory assessment
- Flexible JSON data storage

### Swimming-Specific Features

#### 12. **drills** (Drills)
Technical exercise library (primarily for swimming):
- Sport-specific categorization
- Difficulty level
- Objectives and instructions
- Video tutorials

#### 13. **bloques_drills** (Drill Blocks)
Groupings of drills for structured training

#### 14. **bloques_drills_items**
Junction table for drill blocks

### Templates and Integrations

#### 15. **planes_predefinidos** (Predefined Plans)
Template mesocycles that can be applied to athletes:
- Sport and difficulty classification
- Session configuration in JSON
- Usage tracking
- Public/private visibility

#### 16. **actividades_importadas** (Imported Activities)
Activities imported from Garmin and Strava:
- External activity ID mapping
- Automatic data sync
- Link to planned sessions
- Complete activity data in JSON

#### 17. **metricas_rendimiento** (Performance Metrics)
Time-series performance data:
- Weight, body fat percentage
- VO2max, resting heart rate
- Heart rate variability (HRV)
- Training load and fatigue
- Custom metrics

## Key Features

### 1. Flexible Hierarchy
The schema supports both:
- Strict hierarchical planning (Macro → Meso → Micro → Session)
- Direct athlete-to-session relationships
- All relationships use `ON DELETE SET NULL` or `CASCADE` appropriately

### 2. Multi-Sport Support
Built-in support for:
- Running (Carrera)
- Cycling (Bici)
- Swimming (Natación)
- Triathlon
- Strength training
- Other activities

### 3. Device Integration
Native support for:
- Garmin Connect
- Strava
- Manual activity entry

### 4. Extensible Data Model
JSON fields in key tables allow for:
- Future feature additions without schema changes
- Storage of complex nested data
- Device-specific metrics

### 5. Comprehensive Indexing
Indexes on:
- All foreign keys
- Frequently queried fields (dates, status, sport type)
- Athlete lookups

## Data Relationships

```
atletas (1) ─────┬─── (N) macrociclos
                 │
                 ├─── (N) mesociclos ─── (1) macrociclos
                 │
                 ├─── (N) microciclos ─── (1) mesociclos
                 │
                 ├─── (N) sesiones ────┬─── (1) microciclos
                 │                     ├─── (1) mesociclos  
                 │                     └─── (1) macrociclos
                 │
                 ├─── (N) informes ────┬─── (1) informes_lactato
                 │                     └─── (1) informes_ergo
                 │
                 ├─── (N) zonas_entrenamiento ─── (1) informes
                 │
                 ├─── (N) entrevistas
                 │
                 ├─── (N) actividades_importadas ─── (1) sesiones
                 │
                 └─── (N) metricas_rendimiento

ejercicios (N) ─── circuitos_ejercicios ─── (N) circuitos
circuitos (N) ──── sesiones_circuitos ───── (N) sesiones

drills (N) ──────── bloques_drills_items ─── (N) bloques_drills
```

## Usage Notes

### Character Set
All tables use `utf8mb4` with `utf8mb4_unicode_ci` collation for full international character support.

### Storage Engine
InnoDB for ACID compliance and foreign key support.

### Auto-increment IDs
All tables use auto-increment integer primary keys.

### Timestamps
Most tables include `created_at` and `updated_at` timestamps for audit trails.

### Soft Deletes
The schema uses database-level CASCADE and SET NULL rather than soft deletes for simplicity.

## Migration Path

To initialize the database:

```bash
mysql -u username -p database_name < schema.sql
```

For existing databases, consider creating migrations for incremental changes.

## Future Enhancements

Potential additions:
- Nutrition tracking tables
- Sleep and recovery metrics
- Competition results
- Team/coach management
- Subscription/payment handling
- Messaging system

## Related Files

- `schema.sql` - The complete SQL schema
- `assets/training-app-logic.js` - Frontend data models
- `DOCUMENTACION_IMPLEMENTACION.md` - Application documentation

---

**Version:** 1.0.0  
**Created:** 2024  
**Engine:** MySQL/MariaDB 5.7+
