Highcharts.chart('container', {
					  chart: {
						parallelCoordinates: true,
						parallelAxes: {
							gridLineWidth: 0,
							lineWidth: 0,
							showFirstLabel: false,
							showLastLabel: true
						},
						polar: true,
						BorderColor: '#000000',
						BorderWidth: 0,
						 backgroundColor: 'transparent',/**/
						  lineColor: "rgba(138,221,45,0)",
						lineWidth: 0,
					  },

					  title: {
						text: ''
					  },

					  subtitle: {
						text: ''
					  },

					  pane: {
						startAngle: 0,
						endAngle: 360,
						  lineColor: "rgba(138,221,45,0)",
						lineWidth: 0,
					  },

					  xAxis: {
					    lineColor: "rgba(138,221,45,0)",
						lineWidth: 0,
						tickInterval: 72,
						min: 0,
						max: 360,
						labels: {
						  format: ' '
						}
					  },

					  yAxis: {
						min: 0,
						  lineColor: "rgba(138,221,45,0)",
						lineWidth: 0,
						labels: {
						  format: ' '
						}
					  },

					  plotOptions: {
						series: {
						  pointStart: 0,
						  pointInterval: 72
						},
						column: {
						  pointPadding: 0,
						  groupPadding: 0
						},
					  },

					  series: [
											{
						type: 'line',
						name: '',
						  lineColor: "#68869e",
						  lineWidth: 4,
						marker: {
						  enabled: true,
						  lineColor: "#68869e",
						  lineWidth: 3,
						  fillColor: "#ffffff",
						},
						data: [],
						pointPlacement: 'on'
					  },
											{
						type: 'line',
						name: '',
						  lineColor: "#74ccfb",
						  lineWidth: 4,
						marker: {
						  enabled: true,
						  lineColor: "#74ccfb",
						  lineWidth: 3,
						  fillColor: "#ffffff",
						},
						data: [],
						pointPlacement: 'on'
					  }, 
										{
						type: 'line',
						name: '',
						  lineColor: "#2889A7",
						  lineWidth: 4,
						marker: {
						  enabled: true,
						  lineColor: "#2889A7",
						  lineWidth: 3,
						  fillColor: "#ffffff",
						},
						  data: [],
						/*data: [2.3, 4, 3.7, 4, 8.1]/*data: [46, 16, 13.9, 11.8, 0.9]*/
					  }
						]
					});

$(document).ready(function(){
	validaChk();
	//alert($('.highcharts-grid-line').attr('stroke-width'));
	$('.highcharts-grid-line').attr('stroke-width', '0');
});
	
$(document).ready(function() {
    $('.highcharts-a11y-proxy-button').hide();
    $('.highcharts-credits').hide();
    $('.highcharts-legend-item ').hide();
    $('.highcharts-exporting-group').hide();
    $('.highcharts-grid-line').hide();
})
function validaChk(){
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
		$('#divDeporte3').removeClass("btn-border");
		$('#divTexto3').removeClass("textoNegro");
		$('#divTexto3').addClass("textoBlanco");
		$('#divInformeDeportivo0').show();
		$('#divInformeDeportivo1').show();
		$('#divInformeDeportivo2').show();
		$('#divInformeDeportivo3').show();
	}
}

$(document).ready(function(){
	$("#pdfDownloader").click(function(){	
		const btn = document.getElementById('pdfDownloader');
		btn.textContent = 'Espere un momento...';
		document.getElementById("pdfDownloader").disabled = true;
		

		let flag=1;
		if($("#reportsfolder-deporteID1").is(':checked')){
			flag=1;
			html2canvas(document.querySelector("#tasamaxima")).then(canvas => {
				//canvas:10,			
			var imagedata = canvas.toDataURL('image/png');
			var imgdata = imagedata.replace(/^data:image\/(png|jpeg);base64,/, "");
					//ajax call to save image inside folder
			$.ajax({
					async:false,
					url: '/web/index.php?r=reportsfolder/saveimg',
					data: {
						imgdata:imgdata, orden:'1', cp:'671', er:'2076'
						},
					type: 'post',
					success: function (response) {   
						console.log(response);
						mandar(btn, flag);
					}
				});
			});
			
		}
		else if($("#reportsfolder-deporteID2").is(':checked')){
			flag=2;
			mandar(btn, flag);
		}
		else if($("#reportsfolder-deporteID3").is(':checked')){
			flag=3;
			html2canvas(document.querySelector("#graficas")).then(canvas => {
				//canvas:10,			
			var imagedata = canvas.toDataURL('image/png');
			var imgdata = imagedata.replace(/^data:image\/(png|jpeg);base64,/, "");
					//ajax call to save image inside folder
			$.ajax({
					async:false,
					url: '/web/index.php?r=reportsfolder/saveimg',
					data: {
						imgdata:imgdata, orden:'0', cp:'671', er:'2076'
						},
					type: 'post',
					success: function (response) {   
						console.log(response);
						mandar(btn, flag);
					}
				});
			});
		}
		sleep(60).then(() => {
			
		});
		$('#cols-det').removeClass('col-md-8').addClass('col-md-10');
    });	
	//$("#pdfDownloader").click();
});	

function mandar(btn, flag){
	btn.textContent = 'Descargar PDF';
			document.getElementById("pdfDownloader").disabled = false;
			window.open('index.php?r=reportsfolder/savepdf&cp=671&er=2076&type=2&informe='+flag+'', '_blank');
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