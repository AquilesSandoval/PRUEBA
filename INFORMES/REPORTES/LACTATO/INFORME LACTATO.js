Highcharts.chart('container', {
                chart: {
                    zoomType: 'xy'
                },
                title: {
                    text: '',
                    align: 'left'
                },
                subtitle: {
                    text: '',
                    align: 'left'
                },
                xAxis: [{
                    categories: ['2:00','1:55','1:50','1:45','1:40'],
                    enabled: false,
                    title: {
                        text: 'Ritmo (min/km)'
                    },
                    labels: {
                    },
                }],
                yAxis: [{ // Primary yAxis
                    min: 2,                    max: 9,                    tickInterval: 0.1,
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

                }, { // Secondary yAxis
                    min: 98,                    max: 160,                    tickInterval: 10,
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

                }, { // Tertiary yAxis
                    min: 2.1,                    max: 9.2,                    tickInterval: 0.05,
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
                }],
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
                    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || // theme
                        'rgba(255,255,255,0.25)'
                },
                series: [{}
                    , {
                        name: 'FC (ppm)',
                        type: 'spline',
                        yAxis: 1,
                        data: [100,120,134,148,160],
                        tooltip: {
                            valueSuffix: ''
                        }

                    }, {
                        name: 'LA (mMol/L)',
                        type: 'spline',
                        yAxis: 2,
                        data: [2.1,1.9,3.4,5.8,9.2],
                        tooltip: {
                            valueSuffix: ''
                        }

                    }, {
                        name: 'RPE (0-10)',
                        type: 'spline',
                        data: [2,4,6,8,9],
                        tooltip: {
                            valueSuffix: ''
                        }
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

function espere() {
        swal("Espere un momento", {
            buttons: false,
            timer: 10000,
        });
    }
    $('#divDeporte3').removeClass("btn-border");
    $('#divTexto3').removeClass("textoNegro");
    $('#divTexto3').addClass("textoBlanco");
    $('#divInformeDeportivo0').show();
    $('#divInformeDeportivo1').show();
    $('#divInformeDeportivo2').show();
    $('#divInformeDeportivo3').show();

$(document).ready(function(){
	$("#pdfDownloader").click(function(){

		const btn = document.getElementById('pdfDownloader');
		btn.textContent = 'Espere un momento...';
		document.getElementById("pdfDownloader").disabled = true;
		html2canvas(document.querySelector("#graficas")).then(canvas => {
			var imagedata = canvas.toDataURL('image/png');
			var imgdata = imagedata.replace(/^data:image\/(png|jpeg);base64,/, "");
			$.ajax({
				async:false,
				url: '/web/index.php?r=reportsfolder/saveimg',
				data: {
					   imgdata:imgdata, orden:'0', cp:'28', er:'55'
					   },
				type: 'post',
				success: function (response) {
					mandar(btn);//si hay otro, se debe quitar esta linea
				}
			});
		});
		sleep(60).then(() => {

		});
		$('#cols-det').removeClass('col-md-8').addClass('col-md-10');
    });
});

function mandar(btn){
	btn.textContent = 'Descargar PDF';
			document.getElementById("pdfDownloader").disabled = false;
			window.open('index.php?r=reportsfolder/savepdf&cp=28&er=55&type=1', '_blank');
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

jQuery(function ($) {
jQuery('#w0').yiiActiveForm([{"id":"reportsfolder-created_by_id","name":"created_by_id","container":".field-reportsfolder-created_by_id","input":"#reportsfolder-created_by_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Created By ID debe ser un número entero.","skipOnEmpty":1});}},{"id":"reportsfolder-status","name":"status","container":".field-reportsfolder-status","input":"#reportsfolder-status","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Estado no puede estar vacío."});yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Estado debe ser un número entero.","skipOnEmpty":1});}}], []);
});

function changeIdioma(id, flag) {
    $.ajax({
        url: '/web/index.php?r=idiomas/changeidioma',
        type: "POST",
        data: "id=" + id + "&flag=" + flag,
        success: function(response) {
            location.reload();
        }
    });
}