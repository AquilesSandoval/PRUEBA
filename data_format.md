# Especificación de Formato de Datos para la Aplicación

Este documento describe la estructura de datos que el front-end espera para poblar las diferentes secciones de la aplicación de gestión deportiva.

## 1. Informes / Reportes

### 1.1. Lista de Reportes (REPORTES.html)

La página de listado de reportes muestra los informes disponibles para un atleta. Actualmente esta página está configurada para mostrar un mensaje de "No hay contenido" cuando no hay datos.

**Estructura de datos esperada:**
```json
{
  "athlete": {
    "id": 671,
    "nombre": "JOURDAN",
    "apellido": "MENDIETA"
  },
  "reportes_ergo": [
    {
      "id": 2076,
      "tipo": "Metabólico",
      "fecha": "2024-11-21",
      "titulo": "Informe Ergoespirométrico",
      "url": "./ERGO/ERGOESPIROMETRICO.html"
    }
  ],
  "reportes_lactato": [
    {
      "id": 55,
      "tipo": "Natación",
      "fecha": "2023-12-29",
      "titulo": "Informe de Lactato",
      "url": "./LACTATO/INFORME LACTATO.html"
    }
  ]
}
```

**Elementos HTML que necesitan ser poblados:**
- Breadcrumb: `<h4>` con el nombre del atleta
- Secciones de reportes: `<div>` con clase `fondoCarpetaInformes` para cada reporte


### 1.2. Informe de Ergoespirometría (ERGOESPIROMETRICO.html)

El informe ergoespirométrico muestra datos de pruebas de metabolismo y esfuerzo con mediciones de VO2, VCO2, y zonas metabólicas.

**Estructura de datos esperada:**
```json
{
  "informe": {
    "id": 2076,
    "atleta": {
      "nombre": "JOURDAN",
      "apellido": "MENDIETA",
      "foto": "f4600a4902d2492aab666a0359eb4c42.jpg"
    },
    "fecha": "2024-11-21",
    "tipo_informe": "Metabólico",
    "protocolo": "AVANZADO",
    "medico": "Dr./Dra. [Nombre]"
  },
  "composicion_corporal": {
    "peso_kg": 63,
    "estatura_cm": 171,
    "imc": 21.5,
    "porcentaje_grasa": 12,
    "porcentaje_musculo": 40.0,
    "peso_graso_kg": 7.6,
    "peso_muscular_kg": 25,
    "comentario": "Su composición corporal es mejorable. Debe mantener su cantidad de tejido graso pero debe incrementar su masa muscular."
  },
  "gasto_energetico_reposo": {
    "vo2_promedio": 3.5,
    "fc_reposo": 50,
    "gasto_diario_kcal": 1750,
    "mets": 1.00,
    "mets_ajustados": 1.00,
    "rq": 0.85,
    "cho_porcentaje": 52,
    "grasa_porcentaje": 48,
    "cho_gramos_dia": 222,
    "grasa_gramos_dia": 87,
    "grasa_esperada_porcentaje": 12,
    "muscular_peso_ideal_porcentaje": 39.7,
    "masa_grasa_perder_kg": null,
    "peso_ideal_kg": 63.0,
    "comentario": "Niveles de actividad metabólica dentro del estándar, considerando una composición corporal óptima a medio plazo."
  },
  "gasto_energetico_ejercicio": {
    "tabla_zonas": [
      {
        "zona": 1,
        "kmh": 12.3,
        "kmh_min": 12.3,
        "kmh_max": 14.0,
        "mets": 10.5,
        "kcal_min": 11.1,
        "vo2": 40,
        "grasa_porcentaje": 60,
        "cho_porcentaje": 40,
        "grasa_kcal_min": 157,
        "cho_kcal_min": null
      },
      {
        "zona": 2,
        "kmh": 14.1,
        "kmh_min": 14.1,
        "kmh_max": 15.0,
        "mets": 12.0,
        "kcal_min": 13.1,
        "vo2": 45,
        "grasa_porcentaje": 45,
        "cho_porcentaje": 55,
        "grasa_kcal_min": 196,
        "cho_kcal_min": null
      }
      // ... más zonas
    ],
    "fat_max": {
      "kcal_min": 6.6,
      "fc_min": 144,
      "fc_max": 150,
      "ritmo_min_km": "4:15",
      "ritmo_max_min_km": "4:10"
    },
    "comentario_fat_max": "La figura representa dónde se ubica tu tasa de máxima oxidación de grasas..."
  },
  "datos_esfuerzo": {
    "zona_entrenamiento": [
      {
        "zona": 1,
        "fc_min": 133,
        "fc_max": 154,
        "tiempo_min": "8:20",
        "tiempo_max": "7:00",
        "velocidad_kmh": "7.2 - 8.6",
        "potencia_watts": "160 - 190",
        "rpm": "50 - 60",
        "rpe_min": 1,
        "rpe_max": 2
      },
      {
        "zona": 2,
        "fc_min": 154,
        "fc_max": 160,
        "tiempo_min": "7:00",
        "tiempo_max": "6:30",
        "velocidad_kmh": "8.6 - 9.2",
        "potencia_watts": "190 - 210",
        "rpm": "60 - 65",
        "rpe_min": 2,
        "rpe_max": 4
      }
      // ... más zonas
    ],
    "comparativa_historica": {
      "vvo2_pico": [7.2, 7.3, 7.5],
      "vzona4": [7.4, 7.1, 7.0],
      "vzona2": [7.7, 7.6, 7.5]
    }
  },
  "grafica_prioridad": {
    "series": [
      {
        "name": "2022",
        "lineColor": "#68869e",
        "data": [6.5, 7.3, 7.1, 6.6, 5.1]
      },
      {
        "name": "2023",
        "lineColor": "#74ccfb",
        "data": [7.2, 7.2, 7.4, 7.7, 9]
      },
      {
        "name": "Actual",
        "lineColor": "#2889A7",
        "data": [7.0, 7.5, 7.8, 8.0, 8.5]
      }
    ]
  }
}
```

**Elementos HTML importantes:**
- `#selectedImg1`: Imagen del atleta
- `.informeCorporal`: Labels con valores de composición corporal
- `.divInformeCorporal`: Contenedores de datos metabólicos
- `#container`: Gráfico Highcharts polar
- Tablas de zonas de entrenamiento con clases `.fondoTitulo` y `.sinFondoTitulo`


### 1.3. Informe de Lactato (INFORME LACTATO.html)

El informe de lactato muestra datos de pruebas de lactato para diferentes deportes (natación, ciclismo, running).

**Estructura de datos esperada:**
```json
{
  "informe": {
    "id": 55,
    "atleta": {
      "nombre": "Alberto",
      "apellido": "Garcia",
      "foto": "sin_imagen.jpg"
    },
    "fecha": "2023-12-29",
    "deporte": {
      "id": 2,
      "nombre": "Natación",
      "icono": "swimming-blue-2.jpg"
    }
  },
  "datos_prueba": {
    "ritmo_min_100": ["2:00", "1:55", "1:50", "1:45", "1:40"],
    "fc_ppm": [100, 120, 134, 148, 160],
    "lactato_mmol": [2.1, 1.9, 3.4, 5.8, 9.2],
    "rpe_0_10": [2, 4, 6, 8, 9]
  },
  "analisis": {
    "zonas": [
      {
        "zona": 2,
        "ritmo_index": 2,
        "fc": 120,
        "lactato": 1.9
      },
      {
        "zona": 4,
        "ritmo_index": 3,
        "fc": 143,
        "lactato": 4.5
      },
      {
        "zona": 6,
        "ritmo_index": 4,
        "fc": 160,
        "lactato": 9.2
      }
    ]
  },
  "zonas_entrenamiento": {
    "zonas": [
      {
        "zona": 1,
        "fc_min": 105,
        "fc_max": 115,
        "ritmo": "2:05 min/100",
        "rpe": 2
      },
      {
        "zona": 2,
        "fc_min": 115,
        "fc_max": 125,
        "ritmo": "1:58 min/100",
        "rpe": 3
      }
      // ... más zonas
    ]
  },
  "grafica": {
    "categories": ["2:00", "1:55", "1:50", "1:45", "1:40"],
    "series": [
      {
        "name": "Series 1",
        "type": "line",
        "data": []
      },
      {
        "name": "FC (ppm)",
        "type": "spline",
        "yAxis": 1,
        "data": [100, 120, 134, 148, 160],
        "color": "#434348"
      },
      {
        "name": "LA (mMol/L)",
        "type": "spline",
        "yAxis": 0,
        "data": [2.1, 1.9, 3.4, 5.8, 9.2],
        "color": "#90ed7d"
      },
      {
        "name": "RPE (0-10)",
        "type": "spline",
        "yAxis": 0,
        "data": [2, 4, 6, 8, 9],
        "color": "#f7a35c"
      }
    ]
  }
}
```

**Elementos HTML importantes:**
- `#selectedImg1`: Imagen del atleta
- `.datosDelTest`: Labels con datos de la prueba
- `#container`: Gráfico Highcharts de combinación
- Tablas de zonas con clase `.divInformeCorporal`


## 2. Planes de Entrenamiento

### 2.1. Macrociclo (MACROCICLO.html)

**Estructura de datos esperada:**
```json
{
  "macrociclo": {
    "id": 1736,
    "codigo": "MA2C10KA2COM",
    "perfil": {
      "id": 612,
      "nombre": "CORREDORA N2"
    },
    "atleta": {
      "nombre": "---"
    },
    "fecha_inicio": "2024-01-01",
    "fecha_fin": "2024-12-31",
    "objetivo": "Preparación competición",
    "fase": "Preparatoria"
  },
  "mesociclos": [
    {
      "id": 101,
      "nombre": "Mesociclo Base 1",
      "semanas": 4,
      "fecha_inicio": "2024-01-01",
      "fecha_fin": "2024-01-28"
    }
    // ... más mesociclos
  ],
  "estadisticas": {
    "total_semanas": 52,
    "total_sesiones": 260,
    "volumen_total_km": 2500
  }
}
```

**Elementos HTML importantes:**
- `#mesocyclesmesocycle-profile_id`: Select con perfil
- Breadcrumbs con código del macrociclo
- Formularios de edición con campos de fecha, objetivo, etc.


### 2.2. Mesociclo (MESOCICLO.html)

**Estructura de datos esperada:**
```json
{
  "mesociclo": {
    "id": 30901,
    "codigo": "ME7C5KA2COM",
    "perfil": {
      "id": 605,
      "nombre": "CORREDOR A2"
    },
    "macrociclo": {
      "id": 1735,
      "nombre": "Macrociclo 2024"
    },
    "atleta": {
      "nombre": "---"
    },
    "fecha_inicio": "2024-01-01",
    "fecha_fin": "2024-01-28",
    "objetivo": "Acumulación",
    "tipo": "Base",
    "semanas": 4
  },
  "microciclos": [
    {
      "id": 201,
      "semana": 1,
      "tipo": "Carga",
      "sesiones": 6,
      "volumen_km": 50
    }
    // ... más microciclos
  ]
}
```

**Elementos HTML importantes:**
- `#mesocyclesmesocycle-profile_id`: Select con perfil
- Breadcrumbs con código del mesociclo
- Formularios de configuración


### 2.3. Microciclo (MICROSICLO.html)

**Estructura de datos esperada:**
```json
{
  "microciclo": {
    "id": 401,
    "codigo": "MIC1-SEM1",
    "perfil": {
      "id": 605,
      "nombre": "CORREDOR A2"
    },
    "mesociclo": {
      "id": 30901,
      "nombre": "Mesociclo Base 1"
    },
    "semana": 1,
    "tipo": "Carga",
    "objetivo": "Desarrollo aeróbico",
    "fecha_inicio": "2024-01-01",
    "fecha_fin": "2024-01-07"
  },
  "sesiones": [
    {
      "dia": "Lunes",
      "tipo": "Rodaje",
      "duracion_min": 60,
      "distancia_km": 10,
      "zona": "Z2",
      "intensidad": "Media",
      "descripcion": "Rodaje continuo en zona 2"
    },
    {
      "dia": "Martes",
      "tipo": "Intervalos",
      "duracion_min": 45,
      "distancia_km": 8,
      "zona": "Z4-Z5",
      "intensidad": "Alta",
      "descripcion": "6x800m en Z4 con 2' recuperación"
    }
    // ... más sesiones
  ],
  "resumen": {
    "total_sesiones": 6,
    "volumen_semanal_km": 50,
    "tiempo_total_min": 360
  }
}
```

**Elementos HTML importantes:**
- Formularios de configuración del microciclo
- Tablas de sesiones diarias
- Campos de volumen y carga


## 3. Notas de Implementación

### 3.1. IDs y Clases Importantes

**Informes:**
- `.informeCorporal`: Valores numéricos de composición corporal
- `.divInformeCorporal`: Contenedores de información
- `.fondoInformCorporal`: Filas con fondo alternado
- `.datosDelTest`: Valores de pruebas de lactato
- `#container`: Contenedor principal de gráficos Highcharts
- `#exporta`: Contenedor del área exportable a PDF

**Planes:**
- `.form-control`: Campos de formulario
- `.select2`: Selectores mejorados
- `.card-body`: Contenedores de secciones

### 3.2. Integración con JavaScript

Los datos deben ser inyectados en el HTML mediante:
1. **Server-side rendering**: Los datos se insertan en el HTML durante la generación en el servidor
2. **Client-side rendering**: Los datos se cargan vía AJAX/fetch y se insertan dinámicamente con JavaScript

Para gráficos Highcharts, los datos deben pasarse en el formato:
```javascript
Highcharts.chart('container', {
  // ... configuración del gráfico
  series: datos.grafica.series
});
```

### 3.3. Formato de Fechas

Las fechas deben proporcionarse en formato ISO 8601: `YYYY-MM-DD`

Para visualización, se pueden formatear según la localización:
- Español: `DD/MM/YYYY` o `DD de MMMM de YYYY`
- Inglés: `MM/DD/YYYY` o `MMMM DD, YYYY`

### 3.4. Valores Numéricos

- Decimales: usar punto (.) como separador decimal
- Miles: no incluir separadores en los datos JSON, formatear en el frontend
- Valores nulos: usar `null` en JSON cuando no hay datos

### 3.5. Imágenes

Las rutas de imágenes deben ser relativas a la ubicación de la página HTML:
- Atletas: `../../../assets/[nombre_archivo]`
- Iconos: `../../../assets/[nombre_icono]`

## 4. Ejemplo de Flujo de Datos

### Paso 1: Backend proporciona datos
```json
{
  "informe": { /* datos del informe */ },
  "composicion_corporal": { /* datos */ },
  // ... más secciones
}
```

### Paso 2: Frontend procesa e inserta
```javascript
// Insertar datos básicos
document.querySelector('#athlete-name').textContent = data.informe.atleta.nombre;
document.querySelector('#peso-kg').textContent = data.composicion_corporal.peso_kg;

// Insertar gráfico
Highcharts.chart('container', {
  series: data.grafica.series
});
```

### Paso 3: Usuario visualiza el informe completo

El HTML renderizado muestra todos los datos del atleta con la estructura y estilos existentes, pero con datos dinámicos.
