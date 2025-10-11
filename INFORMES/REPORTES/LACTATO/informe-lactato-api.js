// Script para cargar datos REALES del informe de lactato desde la API
$(document).ready(async function() {
    // Obtener ID del informe desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const informeId = urlParams.get('id');
    
    if (!informeId) {
        swal("Error", "No se encontró el ID del informe", "error");
        return;
    }
    
    try {
        // Cargar datos del informe desde la API
        const response = await fetch(`/api/informes/lactato/${informeId}`);
        const data = await response.json();
        
        if (!data.success) {
            swal("Error", data.error || "No se pudo cargar el informe", "error");
            return;
        }
        
        const informe = data.informe;
        console.log('Informe cargado:', informe);
        
        // Actualizar información del atleta en la página
        $('#athlete-name').text(informe.atleta_nombre || 'N/A');
        $('#test-date').text(informe.fecha_prueba || 'N/A');
        $('#sport').text(informe.deporte || 'N/A');
        
        // Extraer datos de mediciones
        let mediciones = [];
        if (informe.datos_mediciones && informe.datos_mediciones.mediciones) {
            mediciones = informe.datos_mediciones.mediciones;
        }
        
        // Preparar datos para las gráficas
        let categories = [];
        let fcData = [];
        let laData = [];
        let rpeData = [];
        
        mediciones.forEach((med, index) => {
            // Usar tiempo o ritmo como categoría en X
            if (med.tiempo) {
                categories.push(med.tiempo);
            } else if (med.ritmo) {
                categories.push(med.ritmo);
            } else {
                categories.push(`Punto ${index + 1}`);
            }
            
            // Agregar datos a las series
            if (med.fc) fcData.push(parseFloat(med.fc));
            if (med.la) laData.push(parseFloat(med.la));
            if (med.rpe) rpeData.push(parseFloat(med.rpe));
        });
        
        // Si no hay datos, usar valores por defecto
        if (categories.length === 0) {
            categories = ['Sin datos'];
            fcData = [0];
            laData = [0];
            rpeData = [0];
        }
        
        // Calcular rangos dinámicos para los ejes Y
        const fcMin = Math.min(...fcData) - 10 || 90;
        const fcMax = Math.max(...fcData) + 10 || 180;
        const laMin = Math.min(...laData) - 0.5 || 0;
        const laMax = Math.max(...laData) + 1 || 10;
        const rpeMin = Math.min(...rpeData) - 1 || 0;
        const rpeMax = Math.max(...rpeData) + 1 || 10;
        
        // Renderizar gráfica con Highcharts
        Highcharts.chart('container', {
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: `Informe de Lactato - ${informe.deporte || 'Deporte'}`,
                align: 'left'
            },
            subtitle: {
                text: `Atleta: ${informe.atleta_nombre || 'N/A'} | Fecha: ${informe.fecha_prueba || 'N/A'}`,
                align: 'left'
            },
            xAxis: [{
                categories: categories,
                crosshair: true,
                title: {
                    text: 'Tiempo / Ritmo'
                }
            }],
            yAxis: [
                { // RPE (0-10) - Eje derecho
                    min: rpeMin,
                    max: rpeMax,
                    tickInterval: 1,
                    labels: {
                        format: '{value}',
                        style: {
                            color: Highcharts.getOptions().colors[2]
                        }
                    },
                    title: {
                        text: 'RPE (0-10)',
                        style: {
                            color: Highcharts.getOptions().colors[2]
                        }
                    },
                    opposite: true
                },
                { // FC (ppm) - Eje izquierdo
                    min: fcMin,
                    max: fcMax,
                    tickInterval: 10,
                    gridLineWidth: 0,
                    title: {
                        text: 'FC (ppm)',
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    },
                    labels: {
                        format: '{value}',
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    }
                },
                { // LA (mMol/L) - Eje derecho
                    min: laMin,
                    max: laMax,
                    tickInterval: 0.5,
                    gridLineWidth: 0,
                    title: {
                        text: 'LA (mMol/L)',
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    labels: {
                        format: '{value}',
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    opposite: true
                }
            ],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 80,
                verticalAlign: 'top',
                y: 55,
                floating: true,
                backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 
                    'rgba(255,255,255,0.25)'
            },
            series: [
                {
                    name: 'FC (ppm)',
                    type: 'spline',
                    yAxis: 1,
                    data: fcData,
                    tooltip: {
                        valueSuffix: ' ppm'
                    },
                    color: Highcharts.getOptions().colors[0]
                },
                {
                    name: 'LA (mMol/L)',
                    type: 'spline',
                    yAxis: 2,
                    data: laData,
                    tooltip: {
                        valueSuffix: ' mMol/L'
                    },
                    color: Highcharts.getOptions().colors[1]
                },
                {
                    name: 'RPE (0-10)',
                    type: 'spline',
                    yAxis: 0,
                    data: rpeData,
                    tooltip: {
                        valueSuffix: ''
                    },
                    color: Highcharts.getOptions().colors[2]
                }
            ],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            floating: false,
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom',
                            x: 0,
                            y: 0
                        },
                        yAxis: [{
                            labels: {
                                align: 'right',
                                x: 0,
                                y: -6
                            },
                            showLastLabel: false
                        }, {
                            labels: {
                                align: 'left',
                                x: 0,
                                y: -6
                            },
                            showLastLabel: false
                        }, {
                            visible: false
                        }]
                    }
                }]
            }
        });
        
        // Mostrar tabla de zonas de entrenamiento si existen
        if (informe.datos_mediciones && informe.datos_mediciones.zonas) {
            const zonas = informe.datos_mediciones.zonas;
            let zonasHtml = '<h4>Zonas de Entrenamiento</h4><table class="table table-bordered"><thead><tr>';
            zonasHtml += '<th>Zona</th><th>Velocidad</th><th>Ritmo</th><th>FC</th><th>Lactato</th><th>Potencia</th>';
            zonasHtml += '</tr></thead><tbody>';
            
            zonas.forEach(zona => {
                zonasHtml += '<tr>';
                zonasHtml += `<td>${zona.zona || ''}</td>`;
                zonasHtml += `<td>${zona.velocidad_kmh || '-'}</td>`;
                zonasHtml += `<td>${zona.ritmo_min_km || '-'}</td>`;
                zonasHtml += `<td>${zona.fc_ppm || '-'}</td>`;
                zonasHtml += `<td>${zona.lactato_mmol || '-'}</td>`;
                zonasHtml += `<td>${zona.potencia_w || '-'}</td>`;
                zonasHtml += '</tr>';
            });
            
            zonasHtml += '</tbody></table>';
            $('#zonas-container').html(zonasHtml);
        }
        
        // Mostrar notas/comentarios si existen
        if (informe.notas) {
            $('#notas-container').html(`
                <div class="card">
                    <div class="card-body">
                        <h5>Comentarios</h5>
                        <p>${informe.notas}</p>
                    </div>
                </div>
            `);
        }
        
    } catch (error) {
        console.error('Error al cargar el informe:', error);
        swal("Error", "Error al cargar los datos del informe", "error");
    }
});

// Mantener las funciones originales para PDF
function espere() {
    swal("Espere un momento", {
        buttons: false,
        timer: 10000,
    });
}

$(document).ready(function(){
    $("#pdfDownloader").click(function(){   
        const btn = document.getElementById('pdfDownloader');
        btn.textContent = 'Espere un momento...';
        document.getElementById("pdfDownloader").disabled = true;
        
        html2canvas(document.querySelector("#graficas")).then(canvas => {
            var imagedata = canvas.toDataURL('image/png');
            var imgdata = imagedata.replace(/^data:image\/(png|jpeg);base64,/, "");
            
            // Aquí puedes agregar lógica para guardar el PDF si es necesario
            console.log('Imagen generada para PDF');
            
            btn.textContent = 'Descargar PDF';
            document.getElementById("pdfDownloader").disabled = false;
        });
    }); 
});

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
