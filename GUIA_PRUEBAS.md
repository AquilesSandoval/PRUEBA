# 🧪 Guía de Pruebas - Funcionalidad de Entrenamiento

## 📋 Objetivo
Este documento te guiará paso a paso para probar todas las funcionalidades implementadas en la aplicación de entrenamiento.

## 🚀 Inicio Rápido

### Paso 0: Abrir la Aplicación
1. Navega a `/MICRO/MICROSICLO.html` en tu navegador
2. Asegúrate de que JavaScript esté habilitado
3. Verifica que puedes ver el calendario con semanas

## ✅ Pruebas de Funcionalidad

### Prueba 1: Cargar Plan Predefinido ⭐⭐⭐

**Objetivo**: Verificar que se pueden cargar planes completos automáticamente

**Pasos**:
1. Busca el botón verde **"Cargar Plan"** en la esquina inferior derecha
2. Haz clic en el botón
3. Verifica que aparece el modal "Cargar Plan Predefinido"
4. Selecciona "Plan 5K Carrera" del menú desplegable
5. Verifica que aparece la vista previa con:
   - Nombre del plan
   - Duración (8 semanas)
   - Sesiones de ejemplo
6. Selecciona "Semana 0" en el selector de semana
7. Haz clic en "Cargar Plan"
8. Confirma en el diálogo

**Resultado Esperado**:
- ✅ El modal se cierra
- ✅ Aparece mensaje "Plan Cargado!" 
- ✅ Las sesiones aparecen en el calendario
- ✅ Se ven sesiones en Lunes, Miércoles, Viernes y Sábado
- ✅ Las sesiones tienen diferentes colores según el tipo

**Captura de Pantalla Esperada**:
```
[Semana 0]
Lunes    | [Sesión Verde - Carrera 30min]
Martes   | 
Miércoles| [Sesión Verde - Carrera 25min]
Jueves   | 
Viernes  | [Sesión Naranja - Fuerza 30min]
Sábado   | [Sesión Verde - Carrera 45min]
Domingo  | 
```

---

### Prueba 2: Drag & Drop de Sesiones ⭐⭐⭐

**Objetivo**: Verificar que las sesiones se pueden mover arrastrando

**Prerrequisito**: Tener al menos una sesión en el calendario (usar Prueba 1)

**Pasos**:
1. Identifica una sesión en Lunes
2. Haz clic y mantén presionado sobre la sesión
3. Observa que la sesión se vuelve semi-transparente
4. Arrastra hacia el contenedor de Martes
5. Observa que Martes muestra un borde azul punteado
6. Suelta el mouse

**Resultado Esperado**:
- ✅ La sesión desaparece de Lunes
- ✅ La sesión aparece en Martes
- ✅ El borde azul desaparece
- ✅ Las estadísticas se actualizan (si están visibles)

---

### Prueba 3: Menú Contextual - Editar ⭐⭐

**Objetivo**: Verificar que se puede editar una sesión

**Prerrequisito**: Tener al menos una sesión en el calendario

**Pasos**:
1. Haz **clic derecho** sobre una sesión
   - *Alternativa*: Ctrl + Clic (Cmd + Clic en Mac)
2. Verifica que aparece un menú con opciones
3. Haz clic en **"Editar"**
4. Verifica que aparece el modal "Editar Sesión"
5. Cambia la zona de 1 a 2
6. Cambia la duración de 30 a 45
7. Haz clic en **"Guardar"**

**Resultado Esperado**:
- ✅ El modal se cierra
- ✅ La sesión muestra "45 min" en lugar de "30 min"
- ✅ La zona muestra "Zona 2" en lugar de "Zona 1"

---

### Prueba 4: Duplicar Sesión ⭐⭐

**Objetivo**: Verificar que se puede crear una copia de una sesión

**Pasos**:
1. Haz clic derecho sobre una sesión
2. Selecciona **"Duplicar"**
3. Observa el calendario

**Resultado Esperado**:
- ✅ Aparece una segunda sesión idéntica debajo de la original
- ✅ Ambas sesiones tienen los mismos datos
- ✅ La duplicada tiene un ID diferente

---

### Prueba 5: Mover a Otra Fecha ⭐⭐⭐

**Objetivo**: Verificar que se puede mover una sesión a un día específico

**Pasos**:
1. Haz clic derecho sobre una sesión en Lunes de Semana 0
2. Selecciona **"Mover a otra fecha"**
3. En el modal:
   - Selecciona "Semana 1" (si existe)
   - Selecciona "Viernes"
4. Haz clic en **"Mover"**

**Resultado Esperado**:
- ✅ La sesión desaparece de Lunes Semana 0
- ✅ La sesión aparece en Viernes Semana 1
- ✅ Los datos permanecen intactos

---

### Prueba 6: Eliminar Sesión ⭐

**Objetivo**: Verificar que se puede eliminar una sesión

**Pasos**:
1. Haz clic derecho sobre una sesión
2. Selecciona **"Eliminar"**
3. Confirma en el diálogo

**Resultado Esperado**:
- ✅ La sesión desaparece del calendario
- ✅ Las estadísticas se actualizan

---

### Prueba 7: Copiar a Otro Atleta ⭐⭐

**Objetivo**: Verificar el diálogo de copia a atleta

**Pasos**:
1. Haz clic derecho sobre una sesión
2. Selecciona **"Copiar a otro atleta"**
3. En el modal:
   - Selecciona "Atleta 1"
   - Selecciona una fecha
4. Haz clic en **"Copiar"**

**Resultado Esperado**:
- ✅ Aparece confirmación "Sesión copiada al atleta X"
- ✅ El modal se cierra

---

### Prueba 8: Planes Múltiples ⭐⭐⭐

**Objetivo**: Verificar que todos los planes predefinidos funcionan

**Pasos**:
1. Abre el modal "Cargar Plan"
2. Prueba cargar cada plan uno por uno:

**Plan 1: 10K Triatlón**
- Seleccionar plan → Ver vista previa
- Verificar: 12 semanas
- Verificar: Sesiones de Natación, Ciclismo, Carrera, Fuerza

**Plan 2: 5K Carrera**
- Seleccionar plan → Ver vista previa
- Verificar: 8 semanas
- Verificar: Solo sesiones de Carrera y Fuerza

**Plan 3: 21K Medio Maratón**
- Seleccionar plan → Ver vista previa
- Verificar: 16 semanas
- Verificar: Sesiones variadas de Carrera y Fuerza

**Plan 4: Fuerza General**
- Seleccionar plan → Ver vista previa
- Verificar: 6 semanas
- Verificar: Solo sesiones de Fuerza

**Resultado Esperado**:
- ✅ Todos los planes muestran vista previa correcta
- ✅ Todos los planes se cargan sin errores

---

### Prueba 9: Indicadores Visuales ⭐

**Objetivo**: Verificar efectos visuales y animaciones

**Pasos**:
1. Pasa el mouse sobre una sesión
2. Observa el efecto de hover
3. Arrastra una sesión
4. Observa la opacidad y rotación
5. Arrastra sobre una zona válida
6. Observa el borde azul

**Resultado Esperado**:
- ✅ Sesión se escala ligeramente al hover
- ✅ Sesión se vuelve semi-transparente al arrastrar
- ✅ Sesión rota levemente al arrastrar
- ✅ Zona de destino muestra borde azul punteado

---

### Prueba 10: Integración entre Páginas ⭐⭐

**Objetivo**: Verificar que funciona en todas las páginas

**Páginas a Probar**:
1. `/MICRO/MICROSICLO.html` ✅
2. `/MICRO/INICIO MICRO.html` ✅
3. `/MESO/MESOCICLO.html` ✅
4. `/MESO/INICIO MESO.html` ✅
5. `/MACRO/MACROCICLO.html` ✅
6. `/MACRO/INICIO MACRO.html` ✅

**Para cada página**:
1. Verificar que aparece el botón "Cargar Plan"
2. Verificar que el clic derecho funciona (si hay sesiones)
3. Verificar que los estilos se aplican correctamente

**Resultado Esperado**:
- ✅ Todas las páginas muestran el botón
- ✅ Funcionalidad consistente en todas las páginas

---

## 🐛 Pruebas de Errores

### Prueba E1: Modal Sin Selección
1. Abrir modal "Cargar Plan"
2. NO seleccionar ningún plan
3. Hacer clic en "Cargar Plan"

**Resultado Esperado**:
- ✅ Aparece alerta "Por favor seleccione un plan"

### Prueba E2: Cancelar Operaciones
1. Abrir modal de edición
2. Hacer clic en "Cancelar"

**Resultado Esperado**:
- ✅ Modal se cierra sin cambios

### Prueba E3: Drag Outside Calendar
1. Arrastrar sesión fuera del calendario
2. Soltar

**Resultado Esperado**:
- ✅ Sesión vuelve a su posición original

---

## 📊 Checklist de Verificación

Marca cada item cuando lo hayas probado exitosamente:

- [ ] ✅ Carga de Plan 10K Triatlón
- [ ] ✅ Carga de Plan 5K Carrera
- [ ] ✅ Carga de Plan 21K Medio Maratón
- [ ] ✅ Carga de Plan Fuerza General
- [ ] ✅ Drag & Drop entre días
- [ ] ✅ Menú contextual con clic derecho
- [ ] ✅ Editar sesión
- [ ] ✅ Duplicar sesión
- [ ] ✅ Mover a otra fecha
- [ ] ✅ Copiar a otro atleta
- [ ] ✅ Eliminar sesión
- [ ] ✅ Efectos visuales (hover, drag)
- [ ] ✅ Funcionamiento en MICRO
- [ ] ✅ Funcionamiento en MESO
- [ ] ✅ Funcionamiento en MACRO

---

## 🎬 Escenario Completo de Prueba

**Escenario**: Crear un plan de entrenamiento personalizado

1. **Iniciar**: Abrir MICROSICLO.html
2. **Cargar Plan Base**: Cargar "Plan 5K Carrera" en Semana 0
3. **Personalizar**:
   - Editar sesión de Lunes: cambiar de 30 a 40 min
   - Duplicar sesión de Miércoles
   - Mover sesión duplicada a Jueves
   - Eliminar sesión de Sábado
4. **Expandir**: 
   - Cargar "Plan Fuerza General" en Semana 2
   - Mover algunas sesiones de fuerza a Semana 1
5. **Verificar**:
   - Revisar que todas las sesiones están correctas
   - Verificar que las estadísticas son coherentes

**Tiempo Estimado**: 10-15 minutos

---

## 📝 Registro de Pruebas

### Formato de Reporte:
```
Prueba: [Número y Nombre]
Fecha: [DD/MM/YYYY]
Navegador: [Chrome/Firefox/Safari]
Estado: [✅ Pasó / ❌ Falló]
Notas: [Observaciones]
```

### Ejemplo:
```
Prueba: 1 - Cargar Plan Predefinido
Fecha: 03/10/2024
Navegador: Chrome 118
Estado: ✅ Pasó
Notas: Funciona perfectamente. Vista previa muy útil.
```

---

## 🚨 Problemas Conocidos

### Limitaciones Actuales:
1. **Persistencia**: Los datos se pierden al recargar la página
2. **Validación**: No hay validación contra backend
3. **Conflictos**: Múltiples sesiones en el mismo horario no tienen validación

### Soluciones Temporales:
1. Exportar datos antes de cerrar (función futura)
2. Trabajar en sesiones continuas
3. Organizar sesiones manualmente

---

## 📞 Reportar Problemas

Si encuentras un bug:
1. Anota el navegador y versión
2. Describe los pasos exactos para reproducir
3. Captura de pantalla si es posible
4. Abre un issue en el repositorio

---

## ✅ Criterios de Aceptación

La implementación se considera exitosa si:
- ✅ Todos los 10 tests principales pasan
- ✅ No hay errores en la consola del navegador
- ✅ La funcionalidad es consistente en todas las páginas
- ✅ Los efectos visuales funcionan correctamente
- ✅ Los 4 planes predefinidos se cargan correctamente

---

**¡Buena suerte con las pruebas!** 🎉
