# Arquitectura de Datos - Aplicación Deportiva

## Diagrama de Flujo de Datos

```
┌─────────────────────────────────────────────────────────────────┐
│                         BASE DE DATOS                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Atletas    │  │   Informes   │  │    Planes    │          │
│  │              │  │              │  │              │          │
│  │ - id         │  │ - id         │  │ - id         │          │
│  │ - nombre     │  │ - atleta_id  │  │ - codigo     │          │
│  │ - apellido   │  │ - tipo       │  │ - tipo       │          │
│  │ - foto       │  │ - fecha      │  │ - fechas     │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘
                               │
                               │ Consulta SQL
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                      BACKEND / API REST                          │
│                                                                  │
│  GET /api/informes/ergo/:id                                     │
│  ├─ Consulta DB                                                 │
│  ├─ Formatea según data_format.md                              │
│  └─ Retorna JSON                                                │
│                                                                  │
│  {                                                               │
│    "informe": {                                                  │
│      "atleta": { "nombre": "...", "apellido": "..." },          │
│      "fecha": "2024-11-21",                                      │
│      ...                                                         │
│    },                                                            │
│    "composicion_corporal": { ... },                             │
│    "gasto_energetico_reposo": { ... },                          │
│    ...                                                           │
│  }                                                               │
└─────────────────────────────────────────────────────────────────┘
                               │
                               │ HTTP Request
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                    FRONTEND / JavaScript                         │
│                                                                  │
│  fetch('/api/informes/ergo/123')                                │
│    .then(response => response.json())                           │
│    .then(data => {                                              │
│                                                                  │
│      // Usar ejemplo_implementacion.js                          │
│      poblarInformeErgo(data);                                   │
│                                                                  │
│      // O manualmente:                                          │
│      document.getElementById('athlete-name').textContent =      │
│        data.informe.atleta.nombre;                              │
│                                                                  │
│      // Gráficos:                                               │
│      Highcharts.chart('container', {                            │
│        series: data.grafica_prioridad.series                    │
│      });                                                         │
│    });                                                           │
└─────────────────────────────────────────────────────────────────┘
                               │
                               │ DOM Manipulation
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                   PLANTILLA HTML DINÁMICA                        │
│                                                                  │
│  <strong id="athlete-name-metabolico"></strong>                 │
│                          ↓ Poblado con                          │
│  <strong id="athlete-name-metabolico">JOURDAN MENDIETA</strong>│
│                                                                  │
│  <label id="peso-corporal"></label>                             │
│                          ↓ Poblado con                          │
│  <label id="peso-corporal">63</label>                           │
│                                                                  │
│  <div id="container"></div>                                     │
│                          ↓ Renderizado con                      │
│  <div id="container">[Gráfico Highcharts]</div>                │
└─────────────────────────────────────────────────────────────────┘
```

## Estructura de Archivos del Proyecto

```
PRUEBA/
│
├── 📄 data_format.md                    ← Especificación de JSON
├── 📄 PLANTILLAS_README.md              ← Guía de implementación
├── 📄 ejemplo_implementacion.js         ← Código de referencia
├── 📄 RESUMEN_TRANSFORMACION.md        ← Este resumen
├── 📄 ARQUITECTURA.md                   ← Este archivo
│
├── INFORMES/
│   └── REPORTES/
│       ├── 📋 REPORTES.html             ← Lista de reportes
│       ├── ERGO/
│       │   ├── 📋 ERGOESPIROMETRICO.html    ← Informe detallado
│       │   └── 📜 ERGOESPIROMETRICO.js      ← Gráfico polar
│       └── LACTATO/
│           └── 📋 INFORME LACTATO.html      ← Informe lactato
│
├── MACRO/
│   └── 📋 MACROCICLO.html               ← Plan macrociclo
├── MESO/
│   └── 📋 MESOCICLO.html                ← Plan mesociclo
└── MICRO/
    └── 📋 MICROSICLO.html               ← Plan microciclo
```

## Mapeo de Datos: DB → JSON → HTML

### Ejemplo: Composición Corporal

```
BASE DE DATOS
┌─────────────────────────┐
│ tabla: informes_ergo    │
├─────────────────────────┤
│ id: 123                 │
│ atleta_id: 45           │
│ peso_kg: 63             │
│ estatura_cm: 171        │
│ imc: 21.5               │
│ porcentaje_grasa: 12    │
└─────────────────────────┘
         │
         │ Backend formatea
         ▼
JSON (data_format.md)
{
  "composicion_corporal": {
    "peso_kg": 63,
    "estatura_cm": 171,
    "imc": 21.5,
    "porcentaje_grasa": 12,
    ...
  }
}
         │
         │ JavaScript procesa
         ▼
HTML (ERGOESPIROMETRICO.html)
<div>
  Peso: <label id="peso-corporal">63</label> kg
</div>
<div>
  Estatura: <label id="estatura">171</label> cm
</div>
<div>
  IMC: <label id="imc">21.5</label>
</div>
```

## Flujo de Trabajo Completo

### 1️⃣ Preparación de Base de Datos
```sql
-- Ejemplo de estructura de tabla
CREATE TABLE informes_ergo (
    id INT PRIMARY KEY,
    atleta_id INT,
    fecha DATE,
    peso_kg DECIMAL(5,2),
    estatura_cm INT,
    imc DECIMAL(4,1),
    ...
    FOREIGN KEY (atleta_id) REFERENCES atletas(id)
);
```

### 2️⃣ Implementación de API

**Backend (Python/Flask):**
```python
@app.route('/api/informes/ergo/<int:id>')
def get_informe(id):
    informe = db.session.query(InformeErgo).get(id)
    atleta = informe.atleta
    
    # Formatear según data_format.md
    return jsonify({
        "informe": {
            "id": informe.id,
            "atleta": {
                "nombre": atleta.nombre,
                "apellido": atleta.apellido,
                "foto": atleta.foto_url
            },
            "fecha": informe.fecha.isoformat()
        },
        "composicion_corporal": {
            "peso_kg": float(informe.peso_kg),
            "estatura_cm": informe.estatura_cm,
            "imc": float(informe.imc),
            ...
        },
        ...
    })
```

### 3️⃣ Carga de Datos en Frontend

**JavaScript:**
```javascript
// Opción A: Desde archivo de ejemplo
const poblarInformeErgo = async (id) => {
    const data = await fetch(`/api/informes/ergo/${id}`).then(r => r.json());
    
    // Usar función del ejemplo_implementacion.js
    poblarInformeErgo(data);
};

// Opción B: Personalizado
const cargarYMostrar = async (id) => {
    const data = await fetch(`/api/informes/ergo/${id}`).then(r => r.json());
    
    // Información básica
    document.getElementById('athlete-name-metabolico').textContent = 
        `${data.informe.atleta.nombre} ${data.informe.atleta.apellido}`;
    
    // Composición corporal
    document.getElementById('peso-corporal').textContent = data.composicion_corporal.peso_kg;
    document.getElementById('estatura').textContent = data.composicion_corporal.estatura_cm;
    
    // Gráfico
    Highcharts.chart('container', {
        series: data.grafica_prioridad.series
    });
};
```

## Ventajas de Esta Arquitectura

### ✅ Separación de Responsabilidades
- **Backend**: Lógica de negocio y acceso a datos
- **API**: Capa de comunicación estandarizada (JSON)
- **Frontend**: Presentación y experiencia de usuario

### ✅ Reutilización
- Las plantillas HTML se reutilizan para cualquier atleta/informe
- El formato JSON es consistente y predecible
- El código JavaScript se puede modularizar

### ✅ Mantenibilidad
- Cambios en el diseño: solo modificar CSS y HTML
- Cambios en datos: solo modificar estructura JSON
- Cambios en lógica: solo modificar backend

### ✅ Escalabilidad
- Fácil agregar nuevos tipos de informes
- Posible implementar caching en API
- Frontend puede ser servido desde CDN

## Patrones de Diseño Aplicados

### 1. Template Pattern
Las plantillas HTML son templates que se llenan con datos dinámicos.

### 2. MVC (Model-View-Controller)
- **Model**: Base de datos
- **View**: Plantillas HTML
- **Controller**: API Backend + JavaScript

### 3. RESTful API
Endpoints siguen convenciones REST:
- `GET /api/informes/ergo/:id` - Obtener un informe
- `GET /api/informes/lactato/:id` - Obtener informe de lactato
- `GET /api/planes/macro/:id` - Obtener macrociclo

### 4. Data Transfer Object (DTO)
El JSON sirve como DTO entre backend y frontend.

## Extensibilidad Futura

### Posibles Mejoras

**Backend:**
- ✨ Agregar autenticación JWT
- ✨ Implementar caching con Redis
- ✨ Crear endpoints para actualizar datos
- ✨ Versionado de API (v1, v2)

**Frontend:**
- ✨ Implementar Progressive Web App (PWA)
- ✨ Agregar offline mode con Service Workers
- ✨ Optimizar carga con lazy loading
- ✨ Agregar internacionalización (i18n)

**Datos:**
- ✨ Agregar validaciones con JSON Schema
- ✨ Implementar GraphQL como alternativa
- ✨ Crear sistema de plantillas de informes

## Checklist de Implementación

- [ ] Diseñar schema de base de datos según data_format.md
- [ ] Crear modelos ORM (SQLAlchemy, Django ORM, etc.)
- [ ] Implementar endpoints de API REST
- [ ] Validar respuestas JSON contra especificación
- [ ] Implementar funciones de poblado en frontend
- [ ] Probar con datos reales
- [ ] Optimizar rendimiento
- [ ] Documentar API (Swagger/OpenAPI)
- [ ] Configurar CI/CD
- [ ] Desplegar a producción

## Recursos Adicionales

- **Highcharts Docs**: https://www.highcharts.com/docs/
- **Bootstrap**: https://getbootstrap.com/docs/
- **REST API Best Practices**: https://restfulapi.net/
- **JSON Schema**: https://json-schema.org/

---

**Estado**: ✅ Arquitectura definida y documentada  
**Siguiente paso**: Implementar backend API según esta especificación
