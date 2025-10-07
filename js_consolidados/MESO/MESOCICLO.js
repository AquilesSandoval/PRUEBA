var s2options_d6851687 = {"themeCss":".select2-container--krajee","sizeCss":"","doReset":true,"doToggle":false,"doOrder":false};
window.select2_e6279efa = {"allowClear":true,"minimumInputLength":3,"language":{"errorLoading":function () { return 'No se encontraron datos'; }},"ajax":{"url":"\/web\/index.php?r=sessionsssession\/getcitylist","dataType":"json","data":function(params) { return {q:params.term}; }},"escapeMarkup":function (markup) { return markup; },"templateResult":function(city) { return city.text; },"templateSelection":function (city) { return city.text; },"theme":"krajee","width":"100%","placeholder":"Escribe almenos 3 caracteres para buscar..."};

function notificacionToast(_mensaje) {
		$(".alert").remove();

		banderaGuardarAntesDeEditar=1;
		var placementFrom = "top";
		var placementAlign = "right";
		var state = "warning";
		var content = {};

		content.message = "<div style='font-size:12px; text-align:center;'>"+_mensaje+"<div>";
		content.title = "<span style='font-size:12px;'>Alerta AIYM</span>";

		content.icon = 'fa fa-bell';//'none';
		content.url = 'javascript:;';
		content.target = '_self';

		$.notify(content,{
			type: state,
			placement: {
				from: placementFrom,
				align: placementAlign
			},
			time: 1000,
			delay: tiempoToast,
			template: `
            <div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert" style="width: 500px; height: 80px; border-radius: 10px;">
                <span data-notify="icon"></span>
                <span data-notify="title" style="display:block; margin-bottom: 5px;">{1}</span>
                <span data-notify="message">{2}</span>
            </div>
        `
		});
		tiempoToast = 1000
	}
	
	function actionMoverRadiobuttom(numeroDia, fila){
		//$('#sesion_select').val();
		if(is_variasVeces) {
			dup($("#hddIndex").val(), $("#hddWeek").val(), $("#hddDay").val(), $("#hddDivID").val(), $("#hddValID1").val());
		}
		$('#weeks_select').val(fila);
		$('#days_select').val(numeroDia);
        $("#add_ss").click();
		$(".rbMoverAqui").prop("checked", false);
		
		if(!is_variasVeces) {
			$(".rbMoverAqui").hide();
		}
		/*window.setTimeout(function () {
			$(".rbMoverAqui").prop("checked", false);
			$(".rbMoverAqui").hide();
		}, 15000);/**/
	}

$( function() {
    /*$( ".divDragAndDrop" ).sortable();
    $( ".divDragAndDrop" ).disableSelection();
    $( ".divDragAndDrop1" ).sortable();
    $( ".divDragAndDrop1" ).disableSelection();*/
  } );

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ0_1").html()) + 0;
				  $("#spanTimeCiclismoZ0_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ0_2").html()) + 0;
				  $("#spanTimeCiclismoZ0_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ0_3").html()) + 0;
				  $("#spanTimeCiclismoZ0_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ0_4").html()) + 0;
				  $("#spanTimeCiclismoZ0_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ0_5").html()) + 0;
				  $("#spanTimeCiclismoZ0_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ0_6").html()) + 0;
				  $("#spanTimeCiclismoZ0_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ0_7").html()) + 0;
				  $("#spanTimeCiclismoZ0_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ0_8").html()) + 0;
				  $("#spanTimeCiclismoZ0_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ0_9").html()) + 0;
				  $("#spanTimeCiclismoZ0_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ0_10").html()) + 0;
				  $("#spanTimeCiclismoZ0_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 15;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ0_1").html()) + 15;
				  $("#spanTimeCarreraZ0_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ0_2").html()) + 0;
				  $("#spanTimeCarreraZ0_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ0_3").html()) + 0;
				  $("#spanTimeCarreraZ0_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ0_4").html()) + 0;
				  $("#spanTimeCarreraZ0_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ0_5").html()) + 0;
				  $("#spanTimeCarreraZ0_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ0_6").html()) + 0;
				  $("#spanTimeCarreraZ0_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ0_7").html()) + 0;
				  $("#spanTimeCarreraZ0_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ0_8").html()) + 0;
				  $("#spanTimeCarreraZ0_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ0_9").html()) + 0;
				  $("#spanTimeCarreraZ0_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ0_10").html()) + 0;
				  $("#spanTimeCarreraZ0_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ0_1").html()) + 0;
				  $("#spanTimeNatacionZ0_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ0_2").html()) + 0;
				  $("#spanTimeNatacionZ0_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ0_3").html()) + 0;
				  $("#spanTimeNatacionZ0_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ0_4").html()) + 0;
				  $("#spanTimeNatacionZ0_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ0_5").html()) + 0;
				  $("#spanTimeNatacionZ0_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ0_6").html()) + 0;
				  $("#spanTimeNatacionZ0_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ0_7").html()) + 0;
				  $("#spanTimeNatacionZ0_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ0_8").html()) + 0;
				  $("#spanTimeNatacionZ0_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ0_9").html()) + 0;
				  $("#spanTimeNatacionZ0_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ0_10").html()) + 0;
				  $("#spanTimeNatacionZ0_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ0_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ0_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ0_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ0_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ0_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ0_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ0_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ0_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ0_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ0_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 3.1075;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ0_1").html()) + 3.1075;
				  $("#spanDistanciaCarreraZ0_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ0_2").html()) + 0;
				  $("#spanDistanciaCarreraZ0_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ0_3").html()) + 0;
				  $("#spanDistanciaCarreraZ0_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ0_4").html()) + 0;
				  $("#spanDistanciaCarreraZ0_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ0_5").html()) + 0;
				  $("#spanDistanciaCarreraZ0_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ0_6").html()) + 0;
				  $("#spanDistanciaCarreraZ0_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ0_7").html()) + 0;
				  $("#spanDistanciaCarreraZ0_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ0_8").html()) + 0;
				  $("#spanDistanciaCarreraZ0_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ0_9").html()) + 0;
				  $("#spanDistanciaCarreraZ0_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ0_10").html()) + 0;
				  $("#spanDistanciaCarreraZ0_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ0_1").html()) + 0;
				  $("#spanDistanciaNatacionZ0_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ0_2").html()) + 0;
				  $("#spanDistanciaNatacionZ0_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ0_3").html()) + 0;
				  $("#spanDistanciaNatacionZ0_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ0_4").html()) + 0;
				  $("#spanDistanciaNatacionZ0_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ0_5").html()) + 0;
				  $("#spanDistanciaNatacionZ0_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ0_6").html()) + 0;
				  $("#spanDistanciaNatacionZ0_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ0_7").html()) + 0;
				  $("#spanDistanciaNatacionZ0_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ0_8").html()) + 0;
				  $("#spanDistanciaNatacionZ0_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ0_9").html()) + 0;
				  $("#spanDistanciaNatacionZ0_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ0_10").html()) + 0;
				  $("#spanDistanciaNatacionZ0_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 0;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo0").html()) + 0;
				  $("#spanTotalSesionesCiclismo0").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion0").html()) + 0;
				  $("#spanTotalSesionesNatacion0").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera0").html()) + 0;
				  $("#spanTotalSesionesCarrera0").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo0").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo0").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (15/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo0").html()) + (0/60);
				  $("#spanTotalHorasCiclismo0").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion0").html()) + (0/60);
				  $("#spanTotalHorasNatacion0").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera0").html()) + (15/60);
				  $("#spanTotalHorasCarrera0").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo0").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo0").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (192.6);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo0").html()) + (0);
				  $("#spanTotalCaloriasCiclismo0").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion0").html()) + (0);
				  $("#spanTotalCaloriasNatacion0").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera0").html()) + (0);
				  $("#spanTotalCaloriasCarrera0").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo0").html()) + (192.6);
				  $("#spanTotalCaloriasEsfuerzo0").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ0_1").html()) + 0;
				  $("#spanTimeCiclismoZ0_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ0_2").html()) + 0;
				  $("#spanTimeCiclismoZ0_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ0_3").html()) + 0;
				  $("#spanTimeCiclismoZ0_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ0_4").html()) + 0;
				  $("#spanTimeCiclismoZ0_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ0_5").html()) + 0;
				  $("#spanTimeCiclismoZ0_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ0_6").html()) + 0;
				  $("#spanTimeCiclismoZ0_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ0_7").html()) + 0;
				  $("#spanTimeCiclismoZ0_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ0_8").html()) + 0;
				  $("#spanTimeCiclismoZ0_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ0_9").html()) + 0;
				  $("#spanTimeCiclismoZ0_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ0_10").html()) + 0;
				  $("#spanTimeCiclismoZ0_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 20;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 30;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ0_1").html()) + 20;
				  $("#spanTimeCarreraZ0_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ0_2").html()) + 30;
				  $("#spanTimeCarreraZ0_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ0_3").html()) + 0;
				  $("#spanTimeCarreraZ0_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ0_4").html()) + 0;
				  $("#spanTimeCarreraZ0_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ0_5").html()) + 0;
				  $("#spanTimeCarreraZ0_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ0_6").html()) + 0;
				  $("#spanTimeCarreraZ0_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ0_7").html()) + 0;
				  $("#spanTimeCarreraZ0_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ0_8").html()) + 0;
				  $("#spanTimeCarreraZ0_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ0_9").html()) + 0;
				  $("#spanTimeCarreraZ0_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ0_10").html()) + 0;
				  $("#spanTimeCarreraZ0_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ0_1").html()) + 0;
				  $("#spanTimeNatacionZ0_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ0_2").html()) + 0;
				  $("#spanTimeNatacionZ0_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ0_3").html()) + 0;
				  $("#spanTimeNatacionZ0_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ0_4").html()) + 0;
				  $("#spanTimeNatacionZ0_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ0_5").html()) + 0;
				  $("#spanTimeNatacionZ0_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ0_6").html()) + 0;
				  $("#spanTimeNatacionZ0_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ0_7").html()) + 0;
				  $("#spanTimeNatacionZ0_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ0_8").html()) + 0;
				  $("#spanTimeNatacionZ0_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ0_9").html()) + 0;
				  $("#spanTimeNatacionZ0_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ0_10").html()) + 0;
				  $("#spanTimeNatacionZ0_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ0_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ0_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ0_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ0_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ0_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ0_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ0_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ0_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ0_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ0_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 6.85;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ0_1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ0_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ0_2").html()) + 6.85;
				  $("#spanDistanciaCarreraZ0_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ0_3").html()) + 0;
				  $("#spanDistanciaCarreraZ0_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ0_4").html()) + 0;
				  $("#spanDistanciaCarreraZ0_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ0_5").html()) + 0;
				  $("#spanDistanciaCarreraZ0_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ0_6").html()) + 0;
				  $("#spanDistanciaCarreraZ0_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ0_7").html()) + 0;
				  $("#spanDistanciaCarreraZ0_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ0_8").html()) + 0;
				  $("#spanDistanciaCarreraZ0_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ0_9").html()) + 0;
				  $("#spanDistanciaCarreraZ0_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ0_10").html()) + 0;
				  $("#spanDistanciaCarreraZ0_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ0_1").html()) + 0;
				  $("#spanDistanciaNatacionZ0_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ0_2").html()) + 0;
				  $("#spanDistanciaNatacionZ0_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ0_3").html()) + 0;
				  $("#spanDistanciaNatacionZ0_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ0_4").html()) + 0;
				  $("#spanDistanciaNatacionZ0_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ0_5").html()) + 0;
				  $("#spanDistanciaNatacionZ0_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ0_6").html()) + 0;
				  $("#spanDistanciaNatacionZ0_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ0_7").html()) + 0;
				  $("#spanDistanciaNatacionZ0_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ0_8").html()) + 0;
				  $("#spanDistanciaNatacionZ0_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ0_9").html()) + 0;
				  $("#spanDistanciaNatacionZ0_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ0_10").html()) + 0;
				  $("#spanDistanciaNatacionZ0_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo0").html()) + 0;
				  $("#spanTotalSesionesCiclismo0").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion0").html()) + 0;
				  $("#spanTotalSesionesNatacion0").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera0").html()) + 1;
				  $("#spanTotalSesionesCarrera0").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo0").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo0").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (50/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo0").html()) + (0/60);
				  $("#spanTotalHorasCiclismo0").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion0").html()) + (0/60);
				  $("#spanTotalHorasNatacion0").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera0").html()) + (50/60);
				  $("#spanTotalHorasCarrera0").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo0").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo0").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (177.27);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo0").html()) + (0);
				  $("#spanTotalCaloriasCiclismo0").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion0").html()) + (0);
				  $("#spanTotalCaloriasNatacion0").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera0").html()) + (0);
				  $("#spanTotalCaloriasCarrera0").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo0").html()) + (177.27);
				  $("#spanTotalCaloriasEsfuerzo0").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ0_1").html()) + 0;
				  $("#spanTimeCiclismoZ0_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ0_2").html()) + 0;
				  $("#spanTimeCiclismoZ0_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ0_3").html()) + 0;
				  $("#spanTimeCiclismoZ0_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ0_4").html()) + 0;
				  $("#spanTimeCiclismoZ0_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ0_5").html()) + 0;
				  $("#spanTimeCiclismoZ0_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ0_6").html()) + 0;
				  $("#spanTimeCiclismoZ0_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ0_7").html()) + 0;
				  $("#spanTimeCiclismoZ0_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ0_8").html()) + 0;
				  $("#spanTimeCiclismoZ0_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ0_9").html()) + 0;
				  $("#spanTimeCiclismoZ0_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ0_10").html()) + 0;
				  $("#spanTimeCiclismoZ0_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 25;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ0_1").html()) + 25;
				  $("#spanTimeCarreraZ0_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ0_2").html()) + 0;
				  $("#spanTimeCarreraZ0_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ0_3").html()) + 0;
				  $("#spanTimeCarreraZ0_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ0_4").html()) + 0;
				  $("#spanTimeCarreraZ0_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ0_5").html()) + 0;
				  $("#spanTimeCarreraZ0_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ0_6").html()) + 0;
				  $("#spanTimeCarreraZ0_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ0_7").html()) + 0;
				  $("#spanTimeCarreraZ0_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ0_8").html()) + 0;
				  $("#spanTimeCarreraZ0_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ0_9").html()) + 0;
				  $("#spanTimeCarreraZ0_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ0_10").html()) + 0;
				  $("#spanTimeCarreraZ0_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ0_1").html()) + 0;
				  $("#spanTimeNatacionZ0_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ0_2").html()) + 0;
				  $("#spanTimeNatacionZ0_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ0_3").html()) + 0;
				  $("#spanTimeNatacionZ0_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ0_4").html()) + 0;
				  $("#spanTimeNatacionZ0_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ0_5").html()) + 0;
				  $("#spanTimeNatacionZ0_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ0_6").html()) + 0;
				  $("#spanTimeNatacionZ0_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ0_7").html()) + 0;
				  $("#spanTimeNatacionZ0_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ0_8").html()) + 0;
				  $("#spanTimeNatacionZ0_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ0_9").html()) + 0;
				  $("#spanTimeNatacionZ0_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ0_10").html()) + 0;
				  $("#spanTimeNatacionZ0_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ0_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ0_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ0_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ0_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ0_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ0_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ0_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ0_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ0_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ0_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 5.1791666666667;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ0_1").html()) + 5.1791666666667;
				  $("#spanDistanciaCarreraZ0_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ0_2").html()) + 0;
				  $("#spanDistanciaCarreraZ0_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ0_3").html()) + 0;
				  $("#spanDistanciaCarreraZ0_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ0_4").html()) + 0;
				  $("#spanDistanciaCarreraZ0_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ0_5").html()) + 0;
				  $("#spanDistanciaCarreraZ0_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ0_6").html()) + 0;
				  $("#spanDistanciaCarreraZ0_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ0_7").html()) + 0;
				  $("#spanDistanciaCarreraZ0_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ0_8").html()) + 0;
				  $("#spanDistanciaCarreraZ0_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ0_9").html()) + 0;
				  $("#spanDistanciaCarreraZ0_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ0_10").html()) + 0;
				  $("#spanDistanciaCarreraZ0_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ0_1").html()) + 0;
				  $("#spanDistanciaNatacionZ0_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ0_2").html()) + 0;
				  $("#spanDistanciaNatacionZ0_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ0_3").html()) + 0;
				  $("#spanDistanciaNatacionZ0_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ0_4").html()) + 0;
				  $("#spanDistanciaNatacionZ0_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ0_5").html()) + 0;
				  $("#spanDistanciaNatacionZ0_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ0_6").html()) + 0;
				  $("#spanDistanciaNatacionZ0_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ0_7").html()) + 0;
				  $("#spanDistanciaNatacionZ0_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ0_8").html()) + 0;
				  $("#spanDistanciaNatacionZ0_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ0_9").html()) + 0;
				  $("#spanDistanciaNatacionZ0_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ0_10").html()) + 0;
				  $("#spanDistanciaNatacionZ0_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo0").html()) + 0;
				  $("#spanTotalSesionesCiclismo0").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion0").html()) + 0;
				  $("#spanTotalSesionesNatacion0").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera0").html()) + 1;
				  $("#spanTotalSesionesCarrera0").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo0").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo0").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (25/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo0").html()) + (0/60);
				  $("#spanTotalHorasCiclismo0").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion0").html()) + (0/60);
				  $("#spanTotalHorasNatacion0").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera0").html()) + (25/60);
				  $("#spanTotalHorasCarrera0").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo0").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo0").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (247.6);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo0").html()) + (0);
				  $("#spanTotalCaloriasCiclismo0").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion0").html()) + (0);
				  $("#spanTotalCaloriasNatacion0").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera0").html()) + (0);
				  $("#spanTotalCaloriasCarrera0").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo0").html()) + (247.6);
				  $("#spanTotalCaloriasEsfuerzo0").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ0_1").html()) + 0;
				  $("#spanTimeCiclismoZ0_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ0_2").html()) + 0;
				  $("#spanTimeCiclismoZ0_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ0_3").html()) + 0;
				  $("#spanTimeCiclismoZ0_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ0_4").html()) + 0;
				  $("#spanTimeCiclismoZ0_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ0_5").html()) + 0;
				  $("#spanTimeCiclismoZ0_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ0_6").html()) + 0;
				  $("#spanTimeCiclismoZ0_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ0_7").html()) + 0;
				  $("#spanTimeCiclismoZ0_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ0_8").html()) + 0;
				  $("#spanTimeCiclismoZ0_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ0_9").html()) + 0;
				  $("#spanTimeCiclismoZ0_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ0_10").html()) + 0;
				  $("#spanTimeCiclismoZ0_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 20;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ0_1").html()) + 20;
				  $("#spanTimeCarreraZ0_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ0_2").html()) + 0;
				  $("#spanTimeCarreraZ0_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ0_3").html()) + 0;
				  $("#spanTimeCarreraZ0_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ0_4").html()) + 0;
				  $("#spanTimeCarreraZ0_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ0_5").html()) + 0;
				  $("#spanTimeCarreraZ0_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ0_6").html()) + 0;
				  $("#spanTimeCarreraZ0_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ0_7").html()) + 0;
				  $("#spanTimeCarreraZ0_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ0_8").html()) + 0;
				  $("#spanTimeCarreraZ0_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ0_9").html()) + 0;
				  $("#spanTimeCarreraZ0_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ0_10").html()) + 0;
				  $("#spanTimeCarreraZ0_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ0_1").html()) + 0;
				  $("#spanTimeNatacionZ0_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ0_2").html()) + 0;
				  $("#spanTimeNatacionZ0_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ0_3").html()) + 0;
				  $("#spanTimeNatacionZ0_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ0_4").html()) + 0;
				  $("#spanTimeNatacionZ0_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ0_5").html()) + 0;
				  $("#spanTimeNatacionZ0_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ0_6").html()) + 0;
				  $("#spanTimeNatacionZ0_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ0_7").html()) + 0;
				  $("#spanTimeNatacionZ0_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ0_8").html()) + 0;
				  $("#spanTimeNatacionZ0_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ0_9").html()) + 0;
				  $("#spanTimeNatacionZ0_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ0_10").html()) + 0;
				  $("#spanTimeNatacionZ0_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ0_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ0_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ0_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ0_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ0_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ0_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ0_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ0_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ0_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ0_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ0_1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ0_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ0_2").html()) + 0;
				  $("#spanDistanciaCarreraZ0_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ0_3").html()) + 0;
				  $("#spanDistanciaCarreraZ0_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ0_4").html()) + 0;
				  $("#spanDistanciaCarreraZ0_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ0_5").html()) + 0;
				  $("#spanDistanciaCarreraZ0_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ0_6").html()) + 0;
				  $("#spanDistanciaCarreraZ0_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ0_7").html()) + 0;
				  $("#spanDistanciaCarreraZ0_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ0_8").html()) + 0;
				  $("#spanDistanciaCarreraZ0_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ0_9").html()) + 0;
				  $("#spanDistanciaCarreraZ0_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ0_10").html()) + 0;
				  $("#spanDistanciaCarreraZ0_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ0_1").html()) + 0;
				  $("#spanDistanciaNatacionZ0_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ0_2").html()) + 0;
				  $("#spanDistanciaNatacionZ0_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ0_3").html()) + 0;
				  $("#spanDistanciaNatacionZ0_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ0_4").html()) + 0;
				  $("#spanDistanciaNatacionZ0_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ0_5").html()) + 0;
				  $("#spanDistanciaNatacionZ0_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ0_6").html()) + 0;
				  $("#spanDistanciaNatacionZ0_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ0_7").html()) + 0;
				  $("#spanDistanciaNatacionZ0_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ0_8").html()) + 0;
				  $("#spanDistanciaNatacionZ0_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ0_9").html()) + 0;
				  $("#spanDistanciaNatacionZ0_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ0_10").html()) + 0;
				  $("#spanDistanciaNatacionZ0_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 0;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo0").html()) + 0;
				  $("#spanTotalSesionesCiclismo0").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion0").html()) + 0;
				  $("#spanTotalSesionesNatacion0").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera0").html()) + 0;
				  $("#spanTotalSesionesCarrera0").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo0").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo0").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (20/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo0").html()) + (0/60);
				  $("#spanTotalHorasCiclismo0").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion0").html()) + (0/60);
				  $("#spanTotalHorasNatacion0").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera0").html()) + (20/60);
				  $("#spanTotalHorasCarrera0").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo0").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo0").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (217.6);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo0").html()) + (0);
				  $("#spanTotalCaloriasCiclismo0").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion0").html()) + (0);
				  $("#spanTotalCaloriasNatacion0").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera0").html()) + (0);
				  $("#spanTotalCaloriasCarrera0").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo0").html()) + (217.6);
				  $("#spanTotalCaloriasEsfuerzo0").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ0_1").html()) + 0;
				  $("#spanTimeCiclismoZ0_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ0_2").html()) + 0;
				  $("#spanTimeCiclismoZ0_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ0_3").html()) + 0;
				  $("#spanTimeCiclismoZ0_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ0_4").html()) + 0;
				  $("#spanTimeCiclismoZ0_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ0_5").html()) + 0;
				  $("#spanTimeCiclismoZ0_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ0_6").html()) + 0;
				  $("#spanTimeCiclismoZ0_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ0_7").html()) + 0;
				  $("#spanTimeCiclismoZ0_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ0_8").html()) + 0;
				  $("#spanTimeCiclismoZ0_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ0_9").html()) + 0;
				  $("#spanTimeCiclismoZ0_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ0_10").html()) + 0;
				  $("#spanTimeCiclismoZ0_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 15;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 20;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 8;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ0_1").html()) + 15;
				  $("#spanTimeCarreraZ0_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ0_2").html()) + 20;
				  $("#spanTimeCarreraZ0_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ0_3").html()) + 8;
				  $("#spanTimeCarreraZ0_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ0_4").html()) + 0;
				  $("#spanTimeCarreraZ0_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ0_5").html()) + 0;
				  $("#spanTimeCarreraZ0_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ0_6").html()) + 0;
				  $("#spanTimeCarreraZ0_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ0_7").html()) + 0;
				  $("#spanTimeCarreraZ0_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ0_8").html()) + 0;
				  $("#spanTimeCarreraZ0_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ0_9").html()) + 0;
				  $("#spanTimeCarreraZ0_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ0_10").html()) + 0;
				  $("#spanTimeCarreraZ0_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ0_1").html()) + 0;
				  $("#spanTimeNatacionZ0_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ0_2").html()) + 0;
				  $("#spanTimeNatacionZ0_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ0_3").html()) + 0;
				  $("#spanTimeNatacionZ0_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ0_4").html()) + 0;
				  $("#spanTimeNatacionZ0_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ0_5").html()) + 0;
				  $("#spanTimeNatacionZ0_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ0_6").html()) + 0;
				  $("#spanTimeNatacionZ0_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ0_7").html()) + 0;
				  $("#spanTimeNatacionZ0_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ0_8").html()) + 0;
				  $("#spanTimeNatacionZ0_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ0_9").html()) + 0;
				  $("#spanTimeNatacionZ0_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ0_10").html()) + 0;
				  $("#spanTimeNatacionZ0_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ0_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ0_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ0_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ0_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ0_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ0_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ0_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ0_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ0_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ0_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 3.1075;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 4.5666666666667;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 4.0026666666667;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ0_1").html()) + 3.1075;
				  $("#spanDistanciaCarreraZ0_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ0_2").html()) + 4.5666666666667;
				  $("#spanDistanciaCarreraZ0_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ0_3").html()) + 4.0026666666667;
				  $("#spanDistanciaCarreraZ0_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ0_4").html()) + 0;
				  $("#spanDistanciaCarreraZ0_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ0_5").html()) + 0;
				  $("#spanDistanciaCarreraZ0_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ0_6").html()) + 0;
				  $("#spanDistanciaCarreraZ0_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ0_7").html()) + 0;
				  $("#spanDistanciaCarreraZ0_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ0_8").html()) + 0;
				  $("#spanDistanciaCarreraZ0_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ0_9").html()) + 0;
				  $("#spanDistanciaCarreraZ0_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ0_10").html()) + 0;
				  $("#spanDistanciaCarreraZ0_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ0_1").html()) + 0;
				  $("#spanDistanciaNatacionZ0_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ0_2").html()) + 0;
				  $("#spanDistanciaNatacionZ0_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ0_3").html()) + 0;
				  $("#spanDistanciaNatacionZ0_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ0_4").html()) + 0;
				  $("#spanDistanciaNatacionZ0_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ0_5").html()) + 0;
				  $("#spanDistanciaNatacionZ0_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ0_6").html()) + 0;
				  $("#spanDistanciaNatacionZ0_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ0_7").html()) + 0;
				  $("#spanDistanciaNatacionZ0_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ0_8").html()) + 0;
				  $("#spanDistanciaNatacionZ0_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ0_9").html()) + 0;
				  $("#spanDistanciaNatacionZ0_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ0_10").html()) + 0;
				  $("#spanDistanciaNatacionZ0_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo0").html()) + 0;
				  $("#spanTotalSesionesCiclismo0").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion0").html()) + 0;
				  $("#spanTotalSesionesNatacion0").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera0").html()) + 1;
				  $("#spanTotalSesionesCarrera0").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo0").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo0").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (43/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo0").html()) + (0/60);
				  $("#spanTotalHorasCiclismo0").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion0").html()) + (0/60);
				  $("#spanTotalHorasNatacion0").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera0").html()) + (43/60);
				  $("#spanTotalHorasCarrera0").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo0").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo0").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (177.27);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo0").html()) + (0);
				  $("#spanTotalCaloriasCiclismo0").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion0").html()) + (0);
				  $("#spanTotalCaloriasNatacion0").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera0").html()) + (0);
				  $("#spanTotalCaloriasCarrera0").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo0").html()) + (177.27);
				  $("#spanTotalCaloriasEsfuerzo0").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ0_1").html()) + 0;
				  $("#spanTimeCiclismoZ0_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ0_2").html()) + 0;
				  $("#spanTimeCiclismoZ0_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ0_3").html()) + 0;
				  $("#spanTimeCiclismoZ0_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ0_4").html()) + 0;
				  $("#spanTimeCiclismoZ0_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ0_5").html()) + 0;
				  $("#spanTimeCiclismoZ0_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ0_6").html()) + 0;
				  $("#spanTimeCiclismoZ0_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ0_7").html()) + 0;
				  $("#spanTimeCiclismoZ0_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ0_8").html()) + 0;
				  $("#spanTimeCiclismoZ0_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ0_9").html()) + 0;
				  $("#spanTimeCiclismoZ0_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ0_10").html()) + 0;
				  $("#spanTimeCiclismoZ0_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 50;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ0_1").html()) + 50;
				  $("#spanTimeCarreraZ0_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ0_2").html()) + 0;
				  $("#spanTimeCarreraZ0_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ0_3").html()) + 0;
				  $("#spanTimeCarreraZ0_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ0_4").html()) + 0;
				  $("#spanTimeCarreraZ0_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ0_5").html()) + 0;
				  $("#spanTimeCarreraZ0_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ0_6").html()) + 0;
				  $("#spanTimeCarreraZ0_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ0_7").html()) + 0;
				  $("#spanTimeCarreraZ0_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ0_8").html()) + 0;
				  $("#spanTimeCarreraZ0_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ0_9").html()) + 0;
				  $("#spanTimeCarreraZ0_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ0_10").html()) + 0;
				  $("#spanTimeCarreraZ0_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ0_1").html()) + 0;
				  $("#spanTimeNatacionZ0_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ0_2").html()) + 0;
				  $("#spanTimeNatacionZ0_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ0_3").html()) + 0;
				  $("#spanTimeNatacionZ0_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ0_4").html()) + 0;
				  $("#spanTimeNatacionZ0_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ0_5").html()) + 0;
				  $("#spanTimeNatacionZ0_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ0_6").html()) + 0;
				  $("#spanTimeNatacionZ0_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ0_7").html()) + 0;
				  $("#spanTimeNatacionZ0_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ0_8").html()) + 0;
				  $("#spanTimeNatacionZ0_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ0_9").html()) + 0;
				  $("#spanTimeNatacionZ0_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ0_10").html()) + 0;
				  $("#spanTimeNatacionZ0_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ0_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ0_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ0_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ0_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ0_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ0_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ0_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ0_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ0_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ0_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ0_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 10.358333333333;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ0_1").html()) + 10.358333333333;
				  $("#spanDistanciaCarreraZ0_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ0_2").html()) + 0;
				  $("#spanDistanciaCarreraZ0_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ0_3").html()) + 0;
				  $("#spanDistanciaCarreraZ0_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ0_4").html()) + 0;
				  $("#spanDistanciaCarreraZ0_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ0_5").html()) + 0;
				  $("#spanDistanciaCarreraZ0_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ0_6").html()) + 0;
				  $("#spanDistanciaCarreraZ0_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ0_7").html()) + 0;
				  $("#spanDistanciaCarreraZ0_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ0_8").html()) + 0;
				  $("#spanDistanciaCarreraZ0_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ0_9").html()) + 0;
				  $("#spanDistanciaCarreraZ0_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ0_10").html()) + 0;
				  $("#spanDistanciaCarreraZ0_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ0_1").html()) + 0;
				  $("#spanDistanciaNatacionZ0_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ0_2").html()) + 0;
				  $("#spanDistanciaNatacionZ0_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ0_3").html()) + 0;
				  $("#spanDistanciaNatacionZ0_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ0_4").html()) + 0;
				  $("#spanDistanciaNatacionZ0_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ0_5").html()) + 0;
				  $("#spanDistanciaNatacionZ0_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ0_6").html()) + 0;
				  $("#spanDistanciaNatacionZ0_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ0_7").html()) + 0;
				  $("#spanDistanciaNatacionZ0_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ0_8").html()) + 0;
				  $("#spanDistanciaNatacionZ0_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ0_9").html()) + 0;
				  $("#spanDistanciaNatacionZ0_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ0_10").html()) + 0;
				  $("#spanDistanciaNatacionZ0_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo0").html()) + 0;
				  $("#spanTotalSesionesCiclismo0").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion0").html()) + 0;
				  $("#spanTotalSesionesNatacion0").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera0").html()) + 1;
				  $("#spanTotalSesionesCarrera0").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo0").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo0").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (50/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo0").html()) + (0/60);
				  $("#spanTotalHorasCiclismo0").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion0").html()) + (0/60);
				  $("#spanTotalHorasNatacion0").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera0").html()) + (50/60);
				  $("#spanTotalHorasCarrera0").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo0").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo0").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (128.87);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo0").html()) + (0);
				  $("#spanTotalCaloriasCiclismo0").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion0").html()) + (0);
				  $("#spanTotalCaloriasNatacion0").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera0").html()) + (0);
				  $("#spanTotalCaloriasCarrera0").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo0").html()) + (128.87);
				  $("#spanTotalCaloriasEsfuerzo0").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ1_1").html()) + 0;
				  $("#spanTimeCiclismoZ1_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ1_2").html()) + 0;
				  $("#spanTimeCiclismoZ1_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ1_3").html()) + 0;
				  $("#spanTimeCiclismoZ1_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ1_4").html()) + 0;
				  $("#spanTimeCiclismoZ1_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ1_5").html()) + 0;
				  $("#spanTimeCiclismoZ1_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ1_6").html()) + 0;
				  $("#spanTimeCiclismoZ1_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ1_7").html()) + 0;
				  $("#spanTimeCiclismoZ1_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ1_8").html()) + 0;
				  $("#spanTimeCiclismoZ1_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ1_9").html()) + 0;
				  $("#spanTimeCiclismoZ1_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ1_10").html()) + 0;
				  $("#spanTimeCiclismoZ1_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 30;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ1_1").html()) + 30;
				  $("#spanTimeCarreraZ1_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ1_2").html()) + 0;
				  $("#spanTimeCarreraZ1_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ1_3").html()) + 0;
				  $("#spanTimeCarreraZ1_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ1_4").html()) + 0;
				  $("#spanTimeCarreraZ1_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ1_5").html()) + 0;
				  $("#spanTimeCarreraZ1_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ1_6").html()) + 0;
				  $("#spanTimeCarreraZ1_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ1_7").html()) + 0;
				  $("#spanTimeCarreraZ1_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ1_8").html()) + 0;
				  $("#spanTimeCarreraZ1_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ1_9").html()) + 0;
				  $("#spanTimeCarreraZ1_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ1_10").html()) + 0;
				  $("#spanTimeCarreraZ1_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ1_1").html()) + 0;
				  $("#spanTimeNatacionZ1_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ1_2").html()) + 0;
				  $("#spanTimeNatacionZ1_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ1_3").html()) + 0;
				  $("#spanTimeNatacionZ1_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ1_4").html()) + 0;
				  $("#spanTimeNatacionZ1_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ1_5").html()) + 0;
				  $("#spanTimeNatacionZ1_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ1_6").html()) + 0;
				  $("#spanTimeNatacionZ1_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ1_7").html()) + 0;
				  $("#spanTimeNatacionZ1_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ1_8").html()) + 0;
				  $("#spanTimeNatacionZ1_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ1_9").html()) + 0;
				  $("#spanTimeNatacionZ1_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ1_10").html()) + 0;
				  $("#spanTimeNatacionZ1_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ1_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ1_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ1_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ1_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ1_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ1_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ1_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ1_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ1_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ1_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 6.215;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ1_1").html()) + 6.215;
				  $("#spanDistanciaCarreraZ1_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ1_2").html()) + 0;
				  $("#spanDistanciaCarreraZ1_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ1_3").html()) + 0;
				  $("#spanDistanciaCarreraZ1_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ1_4").html()) + 0;
				  $("#spanDistanciaCarreraZ1_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ1_5").html()) + 0;
				  $("#spanDistanciaCarreraZ1_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ1_6").html()) + 0;
				  $("#spanDistanciaCarreraZ1_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ1_7").html()) + 0;
				  $("#spanDistanciaCarreraZ1_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ1_8").html()) + 0;
				  $("#spanDistanciaCarreraZ1_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ1_9").html()) + 0;
				  $("#spanDistanciaCarreraZ1_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ1_10").html()) + 0;
				  $("#spanDistanciaCarreraZ1_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ1_1").html()) + 0;
				  $("#spanDistanciaNatacionZ1_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ1_2").html()) + 0;
				  $("#spanDistanciaNatacionZ1_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ1_3").html()) + 0;
				  $("#spanDistanciaNatacionZ1_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ1_4").html()) + 0;
				  $("#spanDistanciaNatacionZ1_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ1_5").html()) + 0;
				  $("#spanDistanciaNatacionZ1_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ1_6").html()) + 0;
				  $("#spanDistanciaNatacionZ1_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ1_7").html()) + 0;
				  $("#spanDistanciaNatacionZ1_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ1_8").html()) + 0;
				  $("#spanDistanciaNatacionZ1_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ1_9").html()) + 0;
				  $("#spanDistanciaNatacionZ1_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ1_10").html()) + 0;
				  $("#spanDistanciaNatacionZ1_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 0;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo1").html()) + 0;
				  $("#spanTotalSesionesCiclismo1").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion1").html()) + 0;
				  $("#spanTotalSesionesNatacion1").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera1").html()) + 0;
				  $("#spanTotalSesionesCarrera1").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo1").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo1").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (30/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo1").html()) + (0/60);
				  $("#spanTotalHorasCiclismo1").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion1").html()) + (0/60);
				  $("#spanTotalHorasNatacion1").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera1").html()) + (30/60);
				  $("#spanTotalHorasCarrera1").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo1").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo1").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (259.6);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo1").html()) + (0);
				  $("#spanTotalCaloriasCiclismo1").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion1").html()) + (0);
				  $("#spanTotalCaloriasNatacion1").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera1").html()) + (0);
				  $("#spanTotalCaloriasCarrera1").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo1").html()) + (259.6);
				  $("#spanTotalCaloriasEsfuerzo1").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ1_1").html()) + 0;
				  $("#spanTimeCiclismoZ1_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ1_2").html()) + 0;
				  $("#spanTimeCiclismoZ1_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ1_3").html()) + 0;
				  $("#spanTimeCiclismoZ1_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ1_4").html()) + 0;
				  $("#spanTimeCiclismoZ1_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ1_5").html()) + 0;
				  $("#spanTimeCiclismoZ1_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ1_6").html()) + 0;
				  $("#spanTimeCiclismoZ1_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ1_7").html()) + 0;
				  $("#spanTimeCiclismoZ1_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ1_8").html()) + 0;
				  $("#spanTimeCiclismoZ1_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ1_9").html()) + 0;
				  $("#spanTimeCiclismoZ1_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ1_10").html()) + 0;
				  $("#spanTimeCiclismoZ1_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 20;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 35;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ1_1").html()) + 20;
				  $("#spanTimeCarreraZ1_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ1_2").html()) + 35;
				  $("#spanTimeCarreraZ1_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ1_3").html()) + 0;
				  $("#spanTimeCarreraZ1_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ1_4").html()) + 0;
				  $("#spanTimeCarreraZ1_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ1_5").html()) + 0;
				  $("#spanTimeCarreraZ1_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ1_6").html()) + 0;
				  $("#spanTimeCarreraZ1_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ1_7").html()) + 0;
				  $("#spanTimeCarreraZ1_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ1_8").html()) + 0;
				  $("#spanTimeCarreraZ1_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ1_9").html()) + 0;
				  $("#spanTimeCarreraZ1_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ1_10").html()) + 0;
				  $("#spanTimeCarreraZ1_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ1_1").html()) + 0;
				  $("#spanTimeNatacionZ1_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ1_2").html()) + 0;
				  $("#spanTimeNatacionZ1_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ1_3").html()) + 0;
				  $("#spanTimeNatacionZ1_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ1_4").html()) + 0;
				  $("#spanTimeNatacionZ1_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ1_5").html()) + 0;
				  $("#spanTimeNatacionZ1_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ1_6").html()) + 0;
				  $("#spanTimeNatacionZ1_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ1_7").html()) + 0;
				  $("#spanTimeNatacionZ1_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ1_8").html()) + 0;
				  $("#spanTimeNatacionZ1_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ1_9").html()) + 0;
				  $("#spanTimeNatacionZ1_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ1_10").html()) + 0;
				  $("#spanTimeNatacionZ1_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ1_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ1_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ1_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ1_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ1_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ1_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ1_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ1_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ1_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ1_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 7.9916666666667;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ1_1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ1_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ1_2").html()) + 7.9916666666667;
				  $("#spanDistanciaCarreraZ1_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ1_3").html()) + 0;
				  $("#spanDistanciaCarreraZ1_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ1_4").html()) + 0;
				  $("#spanDistanciaCarreraZ1_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ1_5").html()) + 0;
				  $("#spanDistanciaCarreraZ1_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ1_6").html()) + 0;
				  $("#spanDistanciaCarreraZ1_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ1_7").html()) + 0;
				  $("#spanDistanciaCarreraZ1_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ1_8").html()) + 0;
				  $("#spanDistanciaCarreraZ1_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ1_9").html()) + 0;
				  $("#spanDistanciaCarreraZ1_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ1_10").html()) + 0;
				  $("#spanDistanciaCarreraZ1_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ1_1").html()) + 0;
				  $("#spanDistanciaNatacionZ1_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ1_2").html()) + 0;
				  $("#spanDistanciaNatacionZ1_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ1_3").html()) + 0;
				  $("#spanDistanciaNatacionZ1_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ1_4").html()) + 0;
				  $("#spanDistanciaNatacionZ1_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ1_5").html()) + 0;
				  $("#spanDistanciaNatacionZ1_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ1_6").html()) + 0;
				  $("#spanDistanciaNatacionZ1_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ1_7").html()) + 0;
				  $("#spanDistanciaNatacionZ1_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ1_8").html()) + 0;
				  $("#spanDistanciaNatacionZ1_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ1_9").html()) + 0;
				  $("#spanDistanciaNatacionZ1_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ1_10").html()) + 0;
				  $("#spanDistanciaNatacionZ1_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo1").html()) + 0;
				  $("#spanTotalSesionesCiclismo1").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion1").html()) + 0;
				  $("#spanTotalSesionesNatacion1").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera1").html()) + 1;
				  $("#spanTotalSesionesCarrera1").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo1").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo1").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (55/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo1").html()) + (0/60);
				  $("#spanTotalHorasCiclismo1").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion1").html()) + (0/60);
				  $("#spanTotalHorasNatacion1").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera1").html()) + (55/60);
				  $("#spanTotalHorasCarrera1").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo1").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo1").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (177.27);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo1").html()) + (0);
				  $("#spanTotalCaloriasCiclismo1").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion1").html()) + (0);
				  $("#spanTotalCaloriasNatacion1").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera1").html()) + (0);
				  $("#spanTotalCaloriasCarrera1").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo1").html()) + (177.27);
				  $("#spanTotalCaloriasEsfuerzo1").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ1_1").html()) + 0;
				  $("#spanTimeCiclismoZ1_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ1_2").html()) + 0;
				  $("#spanTimeCiclismoZ1_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ1_3").html()) + 0;
				  $("#spanTimeCiclismoZ1_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ1_4").html()) + 0;
				  $("#spanTimeCiclismoZ1_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ1_5").html()) + 0;
				  $("#spanTimeCiclismoZ1_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ1_6").html()) + 0;
				  $("#spanTimeCiclismoZ1_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ1_7").html()) + 0;
				  $("#spanTimeCiclismoZ1_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ1_8").html()) + 0;
				  $("#spanTimeCiclismoZ1_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ1_9").html()) + 0;
				  $("#spanTimeCiclismoZ1_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ1_10").html()) + 0;
				  $("#spanTimeCiclismoZ1_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 30;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ1_1").html()) + 30;
				  $("#spanTimeCarreraZ1_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ1_2").html()) + 0;
				  $("#spanTimeCarreraZ1_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ1_3").html()) + 0;
				  $("#spanTimeCarreraZ1_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ1_4").html()) + 0;
				  $("#spanTimeCarreraZ1_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ1_5").html()) + 0;
				  $("#spanTimeCarreraZ1_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ1_6").html()) + 0;
				  $("#spanTimeCarreraZ1_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ1_7").html()) + 0;
				  $("#spanTimeCarreraZ1_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ1_8").html()) + 0;
				  $("#spanTimeCarreraZ1_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ1_9").html()) + 0;
				  $("#spanTimeCarreraZ1_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ1_10").html()) + 0;
				  $("#spanTimeCarreraZ1_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ1_1").html()) + 0;
				  $("#spanTimeNatacionZ1_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ1_2").html()) + 0;
				  $("#spanTimeNatacionZ1_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ1_3").html()) + 0;
				  $("#spanTimeNatacionZ1_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ1_4").html()) + 0;
				  $("#spanTimeNatacionZ1_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ1_5").html()) + 0;
				  $("#spanTimeNatacionZ1_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ1_6").html()) + 0;
				  $("#spanTimeNatacionZ1_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ1_7").html()) + 0;
				  $("#spanTimeNatacionZ1_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ1_8").html()) + 0;
				  $("#spanTimeNatacionZ1_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ1_9").html()) + 0;
				  $("#spanTimeNatacionZ1_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ1_10").html()) + 0;
				  $("#spanTimeNatacionZ1_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ1_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ1_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ1_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ1_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ1_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ1_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ1_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ1_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ1_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ1_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 6.215;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ1_1").html()) + 6.215;
				  $("#spanDistanciaCarreraZ1_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ1_2").html()) + 0;
				  $("#spanDistanciaCarreraZ1_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ1_3").html()) + 0;
				  $("#spanDistanciaCarreraZ1_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ1_4").html()) + 0;
				  $("#spanDistanciaCarreraZ1_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ1_5").html()) + 0;
				  $("#spanDistanciaCarreraZ1_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ1_6").html()) + 0;
				  $("#spanDistanciaCarreraZ1_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ1_7").html()) + 0;
				  $("#spanDistanciaCarreraZ1_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ1_8").html()) + 0;
				  $("#spanDistanciaCarreraZ1_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ1_9").html()) + 0;
				  $("#spanDistanciaCarreraZ1_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ1_10").html()) + 0;
				  $("#spanDistanciaCarreraZ1_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ1_1").html()) + 0;
				  $("#spanDistanciaNatacionZ1_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ1_2").html()) + 0;
				  $("#spanDistanciaNatacionZ1_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ1_3").html()) + 0;
				  $("#spanDistanciaNatacionZ1_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ1_4").html()) + 0;
				  $("#spanDistanciaNatacionZ1_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ1_5").html()) + 0;
				  $("#spanDistanciaNatacionZ1_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ1_6").html()) + 0;
				  $("#spanDistanciaNatacionZ1_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ1_7").html()) + 0;
				  $("#spanDistanciaNatacionZ1_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ1_8").html()) + 0;
				  $("#spanDistanciaNatacionZ1_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ1_9").html()) + 0;
				  $("#spanDistanciaNatacionZ1_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ1_10").html()) + 0;
				  $("#spanDistanciaNatacionZ1_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo1").html()) + 0;
				  $("#spanTotalSesionesCiclismo1").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion1").html()) + 0;
				  $("#spanTotalSesionesNatacion1").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera1").html()) + 1;
				  $("#spanTotalSesionesCarrera1").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo1").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo1").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (30/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo1").html()) + (0/60);
				  $("#spanTotalHorasCiclismo1").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion1").html()) + (0/60);
				  $("#spanTotalHorasNatacion1").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera1").html()) + (30/60);
				  $("#spanTotalHorasCarrera1").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo1").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo1").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (247.6);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo1").html()) + (0);
				  $("#spanTotalCaloriasCiclismo1").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion1").html()) + (0);
				  $("#spanTotalCaloriasNatacion1").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera1").html()) + (0);
				  $("#spanTotalCaloriasCarrera1").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo1").html()) + (247.6);
				  $("#spanTotalCaloriasEsfuerzo1").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ1_1").html()) + 0;
				  $("#spanTimeCiclismoZ1_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ1_2").html()) + 0;
				  $("#spanTimeCiclismoZ1_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ1_3").html()) + 0;
				  $("#spanTimeCiclismoZ1_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ1_4").html()) + 0;
				  $("#spanTimeCiclismoZ1_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ1_5").html()) + 0;
				  $("#spanTimeCiclismoZ1_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ1_6").html()) + 0;
				  $("#spanTimeCiclismoZ1_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ1_7").html()) + 0;
				  $("#spanTimeCiclismoZ1_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ1_8").html()) + 0;
				  $("#spanTimeCiclismoZ1_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ1_9").html()) + 0;
				  $("#spanTimeCiclismoZ1_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ1_10").html()) + 0;
				  $("#spanTimeCiclismoZ1_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 30;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ1_1").html()) + 30;
				  $("#spanTimeCarreraZ1_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ1_2").html()) + 0;
				  $("#spanTimeCarreraZ1_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ1_3").html()) + 0;
				  $("#spanTimeCarreraZ1_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ1_4").html()) + 0;
				  $("#spanTimeCarreraZ1_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ1_5").html()) + 0;
				  $("#spanTimeCarreraZ1_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ1_6").html()) + 0;
				  $("#spanTimeCarreraZ1_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ1_7").html()) + 0;
				  $("#spanTimeCarreraZ1_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ1_8").html()) + 0;
				  $("#spanTimeCarreraZ1_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ1_9").html()) + 0;
				  $("#spanTimeCarreraZ1_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ1_10").html()) + 0;
				  $("#spanTimeCarreraZ1_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ1_1").html()) + 0;
				  $("#spanTimeNatacionZ1_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ1_2").html()) + 0;
				  $("#spanTimeNatacionZ1_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ1_3").html()) + 0;
				  $("#spanTimeNatacionZ1_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ1_4").html()) + 0;
				  $("#spanTimeNatacionZ1_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ1_5").html()) + 0;
				  $("#spanTimeNatacionZ1_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ1_6").html()) + 0;
				  $("#spanTimeNatacionZ1_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ1_7").html()) + 0;
				  $("#spanTimeNatacionZ1_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ1_8").html()) + 0;
				  $("#spanTimeNatacionZ1_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ1_9").html()) + 0;
				  $("#spanTimeNatacionZ1_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ1_10").html()) + 0;
				  $("#spanTimeNatacionZ1_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ1_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ1_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ1_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ1_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ1_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ1_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ1_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ1_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ1_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ1_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 6.215;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ1_1").html()) + 6.215;
				  $("#spanDistanciaCarreraZ1_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ1_2").html()) + 0;
				  $("#spanDistanciaCarreraZ1_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ1_3").html()) + 0;
				  $("#spanDistanciaCarreraZ1_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ1_4").html()) + 0;
				  $("#spanDistanciaCarreraZ1_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ1_5").html()) + 0;
				  $("#spanDistanciaCarreraZ1_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ1_6").html()) + 0;
				  $("#spanDistanciaCarreraZ1_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ1_7").html()) + 0;
				  $("#spanDistanciaCarreraZ1_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ1_8").html()) + 0;
				  $("#spanDistanciaCarreraZ1_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ1_9").html()) + 0;
				  $("#spanDistanciaCarreraZ1_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ1_10").html()) + 0;
				  $("#spanDistanciaCarreraZ1_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ1_1").html()) + 0;
				  $("#spanDistanciaNatacionZ1_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ1_2").html()) + 0;
				  $("#spanDistanciaNatacionZ1_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ1_3").html()) + 0;
				  $("#spanDistanciaNatacionZ1_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ1_4").html()) + 0;
				  $("#spanDistanciaNatacionZ1_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ1_5").html()) + 0;
				  $("#spanDistanciaNatacionZ1_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ1_6").html()) + 0;
				  $("#spanDistanciaNatacionZ1_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ1_7").html()) + 0;
				  $("#spanDistanciaNatacionZ1_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ1_8").html()) + 0;
				  $("#spanDistanciaNatacionZ1_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ1_9").html()) + 0;
				  $("#spanDistanciaNatacionZ1_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ1_10").html()) + 0;
				  $("#spanDistanciaNatacionZ1_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 0;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo1").html()) + 0;
				  $("#spanTotalSesionesCiclismo1").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion1").html()) + 0;
				  $("#spanTotalSesionesNatacion1").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera1").html()) + 0;
				  $("#spanTotalSesionesCarrera1").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo1").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo1").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (30/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo1").html()) + (0/60);
				  $("#spanTotalHorasCiclismo1").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion1").html()) + (0/60);
				  $("#spanTotalHorasNatacion1").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera1").html()) + (30/60);
				  $("#spanTotalHorasCarrera1").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo1").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo1").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (373.6);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo1").html()) + (0);
				  $("#spanTotalCaloriasCiclismo1").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion1").html()) + (0);
				  $("#spanTotalCaloriasNatacion1").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera1").html()) + (0);
				  $("#spanTotalCaloriasCarrera1").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo1").html()) + (373.6);
				  $("#spanTotalCaloriasEsfuerzo1").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ1_1").html()) + 0;
				  $("#spanTimeCiclismoZ1_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ1_2").html()) + 0;
				  $("#spanTimeCiclismoZ1_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ1_3").html()) + 0;
				  $("#spanTimeCiclismoZ1_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ1_4").html()) + 0;
				  $("#spanTimeCiclismoZ1_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ1_5").html()) + 0;
				  $("#spanTimeCiclismoZ1_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ1_6").html()) + 0;
				  $("#spanTimeCiclismoZ1_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ1_7").html()) + 0;
				  $("#spanTimeCiclismoZ1_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ1_8").html()) + 0;
				  $("#spanTimeCiclismoZ1_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ1_9").html()) + 0;
				  $("#spanTimeCiclismoZ1_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ1_10").html()) + 0;
				  $("#spanTimeCiclismoZ1_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 20;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 15;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ1_1").html()) + 20;
				  $("#spanTimeCarreraZ1_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ1_2").html()) + 0;
				  $("#spanTimeCarreraZ1_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ1_3").html()) + 15;
				  $("#spanTimeCarreraZ1_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ1_4").html()) + 0;
				  $("#spanTimeCarreraZ1_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ1_5").html()) + 0;
				  $("#spanTimeCarreraZ1_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ1_6").html()) + 0;
				  $("#spanTimeCarreraZ1_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ1_7").html()) + 0;
				  $("#spanTimeCarreraZ1_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ1_8").html()) + 0;
				  $("#spanTimeCarreraZ1_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ1_9").html()) + 0;
				  $("#spanTimeCarreraZ1_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ1_10").html()) + 0;
				  $("#spanTimeCarreraZ1_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ1_1").html()) + 0;
				  $("#spanTimeNatacionZ1_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ1_2").html()) + 0;
				  $("#spanTimeNatacionZ1_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ1_3").html()) + 0;
				  $("#spanTimeNatacionZ1_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ1_4").html()) + 0;
				  $("#spanTimeNatacionZ1_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ1_5").html()) + 0;
				  $("#spanTimeNatacionZ1_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ1_6").html()) + 0;
				  $("#spanTimeNatacionZ1_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ1_7").html()) + 0;
				  $("#spanTimeNatacionZ1_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ1_8").html()) + 0;
				  $("#spanTimeNatacionZ1_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ1_9").html()) + 0;
				  $("#spanTimeNatacionZ1_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ1_10").html()) + 0;
				  $("#spanTimeNatacionZ1_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ1_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ1_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ1_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ1_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ1_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ1_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ1_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ1_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ1_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ1_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 7.505;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ1_1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ1_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ1_2").html()) + 0;
				  $("#spanDistanciaCarreraZ1_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ1_3").html()) + 7.505;
				  $("#spanDistanciaCarreraZ1_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ1_4").html()) + 0;
				  $("#spanDistanciaCarreraZ1_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ1_5").html()) + 0;
				  $("#spanDistanciaCarreraZ1_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ1_6").html()) + 0;
				  $("#spanDistanciaCarreraZ1_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ1_7").html()) + 0;
				  $("#spanDistanciaCarreraZ1_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ1_8").html()) + 0;
				  $("#spanDistanciaCarreraZ1_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ1_9").html()) + 0;
				  $("#spanDistanciaCarreraZ1_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ1_10").html()) + 0;
				  $("#spanDistanciaCarreraZ1_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ1_1").html()) + 0;
				  $("#spanDistanciaNatacionZ1_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ1_2").html()) + 0;
				  $("#spanDistanciaNatacionZ1_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ1_3").html()) + 0;
				  $("#spanDistanciaNatacionZ1_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ1_4").html()) + 0;
				  $("#spanDistanciaNatacionZ1_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ1_5").html()) + 0;
				  $("#spanDistanciaNatacionZ1_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ1_6").html()) + 0;
				  $("#spanDistanciaNatacionZ1_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ1_7").html()) + 0;
				  $("#spanDistanciaNatacionZ1_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ1_8").html()) + 0;
				  $("#spanDistanciaNatacionZ1_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ1_9").html()) + 0;
				  $("#spanDistanciaNatacionZ1_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ1_10").html()) + 0;
				  $("#spanDistanciaNatacionZ1_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo1").html()) + 0;
				  $("#spanTotalSesionesCiclismo1").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion1").html()) + 0;
				  $("#spanTotalSesionesNatacion1").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera1").html()) + 1;
				  $("#spanTotalSesionesCarrera1").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo1").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo1").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (35/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo1").html()) + (0/60);
				  $("#spanTotalHorasCiclismo1").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion1").html()) + (0/60);
				  $("#spanTotalHorasNatacion1").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera1").html()) + (35/60);
				  $("#spanTotalHorasCarrera1").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo1").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo1").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (128.87);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo1").html()) + (0);
				  $("#spanTotalCaloriasCiclismo1").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion1").html()) + (0);
				  $("#spanTotalCaloriasNatacion1").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera1").html()) + (0);
				  $("#spanTotalCaloriasCarrera1").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo1").html()) + (128.87);
				  $("#spanTotalCaloriasEsfuerzo1").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ1_1").html()) + 0;
				  $("#spanTimeCiclismoZ1_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ1_2").html()) + 0;
				  $("#spanTimeCiclismoZ1_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ1_3").html()) + 0;
				  $("#spanTimeCiclismoZ1_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ1_4").html()) + 0;
				  $("#spanTimeCiclismoZ1_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ1_5").html()) + 0;
				  $("#spanTimeCiclismoZ1_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ1_6").html()) + 0;
				  $("#spanTimeCiclismoZ1_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ1_7").html()) + 0;
				  $("#spanTimeCiclismoZ1_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ1_8").html()) + 0;
				  $("#spanTimeCiclismoZ1_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ1_9").html()) + 0;
				  $("#spanTimeCiclismoZ1_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ1_10").html()) + 0;
				  $("#spanTimeCiclismoZ1_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 55;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ1_1").html()) + 55;
				  $("#spanTimeCarreraZ1_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ1_2").html()) + 0;
				  $("#spanTimeCarreraZ1_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ1_3").html()) + 0;
				  $("#spanTimeCarreraZ1_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ1_4").html()) + 0;
				  $("#spanTimeCarreraZ1_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ1_5").html()) + 0;
				  $("#spanTimeCarreraZ1_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ1_6").html()) + 0;
				  $("#spanTimeCarreraZ1_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ1_7").html()) + 0;
				  $("#spanTimeCarreraZ1_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ1_8").html()) + 0;
				  $("#spanTimeCarreraZ1_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ1_9").html()) + 0;
				  $("#spanTimeCarreraZ1_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ1_10").html()) + 0;
				  $("#spanTimeCarreraZ1_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ1_1").html()) + 0;
				  $("#spanTimeNatacionZ1_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ1_2").html()) + 0;
				  $("#spanTimeNatacionZ1_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ1_3").html()) + 0;
				  $("#spanTimeNatacionZ1_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ1_4").html()) + 0;
				  $("#spanTimeNatacionZ1_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ1_5").html()) + 0;
				  $("#spanTimeNatacionZ1_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ1_6").html()) + 0;
				  $("#spanTimeNatacionZ1_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ1_7").html()) + 0;
				  $("#spanTimeNatacionZ1_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ1_8").html()) + 0;
				  $("#spanTimeNatacionZ1_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ1_9").html()) + 0;
				  $("#spanTimeNatacionZ1_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ1_10").html()) + 0;
				  $("#spanTimeNatacionZ1_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ1_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ1_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ1_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ1_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ1_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ1_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ1_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ1_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ1_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ1_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ1_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 11.394166666667;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ1_1").html()) + 11.394166666667;
				  $("#spanDistanciaCarreraZ1_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ1_2").html()) + 0;
				  $("#spanDistanciaCarreraZ1_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ1_3").html()) + 0;
				  $("#spanDistanciaCarreraZ1_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ1_4").html()) + 0;
				  $("#spanDistanciaCarreraZ1_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ1_5").html()) + 0;
				  $("#spanDistanciaCarreraZ1_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ1_6").html()) + 0;
				  $("#spanDistanciaCarreraZ1_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ1_7").html()) + 0;
				  $("#spanDistanciaCarreraZ1_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ1_8").html()) + 0;
				  $("#spanDistanciaCarreraZ1_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ1_9").html()) + 0;
				  $("#spanDistanciaCarreraZ1_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ1_10").html()) + 0;
				  $("#spanDistanciaCarreraZ1_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ1_1").html()) + 0;
				  $("#spanDistanciaNatacionZ1_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ1_2").html()) + 0;
				  $("#spanDistanciaNatacionZ1_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ1_3").html()) + 0;
				  $("#spanDistanciaNatacionZ1_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ1_4").html()) + 0;
				  $("#spanDistanciaNatacionZ1_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ1_5").html()) + 0;
				  $("#spanDistanciaNatacionZ1_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ1_6").html()) + 0;
				  $("#spanDistanciaNatacionZ1_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ1_7").html()) + 0;
				  $("#spanDistanciaNatacionZ1_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ1_8").html()) + 0;
				  $("#spanDistanciaNatacionZ1_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ1_9").html()) + 0;
				  $("#spanDistanciaNatacionZ1_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ1_10").html()) + 0;
				  $("#spanDistanciaNatacionZ1_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo1").html()) + 0;
				  $("#spanTotalSesionesCiclismo1").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion1").html()) + 0;
				  $("#spanTotalSesionesNatacion1").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera1").html()) + 1;
				  $("#spanTotalSesionesCarrera1").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo1").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo1").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (55/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo1").html()) + (0/60);
				  $("#spanTotalHorasCiclismo1").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion1").html()) + (0/60);
				  $("#spanTotalHorasNatacion1").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera1").html()) + (55/60);
				  $("#spanTotalHorasCarrera1").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo1").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo1").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (137.6);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo1").html()) + (0);
				  $("#spanTotalCaloriasCiclismo1").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion1").html()) + (0);
				  $("#spanTotalCaloriasNatacion1").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera1").html()) + (0);
				  $("#spanTotalCaloriasCarrera1").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo1").html()) + (137.6);
				  $("#spanTotalCaloriasEsfuerzo1").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ2_1").html()) + 0;
				  $("#spanTimeCiclismoZ2_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2_2").html()) + 0;
				  $("#spanTimeCiclismoZ2_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ2_3").html()) + 0;
				  $("#spanTimeCiclismoZ2_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ2_4").html()) + 0;
				  $("#spanTimeCiclismoZ2_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ2_5").html()) + 0;
				  $("#spanTimeCiclismoZ2_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ2_6").html()) + 0;
				  $("#spanTimeCiclismoZ2_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ2_7").html()) + 0;
				  $("#spanTimeCiclismoZ2_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ2_8").html()) + 0;
				  $("#spanTimeCiclismoZ2_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ2_9").html()) + 0;
				  $("#spanTimeCiclismoZ2_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ2_10").html()) + 0;
				  $("#spanTimeCiclismoZ2_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 15;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ2_1").html()) + 15;
				  $("#spanTimeCarreraZ2_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2_2").html()) + 0;
				  $("#spanTimeCarreraZ2_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ2_3").html()) + 0;
				  $("#spanTimeCarreraZ2_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ2_4").html()) + 0;
				  $("#spanTimeCarreraZ2_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ2_5").html()) + 0;
				  $("#spanTimeCarreraZ2_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ2_6").html()) + 0;
				  $("#spanTimeCarreraZ2_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ2_7").html()) + 0;
				  $("#spanTimeCarreraZ2_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ2_8").html()) + 0;
				  $("#spanTimeCarreraZ2_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ2_9").html()) + 0;
				  $("#spanTimeCarreraZ2_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ2_10").html()) + 0;
				  $("#spanTimeCarreraZ2_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ2_1").html()) + 0;
				  $("#spanTimeNatacionZ2_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2_2").html()) + 0;
				  $("#spanTimeNatacionZ2_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ2_3").html()) + 0;
				  $("#spanTimeNatacionZ2_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ2_4").html()) + 0;
				  $("#spanTimeNatacionZ2_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ2_5").html()) + 0;
				  $("#spanTimeNatacionZ2_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ2_6").html()) + 0;
				  $("#spanTimeNatacionZ2_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ2_7").html()) + 0;
				  $("#spanTimeNatacionZ2_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ2_8").html()) + 0;
				  $("#spanTimeNatacionZ2_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ2_9").html()) + 0;
				  $("#spanTimeNatacionZ2_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ2_10").html()) + 0;
				  $("#spanTimeNatacionZ2_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ2_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ2_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ2_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ2_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ2_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ2_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ2_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ2_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ2_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ2_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 3.1075;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ2_1").html()) + 3.1075;
				  $("#spanDistanciaCarreraZ2_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2_2").html()) + 0;
				  $("#spanDistanciaCarreraZ2_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ2_3").html()) + 0;
				  $("#spanDistanciaCarreraZ2_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ2_4").html()) + 0;
				  $("#spanDistanciaCarreraZ2_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ2_5").html()) + 0;
				  $("#spanDistanciaCarreraZ2_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ2_6").html()) + 0;
				  $("#spanDistanciaCarreraZ2_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ2_7").html()) + 0;
				  $("#spanDistanciaCarreraZ2_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ2_8").html()) + 0;
				  $("#spanDistanciaCarreraZ2_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ2_9").html()) + 0;
				  $("#spanDistanciaCarreraZ2_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ2_10").html()) + 0;
				  $("#spanDistanciaCarreraZ2_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ2_1").html()) + 0;
				  $("#spanDistanciaNatacionZ2_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2_2").html()) + 0;
				  $("#spanDistanciaNatacionZ2_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ2_3").html()) + 0;
				  $("#spanDistanciaNatacionZ2_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ2_4").html()) + 0;
				  $("#spanDistanciaNatacionZ2_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ2_5").html()) + 0;
				  $("#spanDistanciaNatacionZ2_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ2_6").html()) + 0;
				  $("#spanDistanciaNatacionZ2_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ2_7").html()) + 0;
				  $("#spanDistanciaNatacionZ2_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ2_8").html()) + 0;
				  $("#spanDistanciaNatacionZ2_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ2_9").html()) + 0;
				  $("#spanDistanciaNatacionZ2_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ2_10").html()) + 0;
				  $("#spanDistanciaNatacionZ2_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 0;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo2").html()) + 0;
				  $("#spanTotalSesionesCiclismo2").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion2").html()) + 0;
				  $("#spanTotalSesionesNatacion2").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera2").html()) + 0;
				  $("#spanTotalSesionesCarrera2").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo2").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo2").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (15/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo2").html()) + (0/60);
				  $("#spanTotalHorasCiclismo2").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion2").html()) + (0/60);
				  $("#spanTotalHorasNatacion2").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera2").html()) + (15/60);
				  $("#spanTotalHorasCarrera2").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo2").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo2").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (234.6);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo2").html()) + (0);
				  $("#spanTotalCaloriasCiclismo2").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion2").html()) + (0);
				  $("#spanTotalCaloriasNatacion2").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera2").html()) + (0);
				  $("#spanTotalCaloriasCarrera2").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo2").html()) + (234.6);
				  $("#spanTotalCaloriasEsfuerzo2").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ2_1").html()) + 0;
				  $("#spanTimeCiclismoZ2_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2_2").html()) + 0;
				  $("#spanTimeCiclismoZ2_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ2_3").html()) + 0;
				  $("#spanTimeCiclismoZ2_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ2_4").html()) + 0;
				  $("#spanTimeCiclismoZ2_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ2_5").html()) + 0;
				  $("#spanTimeCiclismoZ2_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ2_6").html()) + 0;
				  $("#spanTimeCiclismoZ2_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ2_7").html()) + 0;
				  $("#spanTimeCiclismoZ2_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ2_8").html()) + 0;
				  $("#spanTimeCiclismoZ2_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ2_9").html()) + 0;
				  $("#spanTimeCiclismoZ2_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ2_10").html()) + 0;
				  $("#spanTimeCiclismoZ2_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 20;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 4;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ2_1").html()) + 20;
				  $("#spanTimeCarreraZ2_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2_2").html()) + 0;
				  $("#spanTimeCarreraZ2_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ2_3").html()) + 0;
				  $("#spanTimeCarreraZ2_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ2_4").html()) + 4;
				  $("#spanTimeCarreraZ2_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ2_5").html()) + 0;
				  $("#spanTimeCarreraZ2_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ2_6").html()) + 0;
				  $("#spanTimeCarreraZ2_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ2_7").html()) + 0;
				  $("#spanTimeCarreraZ2_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ2_8").html()) + 0;
				  $("#spanTimeCarreraZ2_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ2_9").html()) + 0;
				  $("#spanTimeCarreraZ2_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ2_10").html()) + 0;
				  $("#spanTimeCarreraZ2_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ2_1").html()) + 0;
				  $("#spanTimeNatacionZ2_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2_2").html()) + 0;
				  $("#spanTimeNatacionZ2_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ2_3").html()) + 0;
				  $("#spanTimeNatacionZ2_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ2_4").html()) + 0;
				  $("#spanTimeNatacionZ2_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ2_5").html()) + 0;
				  $("#spanTimeNatacionZ2_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ2_6").html()) + 0;
				  $("#spanTimeNatacionZ2_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ2_7").html()) + 0;
				  $("#spanTimeNatacionZ2_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ2_8").html()) + 0;
				  $("#spanTimeNatacionZ2_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ2_9").html()) + 0;
				  $("#spanTimeNatacionZ2_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ2_10").html()) + 0;
				  $("#spanTimeNatacionZ2_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ2_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ2_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ2_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ2_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ2_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ2_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ2_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ2_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ2_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ2_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 7.6533333333333;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ2_1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ2_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2_2").html()) + 0;
				  $("#spanDistanciaCarreraZ2_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ2_3").html()) + 0;
				  $("#spanDistanciaCarreraZ2_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ2_4").html()) + 7.6533333333333;
				  $("#spanDistanciaCarreraZ2_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ2_5").html()) + 0;
				  $("#spanDistanciaCarreraZ2_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ2_6").html()) + 0;
				  $("#spanDistanciaCarreraZ2_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ2_7").html()) + 0;
				  $("#spanDistanciaCarreraZ2_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ2_8").html()) + 0;
				  $("#spanDistanciaCarreraZ2_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ2_9").html()) + 0;
				  $("#spanDistanciaCarreraZ2_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ2_10").html()) + 0;
				  $("#spanDistanciaCarreraZ2_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ2_1").html()) + 0;
				  $("#spanDistanciaNatacionZ2_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2_2").html()) + 0;
				  $("#spanDistanciaNatacionZ2_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ2_3").html()) + 0;
				  $("#spanDistanciaNatacionZ2_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ2_4").html()) + 0;
				  $("#spanDistanciaNatacionZ2_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ2_5").html()) + 0;
				  $("#spanDistanciaNatacionZ2_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ2_6").html()) + 0;
				  $("#spanDistanciaNatacionZ2_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ2_7").html()) + 0;
				  $("#spanDistanciaNatacionZ2_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ2_8").html()) + 0;
				  $("#spanDistanciaNatacionZ2_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ2_9").html()) + 0;
				  $("#spanDistanciaNatacionZ2_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ2_10").html()) + 0;
				  $("#spanDistanciaNatacionZ2_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo2").html()) + 0;
				  $("#spanTotalSesionesCiclismo2").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion2").html()) + 0;
				  $("#spanTotalSesionesNatacion2").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera2").html()) + 1;
				  $("#spanTotalSesionesCarrera2").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo2").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo2").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (24/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo2").html()) + (0/60);
				  $("#spanTotalHorasCiclismo2").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion2").html()) + (0/60);
				  $("#spanTotalHorasNatacion2").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera2").html()) + (24/60);
				  $("#spanTotalHorasCarrera2").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo2").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo2").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (150.2);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo2").html()) + (0);
				  $("#spanTotalCaloriasCiclismo2").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion2").html()) + (0);
				  $("#spanTotalCaloriasNatacion2").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera2").html()) + (0);
				  $("#spanTotalCaloriasCarrera2").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo2").html()) + (150.2);
				  $("#spanTotalCaloriasEsfuerzo2").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ2_1").html()) + 0;
				  $("#spanTimeCiclismoZ2_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2_2").html()) + 0;
				  $("#spanTimeCiclismoZ2_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ2_3").html()) + 0;
				  $("#spanTimeCiclismoZ2_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ2_4").html()) + 0;
				  $("#spanTimeCiclismoZ2_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ2_5").html()) + 0;
				  $("#spanTimeCiclismoZ2_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ2_6").html()) + 0;
				  $("#spanTimeCiclismoZ2_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ2_7").html()) + 0;
				  $("#spanTimeCiclismoZ2_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ2_8").html()) + 0;
				  $("#spanTimeCiclismoZ2_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ2_9").html()) + 0;
				  $("#spanTimeCiclismoZ2_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ2_10").html()) + 0;
				  $("#spanTimeCiclismoZ2_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 35;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ2_1").html()) + 35;
				  $("#spanTimeCarreraZ2_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2_2").html()) + 0;
				  $("#spanTimeCarreraZ2_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ2_3").html()) + 0;
				  $("#spanTimeCarreraZ2_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ2_4").html()) + 0;
				  $("#spanTimeCarreraZ2_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ2_5").html()) + 0;
				  $("#spanTimeCarreraZ2_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ2_6").html()) + 0;
				  $("#spanTimeCarreraZ2_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ2_7").html()) + 0;
				  $("#spanTimeCarreraZ2_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ2_8").html()) + 0;
				  $("#spanTimeCarreraZ2_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ2_9").html()) + 0;
				  $("#spanTimeCarreraZ2_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ2_10").html()) + 0;
				  $("#spanTimeCarreraZ2_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ2_1").html()) + 0;
				  $("#spanTimeNatacionZ2_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2_2").html()) + 0;
				  $("#spanTimeNatacionZ2_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ2_3").html()) + 0;
				  $("#spanTimeNatacionZ2_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ2_4").html()) + 0;
				  $("#spanTimeNatacionZ2_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ2_5").html()) + 0;
				  $("#spanTimeNatacionZ2_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ2_6").html()) + 0;
				  $("#spanTimeNatacionZ2_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ2_7").html()) + 0;
				  $("#spanTimeNatacionZ2_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ2_8").html()) + 0;
				  $("#spanTimeNatacionZ2_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ2_9").html()) + 0;
				  $("#spanTimeNatacionZ2_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ2_10").html()) + 0;
				  $("#spanTimeNatacionZ2_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ2_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ2_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ2_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ2_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ2_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ2_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ2_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ2_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ2_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ2_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 7.2508333333333;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ2_1").html()) + 7.2508333333333;
				  $("#spanDistanciaCarreraZ2_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2_2").html()) + 0;
				  $("#spanDistanciaCarreraZ2_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ2_3").html()) + 0;
				  $("#spanDistanciaCarreraZ2_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ2_4").html()) + 0;
				  $("#spanDistanciaCarreraZ2_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ2_5").html()) + 0;
				  $("#spanDistanciaCarreraZ2_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ2_6").html()) + 0;
				  $("#spanDistanciaCarreraZ2_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ2_7").html()) + 0;
				  $("#spanDistanciaCarreraZ2_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ2_8").html()) + 0;
				  $("#spanDistanciaCarreraZ2_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ2_9").html()) + 0;
				  $("#spanDistanciaCarreraZ2_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ2_10").html()) + 0;
				  $("#spanDistanciaCarreraZ2_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ2_1").html()) + 0;
				  $("#spanDistanciaNatacionZ2_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2_2").html()) + 0;
				  $("#spanDistanciaNatacionZ2_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ2_3").html()) + 0;
				  $("#spanDistanciaNatacionZ2_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ2_4").html()) + 0;
				  $("#spanDistanciaNatacionZ2_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ2_5").html()) + 0;
				  $("#spanDistanciaNatacionZ2_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ2_6").html()) + 0;
				  $("#spanDistanciaNatacionZ2_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ2_7").html()) + 0;
				  $("#spanDistanciaNatacionZ2_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ2_8").html()) + 0;
				  $("#spanDistanciaNatacionZ2_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ2_9").html()) + 0;
				  $("#spanDistanciaNatacionZ2_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ2_10").html()) + 0;
				  $("#spanDistanciaNatacionZ2_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo2").html()) + 0;
				  $("#spanTotalSesionesCiclismo2").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion2").html()) + 0;
				  $("#spanTotalSesionesNatacion2").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera2").html()) + 1;
				  $("#spanTotalSesionesCarrera2").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo2").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo2").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (35/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo2").html()) + (0/60);
				  $("#spanTotalHorasCiclismo2").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion2").html()) + (0/60);
				  $("#spanTotalHorasNatacion2").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera2").html()) + (35/60);
				  $("#spanTotalHorasCarrera2").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo2").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo2").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (247.6);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo2").html()) + (0);
				  $("#spanTotalCaloriasCiclismo2").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion2").html()) + (0);
				  $("#spanTotalCaloriasNatacion2").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera2").html()) + (0);
				  $("#spanTotalCaloriasCarrera2").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo2").html()) + (247.6);
				  $("#spanTotalCaloriasEsfuerzo2").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ2_1").html()) + 0;
				  $("#spanTimeCiclismoZ2_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2_2").html()) + 0;
				  $("#spanTimeCiclismoZ2_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ2_3").html()) + 0;
				  $("#spanTimeCiclismoZ2_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ2_4").html()) + 0;
				  $("#spanTimeCiclismoZ2_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ2_5").html()) + 0;
				  $("#spanTimeCiclismoZ2_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ2_6").html()) + 0;
				  $("#spanTimeCiclismoZ2_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ2_7").html()) + 0;
				  $("#spanTimeCiclismoZ2_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ2_8").html()) + 0;
				  $("#spanTimeCiclismoZ2_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ2_9").html()) + 0;
				  $("#spanTimeCiclismoZ2_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ2_10").html()) + 0;
				  $("#spanTimeCiclismoZ2_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 20;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ2_1").html()) + 20;
				  $("#spanTimeCarreraZ2_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2_2").html()) + 0;
				  $("#spanTimeCarreraZ2_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ2_3").html()) + 0;
				  $("#spanTimeCarreraZ2_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ2_4").html()) + 0;
				  $("#spanTimeCarreraZ2_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ2_5").html()) + 0;
				  $("#spanTimeCarreraZ2_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ2_6").html()) + 0;
				  $("#spanTimeCarreraZ2_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ2_7").html()) + 0;
				  $("#spanTimeCarreraZ2_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ2_8").html()) + 0;
				  $("#spanTimeCarreraZ2_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ2_9").html()) + 0;
				  $("#spanTimeCarreraZ2_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ2_10").html()) + 0;
				  $("#spanTimeCarreraZ2_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ2_1").html()) + 0;
				  $("#spanTimeNatacionZ2_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2_2").html()) + 0;
				  $("#spanTimeNatacionZ2_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ2_3").html()) + 0;
				  $("#spanTimeNatacionZ2_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ2_4").html()) + 0;
				  $("#spanTimeNatacionZ2_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ2_5").html()) + 0;
				  $("#spanTimeNatacionZ2_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ2_6").html()) + 0;
				  $("#spanTimeNatacionZ2_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ2_7").html()) + 0;
				  $("#spanTimeNatacionZ2_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ2_8").html()) + 0;
				  $("#spanTimeNatacionZ2_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ2_9").html()) + 0;
				  $("#spanTimeNatacionZ2_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ2_10").html()) + 0;
				  $("#spanTimeNatacionZ2_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ2_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ2_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ2_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ2_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ2_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ2_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ2_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ2_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ2_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ2_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ2_1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ2_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2_2").html()) + 0;
				  $("#spanDistanciaCarreraZ2_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ2_3").html()) + 0;
				  $("#spanDistanciaCarreraZ2_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ2_4").html()) + 0;
				  $("#spanDistanciaCarreraZ2_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ2_5").html()) + 0;
				  $("#spanDistanciaCarreraZ2_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ2_6").html()) + 0;
				  $("#spanDistanciaCarreraZ2_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ2_7").html()) + 0;
				  $("#spanDistanciaCarreraZ2_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ2_8").html()) + 0;
				  $("#spanDistanciaCarreraZ2_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ2_9").html()) + 0;
				  $("#spanDistanciaCarreraZ2_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ2_10").html()) + 0;
				  $("#spanDistanciaCarreraZ2_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ2_1").html()) + 0;
				  $("#spanDistanciaNatacionZ2_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2_2").html()) + 0;
				  $("#spanDistanciaNatacionZ2_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ2_3").html()) + 0;
				  $("#spanDistanciaNatacionZ2_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ2_4").html()) + 0;
				  $("#spanDistanciaNatacionZ2_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ2_5").html()) + 0;
				  $("#spanDistanciaNatacionZ2_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ2_6").html()) + 0;
				  $("#spanDistanciaNatacionZ2_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ2_7").html()) + 0;
				  $("#spanDistanciaNatacionZ2_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ2_8").html()) + 0;
				  $("#spanDistanciaNatacionZ2_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ2_9").html()) + 0;
				  $("#spanDistanciaNatacionZ2_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ2_10").html()) + 0;
				  $("#spanDistanciaNatacionZ2_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 0;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo2").html()) + 0;
				  $("#spanTotalSesionesCiclismo2").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion2").html()) + 0;
				  $("#spanTotalSesionesNatacion2").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera2").html()) + 0;
				  $("#spanTotalSesionesCarrera2").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo2").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo2").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (20/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo2").html()) + (0/60);
				  $("#spanTotalHorasCiclismo2").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion2").html()) + (0/60);
				  $("#spanTotalHorasNatacion2").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera2").html()) + (20/60);
				  $("#spanTotalHorasCarrera2").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo2").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo2").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (338.6);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo2").html()) + (0);
				  $("#spanTotalCaloriasCiclismo2").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion2").html()) + (0);
				  $("#spanTotalCaloriasNatacion2").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera2").html()) + (0);
				  $("#spanTotalCaloriasCarrera2").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo2").html()) + (338.6);
				  $("#spanTotalCaloriasEsfuerzo2").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ2_1").html()) + 0;
				  $("#spanTimeCiclismoZ2_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2_2").html()) + 0;
				  $("#spanTimeCiclismoZ2_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ2_3").html()) + 0;
				  $("#spanTimeCiclismoZ2_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ2_4").html()) + 0;
				  $("#spanTimeCiclismoZ2_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ2_5").html()) + 0;
				  $("#spanTimeCiclismoZ2_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ2_6").html()) + 0;
				  $("#spanTimeCiclismoZ2_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ2_7").html()) + 0;
				  $("#spanTimeCiclismoZ2_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ2_8").html()) + 0;
				  $("#spanTimeCiclismoZ2_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ2_9").html()) + 0;
				  $("#spanTimeCiclismoZ2_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ2_10").html()) + 0;
				  $("#spanTimeCiclismoZ2_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 20;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 12;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 4.390243902439;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ2_1").html()) + 20;
				  $("#spanTimeCarreraZ2_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2_2").html()) + 0;
				  $("#spanTimeCarreraZ2_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ2_3").html()) + 12;
				  $("#spanTimeCarreraZ2_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ2_4").html()) + 4.390243902439;
				  $("#spanTimeCarreraZ2_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ2_5").html()) + 0;
				  $("#spanTimeCarreraZ2_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ2_6").html()) + 0;
				  $("#spanTimeCarreraZ2_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ2_7").html()) + 0;
				  $("#spanTimeCarreraZ2_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ2_8").html()) + 0;
				  $("#spanTimeCarreraZ2_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ2_9").html()) + 0;
				  $("#spanTimeCarreraZ2_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ2_10").html()) + 0;
				  $("#spanTimeCarreraZ2_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ2_1").html()) + 0;
				  $("#spanTimeNatacionZ2_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2_2").html()) + 0;
				  $("#spanTimeNatacionZ2_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ2_3").html()) + 0;
				  $("#spanTimeNatacionZ2_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ2_4").html()) + 0;
				  $("#spanTimeNatacionZ2_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ2_5").html()) + 0;
				  $("#spanTimeNatacionZ2_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ2_6").html()) + 0;
				  $("#spanTimeNatacionZ2_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ2_7").html()) + 0;
				  $("#spanTimeNatacionZ2_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ2_8").html()) + 0;
				  $("#spanTimeNatacionZ2_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ2_9").html()) + 0;
				  $("#spanTimeNatacionZ2_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ2_10").html()) + 0;
				  $("#spanTimeNatacionZ2_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ2_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ2_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ2_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ2_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ2_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ2_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ2_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ2_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ2_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ2_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 6.004;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 3.6;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ2_1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ2_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2_2").html()) + 0;
				  $("#spanDistanciaCarreraZ2_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ2_3").html()) + 6.004;
				  $("#spanDistanciaCarreraZ2_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ2_4").html()) + 3.6;
				  $("#spanDistanciaCarreraZ2_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ2_5").html()) + 0;
				  $("#spanDistanciaCarreraZ2_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ2_6").html()) + 0;
				  $("#spanDistanciaCarreraZ2_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ2_7").html()) + 0;
				  $("#spanDistanciaCarreraZ2_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ2_8").html()) + 0;
				  $("#spanDistanciaCarreraZ2_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ2_9").html()) + 0;
				  $("#spanDistanciaCarreraZ2_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ2_10").html()) + 0;
				  $("#spanDistanciaCarreraZ2_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ2_1").html()) + 0;
				  $("#spanDistanciaNatacionZ2_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2_2").html()) + 0;
				  $("#spanDistanciaNatacionZ2_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ2_3").html()) + 0;
				  $("#spanDistanciaNatacionZ2_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ2_4").html()) + 0;
				  $("#spanDistanciaNatacionZ2_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ2_5").html()) + 0;
				  $("#spanDistanciaNatacionZ2_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ2_6").html()) + 0;
				  $("#spanDistanciaNatacionZ2_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ2_7").html()) + 0;
				  $("#spanDistanciaNatacionZ2_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ2_8").html()) + 0;
				  $("#spanDistanciaNatacionZ2_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ2_9").html()) + 0;
				  $("#spanDistanciaNatacionZ2_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ2_10").html()) + 0;
				  $("#spanDistanciaNatacionZ2_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo2").html()) + 0;
				  $("#spanTotalSesionesCiclismo2").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion2").html()) + 0;
				  $("#spanTotalSesionesNatacion2").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera2").html()) + 1;
				  $("#spanTotalSesionesCarrera2").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo2").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo2").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (36.390243902439/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo2").html()) + (0/60);
				  $("#spanTotalHorasCiclismo2").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion2").html()) + (0/60);
				  $("#spanTotalHorasNatacion2").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera2").html()) + (36.390243902439/60);
				  $("#spanTotalHorasCarrera2").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo2").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo2").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (137.6);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo2").html()) + (0);
				  $("#spanTotalCaloriasCiclismo2").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion2").html()) + (0);
				  $("#spanTotalCaloriasNatacion2").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera2").html()) + (0);
				  $("#spanTotalCaloriasCarrera2").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo2").html()) + (137.6);
				  $("#spanTotalCaloriasEsfuerzo2").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ2_1").html()) + 0;
				  $("#spanTimeCiclismoZ2_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2_2").html()) + 0;
				  $("#spanTimeCiclismoZ2_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ2_3").html()) + 0;
				  $("#spanTimeCiclismoZ2_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ2_4").html()) + 0;
				  $("#spanTimeCiclismoZ2_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ2_5").html()) + 0;
				  $("#spanTimeCiclismoZ2_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ2_6").html()) + 0;
				  $("#spanTimeCiclismoZ2_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ2_7").html()) + 0;
				  $("#spanTimeCiclismoZ2_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ2_8").html()) + 0;
				  $("#spanTimeCiclismoZ2_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ2_9").html()) + 0;
				  $("#spanTimeCiclismoZ2_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ2_10").html()) + 0;
				  $("#spanTimeCiclismoZ2_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 60;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ2_1").html()) + 60;
				  $("#spanTimeCarreraZ2_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2_2").html()) + 0;
				  $("#spanTimeCarreraZ2_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ2_3").html()) + 0;
				  $("#spanTimeCarreraZ2_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ2_4").html()) + 0;
				  $("#spanTimeCarreraZ2_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ2_5").html()) + 0;
				  $("#spanTimeCarreraZ2_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ2_6").html()) + 0;
				  $("#spanTimeCarreraZ2_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ2_7").html()) + 0;
				  $("#spanTimeCarreraZ2_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ2_8").html()) + 0;
				  $("#spanTimeCarreraZ2_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ2_9").html()) + 0;
				  $("#spanTimeCarreraZ2_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ2_10").html()) + 0;
				  $("#spanTimeCarreraZ2_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ2_1").html()) + 0;
				  $("#spanTimeNatacionZ2_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2_2").html()) + 0;
				  $("#spanTimeNatacionZ2_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ2_3").html()) + 0;
				  $("#spanTimeNatacionZ2_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ2_4").html()) + 0;
				  $("#spanTimeNatacionZ2_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ2_5").html()) + 0;
				  $("#spanTimeNatacionZ2_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ2_6").html()) + 0;
				  $("#spanTimeNatacionZ2_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ2_7").html()) + 0;
				  $("#spanTimeNatacionZ2_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ2_8").html()) + 0;
				  $("#spanTimeNatacionZ2_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ2_9").html()) + 0;
				  $("#spanTimeNatacionZ2_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ2_10").html()) + 0;
				  $("#spanTimeNatacionZ2_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ2_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ2_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ2_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ2_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ2_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ2_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ2_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ2_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ2_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ2_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ2_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 12.43;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ2_1").html()) + 12.43;
				  $("#spanDistanciaCarreraZ2_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2_2").html()) + 0;
				  $("#spanDistanciaCarreraZ2_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ2_3").html()) + 0;
				  $("#spanDistanciaCarreraZ2_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ2_4").html()) + 0;
				  $("#spanDistanciaCarreraZ2_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ2_5").html()) + 0;
				  $("#spanDistanciaCarreraZ2_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ2_6").html()) + 0;
				  $("#spanDistanciaCarreraZ2_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ2_7").html()) + 0;
				  $("#spanDistanciaCarreraZ2_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ2_8").html()) + 0;
				  $("#spanDistanciaCarreraZ2_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ2_9").html()) + 0;
				  $("#spanDistanciaCarreraZ2_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ2_10").html()) + 0;
				  $("#spanDistanciaCarreraZ2_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ2_1").html()) + 0;
				  $("#spanDistanciaNatacionZ2_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2_2").html()) + 0;
				  $("#spanDistanciaNatacionZ2_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ2_3").html()) + 0;
				  $("#spanDistanciaNatacionZ2_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ2_4").html()) + 0;
				  $("#spanDistanciaNatacionZ2_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ2_5").html()) + 0;
				  $("#spanDistanciaNatacionZ2_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ2_6").html()) + 0;
				  $("#spanDistanciaNatacionZ2_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ2_7").html()) + 0;
				  $("#spanDistanciaNatacionZ2_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ2_8").html()) + 0;
				  $("#spanDistanciaNatacionZ2_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ2_9").html()) + 0;
				  $("#spanDistanciaNatacionZ2_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ2_10").html()) + 0;
				  $("#spanDistanciaNatacionZ2_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo2").html()) + 0;
				  $("#spanTotalSesionesCiclismo2").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion2").html()) + 0;
				  $("#spanTotalSesionesNatacion2").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera2").html()) + 1;
				  $("#spanTotalSesionesCarrera2").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo2").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo2").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (60/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo2").html()) + (0/60);
				  $("#spanTotalHorasCiclismo2").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion2").html()) + (0/60);
				  $("#spanTotalHorasNatacion2").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera2").html()) + (60/60);
				  $("#spanTotalHorasCarrera2").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo2").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo2").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (137.6);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo2").html()) + (0);
				  $("#spanTotalCaloriasCiclismo2").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion2").html()) + (0);
				  $("#spanTotalCaloriasNatacion2").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera2").html()) + (0);
				  $("#spanTotalCaloriasCarrera2").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo2").html()) + (137.6);
				  $("#spanTotalCaloriasEsfuerzo2").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ3_1").html()) + 0;
				  $("#spanTimeCiclismoZ3_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ3_2").html()) + 0;
				  $("#spanTimeCiclismoZ3_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3_3").html()) + 0;
				  $("#spanTimeCiclismoZ3_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ3_4").html()) + 0;
				  $("#spanTimeCiclismoZ3_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ3_5").html()) + 0;
				  $("#spanTimeCiclismoZ3_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ3_6").html()) + 0;
				  $("#spanTimeCiclismoZ3_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ3_7").html()) + 0;
				  $("#spanTimeCiclismoZ3_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ3_8").html()) + 0;
				  $("#spanTimeCiclismoZ3_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ3_9").html()) + 0;
				  $("#spanTimeCiclismoZ3_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ3_10").html()) + 0;
				  $("#spanTimeCiclismoZ3_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 20;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ3_1").html()) + 20;
				  $("#spanTimeCarreraZ3_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ3_2").html()) + 0;
				  $("#spanTimeCarreraZ3_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3_3").html()) + 0;
				  $("#spanTimeCarreraZ3_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ3_4").html()) + 0;
				  $("#spanTimeCarreraZ3_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ3_5").html()) + 0;
				  $("#spanTimeCarreraZ3_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ3_6").html()) + 0;
				  $("#spanTimeCarreraZ3_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ3_7").html()) + 0;
				  $("#spanTimeCarreraZ3_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ3_8").html()) + 0;
				  $("#spanTimeCarreraZ3_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ3_9").html()) + 0;
				  $("#spanTimeCarreraZ3_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ3_10").html()) + 0;
				  $("#spanTimeCarreraZ3_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ3_1").html()) + 0;
				  $("#spanTimeNatacionZ3_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ3_2").html()) + 0;
				  $("#spanTimeNatacionZ3_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3_3").html()) + 0;
				  $("#spanTimeNatacionZ3_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ3_4").html()) + 0;
				  $("#spanTimeNatacionZ3_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ3_5").html()) + 0;
				  $("#spanTimeNatacionZ3_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ3_6").html()) + 0;
				  $("#spanTimeNatacionZ3_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ3_7").html()) + 0;
				  $("#spanTimeNatacionZ3_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ3_8").html()) + 0;
				  $("#spanTimeNatacionZ3_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ3_9").html()) + 0;
				  $("#spanTimeNatacionZ3_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ3_10").html()) + 0;
				  $("#spanTimeNatacionZ3_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ3_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ3_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ3_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ3_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ3_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ3_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ3_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ3_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ3_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ3_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ3_1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ3_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ3_2").html()) + 0;
				  $("#spanDistanciaCarreraZ3_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3_3").html()) + 0;
				  $("#spanDistanciaCarreraZ3_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ3_4").html()) + 0;
				  $("#spanDistanciaCarreraZ3_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ3_5").html()) + 0;
				  $("#spanDistanciaCarreraZ3_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ3_6").html()) + 0;
				  $("#spanDistanciaCarreraZ3_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ3_7").html()) + 0;
				  $("#spanDistanciaCarreraZ3_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ3_8").html()) + 0;
				  $("#spanDistanciaCarreraZ3_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ3_9").html()) + 0;
				  $("#spanDistanciaCarreraZ3_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ3_10").html()) + 0;
				  $("#spanDistanciaCarreraZ3_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ3_1").html()) + 0;
				  $("#spanDistanciaNatacionZ3_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ3_2").html()) + 0;
				  $("#spanDistanciaNatacionZ3_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3_3").html()) + 0;
				  $("#spanDistanciaNatacionZ3_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ3_4").html()) + 0;
				  $("#spanDistanciaNatacionZ3_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ3_5").html()) + 0;
				  $("#spanDistanciaNatacionZ3_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ3_6").html()) + 0;
				  $("#spanDistanciaNatacionZ3_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ3_7").html()) + 0;
				  $("#spanDistanciaNatacionZ3_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ3_8").html()) + 0;
				  $("#spanDistanciaNatacionZ3_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ3_9").html()) + 0;
				  $("#spanDistanciaNatacionZ3_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ3_10").html()) + 0;
				  $("#spanDistanciaNatacionZ3_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 0;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo3").html()) + 0;
				  $("#spanTotalSesionesCiclismo3").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion3").html()) + 0;
				  $("#spanTotalSesionesNatacion3").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera3").html()) + 0;
				  $("#spanTotalSesionesCarrera3").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo3").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo3").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (20/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo3").html()) + (0/60);
				  $("#spanTotalHorasCiclismo3").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion3").html()) + (0/60);
				  $("#spanTotalHorasNatacion3").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera3").html()) + (20/60);
				  $("#spanTotalHorasCarrera3").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo3").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo3").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (383.6);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo3").html()) + (0);
				  $("#spanTotalCaloriasCiclismo3").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion3").html()) + (0);
				  $("#spanTotalCaloriasNatacion3").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera3").html()) + (0);
				  $("#spanTotalCaloriasCarrera3").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo3").html()) + (383.6);
				  $("#spanTotalCaloriasEsfuerzo3").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ3_1").html()) + 0;
				  $("#spanTimeCiclismoZ3_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ3_2").html()) + 0;
				  $("#spanTimeCiclismoZ3_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3_3").html()) + 0;
				  $("#spanTimeCiclismoZ3_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ3_4").html()) + 0;
				  $("#spanTimeCiclismoZ3_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ3_5").html()) + 0;
				  $("#spanTimeCiclismoZ3_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ3_6").html()) + 0;
				  $("#spanTimeCiclismoZ3_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ3_7").html()) + 0;
				  $("#spanTimeCiclismoZ3_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ3_8").html()) + 0;
				  $("#spanTimeCiclismoZ3_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ3_9").html()) + 0;
				  $("#spanTimeCiclismoZ3_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ3_10").html()) + 0;
				  $("#spanTimeCiclismoZ3_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 20;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 2.7713625866051;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ3_1").html()) + 20;
				  $("#spanTimeCarreraZ3_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ3_2").html()) + 0;
				  $("#spanTimeCarreraZ3_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3_3").html()) + 0;
				  $("#spanTimeCarreraZ3_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ3_4").html()) + 0;
				  $("#spanTimeCarreraZ3_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ3_5").html()) + 2.7713625866051;
				  $("#spanTimeCarreraZ3_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ3_6").html()) + 0;
				  $("#spanTimeCarreraZ3_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ3_7").html()) + 0;
				  $("#spanTimeCarreraZ3_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ3_8").html()) + 0;
				  $("#spanTimeCarreraZ3_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ3_9").html()) + 0;
				  $("#spanTimeCarreraZ3_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ3_10").html()) + 0;
				  $("#spanTimeCarreraZ3_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ3_1").html()) + 0;
				  $("#spanTimeNatacionZ3_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ3_2").html()) + 0;
				  $("#spanTimeNatacionZ3_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3_3").html()) + 0;
				  $("#spanTimeNatacionZ3_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ3_4").html()) + 0;
				  $("#spanTimeNatacionZ3_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ3_5").html()) + 0;
				  $("#spanTimeNatacionZ3_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ3_6").html()) + 0;
				  $("#spanTimeNatacionZ3_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ3_7").html()) + 0;
				  $("#spanTimeNatacionZ3_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ3_8").html()) + 0;
				  $("#spanTimeNatacionZ3_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ3_9").html()) + 0;
				  $("#spanTimeNatacionZ3_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ3_10").html()) + 0;
				  $("#spanTimeNatacionZ3_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ3_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ3_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ3_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ3_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ3_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ3_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ3_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ3_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ3_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ3_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 4.8;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ3_1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ3_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ3_2").html()) + 0;
				  $("#spanDistanciaCarreraZ3_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3_3").html()) + 0;
				  $("#spanDistanciaCarreraZ3_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ3_4").html()) + 0;
				  $("#spanDistanciaCarreraZ3_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ3_5").html()) + 4.8;
				  $("#spanDistanciaCarreraZ3_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ3_6").html()) + 0;
				  $("#spanDistanciaCarreraZ3_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ3_7").html()) + 0;
				  $("#spanDistanciaCarreraZ3_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ3_8").html()) + 0;
				  $("#spanDistanciaCarreraZ3_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ3_9").html()) + 0;
				  $("#spanDistanciaCarreraZ3_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ3_10").html()) + 0;
				  $("#spanDistanciaCarreraZ3_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ3_1").html()) + 0;
				  $("#spanDistanciaNatacionZ3_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ3_2").html()) + 0;
				  $("#spanDistanciaNatacionZ3_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3_3").html()) + 0;
				  $("#spanDistanciaNatacionZ3_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ3_4").html()) + 0;
				  $("#spanDistanciaNatacionZ3_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ3_5").html()) + 0;
				  $("#spanDistanciaNatacionZ3_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ3_6").html()) + 0;
				  $("#spanDistanciaNatacionZ3_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ3_7").html()) + 0;
				  $("#spanDistanciaNatacionZ3_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ3_8").html()) + 0;
				  $("#spanDistanciaNatacionZ3_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ3_9").html()) + 0;
				  $("#spanDistanciaNatacionZ3_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ3_10").html()) + 0;
				  $("#spanDistanciaNatacionZ3_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo3").html()) + 0;
				  $("#spanTotalSesionesCiclismo3").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion3").html()) + 0;
				  $("#spanTotalSesionesNatacion3").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera3").html()) + 1;
				  $("#spanTotalSesionesCarrera3").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo3").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo3").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (22.771362586605/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo3").html()) + (0/60);
				  $("#spanTotalHorasCiclismo3").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion3").html()) + (0/60);
				  $("#spanTotalHorasNatacion3").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera3").html()) + (22.771362586605/60);
				  $("#spanTotalHorasCarrera3").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo3").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo3").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (150.2);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo3").html()) + (0);
				  $("#spanTotalCaloriasCiclismo3").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion3").html()) + (0);
				  $("#spanTotalCaloriasNatacion3").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera3").html()) + (0);
				  $("#spanTotalCaloriasCarrera3").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo3").html()) + (150.2);
				  $("#spanTotalCaloriasEsfuerzo3").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ3_1").html()) + 0;
				  $("#spanTimeCiclismoZ3_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ3_2").html()) + 0;
				  $("#spanTimeCiclismoZ3_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3_3").html()) + 0;
				  $("#spanTimeCiclismoZ3_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ3_4").html()) + 0;
				  $("#spanTimeCiclismoZ3_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ3_5").html()) + 0;
				  $("#spanTimeCiclismoZ3_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ3_6").html()) + 0;
				  $("#spanTimeCiclismoZ3_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ3_7").html()) + 0;
				  $("#spanTimeCiclismoZ3_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ3_8").html()) + 0;
				  $("#spanTimeCiclismoZ3_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ3_9").html()) + 0;
				  $("#spanTimeCiclismoZ3_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ3_10").html()) + 0;
				  $("#spanTimeCiclismoZ3_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 30;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ3_1").html()) + 30;
				  $("#spanTimeCarreraZ3_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ3_2").html()) + 0;
				  $("#spanTimeCarreraZ3_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3_3").html()) + 0;
				  $("#spanTimeCarreraZ3_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ3_4").html()) + 0;
				  $("#spanTimeCarreraZ3_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ3_5").html()) + 0;
				  $("#spanTimeCarreraZ3_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ3_6").html()) + 0;
				  $("#spanTimeCarreraZ3_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ3_7").html()) + 0;
				  $("#spanTimeCarreraZ3_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ3_8").html()) + 0;
				  $("#spanTimeCarreraZ3_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ3_9").html()) + 0;
				  $("#spanTimeCarreraZ3_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ3_10").html()) + 0;
				  $("#spanTimeCarreraZ3_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ3_1").html()) + 0;
				  $("#spanTimeNatacionZ3_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ3_2").html()) + 0;
				  $("#spanTimeNatacionZ3_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3_3").html()) + 0;
				  $("#spanTimeNatacionZ3_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ3_4").html()) + 0;
				  $("#spanTimeNatacionZ3_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ3_5").html()) + 0;
				  $("#spanTimeNatacionZ3_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ3_6").html()) + 0;
				  $("#spanTimeNatacionZ3_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ3_7").html()) + 0;
				  $("#spanTimeNatacionZ3_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ3_8").html()) + 0;
				  $("#spanTimeNatacionZ3_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ3_9").html()) + 0;
				  $("#spanTimeNatacionZ3_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ3_10").html()) + 0;
				  $("#spanTimeNatacionZ3_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ3_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ3_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ3_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ3_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ3_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ3_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ3_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ3_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ3_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ3_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 6.215;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ3_1").html()) + 6.215;
				  $("#spanDistanciaCarreraZ3_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ3_2").html()) + 0;
				  $("#spanDistanciaCarreraZ3_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3_3").html()) + 0;
				  $("#spanDistanciaCarreraZ3_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ3_4").html()) + 0;
				  $("#spanDistanciaCarreraZ3_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ3_5").html()) + 0;
				  $("#spanDistanciaCarreraZ3_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ3_6").html()) + 0;
				  $("#spanDistanciaCarreraZ3_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ3_7").html()) + 0;
				  $("#spanDistanciaCarreraZ3_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ3_8").html()) + 0;
				  $("#spanDistanciaCarreraZ3_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ3_9").html()) + 0;
				  $("#spanDistanciaCarreraZ3_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ3_10").html()) + 0;
				  $("#spanDistanciaCarreraZ3_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ3_1").html()) + 0;
				  $("#spanDistanciaNatacionZ3_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ3_2").html()) + 0;
				  $("#spanDistanciaNatacionZ3_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3_3").html()) + 0;
				  $("#spanDistanciaNatacionZ3_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ3_4").html()) + 0;
				  $("#spanDistanciaNatacionZ3_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ3_5").html()) + 0;
				  $("#spanDistanciaNatacionZ3_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ3_6").html()) + 0;
				  $("#spanDistanciaNatacionZ3_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ3_7").html()) + 0;
				  $("#spanDistanciaNatacionZ3_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ3_8").html()) + 0;
				  $("#spanDistanciaNatacionZ3_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ3_9").html()) + 0;
				  $("#spanDistanciaNatacionZ3_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ3_10").html()) + 0;
				  $("#spanDistanciaNatacionZ3_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo3").html()) + 0;
				  $("#spanTotalSesionesCiclismo3").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion3").html()) + 0;
				  $("#spanTotalSesionesNatacion3").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera3").html()) + 1;
				  $("#spanTotalSesionesCarrera3").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo3").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo3").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (30/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo3").html()) + (0/60);
				  $("#spanTotalHorasCiclismo3").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion3").html()) + (0/60);
				  $("#spanTotalHorasNatacion3").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera3").html()) + (30/60);
				  $("#spanTotalHorasCarrera3").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo3").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo3").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (247.6);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo3").html()) + (0);
				  $("#spanTotalCaloriasCiclismo3").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion3").html()) + (0);
				  $("#spanTotalCaloriasNatacion3").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera3").html()) + (0);
				  $("#spanTotalCaloriasCarrera3").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo3").html()) + (247.6);
				  $("#spanTotalCaloriasEsfuerzo3").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ3_1").html()) + 0;
				  $("#spanTimeCiclismoZ3_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ3_2").html()) + 0;
				  $("#spanTimeCiclismoZ3_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3_3").html()) + 0;
				  $("#spanTimeCiclismoZ3_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ3_4").html()) + 0;
				  $("#spanTimeCiclismoZ3_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ3_5").html()) + 0;
				  $("#spanTimeCiclismoZ3_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ3_6").html()) + 0;
				  $("#spanTimeCiclismoZ3_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ3_7").html()) + 0;
				  $("#spanTimeCiclismoZ3_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ3_8").html()) + 0;
				  $("#spanTimeCiclismoZ3_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ3_9").html()) + 0;
				  $("#spanTimeCiclismoZ3_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ3_10").html()) + 0;
				  $("#spanTimeCiclismoZ3_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 15;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ3_1").html()) + 15;
				  $("#spanTimeCarreraZ3_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ3_2").html()) + 0;
				  $("#spanTimeCarreraZ3_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3_3").html()) + 0;
				  $("#spanTimeCarreraZ3_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ3_4").html()) + 0;
				  $("#spanTimeCarreraZ3_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ3_5").html()) + 0;
				  $("#spanTimeCarreraZ3_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ3_6").html()) + 0;
				  $("#spanTimeCarreraZ3_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ3_7").html()) + 0;
				  $("#spanTimeCarreraZ3_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ3_8").html()) + 0;
				  $("#spanTimeCarreraZ3_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ3_9").html()) + 0;
				  $("#spanTimeCarreraZ3_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ3_10").html()) + 0;
				  $("#spanTimeCarreraZ3_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ3_1").html()) + 0;
				  $("#spanTimeNatacionZ3_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ3_2").html()) + 0;
				  $("#spanTimeNatacionZ3_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3_3").html()) + 0;
				  $("#spanTimeNatacionZ3_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ3_4").html()) + 0;
				  $("#spanTimeNatacionZ3_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ3_5").html()) + 0;
				  $("#spanTimeNatacionZ3_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ3_6").html()) + 0;
				  $("#spanTimeNatacionZ3_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ3_7").html()) + 0;
				  $("#spanTimeNatacionZ3_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ3_8").html()) + 0;
				  $("#spanTimeNatacionZ3_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ3_9").html()) + 0;
				  $("#spanTimeNatacionZ3_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ3_10").html()) + 0;
				  $("#spanTimeNatacionZ3_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ3_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ3_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ3_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ3_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ3_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ3_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ3_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ3_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ3_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ3_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 3.1075;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ3_1").html()) + 3.1075;
				  $("#spanDistanciaCarreraZ3_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ3_2").html()) + 0;
				  $("#spanDistanciaCarreraZ3_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3_3").html()) + 0;
				  $("#spanDistanciaCarreraZ3_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ3_4").html()) + 0;
				  $("#spanDistanciaCarreraZ3_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ3_5").html()) + 0;
				  $("#spanDistanciaCarreraZ3_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ3_6").html()) + 0;
				  $("#spanDistanciaCarreraZ3_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ3_7").html()) + 0;
				  $("#spanDistanciaCarreraZ3_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ3_8").html()) + 0;
				  $("#spanDistanciaCarreraZ3_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ3_9").html()) + 0;
				  $("#spanDistanciaCarreraZ3_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ3_10").html()) + 0;
				  $("#spanDistanciaCarreraZ3_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ3_1").html()) + 0;
				  $("#spanDistanciaNatacionZ3_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ3_2").html()) + 0;
				  $("#spanDistanciaNatacionZ3_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3_3").html()) + 0;
				  $("#spanDistanciaNatacionZ3_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ3_4").html()) + 0;
				  $("#spanDistanciaNatacionZ3_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ3_5").html()) + 0;
				  $("#spanDistanciaNatacionZ3_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ3_6").html()) + 0;
				  $("#spanDistanciaNatacionZ3_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ3_7").html()) + 0;
				  $("#spanDistanciaNatacionZ3_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ3_8").html()) + 0;
				  $("#spanDistanciaNatacionZ3_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ3_9").html()) + 0;
				  $("#spanDistanciaNatacionZ3_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ3_10").html()) + 0;
				  $("#spanDistanciaNatacionZ3_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 0;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo3").html()) + 0;
				  $("#spanTotalSesionesCiclismo3").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion3").html()) + 0;
				  $("#spanTotalSesionesNatacion3").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera3").html()) + 0;
				  $("#spanTotalSesionesCarrera3").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo3").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo3").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (15/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo3").html()) + (0/60);
				  $("#spanTotalHorasCiclismo3").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion3").html()) + (0/60);
				  $("#spanTotalHorasNatacion3").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera3").html()) + (15/60);
				  $("#spanTotalHorasCarrera3").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo3").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo3").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (431.6);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo3").html()) + (0);
				  $("#spanTotalCaloriasCiclismo3").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion3").html()) + (0);
				  $("#spanTotalCaloriasNatacion3").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera3").html()) + (0);
				  $("#spanTotalCaloriasCarrera3").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo3").html()) + (431.6);
				  $("#spanTotalCaloriasEsfuerzo3").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ3_1").html()) + 0;
				  $("#spanTimeCiclismoZ3_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ3_2").html()) + 0;
				  $("#spanTimeCiclismoZ3_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3_3").html()) + 0;
				  $("#spanTimeCiclismoZ3_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ3_4").html()) + 0;
				  $("#spanTimeCiclismoZ3_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ3_5").html()) + 0;
				  $("#spanTimeCiclismoZ3_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ3_6").html()) + 0;
				  $("#spanTimeCiclismoZ3_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ3_7").html()) + 0;
				  $("#spanTimeCiclismoZ3_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ3_8").html()) + 0;
				  $("#spanTimeCiclismoZ3_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ3_9").html()) + 0;
				  $("#spanTimeCiclismoZ3_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ3_10").html()) + 0;
				  $("#spanTimeCiclismoZ3_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 20;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 30;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ3_1").html()) + 20;
				  $("#spanTimeCarreraZ3_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ3_2").html()) + 0;
				  $("#spanTimeCarreraZ3_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3_3").html()) + 0;
				  $("#spanTimeCarreraZ3_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ3_4").html()) + 30;
				  $("#spanTimeCarreraZ3_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ3_5").html()) + 0;
				  $("#spanTimeCarreraZ3_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ3_6").html()) + 0;
				  $("#spanTimeCarreraZ3_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ3_7").html()) + 0;
				  $("#spanTimeCarreraZ3_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ3_8").html()) + 0;
				  $("#spanTimeCarreraZ3_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ3_9").html()) + 0;
				  $("#spanTimeCarreraZ3_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ3_10").html()) + 0;
				  $("#spanTimeCarreraZ3_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ3_1").html()) + 0;
				  $("#spanTimeNatacionZ3_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ3_2").html()) + 0;
				  $("#spanTimeNatacionZ3_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3_3").html()) + 0;
				  $("#spanTimeNatacionZ3_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ3_4").html()) + 0;
				  $("#spanTimeNatacionZ3_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ3_5").html()) + 0;
				  $("#spanTimeNatacionZ3_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ3_6").html()) + 0;
				  $("#spanTimeNatacionZ3_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ3_7").html()) + 0;
				  $("#spanTimeNatacionZ3_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ3_8").html()) + 0;
				  $("#spanTimeNatacionZ3_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ3_9").html()) + 0;
				  $("#spanTimeNatacionZ3_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ3_10").html()) + 0;
				  $("#spanTimeNatacionZ3_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ3_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ3_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ3_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ3_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ3_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ3_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ3_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ3_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ3_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ3_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 8.2;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ3_1").html()) + 4.1433333333333;
				  $("#spanDistanciaCarreraZ3_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ3_2").html()) + 0;
				  $("#spanDistanciaCarreraZ3_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3_3").html()) + 0;
				  $("#spanDistanciaCarreraZ3_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ3_4").html()) + 8.2;
				  $("#spanDistanciaCarreraZ3_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ3_5").html()) + 0;
				  $("#spanDistanciaCarreraZ3_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ3_6").html()) + 0;
				  $("#spanDistanciaCarreraZ3_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ3_7").html()) + 0;
				  $("#spanDistanciaCarreraZ3_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ3_8").html()) + 0;
				  $("#spanDistanciaCarreraZ3_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ3_9").html()) + 0;
				  $("#spanDistanciaCarreraZ3_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ3_10").html()) + 0;
				  $("#spanDistanciaCarreraZ3_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ3_1").html()) + 0;
				  $("#spanDistanciaNatacionZ3_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ3_2").html()) + 0;
				  $("#spanDistanciaNatacionZ3_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3_3").html()) + 0;
				  $("#spanDistanciaNatacionZ3_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ3_4").html()) + 0;
				  $("#spanDistanciaNatacionZ3_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ3_5").html()) + 0;
				  $("#spanDistanciaNatacionZ3_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ3_6").html()) + 0;
				  $("#spanDistanciaNatacionZ3_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ3_7").html()) + 0;
				  $("#spanDistanciaNatacionZ3_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ3_8").html()) + 0;
				  $("#spanDistanciaNatacionZ3_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ3_9").html()) + 0;
				  $("#spanDistanciaNatacionZ3_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ3_10").html()) + 0;
				  $("#spanDistanciaNatacionZ3_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo3").html()) + 0;
				  $("#spanTotalSesionesCiclismo3").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion3").html()) + 0;
				  $("#spanTotalSesionesNatacion3").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera3").html()) + 1;
				  $("#spanTotalSesionesCarrera3").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo3").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo3").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (50/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo3").html()) + (0/60);
				  $("#spanTotalHorasCiclismo3").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion3").html()) + (0/60);
				  $("#spanTotalHorasNatacion3").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera3").html()) + (50/60);
				  $("#spanTotalHorasCarrera3").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo3").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo3").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (142.14);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo3").html()) + (0);
				  $("#spanTotalCaloriasCiclismo3").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion3").html()) + (0);
				  $("#spanTotalCaloriasNatacion3").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera3").html()) + (0);
				  $("#spanTotalCaloriasCarrera3").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo3").html()) + (142.14);
				  $("#spanTotalCaloriasEsfuerzo3").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ3_1").html()) + 0;
				  $("#spanTimeCiclismoZ3_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ3_2").html()) + 0;
				  $("#spanTimeCiclismoZ3_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3_3").html()) + 0;
				  $("#spanTimeCiclismoZ3_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ3_4").html()) + 0;
				  $("#spanTimeCiclismoZ3_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ3_5").html()) + 0;
				  $("#spanTimeCiclismoZ3_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ3_6").html()) + 0;
				  $("#spanTimeCiclismoZ3_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ3_7").html()) + 0;
				  $("#spanTimeCiclismoZ3_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ3_8").html()) + 0;
				  $("#spanTimeCiclismoZ3_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ3_9").html()) + 0;
				  $("#spanTimeCiclismoZ3_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ3_10").html()) + 0;
				  $("#spanTimeCiclismoZ3_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 40;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ3_1").html()) + 40;
				  $("#spanTimeCarreraZ3_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ3_2").html()) + 0;
				  $("#spanTimeCarreraZ3_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3_3").html()) + 0;
				  $("#spanTimeCarreraZ3_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ3_4").html()) + 0;
				  $("#spanTimeCarreraZ3_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ3_5").html()) + 0;
				  $("#spanTimeCarreraZ3_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ3_6").html()) + 0;
				  $("#spanTimeCarreraZ3_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ3_7").html()) + 0;
				  $("#spanTimeCarreraZ3_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ3_8").html()) + 0;
				  $("#spanTimeCarreraZ3_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ3_9").html()) + 0;
				  $("#spanTimeCarreraZ3_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ3_10").html()) + 0;
				  $("#spanTimeCarreraZ3_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ3_1").html()) + 0;
				  $("#spanTimeNatacionZ3_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ3_2").html()) + 0;
				  $("#spanTimeNatacionZ3_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3_3").html()) + 0;
				  $("#spanTimeNatacionZ3_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ3_4").html()) + 0;
				  $("#spanTimeNatacionZ3_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ3_5").html()) + 0;
				  $("#spanTimeNatacionZ3_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ3_6").html()) + 0;
				  $("#spanTimeNatacionZ3_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ3_7").html()) + 0;
				  $("#spanTimeNatacionZ3_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ3_8").html()) + 0;
				  $("#spanTimeNatacionZ3_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ3_9").html()) + 0;
				  $("#spanTimeNatacionZ3_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ3_10").html()) + 0;
				  $("#spanTimeNatacionZ3_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ3_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ3_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ3_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ3_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ3_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ3_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ3_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ3_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ3_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ3_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ3_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 8.2866666666667;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ3_1").html()) + 8.2866666666667;
				  $("#spanDistanciaCarreraZ3_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ3_2").html()) + 0;
				  $("#spanDistanciaCarreraZ3_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3_3").html()) + 0;
				  $("#spanDistanciaCarreraZ3_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ3_4").html()) + 0;
				  $("#spanDistanciaCarreraZ3_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ3_5").html()) + 0;
				  $("#spanDistanciaCarreraZ3_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ3_6").html()) + 0;
				  $("#spanDistanciaCarreraZ3_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ3_7").html()) + 0;
				  $("#spanDistanciaCarreraZ3_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ3_8").html()) + 0;
				  $("#spanDistanciaCarreraZ3_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ3_9").html()) + 0;
				  $("#spanDistanciaCarreraZ3_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ3_10").html()) + 0;
				  $("#spanDistanciaCarreraZ3_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ3_1").html()) + 0;
				  $("#spanDistanciaNatacionZ3_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ3_2").html()) + 0;
				  $("#spanDistanciaNatacionZ3_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3_3").html()) + 0;
				  $("#spanDistanciaNatacionZ3_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ3_4").html()) + 0;
				  $("#spanDistanciaNatacionZ3_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ3_5").html()) + 0;
				  $("#spanDistanciaNatacionZ3_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ3_6").html()) + 0;
				  $("#spanDistanciaNatacionZ3_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ3_7").html()) + 0;
				  $("#spanDistanciaNatacionZ3_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ3_8").html()) + 0;
				  $("#spanDistanciaNatacionZ3_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ3_9").html()) + 0;
				  $("#spanDistanciaNatacionZ3_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ3_10").html()) + 0;
				  $("#spanDistanciaNatacionZ3_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo3").html()) + 0;
				  $("#spanTotalSesionesCiclismo3").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion3").html()) + 0;
				  $("#spanTotalSesionesNatacion3").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera3").html()) + 1;
				  $("#spanTotalSesionesCarrera3").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo3").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo3").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (40/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo3").html()) + (0/60);
				  $("#spanTotalHorasCiclismo3").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion3").html()) + (0/60);
				  $("#spanTotalHorasNatacion3").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera3").html()) + (40/60);
				  $("#spanTotalHorasCarrera3").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo3").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo3").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (154.74);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo3").html()) + (0);
				  $("#spanTotalCaloriasCiclismo3").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion3").html()) + (0);
				  $("#spanTotalCaloriasNatacion3").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera3").html()) + (0);
				  $("#spanTotalCaloriasCarrera3").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo3").html()) + (154.74);
				  $("#spanTotalCaloriasEsfuerzo3").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ4_1").html()) + 0;
				  $("#spanTimeCiclismoZ4_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ4_2").html()) + 0;
				  $("#spanTimeCiclismoZ4_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ4_3").html()) + 0;
				  $("#spanTimeCiclismoZ4_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4_4").html()) + 0;
				  $("#spanTimeCiclismoZ4_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ4_5").html()) + 0;
				  $("#spanTimeCiclismoZ4_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ4_6").html()) + 0;
				  $("#spanTimeCiclismoZ4_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ4_7").html()) + 0;
				  $("#spanTimeCiclismoZ4_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ4_8").html()) + 0;
				  $("#spanTimeCiclismoZ4_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ4_9").html()) + 0;
				  $("#spanTimeCiclismoZ4_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ4_10").html()) + 0;
				  $("#spanTimeCiclismoZ4_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 15;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 3.6585365853659;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 3.4642032332564;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ4_1").html()) + 15;
				  $("#spanTimeCarreraZ4_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ4_2").html()) + 0;
				  $("#spanTimeCarreraZ4_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ4_3").html()) + 0;
				  $("#spanTimeCarreraZ4_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4_4").html()) + 3.6585365853659;
				  $("#spanTimeCarreraZ4_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ4_5").html()) + 3.4642032332564;
				  $("#spanTimeCarreraZ4_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ4_6").html()) + 0;
				  $("#spanTimeCarreraZ4_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ4_7").html()) + 0;
				  $("#spanTimeCarreraZ4_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ4_8").html()) + 0;
				  $("#spanTimeCarreraZ4_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ4_9").html()) + 0;
				  $("#spanTimeCarreraZ4_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ4_10").html()) + 0;
				  $("#spanTimeCarreraZ4_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ4_1").html()) + 0;
				  $("#spanTimeNatacionZ4_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ4_2").html()) + 0;
				  $("#spanTimeNatacionZ4_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ4_3").html()) + 0;
				  $("#spanTimeNatacionZ4_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4_4").html()) + 0;
				  $("#spanTimeNatacionZ4_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ4_5").html()) + 0;
				  $("#spanTimeNatacionZ4_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ4_6").html()) + 0;
				  $("#spanTimeNatacionZ4_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ4_7").html()) + 0;
				  $("#spanTimeNatacionZ4_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ4_8").html()) + 0;
				  $("#spanTimeNatacionZ4_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ4_9").html()) + 0;
				  $("#spanTimeNatacionZ4_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ4_10").html()) + 0;
				  $("#spanTimeNatacionZ4_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ4_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ4_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ4_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ4_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ4_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ4_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ4_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ4_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ4_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ4_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 3.1075;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 1;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 5;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ4_1").html()) + 3.1075;
				  $("#spanDistanciaCarreraZ4_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ4_2").html()) + 0;
				  $("#spanDistanciaCarreraZ4_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ4_3").html()) + 0;
				  $("#spanDistanciaCarreraZ4_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4_4").html()) + 1;
				  $("#spanDistanciaCarreraZ4_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ4_5").html()) + 5;
				  $("#spanDistanciaCarreraZ4_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ4_6").html()) + 0;
				  $("#spanDistanciaCarreraZ4_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ4_7").html()) + 0;
				  $("#spanDistanciaCarreraZ4_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ4_8").html()) + 0;
				  $("#spanDistanciaCarreraZ4_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ4_9").html()) + 0;
				  $("#spanDistanciaCarreraZ4_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ4_10").html()) + 0;
				  $("#spanDistanciaCarreraZ4_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ4_1").html()) + 0;
				  $("#spanDistanciaNatacionZ4_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ4_2").html()) + 0;
				  $("#spanDistanciaNatacionZ4_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ4_3").html()) + 0;
				  $("#spanDistanciaNatacionZ4_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4_4").html()) + 0;
				  $("#spanDistanciaNatacionZ4_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ4_5").html()) + 0;
				  $("#spanDistanciaNatacionZ4_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ4_6").html()) + 0;
				  $("#spanDistanciaNatacionZ4_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ4_7").html()) + 0;
				  $("#spanDistanciaNatacionZ4_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ4_8").html()) + 0;
				  $("#spanDistanciaNatacionZ4_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ4_9").html()) + 0;
				  $("#spanDistanciaNatacionZ4_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ4_10").html()) + 0;
				  $("#spanDistanciaNatacionZ4_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo4").html()) + 0;
				  $("#spanTotalSesionesCiclismo4").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion4").html()) + 0;
				  $("#spanTotalSesionesNatacion4").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera4").html()) + 1;
				  $("#spanTotalSesionesCarrera4").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo4").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo4").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (22.122739818622/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo4").html()) + (0/60);
				  $("#spanTotalHorasCiclismo4").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion4").html()) + (0/60);
				  $("#spanTotalHorasNatacion4").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera4").html()) + (22.122739818622/60);
				  $("#spanTotalHorasCarrera4").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo4").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo4").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (154.74);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo4").html()) + (0);
				  $("#spanTotalCaloriasCiclismo4").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion4").html()) + (0);
				  $("#spanTotalCaloriasNatacion4").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera4").html()) + (0);
				  $("#spanTotalCaloriasCarrera4").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo4").html()) + (154.74);
				  $("#spanTotalCaloriasEsfuerzo4").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ4_1").html()) + 0;
				  $("#spanTimeCiclismoZ4_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ4_2").html()) + 0;
				  $("#spanTimeCiclismoZ4_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ4_3").html()) + 0;
				  $("#spanTimeCiclismoZ4_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4_4").html()) + 0;
				  $("#spanTimeCiclismoZ4_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ4_5").html()) + 0;
				  $("#spanTimeCiclismoZ4_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ4_6").html()) + 0;
				  $("#spanTimeCiclismoZ4_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ4_7").html()) + 0;
				  $("#spanTimeCiclismoZ4_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ4_8").html()) + 0;
				  $("#spanTimeCiclismoZ4_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ4_9").html()) + 0;
				  $("#spanTimeCiclismoZ4_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ4_10").html()) + 0;
				  $("#spanTimeCiclismoZ4_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 15;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ4_1").html()) + 15;
				  $("#spanTimeCarreraZ4_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ4_2").html()) + 0;
				  $("#spanTimeCarreraZ4_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ4_3").html()) + 0;
				  $("#spanTimeCarreraZ4_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4_4").html()) + 0;
				  $("#spanTimeCarreraZ4_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ4_5").html()) + 0;
				  $("#spanTimeCarreraZ4_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ4_6").html()) + 0;
				  $("#spanTimeCarreraZ4_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ4_7").html()) + 0;
				  $("#spanTimeCarreraZ4_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ4_8").html()) + 0;
				  $("#spanTimeCarreraZ4_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ4_9").html()) + 0;
				  $("#spanTimeCarreraZ4_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ4_10").html()) + 0;
				  $("#spanTimeCarreraZ4_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ4_1").html()) + 0;
				  $("#spanTimeNatacionZ4_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ4_2").html()) + 0;
				  $("#spanTimeNatacionZ4_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ4_3").html()) + 0;
				  $("#spanTimeNatacionZ4_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4_4").html()) + 0;
				  $("#spanTimeNatacionZ4_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ4_5").html()) + 0;
				  $("#spanTimeNatacionZ4_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ4_6").html()) + 0;
				  $("#spanTimeNatacionZ4_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ4_7").html()) + 0;
				  $("#spanTimeNatacionZ4_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ4_8").html()) + 0;
				  $("#spanTimeNatacionZ4_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ4_9").html()) + 0;
				  $("#spanTimeNatacionZ4_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ4_10").html()) + 0;
				  $("#spanTimeNatacionZ4_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ4_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ4_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ4_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ4_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ4_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ4_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ4_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ4_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ4_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ4_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 3.1075;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ4_1").html()) + 3.1075;
				  $("#spanDistanciaCarreraZ4_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ4_2").html()) + 0;
				  $("#spanDistanciaCarreraZ4_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ4_3").html()) + 0;
				  $("#spanDistanciaCarreraZ4_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4_4").html()) + 0;
				  $("#spanDistanciaCarreraZ4_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ4_5").html()) + 0;
				  $("#spanDistanciaCarreraZ4_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ4_6").html()) + 0;
				  $("#spanDistanciaCarreraZ4_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ4_7").html()) + 0;
				  $("#spanDistanciaCarreraZ4_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ4_8").html()) + 0;
				  $("#spanDistanciaCarreraZ4_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ4_9").html()) + 0;
				  $("#spanDistanciaCarreraZ4_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ4_10").html()) + 0;
				  $("#spanDistanciaCarreraZ4_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ4_1").html()) + 0;
				  $("#spanDistanciaNatacionZ4_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ4_2").html()) + 0;
				  $("#spanDistanciaNatacionZ4_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ4_3").html()) + 0;
				  $("#spanDistanciaNatacionZ4_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4_4").html()) + 0;
				  $("#spanDistanciaNatacionZ4_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ4_5").html()) + 0;
				  $("#spanDistanciaNatacionZ4_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ4_6").html()) + 0;
				  $("#spanDistanciaNatacionZ4_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ4_7").html()) + 0;
				  $("#spanDistanciaNatacionZ4_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ4_8").html()) + 0;
				  $("#spanDistanciaNatacionZ4_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ4_9").html()) + 0;
				  $("#spanDistanciaNatacionZ4_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ4_10").html()) + 0;
				  $("#spanDistanciaNatacionZ4_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 0;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo4").html()) + 0;
				  $("#spanTotalSesionesCiclismo4").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion4").html()) + 0;
				  $("#spanTotalSesionesNatacion4").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera4").html()) + 0;
				  $("#spanTotalSesionesCarrera4").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo4").html()) + 1;
				  $("#spanTotalSesionesEsfuerzo4").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (15/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo4").html()) + (0/60);
				  $("#spanTotalHorasCiclismo4").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion4").html()) + (0/60);
				  $("#spanTotalHorasNatacion4").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera4").html()) + (15/60);
				  $("#spanTotalHorasCarrera4").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo4").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo4").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (320.6);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo4").html()) + (0);
				  $("#spanTotalCaloriasCiclismo4").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion4").html()) + (0);
				  $("#spanTotalCaloriasNatacion4").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera4").html()) + (0);
				  $("#spanTotalCaloriasCarrera4").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo4").html()) + (320.6);
				  $("#spanTotalCaloriasEsfuerzo4").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ4_1").html()) + 0;
				  $("#spanTimeCiclismoZ4_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ4_2").html()) + 0;
				  $("#spanTimeCiclismoZ4_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ4_3").html()) + 0;
				  $("#spanTimeCiclismoZ4_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4_4").html()) + 0;
				  $("#spanTimeCiclismoZ4_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ4_5").html()) + 0;
				  $("#spanTimeCiclismoZ4_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ4_6").html()) + 0;
				  $("#spanTimeCiclismoZ4_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ4_7").html()) + 0;
				  $("#spanTimeCiclismoZ4_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ4_8").html()) + 0;
				  $("#spanTimeCiclismoZ4_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ4_9").html()) + 0;
				  $("#spanTimeCiclismoZ4_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ4_10").html()) + 0;
				  $("#spanTimeCiclismoZ4_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 25;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ4_1").html()) + 25;
				  $("#spanTimeCarreraZ4_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ4_2").html()) + 0;
				  $("#spanTimeCarreraZ4_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ4_3").html()) + 0;
				  $("#spanTimeCarreraZ4_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4_4").html()) + 0;
				  $("#spanTimeCarreraZ4_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ4_5").html()) + 0;
				  $("#spanTimeCarreraZ4_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ4_6").html()) + 0;
				  $("#spanTimeCarreraZ4_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ4_7").html()) + 0;
				  $("#spanTimeCarreraZ4_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ4_8").html()) + 0;
				  $("#spanTimeCarreraZ4_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ4_9").html()) + 0;
				  $("#spanTimeCarreraZ4_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ4_10").html()) + 0;
				  $("#spanTimeCarreraZ4_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ4_1").html()) + 0;
				  $("#spanTimeNatacionZ4_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ4_2").html()) + 0;
				  $("#spanTimeNatacionZ4_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ4_3").html()) + 0;
				  $("#spanTimeNatacionZ4_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4_4").html()) + 0;
				  $("#spanTimeNatacionZ4_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ4_5").html()) + 0;
				  $("#spanTimeNatacionZ4_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ4_6").html()) + 0;
				  $("#spanTimeNatacionZ4_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ4_7").html()) + 0;
				  $("#spanTimeNatacionZ4_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ4_8").html()) + 0;
				  $("#spanTimeNatacionZ4_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ4_9").html()) + 0;
				  $("#spanTimeNatacionZ4_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ4_10").html()) + 0;
				  $("#spanTimeNatacionZ4_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ4_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ4_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ4_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ4_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ4_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ4_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ4_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ4_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ4_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ4_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 5.1791666666667;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ4_1").html()) + 5.1791666666667;
				  $("#spanDistanciaCarreraZ4_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ4_2").html()) + 0;
				  $("#spanDistanciaCarreraZ4_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ4_3").html()) + 0;
				  $("#spanDistanciaCarreraZ4_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4_4").html()) + 0;
				  $("#spanDistanciaCarreraZ4_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ4_5").html()) + 0;
				  $("#spanDistanciaCarreraZ4_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ4_6").html()) + 0;
				  $("#spanDistanciaCarreraZ4_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ4_7").html()) + 0;
				  $("#spanDistanciaCarreraZ4_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ4_8").html()) + 0;
				  $("#spanDistanciaCarreraZ4_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ4_9").html()) + 0;
				  $("#spanDistanciaCarreraZ4_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ4_10").html()) + 0;
				  $("#spanDistanciaCarreraZ4_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ4_1").html()) + 0;
				  $("#spanDistanciaNatacionZ4_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ4_2").html()) + 0;
				  $("#spanDistanciaNatacionZ4_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ4_3").html()) + 0;
				  $("#spanDistanciaNatacionZ4_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4_4").html()) + 0;
				  $("#spanDistanciaNatacionZ4_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ4_5").html()) + 0;
				  $("#spanDistanciaNatacionZ4_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ4_6").html()) + 0;
				  $("#spanDistanciaNatacionZ4_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ4_7").html()) + 0;
				  $("#spanDistanciaNatacionZ4_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ4_8").html()) + 0;
				  $("#spanDistanciaNatacionZ4_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ4_9").html()) + 0;
				  $("#spanDistanciaNatacionZ4_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ4_10").html()) + 0;
				  $("#spanDistanciaNatacionZ4_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo4").html()) + 0;
				  $("#spanTotalSesionesCiclismo4").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion4").html()) + 0;
				  $("#spanTotalSesionesNatacion4").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera4").html()) + 1;
				  $("#spanTotalSesionesCarrera4").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo4").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo4").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (25/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo4").html()) + (0/60);
				  $("#spanTotalHorasCiclismo4").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion4").html()) + (0/60);
				  $("#spanTotalHorasNatacion4").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera4").html()) + (25/60);
				  $("#spanTotalHorasCarrera4").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo4").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo4").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (252.14);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo4").html()) + (0);
				  $("#spanTotalCaloriasCiclismo4").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion4").html()) + (0);
				  $("#spanTotalCaloriasNatacion4").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera4").html()) + (0);
				  $("#spanTotalCaloriasCarrera4").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo4").html()) + (252.14);
				  $("#spanTotalCaloriasEsfuerzo4").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ4_1").html()) + 0;
				  $("#spanTimeCiclismoZ4_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ4_2").html()) + 0;
				  $("#spanTimeCiclismoZ4_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ4_3").html()) + 0;
				  $("#spanTimeCiclismoZ4_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4_4").html()) + 0;
				  $("#spanTimeCiclismoZ4_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ4_5").html()) + 0;
				  $("#spanTimeCiclismoZ4_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ4_6").html()) + 0;
				  $("#spanTimeCiclismoZ4_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ4_7").html()) + 0;
				  $("#spanTimeCiclismoZ4_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ4_8").html()) + 0;
				  $("#spanTimeCiclismoZ4_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ4_9").html()) + 0;
				  $("#spanTimeCiclismoZ4_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ4_10").html()) + 0;
				  $("#spanTimeCiclismoZ4_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 15;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 0;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ4_1").html()) + 15;
				  $("#spanTimeCarreraZ4_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ4_2").html()) + 0;
				  $("#spanTimeCarreraZ4_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ4_3").html()) + 0;
				  $("#spanTimeCarreraZ4_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4_4").html()) + 0;
				  $("#spanTimeCarreraZ4_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ4_5").html()) + 0;
				  $("#spanTimeCarreraZ4_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ4_6").html()) + 0;
				  $("#spanTimeCarreraZ4_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ4_7").html()) + 0;
				  $("#spanTimeCarreraZ4_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ4_8").html()) + 0;
				  $("#spanTimeCarreraZ4_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ4_9").html()) + 0;
				  $("#spanTimeCarreraZ4_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ4_10").html()) + 0;
				  $("#spanTimeCarreraZ4_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ4_1").html()) + 0;
				  $("#spanTimeNatacionZ4_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ4_2").html()) + 0;
				  $("#spanTimeNatacionZ4_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ4_3").html()) + 0;
				  $("#spanTimeNatacionZ4_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4_4").html()) + 0;
				  $("#spanTimeNatacionZ4_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ4_5").html()) + 0;
				  $("#spanTimeNatacionZ4_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ4_6").html()) + 0;
				  $("#spanTimeNatacionZ4_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ4_7").html()) + 0;
				  $("#spanTimeNatacionZ4_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ4_8").html()) + 0;
				  $("#spanTimeNatacionZ4_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ4_9").html()) + 0;
				  $("#spanTimeNatacionZ4_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ4_10").html()) + 0;
				  $("#spanTimeNatacionZ4_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ4_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ4_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ4_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ4_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ4_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ4_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ4_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ4_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ4_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ4_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 3.1075;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 0;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ4_1").html()) + 3.1075;
				  $("#spanDistanciaCarreraZ4_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ4_2").html()) + 0;
				  $("#spanDistanciaCarreraZ4_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ4_3").html()) + 0;
				  $("#spanDistanciaCarreraZ4_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4_4").html()) + 0;
				  $("#spanDistanciaCarreraZ4_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ4_5").html()) + 0;
				  $("#spanDistanciaCarreraZ4_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ4_6").html()) + 0;
				  $("#spanDistanciaCarreraZ4_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ4_7").html()) + 0;
				  $("#spanDistanciaCarreraZ4_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ4_8").html()) + 0;
				  $("#spanDistanciaCarreraZ4_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ4_9").html()) + 0;
				  $("#spanDistanciaCarreraZ4_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ4_10").html()) + 0;
				  $("#spanDistanciaCarreraZ4_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ4_1").html()) + 0;
				  $("#spanDistanciaNatacionZ4_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ4_2").html()) + 0;
				  $("#spanDistanciaNatacionZ4_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ4_3").html()) + 0;
				  $("#spanDistanciaNatacionZ4_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4_4").html()) + 0;
				  $("#spanDistanciaNatacionZ4_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ4_5").html()) + 0;
				  $("#spanDistanciaNatacionZ4_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ4_6").html()) + 0;
				  $("#spanDistanciaNatacionZ4_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ4_7").html()) + 0;
				  $("#spanDistanciaNatacionZ4_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ4_8").html()) + 0;
				  $("#spanDistanciaNatacionZ4_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ4_9").html()) + 0;
				  $("#spanDistanciaNatacionZ4_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ4_10").html()) + 0;
				  $("#spanDistanciaNatacionZ4_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo4").html()) + 0;
				  $("#spanTotalSesionesCiclismo4").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion4").html()) + 0;
				  $("#spanTotalSesionesNatacion4").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera4").html()) + 1;
				  $("#spanTotalSesionesCarrera4").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo4").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo4").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (15/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo4").html()) + (0/60);
				  $("#spanTotalHorasCiclismo4").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion4").html()) + (0/60);
				  $("#spanTotalHorasNatacion4").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera4").html()) + (15/60);
				  $("#spanTotalHorasCarrera4").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo4").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo4").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (252.14);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo4").html()) + (0);
				  $("#spanTotalCaloriasCiclismo4").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion4").html()) + (0);
				  $("#spanTotalCaloriasNatacion4").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera4").html()) + (0);
				  $("#spanTotalCaloriasCarrera4").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo4").html()) + (252.14);
				  $("#spanTotalCaloriasEsfuerzo4").html(Math.round(sumSesionE));

//ciclismo TIME
				  valorZ1B= Number($("#spanTimeCiclismoZ1").html()) + 0;
				  $("#spanTimeCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ1B= Number($("#spanTimeCiclismoZ4_1").html()) + 0;
				  $("#spanTimeCiclismoZ4_1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanTimeCiclismoZ2").html()) + 0;
				  $("#spanTimeCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ2B= Number($("#spanTimeCiclismoZ4_2").html()) + 0;
				  $("#spanTimeCiclismoZ4_2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanTimeCiclismoZ3").html()) + 0;
				  $("#spanTimeCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ3B= Number($("#spanTimeCiclismoZ4_3").html()) + 0;
				  $("#spanTimeCiclismoZ4_3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4").html()) + 0;
				  $("#spanTimeCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ4B= Number($("#spanTimeCiclismoZ4_4").html()) + 0;
				  $("#spanTimeCiclismoZ4_4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanTimeCiclismoZ5").html()) + 0;
				  $("#spanTimeCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ5B= Number($("#spanTimeCiclismoZ4_5").html()) + 0;
				  $("#spanTimeCiclismoZ4_5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanTimeCiclismoZ6").html()) + 0;
				  $("#spanTimeCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ6B= Number($("#spanTimeCiclismoZ4_6").html()) + 0;
				  $("#spanTimeCiclismoZ4_6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanTimeCiclismoZ7").html()) + 0;
				  $("#spanTimeCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ7B= Number($("#spanTimeCiclismoZ4_7").html()) + 0;
				  $("#spanTimeCiclismoZ4_7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanTimeCiclismoZ8").html()) + 0;
				  $("#spanTimeCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ8B= Number($("#spanTimeCiclismoZ4_8").html()) + 0;
				  $("#spanTimeCiclismoZ4_8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanTimeCiclismoZ9").html()) + 0;
				  $("#spanTimeCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ9B= Number($("#spanTimeCiclismoZ4_9").html()) + 0;
				  $("#spanTimeCiclismoZ4_9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanTimeCiclismoZ10").html()) + 0;
				  $("#spanTimeCiclismoZ10").html(Math.round(valorZ10B));
				  valorZ10B= Number($("#spanTimeCiclismoZ4_10").html()) + 0;
				  $("#spanTimeCiclismoZ4_10").html(Math.round(valorZ10B));

				  //carrera TIME
				  valorZ1C= Number($("#spanTimeCarreraZ1").html()) + 0;
				  $("#spanTimeCarreraZ1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ2").html()) + 0;
				  $("#spanTimeCarreraZ2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ3").html()) + 0;
				  $("#spanTimeCarreraZ3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4").html()) + 18.292682926829;
				  $("#spanTimeCarreraZ4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ5").html()) + 0;
				  $("#spanTimeCarreraZ5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ6").html()) + 0;
				  $("#spanTimeCarreraZ6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ7").html()) + 0;
				  $("#spanTimeCarreraZ7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ8").html()) + 0;
				  $("#spanTimeCarreraZ8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ9").html()) + 0;
				  $("#spanTimeCarreraZ9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ10").html()) + 0;
				  $("#spanTimeCarreraZ10").html(Math.round(valorZ10C));
				  
				  valorZ1C= Number($("#spanTimeCarreraZ4_1").html()) + 0;
				  $("#spanTimeCarreraZ4_1").html(Math.round(valorZ1C));
				  valorZ2C= Number($("#spanTimeCarreraZ4_2").html()) + 0;
				  $("#spanTimeCarreraZ4_2").html(Math.round(valorZ2C));
				  valorZ3C= Number($("#spanTimeCarreraZ4_3").html()) + 0;
				  $("#spanTimeCarreraZ4_3").html(Math.round(valorZ3C));
				  valorZ4C= Number($("#spanTimeCarreraZ4_4").html()) + 18.292682926829;
				  $("#spanTimeCarreraZ4_4").html(Math.round(valorZ4C));
				  valorZ5C= Number($("#spanTimeCarreraZ4_5").html()) + 0;
				  $("#spanTimeCarreraZ4_5").html(Math.round(valorZ5C));
				  valorZ6C= Number($("#spanTimeCarreraZ4_6").html()) + 0;
				  $("#spanTimeCarreraZ4_6").html(Math.round(valorZ6C));
				  valorZ7C= Number($("#spanTimeCarreraZ4_7").html()) + 0;
				  $("#spanTimeCarreraZ4_7").html(Math.round(valorZ7C));
				  valorZ8C= Number($("#spanTimeCarreraZ4_8").html()) + 0;
				  $("#spanTimeCarreraZ4_8").html(Math.round(valorZ8C));
				  valorZ9C= Number($("#spanTimeCarreraZ4_9").html()) + 0;
				  $("#spanTimeCarreraZ4_9").html(Math.round(valorZ9C));
				  valorZ10C= Number($("#spanTimeCarreraZ4_10").html()) + 0;
				  $("#spanTimeCarreraZ4_10").html(Math.round(valorZ10C));

				  //natacion TIME
				  valorZ1N= Number($("#spanTimeNatacionZ1").html()) + 0;
				  $("#spanTimeNatacionZ1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ2").html()) + 0;
				  $("#spanTimeNatacionZ2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ3").html()) + 0;
				  $("#spanTimeNatacionZ3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4").html()) + 0;
				  $("#spanTimeNatacionZ4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ5").html()) + 0;
				  $("#spanTimeNatacionZ5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ6").html()) + 0;
				  $("#spanTimeNatacionZ6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ7").html()) + 0;
				  $("#spanTimeNatacionZ7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ8").html()) + 0;
				  $("#spanTimeNatacionZ8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ9").html()) + 0;
				  $("#spanTimeNatacionZ9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ10").html()) + 0;
				  $("#spanTimeNatacionZ10").html(Math.round(valorZ10N));
				  
				  valorZ1N= Number($("#spanTimeNatacionZ4_1").html()) + 0;
				  $("#spanTimeNatacionZ4_1").html(Math.round(valorZ1N));
				  valorZ2N= Number($("#spanTimeNatacionZ4_2").html()) + 0;
				  $("#spanTimeNatacionZ4_2").html(Math.round(valorZ2N));
				  valorZ3N= Number($("#spanTimeNatacionZ4_3").html()) + 0;
				  $("#spanTimeNatacionZ4_3").html(Math.round(valorZ3N));
				  valorZ4N= Number($("#spanTimeNatacionZ4_4").html()) + 0;
				  $("#spanTimeNatacionZ4_4").html(Math.round(valorZ4N));
				  valorZ5N= Number($("#spanTimeNatacionZ4_5").html()) + 0;
				  $("#spanTimeNatacionZ4_5").html(Math.round(valorZ5N));
				  valorZ6N= Number($("#spanTimeNatacionZ4_6").html()) + 0;
				  $("#spanTimeNatacionZ4_6").html(Math.round(valorZ6N));
				  valorZ7N= Number($("#spanTimeNatacionZ4_7").html()) + 0;
				  $("#spanTimeNatacionZ4_7").html(Math.round(valorZ7N));
				  valorZ8N= Number($("#spanTimeNatacionZ4_8").html()) + 0;
				  $("#spanTimeNatacionZ4_8").html(Math.round(valorZ8N));
				  valorZ9N= Number($("#spanTimeNatacionZ4_9").html()) + 0;
				  $("#spanTimeNatacionZ4_9").html(Math.round(valorZ9N));
				  valorZ10N= Number($("#spanTimeNatacionZ4_10").html()) + 0;
				  $("#spanTimeNatacionZ4_10").html(Math.round(valorZ10N));


				  //ciclismo DISTANCIA
				  valorZ1B= Number($("#spanDistanciaCiclismoZ1").html()) + 0;
				  $("#spanDistanciaCiclismoZ1").html(Math.round(valorZ1B));
				  valorZ2B= Number($("#spanDistanciaCiclismoZ2").html()) + 0;
				  $("#spanDistanciaCiclismoZ2").html(Math.round(valorZ2B));
				  valorZ3B= Number($("#spanDistanciaCiclismoZ3").html()) + 0;
				  $("#spanDistanciaCiclismoZ3").html(Math.round(valorZ3B));
				  valorZ4B= Number($("#spanDistanciaCiclismoZ4").html()) + 0;
				  $("#spanDistanciaCiclismoZ4").html(Math.round(valorZ4B));
				  valorZ5B= Number($("#spanDistanciaCiclismoZ5").html()) + 0;
				  $("#spanDistanciaCiclismoZ5").html(Math.round(valorZ5B));
				  valorZ6B= Number($("#spanDistanciaCiclismoZ6").html()) + 0;
				  $("#spanDistanciaCiclismoZ6").html(Math.round(valorZ6B));
				  valorZ7B= Number($("#spanDistanciaCiclismoZ7").html()) + 0;
				  $("#spanDistanciaCiclismoZ7").html(Math.round(valorZ7B));
				  valorZ8B= Number($("#spanDistanciaCiclismoZ8").html()) + 0;
				  $("#spanDistanciaCiclismoZ8").html(Math.round(valorZ8B));
				  valorZ9B= Number($("#spanDistanciaCiclismoZ9").html()) + 0;
				  $("#spanDistanciaCiclismoZ9").html(Math.round(valorZ9B));
				  valorZ10B= Number($("#spanDistanciaCiclismoZ10").html()) + 0;
				  $("#spanDistanciaCiclismoZ10").html(Math.round(valorZ10B));
				  
			  valorZ1B= Number($("#spanDistanciaCiclismoZ4_1").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_1").html(Math.round(valorZ1B));
			  valorZ2B= Number($("#spanDistanciaCiclismoZ4_2").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_2").html(Math.round(valorZ2B));
			  valorZ3B= Number($("#spanDistanciaCiclismoZ4_3").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_3").html(Math.round(valorZ3B));
			  valorZ4B= Number($("#spanDistanciaCiclismoZ4_4").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_4").html(Math.round(valorZ4B));
			  valorZ5B= Number($("#spanDistanciaCiclismoZ4_5").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_5").html(Math.round(valorZ5B));
			  valorZ6B= Number($("#spanDistanciaCiclismoZ4_6").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_6").html(Math.round(valorZ6B));
			  valorZ7B= Number($("#spanDistanciaCiclismoZ4_7").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_7").html(Math.round(valorZ7B));
			  valorZ8B= Number($("#spanDistanciaCiclismoZ4_8").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_8").html(Math.round(valorZ8B));
			  valorZ9B= Number($("#spanDistanciaCiclismoZ4_9").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_9").html(Math.round(valorZ9B));
			  valorZ10B= Number($("#spanDistanciaCiclismoZ4_10").html()) + 0;
			  $("#spanDistanciaCiclismoZ4_10").html(Math.round(valorZ10B));

				  //carrera DISTANCIA
				  valorZ1C= Number($("#spanDistanciaCarreraZ1").html()) + 0;
				  $("#spanDistanciaCarreraZ1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ2").html()) + 0;
				  $("#spanDistanciaCarreraZ2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ3").html()) + 0;
				  $("#spanDistanciaCarreraZ3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4").html()) + 5;
				  $("#spanDistanciaCarreraZ4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ5").html()) + 0;
				  $("#spanDistanciaCarreraZ5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ6").html()) + 0;
				  $("#spanDistanciaCarreraZ6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ7").html()) + 0;
				  $("#spanDistanciaCarreraZ7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ8").html()) + 0;
				  $("#spanDistanciaCarreraZ8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ9").html()) + 0;
				  $("#spanDistanciaCarreraZ9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ10").html()) + 0;
				  $("#spanDistanciaCarreraZ10").html(parseFloat(valorZ10C).toFixed(1));
				  
				  valorZ1C= Number($("#spanDistanciaCarreraZ4_1").html()) + 0;
				  $("#spanDistanciaCarreraZ4_1").html(parseFloat(valorZ1C).toFixed(1));
				  valorZ2C= Number($("#spanDistanciaCarreraZ4_2").html()) + 0;
				  $("#spanDistanciaCarreraZ4_2").html(parseFloat(valorZ2C).toFixed(1));
				  valorZ3C= Number($("#spanDistanciaCarreraZ4_3").html()) + 0;
				  $("#spanDistanciaCarreraZ4_3").html(parseFloat(valorZ3C).toFixed(1));
				  valorZ4C= Number($("#spanDistanciaCarreraZ4_4").html()) + 5;
				  $("#spanDistanciaCarreraZ4_4").html(parseFloat(valorZ4C).toFixed(1));
				  valorZ5C= Number($("#spanDistanciaCarreraZ4_5").html()) + 0;
				  $("#spanDistanciaCarreraZ4_5").html(parseFloat(valorZ5C).toFixed(1));
				  valorZ6C= Number($("#spanDistanciaCarreraZ4_6").html()) + 0;
				  $("#spanDistanciaCarreraZ4_6").html(parseFloat(valorZ6C).toFixed(1));
				  valorZ7C= Number($("#spanDistanciaCarreraZ4_7").html()) + 0;
				  $("#spanDistanciaCarreraZ4_7").html(parseFloat(valorZ7C).toFixed(1));
				  valorZ8C= Number($("#spanDistanciaCarreraZ4_8").html()) + 0;
				  $("#spanDistanciaCarreraZ4_8").html(parseFloat(valorZ8C).toFixed(1));
				  valorZ9C= Number($("#spanDistanciaCarreraZ4_9").html()) + 0;
				  $("#spanDistanciaCarreraZ4_9").html(parseFloat(valorZ9C).toFixed(1));
				  valorZ10C= Number($("#spanDistanciaCarreraZ4_10").html()) + 0;
				  $("#spanDistanciaCarreraZ4_10").html(parseFloat(valorZ10C).toFixed(1));

				  //natacion DISTANCIA
				  valorZ1N= Number($("#spanDistanciaNatacionZ1").html()) + 0;
				  $("#spanDistanciaNatacionZ1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ2").html()) + 0;
				  $("#spanDistanciaNatacionZ2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ3").html()) + 0;
				  $("#spanDistanciaNatacionZ3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4").html()) + 0;
				  $("#spanDistanciaNatacionZ4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ5").html()) + 0;
				  $("#spanDistanciaNatacionZ5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ6").html()) + 0;
				  $("#spanDistanciaNatacionZ6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ7").html()) + 0;
				  $("#spanDistanciaNatacionZ7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ8").html()) + 0;
				  $("#spanDistanciaNatacionZ8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ9").html()) + 0;
				  $("#spanDistanciaNatacionZ9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ10").html()) + 0;
				  $("#spanDistanciaNatacionZ10").html(parseFloat(valorZ10N).toFixed(1));
				  
				  //natacion DISTANCIA semanal
				  valorZ1N= Number($("#spanDistanciaNatacionZ4_1").html()) + 0;
				  $("#spanDistanciaNatacionZ4_1").html(parseFloat(valorZ1N).toFixed(1));
				  valorZ2N= Number($("#spanDistanciaNatacionZ4_2").html()) + 0;
				  $("#spanDistanciaNatacionZ4_2").html(parseFloat(valorZ2N).toFixed(1));
				  valorZ3N= Number($("#spanDistanciaNatacionZ4_3").html()) + 0;
				  $("#spanDistanciaNatacionZ4_3").html(parseFloat(valorZ3N).toFixed(1));
				  valorZ4N= Number($("#spanDistanciaNatacionZ4_4").html()) + 0;
				  $("#spanDistanciaNatacionZ4_4").html(parseFloat(valorZ4N).toFixed(1));
				  valorZ5N= Number($("#spanDistanciaNatacionZ4_5").html()) + 0;
				  $("#spanDistanciaNatacionZ4_5").html(parseFloat(valorZ5N).toFixed(1));
				  valorZ6N= Number($("#spanDistanciaNatacionZ4_6").html()) + 0;
				  $("#spanDistanciaNatacionZ4_6").html(parseFloat(valorZ6N).toFixed(1));
				  valorZ7N= Number($("#spanDistanciaNatacionZ4_7").html()) + 0;
				  $("#spanDistanciaNatacionZ4_7").html(parseFloat(valorZ7N).toFixed(1));
				  valorZ8N= Number($("#spanDistanciaNatacionZ4_8").html()) + 0;
				  $("#spanDistanciaNatacionZ4_8").html(parseFloat(valorZ8N).toFixed(1));
				  valorZ9N= Number($("#spanDistanciaNatacionZ4_9").html()) + 0;
				  $("#spanDistanciaNatacionZ4_9").html(parseFloat(valorZ9N).toFixed(1));
				  valorZ10N= Number($("#spanDistanciaNatacionZ4_10").html()) + 0;
				  $("#spanDistanciaNatacionZ4_10").html(parseFloat(valorZ10N).toFixed(1));

				  //total sesiones por deporte
				  sumSesionB= Number($("#spanTotalSesionesCiclismo").html()) + 0;
				  $("#spanTotalSesionesCiclismo").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion").html()) + 0;
				  $("#spanTotalSesionesNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera").html()) + 1;
				  $("#spanTotalSesionesCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo").html(Math.round(sumSesionE));
				  tempNumSesionE= sumSesionE;
				  
				  sumSesionB= Number($("#spanTotalSesionesCiclismo4").html()) + 0;
				  $("#spanTotalSesionesCiclismo4").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalSesionesNatacion4").html()) + 0;
				  $("#spanTotalSesionesNatacion4").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalSesionesCarrera4").html()) + 1;
				  $("#spanTotalSesionesCarrera4").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalSesionesEsfuerzo4").html()) + 0;
				  $("#spanTotalSesionesEsfuerzo4").html(Math.round(sumSesionE));
				  tempNumSesionSemE= sumSesionE;
				  
				  //total horas por deporte
				  sumSesionB= Number($("#spanTotalHorasCiclismo").html()) + (0/60);
				  $("#spanTotalHorasCiclismo").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacionN").html()) + (0/60);
				  $("#spanTotalHorasNatacionN").html(parseFloat(sumSesionN).toFixed(1));
				  //console.log(sumSesionN + "--" + $("#spanTotalHorasNatacionN").html() + " .." + 0);
				  sumSesionC= Number($("#spanTotalHorasCarrera").html()) + (18.292682926829/60);
				  $("#spanTotalHorasCarrera").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo").html()) + (0/60);
				  sumSesionE= (tempNumSesionE*30) /60;
				  $("#spanTotalHorasEsfuerzo").html(parseFloat(sumSesionE).toFixed(1));
				  
				  sumSesionB= Number($("#spanTotalHorasCiclismo4").html()) + (0/60);
				  $("#spanTotalHorasCiclismo4").html(parseFloat(sumSesionB).toFixed(1));
				  sumSesionN= Number($("#spanTotalHorasNatacion4").html()) + (0/60);
				  $("#spanTotalHorasNatacion4").html(parseFloat(sumSesionN).toFixed(1));
				  sumSesionC= Number($("#spanTotalHorasCarrera4").html()) + (18.292682926829/60);
				  $("#spanTotalHorasCarrera4").html(parseFloat(sumSesionC).toFixed(1));
				  sumSesionE= Number($("#spanTotalHorasEsfuerzo4").html()) + (0/60);
				  sumSesionE= (tempNumSesionSemE*30) /60;
				  $("#spanTotalHorasEsfuerzo4").html(parseFloat(sumSesionE).toFixed(1));

				  //total Calorias por deporte
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo").html()) + (0);
				  $("#spanTotalCaloriasCiclismo").html(Math.round(sumSesionB));
				  //console.log(sumSesionB + " - " + 0);
				  sumSesionN= Number($("#spanTotalCaloriasNatacion").html()) + (0);
				  $("#spanTotalCaloriasNatacion").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera").html()) + (0);
				  $("#spanTotalCaloriasCarrera").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo").html()) + (154.74);
				  $("#spanTotalCaloriasEsfuerzo").html(Math.round(sumSesionE));
				  console.log();
				  
				  sumSesionB= Number($("#spanTotalCaloriasCiclismo4").html()) + (0);
				  $("#spanTotalCaloriasCiclismo4").html(Math.round(sumSesionB));
				  sumSesionN= Number($("#spanTotalCaloriasNatacion4").html()) + (0);
				  $("#spanTotalCaloriasNatacion4").html(Math.round(sumSesionN));
				  sumSesionC= Number($("#spanTotalCaloriasCarrera4").html()) + (0);
				  $("#spanTotalCaloriasCarrera4").html(Math.round(sumSesionC));
				  sumSesionE= Number($("#spanTotalCaloriasEsfuerzo4").html()) + (154.74);
				  $("#spanTotalCaloriasEsfuerzo4").html(Math.round(sumSesionE));

function getAddSesion(numeroDia, fila){//numeroDia =>  1=lunes, 2=martes, etc etc
		var _profile= $("#mesocyclesmesocycle-profile_id").val();
	//index.php?r=
	var url= 'sessionsssession/create&cp=&orgn=meso&idorgn=30901&cporgn=&dayID=0&numeroDia='+numeroDia+'&fila='+fila+'&pr='+_profile+'&orgnDash=&orgnDash=false';
	//document.location.href= url;
	//
	validaEdit(url);
}

function verTooltipSemana(valor, accion){
	if(accion=="ver"){
		$('#divSemana'+valor).removeClass('ocultoSemana');
		$('#divSemana'+valor).addClass('visibleSemana');
	}
	else{
		$('#divSemana'+valor).removeClass('visibleSemana');
		$('#divSemana'+valor).addClass('ocultoSemana');
	}
}
function verformulasMeso(tipo){
	$("#tblSemanal").hide();
	$("#tblGeneral").hide();
	$("#btnGeneral").removeClass('btn-border');
	$("#btnSemanal").removeClass('btn-border');
	if(tipo=="General"){
		$("#tblGeneral").show();
		$("#btnSemanal").addClass('btn-border');
		$("#divCuadroEstadisticas").show();
	}
	else{		
		$("#tblSemanal").show();
		$("#btnGeneral").addClass('btn-border');
		$("#divCuadroEstadisticas").hide();
	}
}

function getMoverA(divID, valID){
	$('.rbMoverAqui').show();
	$('#divSemanaDia').show();
	$("#hddMoverA").val("moverA");
	$("#hddMoviendoID").val(divID);
	//$('#sesion_select').val(valID);
	$('#sesion_select').empty();
	$('#sesion_select').append('<option value="' + valID + '"> </option>');
	$('#btnPrevisualizar').click();
	$("#add_ss").hide();
	$("#btnMover").show();
	$("#btnPrevisualizar").hide();
	$('#divAtletasParaCopiar').hide();
	$("#btnCopiarAtleta").hide();
	//alert(valID);
}

function getCopiarAtleta(divID, valID){
	$('#divSemanaDia').hide();
	$("#hddMoverA").val("copiarA");
	$("#hddMoviendoID").val(divID);
	//$('#sesion_select').val(valID);
	$('#sesion_select').empty();
	$('#sesion_select').append('<option value="' + valID + '"> </option>');
	$('#btnPrevisualizar').click();
	$("#add_ss").hide();
	$("#btnMover").hide();
	$("#btnPrevisualizar").hide();
	$("#btnCopiarAtleta").show();
	$('#divAtletasParaCopiar').show();
}
	
function addLine2(){
	
}
function readlines(html_intermedia,cont_line){
	let html='';
	$(".week_item").each(function() {	
		console.log('hh-');
		let cont = $(this).data('cont');

		html='<div class="week_item row week' + cont + '" id="week' + cont + '" data-cont="'+cont+'">' +
		$(this).html()+'</div>';
		$('#weeks').append(html);
		if(cont_line===cont){
			$('#weeks').append(html_intermedia);
		}
		
	});
	console.log(html);
	//$('#weeks').empty();
	
}
var is_preview=true;
		
$(document).ready(function() {
		is_variasVeces=false;
	is_variasVeces_count=0;
	tiempoToast=5000;
	esduplicar=false;
	mensajeLanzado=0;
	banderaGuardarAntesDeEditar=0;
	listaDeporte="";
	listaErrores="";
	$('#divAtletasParaCopiar').hide();
	$("#btnCopiarAtleta").hide();
	$('#aVerGrafica').html('');
	
	//alert("");
		
	
	$("#btnMover").click(function() {
        $("#add_ss").click();
    });
	
	$("#search_session").on('keypress', function (e) {
	  var keycode = e.keyCode || e.which;
		if (keycode == 13) {
			$('#search').click();
			return false;
		}
	});
	
	$("#search_progresion").on('keypress', function (e) {
	  var keycode = e.keyCode || e.which;
		if (keycode == 13) {
			$('#searchProgresion').click();
			return false;
		}
	});
	
	$("#search_microciclo").on('keypress', function (e) {
		
	  var keycode = e.keyCode || e.which;
		if (keycode == 13) {
			$('#searchMicrociclo').click();
			return false;
		}
	});
	
	$("#search_mesociclo").on('keypress', function (e) {
	  var keycode = e.keyCode || e.which;
		if (keycode == 13) {
			$('#searchMesociclo').click();
			return false;
		}
	});
	
	$("#txtBuscarAtleta").on('keypress', function (e) {
	  var keycode = e.keyCode || e.which;
		if (keycode == 13) {
			$('#btnBuscarAtleta').click();
			return false;
		}
	});
	
	let totalesEcosSemanalZ1=0; 
	dayID="";
	$('.submitFormBtn').click(function(){
		//$('#labelSubmitFormBtn').html("Espere un momento");
		//alert("Espere un momento.")
		swal("Espere un momento. Cargando...", {
			buttons: false,
			timer: 5000,
		});
		
        var $this = $(this);
        var $next = $this.next();
        if($next.hasClass('submitFormBtnBlock')) {
            $blockBtn = $next;
        } else {
			
			var form = document.getElementById('w0');			
			var dtClear = 0;
			var errores="";
			for(var i=0; i < form.elements.length; i++){
				if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
					dtClear ++;
				 }
			}
			
			var valida=false;
			var sesionesSelecionados= Number($('#hddValida').val());
			if(sesionesSelecionados>0)
				valida=true;
			
			if($("#Mesocyclesmesocycle-name").val()=="") errores += "> Número\n";
			
			
							if($("#sport_select").val()=="") errores += "> Deporte\n";
				if($("#distance_select").val()=="") errores += "> Distancia\n";
			
				if($('#sport_select').val()==4){//Triatlón
					if($("#nlevel_select").val()=="") {errores += "> Nivel Natación\n"; dtClear ++;}
					if($("#blevel_select").val()=="") {errores += "> Nivel Ciclismo\n"; dtClear ++;}
					if($("#clevel_select").val()=="") {errores += "> Nivel Carrera\n"; dtClear ++;}
					if($("#ncontain_select").val()=="") {errores += "> Contenido Natación\n"; dtClear ++;}
					if($("#bcontain_select").val()=="") {errores += "> Contenido Ciclismo\n"; dtClear ++;}
					if($("#ccontain_select").val()=="") {errores += "> Contenido Carrera\n"; dtClear ++;}
				}
				else if($('#sport_select').val()==5){//duatlón
					if($("#blevel_select").val()=="") {errores += "> Nivel Ciclismo\n"; dtClear ++;}
					if($("#clevel_select").val()=="") {errores += "> Nivel Carrera\n"; dtClear ++;}
					if($("#bcontain_select").val()=="") {errores += "> Contenido Ciclismo\n"; dtClear ++;}
					if($("#ccontain_select").val()=="") {errores += "> Contenido Carrera\n"; dtClear ++;}
				}
				else if($('#sport_select').val()==6){//Acuatlón
					if($("#nlevel_select").val()=="") {errores += "> Nivel Natación\n"; dtClear ++;}
					if($("#clevel_select").val()=="") {errores += "> Nivel Carrera\n"; dtClear ++;}
					if($("#ncontain_select").val()=="") {errores += "> Contenido Natación\n"; dtClear ++;}
					if($("#ccontain_select").val()=="") {errores += "> Contenido Carrera\n"; dtClear ++;}
				}
				else{
					if($("#level_select").val()=="") {errores += "> Nivel\n"; dtClear ++;}
					if($("#contain_select").val()=="") {errores += "> Contenido\n"; dtClear ++;}
				}
						
			if(dtClear == 0 && valida==true){
				$blockBtn = $this.clone();
				$blockBtn.attr('type', 'button');
				$blockBtn.html('Espere un momento...'); 
				$blockBtn.addClass('submitFormBtnBlock');
				$blockBtn.removeClass('submitFormBtn');
				$blockBtn.insertAfter($this);
				$blockBtn.attr('disabled', 'disabled');
				
				$this.hide();
		 		$blockBtn.show();
			}
			
			if(dtClear>0){
				if(sesionesSelecionados==0)
					errores = "> Debe seleccionar almenos una sesión\n" + errores;
				swal("Campos requeridos!", "" + errores, {
					icon : "warning",
					buttons: {        			
						confirm: {
							className : 'btn btn-warning'
						}
					},
				});
				return false;
			}
			else{
									let flagExistecodigo= "";
					$.ajax({
						type: 'get',
						async: false,
						url: "/web/index.php?r=mesocyclesmesocycle/getcodigomeso",
						data: {
							"prefijo": "ME",
							"numero": $('#Mesocyclesmesocycle-name').val(),
							"sport_select": $('#sport_select').val(),
							"distance_select": $('#distance_select').val(),
							"level_select": $('#level_select').val(),
							"contain_select": $('#contain_select').val(),
							"bcontain_select": $('#bcontain_select').val(),
							"ccontain_select": $('#ccontain_select').val(),
							"ncontain_select": $('#ncontain_select').val(),
							"blevel_select": $('#blevel_select').val(),
							"clevel_select": $('#clevel_select').val(),
							"nlevel_select": $('#nlevel_select').val(),
							"accion": "actualizar",
							"idUpdate": "30901"
						},
						success: function(data) {
							if(data=="EXISTE"){
								flagExistecodigo= true;
							}
							else{
								flagExistecodigo= false;
							}
							console.log(data);//
							//alert(data);
						},
						error: function(data) {},
					});
					/*let codigo= "ME" + $("#Mesocyclesmesocycle-name").val();
					codigo += $('#sport_select option:selected').html();
					codigo += $('#distance_select option:selected').html();
					codigo += $('#level_select option:selected').html();
					codigo += $('#contain_select option:selected').html();*/

					if(flagExistecodigo){
						swal("El mesociclo ya existe", "Puede cambiar uno o más valores seleccionados.\n Número | Deporte | Distancia | Nivel | Contenido", {
						icon : "error",
						buttons: {        			
							confirm: {
								className : 'btn btn-warning'
							}
						},
					});
					return false;
					}
							}
        }
	
	
		$('.submitFormBtn').parents('form').on('afterValidate', function (event, messages, errorAttributes) {				
			if(errorAttributes.length > 0) {
				$('.submitFormBtn').show();
				$('.submitFormBtnBlock').hide();
			}
		});
	});
	
	$('#mesocyclesmesocycle-profile_id').change(function() {
		let _idPerfil = $(this).val();
		let url="";
		url= '';
		//alert(url);

							document.location.href = 'index.php?r=mesocyclesmesocycle/update'+url+'&id=30901&cp=&perfilsel=' +  _idPerfil;
								//$('.submitFormBtn').click();
				swal("Espere un momento. Cargando...", {
					buttons: false,
					timer: 20000,
				});
					});
	
			$.ajax({
			type: 'get',
			url: "/web/index.php?r=sessionsssession/getatletas",
			data: {"id":605},
			success: function(data) {
				document.getElementById('mesocyclesmesocycle-profile_id').innerHTML = data;
			},
			error: function(data) {},
		});
	    cont = 0;
    $("#add_line").click(function() {
        agregarLinea();
    });
	
	
	function agregarLinea(){
		contador_weeks = 1;
		$(".week_item").each(function() {	
			cont_item_text = $(this).data('textcont');
			if(cont_item_text!=='?'){
				contador_weeks = Number(contador_weeks + 1);
			}			
		});
		var $divs = $(".clsSemana").toArray().length;
		console.log("Hay " + $divs + " elementos");
		if($divs==0){
			cont=-1;
		}

		cont = cont + 1;
		
		let fechaRealizaL="";
		let fechaRealizaM="";
		let fechaRealizaMi="";
		let fechaRealizaJ="";
		let fechaRealizaV="";
		let fechaRealizaS="";
		let fechaRealizaD="";
		var fecha_inicio = new Date();
		var dias = cont * 7; // Número de días a agregar
		
				let btn_add='';
		if(!is_preview){
			btn_add='<div  style="position: absolute; bottom: 8%;margin-left:2px">'+
						'<button type="button" class="btn btn-save anchoSave mr-2 btn-sm" id="add_line_intermedia" data-cont="'+cont+'" onClick="agregarLineaIntermedia('+cont+',0)" style="height:30px;">Agregar semana</button>'+
					'</div>';
		}
        $("#weeks").append('<div class="week_item row week' + cont + '" id="week' + cont + '" data-cont="'+cont+'" data-textcont="'+(cont+1)+'">' +
            '<input type="hidden" id="tot_ecos_week' + cont + '" name="tot_ecos_week' + cont + '" value="0">' +
            '<div class="col colModif2" style="min-height: 180px">'+
			'<input type="hidden" id="hddMinZona1' + cont + '" name="hddMinZona1' + cont + '" value="0" style="width:70px;">' +
			'<input type="hidden" id="hddMinZona2' + cont + '" name="hddMinZona2' + cont + '" value="0" style="width:70px;">' +
			'<input type="hidden" id="hddMinZona3' + cont + '" name="hddMinZona3' + cont + '" value="0" style="width:70px;">' +
			'<input type="hidden" id="hddMinZona4' + cont + '" name="hddMinZona4' + cont + '" value="0" style="width:70px;">' +
			'<div class="fondoBordeBlanco" style="position:relative; margin-top:10px;">' +
			//'<br /> <b class="clsSemana">Semana ' + Number(cont + 1) +
			'<br /> <b class="clsSemana">Semana ' + contador_weeks +
			
            '</b> &nbsp; <span class="" style="cursor:pointer; position:absolute; right:8px; top:5px;" title="Eliminar semana" onclick="eliminarFila(' + cont + ');">X</span><b class="centrado2DEL"><img src="require/img/ecos70.png" class="centrado" style="cursor: pointer;" onClick="verTooltipSemana(\'' + cont + '\', \'ver\')"/>' +
			'<div class="centrado" id="ecos_tot' + cont + '" style="color:white; cursor: pointer; padding-left:6px;" onClick="verTooltipSemana(\'' + cont + '\',\'ver\')">0</div>' +
			'<div id="divSemana' + cont + '" class="tooltipSemana ocultoSemana row">' +
			'<div class="row">' +
			'<div class="col-md-12" align="right">' +
			'<span onClick="verTooltipSemana(\'' + cont + '\', \'ocultar\')" style="cursor:pointer;">Salir</span>' +
			'</div>' +
			'<div class="col-md-4" id="divSemanaFila1_' + cont + '">Dato 1 ' + cont + '</div>' +
			'<div class="col-md-1" id="divSemanaFila2_' + cont + '">Dato 2</div>' +
			'<div class="col-md-2" id="divSemanaFila3_' + cont + '">Dato 3</div>' +
			'<div class="col-md-2" id="divSemanaFila4_' + cont + '">Dato 4</div>' +
			'<div class="col-md-2" id="divSemanaFila5_' + cont + '">Dato 5</div>' +
			'</div>' +
		   	'<div class="row" id="divSenamaCuadroEstadisticas' + cont + '">Sin datos</div>' +
			'</div>' +
			btn_add+
			'</div>' +
            '</div>' +
            '<div class="col colModif">' +
            'Lunes ' + fechaRealizaL +
			'<input type="radio" name="rbMoverAqui" id="rbMoverAqui" class="rbMoverAqui" data-option="" ' +
			'onClick="actionMoverRadiobuttom(1, \'' + cont + '\')">' +
			'<span class="addSesion " onClick="getAddSesion(1, \'' + cont + '\');" title="Agregar sesión">+</span>' +
            '<div class="cuadroInfo" id="lunes' + cont + '"></div>' +
            '</div>' +
            '<div class="col colModif">' +
            'Martes ' + fechaRealizaM +
			'<input type="radio" name="rbMoverAqui" id="rbMoverAqui" class="rbMoverAqui" data-option="" ' +
			'onClick="actionMoverRadiobuttom(2, \'' + cont + '\')">' +
			'<span class="addSesion " onClick="getAddSesion(2, \'' + cont + '\');" title="Agregar sesión">+</span>' +
            '<div class="cuadroInfo" id="martes' + cont + '"></div>' +
            '</div>' +
            '<div class="col colModif">' +
            'Miércoles ' + fechaRealizaMi +
			'<input type="radio" name="rbMoverAqui" id="rbMoverAqui" class="rbMoverAqui" data-option="" ' +
			'onClick="actionMoverRadiobuttom(3, \'' + cont + '\')">' +
			'<span class="addSesion " onClick="getAddSesion(3, \'' + cont + '\');" title="Agregar sesión">+</span>' +
            '<div class="cuadroInfo" id="miercoles' + cont + '"></div>' +
            '</div>' +
            '<div class="col colModif">' +
            'Jueves ' + fechaRealizaJ +
			'<input type="radio" name="rbMoverAqui" id="rbMoverAqui" class="rbMoverAqui" data-option="" ' +
			'onClick="actionMoverRadiobuttom(4, \'' + cont + '\')">' +
			'<span class="addSesion " onClick="getAddSesion(4, \'' + cont + '\');" title="Agregar sesión">+</span>' +
            '<div class="cuadroInfo" id="jueves' + cont + '"></div>' +
            '</div>' +
            '<div class="col colModif">' +
            'Viernes ' + fechaRealizaV +
			'<input type="radio" name="rbMoverAqui" id="rbMoverAqui" class="rbMoverAqui" data-option="" ' +
			'onClick="actionMoverRadiobuttom(5, \'' + cont + '\')">' +
			'<span class="addSesion " onClick="getAddSesion(5, \'' + cont + '\');" title="Agregar sesión">+</span>' +
            '<div class="cuadroInfo" id="viernes' + cont + '" style=""></div>' +
            '</div>' +
            '<div class="col colModif">' +
            'Sábado ' + fechaRealizaS +
			'<input type="radio" name="rbMoverAqui" id="rbMoverAqui" class="rbMoverAqui" data-option="" ' +
			'onClick="actionMoverRadiobuttom(6, \'' + cont + '\')">' +
			'<span class="addSesion " onClick="getAddSesion(6, \'' + cont + '\');" title="Agregar sesión">+</span>' +
            '<div class="cuadroInfo" id="sabado' + cont + '"></div>' +
            '</div>' +
            '<div class="col colModif">' +
            'Domingo ' + fechaRealizaD +
			'<input type="radio" name="rbMoverAqui" id="rbMoverAqui" class="rbMoverAqui" data-option="" ' +
			'onClick="actionMoverRadiobuttom(7, \'' + cont + '\')">' +
			'<span class="addSesion " onClick="getAddSesion(7, \'' + cont + '\');" title="Agregar sesión">+</span>' +
            '<div class="cuadroInfo" id="domingo' + cont + '"></div>' +
            '</div>' +
            '</div>');
	}

	
	
	$("#add_line2").click(function() {
		$("#add_line").click();
		$('#weeks_selectMacro').empty();
		/*for(var iC=0; iC<=cont; iC++){
			$('#weeks_selectMacro').append('<option value="' + contador_weeks + '">Semana ' +
				Number(contador_weeks + 1) + '</option>');
			contador_weeks = Number(contador_weeks + 1);
		}*/
		contador_weeks = 1;
		$(".week_item").each(function() {	
			cont_item = $(this).data('cont');
			cont_item_text = $(this).data('textcont');

			console.log('hh-'+cont_item);
			if(cont_item_text==='?'){
				$('#weeks_selectMacro').append('<option value="' + cont_item + '">Semana ' +
				cont_item_text + '</option>');
			}else{
				$('#weeks_selectMacro').append('<option value="' + cont_item + '">Semana ' +
				contador_weeks + '</option>');
				contador_weeks = Number(contador_weeks + 1);
			}			
		});
		swal({
			title: "Semana agregada!",
			text: "",
			icon: "success",
			buttons: {
				confirm: {
					className: 'btn btn-success'
				}
			},
			timer: 2000
		});
	});
	
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=sessionsssession/getsport",
        data: {},
        success: function(data) {
            document.getElementById('sport_select').innerHTML = data;
							$("#sport_select").val(3);
				activarDistancia();
				activarCombosNivelContenido();
			        },
        error: function(data) {},
    });//deporte
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=sessionsssession/getdiscipline",
        data: {},
        success: function(data) {
            document.getElementById('discipline_select').innerHTML = data;
        },
        error: function(data) {},
    });//disciplina
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=sessionsssession/getcontain",
        data: {"structure": 4},
        success: function(data) {
            document.getElementById('contain_select').innerHTML = data;
			document.getElementById('ncontain_select').innerHTML = data;
			document.getElementById('bcontain_select').innerHTML = data;
			document.getElementById('ccontain_select').innerHTML = data;
							$("#contain_select").val(1);
				$("#ccontain_select").val();
				$("#bcontain_select").val();
				$("#ncontain_select").val();
			        },
        error: function(data) {},
    });//content
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=sessionsssession/getlevel",
        data: {},
        success: function(data) {
            document.getElementById('level_select').innerHTML = data;
            document.getElementById('nlevel_select').innerHTML = data;
            document.getElementById('blevel_select').innerHTML = data;
            document.getElementById('clevel_select').innerHTML = data;
							$("#level_select").val(5);
				$("#clevel_select").val();
				$("#blevel_select").val();
				$("#nlevel_select").val();
			        },
        error: function(data) {},
    });//level
    $('#sport_select').change(function() {
		activarDistancia();
		activarCombosNivelContenido();
    });
	
	function activarDistancia(){
		let sel = $('#sport_select').val();
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=sessionsssession/getdistance",
            data: {
                "id": sel
            },
            success: function(data) {
                document.getElementById('distance_select').innerHTML = data;
									$("#distance_select").val(1);
				            },
            error: function(data) {},
        });
	}
	
	function activarCombosNivelContenido(){
		$('#divLevel').hide();
		$('#divnLevel').hide();
		$('#divbLevel').hide();
		$('#divcLevel').hide();
		$('#divContent').hide();
		$('#divnContent').hide();
		$('#divbContent').hide();
		$('#divcContent').hide();
		if($('#sport_select').val()==4){//Triatlón
			$('#divnLevel').show();
			$('#divbLevel').show();
			$('#divcLevel').show();
			$('#divnContent').show();
			$('#divbContent').show();
			$('#divcContent').show();
		}
		else if($('#sport_select').val()==5){//duatlón
			$('#divbLevel').show();
			$('#divcLevel').show();
			$('#divbContent').show();
			$('#divcContent').show();
		}
		else if($('#sport_select').val()==6){//Acuatlón
			$('#divnLevel').show();
			$('#divcLevel').show();
			$('#divnContent').show();
			$('#divcContent').show();
		}
		else{
			$('#divLevel').show();
			$('#divContent').show();
		}
	}
	
    $('#search').click(function() {
        $('#btnPrevisualizar').hide();
        let sel = $('#search_session').val();
		if(sel.trim()==""){
			swal("Campos requeridos!", "Debe escribir al menos 3 carácteres para buscar", {
				icon : "warning",
				buttons: {        			
					confirm: {
						className : 'btn btn-warning'
					}
				},
			});
		}
		else{
			swal("Espere un momento. Cargando...", {
				buttons: false,
				timer: 2000,
			});
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=progressionsprogression/getsesion",
				data: {
					"word": sel
				},
				success: function(data) {
					document.getElementById('sesion_select').innerHTML = data;
					$('#sesion_select').select2({
						width: '100%'
					});
					var $select2 = $('#sesion_select').data('select2');
					// Abre el select2 programáticamente
					$select2.open();
				},
				error: function(data) {},
			});
		}
    });
    
	$('#searchProgresion').click(function() {
        $('#btnPrevisualizarP').hide();
        let sel = $('#search_progresion').val();
		if(sel.trim()==""){
			swal("Campos requeridos!", "Debe escribir al menos 3 carácteres para buscar", {
				icon : "warning",
				buttons: {        			
					confirm: {
						className : 'btn btn-warning'
					}
				},
			});
		}
		else{
			swal("Espere un momento. Cargando...", {
				buttons: false,
				timer: 2000,
			});
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=progressionsprogression/getprogresion",
				data: {
					"word": sel
				},
				success: function(data) {
					document.getElementById('progresion_select').innerHTML = data;
					$('#progresion_select').select2({
						width: '100%'
					});
					var $select2 = $('#progresion_select').data('select2');
					// Abre el select2 programáticamente
					$select2.open();
				},
				error: function(data) {},
			});
		}
    });
    
	$('#sesion_select').select2({
		placeholder: 'Buscar...',
		minimumInputLength: 3, // Número mínimo de caracteres para activar la búsqueda
		ajax: {
			url: '/web/index.php?r=progressionsprogression/getsesion', // Ruta del script que procesa la búsqueda
			dataType: 'json',
			delay: 250, // Retraso en milisegundos antes de enviar la solicitud
			data: function (params) {
				console.log($('#checkses').is(':checked'))
				return {
					word: params.term, // Término de búsqueda introducido por el usuario
					//check:$('#checkses').is(':checked')
					check:false //el check es para saber si debe traer libreria personal(true) o no (false)

				};
			},
			processResults: function (data) {
				console.log(data);
				

				return {
					results: data
				};
			},
			cache: true
		},
		width:'100%'
	});
	$('#sesion_select_personal').select2({
		placeholder: 'Buscar...',
		minimumInputLength: 3, // Número mínimo de caracteres para activar la búsqueda
		ajax: {
			url: '/web/index.php?r=progressionsprogression/getsesion', // Ruta del script que procesa la búsqueda
			dataType: 'json',
			delay: 250, // Retraso en milisegundos antes de enviar la solicitud
			data: function (params) {
				console.log($('#checkses').is(':checked'))
				return {
					word: params.term, // Término de búsqueda introducido por el usuario
					check:true

				};
			},
			processResults: function (data) {
				console.log(data);
				

				return {
					results: data
				};
			},
			cache: true
		},
		width:'100%'
	});
	// Inicializa Select2 en el select
	$('#microciclo_select').select2({
		placeholder: 'Buscar...',
		minimumInputLength: 3, // Número mínimo de caracteres para activar la búsqueda
		ajax: {
			url: '/web/index.php?r=progressionsprogression/getmicrociclo', // Ruta del script que procesa la búsqueda
			dataType: 'json',
			delay: 250, // Retraso en milisegundos antes de enviar la solicitud
			data: function (params) {
				return {
					word: params.term, // Término de búsqueda introducido por el usuario
					//check:$('#checkmic').is(':checked')
					check:false
				};
			},
			processResults: function (data) {
				console.log(data);
				$('#btnPrevisualizarM').show();

				return {
					results: data
				};
			},
			cache: true
		},
		width:'100%'
	});
	$('#microciclo_select_personal').select2({
		placeholder: 'Buscar...',
		minimumInputLength: 3, // Número mínimo de caracteres para activar la búsqueda
		ajax: {
			url: '/web/index.php?r=progressionsprogression/getmicrociclo', // Ruta del script que procesa la búsqueda
			dataType: 'json',
			delay: 250, // Retraso en milisegundos antes de enviar la solicitud
			data: function (params) {
				return {
					word: params.term, // Término de búsqueda introducido por el usuario
					check:true
				};
			},
			processResults: function (data) {
				console.log(data);
				$('#btnPrevisualizarMPersonal').show();

				return {
					results: data
				};
			},
			cache: true
		},
		width:'100%'
	});
	// Inicializa Select2 en el select
	$('#progresion_select').select2({
		placeholder: 'Buscar...',
		minimumInputLength: 3, // Número mínimo de caracteres para activar la búsqueda
		ajax: {
			url: '/web/index.php?r=progressionsprogression/getprogresion', // Ruta del script que procesa la búsqueda
			dataType: 'json',
			delay: 250, // Retraso en milisegundos antes de enviar la solicitud
			data: function (params) {
				return {
					word: params.term // Término de búsqueda introducido por el usuario
				};
			},
			processResults: function (data) {
				console.log(data);
				return {
					results: data
				};
			},
			cache: true
		},
		width:'100%'
	});
	// Inicializa Select2 en el select
	$('#mesociclo_select').select2({
		placeholder: 'Buscar...',
		minimumInputLength: 3, // Número mínimo de caracteres para activar la búsqueda
		ajax: {
			url: '/web/index.php?r=progressionsprogression/getmesociclo', // Ruta del script que procesa la búsqueda
			dataType: 'json',
			delay: 250, // Retraso en milisegundos antes de enviar la solicitud
			data: function (params) {
				console.log(params);
				return {
					word: params.term, // Término de búsqueda introducido por el usuario
					//check:$('#checkmes').is(':checked')
					check:false

				};
			},
			processResults: function (data) {
				console.log(data);
				$('#btnPrevisualizarMeso').show();
				return {
					results: data
				};
			},
			cache: true
		},
		width:'100%'
	});
	$('#mesociclo_select_personal').select2({
		placeholder: 'Buscar...',
		minimumInputLength: 3, // Número mínimo de caracteres para activar la búsqueda
		ajax: {
			url: '/web/index.php?r=progressionsprogression/getmesociclo', // Ruta del script que procesa la búsqueda
			dataType: 'json',
			delay: 250, // Retraso en milisegundos antes de enviar la solicitud
			data: function (params) {
				console.log(params);
				return {
					word: params.term, // Término de búsqueda introducido por el usuario
					check:true

				};
			},
			processResults: function (data) {
				console.log(data);
				$('#btnPrevisualizarMesoPersonal').show();
				return {
					results: data
				};
			},
			cache: true
		},
		width:'100%'
	});
	    
	$('#searchMicrociclo').click(function() {
        $('#btnPrevisualizarM').hide();
        let sel = $('#search_microciclo').val();
		if(sel.trim()==""){
			swal("Campos requeridos!", "Debe escribir al menos 3 carácteres para buscar", {
				icon : "warning",
				buttons: {        			
					confirm: {
						className : 'btn btn-warning'
					}
				},
			});
		}
		else{
			swal("Espere un momento. Cargando...", {
				buttons: false,
				timer: 2000,
			});
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=progressionsprogression/getmicrociclo",
				data: {
					"word": sel
				},
				success: function(data) {
					console.log(data);
					document.getElementById('microciclo_select').innerHTML = data;
					$('#btnPrevisualizarM').show();
					$('#microciclo_select').select2({
						width: '100%'
					});
					var $select2 = $('#microciclo_select').data('select2');
					// Abre el select2 programáticamente
					$select2.open();
			
				},
				error: function(data) {},
			});
		}
    });
	
	$('#sesion_select').change(function() {
		$("#add_ss").show();
		$("#btnMover").hide();
		$('#divSemanaDia').show();
		$('#divAtletasParaCopiar').hide();
		$("#btnCopiarAtleta").hide();
		getModal(0);
    });
	
	$('#btnPrevisualizar').click(function() {
		$("#add_ss").show();
		$("#btnMover").hide();
		$('#divAtletasParaCopiar').hide();
		$("#btnCopiarAtleta").hide();
		getModal(0);
	});
	$('#sesion_select_personal').change(function() {
		$("#add_ss").show();
		$("#btnMover").hide();
		$('#divSemanaDia').show();
		$('#divAtletasParaCopiar').hide();
		$("#btnCopiarAtleta").hide();
		getModal(1);
    });
	
	$('#btnPrevisualizarPersonal').click(function() {
		$("#add_ss").show();
		$("#btnMover").hide();
		$('#divAtletasParaCopiar').hide();
		$("#btnCopiarAtleta").hide();
		getModal(1);
	});
	
	$('#btnBuscarAtleta').click(function() {
		let sel = $('#txtBuscarAtleta').val();
		if(sel.trim()==""){
			swal("Campos requeridos!", "Debe escribir al menos 3 carácteres para buscar", {
				icon : "warning",
				buttons: {        			
					confirm: {
						className : 'btn btn-warning'
					}
				},
			});
		}
		else{
			$('#divError').html("");
			$('#divSemanaDia').hide();
			swal("Espere un momento. Cargando...", {
				buttons: false,
				timer: 1000,
			});
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=athletesathlete/buscaratleta",
				data: {
					"word": sel,
					"esCombo": 1
				},
				success: function(data) {
					document.getElementById('cmbAtletaACopiar').innerHTML = data;
				},
				error: function(data) {},
			});
		}
	});
	
	$('#btnCopiarAtleta').click(function() {
		var _fechaCopy = $("#txtFechaInicialCopiar").val();
		var _atletaCopy = $("#cmbAtletaACopiar").val();
		var sessionID = $("#sesion_select").val();
		//alert(sessionID);
		var _errors = "";
		if(_fechaCopy == ""){
			_errors += "-Seleccione una fecha";
		}
		if(_atletaCopy == ""){
			_errors += "\n-Seleccione un atleta";
		}
		if(_errors != ""){
			swal("Campos requeridos!", _errors, {
				icon : "warning",
				buttons: {        			
					confirm: {
						className : 'btn btn-warning'
					}
				},
			});
			return false;
		}
		else{
			alertify.confirm(
			'Confirmación',
			'¿Seguro que desea copiar la sesión al atleta seleccionado?',
			function() {
				$('#btnCopiarAtleta').hide();
				swal("Espere un momento", {
					buttons: false,
					timer: 1500,
				});

				_atletaCopy="";
				$(".hddAtletaID").each(function() {
					_atletaCopy += (_atletaCopy != "" ? "||" : "") + this.value;
				});
								  
				$.ajax({
					type: 'get',
					url: "/web/index.php?r=progressionsprogression/copysesionatleta",
					data: {
						"fechaCopy": _fechaCopy,
						"atletaCopy": _atletaCopy,
						"sessionID": sessionID,
					},
					success: function(data) {
						$('#btnCopiarAtleta').show();
						if(data == "EXITO"){
							var _atletaSelected= $('#cmbAtletaACopiar option:selected').html();
							swal({
								title: "Datos guardados correctamente!",
								text: "Se copió al atleta/s seleccionados",
								icon: "success",
								buttons: {
									confirm: {
										className: 'btn btn-success'
									}
								},
								timer: 7000
							});
						}
						else if(data == "Sin_fechas_activas_en_dashboard"){
							swal("El atleta no cuenta con ningun programa asignado", "Debe asignarle un programa desde el dashboard del atleta", {
								icon: "warning",
								buttons: {
									confirm: {
										className: 'btn btn-warning'
									}
								},
							});
						}
						
						else{
							swal("Error al copiar la sesion!", "" + data, {
								icon : "warning",
								buttons: {        			
									confirm: {
										className : 'btn btn-warning'
									}
								},
							});
						}
					},
					error: function(data) {
						$('#btnCopiarAtleta').show();
					},
				});
			},
				function() {

				}
			);
		}
	});
	
	function getModal(es_personal){
		contador_weeks = 1;
        $('#weeks_select').empty();
        /*$(".week").each(function() {
            //console.log('sleec week')
			alert(cont);
            $('#weeks_select').append('<option value="' + contador_weeks + '">Semana ' +
                Number(contador_weeks + 1) + '</option>');
            contador_weeks = Number(contador_weeks + 1);
        });*/
		$(".week_item").each(function() {	
			cont_item = $(this).data('cont');
			cont_item_text = $(this).data('textcont');
			console.log('hh-'+cont_item);				

			if(cont_item_text==='?'){
				$('#weeks_select').append('<option value="' + cont_item + '">Semana ' +
				cont_item_text + '</option>');
			}else{
				$('#weeks_select').append('<option value="' + cont_item + '">Semana ' +
				contador_weeks + '</option>');
				contador_weeks = Number(contador_weeks + 1);
			}	
		});
		/*for(var iC=0; iC<=cont; iC++){
			$('#weeks_select').append('<option value="' + contador_weeks + '">Semana ' +
                Number(contador_weeks + 1) + '</option>');
            contador_weeks = Number(contador_weeks + 1);
		}*/
		if(es_personal){
			sesion = $('#sesion_select_personal');
		}else{
			sesion = $('#sesion_select');
		}
        
		if(sesion.val().trim()=="" || sesion.val()=="" || sesion.val()=="null"){
			swal("Campos requeridos!", "Seleccione una sesión para poder visualizar.", {
				icon : "warning",
				buttons: {        			
					confirm: {
						className : 'btn btn-warning'
					}
				},
			});
			return false;
		}
		$('#add_ss').html('Agregar'); 
		$('#add_ss').addClass('submitFormBtn');
		$('#add_ss').removeClass('submitFormBtnBlock');
		$('#add_ss').attr('disabled', false);
		
		swal("Espere un momento", {
			buttons: false,
			timer: 1000,
		});
		
        $.ajax({
            type: 'get',
            //url: "/web/index.php?r=mesocyclesmesocycle/getdatamodal",
            url: "/web/index.php?r=progressionsprogression/getdatamodal",
            data: {
                "id": sesion.val(),
            },
            success: function(data) {
                $('#modal_body_s').empty();
                $('#modal_body_s').append(data);
				if($('#hddMoverA').val()!="moverA"){
                	$('#exampleModal').modal('show');
				}
				$(".rbMoverAqui").prop("checked", false);
				if(es_personal){
					$('#btnPrevisualizarPersonal').show();
				}else{
					$('#btnPrevisualizar').show();
				}
				
                
            },
            error: function(data) {},
        });
	}
	
	
	$('#progresion_select').change(function() {
		$("#btnMover").hide();
		$('#divSemanaDia').show();
		$('#divAtletasParaCopiar').hide();
		$("#btnCopiarAtleta").hide();
		getModalProgresion();
    });
	
	$('#btnPrevisualizarP').click(function() {
		$("#btnMover").hide();
		$('#divSemanaDia').show();
		$('#divAtletasParaCopiar').hide();
		$("#btnCopiarAtleta").hide();
		getModalProgresion();
	});
	
	function getModalProgresion(){
		contador_weeks = 1;
        $('#weeks_select').empty();
        /*$(".week").each(function() {
            $('#weeks_select').append('<option value="' + contador_weeks + '">Semana ' +
                Number(contador_weeks + 1) + '</option>');
            contador_weeks = Number(contador_weeks + 1);
        });*/
		$(".week_item").each(function() {	
			cont_item = $(this).data('cont');
			cont_item_text = $(this).data('textcont');
			console.log('hh-'+cont_item);

			if(cont_item_text==='?'){
				$('#weeks_select').append('<option value="' + cont_item + '">Semana ' +
				cont_item_text + '</option>');
			}else{
				$('#weeks_select').append('<option value="' + cont_item + '">Semana ' +
				contador_weeks + '</option>');
				contador_weeks = Number(contador_weeks + 1);
			}	
		});
		/*for(var iC=0; iC<=cont; iC++){
			$('#weeks_select').append('<option value="' + contador_weeks + '">Semana ' +
                Number(contador_weeks + 1) + '</option>');
            contador_weeks = Number(contador_weeks + 1);
		}*/
        sesion = $('#progresion_select');
		if(sesion.val().trim()=="" || sesion.val()=="" || sesion.val()=="null"){
			swal("Campos requeridos!", "Seleccione una sesión para poder visualizar.", {
				icon : "warning",
				buttons: {        			
					confirm: {
						className : 'btn btn-warning'
					}
				},
			});
			return false;
		}
		$('#add_ss').html('Agregar'); 
		$('#add_ss').addClass('submitFormBtn');
		$('#add_ss').removeClass('submitFormBtnBlock');
		$('#add_ss').attr('disabled', false);
		
		swal("Espere un momento", {
			buttons: false,
			timer: 1000,
		});
		
        $.ajax({
            type: 'get',
            //url: "/web/index.php?r=mesocyclesmesocycle/getdatamodal",
            url: "/web/index.php?r=progressionsprogression/getdatamodal",
            data: {
                "id": sesion.val(),
				"idProgresion": sesion.val(),
            },
            success: function(data) {
                $('#modal_body_s').empty();
                $('#modal_body_s').append(data);
                $('#exampleModal').modal('show');
				$('#btnPrevisualizarP').show();
                
            },
            error: function(data) {},
        });
	}
	
	
	
	$('#microciclo_select').change(function() {
		$("#btnMover").hide();
		$('#divSemanaDia').show();
		$('#divAtletasParaCopiar').hide();
		$("#btnCopiarAtleta").hide();
		getModalMicrociclo(0);
    });
	$('#microciclo_select_personal').change(function() {
		$("#btnMover").hide();
		$('#divSemanaDia').show();
		$('#divAtletasParaCopiar').hide();
		$("#btnCopiarAtleta").hide();
		getModalMicrociclo(1);
    });
	
	$('#btnPrevisualizarM').click(function() {
		$("#btnMover").hide();
		$('#divSemanaDia').show();
		$('#divAtletasParaCopiar').hide();
		$("#btnCopiarAtleta").hide();
		getModalMicrociclo(0);
	});
	$('#btnPrevisualizarMPersonal').click(function() {
		$("#btnMover").hide();
		$('#divSemanaDia').show();
		$('#divAtletasParaCopiar').hide();
		$("#btnCopiarAtleta").hide();
		getModalMicrociclo(1);
	});
	
	function getModalMicrociclo(es_personal){
		perfilID= $("#mesocyclesmesocycle-profile_id").val();
		if(perfilID==""){
			swal("Campos requeridos!", "Debe seleccionar un perfil", {
				icon : "warning",
				buttons: {        			
					confirm: {
						className : 'btn btn-warning'
					}
				},
			});
		}else{
			contador_weeks = 1;
			$('#weeks_select').empty();
			$('#weeks_selectMacro').empty();
			/*$(".week").each(function() {
				$('#weeks_select').append('<option value="' + contador_weeks + '">Semana ' +
					Number(contador_weeks + 1) + '</option>');
				contador_weeks = Number(contador_weeks + 1);
			});*/
			$(".week_item").each(function() {	
				cont_item = $(this).data('cont');
				cont_item_text = $(this).data('textcont');

				console.log('hh-'+cont_item);
				
				
				
				if(cont_item_text==='?'){
					$('#weeks_select').append('<option value="' + cont_item + '">Semana ' +
					cont_item_text + '</option>');
					$('#weeks_selectMacro').append('<option value="' + cont_item + '">Semana ' +
					cont_item_text + '</option>');
				}else{
					$('#weeks_select').append('<option value="' + cont_item + '">Semana ' +
					contador_weeks + '</option>');
					$('#weeks_selectMacro').append('<option value="' + cont_item + '">Semana ' +
					contador_weeks + '</option>');
					contador_weeks = Number(contador_weeks + 1);
				}	
			});
			/*for(var iC=0; iC<=cont; iC++){
				$('#weeks_select').append('<option value="' + contador_weeks + '">Semana ' +
					Number(contador_weeks + 1) + '</option>');
				$('#weeks_selectMacro').append('<option value="' + contador_weeks + '">Semana ' +
					Number(contador_weeks + 1) + '</option>');
				contador_weeks = Number(contador_weeks + 1);
			}*/
			if(es_personal){
				sesion = $('#microciclo_select_personal');
			}else{
				sesion = $('#microciclo_select');
			}
			if(sesion.val().trim()=="" || sesion.val()=="" || sesion.val()=="null"){
				swal("Campos requeridos!", "Seleccione una sesión para poder visualizar.", {
					icon : "warning",
					buttons: {        			
						confirm: {
							className : 'btn btn-warning'
						}
					},
				});
				return false;
			}
			$('#add_ss').html('Agregar'); 
			$('#add_ss').addClass('submitFormBtn');
			$('#add_ss').removeClass('submitFormBtnBlock');
			$('#add_ss').attr('disabled', false);
			
			swal("Espere un momento", {
				buttons: false,
				timer: 1000,
			});
			
			load_frame(sesion.val(), 1);
		}
		
	}
	
	
	
	//buscar mesociclo
	$('#mesociclo_select').change(function() {
		$("#btnMover").hide();
		$('#divSemanaDia').show();
		$('#divAtletasParaCopiar').hide();
		$("#btnCopiarAtleta").hide();
		getModalMesociclo(0);
    });
	$('#mesociclo_select_personal').change(function() {
		$("#btnMover").hide();
		$('#divSemanaDia').show();
		$('#divAtletasParaCopiar').hide();
		$("#btnCopiarAtleta").hide();
		getModalMesociclo(1);
    });
	
	$('#btnPrevisualizarMeso').click(function() {
		$("#btnMover").hide();
		$('#divSemanaDia').show();
		$('#divAtletasParaCopiar').hide();
		$("#btnCopiarAtleta").hide();
		getModalMesociclo(0);
	});
	$('#btnPrevisualizarMesoPersonal').click(function() {
		$("#btnMover").hide();
		$('#divSemanaDia').show();
		$('#divAtletasParaCopiar').hide();
		$("#btnCopiarAtleta").hide();
		getModalMesociclo(1);
	});
	
	function getModalMesociclo(es_personal){
		perfilID= $("#mesocyclesmesocycle-profile_id").val();
		if(perfilID==""){
			swal("Campos requeridos!", "Debe seleccionar un perfil", {
				icon : "warning",
				buttons: {        			
					confirm: {
						className : 'btn btn-warning'
					}
				},
			});
		}else{
			contador_weeks = 1;
			$('#weeks_select').empty();
			$('#weeks_selectMacro').empty();
			/*$(".week").each(function() {
				$('#weeks_select').append('<option value="' + contador_weeks + '">Semana ' +
					Number(contador_weeks + 1) + '</option>');
				contador_weeks = Number(contador_weeks + 1);
			});*/
			/*for(var iC=0; iC<=cont; iC++){
				$('#weeks_select').append('<option value="' + contador_weeks + '">Semana ' +
					Number(contador_weeks + 1) + '</option>');
				$('#weeks_selectMacro').append('<option value="' + contador_weeks + '">Semana ' +
					Number(contador_weeks + 1) + '</option>');
				contador_weeks = Number(contador_weeks + 1);
			}*/
			$(".week_item").each(function() {	
				cont_item = $(this).data('cont');
				cont_item_text = $(this).data('textcont');

				console.log('hh-'+cont_item);
				
				if(cont_item_text==='?'){
					$('#weeks_select').append('<option value="' + cont_item + '">Semana ' +
					cont_item_text + '</option>');
					$('#weeks_selectMacro').append('<option value="' + cont_item + '">Semana ' +
					cont_item_text + '</option>');
				}else{
					$('#weeks_select').append('<option value="' + cont_item + '">Semana ' +
					contador_weeks + '</option>');
					$('#weeks_selectMacro').append('<option value="' + cont_item + '">Semana ' +
					contador_weeks + '</option>');
					contador_weeks = Number(contador_weeks + 1);
				}	
			});
			if(es_personal){
				sesion = $('#mesociclo_select_personal');
			}else{
				sesion = $('#mesociclo_select');
			}
			
			if(sesion.val().trim()=="" || sesion.val()=="" || sesion.val()=="null"){
				swal("Campos requeridos!", "Seleccione una sesión para poder visualizar.", {
					icon : "warning",
					buttons: {        			
						confirm: {
							className : 'btn btn-warning'
						}
					},
				});
				return false;
			}
			$('#add_ss').html('Agregar'); 
			$('#add_ss').addClass('submitFormBtn');
			$('#add_ss').removeClass('submitFormBtnBlock');
			$('#add_ss').attr('disabled', false);
			
			swal("Espere un momento", {
				buttons: false,
				timer: 1000,
			});
			
			load_frame(sesion.val(), 2);
		}
		
	}
	
	
    
	$('#searchMesociclo').click(function() {
        $('#btnPrevisualizarMeso').hide();
        let sel = $('#search_mesociclo').val();
		if(sel.trim()==""){
			swal("Campos requeridos!", "Debe escribir al menos 3 carácteres para buscar", {
				icon : "warning",
				buttons: {        			
					confirm: {
						className : 'btn btn-warning'
					}
				},
			});
		}
		else{


			swal("Espere un momento. Cargando...", {
				buttons: false,
				timer: 6000,
			});
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=progressionsprogression/getmesociclo",
				data: {
					"word": sel
				},
				success: function(data) {
					document.getElementById('mesociclo_select').innerHTML = data;
					$('#btnPrevisualizarMeso').show();
					$('#mesociclo_select').select2({
						width: '100%'
					});
					var $select2 = $('#mesociclo_select').data('select2');
					// Abre el select2 programáticamente
					$select2.open();
				},
				error: function(data) {},
			});
		}
    });
	
	
	function load_frame(id, type) {
		$('#modalOptions').modal('hide');
		$('#previewModal').modal('show');
		//$('#btnPrevisualizar').show();
		
		$('#btnAgregarMicroMeso').data('micromeso',id);
		$('#btnAgregarMicroMeso').data('option',type);

		switch (type) {
			case 1:
				url = 'index.php?r=mesocyclesmesocycle/microciclo&mrc=tr&id=' + id + '&cp=0&preview=true&orgn=dash&displaytbl=false';
				//&preview=true
				break;
			case 2:
				ss = id.split('_');
				url = 'index.php?r=mesocyclesmesocycle/update&id=' + ss[0] + '&cp=' + ss[1] + '&preview=true&orgn=dash&displaytbl=false';
				//&preview=true
				$('#btnAgregarMicroMeso').data('micromeso',ss[0]);
				break;
			case 3:
				//&preview=true
				url = 'index.php?r=mesocyclesmesocycle/update&mac=tr&id=' + id + '&cp=0&preview=true&orgn=dash&displaytbl=false';
				break;

			default:
				break;
		}
		
		console.log($('#btnAgregarMicroMeso').data('micromeso'));
		console.log(url);
		$('#iframe').attr('src', url);
		$('#iframe').reload();

	}
	//fin buscar mesociclo

	$('#btnAgregarMicroMeso').click(function() {
		
		$('#btnAgregarMicroMeso').attr('disabled', 'disabled');
		swal("Espere un momento...", {
			buttons: false,
			timer: 2000,
		});
		let id_micro_meso = $(this).data('micromeso');
		let option = $(this).data('option');
		if(option==1){
			$.ajax({
				type: 'get',
				//async: false,
				url: "/web/index.php?r=progressionsprogression/getdays",
				data: {
					"id": id_micro_meso,
				},
				success: function(data) {
					//console.log(data);
					data=JSON.parse(data);
					$.each(data, function(i, item) {
						console.log(item.session_id,item.day);
						if(option==1){
							week = $('#weeks_selectMacro').val();
						}else{
							week = 0;
						}
						
						
						day = item.day;
						string_type = 'Lunes';
						switch (day) {
							case '1':
								string_type = 'lunes';
								break;
							case '2':
								string_type = 'martes';
								break;
							case '3':
								string_type = 'miercoles';
								break;
							case '4':
								string_type = 'jueves';
								break;
							case '5':
								string_type = 'viernes';
								break;
							case '6':
								string_type = 'sabado';
								break;
							case '7':
								string_type = 'domingo';
								break;
						}
						console.log(string_type);
						//MI1C21KB2COM
						setTimeout(() => {
						console.log("Delayed for 1 second.");
						}, "10000");
						perfilID= $("#mesocyclesmesocycle-profile_id").val();
							if(perfilID=="") perfilID=0;
							$.ajax({
								type: 'get',
								async: false,
								url: "/web/index.php?r=progressionsprogression/getdata",
								data: {
									"id": item.session_id,
									"week": week,
									"day": day,
									"columnas": 12,
									"perfilID": perfilID,
									"idorgn": '30901',
									"cporgn": '',
									"origen": 'meso',
									"perfilSelectedID": '605',
									"perfilSelectedactivo": 'NO',
								},
								success: function(data) {
									//console.log(data);
									//document.getElementById('distance_select').innerHTML = data;
									console.log('dia','#' + string_type + week);
									$('#' + string_type + week).append(data);
									//$('#exampleModal').modal('hide');

									totales = 0;
									$(".sum_e" + week).each(function() {
										totales = totales + Number($(this).val());
									});
									//alert(week);
									$('#ecos_tot' + week).empty();
									$('#ecos_tot' + week).append(totales);
									$('#tot_ecos_week' + week).val(totales);
									$('#hddValida').val(Number($('#hddValida').val())+1);

									$('#add_ss').html('Agregar'); 
									$('#add_ss').addClass('submitFormBtn');
									$('#add_ss').removeClass('submitFormBtnBlock');
									$('#add_ss').attr('disabled', false);
									
								},
								error: function(data) {
									swal("Error al guardar!", "" + data, {
										icon : "error",
										buttons: {        			
											confirm: {
												className : 'btn btn-danger'
											}
										},
									});
								},
							});
						
					});
				},
				error: function(data) {
					swal("Error al guardar!", "" + data, {
						icon : "error",
						buttons: {        			
							confirm: {
								className : 'btn btn-danger'
							}
						},
					});
				},
			
			})
		}else{

			$.ajax({
				type: 'get',
				//async: false,
				url: "/web/index.php?r=progressionsprogression/getweeks",
				data: {
					"id": id_micro_meso,
				},
				success: function(data) {
					data=JSON.parse(data);
					
					//alert(size);
					week = $('#weeks_selectMacro').val();
					size=Number(data.length)+Number(week);
					console.log('size',size);

					$.each(data, function(i, item2) {
						console.log('semanaID',item2.semanaID);

						$.ajax({
							type: 'get',
							async: false,
							url: "/web/index.php?r=progressionsprogression/getdays",
							data: {
								"id": item2.semanaID,
							},
							success: function(data) {
								//console.log(data);
								data=JSON.parse(data);
								$.each(data, function(i, item) {
									console.log(item.session_id,item.day);
									day = item.day;
									string_type = 'Lunes';
									switch (day) {
										case '1':
											string_type = 'lunes';
											break;
										case '2':
											string_type = 'martes';
											break;
										case '3':
											string_type = 'miercoles';
											break;
										case '4':
											string_type = 'jueves';
											break;
										case '5':
											string_type = 'viernes';
											break;
										case '6':
											string_type = 'sabado';
											break;
										case '7':
											string_type = 'domingo';
											break;
									}
									console.log(string_type);
									//MI1C21KB2COM
									setTimeout(() => {
									console.log("Delayed for 1 second.");
									}, "10000");
									perfilID= $("#mesocyclesmesocycle-profile_id").val();
										if(perfilID=="") perfilID=0;
										$.ajax({
											type: 'get',
											async: false,
											url: "/web/index.php?r=progressionsprogression/getdata",
											data: {
												"id": item.session_id,
												"week": week,
												"day": day,
												"columnas": 12,
												"perfilID": perfilID,
												"idorgn": '30901',
												"cporgn": '',
												"origen": 'meso',
												"perfilSelectedID": '605',
												"perfilSelectedactivo": 'NO',
											},
											success: function(data) {
												//console.log(data);
												//document.getElementById('distance_select').innerHTML = data;
												console.log('dia','#' + string_type + week);
												$('#' + string_type + week).append(data);
												//$('#exampleModal').modal('hide');

												totales = 0;
												$(".sum_e" + week).each(function() {
													totales = totales + Number($(this).val());
												});
												//alert(week);
												$('#ecos_tot' + week).empty();
												$('#ecos_tot' + week).append(totales);
												$('#tot_ecos_week' + week).val(totales);
												$('#hddValida').val(Number($('#hddValida').val())+1);

												$('#add_ss').html('Agregar'); 
												$('#add_ss').addClass('submitFormBtn');
												$('#add_ss').removeClass('submitFormBtnBlock');
												$('#add_ss').attr('disabled', false);
												
											},
											error: function(data) {
												swal("Error al guardar!", "" + data, {
													icon : "error",
													buttons: {        			
														confirm: {
															className : 'btn btn-danger'
														}
													},
												});
											},
										});
									
								});
							},
							error: function(data) {
								swal("Error al guardar!", "" + data, {
									icon : "error",
									buttons: {        			
										confirm: {
											className : 'btn btn-danger'
										}
									},
								});
							},
							
						})
						week++;
						if(week>cont){
							if(week<size){
								$("#add_line").click();
							}
							
						}
						
						
					})
				},
				error: function(data) {
					swal("Error al guardar!", "" + data, {
						icon : "error",
						buttons: {        			
							confirm: {
								className : 'btn btn-danger'
							}
						},
					});
				},
			})

			
		}
		
		$('#previewModal').modal('hide');
		$('#btnAgregarMicroMeso').attr('disabled', false);
	})
	
	
	$('#cmbAtletaACopiar').change(function() {
		var validaSeleccionado= false;
		$('#divError').html("");
		$(".hddAtletaID").each(function() {
			if(this.value==$('#cmbAtletaACopiar').val()) {
             validaSeleccionado= true;
			}
        });
		
		if(validaSeleccionado==false) {
			var _atletaID = this.value;
			var _atletaName= $('#cmbAtletaACopiar option:selected').html();
			if(_atletaID != ""){
				$('#divError').html("");
				$("#divListaAtletas").append('<div class="clsListaAtleta row mx-0" style="height:22px;">' +
				'<input type="hidden" class="hddAtletaID" id="hddAtletaID" name="hddAtletaID[]" value="' + _atletaID + '">' +
				'<div class="col-md-11">' + _atletaName + '</div>' +
				'<div class="col-md-1">' +
				'<span onclick="$(this).closest(\'.clsListaAtleta\').remove();" style="position:relative; right:5px; font-size:17px; cursor:pointer;" title="Quitar de la lista"><i class="iconRemoveListaAtleta pt-1 far fa-window-close"></i></span>' +
				'</div>' +
				'</div>'
				);

			}
			else{

			}
		}
		else {
			$('#divError').html("Atleta previamente seleccionado");
		}
    });
	
	$('.iconRemoveListaAtleta').click(function() {
		alert(1);
		$(this).closest('.clsListaAtleta').remove();
		alert(2);
	});
	
    /*'098'
    'mexico'*/
	temp1=0;
    $('#add_ss').click(function() {
		
		var validaSeleccion= false;
		$("input:checkbox:checked").each(function() {
             validaSeleccion= true;
        });
		if(validaSeleccion==false){
			swal("Campos requeridos!", "Debe seleccionar una sesión para poder agregar", {
				icon : "warning",
				buttons: {        			
					confirm: {
						className : 'btn btn-warning'
					}
				},
			});
		}
		else{
			//if($('#hddMoverA').val()=="moverA" || (esduplicar==true && is_variasVeces==false)){// && esduplicar==false
			if($('#hddMoverA').val()=="moverA" || (esduplicar==true)){
				var esMover = true;
				el($("#hddMoviendoID").val(), esMover);
				$('#sesion_select').empty();
				//alert($('#sesion_select').val());
			}
			
			$('#add_ss').html('Espere un momento...'); 
			$('#add_ss').addClass('submitFormBtnBlock');
			$('#add_ss').removeClass('submitFormBtn');
			$('#add_ss').attr('disabled', 'disabled');
			sesion = $('#sesion_select').val();

			sesion = $('#sesion_select');
			week = $('#weeks_select').val();
			day = $('#days_select').val();
			string_type = 'Lunes';
			//alert($('#weeks_select').val() + " -- " + week);
			switch (day) {
				case '1':
					string_type = 'lunes';
					break;
				case '2':
					string_type = 'martes';
					break;
				case '3':
					string_type = 'miercoles';
					break;
				case '4':
					string_type = 'jueves';
					break;
				case '5':
					string_type = 'viernes';
					break;
				case '6':
					string_type = 'sabado';
					break;
				case '7':
					string_type = 'domingo';
					break;
			}

			perfilID= $("#mesocyclesmesocycle-profile_id").val();
			if(perfilID=="") perfilID=0;
			$("input:checkbox:checked").each(function() {
				//alert($(this).val());
				//alert('');
				 $.ajax({
					type: 'get',
					/*async: false,*/
					url: "/web/index.php?r=progressionsprogression/getdata",
					data: {
						"id": $(this).val(),
						"week": week,
						"day": day,
						"columnas": 12,
						"perfilID": perfilID,
						"idorgn": '30901',
						"cporgn": '',
						"origen": 'meso',
						"orgnDash": 'false',
						"perfilSelectedID": '605',
						"perfilSelectedactivo": 'NO',
					},
					success: function(data) {
						//console.log(data);
						//document.getElementById('distance_select').innerHTML = data;
						$('#' + string_type + week).append(data);
						//$('#exampleModal').modal('hide');

						totales = 0;
						$(".sum_e" + week).each(function() {
							totales = totales + Number($(this).val());
						});
						//alert(week);
						$('#ecos_tot' + week).empty();
						$('#ecos_tot' + week).append(totales);
						$('#tot_ecos_week' + week).val(totales);
						$('#hddValida').val(Number($('#hddValida').val())+1);

						$('#add_ss').html('Agregar'); 
						$('#add_ss').addClass('submitFormBtn');
						$('#add_ss').removeClass('submitFormBtnBlock');
						$('#add_ss').attr('disabled', false);
					},
					error: function(data) {
						swal("Error al guardar!", "" + data, {
							icon : "error",
							buttons: {        			
								confirm: {
									className : 'btn btn-danger'
								}
							},
						});
					},
				});
			});
			
		}
		$('#exampleModal').modal('hide');
		$("#hddMoviendoID").val("")
		$("#add_ss").html("Agregar");
		$("#add_ss").show();
		$("#btnMover").hide();
		//$("#btnPrevisualizar").hide();
		
		if($('#hddMoverA').val()=="moverA"){
			if (mensajeLanzado==0) {
				
				notificacionToast("Recuerda No Editar una Sesión hasta guardar Cambios en esta Pantalla");
			}
			else{
				mensajeLanzado=0;
			}
			/*
			swalDEL("Recuerda No Editar una Sesión hasta guardar Cambios en esta Pantalla", "", {
				icon : "warning",
				buttons: {        			
					confirm: {
						className : 'btn btn-warning'
					}
				},
			});
			/*swal("Espere un momento", {
				buttons: false,
				timer: 20000,
			});
			$('.submitFormBtn').click();
			/**/
		}
		$('#hddMoverA').val("");
		//alert(212);
    });
	
	let totalEcoZ1=0;
					dayID='1419812';
				agregarSesion(846460,0,1, 605);
								dayID='1419813';
				agregarSesion(846492,0,2, 605);
								dayID='1419814';
				agregarSesion(846467,0,3, 605);
								dayID='1419815';
				agregarSesion(846462,0,4, 605);
								dayID='1419816';
				agregarSesion(846461,0,5, 605);
								dayID='1419817';
				agregarSesion(846464,0,7, 605);
											agregarLinea();
											dayID='1419818';
				agregarSesion(846465,1,1, 605);
								dayID='1419819';
				agregarSesion(846463,1,2, 605);
								dayID='1419820';
				agregarSesion(846473,1,3, 605);
								dayID='1419821';
				agregarSesion(846468,1,4, 605);
								dayID='1419822';
				agregarSesion(846466,1,5, 605);
								dayID='1419823';
				agregarSesion(846476,1,7, 605);
											agregarLinea();
											dayID='1419824';
				agregarSesion(846471,2,1, 605);
								dayID='1419825';
				agregarSesion(846472,2,2, 605);
								dayID='1419826';
				agregarSesion(846491,2,3, 605);
								dayID='1419827';
				agregarSesion(846474,2,4, 605);
								dayID='1419828';
				agregarSesion(846493,2,5, 605);
								dayID='1419829';
				agregarSesion(846482,2,7, 605);
											agregarLinea();
											dayID='1419830';
				agregarSesion(846477,3,1, 605);
								dayID='1419831';
				agregarSesion(846478,3,2, 605);
								dayID='1419832';
				agregarSesion(846479,3,3, 605);
								dayID='1419833';
				agregarSesion(846480,3,4, 605);
								dayID='1419834';
				agregarSesion(846475,3,5, 605);
								dayID='1419835';
				agregarSesion(846485,3,7, 605);
											agregarLinea();
											dayID='1419836';
				agregarSesion(846484,4,2, 605);
								dayID='1419837';
				agregarSesion(846483,4,3, 605);
								dayID='1419838';
				agregarSesion(846497,4,4, 605);
								dayID='1419839';
				agregarSesion(846486,4,5, 605);
								dayID='1419840';
				agregarSesion(846487,4,7, 605);
							//readlines();
						totalesMinZ1 = 0;
			$(".sum_minutosZ1").each(function() {
				totalesMinZ1 = totalesMinZ1 + Number($(this).val());
			});
			$('#hddMinZona1').val(totalesMinZ1);
	
			totalesMinZ2 = 0;
			$(".sum_minutosZ2").each(function() {
				totalesMinZ2 = totalesMinZ2 + Number($(this).val());
			});
			$('#hddMinZona2').val(totalesMinZ2);
	
			totalesMinZ3 = 0;
			$(".sum_minutosZ3").each(function() {
				totalesMinZ3 = totalesMinZ3 + Number($(this).val());
			});
			$('#hddMinZona3').val(totalesMinZ3);
	
			totalesMinZ4 = 0;
			$(".sum_minutosZ4").each(function() {
				totalesMinZ4 = totalesMinZ4 + Number($(this).val());
			});
			$('#hddMinZona4').val(totalesMinZ4);
				
			totalMinGlobales = 0;
			$(".sum_mintosTotalesGlobal").each(function() {
				totalMinGlobales = totalMinGlobales + Number($(this).val());
			});
	
			let horas= (totalesMinZ1+totalesMinZ2+totalesMinZ3+totalesMinZ4)/60;
			horas= totalMinGlobales/60;
			//let horas= totalMinGlobales/60;
			$('#divHoras').empty();
			$('#divHoras').append(horas.toFixed(1));
			let Fase1 = totalesMinZ1 + (0.5 * totalesMinZ2)
			let Fase2 = (0.5 * totalesMinZ2) + totalesMinZ3
			let Fase3 = totalesMinZ4;
			let totalFases = Fase1+Fase2+Fase3;
			let porcentajeTiempoF1 = (Fase1*100)/totalFases;
			let porcentajeTiempoF2 = (Fase2*100)/totalFases;
			let porcentajeTiempoF3 = (Fase3*100)/totalFases;
			$('#tdTiempo1').empty();
			$('#tdTiempo1').append(porcentajeTiempoF1.toFixed(0));
			$('#tdTiempo2').empty();
			$('#tdTiempo2').append(porcentajeTiempoF2.toFixed(0));
			$('#tdTiempo3').empty();
			$('#tdTiempo3').append(porcentajeTiempoF3.toFixed(0));
			//alert(totalFases);
			//let porcentajeCargaF1 = (sumaEcosFase*100)/$sumaEcosTotal
			//var 
			totalesEcosZ1 = 0;
			$(".sum_ecosZ1").each(function() {
				//alert(Number($(this).val()));
				totalesEcosZ1 = Number(totalesEcosZ1) + Number($(this).val());
				//alert(totalEcoZ1);
			});
			//alert(80);
			$('#hddEcosZona1').val(totalesEcosZ1);
	
			//alert(81);
			totalesEcosZ2 = 0;
			$(".sum_ecosZ2").each(function() {
				totalesEcosZ2 = totalesEcosZ2 + Number($(this).val());
			});
			$('#hddEcosZona2').val(totalesEcosZ2);
	
			totalesEcosZ3 = 0;
			$(".sum_ecosZ3").each(function() {
				totalesEcosZ3 = totalesEcosZ3 + Number($(this).val());
			});
			$('#hddEcosZona3').val(totalesEcosZ3);
	
			totalesEcosZ4 = 0;
			$(".sum_ecosZ4").each(function() {
				totalesEcosZ4 = totalesEcosZ4 + Number($(this).val());
				//alert(7);
			});
			$('#hddEcosZona4').val(totalesEcosZ4);
	
			totalesEcosFuerza = 0;
			$(".sum_ecosFuerza").each(function() {
				totalesEcosFuerza = totalesEcosFuerza + Number($(this).val());
				//alert(7);
			});
			$('#hddEcosFuerza').val(totalesEcosFuerza);
			$('#divEcosFuerza').html(totalesEcosFuerza);
			
			totalesEcosGlobal = 0;
			$(".sum_ecosTotales").each(function() {
				totalesEcosGlobal = totalesEcosGlobal + Number($(this).val());
				//alert(7);
			});
			$('#divtotalEcos').html(Math.round(totalesEcosGlobal+totalesEcosFuerza));
			$('#hddtotalEcos').val(Math.round(totalesEcosGlobal));
			
			//carrera
			mintosTotales = 0;
			$(".sum_mintosTotalesCarrera").each(function() {
				mintosTotales = mintosTotales + Number($(this).val());
			});
			//alert(mintosTotales);
			$('#totaKm_carrera').html(parseFloat(mintosTotales).toFixed(1));
			$('#hddMinutosTotales').val(mintosTotales);
			
			//ciclismo
			mintosTotales = 0;
			$(".sum_mintosTotalesCiclismo").each(function() {
				mintosTotales = mintosTotales + Number($(this).val());
			});
			$('#totaKm_ciclismo').html(mintosTotales);
			
			//natacion
			mintosTotales = 0;
			$(".sum_mintosTotalesNatacion").each(function() {
				mintosTotales = mintosTotales + Number($(this).val());
			});
			$('#totaKm_natacion').html(Number(mintosTotales).toFixed(1));
		
	
			ecosTotalesN = 0;
			$(".sum_ecosTotalesNatacion").each(function() {
				ecosTotalesN = ecosTotalesN + Number($(this).val());
			});
			$('#divEcosTotalesN').html(ecosTotalesN);
	
			ecosTotalesB = 0;
			$(".sum_ecosTotalesCiclismo").each(function() {
				ecosTotalesB = ecosTotalesB + Number($(this).val());
			});
			$('#divEcosTotalesB').html(ecosTotalesB);
	
			ecosTotalesC = 0;
			$(".sum_ecosTotalesCarrera").each(function() {
				ecosTotalesC = ecosTotalesC + Number($(this).val());
			});
			$('#divEcosTotalesC').html(ecosTotalesC);
			
	
			let ecosFase1 = totalesEcosZ1 + (0.5 * totalesEcosZ2)
			let ecosFase2 = (0.5 * totalesEcosZ2) + totalesEcosZ3
			let ecosFase3 = totalesEcosZ4;
			let totalecosFases = ecosFase1+ecosFase2+ecosFase3;
			let porcentajeCargaF1 = (ecosFase1*100)/totalecosFases;
			let porcentajeCargaF2 = (ecosFase2*100)/totalecosFases;
			let porcentajeCargaF3 = (ecosFase3*100)/totalecosFases;
			$('#tdCarga1').empty();
			$('#tdCarga1').append(porcentajeCargaF1.toFixed(0));
			$('#tdCarga2').empty();
			$('#tdCarga2').append(porcentajeCargaF2.toFixed(0));
			$('#tdCarga3').empty();
			porcentajeCargaF3 = 100-(Math.round(porcentajeCargaF1) + Math.round(porcentajeCargaF2));
			//alert(Math.round(porcentajeCargaF1) + ' ' + porcentajeCargaF2.toFixed(0));
			$('#tdCarga3').append(porcentajeCargaF3.toFixed(0));
			
			//alert("total 3 fases= "+totalecosFases);
			let ecosFuerza= totalesEcosFuerza;
			totalecosFases = totalecosFases + ecosFuerza;
			let porcentajeCargaTotalF1 = (ecosFase1*100)/totalecosFases;
			let porcentajeCargaTotalF2 = (ecosFase2*100)/totalecosFases;
			let porcentajeCargaTotalF3 = (ecosFase3*100)/totalecosFases;
			
			/*alert("total 3 fases + esfuerzo= "+totalecosFases);
			alert("Ecos F1= " + ecosFase1 + ' - ' + "Ecos F2= " + ecosFase2 + ' - ' + "Ecos F3= " + ecosFase3);
			alert(porcentajeCargaF1 + ' - ' + porcentajeCargaTotalF1);
			alert(porcentajeCargaF2 + ' - ' + porcentajeCargaTotalF2);
			alert(porcentajeCargaF3 + ' - ' + porcentajeCargaTotalF3);
			*/
			
			
			$('#tdCargaTotal1').empty();
			$('#tdCargaTotal1').append(porcentajeCargaTotalF1.toFixed(0));
			$('#tdCargaTotal2').empty();
			$('#tdCargaTotal2').append(porcentajeCargaTotalF2.toFixed(0));
			$('#tdCargaTotal3').empty();
			porcentajeCargaTotalF3 = 100-(Math.round(porcentajeCargaTotalF1)+Math.round(porcentajeCargaTotalF2));
			$('#tdCargaTotal3').append(porcentajeCargaTotalF3.toFixed(0));
			
			if(1==1){
											week=0;
							totalMinSemanaZ1 = 0;
							$(".sum_min_weekZ1" + week).each(function() {
								totalMinSemanaZ1 = totalMinSemanaZ1 + Number($(this).val());
							});
							$('#hddMinZona1' + week).val(totalMinSemanaZ1);

							totalMinSemanaZ2 = 0;
							$(".sum_min_weekZ2" + week).each(function() {
								totalMinSemanaZ2 = totalMinSemanaZ2 + Number($(this).val());
							});
							$('#hddMinZona2' + week).val(totalMinSemanaZ2);

							totalMinSemanaZ3 = 0;
							$(".sum_min_weekZ3" + week).each(function() {
								totalMinSemanaZ3 = totalMinSemanaZ3 + Number($(this).val());
							});
							$('#hddMinZona3' + week).val(totalMinSemanaZ3);

							totalMinSemanaZ4 = 0;
							$(".sum_min_weekZ4" + week).each(function() {
								totalMinSemanaZ4 = totalMinSemanaZ4 + Number($(this).val());
							});
							$('#hddMinZona4' + week).val(totalMinSemanaZ4);

							totalMinGlobales = 0;
							$(".sum_mintosTotalesGlobal_week" + week).each(function() {
								totalMinGlobales = totalMinGlobales + Number($(this).val());
							});


							//minutos por deporte
							/*totalMinCarrera = 0;
							$(".sum_minutosCarrera_week" + week).each(function() {
								totalMinCarrera = totalMinCarrera + Number($(this).val());
							});
							$('#spanTimeCarreraZ' + week).html(totalMinCarrera);

							totalMinCiclismo = 0;
							$(".sum_minutosCiclismo_week" + week).each(function() {
								totalMinCiclismo = totalMinCiclismo + Number($(this).val());
							});
							//$('#spanTimeCiclismoZ' + week).html(totalMinCiclismo);

							totalMinNatacion = 0;
							$(".sum_minutosNatacion_week" + week).each(function() {
								totalMinNatacion = totalMinNatacion + Number($(this).val());
							});
							$('#spanTimeNatacionZ' + week).html(totalMinNatacion);*/
							//fin minutos por deporte

							if(1==1){
								//carrera
								mintosTotales = 0;
								$(".sum_mintosTotalesC_week" + week).each(function() {
									mintosTotales = mintosTotales + Number($(this).val());
								});
								$('#totaKm_carrera' + week).html(parseFloat(mintosTotales).toFixed(1));

								//ciclismo
								mintosTotales = 0;
								$(".sum_mintosTotalesB_week" + week).each(function() {
									mintosTotales = mintosTotales + Number($(this).val());
								});
								$('#totaKm_ciclismo' + week).html(mintosTotales);

								//natacion
								mintosTotales = 0;
								$(".sum_mintosTotalesN_week" + week).each(function() {
									mintosTotales = mintosTotales + Number($(this).val());
								});
								$('#totaKm_natacion' + week).html(Number(mintosTotales).toFixed(1));



								ecosTotalesN = 0;
								$(".sum_ecosTotalesN_week" + week).each(function() {
									ecosTotalesN = ecosTotalesN + Number($(this).val());
								});
								$('#tdSumaEcosNatacion' + week).append(ecosTotalesN);

								ecosTotalesB = 0;
								$(".sum_ecosTotalesB_week" + week).each(function() {
									ecosTotalesB = ecosTotalesB + Number($(this).val());
								});
								$('#tdSumaEcosCiclismo' + week).append(ecosTotalesB);


								ecosTotalesC = 0;
								$(".sum_ecosTotalesC_week" + week).each(function() {
									ecosTotalesC = ecosTotalesC + Number($(this).val());
								});
								$('#tdSumaEcosCarrera' + week).html(ecosTotalesC);


								ecosTotalesE = 0;
								$(".sum_ecos_Fuerza_week" + week).each(function() {
									ecosTotalesE = ecosTotalesE + Number($(this).val());
								});
								$('#tdSumaEcosEsfuerzo' + week).append(ecosTotalesE);

							}
							horasCal= totalMinGlobales/60;
							//totalMinSemanaZ4= totalMinGlobales-(totalMinSemanaZ1+totalMinSemanaZ2+totalMinSemanaZ3);

							$('#divHoras' + week).empty();
							$('#divHoras' + week).append(horasCal.toFixed(1));
							Fase1 = totalMinSemanaZ1 + (0.5 * totalMinSemanaZ2)
							Fase2 = (0.5 * totalMinSemanaZ2) + totalMinSemanaZ3
							Fase3 = totalMinSemanaZ4;
							totalFases = Fase1+Fase2+Fase3;
							porcentajeTiempoF1 = (Fase1*100)/totalFases;
							porcentajeTiempoF2 = (Fase2*100)/totalFases;
							porcentajeTiempoF3 = (Fase3*100)/totalFases;
							$('#tdTiempo1' + week).empty();
							$('#tdTiempo1' + week).append(porcentajeTiempoF1.toFixed(0));
							$('#tdTiempo2' + week).empty();
							$('#tdTiempo2' + week).append(porcentajeTiempoF2.toFixed(0));
							$('#tdTiempo3' + week).empty();
							$('#tdTiempo3' + week).append(porcentajeTiempoF3.toFixed(0));
							/*if(Fase1==260)
								alert(porcentajeTiempoF1 + " - " + porcentajeTiempoF2 + " - " + porcentajeTiempoF3 + " - " + totalMinSemanaZ4 + " - " + totalFases + " - " + week + "||" + Fase1 + " - " + Fase2 + " - " + Fase3);
								*/
							totalesEcosSemanalZ1= 0;
							$(".sum_ecos_weekZ1" + week).each(function() {
								//alert(Number($(this).val()));
								totalesEcosSemanalZ1 = Number(totalesEcosSemanalZ1) + Number($(this).val());
								//alert(totalEcoZ1);
							});
							//alert(80);
							$('#hddEcosZona1' + week).val(totalesEcosSemanalZ1);

							//alert(81);
							totalesEcosZ2 = 0;
							$(".sum_ecos_weekZ2" + week).each(function() {
								totalesEcosZ2 = totalesEcosZ2 + Number($(this).val());
							});
							$('#hddEcosZona2' + week).val(totalesEcosZ2);

							totalesEcosZ3 = 0;
							$(".sum_ecos_weekZ3" + week).each(function() {
								totalesEcosZ3 = totalesEcosZ3 + Number($(this).val());
							});
							$('#hddEcosZona3' + week).val(totalesEcosZ3);

							totalesEcosZ4 = 0;
							$(".sum_ecos_weekZ4" + week).each(function() {
								totalesEcosZ4 = totalesEcosZ4 + Number($(this).val());
								//alert(7);
							});
							$('#hddEcosZona4' + week).val(totalesEcosZ4);

							totalesEcosFuerza = 0;
							$(".sum_ecos_Fuerza_week" + week).each(function() {
								totalesEcosFuerza = totalesEcosFuerza + Number($(this).val());
							});
							$('#hddEcosFuerza' + week).val(totalesEcosFuerza);



							//alert(totalesEcosSemanalZ1+totalesEcosZ2+totalesEcosZ3+totalesEcosZ4);
							ecosFase1 = totalesEcosSemanalZ1 + (0.5 * totalesEcosZ2)
							ecosFase2 = (0.5 * totalesEcosZ2) + totalesEcosZ3
							ecosFase3 = totalesEcosZ4;
							totalecosFases = ecosFase1+ecosFase2+ecosFase3;
							porcentajeCargaF1 = (ecosFase1*100)/totalecosFases;
							porcentajeCargaF2 = (ecosFase2*100)/totalecosFases;
							porcentajeCargaF3 = (ecosFase3*100)/totalecosFases;
							$('#tdCarga1' + week).empty();
							$('#tdCarga1' + week).append(porcentajeCargaF1.toFixed(0));
							$('#tdCarga2' + week).empty();
							$('#tdCarga2' + week).append(porcentajeCargaF2.toFixed(0));
							$('#tdCarga3' + week).empty();
							porcentajeCargaF3 = 100-(Math.round(porcentajeCargaF1)+Math.round(porcentajeCargaF2));
							$('#tdCarga3' + week).append(porcentajeCargaF3.toFixed(0));

							ecosFuerza= totalesEcosFuerza;
							totalecosFases = totalecosFases + ecosFuerza;
							porcentajeCargaTotalF1 = (ecosFase1*100)/totalecosFases;
							porcentajeCargaTotalF2 = (ecosFase2*100)/totalecosFases;
							porcentajeCargaTotalF3 = (ecosFase3*100)/totalecosFases;
							$('#tdCargaTotal1' + week).empty();
							$('#tdCargaTotal1' + week).append(porcentajeCargaTotalF1.toFixed(0));
							$('#tdCargaTotal2' + week).empty();
							$('#tdCargaTotal2' + week).append(porcentajeCargaTotalF2.toFixed(0));
							$('#tdCargaTotal3' + week).empty();
							porcentajeCargaTotalF3 = 100-(Math.round(porcentajeCargaTotalF1)+Math.round(porcentajeCargaTotalF2));
							$('#tdCargaTotal3' + week).append(porcentajeCargaTotalF3.toFixed(0));
							//alert($('#divEstadisticaSemanal2_' + week).html());
							$('#divSemanaFila1_' + week).html($('#divEstadisticaSemanal1_' + week).html());
							$('#divSemanaFila2_' + week).html($('#divEstadisticaSemanal2_' + week).html());
							$('#divSemanaFila3_' + week).html($('#divEstadisticaSemanal3_' + week).html());
							$('#divSemanaFila4_' + week).html($('#divEstadisticaSemanal4_' + week).html());
							$('#divSemanaFila5_' + week).html($('#divEstadisticaSemanal5_' + week).html());

							$('#divSenamaCuadroEstadisticas' + week).html($('#divCuadroEstadisticas' + week).html());

							///copia detalle
							/*var totalesPorSemanna = 0;
							$(".sum_e" + week).each(function() {
								totalesPorSemanna = totalesPorSemanna + Number($(this).val());
							});
							//alert(day + " - " + string_type + week);
							totalesPorSemanna = totalesPorSemanna + totalesEcosFuerza;
							//alert(totales + ' - ' + totalesEcosFuerza);
							$('#ecos_tot' + week).empty();
							$('#ecos_tot' + week).append(totalesPorSemanna);
							$('#tot_ecos_week' + week).val(totalesPorSemanna);
							var sumEcosPorDetporte = ecosTotalesC+ecosTotalesN+ecosTotalesB+ecosTotalesE;
							//alert('divSumaEcosSemana'+ week + ' - ' + sumEcosPorDetporte);
							$('#divSumaEcosSemana' + week).html(sumEcosPorDetporte);*/
							///fin copia detalle


														week=1;
							totalMinSemanaZ1 = 0;
							$(".sum_min_weekZ1" + week).each(function() {
								totalMinSemanaZ1 = totalMinSemanaZ1 + Number($(this).val());
							});
							$('#hddMinZona1' + week).val(totalMinSemanaZ1);

							totalMinSemanaZ2 = 0;
							$(".sum_min_weekZ2" + week).each(function() {
								totalMinSemanaZ2 = totalMinSemanaZ2 + Number($(this).val());
							});
							$('#hddMinZona2' + week).val(totalMinSemanaZ2);

							totalMinSemanaZ3 = 0;
							$(".sum_min_weekZ3" + week).each(function() {
								totalMinSemanaZ3 = totalMinSemanaZ3 + Number($(this).val());
							});
							$('#hddMinZona3' + week).val(totalMinSemanaZ3);

							totalMinSemanaZ4 = 0;
							$(".sum_min_weekZ4" + week).each(function() {
								totalMinSemanaZ4 = totalMinSemanaZ4 + Number($(this).val());
							});
							$('#hddMinZona4' + week).val(totalMinSemanaZ4);

							totalMinGlobales = 0;
							$(".sum_mintosTotalesGlobal_week" + week).each(function() {
								totalMinGlobales = totalMinGlobales + Number($(this).val());
							});


							//minutos por deporte
							/*totalMinCarrera = 0;
							$(".sum_minutosCarrera_week" + week).each(function() {
								totalMinCarrera = totalMinCarrera + Number($(this).val());
							});
							$('#spanTimeCarreraZ' + week).html(totalMinCarrera);

							totalMinCiclismo = 0;
							$(".sum_minutosCiclismo_week" + week).each(function() {
								totalMinCiclismo = totalMinCiclismo + Number($(this).val());
							});
							//$('#spanTimeCiclismoZ' + week).html(totalMinCiclismo);

							totalMinNatacion = 0;
							$(".sum_minutosNatacion_week" + week).each(function() {
								totalMinNatacion = totalMinNatacion + Number($(this).val());
							});
							$('#spanTimeNatacionZ' + week).html(totalMinNatacion);*/
							//fin minutos por deporte

							if(1==1){
								//carrera
								mintosTotales = 0;
								$(".sum_mintosTotalesC_week" + week).each(function() {
									mintosTotales = mintosTotales + Number($(this).val());
								});
								$('#totaKm_carrera' + week).html(parseFloat(mintosTotales).toFixed(1));

								//ciclismo
								mintosTotales = 0;
								$(".sum_mintosTotalesB_week" + week).each(function() {
									mintosTotales = mintosTotales + Number($(this).val());
								});
								$('#totaKm_ciclismo' + week).html(mintosTotales);

								//natacion
								mintosTotales = 0;
								$(".sum_mintosTotalesN_week" + week).each(function() {
									mintosTotales = mintosTotales + Number($(this).val());
								});
								$('#totaKm_natacion' + week).html(Number(mintosTotales).toFixed(1));



								ecosTotalesN = 0;
								$(".sum_ecosTotalesN_week" + week).each(function() {
									ecosTotalesN = ecosTotalesN + Number($(this).val());
								});
								$('#tdSumaEcosNatacion' + week).append(ecosTotalesN);

								ecosTotalesB = 0;
								$(".sum_ecosTotalesB_week" + week).each(function() {
									ecosTotalesB = ecosTotalesB + Number($(this).val());
								});
								$('#tdSumaEcosCiclismo' + week).append(ecosTotalesB);


								ecosTotalesC = 0;
								$(".sum_ecosTotalesC_week" + week).each(function() {
									ecosTotalesC = ecosTotalesC + Number($(this).val());
								});
								$('#tdSumaEcosCarrera' + week).html(ecosTotalesC);


								ecosTotalesE = 0;
								$(".sum_ecos_Fuerza_week" + week).each(function() {
									ecosTotalesE = ecosTotalesE + Number($(this).val());
								});
								$('#tdSumaEcosEsfuerzo' + week).append(ecosTotalesE);

							}
							horasCal= totalMinGlobales/60;
							//totalMinSemanaZ4= totalMinGlobales-(totalMinSemanaZ1+totalMinSemanaZ2+totalMinSemanaZ3);

							$('#divHoras' + week).empty();
							$('#divHoras' + week).append(horasCal.toFixed(1));
							Fase1 = totalMinSemanaZ1 + (0.5 * totalMinSemanaZ2)
							Fase2 = (0.5 * totalMinSemanaZ2) + totalMinSemanaZ3
							Fase3 = totalMinSemanaZ4;
							totalFases = Fase1+Fase2+Fase3;
							porcentajeTiempoF1 = (Fase1*100)/totalFases;
							porcentajeTiempoF2 = (Fase2*100)/totalFases;
							porcentajeTiempoF3 = (Fase3*100)/totalFases;
							$('#tdTiempo1' + week).empty();
							$('#tdTiempo1' + week).append(porcentajeTiempoF1.toFixed(0));
							$('#tdTiempo2' + week).empty();
							$('#tdTiempo2' + week).append(porcentajeTiempoF2.toFixed(0));
							$('#tdTiempo3' + week).empty();
							$('#tdTiempo3' + week).append(porcentajeTiempoF3.toFixed(0));
							/*if(Fase1==260)
								alert(porcentajeTiempoF1 + " - " + porcentajeTiempoF2 + " - " + porcentajeTiempoF3 + " - " + totalMinSemanaZ4 + " - " + totalFases + " - " + week + "||" + Fase1 + " - " + Fase2 + " - " + Fase3);
								*/
							totalesEcosSemanalZ1= 0;
							$(".sum_ecos_weekZ1" + week).each(function() {
								//alert(Number($(this).val()));
								totalesEcosSemanalZ1 = Number(totalesEcosSemanalZ1) + Number($(this).val());
								//alert(totalEcoZ1);
							});
							//alert(80);
							$('#hddEcosZona1' + week).val(totalesEcosSemanalZ1);

							//alert(81);
							totalesEcosZ2 = 0;
							$(".sum_ecos_weekZ2" + week).each(function() {
								totalesEcosZ2 = totalesEcosZ2 + Number($(this).val());
							});
							$('#hddEcosZona2' + week).val(totalesEcosZ2);

							totalesEcosZ3 = 0;
							$(".sum_ecos_weekZ3" + week).each(function() {
								totalesEcosZ3 = totalesEcosZ3 + Number($(this).val());
							});
							$('#hddEcosZona3' + week).val(totalesEcosZ3);

							totalesEcosZ4 = 0;
							$(".sum_ecos_weekZ4" + week).each(function() {
								totalesEcosZ4 = totalesEcosZ4 + Number($(this).val());
								//alert(7);
							});
							$('#hddEcosZona4' + week).val(totalesEcosZ4);

							totalesEcosFuerza = 0;
							$(".sum_ecos_Fuerza_week" + week).each(function() {
								totalesEcosFuerza = totalesEcosFuerza + Number($(this).val());
							});
							$('#hddEcosFuerza' + week).val(totalesEcosFuerza);



							//alert(totalesEcosSemanalZ1+totalesEcosZ2+totalesEcosZ3+totalesEcosZ4);
							ecosFase1 = totalesEcosSemanalZ1 + (0.5 * totalesEcosZ2)
							ecosFase2 = (0.5 * totalesEcosZ2) + totalesEcosZ3
							ecosFase3 = totalesEcosZ4;
							totalecosFases = ecosFase1+ecosFase2+ecosFase3;
							porcentajeCargaF1 = (ecosFase1*100)/totalecosFases;
							porcentajeCargaF2 = (ecosFase2*100)/totalecosFases;
							porcentajeCargaF3 = (ecosFase3*100)/totalecosFases;
							$('#tdCarga1' + week).empty();
							$('#tdCarga1' + week).append(porcentajeCargaF1.toFixed(0));
							$('#tdCarga2' + week).empty();
							$('#tdCarga2' + week).append(porcentajeCargaF2.toFixed(0));
							$('#tdCarga3' + week).empty();
							porcentajeCargaF3 = 100-(Math.round(porcentajeCargaF1)+Math.round(porcentajeCargaF2));
							$('#tdCarga3' + week).append(porcentajeCargaF3.toFixed(0));

							ecosFuerza= totalesEcosFuerza;
							totalecosFases = totalecosFases + ecosFuerza;
							porcentajeCargaTotalF1 = (ecosFase1*100)/totalecosFases;
							porcentajeCargaTotalF2 = (ecosFase2*100)/totalecosFases;
							porcentajeCargaTotalF3 = (ecosFase3*100)/totalecosFases;
							$('#tdCargaTotal1' + week).empty();
							$('#tdCargaTotal1' + week).append(porcentajeCargaTotalF1.toFixed(0));
							$('#tdCargaTotal2' + week).empty();
							$('#tdCargaTotal2' + week).append(porcentajeCargaTotalF2.toFixed(0));
							$('#tdCargaTotal3' + week).empty();
							porcentajeCargaTotalF3 = 100-(Math.round(porcentajeCargaTotalF1)+Math.round(porcentajeCargaTotalF2));
							$('#tdCargaTotal3' + week).append(porcentajeCargaTotalF3.toFixed(0));
							//alert($('#divEstadisticaSemanal2_' + week).html());
							$('#divSemanaFila1_' + week).html($('#divEstadisticaSemanal1_' + week).html());
							$('#divSemanaFila2_' + week).html($('#divEstadisticaSemanal2_' + week).html());
							$('#divSemanaFila3_' + week).html($('#divEstadisticaSemanal3_' + week).html());
							$('#divSemanaFila4_' + week).html($('#divEstadisticaSemanal4_' + week).html());
							$('#divSemanaFila5_' + week).html($('#divEstadisticaSemanal5_' + week).html());

							$('#divSenamaCuadroEstadisticas' + week).html($('#divCuadroEstadisticas' + week).html());

							///copia detalle
							/*var totalesPorSemanna = 0;
							$(".sum_e" + week).each(function() {
								totalesPorSemanna = totalesPorSemanna + Number($(this).val());
							});
							//alert(day + " - " + string_type + week);
							totalesPorSemanna = totalesPorSemanna + totalesEcosFuerza;
							//alert(totales + ' - ' + totalesEcosFuerza);
							$('#ecos_tot' + week).empty();
							$('#ecos_tot' + week).append(totalesPorSemanna);
							$('#tot_ecos_week' + week).val(totalesPorSemanna);
							var sumEcosPorDetporte = ecosTotalesC+ecosTotalesN+ecosTotalesB+ecosTotalesE;
							//alert('divSumaEcosSemana'+ week + ' - ' + sumEcosPorDetporte);
							$('#divSumaEcosSemana' + week).html(sumEcosPorDetporte);*/
							///fin copia detalle


														week=2;
							totalMinSemanaZ1 = 0;
							$(".sum_min_weekZ1" + week).each(function() {
								totalMinSemanaZ1 = totalMinSemanaZ1 + Number($(this).val());
							});
							$('#hddMinZona1' + week).val(totalMinSemanaZ1);

							totalMinSemanaZ2 = 0;
							$(".sum_min_weekZ2" + week).each(function() {
								totalMinSemanaZ2 = totalMinSemanaZ2 + Number($(this).val());
							});
							$('#hddMinZona2' + week).val(totalMinSemanaZ2);

							totalMinSemanaZ3 = 0;
							$(".sum_min_weekZ3" + week).each(function() {
								totalMinSemanaZ3 = totalMinSemanaZ3 + Number($(this).val());
							});
							$('#hddMinZona3' + week).val(totalMinSemanaZ3);

							totalMinSemanaZ4 = 0;
							$(".sum_min_weekZ4" + week).each(function() {
								totalMinSemanaZ4 = totalMinSemanaZ4 + Number($(this).val());
							});
							$('#hddMinZona4' + week).val(totalMinSemanaZ4);

							totalMinGlobales = 0;
							$(".sum_mintosTotalesGlobal_week" + week).each(function() {
								totalMinGlobales = totalMinGlobales + Number($(this).val());
							});


							//minutos por deporte
							/*totalMinCarrera = 0;
							$(".sum_minutosCarrera_week" + week).each(function() {
								totalMinCarrera = totalMinCarrera + Number($(this).val());
							});
							$('#spanTimeCarreraZ' + week).html(totalMinCarrera);

							totalMinCiclismo = 0;
							$(".sum_minutosCiclismo_week" + week).each(function() {
								totalMinCiclismo = totalMinCiclismo + Number($(this).val());
							});
							//$('#spanTimeCiclismoZ' + week).html(totalMinCiclismo);

							totalMinNatacion = 0;
							$(".sum_minutosNatacion_week" + week).each(function() {
								totalMinNatacion = totalMinNatacion + Number($(this).val());
							});
							$('#spanTimeNatacionZ' + week).html(totalMinNatacion);*/
							//fin minutos por deporte

							if(1==1){
								//carrera
								mintosTotales = 0;
								$(".sum_mintosTotalesC_week" + week).each(function() {
									mintosTotales = mintosTotales + Number($(this).val());
								});
								$('#totaKm_carrera' + week).html(parseFloat(mintosTotales).toFixed(1));

								//ciclismo
								mintosTotales = 0;
								$(".sum_mintosTotalesB_week" + week).each(function() {
									mintosTotales = mintosTotales + Number($(this).val());
								});
								$('#totaKm_ciclismo' + week).html(mintosTotales);

								//natacion
								mintosTotales = 0;
								$(".sum_mintosTotalesN_week" + week).each(function() {
									mintosTotales = mintosTotales + Number($(this).val());
								});
								$('#totaKm_natacion' + week).html(Number(mintosTotales).toFixed(1));



								ecosTotalesN = 0;
								$(".sum_ecosTotalesN_week" + week).each(function() {
									ecosTotalesN = ecosTotalesN + Number($(this).val());
								});
								$('#tdSumaEcosNatacion' + week).append(ecosTotalesN);

								ecosTotalesB = 0;
								$(".sum_ecosTotalesB_week" + week).each(function() {
									ecosTotalesB = ecosTotalesB + Number($(this).val());
								});
								$('#tdSumaEcosCiclismo' + week).append(ecosTotalesB);


								ecosTotalesC = 0;
								$(".sum_ecosTotalesC_week" + week).each(function() {
									ecosTotalesC = ecosTotalesC + Number($(this).val());
								});
								$('#tdSumaEcosCarrera' + week).html(ecosTotalesC);


								ecosTotalesE = 0;
								$(".sum_ecos_Fuerza_week" + week).each(function() {
									ecosTotalesE = ecosTotalesE + Number($(this).val());
								});
								$('#tdSumaEcosEsfuerzo' + week).append(ecosTotalesE);

							}
							horasCal= totalMinGlobales/60;
							//totalMinSemanaZ4= totalMinGlobales-(totalMinSemanaZ1+totalMinSemanaZ2+totalMinSemanaZ3);

							$('#divHoras' + week).empty();
							$('#divHoras' + week).append(horasCal.toFixed(1));
							Fase1 = totalMinSemanaZ1 + (0.5 * totalMinSemanaZ2)
							Fase2 = (0.5 * totalMinSemanaZ2) + totalMinSemanaZ3
							Fase3 = totalMinSemanaZ4;
							totalFases = Fase1+Fase2+Fase3;
							porcentajeTiempoF1 = (Fase1*100)/totalFases;
							porcentajeTiempoF2 = (Fase2*100)/totalFases;
							porcentajeTiempoF3 = (Fase3*100)/totalFases;
							$('#tdTiempo1' + week).empty();
							$('#tdTiempo1' + week).append(porcentajeTiempoF1.toFixed(0));
							$('#tdTiempo2' + week).empty();
							$('#tdTiempo2' + week).append(porcentajeTiempoF2.toFixed(0));
							$('#tdTiempo3' + week).empty();
							$('#tdTiempo3' + week).append(porcentajeTiempoF3.toFixed(0));
							/*if(Fase1==260)
								alert(porcentajeTiempoF1 + " - " + porcentajeTiempoF2 + " - " + porcentajeTiempoF3 + " - " + totalMinSemanaZ4 + " - " + totalFases + " - " + week + "||" + Fase1 + " - " + Fase2 + " - " + Fase3);
								*/
							totalesEcosSemanalZ1= 0;
							$(".sum_ecos_weekZ1" + week).each(function() {
								//alert(Number($(this).val()));
								totalesEcosSemanalZ1 = Number(totalesEcosSemanalZ1) + Number($(this).val());
								//alert(totalEcoZ1);
							});
							//alert(80);
							$('#hddEcosZona1' + week).val(totalesEcosSemanalZ1);

							//alert(81);
							totalesEcosZ2 = 0;
							$(".sum_ecos_weekZ2" + week).each(function() {
								totalesEcosZ2 = totalesEcosZ2 + Number($(this).val());
							});
							$('#hddEcosZona2' + week).val(totalesEcosZ2);

							totalesEcosZ3 = 0;
							$(".sum_ecos_weekZ3" + week).each(function() {
								totalesEcosZ3 = totalesEcosZ3 + Number($(this).val());
							});
							$('#hddEcosZona3' + week).val(totalesEcosZ3);

							totalesEcosZ4 = 0;
							$(".sum_ecos_weekZ4" + week).each(function() {
								totalesEcosZ4 = totalesEcosZ4 + Number($(this).val());
								//alert(7);
							});
							$('#hddEcosZona4' + week).val(totalesEcosZ4);

							totalesEcosFuerza = 0;
							$(".sum_ecos_Fuerza_week" + week).each(function() {
								totalesEcosFuerza = totalesEcosFuerza + Number($(this).val());
							});
							$('#hddEcosFuerza' + week).val(totalesEcosFuerza);



							//alert(totalesEcosSemanalZ1+totalesEcosZ2+totalesEcosZ3+totalesEcosZ4);
							ecosFase1 = totalesEcosSemanalZ1 + (0.5 * totalesEcosZ2)
							ecosFase2 = (0.5 * totalesEcosZ2) + totalesEcosZ3
							ecosFase3 = totalesEcosZ4;
							totalecosFases = ecosFase1+ecosFase2+ecosFase3;
							porcentajeCargaF1 = (ecosFase1*100)/totalecosFases;
							porcentajeCargaF2 = (ecosFase2*100)/totalecosFases;
							porcentajeCargaF3 = (ecosFase3*100)/totalecosFases;
							$('#tdCarga1' + week).empty();
							$('#tdCarga1' + week).append(porcentajeCargaF1.toFixed(0));
							$('#tdCarga2' + week).empty();
							$('#tdCarga2' + week).append(porcentajeCargaF2.toFixed(0));
							$('#tdCarga3' + week).empty();
							porcentajeCargaF3 = 100-(Math.round(porcentajeCargaF1)+Math.round(porcentajeCargaF2));
							$('#tdCarga3' + week).append(porcentajeCargaF3.toFixed(0));

							ecosFuerza= totalesEcosFuerza;
							totalecosFases = totalecosFases + ecosFuerza;
							porcentajeCargaTotalF1 = (ecosFase1*100)/totalecosFases;
							porcentajeCargaTotalF2 = (ecosFase2*100)/totalecosFases;
							porcentajeCargaTotalF3 = (ecosFase3*100)/totalecosFases;
							$('#tdCargaTotal1' + week).empty();
							$('#tdCargaTotal1' + week).append(porcentajeCargaTotalF1.toFixed(0));
							$('#tdCargaTotal2' + week).empty();
							$('#tdCargaTotal2' + week).append(porcentajeCargaTotalF2.toFixed(0));
							$('#tdCargaTotal3' + week).empty();
							porcentajeCargaTotalF3 = 100-(Math.round(porcentajeCargaTotalF1)+Math.round(porcentajeCargaTotalF2));
							$('#tdCargaTotal3' + week).append(porcentajeCargaTotalF3.toFixed(0));
							//alert($('#divEstadisticaSemanal2_' + week).html());
							$('#divSemanaFila1_' + week).html($('#divEstadisticaSemanal1_' + week).html());
							$('#divSemanaFila2_' + week).html($('#divEstadisticaSemanal2_' + week).html());
							$('#divSemanaFila3_' + week).html($('#divEstadisticaSemanal3_' + week).html());
							$('#divSemanaFila4_' + week).html($('#divEstadisticaSemanal4_' + week).html());
							$('#divSemanaFila5_' + week).html($('#divEstadisticaSemanal5_' + week).html());

							$('#divSenamaCuadroEstadisticas' + week).html($('#divCuadroEstadisticas' + week).html());

							///copia detalle
							/*var totalesPorSemanna = 0;
							$(".sum_e" + week).each(function() {
								totalesPorSemanna = totalesPorSemanna + Number($(this).val());
							});
							//alert(day + " - " + string_type + week);
							totalesPorSemanna = totalesPorSemanna + totalesEcosFuerza;
							//alert(totales + ' - ' + totalesEcosFuerza);
							$('#ecos_tot' + week).empty();
							$('#ecos_tot' + week).append(totalesPorSemanna);
							$('#tot_ecos_week' + week).val(totalesPorSemanna);
							var sumEcosPorDetporte = ecosTotalesC+ecosTotalesN+ecosTotalesB+ecosTotalesE;
							//alert('divSumaEcosSemana'+ week + ' - ' + sumEcosPorDetporte);
							$('#divSumaEcosSemana' + week).html(sumEcosPorDetporte);*/
							///fin copia detalle


														week=3;
							totalMinSemanaZ1 = 0;
							$(".sum_min_weekZ1" + week).each(function() {
								totalMinSemanaZ1 = totalMinSemanaZ1 + Number($(this).val());
							});
							$('#hddMinZona1' + week).val(totalMinSemanaZ1);

							totalMinSemanaZ2 = 0;
							$(".sum_min_weekZ2" + week).each(function() {
								totalMinSemanaZ2 = totalMinSemanaZ2 + Number($(this).val());
							});
							$('#hddMinZona2' + week).val(totalMinSemanaZ2);

							totalMinSemanaZ3 = 0;
							$(".sum_min_weekZ3" + week).each(function() {
								totalMinSemanaZ3 = totalMinSemanaZ3 + Number($(this).val());
							});
							$('#hddMinZona3' + week).val(totalMinSemanaZ3);

							totalMinSemanaZ4 = 0;
							$(".sum_min_weekZ4" + week).each(function() {
								totalMinSemanaZ4 = totalMinSemanaZ4 + Number($(this).val());
							});
							$('#hddMinZona4' + week).val(totalMinSemanaZ4);

							totalMinGlobales = 0;
							$(".sum_mintosTotalesGlobal_week" + week).each(function() {
								totalMinGlobales = totalMinGlobales + Number($(this).val());
							});


							//minutos por deporte
							/*totalMinCarrera = 0;
							$(".sum_minutosCarrera_week" + week).each(function() {
								totalMinCarrera = totalMinCarrera + Number($(this).val());
							});
							$('#spanTimeCarreraZ' + week).html(totalMinCarrera);

							totalMinCiclismo = 0;
							$(".sum_minutosCiclismo_week" + week).each(function() {
								totalMinCiclismo = totalMinCiclismo + Number($(this).val());
							});
							//$('#spanTimeCiclismoZ' + week).html(totalMinCiclismo);

							totalMinNatacion = 0;
							$(".sum_minutosNatacion_week" + week).each(function() {
								totalMinNatacion = totalMinNatacion + Number($(this).val());
							});
							$('#spanTimeNatacionZ' + week).html(totalMinNatacion);*/
							//fin minutos por deporte

							if(1==1){
								//carrera
								mintosTotales = 0;
								$(".sum_mintosTotalesC_week" + week).each(function() {
									mintosTotales = mintosTotales + Number($(this).val());
								});
								$('#totaKm_carrera' + week).html(parseFloat(mintosTotales).toFixed(1));

								//ciclismo
								mintosTotales = 0;
								$(".sum_mintosTotalesB_week" + week).each(function() {
									mintosTotales = mintosTotales + Number($(this).val());
								});
								$('#totaKm_ciclismo' + week).html(mintosTotales);

								//natacion
								mintosTotales = 0;
								$(".sum_mintosTotalesN_week" + week).each(function() {
									mintosTotales = mintosTotales + Number($(this).val());
								});
								$('#totaKm_natacion' + week).html(Number(mintosTotales).toFixed(1));



								ecosTotalesN = 0;
								$(".sum_ecosTotalesN_week" + week).each(function() {
									ecosTotalesN = ecosTotalesN + Number($(this).val());
								});
								$('#tdSumaEcosNatacion' + week).append(ecosTotalesN);

								ecosTotalesB = 0;
								$(".sum_ecosTotalesB_week" + week).each(function() {
									ecosTotalesB = ecosTotalesB + Number($(this).val());
								});
								$('#tdSumaEcosCiclismo' + week).append(ecosTotalesB);


								ecosTotalesC = 0;
								$(".sum_ecosTotalesC_week" + week).each(function() {
									ecosTotalesC = ecosTotalesC + Number($(this).val());
								});
								$('#tdSumaEcosCarrera' + week).html(ecosTotalesC);


								ecosTotalesE = 0;
								$(".sum_ecos_Fuerza_week" + week).each(function() {
									ecosTotalesE = ecosTotalesE + Number($(this).val());
								});
								$('#tdSumaEcosEsfuerzo' + week).append(ecosTotalesE);

							}
							horasCal= totalMinGlobales/60;
							//totalMinSemanaZ4= totalMinGlobales-(totalMinSemanaZ1+totalMinSemanaZ2+totalMinSemanaZ3);

							$('#divHoras' + week).empty();
							$('#divHoras' + week).append(horasCal.toFixed(1));
							Fase1 = totalMinSemanaZ1 + (0.5 * totalMinSemanaZ2)
							Fase2 = (0.5 * totalMinSemanaZ2) + totalMinSemanaZ3
							Fase3 = totalMinSemanaZ4;
							totalFases = Fase1+Fase2+Fase3;
							porcentajeTiempoF1 = (Fase1*100)/totalFases;
							porcentajeTiempoF2 = (Fase2*100)/totalFases;
							porcentajeTiempoF3 = (Fase3*100)/totalFases;
							$('#tdTiempo1' + week).empty();
							$('#tdTiempo1' + week).append(porcentajeTiempoF1.toFixed(0));
							$('#tdTiempo2' + week).empty();
							$('#tdTiempo2' + week).append(porcentajeTiempoF2.toFixed(0));
							$('#tdTiempo3' + week).empty();
							$('#tdTiempo3' + week).append(porcentajeTiempoF3.toFixed(0));
							/*if(Fase1==260)
								alert(porcentajeTiempoF1 + " - " + porcentajeTiempoF2 + " - " + porcentajeTiempoF3 + " - " + totalMinSemanaZ4 + " - " + totalFases + " - " + week + "||" + Fase1 + " - " + Fase2 + " - " + Fase3);
								*/
							totalesEcosSemanalZ1= 0;
							$(".sum_ecos_weekZ1" + week).each(function() {
								//alert(Number($(this).val()));
								totalesEcosSemanalZ1 = Number(totalesEcosSemanalZ1) + Number($(this).val());
								//alert(totalEcoZ1);
							});
							//alert(80);
							$('#hddEcosZona1' + week).val(totalesEcosSemanalZ1);

							//alert(81);
							totalesEcosZ2 = 0;
							$(".sum_ecos_weekZ2" + week).each(function() {
								totalesEcosZ2 = totalesEcosZ2 + Number($(this).val());
							});
							$('#hddEcosZona2' + week).val(totalesEcosZ2);

							totalesEcosZ3 = 0;
							$(".sum_ecos_weekZ3" + week).each(function() {
								totalesEcosZ3 = totalesEcosZ3 + Number($(this).val());
							});
							$('#hddEcosZona3' + week).val(totalesEcosZ3);

							totalesEcosZ4 = 0;
							$(".sum_ecos_weekZ4" + week).each(function() {
								totalesEcosZ4 = totalesEcosZ4 + Number($(this).val());
								//alert(7);
							});
							$('#hddEcosZona4' + week).val(totalesEcosZ4);

							totalesEcosFuerza = 0;
							$(".sum_ecos_Fuerza_week" + week).each(function() {
								totalesEcosFuerza = totalesEcosFuerza + Number($(this).val());
							});
							$('#hddEcosFuerza' + week).val(totalesEcosFuerza);



							//alert(totalesEcosSemanalZ1+totalesEcosZ2+totalesEcosZ3+totalesEcosZ4);
							ecosFase1 = totalesEcosSemanalZ1 + (0.5 * totalesEcosZ2)
							ecosFase2 = (0.5 * totalesEcosZ2) + totalesEcosZ3
							ecosFase3 = totalesEcosZ4;
							totalecosFases = ecosFase1+ecosFase2+ecosFase3;
							porcentajeCargaF1 = (ecosFase1*100)/totalecosFases;
							porcentajeCargaF2 = (ecosFase2*100)/totalecosFases;
							porcentajeCargaF3 = (ecosFase3*100)/totalecosFases;
							$('#tdCarga1' + week).empty();
							$('#tdCarga1' + week).append(porcentajeCargaF1.toFixed(0));
							$('#tdCarga2' + week).empty();
							$('#tdCarga2' + week).append(porcentajeCargaF2.toFixed(0));
							$('#tdCarga3' + week).empty();
							porcentajeCargaF3 = 100-(Math.round(porcentajeCargaF1)+Math.round(porcentajeCargaF2));
							$('#tdCarga3' + week).append(porcentajeCargaF3.toFixed(0));

							ecosFuerza= totalesEcosFuerza;
							totalecosFases = totalecosFases + ecosFuerza;
							porcentajeCargaTotalF1 = (ecosFase1*100)/totalecosFases;
							porcentajeCargaTotalF2 = (ecosFase2*100)/totalecosFases;
							porcentajeCargaTotalF3 = (ecosFase3*100)/totalecosFases;
							$('#tdCargaTotal1' + week).empty();
							$('#tdCargaTotal1' + week).append(porcentajeCargaTotalF1.toFixed(0));
							$('#tdCargaTotal2' + week).empty();
							$('#tdCargaTotal2' + week).append(porcentajeCargaTotalF2.toFixed(0));
							$('#tdCargaTotal3' + week).empty();
							porcentajeCargaTotalF3 = 100-(Math.round(porcentajeCargaTotalF1)+Math.round(porcentajeCargaTotalF2));
							$('#tdCargaTotal3' + week).append(porcentajeCargaTotalF3.toFixed(0));
							//alert($('#divEstadisticaSemanal2_' + week).html());
							$('#divSemanaFila1_' + week).html($('#divEstadisticaSemanal1_' + week).html());
							$('#divSemanaFila2_' + week).html($('#divEstadisticaSemanal2_' + week).html());
							$('#divSemanaFila3_' + week).html($('#divEstadisticaSemanal3_' + week).html());
							$('#divSemanaFila4_' + week).html($('#divEstadisticaSemanal4_' + week).html());
							$('#divSemanaFila5_' + week).html($('#divEstadisticaSemanal5_' + week).html());

							$('#divSenamaCuadroEstadisticas' + week).html($('#divCuadroEstadisticas' + week).html());

							///copia detalle
							/*var totalesPorSemanna = 0;
							$(".sum_e" + week).each(function() {
								totalesPorSemanna = totalesPorSemanna + Number($(this).val());
							});
							//alert(day + " - " + string_type + week);
							totalesPorSemanna = totalesPorSemanna + totalesEcosFuerza;
							//alert(totales + ' - ' + totalesEcosFuerza);
							$('#ecos_tot' + week).empty();
							$('#ecos_tot' + week).append(totalesPorSemanna);
							$('#tot_ecos_week' + week).val(totalesPorSemanna);
							var sumEcosPorDetporte = ecosTotalesC+ecosTotalesN+ecosTotalesB+ecosTotalesE;
							//alert('divSumaEcosSemana'+ week + ' - ' + sumEcosPorDetporte);
							$('#divSumaEcosSemana' + week).html(sumEcosPorDetporte);*/
							///fin copia detalle


														week=4;
							totalMinSemanaZ1 = 0;
							$(".sum_min_weekZ1" + week).each(function() {
								totalMinSemanaZ1 = totalMinSemanaZ1 + Number($(this).val());
							});
							$('#hddMinZona1' + week).val(totalMinSemanaZ1);

							totalMinSemanaZ2 = 0;
							$(".sum_min_weekZ2" + week).each(function() {
								totalMinSemanaZ2 = totalMinSemanaZ2 + Number($(this).val());
							});
							$('#hddMinZona2' + week).val(totalMinSemanaZ2);

							totalMinSemanaZ3 = 0;
							$(".sum_min_weekZ3" + week).each(function() {
								totalMinSemanaZ3 = totalMinSemanaZ3 + Number($(this).val());
							});
							$('#hddMinZona3' + week).val(totalMinSemanaZ3);

							totalMinSemanaZ4 = 0;
							$(".sum_min_weekZ4" + week).each(function() {
								totalMinSemanaZ4 = totalMinSemanaZ4 + Number($(this).val());
							});
							$('#hddMinZona4' + week).val(totalMinSemanaZ4);

							totalMinGlobales = 0;
							$(".sum_mintosTotalesGlobal_week" + week).each(function() {
								totalMinGlobales = totalMinGlobales + Number($(this).val());
							});


							//minutos por deporte
							/*totalMinCarrera = 0;
							$(".sum_minutosCarrera_week" + week).each(function() {
								totalMinCarrera = totalMinCarrera + Number($(this).val());
							});
							$('#spanTimeCarreraZ' + week).html(totalMinCarrera);

							totalMinCiclismo = 0;
							$(".sum_minutosCiclismo_week" + week).each(function() {
								totalMinCiclismo = totalMinCiclismo + Number($(this).val());
							});
							//$('#spanTimeCiclismoZ' + week).html(totalMinCiclismo);

							totalMinNatacion = 0;
							$(".sum_minutosNatacion_week" + week).each(function() {
								totalMinNatacion = totalMinNatacion + Number($(this).val());
							});
							$('#spanTimeNatacionZ' + week).html(totalMinNatacion);*/
							//fin minutos por deporte

							if(1==1){
								//carrera
								mintosTotales = 0;
								$(".sum_mintosTotalesC_week" + week).each(function() {
									mintosTotales = mintosTotales + Number($(this).val());
								});
								$('#totaKm_carrera' + week).html(parseFloat(mintosTotales).toFixed(1));

								//ciclismo
								mintosTotales = 0;
								$(".sum_mintosTotalesB_week" + week).each(function() {
									mintosTotales = mintosTotales + Number($(this).val());
								});
								$('#totaKm_ciclismo' + week).html(mintosTotales);

								//natacion
								mintosTotales = 0;
								$(".sum_mintosTotalesN_week" + week).each(function() {
									mintosTotales = mintosTotales + Number($(this).val());
								});
								$('#totaKm_natacion' + week).html(Number(mintosTotales).toFixed(1));



								ecosTotalesN = 0;
								$(".sum_ecosTotalesN_week" + week).each(function() {
									ecosTotalesN = ecosTotalesN + Number($(this).val());
								});
								$('#tdSumaEcosNatacion' + week).append(ecosTotalesN);

								ecosTotalesB = 0;
								$(".sum_ecosTotalesB_week" + week).each(function() {
									ecosTotalesB = ecosTotalesB + Number($(this).val());
								});
								$('#tdSumaEcosCiclismo' + week).append(ecosTotalesB);


								ecosTotalesC = 0;
								$(".sum_ecosTotalesC_week" + week).each(function() {
									ecosTotalesC = ecosTotalesC + Number($(this).val());
								});
								$('#tdSumaEcosCarrera' + week).html(ecosTotalesC);


								ecosTotalesE = 0;
								$(".sum_ecos_Fuerza_week" + week).each(function() {
									ecosTotalesE = ecosTotalesE + Number($(this).val());
								});
								$('#tdSumaEcosEsfuerzo' + week).append(ecosTotalesE);

							}
							horasCal= totalMinGlobales/60;
							//totalMinSemanaZ4= totalMinGlobales-(totalMinSemanaZ1+totalMinSemanaZ2+totalMinSemanaZ3);

							$('#divHoras' + week).empty();
							$('#divHoras' + week).append(horasCal.toFixed(1));
							Fase1 = totalMinSemanaZ1 + (0.5 * totalMinSemanaZ2)
							Fase2 = (0.5 * totalMinSemanaZ2) + totalMinSemanaZ3
							Fase3 = totalMinSemanaZ4;
							totalFases = Fase1+Fase2+Fase3;
							porcentajeTiempoF1 = (Fase1*100)/totalFases;
							porcentajeTiempoF2 = (Fase2*100)/totalFases;
							porcentajeTiempoF3 = (Fase3*100)/totalFases;
							$('#tdTiempo1' + week).empty();
							$('#tdTiempo1' + week).append(porcentajeTiempoF1.toFixed(0));
							$('#tdTiempo2' + week).empty();
							$('#tdTiempo2' + week).append(porcentajeTiempoF2.toFixed(0));
							$('#tdTiempo3' + week).empty();
							$('#tdTiempo3' + week).append(porcentajeTiempoF3.toFixed(0));
							/*if(Fase1==260)
								alert(porcentajeTiempoF1 + " - " + porcentajeTiempoF2 + " - " + porcentajeTiempoF3 + " - " + totalMinSemanaZ4 + " - " + totalFases + " - " + week + "||" + Fase1 + " - " + Fase2 + " - " + Fase3);
								*/
							totalesEcosSemanalZ1= 0;
							$(".sum_ecos_weekZ1" + week).each(function() {
								//alert(Number($(this).val()));
								totalesEcosSemanalZ1 = Number(totalesEcosSemanalZ1) + Number($(this).val());
								//alert(totalEcoZ1);
							});
							//alert(80);
							$('#hddEcosZona1' + week).val(totalesEcosSemanalZ1);

							//alert(81);
							totalesEcosZ2 = 0;
							$(".sum_ecos_weekZ2" + week).each(function() {
								totalesEcosZ2 = totalesEcosZ2 + Number($(this).val());
							});
							$('#hddEcosZona2' + week).val(totalesEcosZ2);

							totalesEcosZ3 = 0;
							$(".sum_ecos_weekZ3" + week).each(function() {
								totalesEcosZ3 = totalesEcosZ3 + Number($(this).val());
							});
							$('#hddEcosZona3' + week).val(totalesEcosZ3);

							totalesEcosZ4 = 0;
							$(".sum_ecos_weekZ4" + week).each(function() {
								totalesEcosZ4 = totalesEcosZ4 + Number($(this).val());
								//alert(7);
							});
							$('#hddEcosZona4' + week).val(totalesEcosZ4);

							totalesEcosFuerza = 0;
							$(".sum_ecos_Fuerza_week" + week).each(function() {
								totalesEcosFuerza = totalesEcosFuerza + Number($(this).val());
							});
							$('#hddEcosFuerza' + week).val(totalesEcosFuerza);



							//alert(totalesEcosSemanalZ1+totalesEcosZ2+totalesEcosZ3+totalesEcosZ4);
							ecosFase1 = totalesEcosSemanalZ1 + (0.5 * totalesEcosZ2)
							ecosFase2 = (0.5 * totalesEcosZ2) + totalesEcosZ3
							ecosFase3 = totalesEcosZ4;
							totalecosFases = ecosFase1+ecosFase2+ecosFase3;
							porcentajeCargaF1 = (ecosFase1*100)/totalecosFases;
							porcentajeCargaF2 = (ecosFase2*100)/totalecosFases;
							porcentajeCargaF3 = (ecosFase3*100)/totalecosFases;
							$('#tdCarga1' + week).empty();
							$('#tdCarga1' + week).append(porcentajeCargaF1.toFixed(0));
							$('#tdCarga2' + week).empty();
							$('#tdCarga2' + week).append(porcentajeCargaF2.toFixed(0));
							$('#tdCarga3' + week).empty();
							porcentajeCargaF3 = 100-(Math.round(porcentajeCargaF1)+Math.round(porcentajeCargaF2));
							$('#tdCarga3' + week).append(porcentajeCargaF3.toFixed(0));

							ecosFuerza= totalesEcosFuerza;
							totalecosFases = totalecosFases + ecosFuerza;
							porcentajeCargaTotalF1 = (ecosFase1*100)/totalecosFases;
							porcentajeCargaTotalF2 = (ecosFase2*100)/totalecosFases;
							porcentajeCargaTotalF3 = (ecosFase3*100)/totalecosFases;
							$('#tdCargaTotal1' + week).empty();
							$('#tdCargaTotal1' + week).append(porcentajeCargaTotalF1.toFixed(0));
							$('#tdCargaTotal2' + week).empty();
							$('#tdCargaTotal2' + week).append(porcentajeCargaTotalF2.toFixed(0));
							$('#tdCargaTotal3' + week).empty();
							porcentajeCargaTotalF3 = 100-(Math.round(porcentajeCargaTotalF1)+Math.round(porcentajeCargaTotalF2));
							$('#tdCargaTotal3' + week).append(porcentajeCargaTotalF3.toFixed(0));
							//alert($('#divEstadisticaSemanal2_' + week).html());
							$('#divSemanaFila1_' + week).html($('#divEstadisticaSemanal1_' + week).html());
							$('#divSemanaFila2_' + week).html($('#divEstadisticaSemanal2_' + week).html());
							$('#divSemanaFila3_' + week).html($('#divEstadisticaSemanal3_' + week).html());
							$('#divSemanaFila4_' + week).html($('#divEstadisticaSemanal4_' + week).html());
							$('#divSemanaFila5_' + week).html($('#divEstadisticaSemanal5_' + week).html());

							$('#divSenamaCuadroEstadisticas' + week).html($('#divCuadroEstadisticas' + week).html());

							///copia detalle
							/*var totalesPorSemanna = 0;
							$(".sum_e" + week).each(function() {
								totalesPorSemanna = totalesPorSemanna + Number($(this).val());
							});
							//alert(day + " - " + string_type + week);
							totalesPorSemanna = totalesPorSemanna + totalesEcosFuerza;
							//alert(totales + ' - ' + totalesEcosFuerza);
							$('#ecos_tot' + week).empty();
							$('#ecos_tot' + week).append(totalesPorSemanna);
							$('#tot_ecos_week' + week).val(totalesPorSemanna);
							var sumEcosPorDetporte = ecosTotalesC+ecosTotalesN+ecosTotalesB+ecosTotalesE;
							//alert('divSumaEcosSemana'+ week + ' - ' + sumEcosPorDetporte);
							$('#divSumaEcosSemana' + week).html(sumEcosPorDetporte);*/
							///fin copia detalle


											//week=1;
				
			}
			function agregarSesion(sesion, week, day, perfilID){
		string_type = 'Lunes';
		
		$.ajax({
			type: 'get',
			async: false,/**/
			url: "/web/index.php?r=progressionsprogression/getdata",
			data: {
				"id": sesion,
				"week": week,
				"day": day,
				"columnas": 12,
				"perfilID": perfilID,
				"idorgn": '30901',
				"cporgn": '',
				"origen": 'meso',
				"orgnDash": 'false',
				"perfilSelectedID": '605',
				"perfilSelectedactivo": 'NO',
				"dayID": dayID,
				"displayTblestadistica": ""
			},
			success: function(data) {
				//console.log(data);
				switch (day) {
					case 1:
						string_type = 'lunes';
						break;
					case 2:
						string_type = 'martes';
						break;
					case 3:
						string_type = 'miercoles';
						break;
					case 4:
						string_type = 'jueves';
						break;
					case 5:
						string_type = 'viernes';
						break;
					case 6:
						string_type = 'sabado';
						break;
					case 7:
						string_type = 'domingo';
						break;
				}
				$('#' + string_type + week).append(data);
				//$('#exampleModal').modal('hide');

				
				totalesEcosFuerza2 = 0;
				$(".sum_ecos_Fuerza_week" + week).each(function() {
					totalesEcosFuerza2 = totalesEcosFuerza2 + Number($(this).val());
				});
				
				totales = 0;
				//console.log("START" + week);
				$(".sum_e" + week).each(function() {
					//console.log("tot: ", totales + " + " + $(this).val());
					totales = totales + Number($(this).val());
				});
				/*console.log("totalesEcosFuerza2: ", totalesEcosFuerza2);
				console.log("END " + week);*/
				totales += totalesEcosFuerza2;
				//alert(day + " - " + string_type + week);
				//pinta ecos semana color verde
				$('#ecos_tot' + week).empty();
				$('#ecos_tot' + week).append(totales);
				//alert(totales);
				$('#tot_ecos_week' + week).val(totales);
				$('#divSumaEcosSemana' + week).html(totales);
				/**/
				$('#hddValida').val(Number($('#hddValida').val())+1);
				
				totalMinSemanaZ1 = 0;
				$(".sum_min_weekZ1" + week).each(function() {
					totalMinSemanaZ1 = totalMinSemanaZ1 + Number($(this).val());
				});
				$('#hddMinZona1' + week).val(totalMinSemanaZ1);
				
				totalMinSemanaZ2 = 0;
				$(".sum_min_weekZ2" + week).each(function() {
					totalMinSemanaZ2 = totalMinSemanaZ2 + Number($(this).val());
				});
				$('#hddMinZona2' + week).val(totalMinSemanaZ2);
				
				totalMinSemanaZ3 = 0;
				$(".sum_min_weekZ3" + week).each(function() {
					totalMinSemanaZ3 = totalMinSemanaZ3 + Number($(this).val());
				});
				$('#hddMinZona3' + week).val(totalMinSemanaZ3);
				
				totalMinSemanaZ4 = 0;
				$(".sum_min_weekZ4" + week).each(function() {
					totalMinSemanaZ4 = totalMinSemanaZ4 + Number($(this).val());
				});
				$('#hddMinZona4' + week).val(totalMinSemanaZ4);
				
				totalMinGlobales = 0;
				$(".sum_mintosTotalesGlobal" + week).each(function() {
					totalMinGlobales = totalMinGlobales + Number($(this).val());
				});
				
				horasCal= (totalMinSemanaZ1+totalMinSemanaZ2+totalMinSemanaZ3+totalMinSemanaZ4)/60;
				//let horas= totalMinGlobales;
				//console.log(horasCal);
				
			},
			
			error: function(data) {
				//alert(sesion+" -- "+week+" -- "+day+" -- "+perfilID);
				listaErrores += "semana: " + (week+1) + " | dia: " + day + " | sesion:" + sesion +"\n";
				console.log("data: ", data);
				swal("Error al leer los items!", listaErrores + data, {
					icon : "error",
					buttons: {        			
						confirm: {
							className : 'btn btn-danger'
						}
					},
				});
			},
		});
	}
	
    $('.dup').click(function() {
        index = $(this).data('index');
        week = $(this).data('week');
        day = $(this).data('day');
		return;
		perfilID= $("#mesocyclesmesocycle-profile_id").val();
		if(perfilID=="") perfilID=0;
		
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=progressionsprogression/getdata",
            data: {
                "id": index,
                "week": week,
                "day": day,
				"columnas": 12,
				"perfilID": perfilID,
				"idorgn": '30901',
				"cporgn": '',
				"origen": 'meso',
				"perfilSelectedID": '605',
				"perfilSelectedactivo": 'NO',
            },
            success: function(data) {
                //console.log(data);
                //document.getElementById('distance_select').innerHTML = data;
                $('#progresiones').append(data);
                //document.getElementById('progresiones').innerHTML = data;
                totales = 0;
                $(".sum_e" + week).each(function() {
                    totales = totales + Number($(this).val());
                });
                $('#ecos_tot' + week).empty();
                $('#ecos_tot' + week).append(totales);
				$('#tot_ecos_week' + week).val(totales);
            },
            error: function(data) {},
        });
    });
});
function agregarLineaIntermedia(cont_line,first){
		
		var $divs = $(".clsSemana").toArray().length;
		console.log("Hay " + $divs + " elementos");
		if($divs==0){
			cont=-1;
		}

		cont = cont + 1;
		
		let fechaRealizaL="";
		let fechaRealizaM="";
		let fechaRealizaMi="";
		let fechaRealizaJ="";
		let fechaRealizaV="";
		let fechaRealizaS="";
		let fechaRealizaD="";
		var fecha_inicio = new Date();
		var dias = cont * 7; // Número de días a agregar
		
				let btn_add='';
		if(!is_preview){
			btn_add='<div  style="position: absolute; bottom: 8%;margin-left:2px">'+
						'<button type="button" class="btn btn-save anchoSave mr-2 btn-sm" id="add_line_intermedia" data-cont="'+cont+'" onClick="agregarLineaIntermedia('+cont+',0)" style="height:30px;">Agregar semana</button>'+
					'</div>';
		}
        let html_intermedia='<div class="week_item row week' + cont + '" id="week' + cont + '" data-cont="'+cont+'" data-textcont="?">' +
            '<input type="hidden" id="tot_ecos_week' + cont + '" name="tot_ecos_week' + cont + '" value="0">' +
            '<div class="col colModif2" style="min-height: 180px">'+
			'<input type="hidden" id="hddMinZona1' + cont + '" name="hddMinZona1' + cont + '" value="0" style="width:70px;">' +
			'<input type="hidden" id="hddMinZona2' + cont + '" name="hddMinZona2' + cont + '" value="0" style="width:70px;">' +
			'<input type="hidden" id="hddMinZona3' + cont + '" name="hddMinZona3' + cont + '" value="0" style="width:70px;">' +
			'<input type="hidden" id="hddMinZona4' + cont + '" name="hddMinZona4' + cont + '" value="0" style="width:70px;">' +
			'<div class="fondoBordeBlanco" style="position:relative; margin-top:10px;">' +
			'<br /> <b class="clsSemana">Semana ' + '?' +
            '</b> &nbsp; <span class="" style="cursor:pointer; position:absolute; right:8px; top:5px;" title="Eliminar semana" onclick="eliminarFila(' + cont + ');">X</span><b class="centrado2DEL"><img src="require/img/ecos70.png" class="centrado" style="cursor: pointer;" onClick="verTooltipSemana(\'' + cont + '\', \'ver\')"/>' +
			'<div class="centrado" id="ecos_tot' + cont + '" style="color:white; cursor: pointer; padding-left:6px;" onClick="verTooltipSemana(\'' + cont + '\',\'ver\')">0</div>' +
			'<div id="divSemana' + cont + '" class="tooltipSemana ocultoSemana row">' +
			'<div class="row">' +
			'<div class="col-md-12" align="right">' +
			'<span onClick="verTooltipSemana(\'' + cont + '\', \'ocultar\')" style="cursor:pointer;">Salir</span>' +
			'</div>' +
			'<div class="col-md-4" id="divSemanaFila1_' + cont + '">Dato 1 ' + cont + '</div>' +
			'<div class="col-md-1" id="divSemanaFila2_' + cont + '">Dato 2</div>' +
			'<div class="col-md-2" id="divSemanaFila3_' + cont + '">Dato 3</div>' +
			'<div class="col-md-2" id="divSemanaFila4_' + cont + '">Dato 4</div>' +
			'<div class="col-md-2" id="divSemanaFila5_' + cont + '">Dato 5</div>' +
			'</div>' +
		   	'<div class="row" id="divSenamaCuadroEstadisticas' + cont + '">Sin datos</div>' +
			'</div>' +
			btn_add+
			'</div>' +
            '</div>' +
            '<div class="col colModif">' +
            'Lunes ' + fechaRealizaL +
			'<input type="radio" name="rbMoverAqui" id="rbMoverAqui" class="rbMoverAqui" data-option="" ' +
			'onClick="actionMoverRadiobuttom(1, \'' + cont + '\')">' +
			'<span class="addSesion " onClick="getAddSesion(1, \'' + cont + '\');" title="Agregar sesión">+</span>' +
            '<div class="cuadroInfo" id="lunes' + cont + '"></div>' +
            '</div>' +
            '<div class="col colModif">' +
            'Martes ' + fechaRealizaM +
			'<input type="radio" name="rbMoverAqui" id="rbMoverAqui" class="rbMoverAqui" data-option="" ' +
			'onClick="actionMoverRadiobuttom(2, \'' + cont + '\')">' +
			'<span class="addSesion " onClick="getAddSesion(2, \'' + cont + '\');" title="Agregar sesión">+</span>' +
            '<div class="cuadroInfo" id="martes' + cont + '"></div>' +
            '</div>' +
            '<div class="col colModif">' +
            'Miércoles ' + fechaRealizaMi +
			'<input type="radio" name="rbMoverAqui" id="rbMoverAqui" class="rbMoverAqui" data-option="" ' +
			'onClick="actionMoverRadiobuttom(3, \'' + cont + '\')">' +
			'<span class="addSesion " onClick="getAddSesion(3, \'' + cont + '\');" title="Agregar sesión">+</span>' +
            '<div class="cuadroInfo" id="miercoles' + cont + '"></div>' +
            '</div>' +
            '<div class="col colModif">' +
            'Jueves ' + fechaRealizaJ +
			'<input type="radio" name="rbMoverAqui" id="rbMoverAqui" class="rbMoverAqui" data-option="" ' +
			'onClick="actionMoverRadiobuttom(4, \'' + cont + '\')">' +
			'<span class="addSesion " onClick="getAddSesion(4, \'' + cont + '\');" title="Agregar sesión">+</span>' +
            '<div class="cuadroInfo" id="jueves' + cont + '"></div>' +
            '</div>' +
            '<div class="col colModif">' +
            'Viernes ' + fechaRealizaV +
			'<input type="radio" name="rbMoverAqui" id="rbMoverAqui" class="rbMoverAqui" data-option="" ' +
			'onClick="actionMoverRadiobuttom(5, \'' + cont + '\')">' +
			'<span class="addSesion " onClick="getAddSesion(5, \'' + cont + '\');" title="Agregar sesión">+</span>' +
            '<div class="cuadroInfo" id="viernes' + cont + '" style=""></div>' +
            '</div>' +
            '<div class="col colModif">' +
            'Sábado ' + fechaRealizaS +
			'<input type="radio" name="rbMoverAqui" id="rbMoverAqui" class="rbMoverAqui" data-option="" ' +
			'onClick="actionMoverRadiobuttom(6, \'' + cont + '\')">' +
			'<span class="addSesion " onClick="getAddSesion(6, \'' + cont + '\');" title="Agregar sesión">+</span>' +
            '<div class="cuadroInfo" id="sabado' + cont + '"></div>' +
            '</div>' +
            '<div class="col colModif">' +
            'Domingo ' + fechaRealizaD +
			'<input type="radio" name="rbMoverAqui" id="rbMoverAqui" class="rbMoverAqui" data-option="" ' +
			'onClick="actionMoverRadiobuttom(7, \'' + cont + '\')">' +
			'<span class="addSesion " onClick="getAddSesion(7, \'' + cont + '\');" title="Agregar sesión">+</span>' +
            '<div class="cuadroInfo" id="domingo' + cont + '"></div>' +
            '</div>' +
            '</div>';
			console.log(html_intermedia);
			//readlines(html_intermedia,cont_line)
			// Selecciona el div al que deseas agregar otro div después
			var divExistente = $('#week'+cont_line);

			// Crea un nuevo div
			var nuevoDiv = html_intermedia;
			if(first){
				// Agrega el nuevo div antes del div existente
				divExistente.before(nuevoDiv);
			}else{
				// Agrega el nuevo div después del div existente
				divExistente.after(nuevoDiv);
			}
			
	}
	function verGrafica(){
		let _idPerfil = $('#mesocyclesmesocycle-profile_id').val();
		if(_idPerfil=="")
			document.location.href = 'index.php?r=mesocyclesfolder/grafica&id=30901&cp=';
		else
			document.location.href = 'index.php?r=mesocyclesfolder/grafica&id=30901&cp=&perfilSelectedID=' +  _idPerfil;
		//$('.submitFormBtn').click();
		swal("Espere un momento. Cargando...", {
			buttons: false,
			timer: 20000,
		});
	}

/*function dup(divID, valID) {
	
	getMoverA(divID, valID);
	
	return true;/**/
function dup(index, week, day, divID, valID) {
	$("#hddIndex").val(index);
	$("#hddWeek").val(week);
	$("#hddDay").val(day);
	$("#hddDivID").val(divID);
	$("#hddValID1").val(valID);
	/*CODIGO OBSOLETO*/
		tiempoToast=2000;
		
		notificacionToast("Espere un momento. Cargando...");
		let string_type = 'Lunes';
		switch (day) {
			case 1:
				string_type = 'lunes';
				break;
			case 2:
				string_type = 'martes';
				break;
			case 3:
				string_type = 'miercoles';
				break;
			case 4:
				string_type = 'jueves';
				break;
			case 5:
				string_type = 'viernes';
				break;
			case 6:
				string_type = 'sabado';
				break;
			case 7:
				string_type = 'domingo';
				break;
		}

		perfilID= $("#mesocyclesmesocycle-profile_id").val();
		if(perfilID=="") perfilID=0;
		let idn=null;
		$.ajax({
			type: 'get',
			url: "/web/index.php?r=sessionsssession/sesiondup",
			data: {
				"id": index,
				"week": week,
				"day": day,
				"columnas": 12,
				"perfilID": perfilID,
				"idorgn": '30901',
				"cporgn": '',
				"origen": 'meso',
				"perfilSelectedID": '605',
				"perfilSelectedactivo": 'NO',
			},
			success: function(data) {
				console.log(data);
				idn=data;
					//segundo ajax, se cambio index por idn
					$.ajax({
						type: 'get',
						url: "/web/index.php?r=progressionsprogression/getdata",
						data: {
							"id": idn,
							"week": week,
							"day": day,
							"columnas": 12,
							"perfilID": perfilID,
							"idorgn": '30901',
							"cporgn": '',
							"origen": 'meso',
							"perfilSelectedID": '605',
							"perfilSelectedactivo": 'NO',
							"esduplicado": "SI"
						},
						success: function(data) {
							//console.log(data);
							//document.getElementById('distance_select').innerHTML = data;
							$('#' + string_type + week).append(data);
							totales = 0;
							$(".sum_e" + week).each(function() {
								totales = totales + Number($(this).val());
							});
							$('#ecos_tot' + week).empty();
							$('#ecos_tot' + week).append(totales);
							$('#tot_ecos_week' + week).val(totales);
							//document.getElementById('progresiones').innerHTML = data;
							
							notificacionToast("Recuerda No Editar una Sesión hasta guardar Cambios en esta Pantalla");
							/*swal("Recuerda No Editar una Sesión hasta guardar Cambios en esta Pantalla", "", {
								icon : "warning",
								buttons: {        			
									confirm: {
										className : 'btn btn-warning'
									}
								},
							});*/
							//alert("en dup()");
							if(is_variasVeces) {
								if(is_variasVeces_count>0) {
									//alert(divID+"---"+valID+"---"+idn)
									divID= idn;
								}
								else {
									//alert("else-"+divID+"---"+valID+"---"+idn)
									divID= $(".duplicado-" + idn).data("duplicado");
									$("#hddMoviendoID").val(divID);
									//alert("else" + divID);
								}
								valID= idn;
								is_variasVeces_count++;
							}
							//alert(divID+"---"+valID);
							getMoverA(divID, valID);
						},
						error: function(data) {},
					});
			},
			error: function(data) {},
		});
		
	/*fin CODIGO OBSOLETO*/
	
}

function validaEdit(_url){
	if(banderaGuardarAntesDeEditar==1){
		$("#hddUrlSesion").val(_url);
		$('.submitFormBtn').click();
	}
	else {
					document.location.href="index.php?r=" + _url;
					
		//document.location.href="index.php?r=" + _url;
	}
}
	
function el(index, esMover=false) {
	if(esMover==false){
		alertify.confirm(
		'Confirmación',
		'Seguro que desea eliminar el registro?',
		function() {
			//alert(index);
			//console.log('#' + index);
			llamarElininar(index);
		},
		function() {});
	}
	else{
		llamarElininar(index);
	}
		
}
	
function llamarElininar(index){
	//alert("Eliminado: "+index);
	$('#' + index + '').remove();
		totales = 0;
		$(".sum_e" + week).each(function() {
			totales = totales + Number($(this).val());
		});
		$('#ecos_tot' + week).empty();
		$('#ecos_tot' + week).append(totales);
		$('#tot_ecos_week' + week).val(totales);
		$('#hddValida').val(Number($('#hddValida').val())-1);
	//if(mensajeLanzado==0) {
		
		notificacionToast("Recuerda No Editar una Sesión hasta guardar Cambios en esta Pantalla");
	//}
	//else{
		mensajeLanzado=1;
	//}
		/*swal("Recuerda No Editar una Sesión hasta guardar Cambios en esta Pantalla", "", {
			icon : "warning",
			buttons: {        			
				confirm: {
					className : 'btn btn-warning'
				}
			},
		});*/
}
	
function eliminarFila(index){
	$("#week" + index).remove();
}
function addLibrary() {
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=mesocyclesmesocycle/dup",
        data: {
            "id": 30901,
			"option":2        },
        success: function(data) {
            console.log('duplicando');
            console.log(data);
            idn=data;
            $.ajax({
                type: 'get',
                url: "/web/index.php?r=mesocyclesmesocycle/addlibrary",
                data: {
                    "id": idn,
					"tipo":2,
                    "name": $('#name_library').val(),
					"descripcion": $('#descripcion_library').val(),

                },
                success: function(data) {
                    console.log('agregando a libreria');
                    console.log(data);
                    $('#libraryModal').modal('hide');

                    swal({
                        title: "Mesociclo agregado correctamente a la librería!",
                        
                        text: 'Éxito',
                        icon: "success",
                        buttons: false,
                        timer: 3000
                    });
                },
                error: function(data) {},
            });
            //segundo ajax, se cambio index por idn
        },
        error: function(data) {},
    });

}
//title: " agregado correctamente a la librería!",

function confirmDelete(){
		var key = "NVhjL2dYM2p5eXg4Y2swWGNOTktBQT09"; 
		var token = "";
		
        alertify.confirm('Confirmación', '¿Seguro que desea eliminar el registro?', 
            function(){
                $.ajax({
                     type: 'POST',
                     url: "index.php?r=mesocyclesmesocycle/delete",
                     data:{key:key, token:token},
                     success:function(bool){
						 //console.log('success '+bool);
                        if (bool == true){
                            alertify.success('<span style="color: #FFFFFF;"><i class="fa fa-trash" aria-hidden="true"></i> &nbsp;&nbsp;Registro eliminado<br> espere un momento ...</span>', 2 , function (){
								window.location.href = "index.php?r=mesocyclesmesocycle/index&del=true"; 
							}); 
                        }else{
							alertify.error('<span style="color: #FFFFFF;">Ocurrio un error, intenta de nuevo</span>', 2 , function (){location.reload(); }); 
						}
                     },
                     error: function(data){ 
                        // console.log('error '+data);
						alertify.error('<span style="color: #FFFFFF;">Ocurrio un error, intenta de nuevo</span>', 2 , function (){location.reload(); }); 
                     },
                });
            },
            function(){
            });
    }

jQuery(function ($) {
jQuery&&jQuery.pjax&&(jQuery.pjax.defaults.maxCacheLength=0);
if (jQuery('#mesocyclesmesocycle-profile_id').data('select2')) { jQuery('#mesocyclesmesocycle-profile_id').select2('destroy'); }
jQuery.when(jQuery('#mesocyclesmesocycle-profile_id').select2(select2_e6279efa)).done(initS2Loading('mesocyclesmesocycle-profile_id','s2options_d6851687'));

jQuery('#w0').yiiActiveForm([{"id":"mesocyclesmesocycle-profile_id","name":"profile_id","container":".field-mesocyclesmesocycle-profile_id","input":"#mesocyclesmesocycle-profile_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Perfil ID debe ser un número entero.","skipOnEmpty":1});}},{"id":"mesocyclesmesocycle-updated_at","name":"updated_at","container":".field-mesocyclesmesocycle-updated_at","input":"#mesocyclesmesocycle-updated_at","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Updated At no puede estar vacío."});}},{"id":"mesocyclesmesocycle-created_by_id","name":"created_by_id","container":".field-mesocyclesmesocycle-created_by_id","input":"#mesocyclesmesocycle-created_by_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Created By ID debe ser un número entero.","skipOnEmpty":1});}}], []);
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