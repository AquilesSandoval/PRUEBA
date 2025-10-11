// Espera a que el documento esté completamente cargado
$(document).ready(function () {
  // Función para obtener los datos del informe desde la API
  async function cargarDatosDelInforme() {
    // 1. Obtener el ID del informe desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const informeId = urlParams.get("id");

    if (!informeId) {
      1;
      mostrarError("No se especificó un ID de informe en la URL.");
      return;
    }

    try {
      // 2. Hacer una llamada a la API para obtener los datos del informe
      // Nota: Este endpoint es un ejemplo, ajústalo si tu API usa una ruta diferente.
      const response = await fetch(`/api/informes/lactato/${informeId}`);
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      const data = await response.json();

      if (data.success && data.informe) {
        // 3. Si tenemos datos, los mostramos en la página
        actualizarPaginaConDatos(data.informe);
      } else {
        mostrarError(
          data.error || "No se encontraron datos para este informe.",
        );
      }
    } catch (error) {
      console.error("Error al cargar los datos del informe:", error);
      mostrarError(
        "No se pudieron cargar los datos del informe. Revisa la consola para más detalles.",
      );
    }
  }

  // Función para mostrar un mensaje de error en el lugar de la gráfica
  function mostrarError(mensaje) {
    $("#container").html(
      `<div style="text-align:center; padding-top: 50px;"><h3>Error</h3><p>${mensaje}</p></div>`,
    );
  }

  // Función para actualizar toda la página con los datos recibidos de la API
  function actualizarPaginaConDatos(informe) {
    // --- Rellenar datos generales ---
    $("#athlete-name-lactato").text(
      informe.nombre_atleta || "Atleta no disponible",
    );
    $("#fecha-prueba-lactato").text(
      informe.fecha_prueba || "Fecha no disponible",
    );

    const mediciones = informe.datos_mediciones.mediciones || [];

    // --- Rellenar la tabla "Datos de la prueba" ---
    const ritmos = mediciones.map((d) => d.tiempo || "-");
    const fcs = mediciones.map((d) => d.fc || "-");
    const lactatos = mediciones.map((d) => d.la || "-");
    const rpes = mediciones.map((d) => d.rpe || "-");

    $("#ritmo-data-container").text(ritmos.join(" / "));
    $("#fc-data-container").text(fcs.join(" / "));
    $("#lactato-data-container").text(lactatos.join(" / "));
    $("#rpe-data-container").text(rpes.join(" / "));

    // --- Rellenar análisis de zonas (umbrales) ---
    $("#zona2-ritmo").text(informe.umbral_aerobico_velocidad || "-");
    $("#zona2-fc").text(informe.umbral_aerobico_fc || "-");
    $("#zona2-lactato").text(informe.umbral_aerobico_lactato || "-");

    $("#zona4-ritmo").text(informe.umbral_anaerobico_velocidad || "-");
    $("#zona4-fc").text(informe.umbral_anaerobico_fc || "-");
    $("#zona4-lactato").text(informe.umbral_anaerobico_lactato || "-");

    // Para la zona 6, puedes decidir qué datos mostrar o dejarlos en blanco si no aplican
    $("#zona6-ritmo").text("-");
    $("#zona6-fc").text("-");
    $("#zona6-lactato").text("-");

    // --- Preparar datos para la gráfica ---
    const categoriasGrafica = mediciones.map((d) => d.tiempo || "N/A"); // Usamos el tiempo para el eje X
    const datosFC = mediciones.map((d) => parseFloat(d.fc) || null);
    const datosLA = mediciones.map((d) => parseFloat(d.la) || null);
    const datosRPE = mediciones.map((d) => parseFloat(d.rpe) || null);

    // --- Crear la gráfica con los datos dinámicos ---
    Highcharts.chart("container", {
      chart: { zoomType: "xy" },
      title: { text: `Informe de Lactato: ${informe.deporte}`, align: "left" },
      subtitle: {
        text: `Atleta: ${informe.nombre_atleta || "N/A"}`,
        align: "left",
      },
      xAxis: [
        {
          categories: categoriasGrafica,
          crosshair: true,
          title: { text: "Medición (Tiempo)" },
        },
      ],
      yAxis: [
        {
          // Eje RPE
          title: {
            text: "RPE (0-10)",
            style: { color: Highcharts.getOptions().colors[2] },
          },
          labels: {
            format: "{value}",
            style: { color: Highcharts.getOptions().colors[2] },
          },
          opposite: true,
        },
        {
          // Eje FC
          title: {
            text: "FC (ppm)",
            style: { color: Highcharts.getOptions().colors[0] },
          },
          labels: {
            format: "{value}",
            style: { color: Highcharts.getOptions().colors[0] },
          },
        },
        {
          // Eje Lactato
          title: {
            text: "LA (mMol/L)",
            style: { color: Highcharts.getOptions().colors[1] },
          },
          labels: {
            format: "{value}",
            style: { color: Highcharts.getOptions().colors[1] },
          },
          opposite: true,
        },
      ],
      tooltip: { shared: true },
      legend: {
        layout: "vertical",
        align: "left",
        x: 80,
        verticalAlign: "top",
        y: 55,
        floating: true,
        backgroundColor: "rgba(255,255,255,0.25)",
      },
      series: [
        {
          name: "FC (ppm)",
          type: "spline",
          yAxis: 1,
          data: datosFC,
          tooltip: { valueSuffix: " ppm" },
        },
        {
          name: "LA (mMol/L)",
          type: "spline",
          yAxis: 2,
          data: datosLA,
          tooltip: { valueSuffix: " mMol/L" },
        },
        {
          name: "RPE (0-10)",
          type: "spline",
          yAxis: 0,
          data: datosRPE,
        },
      ],
    });
  }

  // Iniciar el proceso de carga de datos cuando la página esté lista
  cargarDatosDelInforme();
});

// Nota: El resto de las funciones como espere(), mandar(), etc.,
// pueden permanecer si son necesarias para otras funcionalidades de la página (como descargar PDF).
