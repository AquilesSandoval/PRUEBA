# PRUEBA - Sitio Web Refactorizado

## 🎯 Descripción

Este repositorio contiene un sitio web estático completamente autocontenido y optimizado, resultado de una refactorización completa que:
- Convierte todas las URLs externas a rutas relativas locales
- Centraliza todos los recursos (CSS, JS, imágenes) en una única carpeta `assets`
- Elimina duplicaciones masivas de archivos
- Permite navegación completa sin conexión a internet

## 📊 Estadísticas del Proyecto

- **43** archivos HTML
- **237** recursos únicos en carpeta assets
- **1,654** archivos duplicados eliminados
- **~35 MB** de espacio ahorrado
- **100%** autocontenido - no requiere internet

## 🚀 Inicio Rápido

### Abrir el Sitio

1. Clona o descarga este repositorio
2. Abre `INICIO.html` en tu navegador web
3. ¡Navega libremente por todo el sitio!

### Páginas Principales

- **Inicio**: `INICIO.html`
- **Atletas**: `ATLETAS/Atletas INICIO.html`
- **Dashboard**: `ATLETAS/DASHBORD/Atletas DASHBOARD.html`
- **Microciclo**: `MICRO/INICIO MICRO.html`
- **Mesociclo**: `MESO/INICIO MESO.html`
- **Macrociclo**: `MACRO/INICIO MACRO.html`
- **Informes**: `INFORMES/REPORTES/REPORTES.html`

## 📁 Estructura del Proyecto

```
PRUEBA/
├── assets/                           # Todos los recursos centralizados
│   ├── *.css                        # Archivos de estilo
│   ├── *.js.descarga                # Archivos JavaScript
│   ├── *.png, *.jpg, *.svg          # Imágenes
│   └── ... (237 archivos en total)
│
├── INICIO.html                       # Página principal
│
├── ATLETAS/                          # Módulo de atletas
│   ├── Atletas INICIO.html
│   ├── DASHBORD/
│   │   ├── Atletas DASHBOARD.html
│   │   └── Entrevista/              # Entrevistas y evaluaciones
│   ├── EDITAR/                      # Edición de atletas
│   ├── GARMIN/                      # Integración Garmin
│   └── STRAVA/                      # Integración Strava
│
├── INFORMES/                         # Módulo de informes
│   └── REPORTES/
│       ├── REPORTES.html
│       ├── LACTATO/                 # Informes de lactato
│       └── ERGO/                    # Informes ergoespirométricos
│
├── MACRO/                            # Macrociclos
│   ├── INICIO MACRO.html
│   └── MACROCICLO.html
│
├── MESO/                             # Mesociclos
│   ├── INICIO MESO.html
│   └── MESOCICLO.html
│
├── MICRO/                            # Microciclos
│   ├── INICIO MICRO.html
│   └── MICROSICLO.html
│
├── POSIBLES NO NECESARIOS/           # Módulos adicionales
│   ├── Circuitos/
│   ├── DRILLS/
│   ├── EJERCICIO/
│   └── SESION/
│
└── REFACTORING_SUMMARY.md           # Documentación completa
```

## ✨ Características

### Navegación Local
- ✅ Todos los enlaces internos usan rutas relativas
- ✅ Navegación fluida entre todas las páginas
- ✅ Sin dependencias de URLs externas

### Recursos Optimizados
- ✅ Carpeta `assets` centralizada con todos los recursos
- ✅ Eliminación de 1,654 archivos duplicados
- ✅ Referencias automáticamente actualizadas en todos los HTML
- ✅ Carga eficiente de estilos, scripts e imágenes

### Autocontenido
- ✅ Funciona completamente offline
- ✅ No requiere servidor web (usa `file://` protocol)
- ✅ Portable - fácil de compartir y distribuir
- ✅ Sin dependencias externas

### 🆕 Nueva Funcionalidad de Entrenamiento (Octubre 2024)
- ✅ **Carga de Planes Predefinidos**: 4 mesociclos listos para usar
- ✅ **Drag & Drop**: Mueve sesiones entre días arrastrando
- ✅ **Menú Contextual**: Editar, duplicar, mover, copiar y eliminar sesiones
- ✅ **Cálculos Automáticos**: Distancias y calorías basadas en zonas
- ✅ **Botón Flotante**: Acceso rápido a "Cargar Plan"

Ver [Guía Rápida de Uso](GUIA_RAPIDA_USO.md) | [Documentación Completa](DOCUMENTACION_IMPLEMENTACION.md)


## 🛠️ Detalles Técnicos

### Tecnologías Utilizadas
- HTML5
- CSS3 (Bootstrap, Atlantis theme)
- JavaScript (jQuery, Yii Framework assets)
- Leaflet (mapas)
- Highcharts (gráficos)
- Select2 (selects mejorados)

### Compatibilidad
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ℹ️ Algunos features pueden requerir JavaScript habilitado

## 📝 Notas

- Los archivos `.descarga` son recursos JavaScript/CSS originales del sitio web
- Algunos enlaces apuntan a `#` porque representan páginas dinámicas no disponibles como HTML estático
- El favicon aún referencia el servidor original (puede actualizarse localmente si se desea)
- Las funcionalidades que requieren backend (formularios, AJAX) están deshabilitadas en esta versión estática

## 🔄 Proceso de Refactorización

El proyecto original tenía:
- 39 carpetas `_files` con recursos duplicados
- 1,891 archivos de recursos con mucha redundancia
- Enlaces externos dependientes de internet

**Ahora tiene:**
- 1 carpeta `assets` centralizada
- 237 archivos únicos
- Navegación completamente local

Ver `REFACTORING_SUMMARY.md` para detalles completos del proceso.

## 📖 Documentación Adicional

- `REFACTORING_SUMMARY.md` - Documentación técnica completa del refactoring
- Comentarios en HTML preservados del código original

## 🤝 Contribuciones

Este es un sitio estático convertido de una aplicación web. Para mejoras:
1. Mantener la estructura de carpetas actual
2. Colocar nuevos recursos en `assets/`
3. Usar rutas relativas para navegación
4. Actualizar este README si se hacen cambios estructurales

## 📄 Licencia

[Según la licencia del proyecto original]

## 👥 Créditos

- Sitio original: All In Your Mind (AIYM)
- Refactorización: Automatizada con Python scripts
- Fecha de refactorización: Octubre 2024

---

**¿Problemas o preguntas?** Revisa `REFACTORING_SUMMARY.md` para más detalles técnicos.
