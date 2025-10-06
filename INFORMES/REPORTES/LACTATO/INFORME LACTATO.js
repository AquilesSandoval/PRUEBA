/*
Highcharts.addEvent(Highcharts.Point, 'click', function () {
  if (this.series.options.className.indexOf('popup-on-click') !== -1) {
    const chart = this.series.chart;
    const date = Highcharts.dateFormat('%A, %b %e, %Y', this.x);
    const text = `<b>${date}</b><br/>${this.y} ${this.series.name}`;

    const anchorX = this.plotX + this.series.xAxis.pos;
    const anchorY = this.plotY + this.series.yAxis.pos;
    const align = anchorX < chart.chartWidth - 200 ? 'left' : 'right';
    const x = align === 'left' ? anchorX + 10 : anchorX - 10;
    const y = anchorY - 30;
    if (!chart.sticky) {
      chart.sticky = chart.renderer
        .label(text, x, y, 'callout',  anchorX, anchorY)
        .attr({
          align,
          fill: 'rgba(0, 0, 0, 0.75)',
          padding: 10,
          zIndex: 7 // Above series, below tooltip
        })
        .css({
          color: 'white'
        })
        .on('click', function () {
          chart.sticky = chart.sticky.destroy();
        })
        .add();
    } else {
      chart.sticky
        .attr({ align, text })
        .animate({ anchorX, anchorY, x, y }, { duration: 250 });
    }
  }
});


Highcharts.chart('container', {

  chart: {
    scrollablePlotArea: {
      minWidth: 700
    }
  },

  data: {
    csvURL: 'https://codyexpert.com/garmin2/web/analytics.csv',
    beforeParse: function (csv) {
      return csv.replace(/\n\n/g, '\n');
    }
  },

  title: {
    text: 'Daily sessions at www.highcharts.com'
  },

  subtitle: {
    text: 'Source: Google Analytics'
  },

  xAxis: {
    tickInterval: 7 * 24 * 3600 * 1000, // one week
    tickWidth: 0,
    gridLineWidth: 1,
    labels: {
      align: 'left',
      x: 3,
      y: -3
    }
  },

  yAxis: [{ // left y axis
    title: {
      text: null
    },
    labels: {
      align: 'left',
      x: 3,
      y: 16,
      format: '{value:.,0f}'
    },
    showFirstLabel: false
  }, { // right y axis
    linkedTo: 0,
    gridLineWidth: 0,
    opposite: true,
    title: {
      text: null
    },
    labels: {
      align: 'right',
      x: -3,
      y: 16,
      format: '{value:.,0f}'
    },
    showFirstLabel: false
  }],

  legend: {
    align: 'left',
    verticalAlign: 'top',
    borderWidth: 0
  },

  tooltip: {
    shared: true,
    crosshairs: true
  },

  plotOptions: {
    series: {
      cursor: 'pointer',
      className: 'popup-on-click',
      marker: {
        lineWidth: 1
      }
    }
  },

  series: [{
    name: 'All sessions',
    lineWidth: 4,
    marker: {
      radius: 4
    }
  }, {
    name: 'New users'
  }]
});*/


/*
Highcharts.chart('container', {

  title: {
    text: 'Informe Lactato 10-11-2021'
  },

  subtitle: {
    text: 'Nombre: Jonatan Steve'
  },

  yAxis: {
    title: {
      text: 'FC (ppm)'
    }
  },
	series: [{
        	yAxis: 0,
        	data: [140, 145, 150]
        }, {
        	yAxis: 1,
        	data: [1, 2, 3]
        }, {
        	yAxis: 2,
        	data: [1.5, 2.5, 3.5]
        }],

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 2010 to 2017'
    }
  },

  xAxis: {
    title: {
      text: 'Ritmo (min/km)'
    }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 3,
		pointInterval: 0.1,
		pointEnd: 3.53
    }
  },

  series: [{
    name: 'FC',
    data: [140, 145, 150]
  }, {
    name: 'LA',
    data: [2.8, 3]
  }, {
    name: 'RPE',
    data: [1, 2]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});*/

Highcharts.chart('container', {
                chart: {
                    zoomType: 'xy'
                },
                title: {
                    text: '',
                    align: 'left'
                },
                subtitle: {
                    //text: 'Nombre: Alberto Garcia',
                    text: '',
                    align: 'left'
                },
                xAxis: [{
                    /*categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    crosshair: true,*/
                    categories: ['2:00','1:55','1:50','1:45','1:40'],
                    enabled: false,
                    title: {
                        text: 'Ritmo (min/km)'
                    },
                    labels: {
                        //format: ' ',  
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
                        /*lineColor: "#003B5C",
	  marker: {
		  enabled: true,
		  lineColor: "#003B5C",
		  fillColor: "#003B5C",
		},*/
                        data: [100,120,134,148,160],
                        /*49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4*/
                        tooltip: {
                            valueSuffix: ''
                        }

                    }, {
                        name: 'LA (mMol/L)',
                        type: 'spline',
                        yAxis: 2,
                        /*lineColor: "#7CB5EC",
	  marker: {
		  enabled: true,
		  lineColor: "#7CB5EC",
		  fillColor: "#7CB5EC",
		},*/
                        data: [2.1,1.9,3.4,5.8,9.2],
                        /*1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7*/

                        /*dashStyle: 'shortdot',*/
                        tooltip: {
                            valueSuffix: ''
                        }

                    }, {
                        name: 'RPE (0-10)',
                        type: 'spline',
                        data: [2,4,6,8,9],
                        /*7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6*/
                        tooltip: {
                            valueSuffix: ''
                        }
                    }
                                                                                /*, {
    name: 'RPE1',
    type: 'spline',
    data: [3,5,7,8,9],/*7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6* /
    tooltip: {
      valueSuffix: ''
    }
  }, {
    name: 'RPE2',
    type: 'spline',
    data: [1,6,7,8,9],/*7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6* /
    tooltip: {
      valueSuffix: ''
    }
  }, {
    name: 'RPE3',
    type: 'spline',
    data: [1,2,3,4,5],/*7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6* /
    tooltip: {
      valueSuffix: ''
    }
  }*/
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
    /*function validaChk(){
    	$('#divDeporte1').addClass("btn-border");
    	$('#divDeporte2').addClass("btn-border");
    	$('#divDeporte3').addClass("btn-border");
    	$('#divTexto1').addClass("textoNegro");
    	$('#divTexto2').addClass("textoNegro");
    	$('#divTexto3').addClass("textoNegro");
    	$('#divInformeMetabolico0').hide();
    	$('#divInformeMetabolico1').hide();
    	$('#divInformeMetabolico2').hide();
    	$('#divInformeMetabolico3').hide();
    	$('#divInformeMetabolico4').hide();
    	$('#divInformeEsfuerzo0').hide();
    	$('#divInformeEsfuerzo1').hide();
    	$('#divInformeEsfuerzo2').hide();
    	$('#divInformeDeportivo0').hide();
    	$('#divInformeDeportivo1').hide();
    	$('#divInformeDeportivo2').hide();
    	$('#divInformeDeportivo3').hide();

    	if($("#reportsfolder-deporteID1").is(':checked')){
    		$('#divDeporte1').removeClass("btn-border");
    		$('#divTexto1').removeClass("textoNegro");
    		$('#divTexto1').addClass("textoBlanco");
    		$('#divInformeMetabolico0').show();
    		$('#divInformeMetabolico1').show();
    		$('#divInformeMetabolico2').show();
    		$('#divInformeMetabolico3').show();
    		$('#divInformeMetabolico4').show();
    	}
    	else if($("#reportsfolder-deporteID2").is(':checked')){
    		$('#divDeporte2').removeClass("btn-border");
    		$('#divTexto2').removeClass("textoNegro");
    		$('#divTexto2').addClass("textoBlanco");
    		$('#divInformeEsfuerzo0').show();
    		$('#divInformeEsfuerzo1').show();
    		$('#divInformeEsfuerzo2').show();
    	}
    	else if($("#reportsfolder-deporteID3").is(':checked')){
    		
    	}
    }
    	*/
    $('#divDeporte3').removeClass("btn-border");
    $('#divTexto3').removeClass("textoNegro");
    $('#divTexto3').addClass("textoBlanco");
    $('#divInformeDeportivo0').show();
    $('#divInformeDeportivo1').show();
    $('#divInformeDeportivo2').show();
    $('#divInformeDeportivo3').show();

$(document).ready(function(){
	//$("#modal").show();
	$("#pdfDownloader").click(function(){	
		//$('#cols-det').removeClass('col-md-10').addClass('col-md-8 maxtext');
		

		const btn = document.getElementById('pdfDownloader');
		btn.textContent = 'Espere un momento...';
		document.getElementById("pdfDownloader").disabled = true;
		/*
		html2canvas(document.querySelector("#exporta")).then(canvas => {
				//canvas:10,			
			var imagedata = canvas.toDataURL('image/png');
			var imgdata = imagedata.replace(/^data:image\/(png|jpeg);base64,/, "");
					//ajax call to save image inside folder
			$.ajax({
				async:false,
				url: '/web/index.php?r=reportsfolder/saveimg',
				data: {
					   imgdata:imgdata, orden:'1', cp:'28', er:'55'
					   },
				type: 'post',
				success: function (response) {   
				   	console.log(response);
				}
			});
		});
		*/
		html2canvas(document.querySelector("#graficas")).then(canvas => {
				//canvas:10,			
			var imagedata = canvas.toDataURL('image/png');
			var imgdata = imagedata.replace(/^data:image\/(png|jpeg);base64,/, "");
					//ajax call to save image inside folder
			$.ajax({
				async:false,
				url: '/web/index.php?r=reportsfolder/saveimg',
				data: {
					   imgdata:imgdata, orden:'0', cp:'28', er:'55'
					   },
				type: 'post',
				success: function (response) {   
				   	console.log(response);
					mandar(btn);//si hay otro, se debe quitar esta linea
				}
			});
		});
		/*
		html2canvas(document.querySelector("#divInformeDeportivo1"), {
			}).then(canvas => {
				//canvas:10,
			
			var imagedata = canvas.toDataURL('image/png');
			var imgdata = imagedata.replace(/^data:image\/(png|jpeg);base64,/, "");
					//ajax call to save image inside folder
			$.ajax({
				async:false,
				url: '/web/index.php?r=reportsfolder/saveimg',
				data: {
					   imgdata:imgdata, orden:'2', cp:'28', er:'55'
					   },
				type: 'post',
				success: function (response) {   
				   	console.log(response);
				}
			});
		});
		
		html2canvas(document.querySelector("#divInformeDeportivo2"), {
			}).then(canvas => {
				//canvas:10,
			
			var imagedata = canvas.toDataURL('image/png');
			var imgdata = imagedata.replace(/^data:image\/(png|jpeg);base64,/, "");
					//ajax call to save image inside folder
			$.ajax({
				async:false,
				url: '/web/index.php?r=reportsfolder/saveimg',
				data: {
					   imgdata:imgdata, orden:'3', cp:'28', er:'55'
					   },
				type: 'post',
				success: function (response) {   
				   	console.log(response);
				}
			});
		});
		
		html2canvas(document.querySelector("#divInformeDeportivo3"), {
			}).then(canvas => {
				//canvas:10,
			
			var imagedata = canvas.toDataURL('image/png');
			var imgdata = imagedata.replace(/^data:image\/(png|jpeg);base64,/, "");
					//ajax call to save image inside folder
			$.ajax({
				async:false,
				url: '/web/index.php?r=reportsfolder/saveimg',
				data: {
					   imgdata:imgdata, orden:'4', cp:'28', er:'55'
					   },
				type: 'post',
				success: function (response) {   
				   	console.log(response);
					mandar(btn);
				}
			});
		});*/
		
		sleep(60).then(() => {
			
		});
		$('#cols-det').removeClass('col-md-8').addClass('col-md-10');
    });	
	//$("#pdfDownloader").click();
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
    console.log(id + "-" + flag);
    $.ajax({
        url: '/web/index.php?r=idiomas/changeidioma',
        type: "POST",
        data: "id=" + id + "&flag=" + flag,
        success: function(response) {
            location.reload();
        }
    });
}