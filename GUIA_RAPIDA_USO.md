# 🏃 Guía Rápida de Uso - Nueva Funcionalidad

## ✨ Nuevas Características

### 1. 📅 Carga de Planes Predefinidos

**¿Qué hace?**  
Permite cargar automáticamente planes de entrenamiento completos (Mesociclos) en tu calendario.

**Cómo usarlo:**
1. Busca el botón verde **"Cargar Plan"** en la esquina inferior derecha
2. Haz clic y selecciona un plan de la lista:
   - Plan 10K Triatlón (12 semanas)
   - Plan 5K Carrera (8 semanas)
   - Plan 21K Medio Maratón (16 semanas)
   - Plan Fuerza General (6 semanas)
3. Elige en qué semana quieres empezar
4. ¡Listo! Las sesiones se cargan automáticamente

### 2. 🖱️ Arrastrar y Soltar Sesiones

**¿Qué hace?**  
Mueve sesiones entre días arrastrando con el mouse.

**Cómo usarlo:**
1. Haz clic en cualquier sesión y mantén presionado
2. Arrastra al día que quieras
3. Suelta el mouse
4. La sesión se mueve automáticamente

### 3. 📝 Menú de Opciones por Sesión

**¿Qué hace?**  
Acceso rápido a todas las acciones de una sesión.

**Cómo acceder:**
- **Opción A**: Clic derecho sobre la sesión
- **Opción B**: Ctrl + Clic (Cmd + Clic en Mac)
- **Opción C**: Hacer clic en los 3 puntos (⋮)

**Opciones disponibles:**
- ✏️ **Editar**: Cambia zona, duración, distancia
- 📋 **Duplicar**: Crea una copia de la sesión
- 🔄 **Mover a otra fecha**: Cambia a otro día/semana
- 👥 **Copiar a otro atleta**: Asigna a otro atleta
- 🗑️ **Eliminar**: Borra la sesión

### 4. 📊 Cálculos Automáticos

**¿Qué hace?**  
Calcula automáticamente distancias y calorías según la zona y duración.

**Cálculos incluidos:**
- Distancia recorrida (km)
- Calorías quemadas
- Tiempo por zona
- Estadísticas semanales

## 🎯 Casos de Uso Comunes

### Caso 1: Planificar un Mesociclo Completo
1. Clic en "Cargar Plan"
2. Seleccionar "Plan 10K Triatlón"
3. Elegir "Semana 1"
4. Confirmar carga
5. ✅ 12 semanas de entrenamiento listas

### Caso 2: Reorganizar Sesiones
1. Identificar sesión a mover
2. Arrastrar a nuevo día
3. Soltar
4. ✅ Calendario reorganizado

### Caso 3: Modificar una Sesión
1. Clic derecho en la sesión
2. Seleccionar "Editar"
3. Cambiar zona de 1 a 2
4. Cambiar duración de 30 a 45 min
5. Guardar
6. ✅ Sesión actualizada con nuevos cálculos

### Caso 4: Copiar Sesión a Otro Atleta
1. Clic derecho en la sesión
2. Seleccionar "Copiar a otro atleta"
3. Elegir atleta del listado
4. Seleccionar fecha
5. Confirmar
6. ✅ Sesión copiada al otro atleta

## 🎨 Elementos Visuales

### Colores por Tipo de Sesión:
- 🟢 **Verde** → Carrera
- 🔵 **Azul** → Ciclismo
- 🟦 **Turquesa** → Natación
- 🟠 **Naranja** → Fuerza

### Indicadores Visuales:
- **Sesión iluminada** → Cursor sobre ella
- **Sesión semi-transparente** → Siendo arrastrada
- **Borde azul punteado** → Zona válida para soltar
- **Menú flotante** → Opciones disponibles

## ⚡ Atajos de Teclado

- `Ctrl + Clic` → Abrir menú contextual
- `Arrastrar sesión` → Mover entre días
- `Escape` → Cerrar modales

## 🔧 Archivos Involucrados

Si necesitas personalizar:

- **Lógica de negocio**: `/assets/training-app-logic.js`
- **Estilos**: `/assets/training-app-styles.css`
- **Documentación completa**: `/DOCUMENTACION_IMPLEMENTACION.md`

## ❓ Preguntas Frecuentes

**P: ¿Los cambios se guardan automáticamente?**  
R: En la versión actual, los datos están en memoria. Recargar la página reinicia el calendario.

**P: ¿Puedo crear mis propios planes?**  
R: Sí, edita el archivo `training-app-logic.js` y agrega tu plan al array `mesociclos`.

**P: ¿Funciona offline?**  
R: Sí, una vez cargada la página, toda la funcionalidad es local.

**P: ¿Dónde veo las estadísticas?**  
R: Las estadísticas se actualizan automáticamente en las tablas al final de cada semana.

## 📱 Dispositivos Compatibles

- ✅ Escritorio (Windows, Mac, Linux)
- ✅ Tablet (iPad, Android)
- ⚠️ Móvil (funcionalidad limitada en pantallas pequeñas)

## 🆘 Solución Rápida de Problemas

**Problema**: No veo el botón "Cargar Plan"  
**Solución**: Refresca la página (F5) o limpia caché

**Problema**: El drag & drop no funciona  
**Solución**: Asegúrate de hacer clic y mantener antes de arrastrar

**Problema**: El menú contextual no aparece  
**Solución**: Intenta con Ctrl + Clic en lugar de clic derecho

## 📞 Contacto

Para más información, consulta:
- Documentación completa: `DOCUMENTACION_IMPLEMENTACION.md`
- Repositorio: AquilesSandoval/PRUEBA

---

**¡Disfruta planificando tus entrenamientos!** 🎉
