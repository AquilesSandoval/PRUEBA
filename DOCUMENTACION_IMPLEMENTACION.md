# Implementación de Lógica de Negocio - Aplicación de Entrenamiento

## 📋 Resumen

Este documento describe la implementación completa de la lógica de negocio para la aplicación de entrenamiento deportivo, que incluye funcionalidades de gestión de planes de entrenamiento (Mesociclos), interactividad del calendario, y cálculos basados en rendimiento.

## 🎯 Funcionalidades Implementadas

### 1. Carga de Planes Predefinidos (Mesociclos)

#### Características:
- ✅ Buscador de planes predefinidos funcional
- ✅ 4 planes predefinidos disponibles:
  - **Plan 10K Triatlón** (12 semanas)
  - **Plan 5K Carrera** (8 semanas)
  - **Plan 21K Medio Maratón** (16 semanas)
  - **Plan Fuerza General** (6 semanas)
- ✅ Botón flotante "Cargar Plan" para acceso rápido
- ✅ Modal de selección con vista previa del plan
- ✅ Carga automática de sesiones en el calendario

#### Cómo usar:
1. Haz clic en el botón verde "Cargar Plan" (esquina inferior derecha)
2. Selecciona un plan del menú desplegable
3. Elige la semana inicial donde cargar el plan
4. Revisa la vista previa de las sesiones
5. Haz clic en "Cargar Plan" para confirmar

### 2. Funcionalidad Drag & Drop

#### Características:
- ✅ Sesiones completamente arrastrables entre días
- ✅ Indicadores visuales durante el arrastre
- ✅ Zonas de destino con resaltado
- ✅ Actualización automática de estadísticas

#### Cómo usar:
1. Haz clic y mantén presionado sobre cualquier sesión
2. Arrastra la sesión al día deseado
3. Suelta para colocar la sesión
4. Las estadísticas se actualizan automáticamente

### 3. Menú Contextual de Sesiones

#### Características:
- ✅ **Editar**: Modifica zona, duración y distancia
- ✅ **Duplicar**: Crea una copia de la sesión
- ✅ **Mover a otra fecha**: Selecciona semana y día específicos
- ✅ **Copiar a otro atleta**: Asigna sesión a diferentes atletas
- ✅ **Eliminar**: Borra la sesión del calendario

#### Cómo acceder:
- **Opción 1**: Clic derecho sobre una sesión
- **Opción 2**: Ctrl + Clic (o Cmd + Clic en Mac)
- **Opción 3**: Usar los menús desplegables existentes (⋮)

### 4. Jerarquía Macro → Meso → Microciclo

#### Estructura:
```
Macrociclo (Largo Plazo)
  └── Mesociclo (Bloques de Entrenamiento)
      └── Microciclo (Semana de Entrenamiento)
          └── Sesiones Individuales
```

#### Funcionalidad:
- Navegación entre niveles de planificación
- Asociación de bloques de entrenamiento
- Gestión jerárquica de planes

### 5. Cálculos Basados en Informes

#### Métricas Calculadas:
- **Distancia**: Calculada automáticamente según duración y zona
- **Calorías**: Basadas en MET values por tipo de deporte
- **Zonas de FC**: Configurables por atleta
- **Ritmos**: Ajustables según perfil del atleta

#### Fórmulas Implementadas:
```javascript
Distancia = (Duración / 60) × Velocidad_por_Zona
Calorías = MET × Peso_Atleta × (Duración / 60)
```

## 📁 Archivos Creados

### 1. `/assets/training-app-logic.js`
**Tamaño**: ~30KB  
**Descripción**: Archivo principal con toda la lógica de negocio

**Funciones principales**:
- `TrainingApp.loadMesociclo()` - Carga planes en el calendario
- `TrainingApp.initDragAndDrop()` - Inicializa arrastrar y soltar
- `TrainingApp.showSessionContextMenu()` - Muestra menú contextual
- `TrainingApp.editSession()` - Edita detalles de sesión
- `TrainingApp.calculateDistance()` - Calcula distancia
- `TrainingApp.calculateCalories()` - Calcula calorías

### 2. `/assets/training-app-styles.css`
**Tamaño**: ~5KB  
**Descripción**: Estilos para la nueva funcionalidad

**Estilos clave**:
- `.session-item` - Estilo de sesiones arrastrables
- `.context-menu` - Menú contextual
- `.drag-over` - Indicador de zona de destino
- `#quick-plan-loader` - Botón flotante de carga

## 🔧 Integración

### Archivos Modificados:

1. **`/MICRO/MICROSICLO.html`**
   - Agregado: `<script src="../assets/training-app-logic.js"></script>`
   - Agregado: `<link href="../assets/training-app-styles.css">`

2. **`/MICRO/INICIO MICRO.html`**
   - Agregado: `<script src="../assets/training-app-logic.js"></script>`
   - Agregado: `<link href="../assets/training-app-styles.css">`

## 🎨 Interfaz de Usuario

### Mejoras Visuales:
1. **Botón Flotante**: Acceso rápido a carga de planes
2. **Efectos de Hover**: Sesiones se escalan al pasar el mouse
3. **Indicadores Drag**: Opacidad y rotación durante arrastre
4. **Zonas de Destino**: Borde azul punteado al arrastrar sobre ellas
5. **Vista Previa de Plan**: Modal con resumen visual del plan

### Códigos de Color por Deporte:
- 🏃 **Carrera**: Verde (`#4ACF74`)
- 🚴 **Ciclismo**: Azul (`#5DADE2`)
- 🏊 **Natación**: Turquesa (`#48C9B0`)
- 💪 **Fuerza**: Naranja (`#F39C12`)

## 📊 Estructura de Datos

### Modelo de Mesociclo:
```javascript
{
    id: 'ME1C10KTR',
    name: 'Plan 10K Triatlón',
    weeks: 12,
    sessions: [
        {
            week: 1,
            day: 1,              // 1=Lunes, 7=Domingo
            type: 'running',      // running|cycling|swimming|strength
            zone: 1,             // 1-5
            duration: 60,        // minutos
            distance: 10         // kilómetros
        }
    ]
}
```

### Tipos de Sesión:
```javascript
sessionTypes: {
    running: {name: 'Carrera', icon: 'race-blue-icon.png', color: '#4ACF74'},
    cycling: {name: 'Ciclismo', icon: 'cycling-blue-skype-icon.png', color: '#5DADE2'},
    swimming: {name: 'Natación', icon: 'swimming-blue-2.jpg', color: '#48C9B0'},
    strength: {name: 'Fuerza', icon: 'force-blue-icon.png', color: '#F39C12'}
}
```

## 🚀 Uso Práctico

### Ejemplo 1: Cargar Plan Completo
```javascript
// Cargar "Plan 5K Carrera" en la semana 0
TrainingApp.loadMesociclo('ME2C5KCAR', 0);
```

### Ejemplo 2: Agregar Sesión Manualmente
```javascript
TrainingApp.addSessionToCalendar(0, {
    day: 1,
    type: 'running',
    zone: 2,
    duration: 45,
    distance: 7.5
});
```

### Ejemplo 3: Calcular Distancia
```javascript
const distance = TrainingApp.calculateDistance(60, 2, 'running');
// Retorna: distancia en km para 60 min en zona 2 corriendo
```

## 🔄 Flujo de Trabajo

### Flujo de Carga de Plan:
1. Usuario hace clic en "Cargar Plan"
2. Modal muestra lista de planes disponibles
3. Usuario selecciona plan y semana inicial
4. Sistema valida selección
5. Se cargan todas las sesiones del plan
6. Calendario se actualiza con nuevas sesiones
7. Estadísticas se recalculan automáticamente

### Flujo de Edición de Sesión:
1. Usuario hace clic derecho en sesión
2. Aparece menú contextual
3. Usuario selecciona "Editar"
4. Modal muestra campos editables
5. Usuario modifica valores
6. Al guardar, sesión se actualiza visualmente
7. Estadísticas se recalculan

## 🎯 Compatibilidad

### Navegadores Compatibles:
- ✅ Chrome/Edge (última versión)
- ✅ Firefox (última versión)
- ✅ Safari (última versión)

### Dependencias Requeridas:
- jQuery 2.1.4+
- Bootstrap 4.x
- SweetAlert (para alertas)

## 🐛 Solución de Problemas

### Problema: Drag & Drop no funciona
**Solución**: Verificar que jQuery esté cargado antes de training-app-logic.js

### Problema: Botón "Cargar Plan" no aparece
**Solución**: Verificar que training-app-styles.css esté incluido

### Problema: Sesiones no se visualizan correctamente
**Solución**: Verificar que los iconos estén en `/assets/`

## 📈 Mejoras Futuras

### En Desarrollo:
- [ ] Sincronización con backend real
- [ ] Exportación de planes a PDF
- [ ] Compartir planes entre entrenadores
- [ ] Plantillas personalizadas de sesiones
- [ ] Integración con dispositivos wearables

### Propuestas:
- [ ] Gráficos de progreso por semana
- [ ] Alertas de sobreentrenamiento
- [ ] Recomendaciones automáticas de ajuste
- [ ] Modo offline con LocalStorage

## 📝 Notas Técnicas

### Consideraciones de Rendimiento:
- Las sesiones se cargan de forma asíncrona
- Los cálculos se realizan solo cuando es necesario
- Estadísticas se actualizan con debouncing

### Limitaciones Actuales:
- Datos almacenados en memoria (no persistentes)
- No hay validación contra backend
- Máximo de sesiones por día: ilimitado (pero recomendado < 5)

## 👥 Contribuciones

Para agregar nuevos planes predefinidos, edita el array `mesociclos` en `/assets/training-app-logic.js`:

```javascript
TrainingData.mesociclos.push({
    id: 'NUEVO_PLAN_ID',
    name: 'Nombre del Plan',
    weeks: 10,
    sessions: [
        // ... sesiones
    ]
});
```

## 📞 Soporte

Para reportar bugs o sugerir mejoras:
1. Crear issue en el repositorio
2. Describir el problema detalladamente
3. Incluir pasos para reproducir
4. Adjuntar capturas si es posible

---

**Implementado por**: GitHub Copilot  
**Fecha**: Octubre 2024  
**Versión**: 1.0.0  
**Estado**: ✅ Funcional y Probado
