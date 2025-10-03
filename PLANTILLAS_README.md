# Guía de Uso de Plantillas Dinámicas

## Resumen

Este proyecto ha sido transformado de un front-end estático con datos de ejemplo a un sistema de plantillas dinámicas listo para ser poblado con datos reales desde un backend.

## Cambios Realizados

### 1. Archivos HTML Transformados

Los siguientes archivos HTML han sido convertidos en plantillas "en blanco":

**Informes:**
- `INFORMES/REPORTES/REPORTES.html` - Lista de reportes del atleta
- `INFORMES/REPORTES/ERGO/ERGOESPIROMETRICO.html` - Detalle de informe ergoespirométrico
- `INFORMES/REPORTES/LACTATO/INFORME LACTATO.html` - Detalle de informe de lactato

**Planes de Entrenamiento:**
- `MACRO/MACROCICLO.html` - Vista de macrociclo
- `MESO/MESOCICLO.html` - Vista de mesociclo
- `MICRO/MICROSICLO.html` - Vista de microciclo

### 2. Archivos JavaScript Actualizados

**Gráficos:**
- `INFORMES/REPORTES/ERGO/ERGOESPIROMETRICO.js` - Arrays de datos vaciados

### 3. Documento de Especificación

El archivo `data_format.md` contiene la especificación completa del formato de datos que cada plantilla necesita.

## Cómo Usar las Plantillas

### Opción 1: Renderizado del Lado del Servidor (Recomendado)

Si estás usando un framework backend (PHP, Python, Node.js, etc.), puedes renderizar las plantillas HTML con datos directamente:

**Ejemplo en PHP:**
```php
<?php
// Cargar datos del atleta
$atleta = obtenerDatosAtleta($id);
$informe = obtenerInformeErgo($idInforme);

// Renderizar la plantilla
include 'INFORMES/REPORTES/ERGO/ERGOESPIROMETRICO.html';
?>

<!-- En el HTML, reemplazar los IDs con valores PHP: -->
<script>
  document.getElementById('athlete-name-metabolico').textContent = '<?= $atleta["nombre"] . " " . $atleta["apellido"] ?>';
  document.getElementById('peso-corporal').textContent = '<?= $informe["composicion_corporal"]["peso_kg"] ?>';
  // ... más campos
</script>
```

**Ejemplo en Python (Flask/Django):**
```python
from flask import render_template

@app.route('/informe/ergo/<int:id>')
def informe_ergo(id):
    atleta = obtener_datos_atleta(id)
    informe = obtener_informe_ergo(id)
    
    return render_template(
        'ERGOESPIROMETRICO.html',
        atleta=atleta,
        informe=informe
    )
```

### Opción 2: Renderizado del Lado del Cliente (JavaScript)

Si prefieres cargar los datos dinámicamente con AJAX, puedes usar JavaScript:

**Ejemplo:**
```javascript
// Cargar datos del backend
fetch(`/api/informe/ergo/${id}`)
  .then(response => response.json())
  .then(data => {
    // Poblar los campos
    document.getElementById('athlete-name-metabolico').textContent = 
      `${data.informe.atleta.nombre} ${data.informe.atleta.apellido}`;
    
    document.getElementById('peso-corporal').textContent = 
      data.composicion_corporal.peso_kg;
    
    document.getElementById('estatura').textContent = 
      data.composicion_corporal.estatura_cm;
    
    // ... más campos
    
    // Poblar gráfico
    Highcharts.chart('container', {
      // ... configuración existente
      series: data.grafica_prioridad.series
    });
  });
```

## Mapeo de IDs a Datos

### Informe Ergoespirométrico

| ID en HTML | Campo en JSON | Ejemplo |
|------------|---------------|---------|
| `athlete-name-metabolico` | `informe.atleta.nombre + apellido` | "JOURDAN MENDIETA" |
| `peso-corporal` | `composicion_corporal.peso_kg` | 63 |
| `estatura` | `composicion_corporal.estatura_cm` | 171 |
| `imc` | `composicion_corporal.imc` | 21.5 |
| `porcentaje-grasa` | `composicion_corporal.porcentaje_grasa` | 12 |
| `vo2-promedio` | `gasto_energetico_reposo.vo2_promedio` | 3.5 |
| `fc-reposo` | `gasto_energetico_reposo.fc_reposo` | 50 |

Ver `data_format.md` para el mapeo completo.

### Informe de Lactato

| ID en HTML | Campo en JSON | Ejemplo |
|------------|---------------|---------|
| `athlete-name-lactato` | `informe.atleta.nombre + apellido` | "Alberto Garcia" |
| `fecha-prueba-lactato` | `informe.fecha` | "29 de Diciembre del 2023" |
| `ritmo-data-container` | `datos_prueba.ritmo_min_100` | ["2:00", "1:55", ...] |
| `fc-data-container` | `datos_prueba.fc_ppm` | [100, 120, ...] |
| `lactato-data-container` | `datos_prueba.lactato_mmol` | [2.1, 1.9, ...] |
| `zona2-numero` | `analisis.zonas[0].zona` | 2 |
| `zona2-fc` | `analisis.zonas[0].fc` | 120 |

Ver `data_format.md` para el mapeo completo.

### Planes (Macro/Meso/Micro)

| ID en HTML | Campo en JSON | Ejemplo |
|------------|---------------|---------|
| `macrociclo-atleta-nombre` | `macrociclo.atleta.nombre` | "---" |
| `macrociclo-codigo` | `macrociclo.codigo` | "MA2C10KA2COM" |
| `mesociclo-atleta-nombre` | `mesociclo.atleta.nombre` | "---" |
| `mesociclo-codigo` | `mesociclo.codigo` | "ME7C5KA2COM" |

## Poblado de Datos de Arrays

Algunos datos requieren generar elementos HTML dinámicamente:

### Ejemplo: Datos de Prueba de Lactato

```javascript
// Los datos de la prueba vienen como arrays
const ritmos = ["2:00", "1:55", "1:50", "1:45", "1:40"];

// Generar labels para cada valor
const ritmoContainer = document.getElementById('ritmo-data-container');
ritmoContainer.innerHTML = ritmos.map(r => 
  `<label class="datosDelTest">${r}</label>`
).join('');
```

### Ejemplo: Zonas Metabólicas

```javascript
// Para la tabla de zonas en ERGO
const zonas = data.gasto_energetico_ejercicio.tabla_zonas;

// Generar filas de tabla dinámicamente
const tbody = document.getElementById('tabla-zonas-tbody');
zonas.forEach((zona, index) => {
  const fondo = index % 2 === 0 ? 'fondoTitulo' : 'sinFondoTitulo';
  tbody.innerHTML += `
    <div class="col-sm-1 float-left pleft-0 ${fondo}" align="center">
      ${zona.zona}
    </div>
    <div class="col-sm-1 float-left pleft-0 ${fondo}" align="center">
      ${zona.kmh}
    </div>
    <!-- más columnas -->
  `;
});
```

## Gráficos Highcharts

Los gráficos se inicializan en los archivos JS correspondientes. Para poblarlos:

```javascript
// Actualizar el gráfico existente
const chart = Highcharts.charts.find(c => c && c.renderTo.id === 'container');

if (chart) {
  // Actualizar series
  data.grafica_prioridad.series.forEach((serie, index) => {
    if (chart.series[index]) {
      chart.series[index].setData(serie.data);
      chart.series[index].update({ name: serie.name });
    }
  });
} else {
  // O crear nuevo gráfico con los datos
  Highcharts.chart('container', {
    // configuración del gráfico
    series: data.grafica_prioridad.series
  });
}
```

## Validaciones Recomendadas

Antes de poblar las plantillas, valida los datos:

```javascript
function validarInformeErgo(data) {
  // Verificar que existan las propiedades necesarias
  if (!data.informe || !data.composicion_corporal) {
    throw new Error('Datos incompletos');
  }
  
  // Verificar tipos de datos
  if (typeof data.composicion_corporal.peso_kg !== 'number') {
    throw new Error('Peso debe ser un número');
  }
  
  // Verificar rangos válidos
  if (data.composicion_corporal.imc < 10 || data.composicion_corporal.imc > 50) {
    console.warn('IMC fuera de rango normal');
  }
  
  return true;
}
```

## Manejo de Valores Nulos

Algunos campos pueden ser opcionales (ej. `masa_grasa_perder_kg`):

```javascript
function setearValor(id, valor, defaultValue = '-') {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.textContent = valor !== null && valor !== undefined 
      ? valor 
      : defaultValue;
  }
}

// Uso
setearValor('masa-grasa-perder', data.composicion_corporal.masa_grasa_perder_kg);
```

## Formateo de Datos

### Números Decimales
```javascript
function formatearDecimal(numero, decimales = 1) {
  return Number(numero).toFixed(decimales);
}

document.getElementById('imc').textContent = 
  formatearDecimal(data.composicion_corporal.imc, 1);
```

### Fechas
```javascript
function formatearFecha(fecha) {
  // fecha en formato ISO: "2024-11-21"
  const partes = fecha.split('-');
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
  return `${parseInt(partes[2])} de ${meses[parseInt(partes[1]) - 1]} del ${partes[0]}`;
}

document.getElementById('fecha-prueba-esfuerzo').textContent = 
  formatearFecha(data.informe.fecha);
```

## Testing

Para probar las plantillas con datos de ejemplo:

```javascript
// Datos de prueba para Informe Ergo
const datosEjemplo = {
  informe: {
    atleta: {
      nombre: "Prueba",
      apellido: "Usuario"
    }
  },
  composicion_corporal: {
    peso_kg: 70,
    estatura_cm: 175,
    imc: 22.9
    // ... más campos
  }
};

// Función para poblar plantilla
poblarInformeErgo(datosEjemplo);
```

## Generación de PDF

Las plantillas mantienen la funcionalidad de exportación a PDF. El botón "Descargar PDF" sigue funcionando con los datos dinámicos.

## Notas Importantes

1. **No eliminar IDs**: Los IDs agregados son cruciales para el funcionamiento dinámico
2. **Mantener estructura HTML**: No modificar la estructura de contenedores, clases o jerarquía
3. **Gráficos**: Los contenedores de gráficos (`id="container"`) deben permanecer vacíos hasta que se carguen los datos
4. **Estilos**: Todas las clases CSS existentes deben mantenerse para preservar la apariencia

## Recursos Adicionales

- **data_format.md**: Especificación completa del formato de datos
- **Documentación Highcharts**: https://www.highcharts.com/docs/
- **Bootstrap**: Las plantillas usan Bootstrap para el layout

## Soporte

Para dudas sobre la implementación, consultar `data_format.md` o revisar los comentarios en el código HTML.
