var s2options_d6851687 = {"themeCss":".select2-container--krajee","sizeCss":"","doReset":true,"doToggle":false,"doOrder":false};
window.select2_e6279efa = {"allowClear":true,"minimumInputLength":3,"language":{"errorLoading":function () { return 'No se encontraron datos'; }},"ajax":{"url":"\/web\/index.php?r=sessionsssession\/getcitylist","dataType":"json","data":function(params) { return {q:params.term}; }},"escapeMarkup":function (markup) { return markup; },"templateResult":function(city) { return city.text; },"templateSelection":function (city) { return city.text; },"theme":"krajee","width":"100%","placeholder":"Escribe almenos 3 caracteres para buscar..."};

/*var x=0;
	do{console.log("->"+x)}while(x>0);
	if(1 == "1") alert(1);
	else alert(12);*/

$( function() {
    $( "#divComponentes" ).sortable();
    $( "#divComponentes" ).disableSelection();
  } );

function removeBloqueDelBloque(val){
	//alert(val);
	$(".divBloquesTitle_"+val).remove();
}
	
function addBloqueDelBloque(){
	var i= (typeof Number($('#hddNumBloqueDelBloque').val()) == 'number' ? Number($("#hddNumBloqueDelBloque").val()) : 0);
	
	//for(var i=_i; i<=_i; i++){
		var htmlBloque='<span class="divBloquesTitle_'+(i+1)+'"><div id="divBloquesTitle" style="font-weight:bold; border-bottom: solid 2px #D4D4D4; margin-bottom: 5px; margin-top:-10px;">Bloque '+(i+1)+'</div>';
		htmlBloque +='<div class="input-group input-group-sm mb-3 exercise_input2" style="width:60%; float: left">';
            htmlBloque +='<input type="number" class="form-control clsInputBloques" placeholder="Numérico" aria-label="min/seg/mts" aria-describedby="basic-addon1" min="1" id="select_quantity_large'+(i+1)+'" name="select_quantity_large'+(i+1)+'" style="height:38px;">';
			htmlBloque +='<select class="form-control-sm custom-select" id="select_type_large'+(i+1)+'" name="select_type_large'+(i+1)+'" style="max-width:160px !important;">';
            htmlBloque +='<option value="2" selected>Minutos</option>';
            htmlBloque +='<option value="1">Segundos</option>';
            htmlBloque +='<option value="3">Horas</option>';
            htmlBloque +='<option value="4">Metros</option>';
            htmlBloque +='<option value="5">Kilómetros</option>';
            htmlBloque +='</select>';
            htmlBloque +='</div>';
            htmlBloque +='<div class="input-group input-group-sm mb-3" style="width:35%; float: left">';
            htmlBloque +='<select class="form-control-sm custom-select" id="select_zone'+(i+1)+'" name="select_zone'+(i+1)+'" style="margin-left: 10px !important;">';
            htmlBloque +='<option value="" selected>Elige la zona</option>';
            htmlBloque +='<option value="1">Zona 1</option>';
            htmlBloque +='<option value="2">Zona 2</option>';
            htmlBloque +='<option value="3">Zona 3</option>';
            htmlBloque +='<option value="4">Zona 4</option>';
            htmlBloque +='<option value="5">Zona 5</option>';
            htmlBloque +='<option value="6">Zona 6</option>';
            htmlBloque +='<option value="7">Zona 7</option>';
            htmlBloque +='<option value="8">Zona 8</option>';
            htmlBloque +='<option value="9">Zona 9</option>';
            htmlBloque +='<option value="10">Zona 10</option>';
            htmlBloque +='</select>';
            htmlBloque +='</div>';
            htmlBloque +='<div class="input-group input-group-sm mb-1" style="width:5%; float: left; border:solid 0px; margin-right:-20px;">';
			htmlBloque +='<i onClick="removeBloqueDelBloque('+(i+1)+');" class="icon-minus" style="cursor:pointer; margin-left:15px; margin-top:10px;" title="Eliminar fila"></i>';
            htmlBloque +='</div></span>';
	
		$("#spanBloques2").append(htmlBloque);
		i += 1;
		$('#hddNumBloqueDelBloque').val(i);
	//}
	
}
function reinicia(){
	$('#plan_level').html("");
	$("#imgCarrera").hide();
	$("#imgCiclismo").hide();
	$("#imgNatacion").hide();
	$("#imgFuerza").hide();
	$('#select_blocks').empty();
}
	
$(document).ready(function() {
	
	$("#select_exercise").val(10);
	$("#cmbIcono").val(3);
	//console.log('jskhsjh');
	//console.log($("#select_exercise").val())
$("#save").click(function() {
    
    let ECSs = $("#sessionssession-ECSs").val();
    var sportID = $('#sport_select').val();
    var distanceID = $('#distance_select').val();
    let disciplineID = $('#discipline_select').val();
    let levelID = $('#level_select').val();
    let contentID = $('#contain_select').val();
    let perfilID = $('#sessionsssession-profile_id').val();
    
    var dtClear = 0;
    var errores = "";

    if (ECSs == "") {
        errores = "> ECSs";
        dtClear++;
    }
			if (sportID == null||sportID=='') {
			errores += "\n > Deporte";
			dtClear++;
		}
		if (distanceID == null||distanceID=='') {
			errores += "\n > Distancia";
			dtClear++;
		}

		if (levelID == null||levelID=='') {
			errores += "\n > Nivel";
			dtClear++;
		}
		if (contentID == null||contentID=='') {
			errores += "\n > Contenido";
			dtClear++;
		}
		//alert(contentID);

    if (dtClear > 0) {

        swal("Campos requeridos!", "" + errores, {
            icon: "warning",
            buttons: {
                confirm: {
                    className: 'btn btn-warning'
                }
            },
        });
        return false;
    } else {
        
        swal("Espere un momento", {
            buttons: false,
            timer: 3000,
        });
        $('#w0').submit();
    }
    
    
    
    
	
	return;
    
});


$.ajax({
    type: 'get',
    url: "/web/index.php?r=sessionsssession/getsport",
    data: {},
    success: function(data) {
        document.getElementById('sport_select').innerHTML = data;
        $('#sport_select').val(3);
                getDistancia(3);
            },
    error: function(data) {},
});
$.ajax({
    type: 'get',
    url: "/web/index.php?r=sessionsssession/getdiscipline",
    data: {},
    success: function(data) {
        document.getElementById('discipline_select').innerHTML = data;
        $('#discipline_select').val();
    },
    error: function(data) {},
});
$.ajax({
    type: 'get',
    url: "/web/index.php?r=sessionsssession/getcontain",
    data: {},
    success: function(data) {
        document.getElementById('contain_select').innerHTML = data;
        $('#contain_select').val(8);
    },
    error: function(data) {},
});
$.ajax({
    type: 'get',
    url: "/web/index.php?r=sessionsssession/getlevel",
    data: {},
    success: function(data) {
        document.getElementById('level_select').innerHTML = data;
        $('#level_select').val(1);
    },
    error: function(data) {},
});
//$('.plan_level').hide();
//$('.blocks_level').hide();



$(".show_sports").click(function() {
    $(".sports_level").show();
    $(".trans_level").show();
    $(".trans").show();
	$(".hide_sports").show();
	$(".show_sports").hide();
});
$(".hide_sports").click(function() {
    $(".sports_level").hide();
    $(".trans_level").hide();
    $(".trans").hide();
	$(".hide_sports").hide();
	$(".show_sports").show();
});
$('#search_circuit').click(function() {
    //document.getElementById('select_circuit').innerHTML='<option value="">Hola</option>'
    let name_circuit = $('#circuit').val();
    $.ajax({
		async: false,
        type: 'get',
        url: "/web/index.php?r=sessionsssession/getcircuit",
        data: {
            "name_circuit": name_circuit
        },
        success: function(data) {
            document.getElementById('select_circuit').innerHTML = data;

        },
        error: function(data) {},
    });
});
$('#search_drills').click(function() {
    //document.getElementById('select_circuit').innerHTML='<option value="">Hola</option>'
    let name_drill = $('#drills').val();
    $.ajax({
		async: false,
        type: 'get',
        url: "/web/index.php?r=sessionsssession/getdrills",
        data: {
            "name_drill": name_drill
        },
        success: function(data) {
            document.getElementById('select_drills').innerHTML = data;

        },
        error: function(data) {},
    });
});
$('#search_exercise').click(function() {
    //document.getElementById('select_circuit').innerHTML='<option value="">Hola</option>'
    let name_exercise = $('#exercise').val();
    $.ajax({
		 async: false,
        type: 'get',
        url: "/web/index.php?r=sessionsssession/getexercise",
        data: {
            "name_exercise": name_exercise
        },
        success: function(data) {
            document.getElementById('select_exercise').innerHTML = data;

        },
        error: function(data) {},
    });
});
$('#search_circuit_edit').click(function() {
    //document.getElementById('select_circuit').innerHTML='<option value="">Hola</option>'
    let name_circuit = $('#circuit_edit').val();
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=sessionsssession/getcircuit",
        data: {
            "name_circuit": name_circuit
        },
        success: function(data) {
            document.getElementById('select_circuit_edit').innerHTML = data;

        },
        error: function(data) {},
    });
});
$('#search_exercise_edit').click(function() {
    //document.getElementById('select_circuit').innerHTML='<option value="">Hola</option>'
    let name_exercise = $('#exercise_edit').val();
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=sessionsssession/getexercise",
        data: {
            "name_exercise": name_exercise
        },
        success: function(data) {
            document.getElementById('select_exercise_edit').innerHTML = data;

        },
        error: function(data) {},
    });
});

$(".sports").click(function() {
    //alert(1);
	/*if($("#hide_sports").hasClass("hide") == true ){
		$("#cmbIcono").val("");
	}*/
	
	//$("#spanSeleccionado").html("");
	$("#spanSeleccionadoFuerza").html("");
	$(".hide_sports").click();
	
    $("#spanEcosTotales").html("0");
    $('#first_level').val($(this).val());
    //$('#second_level').val($(this).val()); //agregado
    $('#plan_level').empty();
    $('.plan_level').show();
    $('.blocks_level').show();

    $(".trans").hide();
    $(".trans_level").hide();
    $(".sports_level").hide();

    let arr = $(this).val();
	//let arr = $("#hddItemSelected").val();
	//alert(arr);
    let split_arr = arr.split("_");
    //console.log(split_arr.length);
    let arr_colors = ['bg-light', 'bg-light', 'bg-light'];
	if($("#hddItemSelected").val()==""){
		
	}
    $.each(split_arr, function(index, item) {
        let r = (Math.random() + 1).toString(36).substring(7);
        r = item + '_' + index + '_' + r;
        //console.log("random", r);
        //width:' + (90 / split_arr.length).toFixed() +'%
		//alert(r);
        $('#plan_level').append(
            '<input type="hidden" class="form-control" id="titulo_' + r +
            '" name="titulo_' + r +
            '" align="center" value="Titulo" style="width: 120px;">'
        );
        $('#plan_level').append(
            '<div style="overflow: auto;" class=" col-md-12 chart-wrap horizontal ' +
            r +
            ' card plan_block_level"><div class="' + r + ' card-header"><label>' + item
            .toUpperCase() + '<input type="checkbox" class="radio_plan" id="radio_' +
            r + '" name="radio_' +
            r + '" onclick="radios(radio_' + r + ');" value="' + r + '" ></label>' +
            '</div><div class="block_items card-body grid ' + r + '" id="' + r +
            '" name="' +
            r + '" data-info="' + r + '"></div></div><br>');
        if (index !== split_arr.length - 1) {
            //'<div class="bg-info" style="opacity:60%;writing-mode: vertical-lr;transform: rotate(180deg);color:white;" align="center">TRANSICION</div>'
            $('#plan_level').append(
                '<div onclick="call_trans(trans_' + r +
                ');" class="transicion bg-info col-md-12" style="opacity:60%;color:white;" align="center" data-sport="' +
                r +
                '" data-rec="1" data-typerec="min" title="Recuperación: 1 min " name="trans_' +
                r + '" id="trans_' + r + '">TRANSICION</div>'
            );
        }
		//alert((r + " || " + item.toUpperCase()));
		//$("#spanSeleccionado").html(item.toUpperCase());
    });
	
    $('input[type="checkbox"]').each(function(index, item) {
        if (index == 0) {
            $(this).prop("checked", true);
            let info = $(this).val();

			if(contComponentes==0){
				valorBandera="";
            	$('#select_blocks').empty();
				$(".block_items").each(function() {
					
					let arr_info = $(this).data('info').split('_');
					if (info === $(this).data('info')) {
						//console.log('verd')
						$('#select_blocks').append('<option value="' + $(this).data(
								'info') + '" selected>' +
							arr_info[0].toUpperCase() + '</option>');
					} else {
						$('#select_blocks').append('<option value="' + $(this).data(
								'info') + '">' +
							arr_info[0].toUpperCase() + '</option>');
					}
					//alert($("#hide_sports").hasClass("hide"));
					if(deporte_item=="" || $("#hide_sports").hasClass("hide") == false || $("#hddItemSelected").val()==""){
						deporte_item=arr_info[0].toUpperCase();
					}
					let validaExiste = false;
					arrdeporteTransicion.forEach(function(val) {
						if(val==deporte_item.toUpperCase()){
							validaExiste = true;
						}
					});
					if( validaExiste == false){//si no existe, se agrega
					   arrdeporteTransicion.push(deporte_item.toUpperCase());
					}
					$("#spanSeleccionado").html("" + deporte_item.toUpperCase());
					//$("#spanSeleccionadoFuerza").html("" + deporte_item.toUpperCase());
					valorBandera= arr_info[0];
					//alert("1-"+valorBandera+arr_info[0].toUpperCase()+" "+deporte_item);
					/*if(arr_info[0].toUpperCase()=="CARRERA") $("#imgCarrera").show();
					if(arr_info[0].toUpperCase()=="CICLISMO") $("#imgCiclismo").show();
					if(arr_info[0].toUpperCase()=="NATACION") $("#imgNatacion").show();
					if(arr_info[0].toUpperCase()=="FUERZA") $("#imgFuerza").show();*/
					try{
						//alert(deporte_item);
						valorAnterior= deporte_item.toUpperCase();
						if(deporte_item.toUpperCase()=="CARRERA") $("#imgCarrera").show();
						if(deporte_item.toUpperCase()=="CICLISMO") $("#imgCiclismo").show();
						if(deporte_item.toUpperCase()=="NATACION") $("#imgNatacion").show();
						if(deporte_item.toUpperCase()=="FUERZA") $("#imgFuerza").show();
						
						/*
						if(deporte_item.toUpperCase()=="3") $("#imgCarrera").show();
						if(deporte_item.toUpperCase()=="1") $("#imgCiclismo").show();
						if(deporte_item.toUpperCase()=="2") $("#imgNatacion").show();
						if(deporte_item.toUpperCase()=="4") {$("#imgFuerza").show(); alert(2);}
						*/
					}
					catch (err) {
						//alert(err);
						/*if(arr_info[0].toUpperCase()=="CARRERA") $("#imgCarrera").show();
						if(arr_info[0].toUpperCase()=="CICLISMO") $("#imgCiclismo").show();
						if(arr_info[0].toUpperCase()=="NATACION") $("#imgNatacion").show();
						if(arr_info[0].toUpperCase()=="FUERZA") $("#imgFuerza").show();*/
					}
				});
			}
			else{
				$(".block_items").each(function() {
					let arr_info = $(this).data('info').split('_');
					if(deporte_item != arr_info[0]){
						
						
					}
					//alert("2-"+valorBandera+arr_info[0]+"--"+deporte_item);
					if(valorBandera != arr_info[0]){
					//alert("2-" + valorBandera + " - " + arr_info[0] + '-' + deporte_item);
						valorBandera = arr_info[0];
						
						if (info === $(this).data('info')) {
							//console.log('verd')
							$('#select_blocks').append('<option value="' + $(this).data(
									'info') + '" selected>' +
								arr_info[0].toUpperCase() + '</option>');
						} else {
							$('#select_blocks').append('<option value="' + $(this).data(
									'info') + '">' +
								arr_info[0].toUpperCase() + '</option>');
						}
						if(deporte_item=="" || $("#hddItemSelected").val()==""){
							deporte_item=arr_info[0].toUpperCase();
						}
						if($("#hddItemSelected").val()==""){
							$("#spanSeleccionado").html(deporte_item.toUpperCase());
							$('#blockSelected').val(deporte_item.toLowerCase());
						}
						else{
							//debe ser solo al cargar la pagina
							console.log("arrdeporteTransicion: ", arrdeporteTransicion);
							let validaExiste = false;
							arrdeporteTransicion.forEach(function(val) {
								if(val==deporte_item.toUpperCase()){
									validaExiste = true;
								}
								else{
									arrdeporteTransicion.push(deporte_item.toUpperCase());
								}
							});
							
							if( validaExiste == false){//si no existe, se agrega
							   arrdeporteTransicion.push(deporte_item.toUpperCase());
								$("#spanSeleccionado").html($("#spanSeleccionado").html() + " + " + deporte_item.toUpperCase());
							}
							//fin debe ser solo al cargar la pagina
						}
						//alert(deporte_item.toUpperCase());
						//alert("2-"+valorBandera+arr_info[0]);
						//se quito aca	
					}
					//se puso aca
						if(arr_info[0].toUpperCase()=="CARRERA") $("#imgCarrera").show();
						if(arr_info[0].toUpperCase()=="CICLISMO") $("#imgCiclismo").show();
						if(arr_info[0].toUpperCase()=="NATACION") $("#imgNatacion").show();
						if(arr_info[0].toUpperCase()=="FUERZA") $("#imgFuerza").show();
					//alert(valorAnterior);
					if(valorAnterior=="FUERZA"){
						valorAnterior= deporte_item.toUpperCase();
						if(deporte_item.toUpperCase()=="CARRERA") $("#imgCarrera").show();
						if(deporte_item.toUpperCase()=="CICLISMO") $("#imgCiclismo").show();
						if(deporte_item.toUpperCase()=="NATACION") $("#imgNatacion").show();
					}
				});
			}
        }

    });

});
	
$(".depFuerza").click(function() {
	//lo mismo que:  $(".sports").click(function() {
	$("#spanSeleccionado").html("");
	$("#spanSeleccionadoFuerza").html("");
	$(".hide_sports").click();
	
    $("#spanEcosTotales").html("0");
    $('#first_level').val($(this).val());
    //$('#second_level').val($(this).val()); //agregado
    $('#plan_level').empty();
    $('.plan_level').show();
    $('.blocks_level').show();

    $(".trans").hide();
    $(".trans_level").hide();
    $(".sports_level").hide();

    let arr = $(this).val();
    let split_arr = arr.split("_");
    //console.log(split_arr.length);
    let arr_colors = ['bg-light', 'bg-light', 'bg-light']
    $.each(split_arr, function(index, item) {
        let r = (Math.random() + 1).toString(36).substring(7);
        r = item + '_' + index + '_' + r;
        //console.log("random", r);
        //width:' + (90 / split_arr.length).toFixed() +'%
        $('#plan_level').append(
            '<input type="hidden" class="form-control" id="titulo_' + r +
            '" name="titulo_' + r +
            '" align="center" value="Titulo" style="width: 120px;">'
        );
        $('#plan_level').append(
            '<div style="overflow: auto;" class=" col-md-12 chart-wrap horizontal ' +
            r +
            ' card plan_block_level"><div class="' + r + ' card-header"><label>' + item
            .toUpperCase() + '<input type="checkbox" class="radio_plan" id="radio_' +
            r + '" name="radio_' +
            r + '" onclick="radios(radio_' + r + ');" value="' + r + '" ></label>' +
            '</div><div class="block_items card-body grid ' + r + '" id="' + r +
            '" name="' +
            r + '" data-info="' + r + '"></div></div><br>');
        if (index !== split_arr.length - 1) {
            //'<div class="bg-info" style="opacity:60%;writing-mode: vertical-lr;transform: rotate(180deg);color:white;" align="center">TRANSICION</div>'
            $('#plan_level').append(
                '<div onclick="call_trans(trans_' + r +
                ');" class="transicion bg-info col-md-12" style="opacity:60%;color:white;" align="center" data-sport="' +
                r +
                '" data-rec="1" data-typerec="min" title="Recuperación: 1 min " name="trans_' +
                r + '" id="trans_' + r + '">TRANSICION</div>'
            );
        }
    });
	
    $('input[type="checkbox"]').each(function(index, item) {
        if (index == 0) {
            $(this).prop("checked", true);
            let info = $(this).val();

			if(contComponentes==0){
				valorBandera="";
            	$('#select_blocks').empty();
				$(".block_items").each(function() {
					
					let arr_info = $(this).data('info').split('_');
					if (info === $(this).data('info')) {
						//console.log('verd')
						$('#select_blocks').append('<option value="' + $(this).data(
								'info') + '" selected>' +
							arr_info[0].toUpperCase() + '</option>');
					} else {
						$('#select_blocks').append('<option value="' + $(this).data(
								'info') + '">' +
							arr_info[0].toUpperCase() + '</option>');
					}
					//alert($("#hide_sports").hasClass("hide"));
					if(deporte_item=="" || $("#hide_sports").hasClass("hide") == false ){
						deporte_item=arr_info[0].toUpperCase();
					}
					$("#spanSeleccionado").html("" + deporte_item.toUpperCase());
					//$("#spanSeleccionadoFuerza").html("" + deporte_item.toUpperCase());
					valorBandera= arr_info[0];
					//alert("1-"+valorBandera+arr_info[0].toUpperCase()+" "+deporte_item);
					/*if(arr_info[0].toUpperCase()=="CARRERA") $("#imgCarrera").show();
					if(arr_info[0].toUpperCase()=="CICLISMO") $("#imgCiclismo").show();
					if(arr_info[0].toUpperCase()=="NATACION") $("#imgNatacion").show();
					if(arr_info[0].toUpperCase()=="FUERZA") $("#imgFuerza").show();*/
					try{
						//alert(deporte_item);
						valorAnterior= deporte_item.toUpperCase();
						if(deporte_item.toUpperCase()=="CARRERA") $("#imgCarrera").show();
						if(deporte_item.toUpperCase()=="CICLISMO") $("#imgCiclismo").show();
						if(deporte_item.toUpperCase()=="NATACION") $("#imgNatacion").show();
						if(deporte_item.toUpperCase()=="FUERZA") $("#imgFuerza").show();
						
						/*
						if(deporte_item.toUpperCase()=="3") $("#imgCarrera").show();
						if(deporte_item.toUpperCase()=="1") $("#imgCiclismo").show();
						if(deporte_item.toUpperCase()=="2") $("#imgNatacion").show();
						if(deporte_item.toUpperCase()=="4") {$("#imgFuerza").show(); alert(2);}
						*/
					}
					catch (err) {
						//alert(err);
						/*if(arr_info[0].toUpperCase()=="CARRERA") $("#imgCarrera").show();
						if(arr_info[0].toUpperCase()=="CICLISMO") $("#imgCiclismo").show();
						if(arr_info[0].toUpperCase()=="NATACION") $("#imgNatacion").show();
						if(arr_info[0].toUpperCase()=="FUERZA") $("#imgFuerza").show();*/
					}
				});
			}
			else{
				$(".block_items").each(function() {
					let arr_info = $(this).data('info').split('_');
					if(deporte_item != arr_info[0]){
						
						
					}
					//alert("2-"+valorBandera+arr_info[0]+"--"+deporte_item);
					if(deporte_item != arr_info[0]){
						valorBandera = arr_info[0];
						
						if (info === $(this).data('info')) {
							//console.log('verd')
							$('#select_blocks').append('<option value="' + $(this).data(
									'info') + '" selected>' +
								arr_info[0].toUpperCase() + '</option>');
						} else {
							$('#select_blocks').append('<option value="' + $(this).data(
									'info') + '">' +
								arr_info[0].toUpperCase() + '</option>');
						}
						
						if($("#hddItemSelected").val()==""){
							$("#spanSeleccionado").html(deporte_item.toUpperCase());
						}
						else{
							$("#spanSeleccionado").html($("#spanSeleccionado").html() + " + " + deporte_item.toUpperCase());
						}
						
						//alert("2-"+valorBandera+arr_info[0]);
						
						if(arr_info[0].toUpperCase()=="CARRERA") $("#imgCarrera").show();
						if(arr_info[0].toUpperCase()=="CICLISMO") $("#imgCiclismo").show();
						if(arr_info[0].toUpperCase()=="NATACION") $("#imgNatacion").show();
						if(arr_info[0].toUpperCase()=="FUERZA") $("#imgFuerza").show();
					}
					//alert(valorAnterior);
					if(valorAnterior=="FUERZA"){
						valorAnterior= deporte_item.toUpperCase();
						if(deporte_item.toUpperCase()=="CARRERA") $("#imgCarrera").show();
						if(deporte_item.toUpperCase()=="CICLISMO") $("#imgCiclismo").show();
						if(deporte_item.toUpperCase()=="NATACION") $("#imgNatacion").show();
					}
				});
			}
        }

    });
    //agregamos la fuerza
	$("#cmbIcono").val(4);
	if(deporte_item.toUpperCase() != "FUERZA"){
		$("#spanSeleccionadoFuerza").html(" + &nbsp; FUERZA");
	}
	$("#divIcono").html("Fuerza");
});

$("#select_blocks").change(function() {
	var opcionCombo= $('#hddNombreBloque').val().toLowerCase();
	setCampos(opcionCombo);
});
$(".trans").click(function() {
    //alert(222);
	$(".hide_sports").click();
	$("#spanSeleccionadoFuerza").html("");
	
    $("#spanEcosTotales").html("0");
    $('#first_level').val($(this).val()); //agregado
    $('#second_level').val($(this).val());
    $('.blocks_level').show();
    $('#plan_level').empty();
    $('.plan_level').show();

    $(".trans").hide(); //marco
    $(".trans_level").hide(); //marco
    $(".sports_level").hide(); //marco
    $("#spanSeleccionado").html(""); //marco

    let arr = $(this).val();
    let split_arr = arr.split("_");
    //console.log(split_arr.length);
    let arr_colors = ['bg-light', 'bg-light', 'bg-light']
    $.each(split_arr, function(index, item) {
        let r = (Math.random() + 1).toString(36).substring(7);
        r = item + '_' + index + '_' + r;
        //console.log("random", r);
        //width:' + (90 / split_arr.length).toFixed() +'%
        $('#plan_level').append(
            '<!--<input class="form-control" id="titulo_' + r + '" name="titulo_' + r +
            '" align="center" value="Titulo">-->'
        );
        $('#plan_level').append(
            '<div style="overflow: auto;" class=" col-md-12 chart-wrap horizontal ' +
            r +
            ' card plan_block_level"><div class="' + r + ' card-header"><label>' + item
            .toUpperCase() + '<input type="checkbox" class="radio_plan" id="radio_' +
            r + '" name="radio_' +
            r + '" onclick="radios(radio_' + r + ');" value="' + r + '" ></label>' +
            '</div><div class="block_items card-body grid ' + r + '" id="' + r +
            '" name="' +
            r + '" data-info="' + r + '"></div></div><br>');

        if ($("#spanSeleccionado").html() == "")
            $("#spanSeleccionado").html($("#spanSeleccionado").html() + "" + item
                .toUpperCase());
        else
            $("#spanSeleccionado").html($("#spanSeleccionado").html() + " + " + item
                .toUpperCase());
		
		if(item.toUpperCase()=="CARRERA") $("#imgCarrera").show();
		if(item.toUpperCase()=="CICLISMO") $("#imgCiclismo").show();
		if(item.toUpperCase()=="NATACION") $("#imgNatacion").show();
		if(item.toUpperCase()=="FUERZA") $("#imgFuerza").show();

        if (index !== split_arr.length - 1) {
            //'<div class="bg-info" style="opacity:60%;writing-mode: vertical-lr;transform: rotate(180deg);color:white;" align="center">TRANSICION</div>'
            $('#plan_level').append(
                '<div onclick="call_trans(trans_' + r +
                ');" class="transicion bg-info col-md-12" style="opacity:60%;color:white;" align="center" data-sport="' +
                r +
                '" data-rec="1" data-typerec="min" title="Recuperacion: 1 min " name="trans_' +
                r + '" id="trans_' + r + '">TRANSICION</div>'
            );
        }

    });
    $('input[type="checkbox"]').each(function(index, item) {
        if (index == 0) {
            $(this).prop("checked", true);
            let info = $(this).val();

            $('#select_blocks').empty();
            $(".block_items").each(function() {
                let arr_info = $(this).data('info').split('_');
                if (info === $(this).data('info')) {
                    console.log('verd')
                    $('#select_blocks').append('<option value="' + $(this).data(
                            'info') + '" selected>' +
                        arr_info[0].toUpperCase() + '</option>');
                } else {
                    $('#select_blocks').append('<option value="' + $(this).data(
                            'info') + '">' +
                        arr_info[0].toUpperCase() + '</option>');
                }

            });

        }

    });
});
$(".blocks").click(function() {
	$("#button_make_div").show();
	$("#button_actualizar").hide();
	$("#hddPosicionSelected").val("");
	
    $('#modal_title_block').empty();
    //$('#select_blocks').empty();
	var nombre= $(this).val().toUpperCase();
	//nombreBloque= $(this).val().toUpperCase();
	$('#hddNombreBloque').val(nombre);
	if(nombre=="VUELTA")
		nombre="VUELTA A LA CALMA";
	else if(nombre=="PAUSA")
		nombre="PAUSA ENTRE BLOQUES";
	else if(nombre=="DRILLS")
		nombre="DRILLS DE TECNICA";
	else if(nombre=="COMENTARIO")
		nombre="COMENTARIO ESPECÍFICO";
	else if(nombre=="SPRINTS")
		nombre="SPRINTS REPETIDOS";
	else if(nombre=="TRANSICION")
		nombre="COMENTARIO TRANSICIÓN";
    
	nombreBloque= nombre;
	$('#modal_title_block').append(nombre);
    $('#button_make_div').val($(this).val());
    //drills y circuito consulta a la base de datos, tiempo/distancia , zona , texto, tipo deporte 
	setCampos($(this).val());
	
	
});
$('.ckTransicion').change(function() {
	$('#comment_input').val(this.value);
});
function setCampos(opcion){
	//alert(opcion);
	$('.ckTransicion').prop("checked", false);
	$("#divBloquesTitle").hide();
	$("#spanBloques").html("");
	$("#divBtnAddBloqueDelBloque").hide();
	//$('#pauseRecuperacion').attr("placeholder","Recuperación entre series");
	$('#pause').attr("placeholder","Pausa entre repeticiones");
	let blockSelectedSplit = "";
	try{
		blockSelectedSplit = $('#select_blocks').val().split('_');
	}
	catch (err) {
        blockSelectedSplit = $('#select_blocks').val();
    }
	
	let blockSelected= blockSelectedSplit[0];
	//alert(blockSelected);
	$('#select_blocks').show();
	$('#pauseRecuperacion').hide();
	$('#type_pauseRecuperacion').hide();
	$('#times').val("");
	$('#select_quantity_large').val("");
	$('#select_zone').val("");
	try{
		$('#pause').val("");
	}
	catch (err){}
	$('#series').val("");
	$('#select_type_pause').val("");
	$('#pauseRecuperacion').val("");
	
	$('#select_exercise').val("");
	$('#select_circuit').val("");
	$('.circuit_input').hide();
    $('.drills_input').hide();
	$('.exercise_input').show();
	$('#exercise').val("");
	$('#circuit').val("");
	$('#text_circuit').val("");
	$('#comment_input').val("");
	try{
		$('.exercise_input2').show();
	}
	catch (err){}
	$('.default_input').show();
	$('#set_defaults').show();
	$('#select_zone').show();
	$('#spanPorcentajesTrans').hide();
	
	if(opcion=="pausa"){
			//defecto
			$('.default_input').show();
            $('.exercise_input2').show();
            $('.exercise_input').hide();
            $('.circuit_input').hide();
            $('.drills_input').hide();
            $('#set_defaults').show();
            $('.comment_input').hide();
			
			//ocultamos
			$('#pause').show();
			$('#select_type_pause').show();
			$('#series').hide();
			$('#divTextSerie').hide();
			$('#times').hide();
			$('#select_quantity_large').hide();
			$('#select_type_large').hide();
			$('#select_zone').hide();
			$('#divTextRepeticiones').hide();
			if(blockSelected == "natacion"){
				$('#select_type_pause').val("2");
			}
			else{
				$('#select_type_pause').val("1");
			}
	}
	else if(opcion=="calentamiento" || opcion=="vuelta"){
			$('.default_input').show();
			try{
				$('.exercise_input2').show();
			}
			catch (err){}
            $('.exercise_input').hide();
            $('.circuit_input').hide();
            $('.drills_input').hide();
            $('#set_defaults').show();
            $('.comment_input').hide();
			$('#select_quantity_large').show();
			$('#select_type_large').show();
			///
			$('#times').val("1");
			$('#pause').val("0");
			$('#series').val("");
			$('#series').hide();
			$('#divTextSerie').hide();
			//select_blocks
            //$('#set_defaults').hide();//solo al editar
            $('.comment_input').hide();
			if(blockSelected == "natacion"){
				$('#select_type_large').val("4");
				$('#pause').show();
				$('#select_type_pause').show();
				$('#times').show();
				$('#divTextRepeticiones').show();
			}
			else{
				$('#select_type_large').val("2");
				$('#pause').val("");
				$('#pause').hide();
				$('#select_type_pause').hide();
				$('#times').hide();
				$('#divTextRepeticiones').hide();
			}
			$('#select_quantity_large').val("");
			$('#select_type_pause').val("2");
			$('#select_zone').val("1");
	}
	else if(opcion=="continuo"){
			$('#select_quantity_large').show();
			$('#select_type_large').show();
			$('.default_input').show();
            $('.exercise_input2').show();
            $('.exercise_input').hide();
            $('.circuit_input').hide();
            $('.drills_input').hide();
            $('#set_defaults').show();
            $('.comment_input').hide();
			///
            $('.default_input').hide();
            $('#set_defaults').hide();
            $('.comment_input').hide();
			
			if(blockSelected == "natacion"){
				$('#select_type_large').val("4");
			}
			else{
				$('#select_type_large').val("2");
			}
			$('#select_quantity_large').val("");
			$('#select_zone').val("1");
	}
	else if(opcion=="circuito"){
		$('.circuit_input').show();
        $('.drills_input').hide();
		$('.exercise_input').hide();
		$('.exercise_input2').hide();
		$('.default_input').hide();
		$('#set_defaults').hide();
		$('.comment_input').hide();
		$('#select_zone').hide();
		$('#select_blocks').hide();
	}
	else if(opcion=="drills"){
        //alert('drills')
        $('.drills_input').show();
        $('.circuit_input').hide();
		$('.exercise_input').hide();
		$('.exercise_input2').hide();
		$('.default_input').hide();
		$('#set_defaults').hide();
		$('.comment_input').hide();
		$('#select_zone').hide();
		$('#select_blocks').hide();
        /*
		$('.exercise_input').show();
		$('.exercise_input2').show();
		$('.circuit_input').hide();
		$('.comment_input').hide();
		
		$('#pause').show();
		$('#select_type_pause').show();
		$('#series').hide();
		$('#times').show();
		$('#divTextRepeticiones').show();
		$('#select_quantity_large').hide();
		$('#select_type_large').show();
		$('#select_quantity_large').show();
		$('#select_zone').show();
		$('#divTextSerie').hide();
		$('#select_type_large').val("4");
		$('#select_type_pause').val("2");
		$('#select_zone').val("2");*/
	}
	else if(opcion=="comentario"){
		$('.circuit_input').hide();
        $('.drills_input').hide();
		$('.exercise_input').hide();
		$('.exercise_input2').hide();
		$('.default_input').hide();
		$('#set_defaults').hide();
		$('.comment_input').show();
		$('#select_zone').hide();
		$('#select_blocks').hide();
	}
	else if(opcion=="transicion"){
		$('.circuit_input').hide();
        $('.drills_input').hide();
		$('.exercise_input').hide();
		$('.exercise_input2').hide();
		$('.default_input').hide();
		$('#set_defaults').hide();
		$('#select_zone').hide();
		$('#select_blocks').hide();
		$('#spanPorcentajesTrans').show();
		$('.comment_input').hide();
		//$('.comment_input').show();
	}
	else if(opcion=="intervalos" || opcion=="intermitente" || opcion=="repeticiones" || opcion=="sprints"){
		$('.default_input').show();
		$('.exercise_input2').show();
		$('.exercise_input').hide();
		$('.circuit_input').hide();
        $('.drills_input').hide();
		$('#set_defaults').show();
		$('#series').show();
		$('#divTextSerie').show();
		$('#pause').show();
		$('#select_quantity_large').show();
		$('#select_type_large').show();
		$('#select_type_pause').show();
		$('#pauseRecuperacion').show();
		$('#type_pauseRecuperacion').show();
		$('#times').show();
		$('#divTextRepeticiones').show();
		
		$('#series').val("1");
		$('#pauseRecuperacion').val("0");
		
		$('.comment_input').hide();
		
		if(opcion=="intermitente"){
			$('#select_type_large').val("2");
			$('#select_type_pause').val("2");
			$('#type_pauseRecuperacion').val("1");
			if(blockSelected == "natacion" || blockSelected == "carrera"){
				$('#select_type_large').val("4");
				$('#select_type_pause').val("2");
			}
			else{
				$('#select_type_large').val("1");
				$('#select_type_pause').val("2");
			}
		}
		else if(opcion=="repeticiones"){
			$('#select_type_pause').val("1");
			if(blockSelected == "natacion" || blockSelected == "carrera"){
				$('#select_type_large').val("4");
			}
			else{
				$('#select_type_large').val("2");
			}
		}
		else if(opcion=="sprints"){
			$('#select_type_pause').val("2");
			$('#type_pauseRecuperacion').val("2");
			if(blockSelected == "natacion" || blockSelected == "carrera"){
				$('#select_type_large').val("4");
			}
			else{
				$('#select_type_large').val("1");
			}
		}
		else{//intervalos
			//$('#pauseRecuperacion').attr("placeholder","Recuperación entre repeticiones");
			$('#type_pauseRecuperacion').val("1");
			if(blockSelected == "natacion"){
				$('#select_type_large').val("4");
				$('#select_type_pause').val("2");
			}
			else if(blockSelected == "carrera"){
				$('#select_type_large').val("4");
				$('#select_type_pause').val("1");
			}
			else{
				$('#select_type_large').val("2");
				$('#select_type_pause').val("1");
			}
		}
	}
	else if(opcion=="progresivo" || opcion=="farlek" || opcion=="secuencia"){
		$("#divBtnAddBloqueDelBloque").show();
		$("#divBloquesTitle").show();
		$("#divBloquesTitle").html("Bloque 1");
		$('.default_input').show();
		$('.exercise_input2').show();
		$('.exercise_input').hide();
		$('.circuit_input').hide();
        $('.drills_input').hide();
		$('#set_defaults').show();
		$('#pauseRecuperacion').show();
		$('#type_pauseRecuperacion').show();
		
		if(opcion=="secuencia"){
			$('#pause').show();
			$('#select_type_pause').show();
			$('#pause').attr("placeholder","Pausa entre bloques");
			$('#select_type_pause').val("1");
		}
		else{
			$('#pause').hide();
			$('#select_type_pause').hide();
		}
		
		$('.comment_input').hide();
		$('#times').hide();
		$('#divTextRepeticiones').hide();
		$('#series').show();
		$('#divTextSerie').show();
		$('#select_quantity_large').show();
		$('#select_type_large').show();
		
		if(blockSelected == "natacion" || blockSelected == "carrera"){
			if((opcion=="farlek" || opcion=="progresivo") && blockSelected == "carrera")
				$('#select_type_large').val("2");
			else
				$('#select_type_large').val("4");
			$('#type_pauseRecuperacion').val("1");
		}
		else{
			if(opcion=="secuencia"){
				$('#select_type_large').val("2");
			}
			else{
				$('#select_type_large').val("2");
			}
			$('#type_pauseRecuperacion').val("1");
		}
		
		$('#series').val("1");
		let bloques=1;
		if(opcion=="progresivo") bloques= 4;
		if(opcion=="farlek") bloques= 3;
		if(opcion=="secuencia") bloques= 2;
		
		addBloques(bloques, 1);
		for(var i=1; i<bloques; i++){
			$("#select_type_large"+(i+1)).val($("#select_type_large").val());
		}/**/
		
		$('#hddNumBloqueDelBloque').val(bloques);
	}
	else{
		$('.default_input').show();
		$('.exercise_input2').show();
		$('.exercise_input').hide();
		$('.circuit_input').hide();
        $('.drills_input').hide();
		$('#select_zone').show();
		$('#set_defaults').show();
		$('.comment_input').hide();
    }
	$('#set_defaults').hide();
}
function addBloques(cantidad, _i){
	for(var i=_i; i<cantidad; i++){
		var htmlBloque='<span class="divBloquesTitle_'+(i+1)+'"><div id="divBloquesTitle" style="font-weight:bold; border-bottom: solid 2px #D4D4D4; margin-bottom: 5px; margin-top:-10px;">Bloque '+(i+1)+'</div>';
		htmlBloque +='<div class="input-group input-group-sm mb-3 exercise_input2" style="width:60%; float: left">';
            htmlBloque +='<input type="number" class="form-control clsInputBloques" placeholder="Numérico" aria-label="min/seg/mts" aria-describedby="basic-addon1" min="1" id="select_quantity_large'+(i+1)+'" name="select_quantity_large'+(i+1)+'" style="height:38px;">';
			htmlBloque +='<select class="form-control-sm custom-select" id="select_type_large'+(i+1)+'" name="select_type_large'+(i+1)+'" style="max-width:160px !important;">';
            htmlBloque +='<option value="2" selected>Minutos</option>';
            htmlBloque +='<option value="1">Segundos</option>';
            htmlBloque +='<option value="3">Horas</option>';
            htmlBloque +='<option value="4">Metros</option>';
            htmlBloque +='<option value="5">Kilómetros</option>';
            htmlBloque +='</select>';
            htmlBloque +='</div>';
            htmlBloque +='<div class="input-group input-group-sm mb-3" style="width:40%; float: left">';
            htmlBloque +='<select class="form-control-sm custom-select" id="select_zone'+(i+1)+'" name="select_zone'+(i+1)+'" style="margin-left: 10px !important;">';
            htmlBloque +='<option value="" selected>Elige la zona</option>';
            htmlBloque +='<option value="1">Zona 1</option>';
            htmlBloque +='<option value="2">Zona 2</option>';
            htmlBloque +='<option value="3">Zona 3</option>';
            htmlBloque +='<option value="4">Zona 4</option>';
            htmlBloque +='<option value="5">Zona 5</option>';
            htmlBloque +='<option value="6">Zona 6</option>';
            htmlBloque +='<option value="7">Zona 7</option>';
            htmlBloque +='<option value="8">Zona 8</option>';
            htmlBloque +='<option value="9">Zona 9</option>';
            htmlBloque +='<option value="10">Zona 10</option>';
            htmlBloque +='</select>';
            htmlBloque +='</div></span>';
		$("#spanBloques").html($("#spanBloques").html() + htmlBloque);
		//$("#select_type_large"+(i+1)).val($("#select_type_large").val());
		//$("#select_type_large"+(i+1)+"").val(4);
	}
	
}


function validaBloque(_block){
	console.log(_block);
	if(_block=="progresivo" || _block=="farlek" || _block=="secuencia"){
		let valorSerie = $("#series").val();
		if(valorSerie != "")
			valorSerie = 1;
		if($("#pauseRecuperacion").val()=="" && valorSerie>1){
			if(contBloqueDelbloque==0){//solo es un bloque para farlek, progresivo y secuencia
				//alert($("#series").val());
				swal(" " , "Debe establecer la recuperación entre series", {
					icon : "warning",
					buttons: {        			
						confirm: {
							className : 'btn btn-warning'
						}
					},
				});
				//alert("Debe establecer la recuperación entre series");
			}
			return false;
		}
	}
	return true;
}

	
function createComponentesCarga(){
	contComponentes +=1;
	if(bloqueAnterior != block){
		grupoID++;
	}
	/*if(grupoID==0 && contComponentes>1){
		grupoID= contComponentes;
	}*/
	//alert(contBloqueDelbloque);
	var urlBusqueda= 'index.php?r=exercisesexercise/getexercise';
	
	/////////////////////////////////////////////////////////////////
    let case_type = $('#select_type_large').val();
	if(contBloqueDelbloque==1){//para el bloque 2 ... aplica para farlek, progresivo y secuencia
		case_type = $('#select_type_large2').val();
	}
	else if(contBloqueDelbloque==2){//para el bloque 3 ... aplica para farlek, progresivo y secuencia
		case_type = $('#select_type_large3').val();
	}
	else if(contBloqueDelbloque==3){//para el bloque 4 ... aplica para farlek, progresivo y secuencia
		case_type = $('#select_type_large4').val();
	}
	else if(contBloqueDelbloque>3){//para el bloque 4 ... aplica para farlek, progresivo y secuencia
		case_type = $('#select_type_large'+contBloqueDelbloque).val();
	}
    let string_type = 'def.';
    switch (case_type) {
        case '2':
            string_type = 'min';
            break;
        case '1':
            string_type = 'seg';
            break;
        case '3':
            string_type = 'hrs';
            break;
        case '4':
            string_type = 'mts';
            break;
        case '5':
            string_type = 'kms';
            break;
    }

    let pause_type = $('#select_type_pause').val();
    let string_type_pause = 'def.';
    let pause = 0
    pause = Number($('#pause').val());
    switch (pause_type) {
        case '1':
            string_type_pause = 'min';
            break;
        case '2':
            string_type_pause = 'seg';
            break;
    }

    let times = $('#times').val();
    if (times == '') {
        times = 1;
    }

    block = $("#button_make_div").val();
	if(!validaBloque(block)){
		return false;
	}


    times = Number(times);
	if(contBloqueDelbloque==0){//para el bloque 1 ... aplica para farlek, progresivo y secuencia
    	quantity_large = Number($('#select_quantity_large').val());
		zone = $('#select_zone').val();
		tipoMetricaBloque= $('#select_type_large').val();
	}
	else if(contBloqueDelbloque==1){//para el bloque 2 ... aplica para farlek, progresivo y secuencia
		quantity_large = Number($('#select_quantity_large2').val());
		zone = $('#select_zone2').val();
		tipoMetricaBloque= $('#select_type_large2').val();
	}
	else if(contBloqueDelbloque==2){//para el bloque 3 ... aplica para farlek, progresivo y secuencia
		quantity_large = Number($('#select_quantity_large3').val());
		zone = $('#select_zone3').val();
		tipoMetricaBloque= $('#select_type_large3').val();
	}
	else if(contBloqueDelbloque==3){//para el bloque 4 ... aplica para farlek, progresivo y secuencia
		quantity_large = Number($('#select_quantity_large4').val());
		zone = $('#select_zone4').val();
		tipoMetricaBloque= $('#select_type_large4').val();
	}
	else if(contBloqueDelbloque>3){// aplica para farlek, progresivo y secuencia
		quantity_large = Number($('#select_quantity_large'+contBloqueDelbloque).val());
		zone = $('#select_zone'+contBloqueDelbloque).val();
		tipoMetricaBloque= $('#select_type_large'+contBloqueDelbloque).val();
	}
    
    series = Number($('#series').val());
	
	var recup= $('#pauseRecuperacion').val();
	recup= (recup=="" ? 0 : recup);
	var recup_type= $('#type_pauseRecuperacion').val();
    let string_recup_type = '';
	switch (recup_type) {
        case '1':
            string_recup_type = 'min';
            break;
        case '2':
            string_recup_type = 'seg';
            break;
    }
	
	$('#hddUltimoBloqueAgregado').val(block);
    $('#exampleModal').modal('hide');
	/////////////////////////////////////////////////////////////////
	
	
	////////////////////////////////////////////
	//////////////// getFormulas ///////////////
	////////////////////////////////////////////
	let _ecosTotales = 0;
	let _duracionEjercicio=0;
	let _average=0;
	let _totalMinutosPausa=0;
    let i = 0;
    var rows;
    var temp;
	var _ppm = "--";
	var _minKm= "--";
	var _min100= "--";
	var _min400= "--";
    var _minDist= "--";
	var _minutosEjercicio= 0;
	var _factorEjer= "--";
	var _factorInten= "--";
	let imgDeporte= "";
	let blockSelected= "";
	let deporteSportID= 0;
	let nombreEx="";
	let imagenEx="";
	/*if(block=="circuito"){
		blockSelected = $('#blockSelected').val();
		str = $('#hddNombreBloque').val();
		str2 = str.charAt(0).toUpperCase() + str.slice(1);
		nombreBloque = str2;
	}
	else{
	}*/
	try {
		var zona = zone;
		var iconoFE = "C";
		series = series;
		var repeticiones = times;
		var minutosRepeticion = quantity_large;
		var minutosPausa = pause;
		var minutosRecuperacion = recup;
		var kmPorHr = 16.4;
		var distancia = quantity_large;
		var opcionVelocidadRitmo = "CARRERA";
		var distTiempoMetrica = tipoMetricaBloque;
		var perfilID = $('#sessionsssession-profile_id').val();
		if (perfilID == "") perfilID = 0;

		//let nombreBloque= $('#hddNombreBloque').val().toLowerCase();
		nombreBloque= nombreBloque.toLowerCase();
		nombreBloque= nombreBloque.charAt(0).toUpperCase() + nombreBloque.slice(1);
		let blockSelectedSplit = $('#select_blocks').val().split('_');
		blockSelected= blockSelectedSplit[0];
		//alert($('#select_blocks').val()+" -" + blockSelected);
		//alert(blockSelected);
		//blockSelected = "carrera";
						if($('#blockSelected').val()!="" && $("#hddItemSelected").val()!=""){
					blockSelected = $('#blockSelected').val();
			 	 	//alert(blockSelected);
				}
				str = $('#hddNombreBloque').val();
				str2 = str.charAt(0).toUpperCase() + str.slice(1);
				nombreBloque = str2;
				perfilID=0;
				//alert(perfilID);
						/*var temp = $("#select_blocks").val().split("_");
		if(blockSelected != temp[0]){
			blockSelected = temp[0];
			alert(12);
		}*/
		/*alert(blockSelectedSplit);
		alert(blockSelected);*/

		if(blockSelected=="ciclismo"){
			imgDeporte= "Icon_Ciclismo";
			iconoFE = "B";
			deporteSportID= 1;
		}
		else if(blockSelected=="carrera"){
			imgDeporte= "Icon_Carrera";
			deporteSportID= 3;
		}
		else if(blockSelected=="natacion"){
			imgDeporte= "Icon_Natacion";
			opcionVelocidadRitmo = "NATACION";
			iconoFE = "N";
			distancia = quantity_large;
			deporteSportID=2;
		}
		_watts=0;
		data= {
				"zona": zona,
				"iconoFE": iconoFE,
				"series": series,
				"repeticiones": repeticiones,
				"minutosRepeticion": minutosRepeticion,
				"minutosPausa": minutosPausa,
				"minutosRecuperacion": minutosRecuperacion,
				"kmPorHr": kmPorHr,
				"distancia": distancia,
				"opcionVelocidadRitmo": opcionVelocidadRitmo,
				"distTiempoMetrica": $('#select_type_large').val(),
				"ultimoBloqueAgregado": $('#hddUltimoBloqueAgregado').val(),
				"perfilID": perfilID
			};
			console.log(data);
		
		if(block!="circuito" && block!="pausa" && block!='drills'){//agregue drills 130524
			if(pause_type=="2"){//para segundos
				minutosPausa = minutosPausa/60;
			}
			if(recup_type=="2"){//para segundos
				minutosRecuperacion = minutosRecuperacion/60;
			}
			try{
				if(minutosPausa>0){
					minutosPausa = minutosPausa;
				}
				if(minutosRecuperacion>0){
					minutosRecuperacion = minutosRecuperacion;
				}
			}
			catch (err) {
				minutosPausa = 0;
				minutosRecuperacion = 0;
			}
			//alert(perfilID);
			$.ajax({
				type: 'get',
				async: false,
				url: "/web/index.php?r=sessionsssession/getformulas",
				data: {
					"zona": zona,
					"iconoFE": iconoFE,
					"series": series,
					"repeticiones": repeticiones,
					"minutosRepeticion": minutosRepeticion,
					"minutosPausa": minutosPausa,
					"minutosRecuperacion": minutosRecuperacion,
					"kmPorHr": kmPorHr,
					"distancia": distancia,
					"opcionVelocidadRitmo": opcionVelocidadRitmo,
					"distTiempoMetrica": $('#select_type_large').val(),
					"ultimoBloqueAgregado": $('#hddUltimoBloqueAgregado').val(),
					"perfilID": perfilID
				},
				success: function(data) {
					//console.log(data);
					//alert(series);
					rows = JSON.parse(data);
					console.log(rows);
					if(series=="2"){
						//alert(rows[i]['ECOsTotal']+"Z:"+zona+"iconoFE:"+iconoFE+" rep:"+repeticiones+" M:"+minutosRepeticion+" P:"+minutosPausa+" R:"+minutosRecuperacion);
					}
					var cantTemp = 0;
					//alert(12);
					if(rows[i]['errorDato']!=""){
						swal(" Bloque: " + block, "" + rows[i]['errorDato'], {
							icon : "warning",
							buttons: {        			
								confirm: {
									className : 'btn btn-warning'
								}
							},
						});
					}

					_ppm = rows[i]['ppm'];
					_minKm= rows[i]['min_km'];

					_watts= rows[i]['potencia'];

					_min100= rows[i]['min_100'];
					_min400= rows[i]['min_400'];
					_minDist= rows[i]['min_dist'];
					_factorEjer= rows[i]['FactorEjerccion'];
					_factorInten= rows[i]['FactorIntensidad'];
					_ecosTotales= rows[i]['ECOsTotal'];
					_duracionEjercicio= rows[i]['duracionEjercicio'];
					_average= rows[i]['average'];
					_totalMinutosPausa= rows[i]['totalMinutosPausa'];
					_minutosEjercicio= rows[i]['minutosEjercicio'];

												/*_ppm = $('#heart_rate').val();
							_minKm= $('#min_km').val();
							_watts= $('#watts').val();
							_min100= $('#min_100').val();
							_min400= $('#min_400').val();
							_minDist= $('#min_dist').val();
							_factorEjer= $('#exercise_fe').val();
							_factorInten= $('#intensity_factor').val();*/

							//_ecosTotales= rows[i]['ECOsTotal'];
							
				},
				error: function(data) {
					alert("error "+block+" ->>" + data);
				},

			});
		}
		else if(block=="pausa" && blockSelected=="ciclismo"){
			$.ajax({
				type: 'get',
				async: false,
				url: "/web/index.php?r=sessionsssession/getdatoszonas",
				data: {
					"zona": 1,
					"perfilID": perfilID
				},
				success: function(data) {
					//console.log(data);
					//alert(data);
					_average= data;

				},
				error: function(data) {
					alert("error ->>" + data);
				},

			});
		}
	} catch (err) {
		alert(err.message);
	}
	////////////////////////////////////////////
	////////////// fin getFormulas /////////////
	////////////////////////////////////////////
	
	if(porcTransicionAdicional != 0){
		var tempEcos = _ecosTotales * (porcTransicionAdicional/100);
		_ecosTotales = parseInt(_ecosTotales) + Math.round(tempEcos);
	}
	
	var htmlEx="";
	var coment="";
	var idBusqueda= '';
	var exercise_name="";
	
	if(block=="calentamiento" && blockSelected!="natacion"){
		series= "";
		times= "";
		pause= "";
		string_type_pause= "";
		//recup= "";
		//string_recup_type= "";
	}
	else if(block=="calentamiento" && blockSelected=="natacion"){
		series= " ";
		recup= " ";
		string_recup_type= " ";
	}
	else if(block=="drills" || block=="circuito"){
		if(block=="drills") {
            idBusqueda= $("#select_drills").val();
			//alert(idBusqueda + " - "+ block + urlBusqueda );
			urlBusqueda= 'index.php?r=sessionsssession/getdrillbyid';
						var strComent="Comentario:";
			if($("#text_drills").val()=="")
				strComent="";
			coment= '<tr><td colspan="15"><b>'+strComent+'</b><br />'+$("#text_drills").val()+'</td></tr>';
            console.log(coment,$("#text_drills").val());
			series= " ";
			times= " ";
			pause= " ";
			string_type_pause= " ";
			recup= " ";
			string_recup_type= " ";
			/*idBusqueda= $("#select_exercise").val();
			urlBusqueda= 'index.php?r=exercisesexercise/getexercise';
						//alert(idBusqueda);*/
		}
		if(block=="circuito"){
			idBusqueda= $("#select_circuit").val();
			//alert(idBusqueda + " - "+ block + urlBusqueda );
			urlBusqueda= 'index.php?r=sessionsssession/getcircuitbyid';
								if(exercise_id==0 || $("#hddValidaNuevaBusqueda").val()!="")
						idBusqueda = $("#select_circuit").val();
					else if(Number.isInteger($("#select_circuit").val())==false)
						idBusqueda = exercise_id;//$('#idBusquedaC').val();
								var strComent="Comentario:";
			if($("#text_circuit").val()=="")
				strComent="";
			coment= '<tr><td colspan="15"><b>'+strComent+'</b><br />'+$("#text_circuit").val()+'</td></tr>';
			series= " ";
			times= " ";
			pause= " ";
			string_type_pause= " ";
			recup= " ";
			string_recup_type= " ";
		}
		//alert("ex: " + exercise_id);
		/*alert(idBusqueda+ ' -' + $("#select_exercise").val() + '-');
		if(!Number.isInteger($("#select_exercise").val()))
			alert(Number.isInteger($("#select_exercise").val()));
		else
			alert(2);/**/
		
		console.log('url',urlBusqueda,idBusqueda);
		$.ajax({
			type: 'get',
			async: false,
			url: urlBusqueda,
			data: {"id":idBusqueda, "limit":140},
			success: function(data) {
                console.log('data:',data);
				var separarEx = data.split("||");
				htmlEx = '';
				var comentCircuito= "<br />" + coment;
                console.log('comentCircuito',comentCircuito);
				if(block!="circuito" && block!='drills'){//circuito No se crea al tr// agregue drills 130524
					htmlEx += '<tr>';
					comentCircuito= "";
				}
				nombreEx= separarEx[1];
				imagenEx= separarEx[4];
				//alert(idBusqueda +"-" + nombreEx + " - " + imagenEx);
				htmlEx += '<td height="60" width="17px" style="background-color:#2BE47F;">';
				htmlEx += '<td style="vertical-align:middle;"><img id="imgEx'+contComponentes+'" width="40" src="../../media/'+separarEx[4]+'" style="fill:white; border-radius: 50%; min-width: 50.5px;max-width: 50.5px; height: 50.5px;"></td>';
				htmlEx += '<td colspan="4" style="vertical-align:middle;"><span id="spanNameEx'+contComponentes+'" class="spanNameEx'+contComponentes+'" >'+separarEx[1]+comentCircuito+'</span></td>';
				htmlEx += '<td colspan="10" style="height:45px; word-wrap: break-word; text-align:left;"><span id="spanDescipEx'+contComponentes+'">'+separarEx[2]+'</span></td>';
				htmlEx += '</td>';
				if(block!="circuito" && block!="drills"){//circuito No se crea al tr// agregue drills 130524
					htmlEx += '</tr>';
					htmlEx += coment;
				}
				exercise_name= separarEx[1];
			},
			error: function(data) {alert("Error al buscar datos del ejercicio"+data);},
		});
	}
	if (block == 'secuencia' || block == 'progresivo' || block == 'farlek' || block == 'continuo') {
		if (block != 'secuencia') {
			pause= "";
			pause_type= "";
			string_type_pause= " ";
		}
		
		if(block == 'continuo'){
			recup= " ";
			string_recup_type= " ";
			series="";
		}
	}
	else if(block=="vuelta"){
		recup= " ";
		string_recup_type= " ";
		series="";
	}
	else{
		if(series=="" || series==0) series=1;
	}
	//quitar etiqueta repeticiones 
	var _times= times;
	var _series= series;
	var strSerieIgualA1="";
	if(series != 1)
		strSerieIgualA1= series;
	if(block=="intermitente" || block=="intervalos" || block=="repeticiones" || block=="secuencia"){
		_times="";
		if(block=="intervalos" || block=="repeticiones" || block=="secuencia") strSerieIgualA1="";
	}
	let total_calories = $('#total_calories').val();
	//alert(block);
	
	var htmlC= '';
	var strComentario="";
	var fondo="";
	var dirBlanco="blanco/";
	
	//alert(block+"-"+contBloquesEditando);
	if(block=="secuencia" || block=="progresivo" || block=="farlek"){
		if(bloqueAnterior!=block && contBloquesEditando>0)
			idBloqueDelbloque++;
		//htmlC = '<span class="spanComponente_'+idBloqueDelbloque+'">';
		if(initGrupoDiv==1){
			//htmlC += '<div class="tblGrupo'+grupoID+'">';
		}
	}
    if(block=="secuencia" || block=="progresivo" || block=="farlek"){
        // && bloqueAnterior!=block => mblanco 2023
        if(contBloqueDelbloque==0 && bloqueAnterior!=block){//solo es un bloque para farlek, progresivo y secuencia
            
            contBloquesEditando=0;
            htmlC += '<span class="clsComponente" id="spanComponente_'+contComponentes+'" data-id="1" data-item-sortable-id="0" draggable="true" role="option" aria-grabbed="false"><span class="label">'+nombreBloque+'</span>';
            //alert(1);
        }   
    }else{
        // && bloqueAnterior!=block => mblanco 2023
        if(contBloqueDelbloque==0){//solo es un bloque para farlek, progresivo y secuencia
            
            contBloquesEditando=0;
            htmlC += '<span class="clsComponente" id="spanComponente_'+contComponentes+'" data-id="1" data-item-sortable-id="0" draggable="true" role="option" aria-grabbed="false"><span class="label">'+nombreBloque+'</span>';
            //alert(1);
        }    
    }
	
	
	//para editar
	var validaSeriesRepeticiones= true;
	//alert(contBloqueDelbloque);
	if($("#hddAccion").val()=="Editando" && contBloquesEditando>0 && (block == 'secuencia' || block == 'progresivo' || block == 'farlek')){
		validaSeriesRepeticiones= false;
	}
	//fin para editar
	
	var tablaSerie= false;
	var tablaReps= false;
	let limiteBloque= 0;//variable aun no se usa 
	if (block == 'intermitente' || block == 'repeticiones' || block == 'secuencia' || block == 'progresivo' || block == 'farlek' || block == 'intervalos') {
		tablaSerie= true;
		var bordeBajo="";
		var _limiteBloque=0;
		if (block == 'secuencia') {
			_limiteBloque= 1;//un ciclo de dos vueltas 
			/*try{
				limiteBloque= (Number($("#hddNumBloqueDelBloque").val()) - 1);
			}
			catch (err){
				limiteBloque= 1;//un ciclo de dos vueltas 
			}
			if(contBloqueDelbloque==0 && validaSeriesRepeticiones){
				bordeBajo= "border-bottom: solid 0px;";
			}
			else{
				bordeBajo= "border-top: solid 0px;";
			}*/
		}
		else if(block == 'farlek'){
			_limiteBloque= 2;//un ciclo de 3 vueltas 
			/*try{
				limiteBloque= (Number($("#hddNumBloqueDelBloque").val()) - 1);
			}
			catch (err){
				limiteBloque= 2;//un ciclo de 3 vueltas 
			}
			if(contBloqueDelbloque==0 && validaSeriesRepeticiones){
				bordeBajo= "border-bottom: solid 0px;";
			}
			else if(contBloqueDelbloque<2){
				bordeBajo= "border-bottom: solid 0px; border-top: solid 0px;";
			}
			else{
				bordeBajo= "border-top: solid 0px;";
			}*/
		}
		else if (block == 'progresivo') {
			_limiteBloque= 3;//un ciclo de 4 vueltas 
			/*try{
				limiteBloque= (Number($("#hddNumBloqueDelBloque").val()) - 1);
			}
			catch (err){
				limiteBloque= 3;//un ciclo de 4 vueltas 
			}
			if(contBloqueDelbloque==0 && validaSeriesRepeticiones){
				bordeBajo= "border-bottom: solid 0px;";
			}
			else if($("#hddAccion").val()=="Editando"){
				if(contBloquesEditando<limiteBloque){
					//alert(191);
					bordeBajo= "border-bottom: solid 0px; border-top: solid 0px;";
				}
				else{
					//alert(190);
					bordeBajo= "border-top: solid 0px;";
				}
			}
			else if(contBloqueDelbloque<3){
				//alert(091);
				bordeBajo= "border-bottom: solid 0px; border-top: solid 0px;";
			}
			else{
				//alert(090);
				bordeBajo= "border-top: solid 0px;";
			}*/
		}
		
		if (block == 'secuencia' || block == 'progresivo' || block == 'farlek') {
			try{
				limiteBloque= (Number($("#hddNumBloqueDelBloque").val()) - 1);
			}
			catch (err){
				limiteBloque= _limiteBloque;//ciclos dependiendo del bloque
			}
			if(contBloqueDelbloque==0 && validaSeriesRepeticiones){
				bordeBajo= "border-bottom: solid 0px;";
			}
			else if($("#hddAccion").val()=="Editando"){
				if(contBloquesEditando<limiteBloque){
					//alert(191);
					bordeBajo= "border-bottom: solid 0px; border-top: solid 0px;";
				}
				else{
					//alert(190);
					bordeBajo= "border-top: solid 0px;";
				}
			}
			else if(contBloqueDelbloque<Number($("#hddNumBloqueDelBloque").val())){
				//alert(091);
				bordeBajo= "border-bottom: solid 0px; border-top: solid 0px;";
			}
			else{
				//alert(090);
				bordeBajo= "border-top: solid 0px;";
			}
		}
		
		var bordeSerie= "1px";
		var paddingSerie= "padding:0 10px";
		if(series==1){
			bordeSerie= "01";
			paddingSerie= "padding:0";
		}
		htmlC += '<table class="test1" width="100%"><tr><td style="border:solid '+bordeSerie+' #d4d4d4; '+paddingSerie+'; '+bordeBajo+'">';
		if(contBloqueDelbloque==0 && validaSeriesRepeticiones){
			if(series!=1 && series!="")
				//htmlC += '' + series + 'x';
                htmlC += '<span class=" lblSerieD'+contComponentes+'" id="lblSerieD'+contComponentes+'">' + series + 'x</span>';//david230223
		}

		if (block == 'intermitente' || block == 'repeticiones' || block == 'intervalos' || limiteBloque>0){
			htmlC += '<table class="test22" width="100%" class="clstblBloques'+idBloqueDelbloque+'"><tr><td style="border:solid 1px #d4d4d4; padding:10px; '+bordeBajo+'">';
			if(limiteBloque==0){
				htmlC += '<span class=" lblRepsD'+contComponentes+'" id="lblRepsD'+contComponentes+'">' + times + 'x</span>';//david230223
			}
			tablaReps= true;
		}
	}
	htmlC += '<input type="hidden" name="hddBloqueDelBloque[]" id="hddBloqueDelBloque'+contComponentes+'" value="'+contBloqueDelbloque+'" class="hddBloqueDelBloque'+contComponentes+'" />';
	htmlC += '<input type="hidden" name="hddNombreClase[]" id="hddNombreClase'+contComponentes+'" value="'+idBloqueDelbloque+'" class="hddNombreClase'+contComponentes+'" />';
	htmlC += '<input type="hidden" name="hddCarrera[]" id="hddCarrera'+contComponentes+'" value="'+blockSelected+'" class="hddCarrera'+contComponentes+'" />';
	htmlC += '<input type="hidden" name="hddSportID[]" id="hddSportID'+contComponentes+'" value="'+deporteSportID+'" class="hddSportID'+contComponentes+'" />';
	htmlC += '<input type="hidden" name="hddBloque[]" id="hddBloque'+contComponentes+'" value="'+block+'" class="hddBloque'+contComponentes+'" />';
	htmlC += '<input type="hidden" name="circuitoEjexID[]" id="circuitoEjexID'+contComponentes+'" value="'+idBusqueda+'" class="circuitoEjexID'+contComponentes+'" />';
	htmlC += '<input type="hidden" name="hddExerciseName[]" id="hddExerciseName'+contComponentes+'" value="'+exercise_name+'" class="hddExerciseName'+contComponentes+'" />';
	htmlC += '<table border="0" class="tblComponents tblComponente_'+contComponentes+'" width="100%" id="tblComponente_'+contComponentes+'">';
	htmlC += '<tr>';
	
	var metricaRecPausaComentCircuito= '<input type="hidden" name="hddRecup[]" id="hddRecup'+contComponentes+'" value="'+recup+'" class="hddRecup'+contComponentes+'" /><input type="hidden" name="hddMetricaRecup[]" id="hddMetricaRecup'+contComponentes+'" value="'+recup_type+'" class="hddMetricaRecup'+contComponentes+'" />';
		
	if(block=="pausa"){
		htmlC += '<td style="background-color:#C3DBE7; color:#003A5D; font-weight:600; font-size:13px; vertical-align:middle; text-align:left !important; padding-left:20px !important;" align="left">r ^ n Pausa ';
		htmlC += '<span class="labelPausa" id="lblPausa'+contComponentes+'">'+(pause=='0' ? '' : pause + ' ' + string_type_pause)+'</span>';
		//para evitar marcar errores al guardar
		htmlC += metricaRecPausaComentCircuito;
		//fin para evitar marcar errores al guardar
		htmlC += '</td>';
		if(pause_type==1){//minutos
			_totalMinutosPausa= pause;
		}
		else if(pause==2){//segundos
			_totalMinutosPausa= (pause / 60);
		}
		_totalMinutosPausa =_totalMinutosPausa*series;
		
		minutosRecuperacion= minutosRecuperacion * series;
		getSumaEcos(_ecosTotales, quantity_large, case_type, _minutosEjercicio, times, blockSelected, _average, pause_type, _totalMinutosPausa, minutosRecuperacion);
	}
	else if(block=="comentario"){
		fondo= "background-color:#41BC72;";
		dirBlanco="";
		htmlC += '<td style="background-color:#41BC72; color:#003A5D; font-weight:600; font-size:14px; vertical-align:middle; text-align:left !important; padding-left:20px !important;" align="left">';
		htmlC += '<span id="spanComent'+contComponentes+'">' + $("#comment_input").val() + '</span>';
		strComentario= $("#comment_input").val();
		htmlC += metricaRecPausaComentCircuito;
		htmlC += '</td>';
	}
	else if(block=="transicion"){
		var porcTransicion="";
		if($('#rbTransicion10').is(':checked')) {
			//porcTransicion= "<br />Porcentaje adicional: + 10%";
			porcTransicionAdicional=10;
		}
		else if($('#rbTransicion10_v2').is(':checked')) {
			//porcTransicion= "<br />Porcentaje adicional: + 10%";
			porcTransicionAdicional=10;
		}
		else if($('#rbTransicion15').is(':checked')) {
			//porcTransicion= "<br />Porcentaje adicional: + 15%";
			porcTransicionAdicional=15;
		}
		fondo= "background-color:#41BC72;";
		dirBlanco="";
		htmlC += '<td style="background-color:#41BC72; color:#003A5D; font-weight:600; font-size:14px; vertical-align:middle; text-align:left !important; padding-left:20px !important;" align="left">';
		htmlC += '<span id="spanComent'+contComponentes+'">' + $("#comment_input").val() + porcTransicion + '</span>';
		strComentario= $("#comment_input").val();
		htmlC += metricaRecPausaComentCircuito;
		htmlC += '</td>';
	}
	else if(block=="circuito"||block=='drills'){
        let text=$("#text_circuit").val().trim();
        let imgdisplay='';
        if(block=='drills'){
            text=$("#text_drills").val().trim();
            //imgdisplay='display:none';
        }
		htmlC += '<td width="17px" style="background-color:#2BE47F;">';
		htmlC += '</td>';
		htmlC += '<td width="60"><img id="imgEx'+contComponentes+'" src="../../media/' + imagenEx + '" style="fill:white; border-radius: 50%; min-width: 50.5px;max-width: 50.5px; height: 50.5px; '+imgdisplay+'" /></td><td>';
		//strComentario= $("#text_circuit").val().trim();
		strComentario= text;
		//htmlC += '<span style="font-size:14px;" id="spanNameEx'+contComponentes+'" class="spanNameEx'+contComponentes+'">'+nombreEx+'<br />'+ $("#text_circuit").val() +'</span>';
		htmlC += '<span style="font-size:14px;" id="spanNameEx'+contComponentes+'" class="spanNameEx'+contComponentes+'">'+nombreEx+'<br />'+ text +'</span>';
		htmlC += metricaRecPausaComentCircuito;
		htmlC += '</td>';
		//Calculo de tiempo Totales PARA CIRCUITO
		try{
			let horasAMin= Number($("#spanHrsTotales").html())*60;
			let minutosTotales= Number($("#spanMinTotales").html()) + horasAMin;
			minutosTotales +=  10;//30 min de circuito
			totalMinutosSesion += 10;
			var hrs= Math.floor(totalMinutosSesion / 60);
			var min = Math.floor(totalMinutosSesion % 60);
			$("#spanHrsTotales").html(hrs);
			$("#spanMinTotales").html(min);
			//alert("circuito: h"+ hrs + " m" +min + totalMinutosSesion);
		}
		catch (err) {
			alert("error calculo tiempo en circuito. " + err.message);
		}
	}
	else{
		/*background-color: #fff;*/
		//alert(imgDeporte);
		htmlC += '<td height="60" width="17px" style="background-color:#2BE47F;">';
		htmlC += '</td>';
		htmlC += '<td width="30" style="">';
		htmlC += '<img id="_imgDeporte'+contComponentes+'" src="require/imgv2/blanco/'+imgDeporte+'.svg" height="40" style="fill:white;" />';
		//htmlC += '<svg role="img" title="icon3" style="color:#FFFFFF;"><use href="require/imgv2/blanco/'+imgDeporte+'.svg"/></svg>';
		htmlC += '</td>';
		htmlC += '<td width="70">';
		htmlC += 'Ss <br />';
		htmlC += '<span class="label lblSerie'+contComponentes+'" id="lblSerie'+contComponentes+'">'+strSerieIgualA1+'</span>';
		htmlC += '</td>';
		htmlC += '<td width="70">';
		htmlC += 'Reps';
		htmlC += '<br />';
		htmlC += '<span class="label lblReps'+contComponentes+'" id="lblReps'+contComponentes+'">'+(_times=='1' ? '' : _times)+' </span>';
		htmlC += '</td>';
		htmlC += '<td>';
		htmlC += 'Dist/tiempo';
		htmlC += '<br />';
		htmlC += '<span class="label lblDist'+contComponentes+'" id="lblDist'+contComponentes+'">'+quantity_large+' '+string_type+'</span><!--<br />-->';//+_duracionEjercicio
		htmlC += '</td>';
		htmlC += '<td width="70">';
		htmlC += 'Zona';
		htmlC += '<br />';
		htmlC += '<span class="label lblZona'+contComponentes+'" id="lblZona'+contComponentes+'">'+zone+'</span>';
		htmlC += '</td>';
		
		var htmlHddPause = '';
		if(contBloqueDelbloque>0){
			htmlHddPause = '<input type="hidden" class="clsPausaFor hddPausa'+contComponentes+'" name="hddPausa[]" id="hddPausa'+contComponentes+'" value="'+pause+'" />';
			htmlHddPause += '<input type="hidden" class="clsPausaMetricaFor hddMetricaPausa'+contComponentes+'" name="hddMetricaPausa[]" id="hddMetricaPausa'+contComponentes+'" value="'+pause_type+'" />';
		}
		
		var htmlHddRecup = '<input type="hidden" name="hddRecup[]" id="hddRecup'+contComponentes+'" value="'+recup+'" class="hddRecup'+contComponentes+'" />';
		htmlHddRecup += '<input type="hidden" name="hddMetricaRecup[]" id="hddMetricaRecup'+contComponentes+'" value="'+recup_type+'" class="hddMetricaRecup'+contComponentes+'" />';
	
		if(tablaReps==false){
			htmlC += '<td width="70">';
			htmlC += 'Pausa';
			htmlC += '<br />';
			htmlC += '<span class="label lblPausa'+contComponentes+'" id="lblPausa'+contComponentes+'">'+(pause=='0' ? '' : pause + ' ' + string_type_pause)+'</span>';
			htmlC += htmlHddPause; 
			htmlC += '</td>';
			htmlC += '<td width="70">';
			htmlC += 'Recup';
			htmlC += '<br />';
			htmlC += '<span class="label lblRecup'+contComponentes+'" id="lblRecup'+contComponentes+'">'+(recup=='0' ? '' : recup+' '+string_recup_type)+'</span>';
			htmlC += '</td>';
		}
		htmlC += '<td width="40">';
		htmlC += htmlHddRecup; 
		htmlC += 'ppm';
		htmlC += '<br />';
		htmlC += '<span class="label lblPpm'+contComponentes+'" id="lblPpm'+contComponentes+'">'+_ppm+'</span>';
		htmlC += '</td>';
		htmlC += '<td width="40">';
		if(blockSelected=="natacion"){
			htmlC += 'min/100<br />';
		}
		else if(blockSelected=="carrera"){
			htmlC += 'min/km <br />';
		}
		else if(blockSelected=="ciclismo"){
			htmlC += 'watts <br />';

		}
		if(blockSelected=="ciclismo"){
			htmlC += '<span class="label" id="lblMinKm'+contComponentes+'">'+(_watts==undefined ? 0 : _watts)+'</span>';
		}
		else{
			htmlC += '<span class="label" id="lblMinKm'+contComponentes+'">'+_minKm+'</span>';
		}
		
		htmlC += '</td>';
		if(blockSelected=="carrera"){
			htmlC += '<td width="40">';
			htmlC += 'x100';
			htmlC += '<br />';
			htmlC += '<span class="label" id="lblx100'+contComponentes+'">'+_min100+'</span>';
			htmlC += '</td>';
			htmlC += '<td width="40">';
			htmlC += 'x400';
			htmlC += '<br />';
			htmlC += '<span class="label" id="lblx100'+contComponentes+'">'+_min400+'</span>';
			htmlC += '</td>';
		}
		if(blockSelected=="carrera" || blockSelected=="natacion"){
			htmlC += '<td width="40">';
			htmlC += 'xDist';
			htmlC += '<br />';
			htmlC += '<span class="label" id="lblx100'+contComponentes+'">'+_minDist+'</span>';
			htmlC += '</td>';
		}
		htmlC += '<td width="55">';
		htmlC += '<img src="require/img/ecos70.png" width="55" /><div class="spanEcos">'+_ecosTotales+'</div>';
		
		htmlC += '</td>';
		//alert(_duracionEjercicio);
		if(pause_type==1){//minutos
			_totalMinutosPausa= pause * repeticiones * series;
		}
		else if(pause_type==2){//segundos
			_totalMinutosPausa = ((pause * repeticiones * series) / 60);
		}
		//_totalMinutosPausa += minutosRecuperacion * repeticiones * series
		minutosRecuperacion= minutosRecuperacion * _times;
		//alert(minutosRecuperacion);
		//nuevoooo
		//alert(_times + "-"+_minutosEjercicio+ " - " + _totalMinutosPausa+ " - " + minutosRecuperacion+ "("+recup_type+") - " + (_minutosEjercicio+ _totalMinutosPausa + minutosRecuperacion));
		/*if(blockSelected=="natacion"){//natacion
			if(case_type==4){//mts
				_duracionEjercicio= (((quantity_large/100)*(100/_average))/60);
			}
			else if(case_type==5){//km
				_duracionEjercicio= ((quantity_large*10)*(100/_average))/60;
			}
			_duracionEjercicio = _duracionEjercicio * series * _times;
		}
		else{
			if(case_type==4){//mts
				_duracionEjercicio=((quantity_large/1000) * 60)/_average;
			}
			else if(case_type==5){//km
				_duracionEjercicio= (quantity_large * 60) / _average;
			}
			_duracionEjercicio = (_duracionEjercicio + _totalMinutosPausa + minutosRecuperacion) * series * _times;
		}*/
		//alert("2-"+_duracionEjercicio);
		//fin nuevoooo
		getSumaEcos(_ecosTotales, quantity_large, case_type, _minutosEjercicio, times, blockSelected, _average, pause_type, _totalMinutosPausa, minutosRecuperacion);
	}
	//background-color:#fff;
	htmlC += '<td width="20" style="'+fondo+'">';
	//*****************************
	//*****************************
	//se movieron los hdd*********************************
	var _elemtPorBloque= 0;
	try{
		_elemtPorBloque= Number($("#hddNumBloqueDelBloque").val());
	}catch (err) {
		_elemtPorBloque= 0;
	}
	htmlC += '<input type="hidden" name="hddElemtPorBloque[]" id="hddElemtPorBloque'+contComponentes+'" value="'+_elemtPorBloque+'" class="hddElemtPorBloque'+contComponentes+'" />';
	htmlC += '<input type="hidden" name="hddSerie[]" id="hddSerie'+contComponentes+'" value="'+series+'" class="hddSerie'+contComponentes+'" />';
	htmlC += '<input type="hidden" name="hddReps[]" id="hddReps'+contComponentes+'" value="'+times+'" class="hddReps'+contComponentes+'" />';
	htmlC += '<input type="hidden" name="hddDuracionEx[]" id="hddDuracionEx'+contComponentes+'" value="'+_duracionEjercicio+'" class="hddDuracionEx'+contComponentes+'" />';
	htmlC += '<input type="hidden" name="hddDist[]" id="hddDist'+contComponentes+'" value="'+quantity_large+'" class="hddDist'+contComponentes+'" />';
	htmlC += '<input type="hidden" class="clsContDistTiempo hddCont'+contComponentes+'" name="hddCont[]" id="hddCont'+contComponentes+'" value="'+contComponentes+'" />';
	htmlC += '<input type="hidden" name="hddMetricaDist[]" id="hddMetricaDist'+contComponentes+'" value="'+case_type+'" class="hddMetricaDist'+contComponentes+'" />';
	var valorWatts=0;
	try{
		valorWatts= (_watts==undefined ? 0 : _watts);
	}
	catch (err) {
		valorWatts=0;
	}
	htmlC += '<input type="hidden" name="hddWatts[]" id="hddWatts'+contComponentes+'" value="'+valorWatts+'" />';
	htmlC += '<input type="hidden" name="hddPpm[]" id="hddPpm'+contComponentes+'" value="'+_ppm+'" />';
	htmlC += '<input type="hidden" name="hddMinKm[]" id="hddMinKm'+contComponentes+'" value="'+_minKm+'" />';
	htmlC += '<input type="hidden" name="hddx100[]" id="hddx100'+contComponentes+'" value="'+_min100+'" />';
	htmlC += '<input type="hidden" name="hddx400[]" id="hddx400'+contComponentes+'" value="'+_min400+'" />';
	htmlC += '<input type="hidden" name="hddxDist[]" id="hddxDist'+contComponentes+'" value="'+_minDist+'" />';
	htmlC += '<input type="hidden" name="hddZona[]" id="hddZona'+contComponentes+'" value="'+zone+'" class="hddZona'+contComponentes+'" />';
	htmlC += '<input type="hidden" name="hddEcos[]" id="hddEcos'+contComponentes+'" value="'+_ecosTotales+'" />';
	htmlC += '<input type="hidden" name="hddFE[]" id="hddFE'+contComponentes+'" value="'+_factorEjer+'" />';
	htmlC += '<input type="hidden" name="hddFI[]" id="hddFI'+contComponentes+'" value="'+_factorInten+'" />';
	//fin se movieron los hdd*****************************
	//*****************************
	//*****************************
	if(contBloqueDelbloque==0 && validaSeriesRepeticiones){//solo es un bloque para farlek, progresivo y secuencia
		htmlC += '<img src="require/imgv2/' + dirBlanco + 'Generales/Icon_Editar.svg" height="12" class="imgEditar'+contComponentes+'" onclick="getEditar(\''+$('#select_blocks').val()+'\', \''+block.toLowerCase()+'\', '+contComponentes+', '+_elemtPorBloque+');" />';
		htmlC += '<img src="require/imgv2/' + dirBlanco + 'Generales/Icon_Eliminar.svg" height="12" class="imgEliminar'+contComponentes+'" onclick="getEliminar('+contComponentes+', \''+block+'\', '+idBloqueDelbloque+');" />';
		if(block!="comentario" && block!="transicion"){
			htmlC += '<img src="require/imgv2/' + dirBlanco + 'Generales/Icon_Duplicar.svg" height="12" class="imgDuplicar'+contComponentes+'" onclick="getDuplicar('+contComponentes+');" />';
		}
		else{
			htmlC += '<br /> &nbsp;';
		}
		//htmlC += '<span style="font-size:13px; color:#000;" onclick=""><i class="flaticon-file-1" style="color:white;"></i></span>';
	}
	
	if(block=="comentario" || block=="transicion"){
		htmlC += '<input type="hidden" name="hddComent[]" id="hddComent'+contComponentes+'" value="'+$("#comment_input").val()+'" class="hddComent'+contComponentes+'" />';
	}
	else{
		htmlC += '<input type="hidden" name="hddComent[]" id="hddComent'+contComponentes+'" value="'+ strComentario +'" class="hddComent'+contComponentes+'" />';
	}
	htmlC += '<input type="hidden" name="hddPorcentajeTransicion[]" id="hddPorcentajeTransicion'+contComponentes+'" value="'+ porcTransicionAdicional +'" class="hddPorcentajeTransicion'+contComponentes+'" />';
	
	htmlC += '<input type="hidden" name="hddCalories[]" id="hddCalories'+contComponentes+'" value="'+total_calories+'" class="hddCalories'+contComponentes+'" />';
	htmlC += '<input type="hidden" name="hddPausa[]" id="hddPausa'+contComponentes+'" value="'+pause+'" class="hddPausa'+contComponentes+'" />';
	htmlC += '<input type="hidden" name="hddMetricaPausa[]" id="hddMetricaPausa'+contComponentes+'" value="'+pause_type+'" class="hddMetricaPausa'+contComponentes+'" />';
	htmlC += '<input type="hidden" name="hddNameEx[]" id="hddNameEx'+contComponentes+'" value="'+nombreEx+'" class="hddNameEx'+contComponentes+'" />';
	htmlC += '</td>';
	htmlC += '</tr>';
	
	if(block!="circuito" && block!='drills'){//agregue drills
		htmlC += htmlEx;
	}
	htmlC += '</table>';
	
	let pausa_entre_bloques_text="";
	if(block=="secuencia"){
		pausa_entre_bloques_text=" entre bloques";
		/*htmlC += '<tr><td>Pause';
		htmlC += '</td></tr>';/**/
	}
	//alert(contBloqueDelbloque + ' .. ' + tablaSerie);
	
	var muestraPausa=false;
	//alert(contBloquesEditando+"-"+limiteBloque);
	if(limiteBloque==contBloqueDelbloque || limiteBloque==contBloquesEditando){
	   muestraPausa= true;
	}
	
	contBloquesEditando++;
	
	if(tablaReps==true){
		if(typeof Number(pause) == 'number' && muestraPausa==true){
			if(pause>0){
				htmlC += '<table style="width:100%; margin: 6px 0 0 0;"><td style="background-color:#C3DBE7; color:#003A5D; font-weight:600; font-size:13px; vertical-align:middle; text-align:left !important; padding:15px 20px !important;" align="left">';
				htmlC += 'Pausa ' + pausa_entre_bloques_text + ' <span style="font-size:17px;" class="label" id="lblPausa'+contComponentes+'">'+(pause=='0' ? '' : pause + ' ' + string_type_pause) + '</span>';
				htmlC += htmlHddPause;
				htmlC += '</td></table>';
			}
		}
		if(contComponentes>1 && $("#hddAccion").val()=="Editando"){
			//htmlC += '</td></tr></table>';
			//alert("recup");
		}
		
	}
	if(tablaSerie==true){
		if(typeof Number(recup) == 'number' && muestraPausa==true){
			if(recup>0){
				htmlC += '</table><table style="width:100%; margin: 4px 0 10px 0;"><td style="background-color:#C3DBE7; color:#003A5D; font-weight:600; font-size:13px; vertical-align:middle; text-align:left !important; padding:15px 20px !important;" align="left">';
				htmlC += 'Recuperación <span style="font-size:17px;" class="label" id="lblRecup'+contComponentes+'">'+(recup=='0' ? '' : recup+' '+string_recup_type) + '</span>';
				//htmlC += htmlHddRecup;// david202332302 comentado
				htmlC += '</td></table>';
			}
		}
		if(contComponentes>1 && $("#hddAccion").val()=="Editando"){
			//htmlC += '</td></tr></table>';
			//alert("serie");
		}
	}
	//if((contComponentes>1 || bloqueAnterior!=block) && $("#hddAccion").val()=="Editando");
	htmlC += '</span>';
	if(block!="secuencia"){
		//htmlC += '</span>';
	}
	else{
		if(contBloqueDelbloque==1){
			//htmlC += '</span>';
			//alert(1234);
		}
	}
		
	if(bloqueAnterior!=block){
		bloqueAnterior=block;
	}
	
	if(initGrupoDiv==9999){
		htmlC = '</div>';
	}
	$("#divComponentes").html($("#divComponentes").html()+htmlC);
}
function createComponentesCargaSecuencia(limit){
    contComponentes +=1;
    var htmlC= '';
    htmlC += '<span class="clsComponente" id="spanComponente_'+contComponentes+'" data-id="1" data-item-sortable-id="0" draggable="true" role="option" aria-grabbed="false">';
    //for(i=0; i<limit; i++){
                contBloqueDelbloque=0;
      //          if(i==0 || (i==1 && $("#select_quantity_large2").val()!="") || (i==2 && $("#select_quantity_large3").val()!="") || (i==3 && $("#select_quantity_large4").val()!="")){

                    
                    //alert(contBloqueDelbloque);
                    var urlBusqueda= 'index.php?r=exercisesexercise/getexercise';
                    
                    /////////////////////////////////////////////////////////////////
                    let case_type = $('#select_type_large').val();
                    if(contBloqueDelbloque==1){//para el bloque 2 ... aplica para farlek, progresivo y secuencia
                        case_type = $('#select_type_large2').val();
                    }
                    else if(contBloqueDelbloque==2){//para el bloque 3 ... aplica para farlek, progresivo y secuencia
                        case_type = $('#select_type_large3').val();
                    }
                    else if(contBloqueDelbloque==3){//para el bloque 4 ... aplica para farlek, progresivo y secuencia
                        case_type = $('#select_type_large4').val();
                    }
                    else if(contBloqueDelbloque>3){//para el bloque 4 ... aplica para farlek, progresivo y secuencia
                        case_type = $('#select_type_large'+contBloqueDelbloque).val();
                    }
                    let string_type = 'def.';
                    switch (case_type) {
                        case '2':
                            string_type = 'min';
                            break;
                        case '1':
                            string_type = 'seg';
                            break;
                        case '3':
                            string_type = 'hrs';
                            break;
                        case '4':
                            string_type = 'mts';
                            break;
                        case '5':
                            string_type = 'kms';
                            break;
                    }

                    let pause_type = $('#select_type_pause').val();
                    let string_type_pause = 'def.';
                    let pause = 0
                    pause = Number($('#pause').val());
                    switch (pause_type) {
                        case '1':
                            string_type_pause = 'min';
                            break;
                        case '2':
                            string_type_pause = 'seg';
                            break;
                    }

                    let times = $('#times').val();
                    if (times == '') {
                        times = 1;
                    }

                    block = $("#button_make_div").val();
                    if(!validaBloque(block)){
                        return false;
                    }


                    times = Number(times);
                    if(contBloqueDelbloque==0){//para el bloque 1 ... aplica para farlek, progresivo y secuencia
                        quantity_large = Number($('#select_quantity_large').val());
                        zone = $('#select_zone').val();
                        tipoMetricaBloque= $('#select_type_large').val();
                    }
                    else if(contBloqueDelbloque==1){//para el bloque 2 ... aplica para farlek, progresivo y secuencia
                        quantity_large = Number($('#select_quantity_large2').val());
                        zone = $('#select_zone2').val();
                        tipoMetricaBloque= $('#select_type_large2').val();
                    }
                    else if(contBloqueDelbloque==2){//para el bloque 3 ... aplica para farlek, progresivo y secuencia
                        quantity_large = Number($('#select_quantity_large3').val());
                        zone = $('#select_zone3').val();
                        tipoMetricaBloque= $('#select_type_large3').val();
                    }
                    else if(contBloqueDelbloque==3){//para el bloque 4 ... aplica para farlek, progresivo y secuencia
                        quantity_large = Number($('#select_quantity_large4').val());
                        zone = $('#select_zone4').val();
                        tipoMetricaBloque= $('#select_type_large4').val();
                    }
                    else if(contBloqueDelbloque>3){// aplica para farlek, progresivo y secuencia
                        quantity_large = Number($('#select_quantity_large'+contBloqueDelbloque).val());
                        zone = $('#select_zone'+contBloqueDelbloque).val();
                        tipoMetricaBloque= $('#select_type_large'+contBloqueDelbloque).val();
                    }
                    
                    series = Number($('#series').val());
                    
                    var recup= $('#pauseRecuperacion').val();
                    recup= (recup=="" ? 0 : recup);
                    var recup_type= $('#type_pauseRecuperacion').val();
                    let string_recup_type = '';
                    switch (recup_type) {
                        case '1':
                            string_recup_type = 'min';
                            break;
                        case '2':
                            string_recup_type = 'seg';
                            break;
                    }
                    
                    $('#hddUltimoBloqueAgregado').val(block);
                    $('#exampleModal').modal('hide');
                    /////////////////////////////////////////////////////////////////
                    
                    
                    ////////////////////////////////////////////
                    //////////////// getFormulas ///////////////
                    ////////////////////////////////////////////
                    let _ecosTotales = 0;
                    let _duracionEjercicio=0;
                    let _average=0;
                    let _totalMinutosPausa=0;
                    let i = 0;
                    var rows;
                    var temp;
                    var _ppm = "--";
                    var _minKm= "--";
                    var _min100= "--";
                    var _min400= "--";
                    var _minDist= "--";
                    var _minutosEjercicio= 0;
                    var _factorEjer= "--";
                    var _factorInten= "--";
                    let imgDeporte= "";
                    let blockSelected= "";
                    let deporteSportID= 0;
                    let nombreEx="";
                    let imagenEx="";
                    /*if(block=="circuito"){
                        blockSelected = $('#blockSelected').val();
                        str = $('#hddNombreBloque').val();
                        str2 = str.charAt(0).toUpperCase() + str.slice(1);
                        nombreBloque = str2;
                    }
                    else{
                    }*/
                    try {
                        var zona = zone;
                        var iconoFE = "C";
                        series = series;
                        var repeticiones = times;
                        var minutosRepeticion = quantity_large;
                        var minutosPausa = pause;
                        var minutosRecuperacion = recup;
                        var kmPorHr = 16.4;
                        var distancia = quantity_large;
                        var opcionVelocidadRitmo = "CARRERA";
                        var distTiempoMetrica = tipoMetricaBloque;
                        var perfilID = $('#sessionsssession-profile_id').val();
                        if (perfilID == "") perfilID = 0;

                        //let nombreBloque= $('#hddNombreBloque').val().toLowerCase();
                        nombreBloque= nombreBloque.toLowerCase();
                        nombreBloque= nombreBloque.charAt(0).toUpperCase() + nombreBloque.slice(1);
                        let blockSelectedSplit = $('#select_blocks').val().split('_');
                        blockSelected= blockSelectedSplit[0];
                        //alert($('#select_blocks').val()+" -" + blockSelected);
                        //alert(blockSelected);
                        //blockSelected = "carrera";

                                                        if($('#blockSelected').val()!=""){
                                    blockSelected = $('#blockSelected').val();
                                }
                        //alert(blockSelected);
                                str = $('#hddNombreBloque').val();
                                str2 = str.charAt(0).toUpperCase() + str.slice(1);
                                nombreBloque = str2;
                                perfilID=0;

                                
                        if(blockSelected=="ciclismo"){
                            imgDeporte= "Icon_Ciclismo";
                            iconoFE = "B";
                            deporteSportID= 1;
                        }
                        else if(blockSelected=="carrera"){
                            imgDeporte= "Icon_Carrera";
                            deporteSportID= 3;
                        }
                        else if(blockSelected=="natacion"){
                            imgDeporte= "Icon_Natacion";
                            opcionVelocidadRitmo = "NATACION";
                            iconoFE = "N";
                            distancia = quantity_large;
                            deporteSportID=2;
                        }
                        data= {
                                "zona": zona,
                                "iconoFE": iconoFE,
                                "series": series,
                                "repeticiones": repeticiones,
                                "minutosRepeticion": minutosRepeticion,
                                "minutosPausa": minutosPausa,
                                "minutosRecuperacion": minutosRecuperacion,
                                "kmPorHr": kmPorHr,
                                "distancia": distancia,
                                "opcionVelocidadRitmo": opcionVelocidadRitmo,
                                "distTiempoMetrica": $('#select_type_large').val(),
                                "ultimoBloqueAgregado": $('#hddUltimoBloqueAgregado').val(),
                                "perfilID": perfilID
                            };
                            console.log(data);
                        
                        if(block!="circuito" && block!="pausa"){
                            if(pause_type=="2"){//para segundos
                                minutosPausa = minutosPausa/60;
                            }
                            if(recup_type=="2"){//para segundos
                                minutosRecuperacion = minutosRecuperacion/60;
                            }
                            try{
                                if(minutosPausa>0){
                                    minutosPausa = minutosPausa * series;
                                }
                                if(minutosRecuperacion>0){
                                    minutosRecuperacion = minutosRecuperacion * series;
                                }
                            }
                            catch (err) {
                                minutosPausa = 0;
                                minutosRecuperacion = 0;
                            }
                            //alert(perfilID);
                            $.ajax({
                                type: 'get',
                                async: false,
                                url: "/web/index.php?r=sessionsssession/getformulas",
                                data: {
                                    "zona": zona,
                                    "iconoFE": iconoFE,
                                    "series": series,
                                    "repeticiones": repeticiones,
                                    "minutosRepeticion": minutosRepeticion,
                                    "minutosPausa": minutosPausa,
                                    "minutosRecuperacion": minutosRecuperacion,
                                    "kmPorHr": kmPorHr,
                                    "distancia": distancia,
                                    "opcionVelocidadRitmo": opcionVelocidadRitmo,
                                    "distTiempoMetrica": $('#select_type_large').val(),
                                    "ultimoBloqueAgregado": $('#hddUltimoBloqueAgregado').val(),
                                    "perfilID": perfilID
                                },
                                success: function(data) {
                                    //console.log(data);
                                    //alert(series);
                                    rows = JSON.parse(data);
                                    console.log(rows);
                                    if(series=="2"){
                                        //alert(rows[i]['ECOsTotal']+"Z:"+zona+"iconoFE:"+iconoFE+" rep:"+repeticiones+" M:"+minutosRepeticion+" P:"+minutosPausa+" R:"+minutosRecuperacion);
                                    }
                                    var cantTemp = 0;
                                    //alert(12);
                                    if(rows[i]['errorDato']!=""){
                                        swal(" Bloque: " + block, "" + rows[i]['errorDato'], {
                                            icon : "warning",
                                            buttons: {        			
                                                confirm: {
                                                    className : 'btn btn-warning'
                                                }
                                            },
                                        });
                                    }

                                    _ppm = rows[i]['ppm'];
                                    _minKm= rows[i]['min_km'];

                                    _watts= rows[i]['potencia'];

                                    _min100= rows[i]['min_100'];
                                    _min400= rows[i]['min_400'];
                                    _minDist= rows[i]['min_dist'];
                                    _factorEjer= rows[i]['FactorEjerccion'];
                                    _factorInten= rows[i]['FactorIntensidad'];
                                    _ecosTotales= rows[i]['ECOsTotal'];
                                    _duracionEjercicio= rows[i]['duracionEjercicio'];
                                    _average= rows[i]['average'];
                                    _totalMinutosPausa= rows[i]['totalMinutosPausa'];
                                    _minutosEjercicio= rows[i]['minutosEjercicio'];

                                                                                /*_ppm = $('#heart_rate').val();
                                            _minKm= $('#min_km').val();
                                            _watts= $('#watts').val();
                                            _min100= $('#min_100').val();
                                            _min400= $('#min_400').val();
                                            _minDist= $('#min_dist').val();
                                            _factorEjer= $('#exercise_fe').val();
                                            _factorInten= $('#intensity_factor').val();*/

                                            //_ecosTotales= rows[i]['ECOsTotal'];
                                            
                                },
                                error: function(data) {
                                    alert("error "+block+" ->>" + data);
                                },

                            });
                        }
                    } catch (err) {
                        alert(err.message);
                    }
                    ////////////////////////////////////////////
                    ////////////// fin getFormulas /////////////
                    ////////////////////////////////////////////
                    
                    var htmlEx="";
                    var coment="";
                    var idBusqueda= '';
                    var exercise_name="";
                    
                    
                    if (block == 'secuencia' || block == 'progresivo' || block == 'farlek' || block == 'continuo') {
                        pause= "";
                        pause_type= "";
                        string_type_pause= " ";
                        if(block == 'continuo'){
                            recup= " ";
                            string_recup_type= " ";
                            series="";
                        }
                    }
                    //quitar etiqueta repeticiones 
                    var _times= times;
                    var _series= series;
                    var strSerieIgualA1="";
                    if(series != 1)
                        strSerieIgualA1= series;
                    if(block=="intermitente" || block=="intervalos" || block=="repeticiones" || block=="secuencia"){
                        _times="";
                        if(block=="intervalos" || block=="repeticiones" || block=="secuencia") strSerieIgualA1="";
                    }
                    let total_calories = $('#total_calories').val();
                    //alert(block);
                    
                    
                    var strComentario="";
                    var fondo="";
                    var dirBlanco="blanco/";
                    
                    //alert(block+"-"+contBloquesEditando);
                    if(block=="secuencia" || block=="progresivo" || block=="farlek"){
                        if(bloqueAnterior!=block && contBloquesEditando>0)
                            idBloqueDelbloque++;
                        //htmlC = '<span class="spanComponente_'+idBloqueDelbloque+'">';
                    }
                    if(block=="secuencia"){
                        // && bloqueAnterior!=block => mblanco 2023
                        if(contBloqueDelbloque==0 && bloqueAnterior!=block){//solo es un bloque para farlek, progresivo y secuencia
                            
                            contBloquesEditando=0;
                            //htmlC += '<span class="clsComponente" id="spanComponente_'+contComponentes+'" data-id="1" data-item-sortable-id="0" draggable="true" role="option" aria-grabbed="false"><span class="label">'+nombreBloque+'</span>';
                            htmlC += '<span class="label">'+nombreBloque+'</span>';
                            //alert(1);
                        }   
                    }
                    
                    
                    //para editar
                    var validaSeriesRepeticiones= true;
                    //alert(contBloqueDelbloque);
                    if($("#hddAccion").val()=="Editando" && contBloquesEditando>0 && (block == 'secuencia' || block == 'progresivo' || block == 'farlek')){
                        validaSeriesRepeticiones= false;
                    }
                    //fin para editar
                    
                    var tablaSerie= false;
                    var tablaReps= false;
                    let limiteBloque= 0;//variable aun no se usa 
                    if (block == 'intermitente' || block == 'repeticiones' || block == 'secuencia' || block == 'progresivo' || block == 'farlek' || block == 'intervalos') {
                        tablaSerie= true;
                        var bordeBajo="";
                        var _limiteBloque=0;
                        if (block == 'secuencia') {
                            _limiteBloque= 1;//un ciclo de dos vueltas 
                            /*try{
                                limiteBloque= (Number($("#hddNumBloqueDelBloque").val()) - 1);
                            }
                            catch (err){
                                limiteBloque= 1;//un ciclo de dos vueltas 
                            }
                            if(contBloqueDelbloque==0 && validaSeriesRepeticiones){
                                bordeBajo= "border-bottom: solid 0px;";
                            }
                            else{
                                bordeBajo= "border-top: solid 0px;";
                            }*/
                        }
                        
                        if (block == 'secuencia' || block == 'progresivo' || block == 'farlek') {
                            try{
                                limiteBloque= (Number($("#hddNumBloqueDelBloque").val()) - 1);
                            }
                            catch (err){
                                limiteBloque= _limiteBloque;//ciclos dependiendo del bloque
                            }
                            if(contBloqueDelbloque==0 && validaSeriesRepeticiones){
                                bordeBajo= "border-bottom: solid 0px;";
                            }
                            else if($("#hddAccion").val()=="Editando"){
                                if(contBloquesEditando<limiteBloque){
                                    //alert(191);
                                    bordeBajo= "border-bottom: solid 0px; border-top: solid 0px;";
                                }
                                else{
                                    //alert(190);
                                    bordeBajo= "border-top: solid 0px;";
                                }
                            }
                            else if(contBloqueDelbloque<Number($("#hddNumBloqueDelBloque").val())){
                                //alert(091);
                                bordeBajo= "border-bottom: solid 0px; border-top: solid 0px;";
                            }
                            else{
                                //alert(090);
                                bordeBajo= "border-top: solid 0px;";
                            }
                        }
                        
                        var bordeSerie= "1px";
                        var paddingSerie= "padding:0 10px";
                        if(series==1){
                            bordeSerie= "01";
                            paddingSerie= "padding:0";
                        }
                        htmlC += '<table width="100%"><tr><td style="border:solid '+bordeSerie+' #d4d4d4; '+paddingSerie+'; '+bordeBajo+'">';
                        if(contBloqueDelbloque==0 && validaSeriesRepeticiones){
                            if(series!=1 && series!="")
                                //htmlC += '' + series + 'x';
                                htmlC += '<span class=" lblSerieD'+contComponentes+'" id="lblSerieD'+contComponentes+'">' + series + 'x</span>';//david230223
                        }

                        if (block == 'intermitente' || block == 'repeticiones' || block == 'intervalos' || limiteBloque>0){
                            htmlC += '<table width="100%" class="clstblBloques'+idBloqueDelbloque+'"><tr><td style="border:solid 1px #d4d4d4; padding:10px; '+bordeBajo+'">';
                            if(limiteBloque==0){
                                htmlC += '<span class=" lblRepsD'+contComponentes+'" id="lblRepsD'+contComponentes+'">' + times + 'x</span>';//david230223
                            }
                            tablaReps= true;
                        }
                    }
                    //agregar aca el for david 2023
                    for(i=0; i<limit; i++){
                contBloqueDelbloque=i;
                if(i==0 || (i==1 && $("#select_quantity_large2").val()!="") || (i==2 && $("#select_quantity_large3").val()!="") || (i==3 && $("#select_quantity_large4").val()!="")){

                    htmlC += '<input type="hidden" name="hddBloqueDelBloque[]" id="hddBloqueDelBloque'+contComponentes+'" value="'+contBloqueDelbloque+'" class="hddBloqueDelBloque'+contComponentes+'" />';
                    htmlC += '<input type="hidden" name="hddNombreClase[]" id="hddNombreClase'+contComponentes+'" value="'+idBloqueDelbloque+'" class="hddNombreClase'+contComponentes+'" />';
                    htmlC += '<input type="hidden" name="hddCarrera[]" id="hddCarrera'+contComponentes+'" value="'+blockSelected+'" class="hddCarrera'+contComponentes+'" />';
                    htmlC += '<input type="hidden" name="hddSportID[]" id="hddSportID'+contComponentes+'" value="'+deporteSportID+'" class="hddSportID'+contComponentes+'" />';
                    htmlC += '<input type="hidden" name="hddBloque[]" id="hddBloque'+contComponentes+'" value="'+block+'" class="hddBloque'+contComponentes+'" />';
                    htmlC += '<input type="hidden" name="circuitoEjexID[]" id="circuitoEjexID'+contComponentes+'" value="'+idBusqueda+'" class="circuitoEjexID'+contComponentes+'" />';
                    htmlC += '<input type="hidden" name="hddExerciseName[]" id="hddExerciseName'+contComponentes+'" value="'+exercise_name+'" class="hddExerciseName'+contComponentes+'" />';
                    htmlC += '<table border="0" class="tblComponents tblComponente_'+contComponentes+'" width="100%" id="tblComponente_'+contComponentes+'">';
                    htmlC += '<tr>';
                    
                    var metricaRecPausaComentCircuito= '<input type="hidden" name="hddRecup[]" id="hddRecup'+contComponentes+'" value="'+recup+'" class="hddRecup'+contComponentes+'" /><input type="hidden" name="hddMetricaRecup[]" id="hddMetricaRecup'+contComponentes+'" value="'+recup_type+'" class="hddMetricaRecup'+contComponentes+'" />';
                        
                    
                        /*background-color: #fff;*/
                        //alert(imgDeporte);
                        htmlC += '<td height="60" width="17px" style="background-color:#2BE47F;">';
                        htmlC += '</td>';
                        htmlC += '<td width="30" style="">';
                        htmlC += '<img src="require/imgv2/blanco/'+imgDeporte+'.svg" height="40" style="fill:white;" />';
                        //htmlC += '<svg role="img" title="icon3" style="color:#FFFFFF;"><use href="require/imgv2/blanco/'+imgDeporte+'.svg"/></svg>';
                        htmlC += '</td>';
                        htmlC += '<td width="70">';
                        htmlC += 'Ss <br />';
                        htmlC += '<span class="label lblSerie'+contComponentes+'" id="lblSerie'+contComponentes+'">'+strSerieIgualA1+'</span>';
                        htmlC += '</td>';
                        htmlC += '<td width="70">';
                        htmlC += 'Reps';
                        htmlC += '<br />';
                        htmlC += '<span class="label lblReps'+contComponentes+'" id="lblReps'+contComponentes+'">'+(_times=='1' ? '' : _times)+' </span>';
                        htmlC += '</td>';
                        htmlC += '<td>';
                        htmlC += 'Dist/Tiempo';
                        htmlC += '<br />';
                        htmlC += '<span class="label lblDist'+contComponentes+'" id="lblDist'+contComponentes+'">'+quantity_large+' '+string_type+'</span><!--<br />-->';//+_duracionEjercicio
                        htmlC += '</td>';
                        htmlC += '<td width="70">';
                        htmlC += 'Zona';
                        htmlC += '<br />';
                        htmlC += '<span class="label lblZona'+contComponentes+'" id="lblZona'+contComponentes+'">'+zone+'</span>';
                        htmlC += '</td>';
                        
                        var htmlHddPause = '';
                        if(contBloqueDelbloque>0){
                            htmlHddPause = '<input type="hidden" class="clsPausaFor hddPausa'+contComponentes+'" name="hddPausa[]" id="hddPausa'+contComponentes+'" value="'+pause+'" />';
                            htmlHddPause += '<input type="hidden" class="clsPausaMetricaFor hddMetricaPausa'+contComponentes+'" name="hddMetricaPausa[]" id="hddMetricaPausa'+contComponentes+'" value="'+pause_type+'" />';
                        }
                        
                        var htmlHddRecup = '<input type="hidden" name="hddRecup[]" id="hddRecup'+contComponentes+'" value="'+recup+'" class="hddRecup'+contComponentes+'" />';
                        htmlHddRecup += '<input type="hidden" name="hddMetricaRecup[]" id="hddMetricaRecup'+contComponentes+'" value="'+recup_type+'" class="hddMetricaRecup'+contComponentes+'" />';
                    
                        if(tablaReps==false){
                            htmlC += '<td width="70">';
                            htmlC += 'Pausa';
                            htmlC += '<br />';
                            htmlC += '<span class="label lblPausa'+contComponentes+'" id="lblPausa'+contComponentes+'">'+(pause=='0' ? '' : pause + ' ' + string_type_pause)+'</span>';
                            htmlC += htmlHddPause; 
                            htmlC += '</td>';
                            htmlC += '<td width="70">';
                            htmlC += 'Recup';
                            htmlC += '<br />';
                            htmlC += '<span class="label lblRecup'+contComponentes+'" id="lblRecup'+contComponentes+'">'+(recup=='0' ? '' : recup+' '+string_recup_type)+'</span>';
                            htmlC += '</td>';
                        }
                        htmlC += '<td width="40">';
                        htmlC += htmlHddRecup; 
                        htmlC += 'ppm';
                        htmlC += '<br />';
                        htmlC += '<span class="label lblPpm'+contComponentes+'" id="lblPpm'+contComponentes+'">'+_ppm+'</span>';
                        htmlC += '</td>';
                        htmlC += '<td width="40">';
                        if(blockSelected=="natacion"){
                            htmlC += 'min/100<br />';
                        }
                        else if(blockSelected=="carrera"){
                            htmlC += 'min/km <br />';
                        }
                        else if(blockSelected=="ciclismo"){
                            htmlC += 'watts <br />';

                        }
                        if(blockSelected=="ciclismo"){
                            htmlC += '<span class="label" id="lblMinKm'+contComponentes+'">'+(_watts==undefined ? 0 : _watts)+'</span>';
                        }
                        else{
                            htmlC += '<span class="label" id="lblMinKm'+contComponentes+'">'+_minKm+'</span>';
                        }
                        
                        htmlC += '</td>';
                        if(blockSelected=="carrera"){
                            htmlC += '<td width="40">';
                            htmlC += 'x100';
                            htmlC += '<br />';
                            htmlC += '<span class="label" id="lblx100'+contComponentes+'">'+_min100+'</span>';
                            htmlC += '</td>';
                            htmlC += '<td width="40">';
                            htmlC += 'x400';
                            htmlC += '<br />';
                            htmlC += '<span class="label" id="lblx100'+contComponentes+'">'+_min400+'</span>';
                            htmlC += '</td>';
                        }
                        if(blockSelected=="carrera" || blockSelected=="natacion"){
                            htmlC += '<td width="40">';
                            htmlC += 'xDist';
                            htmlC += '<br />';
                            htmlC += '<span class="label" id="lblx100'+contComponentes+'">'+_minDist+'</span>';
                            htmlC += '</td>';
                        }
                        htmlC += '<td width="55">';
                        htmlC += '<img src="require/img/ecos70.png" width="55" /><div class="spanEcos">'+_ecosTotales+'</div>';
                        
                        htmlC += '</td>';
                        //alert(_duracionEjercicio);
                        if(pause_type==1){//minutos
                            _totalMinutosPausa= pause * repeticiones * series;
                        }
                        else if(pause_type==2){//segundos
                            _totalMinutosPausa = ((pause * repeticiones * series) / 60);
                        }
                        //_totalMinutosPausa += minutosRecuperacion * repeticiones * series
                        minutosRecuperacion= minutosRecuperacion * _times;
                        //alert(minutosRecuperacion);
                        //nuevoooo
                        //fin nuevoooo
                        getSumaEcos(_ecosTotales, quantity_large, case_type, _minutosEjercicio, times, blockSelected, _average, pause_type, _totalMinutosPausa, minutosRecuperacion);
                    
                    //background-color:#fff;
                    htmlC += '<td width="20" style="'+fondo+'">';
                    //*****************************
                    //*****************************
                    //se movieron los hdd*********************************
                    var _elemtPorBloque= 0;
                    try{
                        _elemtPorBloque= Number($("#hddNumBloqueDelBloque").val());
                    }catch (err) {
                        _elemtPorBloque= 0;
                    }
                    htmlC += '<input type="hidden" name="hddElemtPorBloque[]" id="hddElemtPorBloque'+(contComponentes+i)+'" value="'+_elemtPorBloque+'" class="hddElemtPorBloque'+(contComponentes+i)+'" />';
                    htmlC += '<input type="hidden" name="hddSerie[]" id="hddSerie'+(contComponentes+i)+'" value="'+series+'" class="hddSerie'+(contComponentes+i)+'" />';
                    htmlC += '<input type="hidden" name="hddReps[]" id="hddReps'+(contComponentes+i)+'" value="'+times+'" class="hddReps'+(contComponentes+i)+'" />';
                    htmlC += '<input type="hidden" name="hddDuracionEx[]" id="hddDuracionEx'+(contComponentes+i)+'" value="'+_duracionEjercicio+'" class="hddDuracionEx'+(contComponentes+i)+'" />';
                    htmlC += '<input type="hidden" name="hddDist[]" id="hddDist'+(contComponentes+i)+'" value="'+quantity_large+'" class="hddDist'+(contComponentes+i)+'" />';
                    htmlC += '<input type="hidden" class="clsContDistTiempo hddCont'+(contComponentes+i)+'" name="hddCont[]" id="hddCont'+(contComponentes+i)+'" value="'+(contComponentes+i)+'" />';
                    htmlC += '<input type="hidden" name="hddMetricaDist[]" id="hddMetricaDist'+(contComponentes+i)+'" value="'+case_type+'" class="hddMetricaDist'+(contComponentes+i)+'" />';
                    var valorWatts=0;
                    try{
                        valorWatts= (_watts==undefined ? 0 : _watts);
                    }
                    catch (err) {
                        valorWatts=0;
                    }
                    htmlC += '<input type="hidden" name="hddWatts[]" id="hddWatts'+(contComponentes+i)+'" value="'+valorWatts+'" />';
                    htmlC += '<input type="hidden" name="hddPpm[]" id="hddPpm'+(contComponentes+i)+'" value="'+_ppm+'" />';
                    htmlC += '<input type="hidden" name="hddMinKm[]" id="hddMinKm'+(contComponentes+i)+'" value="'+_minKm+'" />';
                    htmlC += '<input type="hidden" name="hddx100[]" id="hddx100'+(contComponentes+i)+'" value="'+_min100+'" />';
                    htmlC += '<input type="hidden" name="hddx400[]" id="hddx400'+(contComponentes+i)+'" value="'+_min400+'" />';
                    htmlC += '<input type="hidden" name="hddxDist[]" id="hddxDist'+(contComponentes+i)+'" value="'+_minDist+'" />';
                    htmlC += '<input type="hidden" name="hddZona[]" id="hddZona'+(contComponentes+i)+'" value="'+zone+'" class="hddZona'+(contComponentes+i)+'" />';
                    htmlC += '<input type="hidden" name="hddEcos[]" id="hddEcos'+(contComponentes+i)+'" value="'+_ecosTotales+'" />';
                    htmlC += '<input type="hidden" name="hddFE[]" id="hddFE'+(contComponentes+i)+'" value="'+_factorEjer+'" />';
                    htmlC += '<input type="hidden" name="hddFI[]" id="hddFI'+(contComponentes+i)+'" value="'+_factorInten+'" />';
                    //fin se movieron los hdd*****************************
                    //*****************************
                    //*****************************
                    if(contBloqueDelbloque==0 && validaSeriesRepeticiones){//solo es un bloque para farlek, progresivo y secuencia
                        htmlC += '<img src="require/imgv2/' + dirBlanco + 'Generales/Icon_Editar.svg" height="12" class="imgEditar'+(contComponentes+i)+'" onclick="getEditar(\''+$('#select_blocks').val()+'\', \''+block.toLowerCase()+'\', '+(contComponentes+i)+', '+_elemtPorBloque+');" />';
                        htmlC += '<img src="require/imgv2/' + dirBlanco + 'Generales/Icon_Eliminar.svg" height="12" class="imgEliminar'+(contComponentes+i)+'" onclick="getEliminar('+(contComponentes+i)+', \''+block+'\', '+idBloqueDelbloque+');" />';
                        if(block!="comentario"){
                            htmlC += '<img src="require/imgv2/' + dirBlanco + 'Generales/Icon_Duplicar.svg" height="12" class="imgDuplicar'+(contComponentes+i)+'" onclick="getDuplicar('+(contComponentes+i)+');" />';
                        }
                        else{
                            htmlC += '<br /> &nbsp;';
                        }
                        //htmlC += '<span style="font-size:13px; color:#000;" onclick=""><i class="flaticon-file-1" style="color:white;"></i></span>';
                    }
                    
                    
                        htmlC += '<input type="hidden" name="hddComent[]" id="hddComent'+(contComponentes+i)+'" value="'+ strComentario +'" class="hddComent'+(contComponentes+i)+'" />';
                    
                    
                    htmlC += '<input type="hidden" name="hddCalories[]" id="hddCalories'+(contComponentes+i)+'" value="'+total_calories+'" class="hddCalories'+(contComponentes+i)+'" />';
                    htmlC += '<input type="hidden" name="hddPausa[]" id="hddPausa'+(contComponentes+i)+'" value="'+pause+'" class="hddPausa'+(contComponentes+i)+'" />';
                    htmlC += '<input type="hidden" name="hddMetricaPausa[]" id="hddMetricaPausa'+(contComponentes+i)+'" value="'+pause_type+'" class="hddMetricaPausa'+(contComponentes+i)+'" />';
                    htmlC += '<input type="hidden" name="hddNameEx[]" id="hddNameEx'+(contComponentes+i)+'" value="'+nombreEx+'" class="hddNameEx'+(contComponentes+i)+'" />';
                    htmlC += '</td>';
                    htmlC += '</tr>';
                    
                    if(block!="circuito"){
                        htmlC += htmlEx;
                    }
                    htmlC += '</table><br>';



                    //fin de for david 2023
                }
            }

                    //alert(contBloqueDelbloque + ' .. ' + tablaSerie);
                    
                    var muestraPausa=false;
                    //alert(contBloquesEditando+"-"+limiteBloque);
                    if(limiteBloque==contBloqueDelbloque || limiteBloque==contBloquesEditando){
                    muestraPausa= true;
                    }
                    
                    contBloquesEditando++;
                    
                    if(tablaReps==true){
                        if(typeof Number(pause) == 'number' && muestraPausa==true){
                            if(pause>0){
                                htmlC += '<table style="width:100%; margin: 6px 0 0 0;"><td style="background-color:#C3DBE7; color:#003A5D; font-weight:600; font-size:13px; vertical-align:middle; text-align:left !important; padding:15px 20px !important;" align="left">';
                                htmlC += 'Pausa  <span style="font-size:17px;" class="label" id="lblPausa'+contComponentes+'">'+(pause=='0' ? '' : pause + ' ' + string_type_pause) + '</span>';
                                htmlC += htmlHddPause;
                                htmlC += '</td></table>';
                            }
                        }
                        if(contComponentes>1 && $("#hddAccion").val()=="Editando"){
                            //htmlC += '</td></tr></table>';
                            //alert("recup");
                        }
                        
                    }
                    if(tablaSerie==true){
                        if(typeof Number(recup) == 'number' && muestraPausa==true){
                            if(recup>0){
                                htmlC += '</table><table style="width:100%; margin: 4px 0 10px 0;"><td style="background-color:#C3DBE7; color:#003A5D; font-weight:600; font-size:13px; vertical-align:middle; text-align:left !important; padding:15px 20px !important;" align="left">';
                                htmlC += 'Recuperación <span style="font-size:17px;" class="label" id="lblRecup'+contComponentes+'">'+(recup=='0' ? '' : recup+' '+string_recup_type) + '</span>';
                                //htmlC += htmlHddRecup;// david202332302 comentado
                                htmlC += '</td></table>';
                            }
                        }
                        if(contComponentes>1 && $("#hddAccion").val()=="Editando"){
                            //htmlC += '</td></tr></table>';
                            //alert("serie");
                        }
                    }
                    //if((contComponentes>1 || bloqueAnterior!=block) && $("#hddAccion").val()=="Editando");
                    //htmlC += '</span>';
                    if(block!="secuencia"){
                        //htmlC += '</span>';
                    }
                    else{
                        if(contBloqueDelbloque==1){
                            //htmlC += '</span>';
                            //alert(1234);
                        }
                    }
                        
                    if(bloqueAnterior!=block){
                        bloqueAnterior=block;
                    }
                    
                
    
	htmlC += '</span>';
	$("#divComponentes").html($("#divComponentes").html()+htmlC);
}
function createComponentesCarga2(limit){
    htmlC='';
	let pausa_entre_bloques_text="";
	if(bloqueAnterior != block){
		grupoID=0;
	}
	//alert(bloqueAnterior + " -- " + block);
    for(i=0; i<limit; i++){
        contBloqueDelbloque=i;
                
        if(i==0 || (i==1 && $("#select_quantity_large2").val()!="") || (i==2 && $("#select_quantity_large3").val()!="") || (i==3 && $("#select_quantity_large4").val()!="")){
                contComponentes +=1;
				if(grupoID==0){
					grupoID= contComponentes;
				}
                //alert(contBloqueDelbloque);
                var urlBusqueda= 'index.php?r=exercisesexercise/getexercise';
                
                /////////////////////////////////////////////////////////////////
                let case_type = $('#select_type_large').val();
                if(contBloqueDelbloque==1){//para el bloque 2 ... aplica para farlek, progresivo y secuencia
                    case_type = $('#select_type_large2').val();
                }
                else if(contBloqueDelbloque==2){//para el bloque 3 ... aplica para farlek, progresivo y secuencia
                    case_type = $('#select_type_large3').val();
                }
                else if(contBloqueDelbloque==3){//para el bloque 4 ... aplica para farlek, progresivo y secuencia
                    case_type = $('#select_type_large4').val();
                }
                else if(contBloqueDelbloque>3){//para el bloque 4 ... aplica para farlek, progresivo y secuencia
                    case_type = $('#select_type_large'+contBloqueDelbloque).val();
                }
                let string_type = 'def.';
                switch (case_type) {
                    case '2':
                        string_type = 'min';
                        break;
                    case '1':
                        string_type = 'seg';
                        break;
                    case '3':
                        string_type = 'hrs';
                        break;
                    case '4':
                        string_type = 'mts';
                        break;
                    case '5':
                        string_type = 'kms';
                        break;
                }

                let pause_type = $('#select_type_pause').val();
                let string_type_pause = 'def.';
                let pause = 0
                pause = Number($('#pause').val());
                switch (pause_type) {
                    case '1':
                        string_type_pause = 'min';
                        break;
                    case '2':
                        string_type_pause = 'seg';
                        break;
                }

                let times = $('#times').val();
                if (times == '') {
                    times = 1;
                }

                block = $("#button_make_div").val();
                if(!validaBloque(block)){
                    return false;
                }


                times = Number(times);
                if(contBloqueDelbloque==0){//para el bloque 1 ... aplica para farlek, progresivo y secuencia
                    quantity_large = Number($('#select_quantity_large').val());
                    zone = $('#select_zone').val();
                    tipoMetricaBloque= $('#select_type_large').val();
                }
                else if(contBloqueDelbloque==1){//para el bloque 2 ... aplica para farlek, progresivo y secuencia
                    quantity_large = Number($('#select_quantity_large2').val());
                    zone = $('#select_zone2').val();
                    tipoMetricaBloque= $('#select_type_large2').val();
                }
                else if(contBloqueDelbloque==2){//para el bloque 3 ... aplica para farlek, progresivo y secuencia
                    quantity_large = Number($('#select_quantity_large3').val());
                    zone = $('#select_zone3').val();
                    tipoMetricaBloque= $('#select_type_large3').val();
                }
                else if(contBloqueDelbloque==3){//para el bloque 4 ... aplica para farlek, progresivo y secuencia
                    quantity_large = Number($('#select_quantity_large4').val());
                    zone = $('#select_zone4').val();
                    tipoMetricaBloque= $('#select_type_large4').val();
                }
                else if(contBloqueDelbloque>3){// aplica para farlek, progresivo y secuencia
                    quantity_large = Number($('#select_quantity_large'+contBloqueDelbloque).val());
                    zone = $('#select_zone'+contBloqueDelbloque).val();
                    tipoMetricaBloque= $('#select_type_large'+contBloqueDelbloque).val();
                }
                
                series = Number($('#series').val());
                
                var recup= $('#pauseRecuperacion').val();
                recup= (recup=="" ? 0 : recup);
                var recup_type= $('#type_pauseRecuperacion').val();
                let string_recup_type = '';
                switch (recup_type) {
                    case '1':
                        string_recup_type = 'min';
                        break;
                    case '2':
                        string_recup_type = 'seg';
                        break;
                }
                
                $('#hddUltimoBloqueAgregado').val(block);
                $('#exampleModal').modal('hide');
                /////////////////////////////////////////////////////////////////
                
                
                ////////////////////////////////////////////
                //////////////// getFormulas ///////////////
                ////////////////////////////////////////////
                let _ecosTotales = 0;
                let _duracionEjercicio=0;
                let _average=0;
                let _totalMinutosPausa=0;
                let i = 0;
                var rows;
                var temp;
                var _ppm = "--";
                var _minKm= "--";
                var _min100= "--";
                var _min400= "--";
                var _minDist= "--";
                var _minutosEjercicio= 0;
                var _factorEjer= "--";
                var _factorInten= "--";
                let imgDeporte= "";
                let blockSelected= "";
                let deporteSportID= 0;
                let nombreEx="";
                let imagenEx="";
                /*if(block=="circuito"){
                    blockSelected = $('#blockSelected').val();
                    str = $('#hddNombreBloque').val();
                    str2 = str.charAt(0).toUpperCase() + str.slice(1);
                    nombreBloque = str2;
                }
                else{
                }*/
                try {
                    var zona = zone;
                    var iconoFE = "C";
                    series = series;
                    var repeticiones = times;
                    var minutosRepeticion = quantity_large;
                    var minutosPausa = pause;
                    var minutosRecuperacion = recup;
                    var kmPorHr = 16.4;
                    var distancia = quantity_large;
                    var opcionVelocidadRitmo = "CARRERA";
                    var distTiempoMetrica = tipoMetricaBloque;
                    var perfilID = $('#sessionsssession-profile_id').val();
                    if (perfilID == "") perfilID = 0;

                    //let nombreBloque= $('#hddNombreBloque').val().toLowerCase();
                    nombreBloque= nombreBloque.toLowerCase();
                    nombreBloque= nombreBloque.charAt(0).toUpperCase() + nombreBloque.slice(1);
                    let blockSelectedSplit = $('#select_blocks').val().split('_');
                    blockSelected= blockSelectedSplit[0];
                    //alert($('#select_blocks').val()+" -" + blockSelected);
                    //alert(blockSelected);
                    //blockSelected = "carrera";

                                                if($('#blockSelected').val()!=""){
                                blockSelected = $('#blockSelected').val();
                            }
                    //alert(blockSelected);
                            str = $('#hddNombreBloque').val();
                            str2 = str.charAt(0).toUpperCase() + str.slice(1);
                            nombreBloque = str2;
                            perfilID=0;

                            
                    if(blockSelected=="ciclismo"){
                        imgDeporte= "Icon_Ciclismo";
                        iconoFE = "B";
                        deporteSportID= 1;
                    }
                    else if(blockSelected=="carrera"){
                        imgDeporte= "Icon_Carrera";
                        deporteSportID= 3;
                    }
                    else if(blockSelected=="natacion"){
                        imgDeporte= "Icon_Natacion";
                        opcionVelocidadRitmo = "NATACION";
                        iconoFE = "N";
                        distancia = quantity_large;
                        deporteSportID=2;
                    }
                    data= {
                            "zona": zona,
                            "iconoFE": iconoFE,
                            "series": series,
                            "repeticiones": repeticiones,
                            "minutosRepeticion": minutosRepeticion,
                            "minutosPausa": minutosPausa,
                            "minutosRecuperacion": minutosRecuperacion,
                            "kmPorHr": kmPorHr,
                            "distancia": distancia,
                            "opcionVelocidadRitmo": opcionVelocidadRitmo,
                            "distTiempoMetrica": $('#select_type_large').val(),
                            "ultimoBloqueAgregado": $('#hddUltimoBloqueAgregado').val(),
                            "perfilID": perfilID
                        };
                        console.log(data);
                    
                    if(block!="circuito" && block!="pausa"){
                        if(pause_type=="2"){//para segundos
                            minutosPausa = minutosPausa/60;
                        }
                        if(recup_type=="2"){//para segundos
                            minutosRecuperacion = minutosRecuperacion/60;
                        }
                        try{
                            if(minutosPausa>0){
                                minutosPausa = minutosPausa * series;
                            }
                            if(minutosRecuperacion>0){
                                minutosRecuperacion = minutosRecuperacion * series;
                            }
                        }
                        catch (err) {
                            minutosPausa = 0;
                            minutosRecuperacion = 0;
                        }
                        //alert(perfilID);
                        $.ajax({
                            type: 'get',
                            async: false,
                            url: "/web/index.php?r=sessionsssession/getformulas",
                            data: {
                                "zona": zona,
                                "iconoFE": iconoFE,
                                "series": series,
                                "repeticiones": repeticiones,
                                "minutosRepeticion": minutosRepeticion,
                                "minutosPausa": minutosPausa,
                                "minutosRecuperacion": minutosRecuperacion,
                                "kmPorHr": kmPorHr,
                                "distancia": distancia,
                                "opcionVelocidadRitmo": opcionVelocidadRitmo,
                                "distTiempoMetrica": $('#select_type_large').val(),
                                "ultimoBloqueAgregado": $('#hddUltimoBloqueAgregado').val(),
                                "perfilID": perfilID
                            },
                            success: function(data) {
                                //console.log(data);
                                //alert(series);
                                rows = JSON.parse(data);
                                console.log(rows);
                                if(series=="2"){
                                    //alert(rows[i]['ECOsTotal']+"Z:"+zona+"iconoFE:"+iconoFE+" rep:"+repeticiones+" M:"+minutosRepeticion+" P:"+minutosPausa+" R:"+minutosRecuperacion);
                                }
                                var cantTemp = 0;
                                //alert(12);
                                if(rows[i]['errorDato']!=""){
                                    swal(" Bloque: " + block, "" + rows[i]['errorDato'], {
                                        icon : "warning",
                                        buttons: {        			
                                            confirm: {
                                                className : 'btn btn-warning'
                                            }
                                        },
                                    });
                                }

                                _ppm = rows[i]['ppm'];
                                _minKm= rows[i]['min_km'];

                                _watts= rows[i]['potencia'];

                                _min100= rows[i]['min_100'];
                                _min400= rows[i]['min_400'];
                                _minDist= rows[i]['min_dist'];
                                _factorEjer= rows[i]['FactorEjerccion'];
                                _factorInten= rows[i]['FactorIntensidad'];
                                _ecosTotales= rows[i]['ECOsTotal'];
                                _duracionEjercicio= rows[i]['duracionEjercicio'];
                                _average= rows[i]['average'];
                                _totalMinutosPausa= rows[i]['totalMinutosPausa'];
                                _minutosEjercicio= rows[i]['minutosEjercicio'];

                                                                        /*_ppm = $('#heart_rate').val();
                                        _minKm= $('#min_km').val();
                                        _watts= $('#watts').val();
                                        _min100= $('#min_100').val();
                                        _min400= $('#min_400').val();
                                        _minDist= $('#min_dist').val();
                                        _factorEjer= $('#exercise_fe').val();
                                        _factorInten= $('#intensity_factor').val();*/

                                        //_ecosTotales= rows[i]['ECOsTotal'];
                                        
                            },
                            error: function(data) {
                                alert("error "+block+" ->>" + data);
                            },

                        });
                    }
                    else if(block=="pausa" && blockSelected=="ciclismo"){
                        $.ajax({
                            type: 'get',
                            async: false,
                            url: "/web/index.php?r=sessionsssession/getdatoszonas",
                            data: {
                                "zona": 1,
                                "perfilID": perfilID
                            },
                            success: function(data) {
                                //console.log(data);
                                //alert(data);
                                _average= data;

                            },
                            error: function(data) {
                                alert("error ->>" + data);
                            },

                        });
                    }
                } catch (err) {
                    alert(err.message);
                }
                ////////////////////////////////////////////
                ////////////// fin getFormulas /////////////
                ////////////////////////////////////////////
                
                var htmlEx="";
                var coment="";
                var idBusqueda= '';
                var exercise_name="";
                
                if(block=="calentamiento" && blockSelected!="natacion"){
                    series= "";
                    times= "";
                    pause= "";
                    string_type_pause= "";
                    //recup= "";
                    //string_recup_type= "";
                }
                else if(block=="calentamiento" && blockSelected=="natacion"){
                    series= " ";
                    recup= " ";
                    string_recup_type= " ";
                }
                else if(block=="drills" || block=="circuito"){
                    if(block=="drills") {
                        idBusqueda= $("#select_exercise").val();
                        urlBusqueda= 'index.php?r=exercisesexercise/getexercise';
                                                        if(iniciando=="yes2")
                                    idBusqueda = $("#select_exercise").val();
                                else if(Number.isInteger(parseInt(idBusqueda))==false)
                                    idBusqueda = exercise_id;//$('#idBusquedaD').val();
                                else
                                    ;//alert("SI");
                                                        //alert(idBusqueda);
                    }
                    if(block=="circuito"){
                        idBusqueda= $("#select_circuit").val();
                        //alert(idBusqueda + " - "+ block + urlBusqueda );
                        urlBusqueda= 'index.php?r=sessionsssession/getcircuitbyid';
                                                        if(exercise_id==0)
                                    idBusqueda = $("#select_circuit").val();
                                else if(Number.isInteger($("#select_circuit").val())==false)
                                    idBusqueda = exercise_id;//$('#idBusquedaC').val();
                                                        var strComent="Comentario:";
                        if($("#text_circuit").val()=="")
                            strComent="";
                        coment= '<tr><td colspan="15"><b>'+strComent+'</b><br />'+$("#text_circuit").val()+'</td></tr>';
                        series= " ";
                        times= " ";
                        pause= " ";
                        string_type_pause= " ";
                        recup= " ";
                        string_recup_type= " ";
                    }
                    //alert("ex: " + exercise_id);
                    /*alert(idBusqueda+ ' -' + $("#select_exercise").val() + '-');
                    if(!Number.isInteger($("#select_exercise").val()))
                        alert(Number.isInteger($("#select_exercise").val()));
                    else
                        alert(2);/**/
                    
                    
                    $.ajax({
                        type: 'get',
                        async: false,
                        url: urlBusqueda,
                        data: {"id":idBusqueda, "limit":140},
                        success: function(data) {
                            var separarEx = data.split("||");
                            htmlEx = '';
                            var comentCircuito= "<br />" + coment;
                            if(block!="circuito"){//circuito No se crea al tr
                                htmlEx += '<tr>';
                                comentCircuito= "";
                            }
                            nombreEx= separarEx[1];
                            imagenEx= separarEx[4];
                            //alert(idBusqueda +"-" + nombreEx + " - " + imagenEx);
                            htmlEx += '<td height="60" width="17px" style="background-color:#2BE47F;">';
                            htmlEx += '<td style="vertical-align:middle;"><img id="imgEx'+contComponentes+'" width="40" src="../../media/'+separarEx[4]+'" style="fill:white; border-radius: 50%; min-width: 50.5px;max-width: 50.5px; height: 50.5px;"></td>';
                            htmlEx += '<td colspan="4" style="vertical-align:middle;"><span id="spanNameEx'+contComponentes+'" class="spanNameEx'+contComponentes+'" >'+separarEx[1]+comentCircuito+'</span></td>';
                            htmlEx += '<td colspan="10" style="height:45px; word-wrap: break-word; text-align:left;"><span id="spanDescipEx'+contComponentes+'">'+separarEx[2]+'</span></td>';
                            htmlEx += '</td>';
                            if(block!="circuito"){//circuito No se crea al tr
                                htmlEx += '</tr>';
                                htmlEx += coment;
                            }
                            exercise_name= separarEx[1];
                        },
                        error: function(data) {alert("Error al buscar datos del ejercicio"+data);},
                    });
                }
                if (block == 'secuencia' || block == 'progresivo' || block == 'farlek' || block == 'continuo') {
					if(block != "secuencia") {
						pause= "";
						pause_type= "";
						string_type_pause= " ";
					}
                    if(block == 'continuo'){
                        recup= " ";
                        string_recup_type= " ";
                        series="";
                    }
                }
                else if(block=="vuelta"){
                    recup= " ";
                    string_recup_type= " ";
                    series="";
                }
                else{
                    if(series=="" || series==0) series=1;
                }
                //quitar etiqueta repeticiones 
                var _times= times;
                var _series= series;
                var strSerieIgualA1="";
                if(series != 1)
                    strSerieIgualA1= series;
                if(block=="intermitente" || block=="intervalos" || block=="repeticiones" || block=="secuencia"){
                    _times="";
                    if(block=="intervalos" || block=="repeticiones" || block=="secuencia") strSerieIgualA1="";
                }
                let total_calories = $('#total_calories').val();
                //alert(block);
                
                //var htmlC= '';
                var strComentario="";
                var fondo="";
                var dirBlanco="blanco/";
                
                //alert(block+"-"+contBloquesEditando);
                if(block=="secuencia" || block=="progresivo" || block=="farlek"){
                    if(bloqueAnterior!=block && contBloquesEditando>0)
                        idBloqueDelbloque++;
                    //htmlC = '<span class="spanComponente_'+idBloqueDelbloque+'">';
                }
                if(block=="secuencia"){
                    // && bloqueAnterior!=block => mblanco 2023
                    if(contBloqueDelbloque==0 && bloqueAnterior!=block){//solo es un bloque para farlek, progresivo y secuencia
                        
                        contBloquesEditando=0;
                        //htmlC += '<span class="clsComponente" id="spanComponente_'+contComponentes+'" data-id="1" data-item-sortable-id="0" draggable="true" role="option" aria-grabbed="false"><span class="label">'+nombreBloque+'</span>';
                        htmlC += '<span class="clsComponente" id="spanComponente_'+contComponentes+'" data-id="1" data-item-sortable-id="0" draggable="true" role="option" aria-grabbed="false"><span class="label">'+nombreBloque+'</span>';
                        //alert(1);
                    }   
                }else{
                    // && bloqueAnterior!=block => mblanco 2023
                    if(contBloqueDelbloque==0){//solo es un bloque para farlek, progresivo y secuencia
                        
                        contBloquesEditando=0;
                        htmlC += '<span class="clsComponente" id="spanComponente_'+contComponentes+'" data-id="1" data-item-sortable-id="0" draggable="true" role="option" aria-grabbed="false"><span class="label">'+nombreBloque+'</span>';
                        //alert(1);
                    }    
                }
                
                
                //para editar
                var validaSeriesRepeticiones= true;
                //alert(contBloqueDelbloque);
                if($("#hddAccion").val()=="Editando" && contBloquesEditando>0 && (block == 'secuencia' || block == 'progresivo' || block == 'farlek')){
                    validaSeriesRepeticiones= false;
                }
                //fin para editar
                
                var tablaSerie= false;
                var tablaReps= false;
                let limiteBloque= 0;//variable aun no se usa 
                if (block == 'intermitente' || block == 'repeticiones' || block == 'secuencia' || block == 'progresivo' || block == 'farlek' || block == 'intervalos') {
                    tablaSerie= true;
                    var bordeBajo="";
                    var _limiteBloque=0;
                    if (block == 'secuencia') {
                        _limiteBloque= 1;//un ciclo de dos vueltas 
                        /*try{
                            limiteBloque= (Number($("#hddNumBloqueDelBloque").val()) - 1);
                        }
                        catch (err){
                            limiteBloque= 1;//un ciclo de dos vueltas 
                        }
                        if(contBloqueDelbloque==0 && validaSeriesRepeticiones){
                            bordeBajo= "border-bottom: solid 0px;";
                        }
                        else{
                            bordeBajo= "border-top: solid 0px;";
                        }*/
                    }
                    else if(block == 'farlek'){
                        _limiteBloque= 2;//un ciclo de 3 vueltas 
                        /*try{
                            limiteBloque= (Number($("#hddNumBloqueDelBloque").val()) - 1);
                        }
                        catch (err){
                            limiteBloque= 2;//un ciclo de 3 vueltas 
                        }
                        if(contBloqueDelbloque==0 && validaSeriesRepeticiones){
                            bordeBajo= "border-bottom: solid 0px;";
                        }
                        else if(contBloqueDelbloque<2){
                            bordeBajo= "border-bottom: solid 0px; border-top: solid 0px;";
                        }
                        else{
                            bordeBajo= "border-top: solid 0px;";
                        }*/
                    }
                    else if (block == 'progresivo') {
                        _limiteBloque= 3;//un ciclo de 4 vueltas 
                        /*try{
                            limiteBloque= (Number($("#hddNumBloqueDelBloque").val()) - 1);
                        }
                        catch (err){
                            limiteBloque= 3;//un ciclo de 4 vueltas 
                        }
                        if(contBloqueDelbloque==0 && validaSeriesRepeticiones){
                            bordeBajo= "border-bottom: solid 0px;";
                        }
                        else if($("#hddAccion").val()=="Editando"){
                            if(contBloquesEditando<limiteBloque){
                                //alert(191);
                                bordeBajo= "border-bottom: solid 0px; border-top: solid 0px;";
                            }
                            else{
                                //alert(190);
                                bordeBajo= "border-top: solid 0px;";
                            }
                        }
                        else if(contBloqueDelbloque<3){
                            //alert(091);
                            bordeBajo= "border-bottom: solid 0px; border-top: solid 0px;";
                        }
                        else{
                            //alert(090);
                            bordeBajo= "border-top: solid 0px;";
                        }*/
                    }
                    
                    if (block == 'secuencia' || block == 'progresivo' || block == 'farlek') {
                        try{
                            limiteBloque= (Number($("#hddNumBloqueDelBloque").val()) - 1);
                        }
                        catch (err){
                            limiteBloque= _limiteBloque;//ciclos dependiendo del bloque
                        }
                        if(contBloqueDelbloque==0 && validaSeriesRepeticiones){
                            bordeBajo= "border-bottom: solid 0px;";
							//alert(765);
                        }
                        else if($("#hddAccion").val()=="Editando"){
                            if(contBloquesEditando<limiteBloque){
                                //alert(191);
                                bordeBajo= "border-bottom: solid 0px; border-top: solid 0px;";
                            }
                            else{
                                //alert(190);
                                bordeBajo= "border-top: solid 0px;";
                            }
                        }
                        else if(contBloqueDelbloque<Number($("#hddNumBloqueDelBloque").val())){
                            //alert(091);
                            //bordeBajo= "border-bottom: solid 0px; border-top: solid 0px;";
							bordeBajo= "border-top: solid 0px; padding:10px;";
                        }
                        else{
                            //alert(090);
                            bordeBajo= "border-top: solid 0px;";
                        }
                    }
                    
                    var bordeSerie= "1px";
                    var paddingSerie= "padding:0 10px";
                    if(series==1){
                        bordeSerie= "01";
                        paddingSerie= "padding:0";
                    }
					if($("#hddAccion").val()==""){
						//bordeSerie= "0";
					}
                    htmlC += '<table class="tblGrupo'+grupoID+'" width="100%"><tr><td style="border:solid '+bordeSerie+' #d4d4d4; '+paddingSerie+'; '+bordeBajo+'">';
                    if(contBloqueDelbloque==0 && validaSeriesRepeticiones){
                        if(series!=1 && series!="")
                            //htmlC += '' + series + 'x';
                            htmlC += '<span class=" lblSerieD'+contComponentes+'" id="lblSerieD'+contComponentes+'">' + series + 'x</span>';//david230223
                    }
					
                    if (block == 'intermitente' || block == 'repeticiones' || block == 'intervalos' || limiteBloque>0){
						var borderT="1";
						if($("#hddAccion").val()==""){
							borderT="0";
						}
                        htmlC += '<table width="100%" class="clstblBloques'+idBloqueDelbloque+'"><tr><td style="border:solid '+borderT+'px #d4d4d4; padding:10px; '+bordeBajo+'">';
                        if(limiteBloque==0){
                            htmlC += '<span class=" lblRepsD'+contComponentes+'" id="lblRepsD'+contComponentes+'">' + times + 'x</span>';//david230223
                        }
                        tablaReps= true;
                    }
                }
                htmlC += '<input type="hidden" name="hddBloqueDelBloque[]" id="hddBloqueDelBloque'+contComponentes+'" value="'+contBloqueDelbloque+'" class="hddBloqueDelBloque'+contComponentes+'" />';
                htmlC += '<input type="hidden" name="hddNombreClase[]" id="hddNombreClase'+contComponentes+'" value="'+idBloqueDelbloque+'" class="hddNombreClase'+contComponentes+'" />';
                htmlC += '<input type="hidden" name="hddCarrera[]" id="hddCarrera'+contComponentes+'" value="'+blockSelected+'" class="hddCarrera'+contComponentes+'" />';
                htmlC += '<input type="hidden" name="hddSportID[]" id="hddSportID'+contComponentes+'" value="'+deporteSportID+'" class="hddSportID'+contComponentes+'" />';
                htmlC += '<input type="hidden" name="hddBloque[]" id="hddBloque'+contComponentes+'" value="'+block+'" class="hddBloque'+contComponentes+'" />';
                htmlC += '<input type="hidden" name="circuitoEjexID[]" id="circuitoEjexID'+contComponentes+'" value="'+idBusqueda+'" class="circuitoEjexID'+contComponentes+'" />';
                htmlC += '<input type="hidden" name="hddExerciseName[]" id="hddExerciseName'+contComponentes+'" value="'+exercise_name+'" class="hddExerciseName'+contComponentes+'" />';
                htmlC += '<table border="0" class="tblComponents tblComponente_'+contComponentes+'" width="100%" id="tblComponente_'+contComponentes+'">';
                htmlC += '<tr>';
                
                var metricaRecPausaComentCircuito= '<input type="hidden" name="hddRecup[]" id="hddRecup'+contComponentes+'" value="'+recup+'" class="hddRecup'+contComponentes+'" /><input type="hidden" name="hddMetricaRecup[]" id="hddMetricaRecup'+contComponentes+'" value="'+recup_type+'" class="hddMetricaRecup'+contComponentes+'" />';
                    
                if(block=="pausa"){
                    htmlC += '<td style="background-color:#C3DBE7; color:#003A5D; font-weight:600; font-size:13px; vertical-align:middle; text-align:left !important; padding-left:20px !important;" align="left">r ^ n Pausa ';
                    htmlC += '<span class="labelPausa" id="lblPausa'+contComponentes+'">'+(pause=='0' ? '' : pause + ' ' + string_type_pause)+'</span>';
                    //para evitar marcar errores al guardar
                    htmlC += metricaRecPausaComentCircuito;
                    //fin para evitar marcar errores al guardar
                    htmlC += '</td>';
                    if(pause_type==1){//minutos
                        _totalMinutosPausa= pause;
                    }
                    else if(pause==2){//segundos
                        _totalMinutosPausa= (pause / 60);
                    }
                    _totalMinutosPausa =_totalMinutosPausa*series;
                    
                    minutosRecuperacion= minutosRecuperacion * series;
                    getSumaEcos(_ecosTotales, quantity_large, case_type, _minutosEjercicio, times, blockSelected, _average, pause_type, _totalMinutosPausa, minutosRecuperacion);
                }
                else if(block=="comentario"){
                    fondo= "background-color:#41BC72;";
                    dirBlanco="";
                    htmlC += '<td style="background-color:#41BC72; color:#003A5D; font-weight:600; font-size:14px; vertical-align:middle; text-align:left !important; padding-left:20px !important;" align="left">';
                    htmlC += '<span id="spanComent'+contComponentes+'">' + $("#comment_input").val() + '</span>';
                    strComentario= $("#comment_input").val();
                    htmlC += metricaRecPausaComentCircuito;
                    htmlC += '</td>';
                }
                else if(block=="circuito"){
                    htmlC += '<td width="17px" style="background-color:#2BE47F;">';
                    htmlC += '</td>';
                    htmlC += '<td width="60"><img id="imgEx'+contComponentes+'" src="../../media/' + imagenEx + '" style="fill:white; border-radius: 50%; min-width: 50.5px;max-width: 50.5px; height: 50.5px; " /></td><td>';
                    strComentario= $("#text_circuit").val().trim();
                    htmlC += '<span style="font-size:14px;" id="spanNameEx'+contComponentes+'" class="spanNameEx'+contComponentes+'">'+nombreEx+'<br />'+ $("#text_circuit").val() +'</span>';
                    htmlC += metricaRecPausaComentCircuito;
                    htmlC += '</td>';
                    //Calculo de tiempo Totales PARA CIRCUITO
                    try{
                        let horasAMin= Number($("#spanHrsTotales").html())*60;
                        let minutosTotales= Number($("#spanMinTotales").html()) + horasAMin;
                        minutosTotales +=  10;//30 min de circuito
                        totalMinutosSesion += 10;
                        var hrs= Math.floor(totalMinutosSesion / 60);
                        var min = Math.floor(totalMinutosSesion % 60);
                        $("#spanHrsTotales").html(hrs);
                        $("#spanMinTotales").html(min);
                        //alert("circuito: h"+ hrs + " m" +min + totalMinutosSesion);
                    }
                    catch (err) {
                        alert("error calculo tiempo en circuito. " + err.message);
                    }
                }
                else{
                    /*background-color: #fff;*/
                    //alert(imgDeporte);
                    htmlC += '<td height="60" width="17px" style="background-color:#2BE47F;">';
                    htmlC += '</td>';
                    htmlC += '<td width="30" style="">';
                    htmlC += '<img src="require/imgv2/blanco/'+imgDeporte+'.svg" height="40" style="fill:white;" />';
                    //htmlC += '<svg role="img" title="icon3" style="color:#FFFFFF;"><use href="require/imgv2/blanco/'+imgDeporte+'.svg"/></svg>';
                    htmlC += '</td>';
                    htmlC += '<td width="70">';
                    htmlC += 'Ss <br />';
                    htmlC += '<span class="label lblSerie'+contComponentes+'" id="lblSerie'+contComponentes+'">'+strSerieIgualA1+'</span>';
                    htmlC += '</td>';
                    htmlC += '<td width="70">';
                    htmlC += 'Reps';
                    htmlC += '<br />';
                    htmlC += '<span class="label lblReps'+contComponentes+'" id="lblReps'+contComponentes+'">'+(_times=='1' ? '' : _times)+' </span>';
                    htmlC += '</td>';
                    htmlC += '<td>';
                    htmlC += 'Dist/Tiempo';
                    htmlC += '<br />';
                    htmlC += '<span class="label lblDist'+contComponentes+'" id="lblDist'+contComponentes+'">'+quantity_large+' '+string_type+'</span><!--<br />-->';//+_duracionEjercicio
                    htmlC += '</td>';
                    htmlC += '<td width="70">';
                    htmlC += 'Zona';
                    htmlC += '<br />';
                    htmlC += '<span class="label lblZona'+contComponentes+'" id="lblZona'+contComponentes+'">'+zone+'</span>';
                    htmlC += '</td>';
                    
                    var htmlHddPause = '';
                    if(contBloqueDelbloque>0){
                        htmlHddPause = '<input type="hidden" class="clsPausaFor hddPausa'+contComponentes+'" name="hddPausa[]" id="hddPausa'+contComponentes+'" value="'+pause+'" />';
                        htmlHddPause += '<input type="hidden" class="clsPausaMetricaFor hddMetricaPausa'+contComponentes+'" name="hddMetricaPausa[]" id="hddMetricaPausa'+contComponentes+'" value="'+pause_type+'" />';
                    }
                    
                    var htmlHddRecup = '<input type="hidden" name="hddRecup[]" id="hddRecup'+contComponentes+'" value="'+recup+'" class="hddRecup'+contComponentes+'" />';
                    htmlHddRecup += '<input type="hidden" name="hddMetricaRecup[]" id="hddMetricaRecup'+contComponentes+'" value="'+recup_type+'" class="hddMetricaRecup'+contComponentes+'" />';
                
                    if(tablaReps==false){
                        htmlC += '<td width="70">';
                        htmlC += 'Pausa';
                        htmlC += '<br />';
                        htmlC += '<span class="label lblPausa'+contComponentes+'" id="lblPausa'+contComponentes+'">'+(pause=='0' ? '' : pause + ' ' + string_type_pause)+'</span>';
                        htmlC += htmlHddPause; 
                        htmlC += '</td>';
                        htmlC += '<td width="70">';
                        htmlC += 'Recup';
                        htmlC += '<br />';
                        htmlC += '<span class="label lblRecup'+contComponentes+'" id="lblRecup'+contComponentes+'">'+(recup=='0' ? '' : recup+' '+string_recup_type)+'</span>';
                        htmlC += '</td>';
                    }
                    htmlC += '<td width="40">';
                    htmlC += htmlHddRecup; 
                    htmlC += 'ppm';
                    htmlC += '<br />';
                    htmlC += '<span class="label lblPpm'+contComponentes+'" id="lblPpm'+contComponentes+'">'+_ppm+'</span>';
                    htmlC += '</td>';
                    htmlC += '<td width="40">';
                    if(blockSelected=="natacion"){
                        htmlC += 'min/100<br />';
                    }
                    else if(blockSelected=="carrera"){
                        htmlC += 'min/km <br />';
                    }
                    else if(blockSelected=="ciclismo"){
                        htmlC += 'watts <br />';

                    }
                    if(blockSelected=="ciclismo"){
                        htmlC += '<span class="label" id="lblMinKm'+contComponentes+'">'+(_watts==undefined ? 0 : _watts)+'</span>';
                    }
                    else{
                        htmlC += '<span class="label" id="lblMinKm'+contComponentes+'">'+_minKm+'</span>';
                    }
                    
                    htmlC += '</td>';
                    if(blockSelected=="carrera"){
                        htmlC += '<td width="40">';
                        htmlC += 'x100';
                        htmlC += '<br />';
                        htmlC += '<span class="label" id="lblx100'+contComponentes+'">'+_min100+'</span>';
                        htmlC += '</td>';
                        htmlC += '<td width="40">';
                        htmlC += 'x400';
                        htmlC += '<br />';
                        htmlC += '<span class="label" id="lblx100'+contComponentes+'">'+_min400+'</span>';
                        htmlC += '</td>';
                    }
                    if(blockSelected=="carrera" || blockSelected=="natacion"){
                        htmlC += '<td width="40">';
                        htmlC += 'xDist';
                        htmlC += '<br />';
                        htmlC += '<span class="label" id="lblx100'+contComponentes+'">'+_minDist+'</span>';
                        htmlC += '</td>';
                    }
                    htmlC += '<td width="55">';
                    htmlC += '<img src="require/img/ecos70.png" width="55" /><div class="spanEcos">'+_ecosTotales+'</div>';
                    
                    htmlC += '</td>';
                    //alert(_duracionEjercicio);
                    if(pause_type==1){//minutos
                        _totalMinutosPausa= pause * repeticiones * series;
                    }
                    else if(pause_type==2){//segundos
                        _totalMinutosPausa = ((pause * repeticiones * series) / 60);
                    }
                    //_totalMinutosPausa += minutosRecuperacion * repeticiones * series
                    minutosRecuperacion= minutosRecuperacion * _times;
                    //alert(minutosRecuperacion);
                    //nuevoooo
                    //alert(_times + "-"+_minutosEjercicio+ " - " + _totalMinutosPausa+ " - " + minutosRecuperacion+ "("+recup_type+") - " + (_minutosEjercicio+ _totalMinutosPausa + minutosRecuperacion));
                    /*if(blockSelected=="natacion"){//natacion
                        if(case_type==4){//mts
                            _duracionEjercicio= (((quantity_large/100)*(100/_average))/60);
                        }
                        else if(case_type==5){//km
                            _duracionEjercicio= ((quantity_large*10)*(100/_average))/60;
                        }
                        _duracionEjercicio = _duracionEjercicio * series * _times;
                    }
                    else{
                        if(case_type==4){//mts
                            _duracionEjercicio=((quantity_large/1000) * 60)/_average;
                        }
                        else if(case_type==5){//km
                            _duracionEjercicio= (quantity_large * 60) / _average;
                        }
                        _duracionEjercicio = (_duracionEjercicio + _totalMinutosPausa + minutosRecuperacion) * series * _times;
                    }*/
                    //alert("2-"+_duracionEjercicio);
                    //fin nuevoooo
                    getSumaEcos(_ecosTotales, quantity_large, case_type, _minutosEjercicio, times, blockSelected, _average, pause_type, _totalMinutosPausa, minutosRecuperacion);
                }
                //background-color:#fff;
                htmlC += '<td width="20" style="'+fondo+'">';
                //*****************************
                //*****************************
                //se movieron los hdd*********************************
                var _elemtPorBloque= 0;
                try{
                    _elemtPorBloque= Number($("#hddNumBloqueDelBloque").val());
                }catch (err) {
                    _elemtPorBloque= 0;
                }
                htmlC += '<input type="hidden" name="hddElemtPorBloque[]" id="hddElemtPorBloque'+contComponentes+'" value="'+_elemtPorBloque+'" class="hddElemtPorBloque'+contComponentes+'" />';
                htmlC += '<input type="hidden" name="hddSerie[]" id="hddSerie'+contComponentes+'" value="'+series+'" class="hddSerie'+contComponentes+'" />';
                htmlC += '<input type="hidden" name="hddReps[]" id="hddReps'+contComponentes+'" value="'+times+'" class="hddReps'+contComponentes+'" />';
                htmlC += '<input type="hidden" name="hddDuracionEx[]" id="hddDuracionEx'+contComponentes+'" value="'+_duracionEjercicio+'" class="hddDuracionEx'+contComponentes+'" />';
                htmlC += '<input type="hidden" name="hddDist[]" id="hddDist'+contComponentes+'" value="'+quantity_large+'" class="hddDist'+contComponentes+'" />';
                htmlC += '<input type="hidden" class="clsContDistTiempo hddCont'+contComponentes+'" name="hddCont[]" id="hddCont'+contComponentes+'" value="'+contComponentes+'" />';
                htmlC += '<input type="hidden" name="hddMetricaDist[]" id="hddMetricaDist'+contComponentes+'" value="'+case_type+'" class="hddMetricaDist'+contComponentes+'" />';
                var valorWatts=0;
                try{
                    valorWatts= (_watts==undefined ? 0 : _watts);
                }
                catch (err) {
                    valorWatts=0;
                }
                htmlC += '<input type="hidden" name="hddWatts[]" id="hddWatts'+contComponentes+'" value="'+valorWatts+'" />';
                htmlC += '<input type="hidden" name="hddPpm[]" id="hddPpm'+contComponentes+'" value="'+_ppm+'" />';
                htmlC += '<input type="hidden" name="hddMinKm[]" id="hddMinKm'+contComponentes+'" value="'+_minKm+'" />';
                htmlC += '<input type="hidden" name="hddx100[]" id="hddx100'+contComponentes+'" value="'+_min100+'" />';
                htmlC += '<input type="hidden" name="hddx400[]" id="hddx400'+contComponentes+'" value="'+_min400+'" />';
                htmlC += '<input type="hidden" name="hddxDist[]" id="hddxDist'+contComponentes+'" value="'+_minDist+'" />';
                htmlC += '<input type="hidden" name="hddZona[]" id="hddZona'+contComponentes+'" value="'+zone+'" class="hddZona'+contComponentes+'" />';
                htmlC += '<input type="hidden" name="hddEcos[]" id="hddEcos'+contComponentes+'" value="'+_ecosTotales+'" />';
                htmlC += '<input type="hidden" name="hddFE[]" id="hddFE'+contComponentes+'" value="'+_factorEjer+'" />';
                htmlC += '<input type="hidden" name="hddFI[]" id="hddFI'+contComponentes+'" value="'+_factorInten+'" />';
                //fin se movieron los hdd*****************************
                //*****************************
                //*****************************
                if(contBloqueDelbloque==0 && validaSeriesRepeticiones){//solo es un bloque para farlek, progresivo y secuencia
                    htmlC += '<img src="require/imgv2/' + dirBlanco + 'Generales/Icon_Editar.svg" height="12" class="imgEditar'+contComponentes+'" onclick="getEditar(\''+$('#select_blocks').val()+'\', \''+block.toLowerCase()+'\', '+contComponentes+', '+_elemtPorBloque+');" />';
                    htmlC += '<img src="require/imgv2/' + dirBlanco + 'Generales/Icon_Eliminar.svg" height="12" class="imgEliminar'+contComponentes+'" onclick="getEliminar('+contComponentes+', \''+block+'\', '+idBloqueDelbloque+');" />';
                    if(block!="comentario"){
                        htmlC += '<img src="require/imgv2/' + dirBlanco + 'Generales/Icon_Duplicar.svg" height="12" class="imgDuplicar'+contComponentes+'" onclick="getDuplicar('+contComponentes+');" />';
                    }
                    else{
                        htmlC += '<br /> &nbsp;';
                    }
                    //htmlC += '<span style="font-size:13px; color:#000;" onclick=""><i class="flaticon-file-1" style="color:white;"></i></span>';
                }
                
                if(block=="comentario"){
                    htmlC += '<input type="hidden" name="hddComent[]" id="hddComent'+contComponentes+'" value="'+$("#comment_input").val()+'" class="hddComent'+contComponentes+'" />';
                }
                else{
                    htmlC += '<input type="hidden" name="hddComent[]" id="hddComent'+contComponentes+'" value="'+ strComentario +'" class="hddComent'+contComponentes+'" />';
                }
                
                htmlC += '<input type="hidden" name="hddCalories[]" id="hddCalories'+contComponentes+'" value="'+total_calories+'" class="hddCalories'+contComponentes+'" />';
                htmlC += '<input type="hidden" name="hddPausa[]" id="hddPausa'+contComponentes+'" value="'+pause+'" class="hddPausa'+contComponentes+'" />';
                htmlC += '<input type="hidden" name="hddMetricaPausa[]" id="hddMetricaPausa'+contComponentes+'" value="'+pause_type+'" class="hddMetricaPausa'+contComponentes+'" />';
                htmlC += '<input type="hidden" name="hddNameEx[]" id="hddNameEx'+contComponentes+'" value="'+nombreEx+'" class="hddNameEx'+contComponentes+'" />';
                htmlC += '</td>';
                htmlC += '</tr>';
                
                if(block!="circuito"){
                    htmlC += htmlEx;
                }
                htmlC += '</table>';
                //alert(contBloqueDelbloque + ' .. ' + tablaSerie);
                
                var muestraPausa=false;
                //alert(contBloquesEditando+"-"+limiteBloque);
                if(limiteBloque==contBloqueDelbloque || limiteBloque==contBloquesEditando){
                muestraPausa= true;
                }
                
                contBloquesEditando++;
                if(block=="secuencia"){
					pausa_entre_bloques_text=" entre bloques";
				}
                if(tablaReps==true){
                    if(typeof Number(pause) == 'number' && muestraPausa==true){
                        if(pause>0){
                            htmlC += '<table style="width:100%; margin: 6px 0 0 0;"><td style="background-color:#C3DBE7; color:#003A5D; font-weight:600; font-size:13px; vertical-align:middle; text-align:left !important; padding:15px 20px !important;" align="left">';
                            htmlC += 'Pausa ' + pausa_entre_bloques_text + ' <span style="font-size:17px;" class="label" id="lblPausa'+contComponentes+'">'+(pause=='0' ? '' : pause + ' ' + string_type_pause) + '</span>';
                            htmlC += htmlHddPause;
                            htmlC += '</td></table>';
                        }
                    }
                    if(contComponentes>1 && $("#hddAccion").val()=="Editando"){
                        //htmlC += '</td></tr></table>';
                        //alert("recup");
                    }
                    
                }
                if(tablaSerie==true){
                    if(typeof Number(recup) == 'number' && muestraPausa==true){
                        if(recup>0){
                            htmlC += '</table><table style="width:100%; margin: 4px 0 10px 0;"><td style="background-color:#C3DBE7; color:#003A5D; font-weight:600; font-size:13px; vertical-align:middle; text-align:left !important; padding:15px 20px !important;" align="left">';
                            htmlC += 'Recuperación <span style="font-size:17px;" class="label" id="lblRecup'+contComponentes+'">'+(recup=='0' ? '' : recup+' '+string_recup_type) + '</span>';
                            //htmlC += htmlHddRecup;// david202332302 comentado
                            htmlC += '</td></table>';
                        }
                    }
                    if(contComponentes>1 && $("#hddAccion").val()=="Editando"){
                        //htmlC += '</td></tr></table>';
                        //alert("serie");
                    }
                }
                //if((contComponentes>1 || bloqueAnterior!=block) && $("#hddAccion").val()=="Editando");
                //htmlC += '</span>';
                if(block!="secuencia"){
                    htmlC += '</span>';
                }
                else{
					//alert(contComponentes);
                    if(contComponentes==2){
                        //htmlC += '</span>';
                        //alert(1234);
                    }
                }
                    
                if(bloqueAnterior!=block){
                    bloqueAnterior=block;
                }
        }
    }
    //htmlC += '</span>';
	$("#divComponentes").html($("#divComponentes").html()+htmlC);
}

function getSumaEcos(valorEcos, valorDistTiempo, metrica, duracionEjercicio, repeticiones, deporteSelected, average, metricaPausa, totalMinutosPausa, minutosRecuperacion){
	//alert(duracionEjercicio);
	totalMinutosSesion += duracionEjercicio + totalMinutosPausa + minutosRecuperacion;
	//alert(totalMinutosSesion);
	let total= Number($("#divEcosTotales").html());
	total += Number(valorEcos);
	$("#divEcosTotales").html(total);
	
	//Calculo de distancia y tiempo Totales
	let horasAMin= Number($("#spanHrsTotales").html())*60;
	let minutosTotales= Number($("#spanMinTotales").html()) + duracionEjercicio + horasAMin + totalMinutosPausa + minutosRecuperacion;
	//alert((minutosTotales));
	let metrosTotales= Number($("#spanMtsTotales").html());
	let calculoTiempo= false;
	$("#spanMtsKm").html("mts");
	
	//calculo tiempo 
	//var hrsTemp= Math.floor(duracionEjercicio / 60);
	//var minTemp = Math.floor(duracionEjercicio % 60);
	//horasAMin = hrsTemp * 60;
	//minutosTotales +=  minTemp + horasAMin;

	var hrs = Math.floor((totalMinutosSesion) / 60);
	var min = Math.floor((totalMinutosSesion) % 60);
	//alert((min));
	//alert(deporteSelected + hrs + "||" + min);
	$("#spanHrsTotales").html(hrs);
	//alert(hrs);
	$("#spanMinTotales").html(min);
	
	
	//calculo de la distancia
	if(Number.isInteger(repeticiones)){
		if(repeticiones>0){
			valorDistTiempo= Number(valorDistTiempo)*Number(repeticiones);
		}
	}
	
	if(Number.isInteger(series)){
		if(series>1){
			valorDistTiempo= Number(valorDistTiempo)*Number(series);
		}
	}
	
	var distanciaMetros=0;
	var sumaPausa= 0;
	var kmPausa=0;
	if(deporteSelected=="natacion"){
		
		if(metrica==1){//segundos
			distanciaMetros= valorDistTiempo * average;
		}
		else if(metrica==2){//minutos
			distanciaMetros= (valorDistTiempo*60) * average;
		}
		else if(metrica==3){//horas
			distanciaMetros= (valorDistTiempo*3600) * average;
		}
		else if(metrica==4){//metros
			metrosTotales += valorDistTiempo;
		}
		else if(metrica>4){//kilómetros
			metrosTotales += (valorDistTiempo * 1000);
		}
	}
	else if(deporteSelected=="carrera"){
		if(metrica==1){//segundos
			distanciaMetros= (valorDistTiempo/3600) * average;
		}
		else if(metrica==2){//minutos
			distanciaMetros= (valorDistTiempo/60) * average ;
		}
		else if(metrica==3){//horas
			distanciaMetros= (valorDistTiempo * average);
		}
		else if(metrica==4){//metros
			metrosTotales += (valorDistTiempo / 1000);
		}
		else if(metrica>4){//kilómetros
			metrosTotales += (valorDistTiempo);
		}
	}
	else if(deporteSelected=="ciclismo"){
		if(metrica==1){//segundos
			distanciaMetros= (valorDistTiempo/3600) * average;
		}
		else if(metrica==2){//minutos
			distanciaMetros= (valorDistTiempo/60) * average;
			//alert(valorDistTiempo + "---" + average);
		}
		else if(metrica==3){//horas
			distanciaMetros= (valorDistTiempo * average);
		}
		else if(metrica==4){//metros
			metrosTotales += (valorDistTiempo / 1000);
		}
		else if(metrica>4){//kilómetros
			metrosTotales += (valorDistTiempo);
		}
		
		var average_Z1 = "0";
		if(average_Z1 != 0){
			kmPausa= (totalMinutosPausa/60) * average_Z1;
		}
		/*if(metricaPausa==1){//minutos
			kmPausa= (totalMinutosPausa/60) * average_Z1;
		}
		else if(metricaPausa==2){//segundos
			kmPausa= (totalMinutosPausa/3600) * average;
			alert(totalMinutosPausa + " - " + kmPausa + " - "+average);
		}/**/
		//kmPausa= (totalMinutosPausa/60) * average;
		//alert(totalMinutosPausa + "-" + average);
		
		//sumamos las pausas
		/*$(".clsContDistTiempo").each(function() {
			let targetPosicion = $(this).val();
			//alert(targetPosicion);
			var metricaPausaTemp= Number($('#hddMetricaPausa'+targetPosicion).val());
			var pausaTemp= Number($('#hddPausa'+targetPosicion).val());
			var RepsTemp= Number($('#hddReps'+targetPosicion).val());
			var minTemp=0;
			if(metricaPausaTemp==2)
				minTemp = pausaTemp/60;
			else
				minTemp = pausaTemp;
			
			if(RepsTemp>2)
				
			sumaPausa = sumaPausa + minTemp;
		});*/
	}
	//alert(metrosTotales + " - " + distanciaMetros + " - " + kmPausa);
	metrosTotales = metrosTotales + Number(distanciaMetros) + kmPausa;
	//alert(metrosTotales);
		
	//clsPausaMetricaFor//clsPausaFor
	if(isNaN(metrosTotales)) metrosTotales=0;
	//alert(metrosTotales);
	if(deporteSelected=="ciclismo" || deporteSelected=="carrera"){
		/*var _km= Number(metrosTotales)/1000;
		*/
		//alert(deporteSelected + "---"+metrica);
		$("#spanMtsTotales").html(metrosTotales.toFixed(1));
		$("#spanMtsKm").html("km");
	}
	else{
		$("#spanMtsTotales").html(Math.round(metrosTotales));
	}
	
	
	
	
	if(metrica==1 || metrica==2 || metrica==3){
		calculoTiempo= true;
		
	}
	/*if(metrica==1){//minutos
		minutosTotales += valorDistTiempo;
		calculoTiempo= true;
	}
	else if(metrica==2){//segundos
		minutosTotales += Math.floor((valorDistTiempo / 60) % 60);
		calculoTiempo= true;
	}
	else if(metrica==3){//horas
		minutosTotales += (valorDistTiempo * 60);
		calculoTiempo= true;
	}*/
	else if(metrica==4){//metros
		metrosTotales += valorDistTiempo;
	}
	else if(metrica>4){//kilómetros
		metrosTotales += (valorDistTiempo * 1000);
	}
	/*if(calculoTiempo==true){//mostramos calculos de tiempo
		//alert(minutosTotales);
		/* //var hrs= Math.floor(duracionEjercicio / 60);
		//var min = minutosTotales % 60;* /
		var hrs= Math.floor(duracionEjercicio / 60);
		var min = Math.floor(duracionEjercicio % 60);
		$("#spanHrsTotales").html(hrs);
		$("#spanMinTotales").html(min);
	}
	else{//mostramos calculos de distancia
	}
	*/
}
	
$("#button_actualizar").click(function() {
	var limit=1;
	var _posicion= $("#hddPosicionSelected").val();
    /*if ($("#hddBloque" + _posicion).val() == 'secuencia') {
		limit= Number($("#hddElemtPorBloque" + _posicion).val());
	}
	else if ($("#hddBloque" + _posicion).val() == 'progresivo') {
		limit= Number($("#hddElemtPorBloque" + _posicion).val());
	}
	else if ($("#hddBloque" + _posicion).val() == 'farlek') {
		limit= Number($("#hddElemtPorBloque" + _posicion).val());
	}*/
	limit= $(".clsInputBloques").length;
	//alert(limit);
	var campObliga= false;
	if(block == 'farlek' || block == 'secuencia' || block == 'progresivo'){
		$(".clsInputBloques").each(function(){
			if($(this).val()==""){
				campObliga= true;
				swal("Campos requeridos!", "Llene los campos obligtorios", {
					icon: "warning",
					buttons: {
						confirm: {
							className: 'btn btn-warning'
						}
					},
				});

			}
		});
	}
	
	if(campObliga==true){
		return false;
	}
	
	block= $("#hddBloque" + _posicion).val();
	//alert("1 : " + _posicion);
	
	if(block=="comentario" || block=="transicion"){
		//alert($("#comment_input").val() + ' ' + "#spanComent" + _posicion);
		$("#hddComent" + _posicion).val($("#comment_input").val());
		
		var porcTransicion="";
		if(block=="transicion"){
			if($('#rbTransicion10').is(':checked')) {
				//porcTransicion= "<br />Porcentaje adicional: + 10%";
				porcTransicionAdicional=10;
			}
			else if($('#rbTransicion10_v2').is(':checked')) {
				//porcTransicion= "<br />Porcentaje adicional: + 10%";
				porcTransicionAdicional=10;
			}
			else if($('#rbTransicion15').is(':checked')) {
				//porcTransicion= "<br />Porcentaje adicional: + 15%";
				porcTransicionAdicional=15;
			}
			$("#hddPorcentajeTransicion" + _posicion).val(porcTransicionAdicional);
		}
		$("#spanComent" + _posicion).html($("#comment_input").val() + porcTransicion);
	}
	
	let _ecosTotales = 0;
	let _duracionEjercicio=0;
	let _average=0;
	let _totalMinutosPausa=0;
	try{
		var posicionOrinal= _posicion;
		var posicionForm="";
		var _elemtPorBloque= Number($("#hddElemtPorBloque"+_posicion).val());
		var diferencia= limit-_elemtPorBloque;
		//alert(limit+ "-" + _elemtPorBloque);
		var htmlBloquesAdicionales="";
		
		for(i=0; i<limit; i++){
			if(diferencia>0){
				//alert("mayor");
				if((i+1) > _elemtPorBloque){
					htmlBloquesAdicionales += "<div class='clstblBloques"+$("#hddNombreClase"+_posicion).val()+" style='border:solid 0px'>-|-</div>";
					//agregamos bloques adicionales
					$(".clstblBloques"+$("#hddNombreClase"+_posicion).val()+":last").attr("style", "border-bottom: solid 2px #FFF;");
                    if(i!=0){//david condicion agregada 2023
                        $(".clstblBloques"+$("#hddNombreClase"+_posicion).val()+":last").append("<div class='clstblBloques"+$("#hddNombreClase"+_posicion).val()+" style='border:solid 0px'> "+i+"</div>");
                    }
					
					//fin agregamos bloques adicionales
				}
			}
			
			_posicion= Number(posicionOrinal) + Number(i);
			//alert(_posicion + " - " + i);
			if(i==0) posicionForm= "";
			else if(i==1) posicionForm= 2;
			else if(i==2) posicionForm= 3;
			else if(i==3) posicionForm= 4;
			
			$('#hddSerie'+_posicion).val($('#series').val());
			$('#hddReps'+_posicion).val($('#times').val());
			$('#hddDist'+_posicion).val($('#select_quantity_large' + posicionForm).val());
			$('#hddMetricaDist'+_posicion).val($('#select_type_large' + posicionForm).val());
			$('#hddZona'+_posicion).val($('#select_zone' + posicionForm).val());
			$('#hddPausa'+_posicion).val($('#pause').val());
			$('#hddMetricaPausa'+_posicion).val($('#select_type_pause').val());
			console.log($('#hddRecup'+_posicion).val(),$('#pauseRecuperacion').val(),'Recuperacion DDD')
            $('#hddRecup'+_posicion).val($('#pauseRecuperacion').val());
            console.log($('#hddRecup'+_posicion).val(),$('#pauseRecuperacion').val(),'Recuperacion DDD2')
            
			$('#hddMetricaRecup'+_posicion).val($('#type_pauseRecuperacion').val());
			$('#hddNameEx'+_posicion).val($('#exercise').val());
			$('#hddNameEx'+_posicion).val($('#circuit').val());
			
			
			////////////////////////////////////////////
			//////////////// getFormulas ///////////////
			////////////////////////////////////////////
			let j = 0;
			var rows;
			var temp;
			var _ppm = "--";
			var _minKm= "--";
			var _min100= "--";
			var _min400= "--";
			var _minDist= "--";
			var _factorEjer= "--";
			var _factorInten= "--";
			let imgDeporte= "";
			let blockSelected= "";
			let deporteSportID= 0;
			let nombreEx="";
			let imagenEx="";
			try {
				var zona = $('#select_zone' + posicionForm).val();
				var iconoFE = "C";
				series = (Number.isInteger($('#series').val()) ? $('#series').val() : 1);
				var repeticiones = ($('#times').val()!="" && $('#times').val()!="0" ? $('#times').val() : 1);
				var minutosRepeticion = $('#select_quantity_large' + posicionForm).val();
				var minutosPausa = (typeof Number($('#pause').val()) == 'number' ? $('#pause').val() : 1);
				var minutosRecuperacion = 0;
				var kmPorHr = 16.4;
				var distancia = (typeof Number($('#select_quantity_large' + posicionForm).val()) == 'number' ? $('#select_quantity_large' + posicionForm).val() : 1);
				var opcionVelocidadRitmo = "CARRERA";
				var distTiempoMetrica = (Number.isInteger($('#select_type_large' + posicionForm).val()) ? $('#select_type_large' + posicionForm).val() : 1);
				var perfilID = $('#sessionsssession-profile_id').val();
				if (perfilID == "") perfilID = 0;
				
				blockSelected=$('#hddCarrera' + _posicion).val();
				//alert(_posicion+"--"+blockSelected);
				if(blockSelected=="ciclismo"){
					imgDeporte= "Icon_Ciclismo";
					iconoFE = "B";
					deporteSportID= 1;
				}
				else if(blockSelected=="carrera"){
					imgDeporte= "Icon_Carrera";
					deporteSportID= 3;
				}
				else if(blockSelected=="natacion"){
					imgDeporte= "Icon_Natacion";
					opcionVelocidadRitmo = "NATACION";
					iconoFE = "N";
					deporteSportID=2;
				}
				
				if(block!="circuito" && block!="pausa" && block!="drills"){ //agregue drills 140524
					if($('#select_type_pause').val()=="2"){//para segundos
						minutosPausa = minutosPausa/60;
					}
					if($('#type_pauseRecuperacion').val()=="2"){//para segundos
						minutosRecuperacion = minutosRecuperacion/60;
					}
					//alert(zona + " - " + iconoFE + " - " + series + " - " + repeticiones + " - " + minutosRepeticion);
					//alert(minutosPausa + " - " + minutosRecuperacion + " - " + kmPorHr + " - " + distancia + " - " + opcionVelocidadRitmo);
					//alert(minutosPausa + " - " + $('#select_type_large').val() + " - " + $('#hddUltimoBloqueAgregado').val());
					if(minutosPausa=="") minutosPausa=0;
					
					$.ajax({
						type: 'get',
						async: false,
						url: "/web/index.php?r=sessionsssession/getformulas",
						data: {
							"zona": zona,
							"iconoFE": iconoFE,
							"series": series,
							"repeticiones": repeticiones,
							"minutosRepeticion": minutosRepeticion,
							"minutosPausa": minutosPausa,
							"minutosRecuperacion": minutosRecuperacion,
							"kmPorHr": kmPorHr,
							"distancia": distancia,
							"opcionVelocidadRitmo": opcionVelocidadRitmo,
							"distTiempoMetrica": $('#select_type_large').val(),
							"ultimoBloqueAgregado": $('#hddUltimoBloqueAgregado').val(),
							"perfilID": perfilID
						},
						success: function(data) {
							//console.log(data);
							//alert("data->"+data);
							rows = JSON.parse(data);
							//console.log(rows);
							var cantTemp = 0;
							//alert(12);
							_ppm = rows[j]['ppm'];
							_minKm= rows[j]['min_km'];
							_watts= rows[j]['potencia'];
							_min100= rows[j]['min_100'];
							_min400= rows[j]['min_400'];
							_minDist= rows[j]['min_dist'];
							_factorEjer= rows[j]['FactorEjerccion'];
							_factorInten= rows[j]['FactorIntensidad'];
							_ecosTotales= rows[j]['ECOsTotal'];
							_duracionEjercicio= rows[j]['duracionEjercicio'];
							_average= rows[j]['average'];
							_totalMinutosPausa= rows[j]['totalMinutosPausa'];
							//alert(_ecosTotales);
							$("#hddEcos"+_posicion).val(_ecosTotales);
						},
						error: function(data) {
							console.log("data: ", data);
							//alert("error formulas actualizar 11: " + data);
						},

					});
				}
			} catch (err) {
				alert("error formulas actualizar: "+err.message);
			}
			////////////////////////////////////////////
			////////////// fin getFormulas /////////////
			////////////////////////////////////////////
					
			if(porcTransicionAdicional != 0){
				var tempEcos = _ecosTotales * (porcTransicionAdicional/100);
				_ecosTotales = parseInt(_ecosTotales) + Math.round(tempEcos);
			}
			
			$('#lblSerie'+_posicion).html("");
			//alert(block);
			//alert($("#hddBloque" + _posicion).val());
			if(block!="drills"){
				//$('#lblSerie'+_posicion).html($('#series').val());//comentado david 2023
                $('#lblSerieD'+_posicion).html($('#series').val()+'x');//david 2023
			}
			//$('#lblReps'+_posicion).html($('#times').val());//comentado david 2023
            $('#lblRepsD'+_posicion).html($('#times').val()+'x');//david 2023
            console.log('reps de david',$('#times').val())
			if($('#select_quantity_large' + posicionForm).val() != ""){
				var strMetricaDist= getMetrica($('#select_type_large' + posicionForm).val(), 'DistTiempo');
				$('#lblDist'+_posicion).html($('#select_quantity_large' + posicionForm).val() + " " + strMetricaDist);
			}
			
			$('#lblZona'+_posicion).html($('#select_zone' + posicionForm).val());
			
			if($('#pause' + posicionForm).val() != "" && $('#pause' + posicionForm).val() != undefined){
				var strMetricaPausa= getMetrica($('#select_type_pause' + posicionForm).val(), 'pause');
				$('#lblPausa'+_posicion).html($('#pause' + posicionForm).val() + " " + strMetricaPausa);
			}
			if(block!="continuo"){
				if($('#pauseRecuperacion').val().trim() != ""){
					var strMetricaRecup= getMetrica($('#type_pauseRecuperacion').val(), 'pause');
					$('#lblRecup'+_posicion).html($('#pauseRecuperacion').val() + " " + strMetricaRecup);
                    //$('#hddRecup'+_posicion).val($('#pauseRecuperacion').val() + " " + strMetricaRecup);//linea entera agregada david 230223
				}
			}
			else{
				
			}
			
			if($("#hddBloque" + _posicion).val()=="drills" || $("#hddBloque" + _posicion).val()=="circuito"){
				var id_= $('#select_exercise').val();
				var urlBusqueda= 'index.php?r=exercisesexercise/getexercise';
				if($("#hddBloque" + _posicion).val()=="circuito"){
					urlBusqueda= 'index.php?r=sessionsssession/getcircuitbyid';
					id_= $('#select_circuit').val();
				}
                if($("#hddBloque" + _posicion).val()=="drills"){
					urlBusqueda= 'index.php?r=sessionsssession/getdrillbyid';
					id_= $('#select_drills').val();
				}
				$.ajax({
					type: 'get',
					async: false,
					url: urlBusqueda,
					data: {"id":id_, "limit":140},
					success: function(data) {
                        console.log('edit data',data,urlBusqueda,id_);
						//alert(data);
						//let coment= $("#text_circuit");
                        let comentCircuito='';
                        if($("#hddBloque" + _posicion).val()=="circuito"){
                            console.log('circuito');
                            comentCircuito= $("#text_circuit").val();
                        }else{
                            comentCircuito= $("#text_drills").val();
                            console.log('drills');
                        }
						console.log($("#hddBloque" + _posicion).val());
						let strSalto= "<br />";
						if($("#hddBloque" + _posicion).val()!="circuito" && $("#hddBloque" + _posicion).val()!="drills"){//agregue drills 130524
							comentCircuito="";
							strSalto="";
						}
						var separarEx = data.split("||");
						$("#circuitoEjexID" + _posicion).val(separarEx[0]);
						$("#hddExerciseName" + _posicion).val(separarEx[1]);
						$("#hddNameEx" + _posicion).val(separarEx[1]);
						$("#spanNameEx" + _posicion).html(separarEx[1] + strSalto + comentCircuito);
						$("#spanDescipEx" + _posicion).html(separarEx[2]);
						$("#imgEx" + _posicion).attr("src", "../../media/"+separarEx[4]);
						$("#hddComent" + _posicion).val(comentCircuito);
						
						//alert(separarEx[4]);
					},
					error: function(data) {alert("Error al buscar datos del ejercicio"+data);},
				});
			}
		}
	
		try{
			$("#divEcosTotales").html("0");
			$("#spanHrsTotales").html("0");
			$("#spanMinTotales").html("0");
			$("#spanMtsTotales").html("0");
			totalMinutosSesion=0;
			$(".clsContDistTiempo").each(function() {
				let targetPosicion = $(this).val();
				//alert(targetPosicion);
				var ecosActualiza= Number($('#hddEcos'+targetPosicion).val());
				var distTiempoActualiza= Number($('#hddDist'+targetPosicion).val());
				var metricaActualiza= Number($('#hddMetricaDist'+targetPosicion).val());
				var metricaPausaActualiza= (Number.isInteger($('#hddMetricaPausa'+targetPosicion).val()) ? Number($('#hddMetricaPausa'+targetPosicion).val()) : 0);
				var seriesActualiza = (Number.isInteger($('#hddSerie'+targetPosicion).val()) ? $('#hddSerie'+targetPosicion).val() : 1);
				
				var bloqueActualiza= blockSelected=$('#hddCarrera' + targetPosicion).val();
				var duracionEx= blockSelected=$('#hddDuracionEx' + targetPosicion).val();
				
				//alert("-"+_ecosTotales+"-"+distTiempoActualiza+"-"+metricaActualiza+"-"+_duracionEjercicio+"-"+seriesActualiza+"-"+bloqueActualiza+"-"+_average+"-"+metricaPausaActualiza+"-"+_totalMinutosPausa);}
				if ($("#hddBloque" + targetPosicion).val() != 'comentario' && $("#hddBloque" + targetPosicion).val() != 'circuito' && $("#hddBloque" + targetPosicion).val() != 'transicion') {
					//alert(_ecosTotales+"||"+distTiempoActualiza+"||"+metricaActualiza+"||"+duracionEx+"||"+seriesActualiza+"||"+bloqueActualiza+"||"+_average+"||"+metricaPausaActualiza+"||"+_totalMinutosPausa);
					minutosRecuperacion=0;
					try{
						minutosRecuperacion= Number($("#pauseRecuperacion").val());
						if($("#type_pauseRecuperacion").val()=="2"){
							minutosRecuperacion= Number($("#pauseRecuperacion").val())/60;
						}
						minutosRecuperacion= minutosRecuperacion * series;
					}
					catch (err) {
						minutosRecuperacion=0;
					}
					//alert(duracionEx + " --- " + _totalMinutosPausa + " --- " +  minutosRecuperacion);
					getSumaEcos(_ecosTotales, distTiempoActualiza, metricaActualiza, parseFloat(duracionEx), seriesActualiza, bloqueActualiza, _average, metricaPausaActualiza, parseFloat(_totalMinutosPausa), parseFloat(minutosRecuperacion));
				}
			});
			
			$("#spanBloques2").html("");
		}
		catch (err) {
			alert("Error: Actualiza suma totales" + err.message);
		}
		
		//agregamos bloques adicionales
		$(".clstblBloques"+$("#hddNombreClase"+_posicion).val()+":last").attr("style", "border-bottom: solid 2px #FFF;");
		$(".clstblBloques"+$("#hddNombreClase"+_posicion).val()+":last").append("");
		//fin agregamos bloques adicionales
		
	}
	catch (err) {
        alert(err.message);
    }
	$('#exampleModal').modal('hide');
});
	
function getMetrica(valor_tipo, tipo){
	var string_tipo="";
	switch (valor_tipo) {
        case '1':
			if(tipo=="DistTiempo") string_tipo = 'seg';
            else string_tipo = 'min';
            break;
        case '2':
            if(tipo=="DistTiempo") string_tipo = 'min';
			else string_tipo = 'seg';
            break;
        case '3':
            string_tipo = 'hrs';
            break;
        case '4':
            string_tipo = 'mts';
            break;
        case '5':
            string_tipo = 'kms';
            break;
    }
	return string_tipo;
}

$("#button_make_div").click(function() {
	block = $(this).val();
	
				
	/*if(!validaBloque(block)){
		return false;
	}*/
	
	
	var limit=1;
    var validaEdicion= false;
	if (block == 'secuencia') {
		//limit= Number($("#hddNumBloqueDelBloque").val());// originalmente limit=2
		limit= Number($("#hddNumBloqueDelBloque").val())+1;// originalmente limit=2
							validaEdicion= true;
						}
	else if (block == 'progresivo') {
		limit= Number($("#hddNumBloqueDelBloque").val())+1;// originalmente limit=4
							validaEdicion= true;
						}
	else if (block == 'farlek') {
		limit= Number($("#hddNumBloqueDelBloque").val())+1;// originalmente limit=3;
							validaEdicion= true;
						}
	if(validaEdicion==true && $("#hddAccion").val()=="Editando"){
		limit=1;
	}
	else{
		if(block=="circuito"){
			if($("#select_circuit").val()=="" || $("#select_circuit").val()==null){
				swal("Debe seleccionar un circuito", "", {
					icon: "warning",
					buttons: {
						confirm: {
							className: 'btn btn-warning'
						}
					},
				});
				return false;
			}
		}
        if(block=="drills"){
			if($("#select_drills").val()=="" || $("#select_drills").val()==null){
				swal("Debe seleccionar un drill", "", {
					icon: "warning",
					buttons: {
						confirm: {
							className: 'btn btn-warning'
						}
					},
				});
				return false;
			}
		}
	}
		
	if(block=="secuencia" && $("#hddAccion").val()=="Editando"){//agregado david 2023

				createComponentesCarga2(limit);
				//createComponentesCargaSecuencia(limit);

	}else{

		initGrupoDiv=0;
        ///alert(limit);
		for(i=0; i<limit; i++){
			contBloqueDelbloque=i;
			if(i==0 || (i==1 && $("#select_quantity_large2").val()!="") || (i==2 && $("#select_quantity_large3").val()!="") || (i==3 && $("#select_quantity_large4").val()!="")){
				//alert(i);
			}
			initGrupoDiv++;
			if(limit>1 && initGrupoDiv==limit) {
				initGrupoDiv=9999;
			}
			console.log('secuencia limit for ',i)
            switch (block) {
                case "secuencia":
                    if(i!=2){
                        createComponentesCarga();//condicion de secuencia, truena si se deja en menos de 2
                    }    
                    break;

                case "farlek":
                    if(i!=3){
                        createComponentesCarga();//condicion de secuencia, truena si se deja en menos de 2
                    }
                    break;
                case "progresivo":
                    if(i!=4){
                        createComponentesCarga();//condicion de secuencia, truena si se deja en menos de 2
                    }
                    break;
            
                default:
                    createComponentesCarga();//aca me  quede 20230313
                    break;
            }
		}

	}

	//$("#divComponentes").append("</span>");
	
	return;
	
    let case_type = $('#select_type_large').val();
    let string_type = 'default';
    switch (case_type) {
        case '2':
            string_type = 'min';
            break;
        case '1':
            string_type = 'seg';
            break;
        case '3':
            string_type = 'hrs';
            break;
        case '4':
            string_type = 'mts';
            break;
        case '5':
            string_type = 'kms';
            break;
    }

    let pause_type = $('#select_type_pause').val();
    let string_type_pause = 'default';
    let pause = 0
    switch (pause_type) {
        case '1':
            string_type_pause = 'min';
            pause = Number($('#pause').val());
            break;
        case '2':
            string_type_pause = 'seg';
            pause = Number($('#pause').val());
            break;
    }

    let times = $('#times').val();
    if (times == '') {
        times = 1;
    }

    block = $(this).val();
	if(!validaBloque(block)){
		return false;
	}


    times = Number(times);
    quantity_large = Number($('#select_quantity_large').val());
    if (string_type == 'min') {
        quantity_large = quantity_large;
    }
    zone = $('#select_zone').val();
    series = Number($('#series').val());
	//alert(times);
    if (block == 'comentario') {
        link = (Math.random() + 1).toString(36).substring(7);
        let comment = $('#comment_input').val();
        $('#' + $('#select_blocks').val()).parent().append(
            '<br><input class="form-control sessions_content" data-block="' + block +
            '" data-times="1" data-series="1" data-circuit="" data-text="' + comment +
            '" data-link="' + link + '" value="' + comment + '">');
    }
	else {
        //circuit
        switch (block) {
            case 'circuito':
                link = (Math.random() + 1).toString(36).substring(7);
                circuit_id = $('#select_circuit').val();
                text = $('#text_circuit').val();
				zone=10;
                make_bar_circuit(1, $('#select_blocks').val(), block, 1, 12, 'min',
                    zone, 0, 'min', circuit_id, text);
                //create sessions_content
                /*$('#' + $('#select_blocks').val()).append(
                    '<div style="display:none" class="sessions_content" data-block="' + block +
                    '" data-times="' + times + '" data-series="' + series + '" data-circuit="' +
                    circuit_id + '" data-text="' + text + '" data-link="'+link+'">' + block + '</div>');*/
                //
                break;
            case 'drills':
                link = (Math.random() + 1).toString(36).substring(7);
                exercise_id = $('#select_exercise').val();
                /*make_bar_exercise(series, $('#select_blocks').val(), block, times, quantity_large, string_type,
                zone, pause, string_type_pause,exercise_id);*/
                make_bar_exercise(1, $('#select_blocks').val(), block, 1, quantity_large,
                    string_type,
                    zone, 0, 'min', exercise_id);
                //create sessions_content
                /*$('#' + $('#select_blocks').val()).append(
                    '<div style="display:none" class="sessions_content" data-block="' + block +
                    '" data-times="' + times + '" data-series="' + series +
                    '" data-exercise="' + exercise_id + '" data-link="'+link+'">' + block + '</div>');*/
                //
                break;
            default:
				times=1;//prueba, QUITAR
                link = (Math.random() + 1).toString(36).substring(7);
                make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                    string_type,
                    zone, pause, string_type_pause);
                //create sessions_content
                /*$('#' + $('#select_blocks').val()).append(
                    '<div style="display:none" class="sessions_content" data-block="' + block +
                    '" data-times="' + times + '" data-series="' + series +
                    '" data-circuit="0" data-link="'+link+'">' + block + '</div>');*/
                //
                break;
        }
    }

	$("#spanBloques2").html("");
	$('#hddUltimoBloqueAgregado').val(block);
    $('#exampleModal').modal('hide');
})
$("#set_defaults").click(function() {
    //set defaults
    //alert("set defaults");
    let sport_split = $('#select_blocks').val().split('_');
    let sport = sport_split[0];
    let block = $('#button_make_div').val();
    switch (block) {
        case 'calentamiento':
            switch (sport) {
                case 'carrera':
                    times = 1;
                    quantity_large = 15;
                    zone = 1;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'ciclismo':
                    times = 1;
                    quantity_large = 30;
                    zone = 1;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'natacion':
                    times = 3;
                    quantity_large = 200;
                    zone = 1;
                    pause = 10;
                    string_type = 'mts';
                    pause_type = 'seg';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
            }
            break;
        case 'drills':

            break;
        case 'continuo':
            switch (sport) {
                case 'carrera':
                    times = 1;
                    quantity_large = 45;
                    zone = 1;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'ciclismo':
                    times = 1;
                    quantity_large = 90;
                    zone = 1;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'natacion':
                    times = 1;
                    quantity_large = 1500;
                    zone = 1;
                    pause = 0;
                    string_type = 'mts';
                    pause_type = 'seg';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
            }
            break;
        case 'pausa':
            switch (sport) {
                case 'carrera':
                    times = 1;
                    quantity_large = 0;
                    zone = 10;
                    pause = 1;
                    string_type = 'min';
                    pause_type = 'min';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'ciclismo':
                    times = 1;
                    quantity_large = 0;
                    zone = 10;
                    pause = 1;
                    string_type = 'min';
                    pause_type = 'min';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'natacion':
                    times = 1;
                    quantity_large = 0;
                    zone = 10;
                    pause = 1;
                    string_type = 'min';
                    pause_type = 'min';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
            }
            break;
        case 'continuo':

            break;
        case 'vuelta':
            switch (sport) {
                case 'carrera':
                    times = 1;
                    quantity_large = 5;
                    zone = 1;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'ciclismo':
                    times = 1;
                    quantity_large = 10;
                    zone = 1;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'natacion':
                    times = 4;
                    quantity_large = 50;
                    zone = 1;
                    pause = 10;
                    string_type = 'mts';
                    pause_type = 'seg';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
            }
            break;
        case 'comentario':

            break;
        case 'progresivo':
            switch (sport) {
                case 'carrera':
                    times = 1;
                    quantity_large = 20;
                    zone = 2;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 1;
                    quantity_large = 15;
                    zone = 3;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 1;
                    quantity_large = 10;
                    zone = 4;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'ciclismo':
                    times = 1;
                    quantity_large = 20;
                    zone = 2;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 1;
                    quantity_large = 15;
                    zone = 3;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 1;
                    quantity_large = 10;
                    zone = 4;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'natacion':
                    times = 1;
                    quantity_large = 400;
                    zone = 2;
                    pause = 0;
                    string_type = 'mts';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 1;
                    quantity_large = 300;
                    zone = 3;
                    pause = 0;
                    string_type = 'mts';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 1;
                    quantity_large = 200;
                    zone = 4;
                    pause = 0;
                    string_type = 'mts';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
            }
            break;
        case 'farlek':
            switch (sport) {
                case 'carrera':
                    times = 1;
                    quantity_large = 3;
                    zone = 4;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 1;
                    quantity_large = 2;
                    zone = 2;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 1;
                    quantity_large = 1;
                    zone = 6;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 3;
                    quantity_large = 1;
                    zone = 2;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);

                    break;
                case 'ciclismo':
                    times = 1;
                    quantity_large = 3;
                    zone = 4;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 1;
                    quantity_large = 2;
                    zone = 2;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 1;
                    quantity_large = 1;
                    zone = 6;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 3;
                    quantity_large = 1;
                    zone = 2;
                    pause = 0;
                    string_type = 'min';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);

                    break;
                case 'natacion':
                    times = 1;
                    quantity_large = 100;
                    zone = 4;
                    pause = 0;
                    string_type = 'mts';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 1;
                    quantity_large = 50;
                    zone = 2;
                    pause = 0;
                    string_type = 'mts';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 1;
                    quantity_large = 50;
                    zone = 6;
                    pause = 0;
                    string_type = 'mts';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 3;
                    quantity_large = 50;
                    zone = 2;
                    pause = 0;
                    string_type = 'mts';
                    pause_type = '';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
            }
            break;
        case 'secuencia':
            switch (sport) {
                case 'carrera':
                    times = 2;
                    quantity_large = 4;
                    zone = 4;
                    pause = 1;
                    string_type = 'min';
                    pause_type = 'min';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 2;
                    quantity_large = 500;
                    zone = 5;
                    pause = 1;
                    string_type = 'mts';
                    pause_type = 'min';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'ciclismo':
                    times = 2;
                    quantity_large = 5;
                    zone = 4;
                    pause = 1;
                    string_type = 'min';
                    pause_type = 'min';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 2;
                    quantity_large = 2;
                    zone = 5;
                    pause = 1;
                    string_type = 'min';
                    pause_type = 'min';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'natacion':
                    times = 2;
                    quantity_large = 200;
                    zone = 4;
                    pause = 20;
                    string_type = 'mts';
                    pause_type = 'seg';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    times = 2;
                    quantity_large = 100;
                    zone = 5;
                    pause = 40;
                    string_type = 'mts';
                    pause_type = 'seg';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
            }
            break;
        case 'intervalos':
            switch (sport) {
                case 'carrera':
                    times = 6;
                    quantity_large = 5;
                    zone = 4;
                    pause = 1;
                    string_type = 'min';
                    pause_type = 'min';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'ciclismo':
                    times = 6;
                    quantity_large = 5;
                    zone = 4;
                    pause = 1;
                    string_type = 'min';
                    pause_type = 'min';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'natacion':
                    times = 8;
                    quantity_large = 200;
                    zone = 4;
                    pause = 20;
                    string_type = 'mts';
                    pause_type = 'seg';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
            }
            break;
        case 'intermitente':
            switch (sport) {
                case 'carrera':
                    times = 20;
                    quantity_large = 30;
                    zone = 6;
                    pause = 30;
                    string_type = 'seg';
                    pause_type = 'seg';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'ciclismo':
                    times = 20;
                    quantity_large = 30;
                    zone = 6;
                    pause = 30;
                    string_type = 'seg';
                    pause_type = 'seg';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'natacion':
                    times = 20;
                    quantity_large = 25;
                    zone = 6;
                    pause = 25;
                    string_type = 'mts';
                    pause_type = 'mts';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
            }
            break;
        case 'repeticiones':
            switch (sport) {
                case 'carrera':
                    times = 5;
                    quantity_large = 1000;
                    zone = 5;
                    pause = 2;
                    string_type = 'mts';
                    pause_type = 'min';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'ciclismo':
                    times = 5;
                    quantity_large = 3;
                    zone = 5;
                    pause = (1.5);
                    string_type = 'min';
                    pause_type = 'min';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'natacion':
                    times = 6;
                    quantity_large = 200;
                    zone = 5;
                    pause = 1;
                    string_type = 'mts';
                    pause_type = 'min';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
            }
            break;
        case 'sprints':
            switch (sport) {
                case 'carrera':
                    times = 4;
                    quantity_large = 30;
                    zone = 10;
                    pause = 30;
                    string_type = 'mts';
                    pause_type = 'seg';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'ciclismo':
                    times = 4;
                    quantity_large = 5;
                    zone = 10;
                    pause = 30;
                    string_type = 'seg';
                    pause_type = 'seg';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
                case 'natacion':
                    times = 4;
                    quantity_large = 10;
                    zone = 10;
                    pause = 30;
                    string_type = 'mts';
                    pause_type = 'seg';
                    console.log('call funcion')
                    series = 1;
                    make_bar(series, $('#select_blocks').val(), block, times, quantity_large,
                        string_type,
                        zone, pause, pause_type);
                    break;
            }
            break;
    }
    $('#' + $('#select_blocks').val()).append(
        '<div style="display:none" class="sessions_content" data-block="' + block +
        '" data-times="' + times + '" data-series="' + series + '">' + block + '</div>');
});

function make_bar(series, sport, block, times, quantity_large, string_type, zone, pause, pause_type) {
    //alert(series + '-' + sport + '-' + block + '-' + times + '-' + quantity_large + '-' + string_type + '-' + zone + '-' + pause + '-' + pause_type);
    let ecosTotales = 0;
    let i = 0;
    var rows;
    var temp;

    try {
        var zona = zone;
        var iconoFE = "C";
        series = series;
        var repeticiones = times;
        var minutosRepeticion = quantity_large;
        var minutosPausa = pause;
        var minutosRecuperacion = 0;
        var kmPorHr = 16.4;
        var distancia = quantity_large;
        var opcionVelocidadRitmo = "CARRERA";
		var distTiempoMetrica = $('#select_type_large').val();
        var perfilID = $('#sessionsssession-profile_id').val();
        if (perfilID == "") perfilID = 0;

        var separar = sport.split("_");
        if (separar[0] == "natacion") {
            opcionVelocidadRitmo = "NATACION";
            iconoFE = "N";
            distancia = quantity_large;
        } else if (separar[0] == "ciclismo") {
            iconoFE = "B";
        }

        $.ajax({
            type: 'get',
            async: false,
            url: "/web/index.php?r=sessionsssession/getformulas",
            data: {
                "zona": zona,
                "iconoFE": iconoFE,
                "series": series,
                "repeticiones": repeticiones,
                "minutosRepeticion": minutosRepeticion,
                "minutosPausa": minutosPausa,
                "minutosRecuperacion": minutosRecuperacion,
                "kmPorHr": kmPorHr,
                "distancia": distancia,
                "opcionVelocidadRitmo": opcionVelocidadRitmo,
				"distTiempoMetrica": $('#select_type_large').val(),
				"ultimoBloqueAgregado": $('#hddUltimoBloqueAgregado').val(),
                "perfilID": perfilID
            },
            success: function(data) {
                //console.log(data);
                //alert(data);
                rows = JSON.parse(data);
                var cantTemp = 0;
                //alert(12);
                temp = rows[i]['ppm'] + '|' + rows[i]['min_km'] + '|' + rows[i]['min_100'] +
                    '|' + rows[i]['min_400'] + '|' + rows[i]['min_dist'] + '|' + rows[i][
                        'FactorEjerccion'
                    ];

            },
            error: function(data) {
                alert("error" + data);
            },

        });
    } catch (err) {
        alert(err.message);
    }
    //console.log('ESte es el resultado'+rows);
    //alert(times);
    for (let j = 0; j < times; j++) {
        //alert(zona+" -" + iconoFE+" -" + series+" -" + repeticiones+" -" + minutosRepeticion+" -" + 0 +" -" + kmPorHr+" -" + opcionVelocidadRitmo);

        let r_id = (Math.random() + 1).toString(36).substring(7);
        r_id = sport + '_' + block + '_' + r_id;
        switch (block) {
            case 'pausa':
                $('#' + sport).append('<div id="' + r_id + '" data-identifier="' + r_id + '" name="' +
                    r_id + '" data-series="' + series +
                    '" data-pauset="' +
                    pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                    '" data-block="' + block +
                    '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                    '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i]['ppm'] +
                    '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i]['min_400'] +
                    '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i]['FactorEjerccion'] +
                    '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' + rows[i]['min_km'] +
                    '" data-repeticiones="' + repeticiones + '" data-timerepeticiones="' +
                    minutosRepeticion + '"  data-minutos="' + minutosRecuperacion + '" data-pause="' +
                    pause + '" onclick="console.log(' + pause +
                    ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                    '\');" class="bar" style="margin-bottom:0px;--bar-value:100%;--bar-thickness: ' +
                    pause + 'px" data-name="' + pause + ' ' +
                    pause_type +
                    '" title="' + block.toUpperCase() + '; &#013; Pausa: ' + pause +
                    ' ' + pause_type +
                    '"></div>');
                break;

            default:
                $('#' + sport).append('<div id="' + r_id + '" data-identifier="' + r_id + '" name="' +
                    r_id + '" data-series="' + series +
                    '" data-pauset="' +
                    pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                    '" data-block="' + block +
                    '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                    '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i]['ppm'] +
                    '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i]['min_400'] +
                    '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i]['FactorEjerccion'] +
                    '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' + rows[i]['min_km'] +
                    '" data-repeticiones="' + repeticiones + '" data-timerepeticiones="' +
                    minutosRepeticion + '"  data-minutos="' + minutosRecuperacion + '" data-pause="' +
                    pause + '" onclick="console.log(' + pause +
                    ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                    '\');" class="bar" style="margin-bottom:' + pause +
                    'px;--bar-value:' +
                    Number(zone) * 10 + '%;--bar-thickness: ' +
                    quantity_large + 'px" data-name="' + quantity_large + ' ' +
                    string_type +
                    '" title="' + block.toUpperCase() + '&#013; Zona:' + zone + '; &#013; ' +
                    quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause +
                    ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] + '&#013; min/km: ' + rows[i][
                        'min_km'
                    ] + '&#013; x100: ' + rows[i]['min_100'] + '&#013; x400: ' + rows[i]['min_400'] +
                    '&#013; dist: ' + rows[i]['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] +
                    '"></div>');
                break;
        }

        /*if (string_type == 'min') {
            if (pause_type == 'min') {
                $('#' + sport).append('<div id="' + r_id + '" data-identifier="' + r_id + '" name="' +
                    r_id + '" data-series="' + series +
                    '" data-pauset="' +
                    pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                    '" data-block="' + block +
                    '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                    '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i]['ppm'] +
                    '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i]['min_400'] +
                    '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i]['FactorEjerccion'] +
                    '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' + rows[i]['min_km'] +
                    '" data-repeticiones="' + repeticiones + '" data-timerepeticiones="' +
                    minutosRepeticion + '"  data-minutos="' + minutosRecuperacion + '" data-pause="' +
                    pause + '" onclick="console.log(' + pause +
                    ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                    '\');" class="bar" style="margin-bottom:' + pause +
                    'px;--bar-value:' +
                    Number(zone) * 10 + '%;--bar-thickness: ' +
                    quantity_large + 'px" data-name="' + quantity_large + ' ' +
                    string_type +
                    '" title="' + block.toUpperCase() + '&#013; Zona:' + zone + '; &#013; ' +
                    quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause +
                    ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] + '&#013; min/km: ' + rows[i][
                        'min_km'
                    ] + '&#013; x100: ' + rows[i]['min_100'] + '&#013; x400: ' + rows[i]['min_400'] +
                    '&#013; dist: ' + rows[i]['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] +
                    '"></div>');
            } else {
                $('#' + sport).append('<div id="' + r_id + '" data-identifier="' + r_id + '" name="' +
                    r_id + '" data-series="' + series +
                    '" data-pauset="' +
                    pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                    '" data-block="' + block +
                    '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                    '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i]['ppm'] +
                    '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i]['min_400'] +
                    '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i]['FactorEjerccion'] +
                    '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' + rows[i]['min_km'] +
                    '" data-repeticiones="' + repeticiones + '" data-timerepeticiones="' +
                    minutosRepeticion + '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                    pause + '" onclick="console.log(' + pause +
                    ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                    '\');" class="bar" style="margin-bottom:' + pause +
                    'px;--bar-value:' +
                    Number(zone) * 10 + '%;--bar-thickness: ' +
                    quantity_large + 'px" data-name="' + quantity_large + ' ' +
                    string_type +
                    '" title="' + block.toUpperCase() + '&#013; Zona:' + zone + '; &#013; ' +
                    quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause +
                    ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] + '&#013; min/km: ' + rows[i][
                        'min_km'
                    ] + '&#013; x100: ' + rows[i]['min_100'] + '&#013; x400: ' + rows[i]['min_400'] +
                    '&#013; dist: ' + rows[i]['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] +
                    '"></div>');
            }
        } else {
            if (pause_type == 'min') {
                //alert(7);
                $('#' + sport).append('<div id="' + r_id + '" data-identifier="' + r_id + '" name="' +
                    r_id + '" data-series="' + series +
                    '" data-pauset="' +
                    pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                    '" data-block="' + block +
                    '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                    '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i]['ppm'] +
                    '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i]['min_400'] +
                    '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i]['FactorEjerccion'] +
                    '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' + rows[i]['min_km'] +
                    '" data-repeticiones="' + repeticiones + '" data-timerepeticiones="' +
                    minutosRepeticion + '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                    pause + '" onclick="console.log(' + pause +
                    ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                    '\');" class="bar" style="margin-bottom:' + pause +
                    'px;--bar-value:' +
                    Number(zone) * 10 + '%;--bar-thickness: ' +
                    quantity_large + 'px" data-name="' + quantity_large + ' ' +
                    string_type +
                    '" title="' + block.toUpperCase() + '&#013; Zona:' + zone + '; &#013; ' +
                    quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause +
                    ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] + '&#013; min/km: ' + rows[i][
                        'min_km'
                    ] + '&#013; x100: ' + rows[i]['min_100'] + '&#013; x400: ' + rows[i]['min_400'] +
                    '&#013; dist: ' + rows[i]['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] +
                    '"></div>');
            } else {
                //alert(sport);
                $('#' + sport).append('<div id="' + r_id + '" data-identifier="' + r_id + '" name="' +
                    r_id + '" data-series="' + series +
                    '" data-pauset="' +
                    pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                    '" data-block="' + block +
                    '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                    '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i]['ppm'] +
                    '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i]['min_400'] +
                    '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i]['FactorEjerccion'] +
                    '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' + rows[i]['min_km'] +
                    '" data-repeticiones="' + repeticiones + '" data-timerepeticiones="' +
                    minutosRepeticion + '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                    pause + '" onclick="console.log(' + pause +
                    ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                    '\');" class="bar" style="margin-bottom:' + pause +
                    'px;--bar-value:' +
                    Number(zone) * 10 + '%;--bar-thickness: ' +
                    quantity_large + 'px" data-name="' + quantity_large + ' ' +
                    string_type +
                    '" title="' + block.toUpperCase() + '&#013; Zona:' + zone + '; &#013; ' +
                    quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause +
                    ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] + '&#013; min/km: ' + rows[i][
                        'min_km'
                    ] + '&#013; x100: ' + rows[i]['min_100'] + '&#013; x400: ' + rows[i]['min_400'] +
                    '&#013; dist: ' + rows[i]['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] +
                    '"></div>');
            }
        }*/
        let tempEcos = parseFloat($("#spanEcosTotales").html());
        $("#spanEcosTotales").html(tempEcos + parseFloat(rows[i]['ECOsTotal']));
        $("#total_ecos").val(tempEcos + parseFloat(rows[i]['ECOsTotal']));
        ecosTotales += rows[i]['ECOsTotal'];

    }

    $('#exampleModal').modal('hide');
}

function make_bar_circuit(series, sport, block, times, quantity_large, string_type, zone, pause, pause_type,
    circuit_id, text) {
    //alert(series + '-' + sport + '-' + block + '-' + times + '-' + quantity_large + '-' + string_type + '-' + zone + '-' + pause + '-' + pause_type);
    let ecosTotales = 0;
    let i = 0;
    var rows;
    var temp;

    try {
		//alert(zone);
        var zona = zone;
        var iconoFE = "C";
        series = series;
        var repeticiones = times;
        var minutosRepeticion = quantity_large;
        var minutosPausa = pause;
        var minutosRecuperacion = 0;
        var kmPorHr = 16.4;
        var distancia = quantity_large;
        var opcionVelocidadRitmo = "CARRERA";
        var perfilID = $('#sessionsssession-profile_id').val();
        if (perfilID == "") perfilID = 0;

        var separar = sport.split("_");
        if (separar[0] == "natacion") {
            opcionVelocidadRitmo = "NATACION";
            iconoFE = "N";
            distancia = quantity_large;
        } else if (separar[0] == "ciclismo") {
            iconoFE = "B";
        }

        $.ajax({
            type: 'get',
            async: false,
            url: "/web/index.php?r=sessionsssession/getformulas",
            data: {
                "zona": zona,
                "iconoFE": iconoFE,
                "series": series,
                "repeticiones": repeticiones,
                "minutosRepeticion": minutosRepeticion,
                "minutosPausa": minutosPausa,
                "minutosRecuperacion": minutosRecuperacion,
                "kmPorHr": kmPorHr,
                "distancia": distancia,
                "opcionVelocidadRitmo": opcionVelocidadRitmo,
				"distTiempoMetrica": $('#select_type_large').val(),
				"ultimoBloqueAgregado": $('#hddUltimoBloqueAgregado').val(),
                "perfilID": perfilID
            },
            success: function(data) {
                //console.log(data);
                //alert(data);
                rows = JSON.parse(data);
                var cantTemp = 0;
                //alert(12);
                temp = rows[i]['ppm'] + '|' + rows[i]['min_km'] + '|' + rows[i]['min_100'] +
                    '|' + rows[i]['min_400'] + '|' + rows[i]['min_dist'] + '|' + rows[i][
                        'FactorEjerccion'
                    ];

            },
            error: function(data) {
                alert("error" + data);
            },

        });
    } catch (err) {
        alert(err.message);
    }
    //console.log('ESte es el resultado'+rows);
    //alert(times);
    for (let j = 0; j < times; j++) {
        //alert(zona+" -" + iconoFE+" -" + series+" -" + repeticiones+" -" + minutosRepeticion+" -" + 0 +" -" + kmPorHr+" -" + opcionVelocidadRitmo);

        let r_id = (Math.random() + 1).toString(36).substring(7);
        r_id = sport + '_' + block + '_' + r_id;
        if (string_type == 'min') {
            if (pause_type == 'min') {
                $('#' + sport).append('<div id="' + r_id + '" data-identifier="' + r_id + '" name="' +
                    r_id + '" data-circuit="' +
                    circuit_id + '" data-text="' +
                    text + '" data-series="' + series +
                    '" data-pauset="' +
                    pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                    '" data-block="' + block +
                    '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                    '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i]['ppm'] +
                    '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i]['min_400'] +
                    '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i]['FactorEjerccion'] +
                    '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' + rows[i]['min_km'] +
                    '" data-repeticiones="' + repeticiones + '" data-timerepeticiones="' +
                    minutosRepeticion + '"  data-minutos="' + minutosRecuperacion + '" data-pause="' +
                    pause + '" onclick="console.log(' + pause +
                    ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                    '\');" class="bar" style="margin-bottom:' + pause +
                    'px;--bar-value:' +
                    Number(zone) * 10 + '%;--bar-thickness: ' +
                    quantity_large + 'px" data-name="" title="' + block.toUpperCase() + '"></div>');
            } else {
                $('#' + sport).append('<div id="' + r_id + '" data-identifier="' + r_id + '" name="' +
                    r_id + '" data-circuit="' +
                    circuit_id + '" data-text="' +
                    text + '" data-series="' + series +
                    '" data-pauset="' +
                    pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                    '" data-block="' + block +
                    '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                    '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i]['ppm'] +
                    '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i]['min_400'] +
                    '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i]['FactorEjerccion'] +
                    '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' + rows[i]['min_km'] +
                    '" data-repeticiones="' + repeticiones + '" data-timerepeticiones="' +
                    minutosRepeticion + '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                    pause + '" onclick="console.log(' + pause +
                    ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                    '\');" class="bar" style="margin-bottom:' + pause +
                    'px;--bar-value:' +
                    Number(zone) * 10 + '%;--bar-thickness: ' +
                    quantity_large + 'px" data-name="" title="' + block.toUpperCase() + '"></div>');
            }
        } else {
            if (pause_type == 'min') {
                //alert(7);
                $('#' + sport).append('<div id="' + r_id + '" data-identifier="' + r_id + '" name="' +
                    r_id + '" data-circuit="' +
                    circuit_id + '" data-text="' +
                    text + '" data-series="' + series +
                    '" data-pauset="' +
                    pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                    '" data-block="' + block +
                    '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                    '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i]['ppm'] +
                    '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i]['min_400'] +
                    '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i]['FactorEjerccion'] +
                    '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' + rows[i]['min_km'] +
                    '" data-repeticiones="' + repeticiones + '" data-timerepeticiones="' +
                    minutosRepeticion + '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                    pause + '" onclick="console.log(' + pause +
                    ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                    '\');" class="bar" style="margin-bottom:' + pause +
                    'px;--bar-value:' +
                    Number(zone) * 10 + '%;--bar-thickness: ' +
                    quantity_large + 'px" data-name="" title="' + block.toUpperCase() + '"></div>');
            } else {
                //alert(sport);
                $('#' + sport).append('<div id="' + r_id + '" data-identifier="' + r_id + '" name="' +
                    r_id + '" data-circuit="' +
                    circuit_id + '" data-text="' +
                    text + '" data-series="' + series +
                    '" data-pauset="' +
                    pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                    '" data-block="' + block +
                    '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                    '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i]['ppm'] +
                    '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i]['min_400'] +
                    '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i]['FactorEjerccion'] +
                    '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' + rows[i]['min_km'] +
                    '" data-repeticiones="' + repeticiones + '" data-timerepeticiones="' +
                    minutosRepeticion + '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                    pause + '" onclick="console.log(' + pause +
                    ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                    '\');" class="bar" style="margin-bottom:' + pause +
                    'px;--bar-value:' +
                    Number(zone) * 10 + '%;--bar-thickness: ' +
                    quantity_large + 'px" data-name="" title="' + block.toUpperCase() + '"></div>');
            }
        }
        let tempEcos = parseFloat($("#spanEcosTotales").html());
        $("#spanEcosTotales").html(tempEcos + parseFloat(rows[i]['ECOsTotal']));
        $("#total_ecos").val(tempEcos + parseFloat(rows[i]['ECOsTotal']));
        ecosTotales += rows[i]['ECOsTotal'];

    }

    $('#exampleModal').modal('hide');
}

function make_bar_exercise(series, sport, block, times, quantity_large, string_type, zone, pause,
    pause_type, exercise_id) {
    //alert(series + '-' + sport + '-' + block + '-' + times + '-' + quantity_large + '-' + string_type + '-' + zone + '-' + pause + '-' + pause_type);
    let ecosTotales = 0;
    let i = 0;
    var rows;
    var temp;

    try {
        var zona = zone;
        var iconoFE = "C";
        series = series;
        var repeticiones = times;
        var minutosRepeticion = quantity_large;
        var minutosPausa = pause;
        var minutosRecuperacion = 0;
        var kmPorHr = 16.4;
        var distancia = quantity_large;
        var opcionVelocidadRitmo = "CARRERA";
        var perfilID = $('#sessionsssession-profile_id').val();
        if (perfilID == "") perfilID = 0;

        var separar = sport.split("_");
        if (separar[0] == "natacion") {
            opcionVelocidadRitmo = "NATACION";
            iconoFE = "N";
            distancia = quantity_large;
        } else if (separar[0] == "ciclismo") {
            iconoFE = "B";
        }

        $.ajax({
            type: 'get',
            async: false,
            url: "/web/index.php?r=sessionsssession/getformulas",
            data: {
                "zona": zona,
                "iconoFE": iconoFE,
                "series": series,
                "repeticiones": repeticiones,
                "minutosRepeticion": minutosRepeticion,
                "minutosPausa": minutosPausa,
                "minutosRecuperacion": minutosRecuperacion,
                "kmPorHr": kmPorHr,
                "distancia": distancia,
                "opcionVelocidadRitmo": opcionVelocidadRitmo,
				"distTiempoMetrica": $('#select_type_large').val(),
				"ultimoBloqueAgregado": $('#hddUltimoBloqueAgregado').val(),
                "perfilID": perfilID
            },
            success: function(data) {
                //console.log(data);
                //alert(data);
                rows = JSON.parse(data);
                var cantTemp = 0;
                //alert(12);
                temp = rows[i]['ppm'] + '|' + rows[i]['min_km'] + '|' + rows[i]['min_100'] +
                    '|' + rows[i]['min_400'] + '|' + rows[i]['min_dist'] + '|' + rows[i][
                        'FactorEjerccion'
                    ];

            },
            error: function(data) {
                alert("error" + data);
            },

        });
    } catch (err) {
        alert(err.message);
    }
    //console.log('ESte es el resultado'+rows);
    //alert(times);
    for (let j = 0; j < times; j++) {
        //alert(zona+" -" + iconoFE+" -" + series+" -" + repeticiones+" -" + minutosRepeticion+" -" + 0 +" -" + kmPorHr+" -" + opcionVelocidadRitmo);

        let r_id = (Math.random() + 1).toString(36).substring(7);
        r_id = sport + '_' + block + '_' + r_id;
        if (string_type == 'min') {
            if (pause_type == 'min') {
                $('#' + sport).append('<div id="' + r_id + '" data-identifier="' + r_id + '" name="' +
                    r_id + '" data-exercise="' +
                    exercise_id + '" data-series="' + series +
                    '" data-pauset="' +
                    pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                    '" data-block="' + block +
                    '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                    '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i]['ppm'] +
                    '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i]['min_400'] +
                    '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i]['FactorEjerccion'] +
                    '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' + rows[i]['min_km'] +
                    '" data-repeticiones="' + repeticiones + '" data-timerepeticiones="' +
                    minutosRepeticion + '"  data-minutos="' + minutosRecuperacion + '" data-pause="' +
                    pause + '" onclick="console.log(' + pause +
                    ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                    '\');" class="bar" style="margin-bottom:' + pause +
                    'px;--bar-value:' +
                    Number(zone) * 10 + '%;--bar-thickness: ' +
                    quantity_large + 'px" data-name="' + quantity_large + ' ' +
                    string_type +
                    '" title="' + block.toUpperCase() + '&#013; Zona:' + zone + '; &#013; ' +
                    quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause +
                    ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] + '&#013; min/km: ' + rows[i][
                        'min_km'
                    ] + '&#013; x100: ' + rows[i]['min_100'] + '&#013; x400: ' + rows[i]['min_400'] +
                    '&#013; dist: ' + rows[i]['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] +
                    '"></div>');
            } else {
                $('#' + sport).append('<div id="' + r_id + '" data-identifier="' + r_id + '" name="' +
                    r_id + '" data-exercise="' +
                    exercise_id + '" data-series="' + series +
                    '" data-pauset="' +
                    pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                    '" data-block="' + block +
                    '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                    '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i]['ppm'] +
                    '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i]['min_400'] +
                    '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i]['FactorEjerccion'] +
                    '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' + rows[i]['min_km'] +
                    '" data-repeticiones="' + repeticiones + '" data-timerepeticiones="' +
                    minutosRepeticion + '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                    pause + '" onclick="console.log(' + pause +
                    ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                    '\');" class="bar" style="margin-bottom:' + pause +
                    'px;--bar-value:' +
                    Number(zone) * 10 + '%;--bar-thickness: ' +
                    quantity_large + 'px" data-name="' + quantity_large + ' ' +
                    string_type +
                    '" title="' + block.toUpperCase() + '&#013; Zona:' + zone + '; &#013; ' +
                    quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause +
                    ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] + '&#013; min/km: ' + rows[i][
                        'min_km'
                    ] + '&#013; x100: ' + rows[i]['min_100'] + '&#013; x400: ' + rows[i]['min_400'] +
                    '&#013; dist: ' + rows[i]['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] +
                    '"></div>');
            }
        } else {
            if (pause_type == 'min') {
                //alert(7);
                $('#' + sport).append('<div id="' + r_id + '" data-identifier="' + r_id + '" name="' +
                    r_id + '" data-exercise="' +
                    exercise_id + '" data-series="' + series +
                    '" data-pauset="' +
                    pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                    '" data-block="' + block +
                    '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                    '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i]['ppm'] +
                    '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i]['min_400'] +
                    '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i]['FactorEjerccion'] +
                    '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' + rows[i]['min_km'] +
                    '" data-repeticiones="' + repeticiones + '" data-timerepeticiones="' +
                    minutosRepeticion + '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                    pause + '" onclick="console.log(' + pause +
                    ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                    '\');" class="bar" style="margin-bottom:' + pause +
                    'px;--bar-value:' +
                    Number(zone) * 10 + '%;--bar-thickness: ' +
                    quantity_large + 'px" data-name="' + quantity_large + ' ' +
                    string_type +
                    '" title="' + block.toUpperCase() + '&#013; Zona:' + zone + '; &#013; ' +
                    quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause +
                    ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] + '&#013; min/km: ' + rows[i][
                        'min_km'
                    ] + '&#013; x100: ' + rows[i]['min_100'] + '&#013; x400: ' + rows[i]['min_400'] +
                    '&#013; dist: ' + rows[i]['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] +
                    '"></div>');
            } else {
                //alert(sport);
                $('#' + sport).append('<div id="' + r_id + '" data-identifier="' + r_id + '" name="' +
                    r_id + '" data-exercise="' +
                    exercise_id + '" data-series="' + series +
                    '" data-pauset="' +
                    pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                    '" data-block="' + block +
                    '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                    '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i]['ppm'] +
                    '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i]['min_400'] +
                    '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i]['FactorEjerccion'] +
                    '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' + rows[i]['min_km'] +
                    '" data-repeticiones="' + repeticiones + '" data-timerepeticiones="' +
                    minutosRepeticion + '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                    pause + '" onclick="console.log(' + pause +
                    ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                    '\');" class="bar" style="margin-bottom:' + pause +
                    'px;--bar-value:' +
                    Number(zone) * 10 + '%;--bar-thickness: ' +
                    quantity_large + 'px" data-name="' + quantity_large + ' ' +
                    string_type +
                    '" title="' + block.toUpperCase() + '&#013; Zona:' + zone + '; &#013; ' +
                    quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause +
                    ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] + '&#013; min/km: ' + rows[i][
                        'min_km'
                    ] + '&#013; x100: ' + rows[i]['min_100'] + '&#013; x400: ' + rows[i]['min_400'] +
                    '&#013; dist: ' + rows[i]['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] +
                    '"></div>');
            }
        }
        let tempEcos = parseFloat($("#spanEcosTotales").html());
        $("#spanEcosTotales").html(tempEcos + parseFloat(rows[i]['ECOsTotal']));
        $("#total_ecos").val(tempEcos + parseFloat(rows[i]['ECOsTotal']));
        ecosTotales += rows[i]['ECOsTotal'];
    }

    $('#exampleModal').modal('hide');
}

function edit_bar(series, id, sport, block, times, quantity_large, string_type, zone, pause, pause_type) {
    console.log('edit')

    let r_id = id;
    let string_to_put = '';
    let ecosTotales = 0;
    for (let i = 0; i < times; i++) {
        var zona = zone;
        var iconoFE = "C";
        series = series;
        var repeticiones = times;
        var minutosRepeticion = quantity_large;
        var minutosPausa = pause;
        var minutosRecuperacion = 0;
        var kmPorHr = 16.4;
        var distancia = quantity_large;
        var opcionVelocidadRitmo = "CARRERA";
        var perfilID = $('#sessionsssession-profile_id').val();
        if (perfilID == "") perfilID = 0;

        var separar = sport.split("_");
        if (separar[0] == "natacion") {
            opcionVelocidadRitmo = "NATACION";
            iconoFE = "N";
            distancia = quantity_large;
        } else if (separar[0] == "ciclismo") {
            iconoFE = "B";
        }
        /*var zona = zone;
        var iconoFE = "C";
        series = series;
        var repeticiones = times;
        var minutosRepeticion = quantity_large;
        var minutosPausa = pause;
        var minutosRecuperacion = 0;
        var kmPorHr = 16.4;
        var distancia = 2000;
        var opcionVelocidadRitmo = "CARRERA";
        var perfilID = $('#sessionsssession-profile_id').val();


        var separar = sport.split("_");
        if (separar[0] == "natacion") {
            opcionVelocidadRitmo = "NATACION";
            iconoFE = "N";
        } else if (separar[0] == "ciclismo") {
            iconoFE = "B";
        }*/

        //obtenemos el cálculos de los ECOS Totales
        //alert(minutosRepeticion);
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=sessionsssession/getformulas",
            data: {
                "zona": zona,
                "iconoFE": iconoFE,
                "series": series,
                "repeticiones": repeticiones,
                "minutosRepeticion": minutosRepeticion,
                "minutosPausa": minutosPausa,
                "minutosRecuperacion": minutosRecuperacion,
                "kmPorHr": kmPorHr,
                "distancia": distancia,
                "opcionVelocidadRitmo": opcionVelocidadRitmo,
				"distTiempoMetrica": $('#select_type_large').val(),
				"ultimoBloqueAgregado": $('#hddUltimoBloqueAgregado').val(),
                "perfilID": perfilID

            },
            success: function(data) {

                var rows = JSON.parse(data);
                var cantTemp = 0;

                let r_id = (Math.random() + 1).toString(36).substring(7);
                r_id = sport + '_' + block + '_' + r_id;

                var temp = rows[i]['ppm'] + '|' + rows[i]['min_km'] + '|' + rows[i]['min_100'] +
                    '|' + rows[i]['min_400'] + '|' + rows[i]['min_dist'] + '|' + rows[i][
                        'FactorEjerccion'
                    ];
                switch (block) {
                    case 'pausa':
                        string_to_put += '<div id="' + r_id + '" data-identifier="' +
                            r_id + '" name="' +
                            r_id + '" data-series="' + series +
                            '" data-pauset="' +
                            pause_type + '" data-string="' + string_type +
                            '" data-sport="' + sport +
                            '" data-block="' + block +
                            '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                            '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[
                                i]['ppm'] +
                            '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i]
                            ['min_400'] +
                            '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i][
                                'FactorEjerccion'
                            ] +
                            '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' +
                            rows[i]['min_km'] +
                            '" data-repeticiones="' + repeticiones +
                            '" data-timerepeticiones="' +
                            minutosRepeticion + '"  data-minutos="' + minutosRecuperacion +
                            '" data-pause="' +
                            pause + '" onclick="console.log(' + pause +
                            ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                            '\');" class="bar" style="margin-bottom:0px;--bar-value:100%;--bar-thickness: ' +
                            pause + 'px" data-name="' + pause + ' ' +
                            pause_type +
                            '" title="' + block.toUpperCase() + '; &#013; Pausa: ' + pause +
                            ' ' + pause_type +
                            '"></div>';
                        break;

                    default:
                        string_to_put += '<div id="' + r_id + '" data-identifier="' + r_id +
                            '" name="' + r_id +
                            '" data-series="' + series +
                            '" data-pauset="' +
                            pause_type + '" data-string="' + string_type + '" data-sport="' +
                            sport +
                            '" data-block="' + block +
                            '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                            '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i][
                                'ppm'
                            ] +
                            '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i][
                                'min_400'
                            ] +
                            '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i][
                                'FactorEjerccion'
                            ] +
                            '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' +
                            rows[i]['min_km'] + '" data-repeticiones="' + repeticiones +
                            '" data-timerepeticiones="' + minutosRepeticion +
                            '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                            pause + '" onclick="console.log(' + pause +
                            ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                            '\');" class="bar" style="margin-bottom:' + pause +
                            'px;--bar-value:' +
                            Number(zone) * 10 + '%;--bar-thickness: ' +
                            quantity_large + 'px" data-name="' + quantity_large + ' ' +
                            string_type +
                            '" title="' + block.toUpperCase() + '&#013; Zona:' + zone +
                            '; &#013; ' +
                            quantity_large + ' ' + string_type + '; &#013; Pausa: ' +
                            pause +
                            ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] +
                            '&#013; min/km: ' + rows[i]['min_km'] + '&#013; x100: ' + rows[i][
                                'min_100'
                            ] + '&#013; x400: ' + rows[i]['min_400'] + '&#013; dist: ' + rows[i]
                            ['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] + '"></div>';
                        break;
                }

                /*if (string_type == 'min') {
                    if (pause_type == 'min') {

                        string_to_put += '<div id="' + r_id + '" data-identifier="' + r_id +
                            '" name="' + r_id +
                            '" data-series="' + series +
                            '" data-pauset="' +
                            pause_type + '" data-string="' + string_type + '" data-sport="' +
                            sport +
                            '" data-block="' + block +
                            '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                            '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i][
                                'ppm'
                            ] +
                            '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i][
                                'min_400'
                            ] +
                            '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i][
                                'FactorEjerccion'
                            ] +
                            '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' +
                            rows[i]['min_km'] + '" data-repeticiones="' + repeticiones +
                            '" data-timerepeticiones="' + minutosRepeticion +
                            '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                            pause + '" onclick="console.log(' + pause +
                            ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                            '\');" class="bar" style="margin-bottom:' + pause +
                            'px;--bar-value:' +
                            Number(zone) * 10 + '%;--bar-thickness: ' +
                            quantity_large + 'px" data-name="' + quantity_large + ' ' +
                            string_type +
                            '" title="' + block.toUpperCase() + '&#013; Zona:' + zone +
                            '; &#013; ' +
                            quantity_large + ' ' + string_type + '; &#013; Pausa: ' +
                            pause +
                            ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] +
                            '&#013; min/km: ' + rows[i]['min_km'] + '&#013; x100: ' + rows[i][
                                'min_100'
                            ] + '&#013; x400: ' + rows[i]['min_400'] + '&#013; dist: ' + rows[i]
                            ['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] + '"></div>';
                    } else {
                        string_to_put += '<div id="' + r_id + '" data-identifier="' + r_id +
                            '" name="' + r_id +
                            '" data-series="' + series +
                            '" data-pauset="' +
                            pause_type + '" data-string="' + string_type + '" data-sport="' +
                            sport +
                            '" data-block="' + block +
                            '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                            '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i][
                                'ppm'
                            ] +
                            '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i][
                                'min_400'
                            ] +
                            '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i][
                                'FactorEjerccion'
                            ] +
                            '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' +
                            rows[i]['min_km'] + '" data-repeticiones="' + repeticiones +
                            '" data-timerepeticiones="' + minutosRepeticion +
                            '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                            pause + '" onclick="console.log(' + pause +
                            ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                            '\');" class="bar" style="margin-bottom:' + pause +
                            'px;--bar-value:' +
                            Number(zone) * 10 + '%;--bar-thickness: ' +
                            quantity_large + 'px" data-name="' + quantity_large + ' ' +
                            string_type +
                            '" title="' + block.toUpperCase() + '&#013; Zona:' + zone +
                            '; &#013; ' +
                            quantity_large + ' ' + string_type + '; &#013; Pausa: ' +
                            pause +
                            ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] +
                            '&#013; min/km: ' + rows[i]['min_km'] + '&#013; x100: ' + rows[i][
                                'min_100'
                            ] + '&#013; x400: ' + rows[i]['min_400'] + '&#013; dist: ' + rows[i]
                            ['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] + '"></div>';
                    }
                } else {
                    if (pause_type == 'min') {
                        string_to_put += '<div id="' + r_id + '" data-identifier="' + r_id +
                            '" name="' + r_id +
                            '" data-series="' + series +
                            '" data-pauset="' +
                            pause_type + '" data-string="' + string_type + '" data-sport="' +
                            sport +
                            '" data-block="' + block +
                            '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                            '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i][
                                'ppm'
                            ] +
                            '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i][
                                'min_400'
                            ] +
                            '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i][
                                'FactorEjerccion'
                            ] +
                            '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' +
                            rows[i]['min_km'] + '" data-repeticiones="' + repeticiones +
                            '" data-timerepeticiones="' + minutosRepeticion +
                            '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                            pause + '" onclick="console.log(' + pause +
                            ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                            '\');" class="bar" style="margin-bottom:' + pause +
                            'px;--bar-value:' +
                            Number(zone) * 10 + '%;--bar-thickness: ' +
                            quantity_large + 'px" data-name="' + quantity_large + ' ' +
                            string_type +
                            '" title="' + block.toUpperCase() + '&#013; Zona:' + zone +
                            '; &#013; ' +
                            quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause /
                            6 +
                            ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] +
                            '&#013; min/km: ' + rows[i]['min_km'] + '&#013; x100: ' + rows[i][
                                'min_100'
                            ] + '&#013; x400: ' + rows[i]['min_400'] + '&#013; dist: ' + rows[i]
                            ['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] + '"></div>';
                    } else {
                        string_to_put += '<div id="' + r_id + '" data-identifier="' + r_id +
                            '" name="' + r_id +
                            '" data-series="' + series +
                            '" data-pauset="' +
                            pause_type + '" data-string="' + string_type + '" data-sport="' +
                            sport +
                            '" data-block="' + block +
                            '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                            '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i][
                                'ppm'
                            ] +
                            '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i][
                                'min_400'
                            ] +
                            '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i][
                                'FactorEjerccion'
                            ] +
                            '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' +
                            rows[i]['min_km'] + '" data-repeticiones="' + repeticiones +
                            '" data-timerepeticiones="' + minutosRepeticion +
                            '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                            pause + '" onclick="console.log(' + pause +
                            ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                            '\');" class="bar" style="margin-bottom:' + pause +
                            'px;--bar-value:' +
                            Number(zone) * 10 + '%;--bar-thickness: ' +
                            quantity_large + 'px" data-name="' + quantity_large + ' ' +
                            string_type +
                            '" title="' + block.toUpperCase() + '&#013; Zona:' + zone +
                            '; &#013; ' +
                            quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause +
                            ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] +
                            '&#013; min/km: ' + rows[i]['min_km'] + '&#013; x100: ' + rows[i][
                                'min_100'
                            ] + '&#013; x400: ' + rows[i]['min_400'] + '&#013; dist: ' + rows[i]
                            ['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] + '"></div>';
                    }
                }*/

                let tempEcos = parseFloat($("#spanEcosTotales").html());
                $("#spanEcosTotales").html(tempEcos + parseFloat(rows[i]['ECOsTotal']));
                $("#total_ecos").val(tempEcos + parseFloat(rows[i]['ECOsTotal']));
                ecosTotales += rows[i]['ECOsTotal'];
                //alert(string_to_put);
                $('#' + id).replaceWith(string_to_put);
            },
            error: function(data) {

            },
        });

    }

    $('#exampleModal2').modal('hide');
}

function edit_bar_circuit(series, id, sport, block, times, quantity_large, string_type, zone, pause,
    pause_type, circuit_id, text) {
    console.log('edit');
    console.log(circuit_id);

    let r_id = id;
    let string_to_put = '';
    let ecosTotales = 0;
    for (let i = 0; i < times; i++) {
        var zona = zone;
        var iconoFE = "C";
        series = series;
        var repeticiones = times;
        var minutosRepeticion = quantity_large;
        var minutosPausa = pause;
        var minutosRecuperacion = 0;
        var kmPorHr = 16.4;
        var distancia = quantity_large;
        var opcionVelocidadRitmo = "CARRERA";
        var perfilID = $('#sessionsssession-profile_id').val();
        if (perfilID == "") perfilID = 0;

        var separar = sport.split("_");
        if (separar[0] == "natacion") {
            opcionVelocidadRitmo = "NATACION";
            iconoFE = "N";
            distancia = quantity_large;
        } else if (separar[0] == "ciclismo") {
            iconoFE = "B";
        }
        /*var zona = zone;
        var iconoFE = "C";
        series = series;
        var repeticiones = times;
        var minutosRepeticion = quantity_large;
        var minutosPausa = pause;
        var minutosRecuperacion = 0;
        var kmPorHr = 16.4;
        var distancia = 2000;
        var opcionVelocidadRitmo = "CARRERA";
        var perfilID = $('#sessionsssession-profile_id').val();


        var separar = sport.split("_");
        if (separar[0] == "natacion") {
            opcionVelocidadRitmo = "NATACION";
            iconoFE = "N";
        } else if (separar[0] == "ciclismo") {
            iconoFE = "B";
        }*/

        //obtenemos el cálculos de los ECOS Totales
        //alert(minutosRepeticion);
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=sessionsssession/getformulas",
            data: {
                "zona": zona,
                "iconoFE": iconoFE,
                "series": series,
                "repeticiones": repeticiones,
                "minutosRepeticion": minutosRepeticion,
                "minutosPausa": minutosPausa,
                "minutosRecuperacion": minutosRecuperacion,
                "kmPorHr": kmPorHr,
                "distancia": distancia,
                "opcionVelocidadRitmo": opcionVelocidadRitmo,
				"distTiempoMetrica": $('#select_type_large').val(),
				"ultimoBloqueAgregado": $('#hddUltimoBloqueAgregado').val(),
                "perfilID": perfilID

            },
            success: function(data) {

                var rows = JSON.parse(data);
                var cantTemp = 0;

                let r_id = (Math.random() + 1).toString(36).substring(7);
                r_id = sport + '_' + block + '_' + r_id;

                var temp = rows[i]['ppm'] + '|' + rows[i]['min_km'] + '|' + rows[i]['min_100'] +
                    '|' + rows[i]['min_400'] + '|' + rows[i]['min_dist'] + '|' + rows[i][
                        'FactorEjerccion'
                    ];
                if (string_type == 'min') {
                    if (pause_type == 'min') {

                        /*alert("series:" + series +
                            '" data-pauset="' +
                            pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                            '" data-block="' + block + '" data-zone="' + zone + '" data-quantity="' + quantity_large + '" data-pause="'+pause);*/

                        string_to_put += '<div id="' + r_id + '" data-identifier="' + r_id +
                            '" data-circuit="' +
                            circuit_id + '" data-text="' +
                            text + '" name="' + r_id +
                            '" data-series="' + series +
                            '" data-pauset="' +
                            pause_type + '" data-string="' + string_type + '" data-sport="' +
                            sport +
                            '" data-block="' + block +
                            '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                            '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i][
                                'ppm'
                            ] +
                            '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i][
                                'min_400'
                            ] +
                            '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i][
                                'FactorEjerccion'
                            ] +
                            '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' +
                            rows[i]['min_km'] + '" data-repeticiones="' + repeticiones +
                            '" data-timerepeticiones="' + minutosRepeticion +
                            '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                            pause + '" onclick="console.log(' + pause +
                            ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                            '\');" class="bar" style="margin-bottom:' + pause +
                            'px;--bar-value:' +
                            Number(zone) * 10 + '%;--bar-thickness: ' +
                            quantity_large + 'px" data-name="" title="' + block.toUpperCase() +
                            '"></div>';
                    } else {
                        string_to_put += '<div id="' + r_id + '" data-identifier="' + r_id +
                            '" data-circuit="' +
                            circuit_id + '" data-text="' +
                            text + '" name="' + r_id +
                            '" data-series="' + series +
                            '" data-pauset="' +
                            pause_type + '" data-string="' + string_type + '" data-sport="' +
                            sport +
                            '" data-block="' + block +
                            '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                            '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i][
                                'ppm'
                            ] +
                            '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i][
                                'min_400'
                            ] +
                            '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i][
                                'FactorEjerccion'
                            ] +
                            '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' +
                            rows[i]['min_km'] + '" data-repeticiones="' + repeticiones +
                            '" data-timerepeticiones="' + minutosRepeticion +
                            '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                            pause + '" onclick="console.log(' + pause +
                            ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                            '\');" class="bar" style="margin-bottom:' + pause +
                            'px;--bar-value:' +
                            Number(zone) * 10 + '%;--bar-thickness: ' +
                            quantity_large + 'px" data-name="" title="' + block.toUpperCase() +
                            '"></div>';
                    }
                } else {
                    if (pause_type == 'min') {
                        string_to_put += '<div id="' + r_id + '" data-identifier="' + r_id +
                            '" data-circuit="' +
                            circuit_id + '" data-text="' +
                            text + '" name="' + r_id +
                            '" data-series="' + series +
                            '" data-pauset="' +
                            pause_type + '" data-string="' + string_type + '" data-sport="' +
                            sport +
                            '" data-block="' + block +
                            '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                            '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i][
                                'ppm'
                            ] +
                            '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i][
                                'min_400'
                            ] +
                            '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i][
                                'FactorEjerccion'
                            ] +
                            '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' +
                            rows[i]['min_km'] + '" data-repeticiones="' + repeticiones +
                            '" data-timerepeticiones="' + minutosRepeticion +
                            '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                            pause + '" onclick="console.log(' + pause +
                            ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                            '\');" class="bar" style="margin-bottom:' + pause +
                            'px;--bar-value:' +
                            Number(zone) * 10 + '%;--bar-thickness: ' +
                            quantity_large + 'px" data-name="" title="' + block.toUpperCase() +
                            '"></div>';
                    } else {
                        string_to_put += '<div id="' + r_id + '" data-identifier="' + r_id +
                            '" data-circuit="' +
                            circuit_id + '" data-text="' +
                            text + '" name="' + r_id +
                            '" data-series="' + series +
                            '" data-pauset="' +
                            pause_type + '" data-string="' + string_type + '" data-sport="' +
                            sport +
                            '" data-block="' + block +
                            '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                            '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i][
                                'ppm'
                            ] +
                            '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i][
                                'min_400'
                            ] +
                            '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i][
                                'FactorEjerccion'
                            ] +
                            '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' +
                            rows[i]['min_km'] + '" data-repeticiones="' + repeticiones +
                            '" data-timerepeticiones="' + minutosRepeticion +
                            '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                            pause + '" onclick="console.log(' + pause +
                            ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                            '\');" class="bar" style="margin-bottom:' + pause +
                            'px;--bar-value:' +
                            Number(zone) * 10 + '%;--bar-thickness: ' +
                            quantity_large + 'px" data-name="" title="' + block.toUpperCase() +
                            '"></div>';
                    }
                }

                let tempEcos = parseFloat($("#spanEcosTotales").html());
                $("#spanEcosTotales").html(tempEcos + parseFloat(rows[i]['ECOsTotal']));
                $("#total_ecos").val(tempEcos + parseFloat(rows[i]['ECOsTotal']));
                ecosTotales += rows[i]['ECOsTotal'];
                //alert(string_to_put);
                $('#' + id).replaceWith(string_to_put);
            },
            error: function(data) {

            },
        });

    }

    $('#exampleModal2').modal('hide');
}

function edit_bar_exercise(series, id, sport, block, times, quantity_large, string_type, zone, pause,
    pause_type, exercise_id) {
    console.log('edit')

    let r_id = id;
    let string_to_put = '';
    let ecosTotales = 0;
    for (let i = 0; i < times; i++) {
        var zona = zone;
        var iconoFE = "C";
        series = series;
        var repeticiones = times;
        var minutosRepeticion = quantity_large;
        var minutosPausa = pause;
        var minutosRecuperacion = 0;
        var kmPorHr = 16.4;
        var distancia = quantity_large;
        var opcionVelocidadRitmo = "CARRERA";
        var perfilID = $('#sessionsssession-profile_id').val();
        if (perfilID == "") perfilID = 0;

        var separar = sport.split("_");
        if (separar[0] == "natacion") {
            opcionVelocidadRitmo = "NATACION";
            iconoFE = "N";
            distancia = quantity_large;
        } else if (separar[0] == "ciclismo") {
            iconoFE = "B";
        }
        /*var zona = zone;
        var iconoFE = "C";
        series = series;
        var repeticiones = times;
        var minutosRepeticion = quantity_large;
        var minutosPausa = pause;
        var minutosRecuperacion = 0;
        var kmPorHr = 16.4;
        var distancia = 2000;
        var opcionVelocidadRitmo = "CARRERA";
        var perfilID = $('#sessionsssession-profile_id').val();


        var separar = sport.split("_");
        if (separar[0] == "natacion") {
            opcionVelocidadRitmo = "NATACION";
            iconoFE = "N";
        } else if (separar[0] == "ciclismo") {
            iconoFE = "B";
        }*/

        //obtenemos el cálculos de los ECOS Totales
        //alert(minutosRepeticion);
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=sessionsssession/getformulas",
            data: {
                "zona": zona,
                "iconoFE": iconoFE,
                "series": series,
                "repeticiones": repeticiones,
                "minutosRepeticion": minutosRepeticion,
                "minutosPausa": minutosPausa,
                "minutosRecuperacion": minutosRecuperacion,
                "kmPorHr": kmPorHr,
                "distancia": distancia,
                "opcionVelocidadRitmo": opcionVelocidadRitmo,
				"distTiempoMetrica": $('#select_type_large').val(),
				"ultimoBloqueAgregado": $('#hddUltimoBloqueAgregado').val(),
                "perfilID": perfilID

            },
            success: function(data) {

                var rows = JSON.parse(data);
                var cantTemp = 0;

                let r_id = (Math.random() + 1).toString(36).substring(7);
                r_id = sport + '_' + block + '_' + r_id;

                var temp = rows[i]['ppm'] + '|' + rows[i]['min_km'] + '|' + rows[i]['min_100'] +
                    '|' + rows[i]['min_400'] + '|' + rows[i]['min_dist'] + '|' + rows[i][
                        'FactorEjerccion'
                    ];
                if (string_type == 'min') {
                    if (pause_type == 'min') {

                        /*alert("series:" + series +
                            '" data-pauset="' +
                            pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                            '" data-block="' + block + '" data-zone="' + zone + '" data-quantity="' + quantity_large + '" data-pause="'+pause);*/

                        string_to_put += '<div id="' + r_id + '" data-identifier="' + r_id +
                            '" data-exercise="' +
                            exercise_id + '" name="' + r_id +
                            '" data-series="' + series +
                            '" data-pauset="' +
                            pause_type + '" data-string="' + string_type + '" data-sport="' +
                            sport +
                            '" data-block="' + block +
                            '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                            '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i][
                                'ppm'
                            ] +
                            '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i][
                                'min_400'
                            ] +
                            '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i][
                                'FactorEjerccion'
                            ] +
                            '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' +
                            rows[i]['min_km'] + '" data-repeticiones="' + repeticiones +
                            '" data-timerepeticiones="' + minutosRepeticion +
                            '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                            pause + '" onclick="console.log(' + pause +
                            ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                            '\');" class="bar" style="margin-bottom:' + pause +
                            'px;--bar-value:' +
                            Number(zone) * 10 + '%;--bar-thickness: ' +
                            quantity_large + 'px" data-name="' + quantity_large + ' ' +
                            string_type +
                            '" title="' + block.toUpperCase() + '&#013; Zona:' + zone +
                            '; &#013; ' +
                            quantity_large + ' ' + string_type + '; &#013; Pausa: ' +
                            pause +
                            ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] +
                            '&#013; min/km: ' + rows[i]['min_km'] + '&#013; x100: ' + rows[i][
                                'min_100'
                            ] + '&#013; x400: ' + rows[i]['min_400'] + '&#013; dist: ' + rows[i]
                            ['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] + '"></div>';
                    } else {
                        string_to_put += '<div id="' + r_id + '" data-identifier="' + r_id +
                            '" data-exercise="' +
                            exercise_id + '" name="' + r_id +
                            '" data-series="' + series +
                            '" data-pauset="' +
                            pause_type + '" data-string="' + string_type + '" data-sport="' +
                            sport +
                            '" data-block="' + block +
                            '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                            '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i][
                                'ppm'
                            ] +
                            '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i][
                                'min_400'
                            ] +
                            '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i][
                                'FactorEjerccion'
                            ] +
                            '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' +
                            rows[i]['min_km'] + '" data-repeticiones="' + repeticiones +
                            '" data-timerepeticiones="' + minutosRepeticion +
                            '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                            pause + '" onclick="console.log(' + pause +
                            ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                            '\');" class="bar" style="margin-bottom:' + pause +
                            'px;--bar-value:' +
                            Number(zone) * 10 + '%;--bar-thickness: ' +
                            quantity_large + 'px" data-name="' + quantity_large + ' ' +
                            string_type +
                            '" title="' + block.toUpperCase() + '&#013; Zona:' + zone +
                            '; &#013; ' +
                            quantity_large + ' ' + string_type + '; &#013; Pausa: ' +
                            pause +
                            ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] +
                            '&#013; min/km: ' + rows[i]['min_km'] + '&#013; x100: ' + rows[i][
                                'min_100'
                            ] + '&#013; x400: ' + rows[i]['min_400'] + '&#013; dist: ' + rows[i]
                            ['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] + '"></div>';
                    }
                } else {
                    if (pause_type == 'min') {
                        string_to_put += '<div id="' + r_id + '" data-identifier="' + r_id +
                            '" data-exercise="' +
                            exercise_id + '" name="' + r_id +
                            '" data-series="' + series +
                            '" data-pauset="' +
                            pause_type + '" data-string="' + string_type + '" data-sport="' +
                            sport +
                            '" data-block="' + block +
                            '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                            '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i][
                                'ppm'
                            ] +
                            '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i][
                                'min_400'
                            ] +
                            '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i][
                                'FactorEjerccion'
                            ] +
                            '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' +
                            rows[i]['min_km'] + '" data-repeticiones="' + repeticiones +
                            '" data-timerepeticiones="' + minutosRepeticion +
                            '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                            pause + '" onclick="console.log(' + pause +
                            ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                            '\');" class="bar" style="margin-bottom:' + pause +
                            'px;--bar-value:' +
                            Number(zone) * 10 + '%;--bar-thickness: ' +
                            quantity_large + 'px" data-name="' + quantity_large + ' ' +
                            string_type +
                            '" title="' + block.toUpperCase() + '&#013; Zona:' + zone +
                            '; &#013; ' +
                            quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause /
                            6 +
                            ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] +
                            '&#013; min/km: ' + rows[i]['min_km'] + '&#013; x100: ' + rows[i][
                                'min_100'
                            ] + '&#013; x400: ' + rows[i]['min_400'] + '&#013; dist: ' + rows[i]
                            ['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] + '"></div>';
                    } else {
                        string_to_put += '<div id="' + r_id + '" data-identifier="' + r_id +
                            '" data-exercise="' +
                            exercise_id + '" name="' + r_id +
                            '" data-series="' + series +
                            '" data-pauset="' +
                            pause_type + '" data-string="' + string_type + '" data-sport="' +
                            sport +
                            '" data-block="' + block +
                            '" data-zone="' + zone + '" data-quantity="' + quantity_large +
                            '" data-ecos="' + rows[i]['ECOsTotal'] + '" data-ppm="' + rows[i][
                                'ppm'
                            ] +
                            '" data-x100="' + rows[i]['min_100'] + '" data-x400="' + rows[i][
                                'min_400'
                            ] +
                            '" data-dist="' + rows[i]['min_dist'] + '" data-fe="' + rows[i][
                                'FactorEjerccion'
                            ] +
                            '" data-fi="' + rows[i]['FactorIntensidad'] + '" data-minkm="' +
                            rows[i]['min_km'] + '" data-repeticiones="' + repeticiones +
                            '" data-timerepeticiones="' + minutosRepeticion +
                            '" data-minutos="' + minutosRecuperacion + '" data-pause="' +
                            pause + '" onclick="console.log(' + pause +
                            ');call(' + r_id + ', \'' + sport + '\', \'' + temp +
                            '\');" class="bar" style="margin-bottom:' + pause +
                            'px;--bar-value:' +
                            Number(zone) * 10 + '%;--bar-thickness: ' +
                            quantity_large + 'px" data-name="' + quantity_large + ' ' +
                            string_type +
                            '" title="' + block.toUpperCase() + '&#013; Zona:' + zone +
                            '; &#013; ' +
                            quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause +
                            ' ' + pause_type + '&#013; ppm: ' + rows[i]['ppm'] +
                            '&#013; min/km: ' + rows[i]['min_km'] + '&#013; x100: ' + rows[i][
                                'min_100'
                            ] + '&#013; x400: ' + rows[i]['min_400'] + '&#013; dist: ' + rows[i]
                            ['min_dist'] + '&#013; Ecos: ' + rows[i]['ECOsTotal'] + '"></div>';
                    }
                }

                let tempEcos = parseFloat($("#spanEcosTotales").html());
                $("#spanEcosTotales").html(tempEcos + parseFloat(rows[i]['ECOsTotal']));
                $("#total_ecos").val(tempEcos + parseFloat(rows[i]['ECOsTotal']));
                ecosTotales += rows[i]['ECOsTotal'];
                //alert(string_to_put);
                $('#' + id).replaceWith(string_to_put);
            },
            error: function(data) {

            },
        });

    }

    $('#exampleModal2').modal('hide');
}

function edit_trans(id, pause, pause_type) {
    console.log('edit')
    let r_id = id;
    let string_to_put = '';
    string_to_put = '<div onclick="call_trans(trans_' + r_id +
        ');" class="transicion bg-info col-md-12" style="opacity:60%;color:white;" align="center" data-rec="' +
        pause + '" data-typerec="' + pause_type + '" title="Recuperación: ' + pause + ' ' + pause_type +
        ' " name="trans_' + r_id + '" id="trans_' + r_id + '">TRANSICION</div>';
    $('#' + id).replaceWith(string_to_put);
    $('#exampleModal3').modal('hide');
}
$('#button_delete_div').click(function() {
    $('#' + $(this).val()).remove();
    $('#exampleModal2').modal('hide');
});
$('#button_edit_div').click(function() {
    //$('#'+$(this).val()).remove();
    let case_type = $('#select_type_large_edit').val();
    let string_type = 'default';
    switch (case_type) {
        case '2':
            string_type = 'min';
            break;
        case '1':
            string_type = 'seg';
            break;
        case '3':
            string_type = 'hrs';
            break;
        case '4':
            string_type = 'mts';
            break;
        case '5':
            string_type = 'kms';
            break;
    }
    let pause_type = $('#select_type_pause_edit').val();
    let string_type_pause = 'default';
    switch (pause_type) {
        case '1':
            string_type_pause = 'min';
            pause = Number($('#pause_edit').val());
            break;
        case '2':
            string_type_pause = 'seg';
            pause = Number($('#pause_edit').val());
            break;
    }
    let times = $('#times_edit').val();
    if (times == '') {
        times = 1;
    }
    //block = $(this).val();
    times = Number(times);
    quantity_large = Number($('#select_quantity_large_edit').val());
    if (string_type == 'min') {
        quantity_large = quantity_large;
    }
    zone = $('#select_zone_edit').val();
    //pause = Number($('#pause_edit').val());
    series = $('#series_edit').val();

    block = $('#' + $(this).val()).data('block');
    console.log('circuito');
    console.log(block);
    switch (block) {
        case 'circuito':
            circuit_id = $('#select_circuit_edit').val();

            console.log(circuit_id);
            text = $('#text_circuit_edit').val();
            edit_bar_circuit(1, $(this).val(), $('#' + $(this).val()).data('sport'), $('#' + $(this)
                    .val()).data('block'), 1, 12,
                'min',
                zone, 0, 'min', circuit_id, text);
            break;
        case 'drills':
            exercise_id = $('#select_exercise_edit').val();
            edit_bar_exercise(1, $(this).val(), $('#' + $(this).val()).data('sport'), $('#' + $(
                        this)
                    .val()).data('block'), 1, quantity_large,
                string_type,
                zone, 0, 'min', exercise_id);
            break;
        default:
            edit_bar(series, $(this).val(), $('#' + $(this).val()).data('sport'), $('#' + $(this)
                    .val()).data('block'), times, quantity_large,
                string_type,
                zone, pause, string_type_pause);
            break;
    }
    $('#exampleModal2').modal('hide');
});
$('#button_edit_trans').click(function() {
    let pause_type = $('#select_type_pause_edit_trans').val();
    let string_type_pause = 'default';
    switch (pause_type) {
        case '1':
            string_type_pause = 'min';
            pause = Number($('#pause_edit_trans').val());
            break;
        case '2':
            string_type_pause = 'seg';
            pause = Number($('#pause_edit_trans').val());
            break;
    }
    edit_trans($(this).val(), pause, string_type_pause);
    $('#exampleModal3').modal('hide');
});
$('#sport_select').change(function() {
    //console.log('select')
    let sel = $(this).val();
    getDistancia(sel);
});
});

function getEditar(_deporte, _bloque, _posicion, _elemtPorBloque){
	$("#select_blocks").val(_deporte);
	$("#btnTemporalBlock").val(_bloque);
	//alert(_bloque);
	$("#btnTemporalBlock").click();
	$("#button_make_div").hide();
	$("#button_actualizar").show();
	$("#hddPosicionSelected").val(_posicion);
	try{
		//alert(_bloque);
		//alert($('#hddDist'+_posicion).val());
		$('#series').val($('#hddSerie'+_posicion).val());
		$('#times').val($('#hddReps'+_posicion).val());
		$('#select_quantity_large').val($('#hddDist'+_posicion).val());
		$('#select_type_large').val($('#hddMetricaDist'+_posicion).val());
		$('#select_zone').val($('#hddZona'+_posicion).val());
		$('#pause').val($('#hddPausa'+_posicion).val());
		$('#select_type_pause').val($('#hddMetricaPausa'+_posicion).val());
		$('#pauseRecuperacion').val($('#hddRecup'+_posicion).val());
		$('#type_pauseRecuperacion').val($('#hddMetricaRecup'+_posicion).val());
		$('#exercise').val($('#hddNameEx'+_posicion).val());
		$('#circuit').val($('#hddNameEx'+_posicion).val());
		$('#text_circuit').val($('#hddComent'+_posicion).val());
		$('#comment_input').val($('#hddComent'+_posicion).val());
		
		if(_bloque=="progresivo" || _bloque=="farlek" || _bloque=="secuencia"){
			$('#select_quantity_large2').val($('#hddDist'+(_posicion+1)).val());
			$('#select_type_large2').val($('#hddMetricaDist'+(_posicion+1)).val());
			$('#select_zone2').val($('#hddZona'+(_posicion+1)).val());
			
			_elemtPorBloque= Number(_elemtPorBloque);
			var cantidadCiclos=0;
			var inicioCiclos= _elemtPorBloque;//0;
			if(_bloque=="secuencia" && _elemtPorBloque>2){
				inicioCiclos= 2;
			}
			else if(_bloque=="farlek" && _elemtPorBloque>3){
				inicioCiclos= 3;
			}
			else if(_bloque=="progresivo" && _elemtPorBloque>4){
				inicioCiclos= 4;
			}
			cantidadCiclos= _elemtPorBloque-inicioCiclos;
			
			//alert(cantidadCiclos + ' - ' + _elemtPorBloque);
			if(cantidadCiclos>0){
				var _positionI= inicioCiclos+1;
				$("#hddNumBloqueDelBloque").val(inicioCiclos);
				for(p=1; p<=cantidadCiclos; p++){
					//alert(cantidadCiclos);
					addBloqueDelBloque();
					$('#select_quantity_large'+_positionI).val($('#hddDist'+(_posicion+(p+1))).val());
					$('#select_type_large'+_positionI).val($('#hddMetricaDist'+(_posicion+(p+1))).val());
					$('#select_zone'+_positionI).val($('#hddZona'+(_posicion+(p+1))).val());
					_positionI++;
				}
			}
		}
		if(_bloque=="progresivo" || _bloque=="farlek"){
			$('#select_quantity_large3').val($('#hddDist'+(_posicion+2)).val());
			$('#select_type_large3').val($('#hddMetricaDist'+(_posicion+2)).val());
			$('#select_zone3').val($('#hddZona'+(_posicion+2)).val());
		}
		if(_bloque=="progresivo"){
			$('#select_quantity_large4').val($('#hddDist'+(_posicion+3)).val());
			$('#select_type_large4').val($('#hddMetricaDist'+(_posicion+3)).val());
			$('#select_zone4').val($('#hddZona'+(_posicion+3)).val());
		}
		
		if($("#hddBloque" + _posicion).val()=="drills"){
			/*$('#search_exercise').click();
			$("#select_exercise").val($("#circuitoEjexID" + _posicion).val());*/
            $('#search_drills').click();
			$("#select_drills").val($("#circuitoEjexID" + _posicion).val());
            $("#text_drills").val($("#hddComent" + _posicion).val());


			//$("#select_exercise").trigger("change");
			//alert($("#select_exercise").val());
			//$('#select_exercise').prop('selectedIndex', 0).trigger('change');;
		}
		else if($("#hddBloque" + _posicion).val()=="circuito"){
			$('#search_circuit').click();
			$("#select_circuit").val($("#circuitoEjexID" + _posicion).val());
		}
		
		if ($('#hddComent'+_posicion).val() == "Transición a Ciclismo") {
			$('#rbTransicion10').prop('checked', true);
		}
		else if ($('#hddComent'+_posicion).val() == "Transición a Natación") {
			$('#rbTransicion10_v2').prop('checked', true);
		}
		else if ($('#hddComent'+_posicion).val() == "Transición a Carrera") {
			$('#rbTransicion15').prop('checked', true);
		}
		//alert($("#hddBloque" + _posicion).val() + '||' + $("#circuitoEjexID" + _posicion).val());
		/*$('#select_exercise').html();
		$('#select_exercise').append('<option value="' + $(this).data('info') + '" selected>' +
            arr_info[0].toUpperCase() + '</option>');*/
	}catch (err) {
        alert(err.message);
    }
	//alert(_deporte+_bloque+_posicion);
}

function getEliminar(_posicion, _bloque, _idBloqueDelbloque){
	//$("#spanComponente_"+_posicion).remove();
	//$(".clsComponente").parent().remove();
	//$("#tblComponente_"+_posicion).parent().parent().remove();
	
	alertify.confirm(
        'Confirmación',
        'Seguro que desea eliminar el registro?',
        function() {
				//alert(".spanComponente_"+_posicion + " -- " + ".tblGrupo"+_posicion);
			if(_bloque=="secuencia" || _bloque=="progresivo" || _bloque=="farlek"){
				$("#spanComponente_"+_posicion).remove();
				$(".tblGrupo"+_posicion).remove();
				//test
			}
			else{
				$("#tblComponente_"+_posicion).remove();
				$("#spanComponente_"+_posicion).remove();
			}
			$("#hddBloque"+_posicion).remove();
        },
        function() {});
}

function getDuplicar(_posicion){
	//$("div[id^='spanComponente']:last").clone().appendTo('#divComponentes');
	//$("#divComponentes").html($("#divComponentes").html()+$("#spanComponente_"+_posicion).html());
	//alert($("#spanComponente_"+_posicion).html());
	
	contComponentes += 1;
	var htmlDuplicar= '<span class="clsComponente" id="spanComponente_'+contComponentes+'">';
	htmlDuplicar += $("#spanComponente_"+_posicion).html();
	htmlDuplicar += '</span>';
	$("#spanComponente_"+_posicion).after(htmlDuplicar);
	//alert("imgDuplicar"+_posicion);
	var imgTemp = document.getElementsByClassName("imgDuplicar"+_posicion);
	var contImg=1;
	//alert(imgTemp.length);
	$(".imgDuplicar"+_posicion).each(function() {
		if(contImg==imgTemp.length){
			var _onclick= $(this).attr("onclick");
			$(this).attr("onclick", "getDuplicar("+contComponentes+");");
			$(this).removeClass("imgDuplicar"+_posicion);
			$(this).addClass("imgDuplicar"+contComponentes);
			/*alert(_onclick);
			alert($(this).attr("onclick"));/**/
		}
		contImg++;
	});
	
	imgTemp = document.getElementsByClassName("imgEliminar"+_posicion);
	contImg=1;
	$(".imgEliminar"+_posicion).each(function() {
		if(contImg==imgTemp.length){
			var _onclick= $(this).attr("onclick");
			//getEliminar(2, 'drills', 0);
			var aOnclick= _onclick.split(", ");
			var bl= aOnclick[1].replace("'", "");
			var blID= aOnclick[2].replace(");", "");
			$(this).attr("onclick", 'getEliminar('+contComponentes+', '+aOnclick[1]+', '+blID+');');
			$(this).removeClass("imgEliminar"+_posicion);
			$(this).addClass("imgEliminar"+contComponentes);
			/*alert(_onclick);
			alert($(this).attr("onclick"));/**/
		}
		contImg++;
	});
	
	imgTemp = document.getElementsByClassName("imgEditar"+_posicion);
	contImg=1;
	$(".imgEditar"+_posicion).each(function() {
		if(contImg==imgTemp.length){
			var _onclick= $(this).attr("onclick");
			//getEditar('carrera_0_h11qq', 'drills', 2);
			var aOnclick= _onclick.split(", ");
			$(this).attr("onclick", ''+aOnclick[0]+', '+aOnclick[1]+', '+contComponentes+');');
			$(this).removeClass("imgEditar"+_posicion);
			$(this).addClass("imgEditar"+contComponentes);
			/*alert(_onclick);
			alert($(this).attr("onclick"));/**/
		}
		contImg++;
	});
	/*
	FALTA ACTUALIZAR LOS id DE TODAS LAS ETIQUETAS APRA PODER EDITAR
	*/
	contImg=1;
	$(".lblReps"+_posicion+":last").attr("id", "lblReps"+contComponentes);
	$(".lblReps"+_posicion+":last").removeClass("lblReps"+_posicion);
	$(".lblReps"+_posicion+":last").addClass("lblReps"+contComponentes);

    $(".lblRepsD"+_posicion+":last").attr("id", "lblRepsD"+contComponentes);
	$(".lblRepsD"+_posicion+":last").removeClass("lblRepsD"+_posicion);
	$(".lblRepsD"+_posicion+":last").addClass("lblRepsD"+contComponentes);

	$(".lblSerie"+_posicion+":last").attr("id", "lblSerie"+contComponentes);
	$(".lblSerie"+_posicion+":last").removeClass("lblSerie"+_posicion).addClass("lblSerie"+contComponentes);
    
    $(".lblSerieD"+_posicion+":last").attr("id", "lblSerieD"+contComponentes);
	$(".lblSerieD"+_posicion+":last").removeClass("lblSerieD"+_posicion).addClass("lblSerieD"+contComponentes);

	$(".lblDist"+_posicion+":last").attr("id", "lblDist"+contComponentes);
	$(".lblDist"+_posicion+":last").removeClass("lblDist"+_posicion).addClass("lblDist"+contComponentes);
	$(".lblZona"+_posicion+":last").attr("id", "lblZona"+contComponentes);
	$(".lblZona"+_posicion+":last").removeClass("lblZona"+_posicion).addClass("lblZona"+contComponentes);
	$(".lblPausa"+_posicion+":last").attr("id", "lblPausa"+contComponentes);
	$(".lblPausa"+_posicion+":last").removeClass("lblPausa"+_posicion).addClass("lblPausa"+contComponentes);
	$(".lblRecup"+_posicion+":last").attr("id", "lblRecup"+contComponentes);
	$(".lblRecup"+_posicion+":last").removeClass("lblRecup"+_posicion).addClass("lblRecup"+contComponentes);
	$(".spanNameEx"+_posicion+":last").attr("id", "spanNameEx"+contComponentes);
	$(".spanNameEx"+_posicion+":last").removeClass("spanNameEx"+_posicion).addClass("spanNameEx"+contComponentes);
	
	
	try{
		$('.hddSerie'+_posicion+":last").attr("id", "hddSerie"+contComponentes);
		$(".hddSerie"+_posicion+":last").removeClass("hddSerie"+_posicion).addClass("hddSerie"+contComponentes);
		
		$('.hddElemtPorBloque'+_posicion+":last").attr("id", "hddElemtPorBloque"+contComponentes);
		$(".hddElemtPorBloque"+_posicion+":last").removeClass("hddElemtPorBloque" + _posicion).addClass("hddElemtPorBloque"+contComponentes);
		
		$('.hddReps'+_posicion+":last").attr("id", "hddReps"+contComponentes);
		$(".hddReps"+_posicion+":last").removeClass("hddReps"+_posicion).addClass("hddReps"+contComponentes);
		$('.hddDist'+_posicion+":last").attr("id", "hddDist"+contComponentes);
		$(".hddDist"+_posicion+":last").removeClass("hddDist"+_posicion).addClass("hddDist"+contComponentes);
		$('.hddMetricaDist'+_posicion+":last").attr("id", "hddMetricaDist"+contComponentes);
		$(".hddMetricaDist"+_posicion+":last").removeClass("hddMetricaDist"+_posicion).addClass("hddMetricaDist" + contComponentes);
		$('.hddZona'+_posicion+":last").attr("id", "hddZona"+contComponentes);
		$(".hddZona"+_posicion+":last").removeClass("hddZona"+_posicion).addClass("hddZona"+contComponentes);
		$('.hddPausa'+_posicion+":last").attr("id", "hddPausa"+contComponentes);
		$(".hddPausa"+_posicion+":last").removeClass("hddPausa"+_posicion).addClass("hddPausa"+contComponentes);
		
		$('.hddMetricaPausa'+_posicion+":last").attr("id", "hddMetricaPausa"+contComponentes);
		$(".hddMetricaPausa"+_posicion+":last").removeClass("hddMetricaPausa" + _posicion).addClass("hddMetricaPausa" + contComponentes);
		$('.hddRecup'+_posicion+":last").attr("id", "hddRecup"+contComponentes);
		$(".hddRecup"+_posicion+":last").removeClass("hddRecup"+_posicion).addClass("hddRecup"+contComponentes);
		$('.hddMetricaRecup'+_posicion+":last").attr("id", "hddMetricaRecup"+contComponentes);
		$(".hddMetricaRecup"+_posicion+":last").removeClass("hddMetricaRecup" + _posicion).addClass("hddMetricaRecup"+contComponentes);
		$('.hddNameEx'+_posicion+":last").attr("id", "hddNameEx"+contComponentes);
		$(".hddNameEx"+_posicion+":last").removeClass("hddNameEx"+_posicion).addClass("hddNameEx" + contComponentes);
		$('.hddNameEx'+_posicion+":last").attr("id", "hddNameEx"+contComponentes);
		$(".hddNameEx"+_posicion+":last").removeClass("hddNameEx"+_posicion).addClass("hddNameEx" + contComponentes);
		
		
		$('.hddDuracionEx'+_posicion+":last").attr("id", "hddDuracionEx"+contComponentes);
		$(".hddDuracionEx"+_posicion+":last").removeClass("hddDuracionEx"+_posicion).addClass("hddDuracionEx" + contComponentes);
		$('.hddCont'+_posicion+":last").attr("id", "hddCont"+contComponentes);
		$(".hddCont"+_posicion+":last").removeClass("hddCont"+_posicion).addClass("hddCont" + contComponentes);
		$("#hddCont"+contComponentes).val(contComponentes);
		
		$('.hddWatts'+_posicion+":last").attr("id", "hddWatts"+contComponentes);
		$(".hddWatts"+_posicion+":last").removeClass("hddWatts"+_posicion).addClass("hddWatts" + contComponentes);
		$('.hddPpm'+_posicion+":last").attr("id", "hddPpm"+contComponentes);
		$(".hddPpm"+_posicion+":last").removeClass("hddPpm"+_posicion).addClass("hddPpm" + contComponentes);
		$('.hddMinKm'+_posicion+":last").attr("id", "hddMinKm"+contComponentes);
		$(".hddMinKm"+_posicion+":last").removeClass("hddMinKm"+_posicion).addClass("hddMinKm" + contComponentes);
		$('.hddx100'+_posicion+":last").attr("id", "hddx100"+contComponentes);
		$(".hddx100"+_posicion+":last").removeClass("hddx100"+_posicion).addClass("hddx100" + contComponentes);
		$('.hddx400'+_posicion+":last").attr("id", "hddx400"+contComponentes);
		$(".hddx400"+_posicion+":last").removeClass("hddx400"+_posicion).addClass("hddx400" + contComponentes);
		$('.hddxDist'+_posicion+":last").attr("id", "hddxDist"+contComponentes);
		$(".hddxDist"+_posicion+":last").removeClass("hddxDist"+_posicion).addClass("hddxDist" + contComponentes);
		$('.hddEcos'+_posicion+":last").attr("id", "hddEcos"+contComponentes);
		$(".hddEcos"+_posicion+":last").removeClass("hddEcos"+_posicion).addClass("hddEcos" + contComponentes);
		$('.hddFE'+_posicion+":last").attr("id", "hddFE"+contComponentes);
		$(".hddFE"+_posicion+":last").removeClass("hddFE"+_posicion).addClass("hddFE" + contComponentes);
		
		$('.hddFI'+_posicion+":last").attr("id", "hddFI"+contComponentes);
		$(".hddFI"+_posicion+":last").removeClass("hddFI"+_posicion).addClass("hddFI" + contComponentes);
		$('.hddCalories'+_posicion+":last").attr("id", "hddCalories"+contComponentes);
		$(".hddCalories"+_posicion+":last").removeClass("hddCalories"+_posicion).addClass("hddCalories" + contComponentes);
		$('.hddComent'+_posicion+":last").attr("id", "hddComent"+contComponentes);
		$(".hddComent"+_posicion+":last").removeClass("hddComent"+_posicion).addClass("hddComent" + contComponentes);
		
		$('.circuitoEjexID'+_posicion+":last").attr("id", "circuitoEjexID"+contComponentes);
		$(".circuitoEjexID"+_posicion+":last").removeClass("circuitoEjexID"+_posicion).addClass("circuitoEjexID" + contComponentes);
		$('.hddExerciseName'+_posicion+":last").attr("id", "hddExerciseName"+contComponentes);
		$(".hddExerciseName"+_posicion+":last").removeClass("hddExerciseName" + _posicion).addClass("hddExerciseName" + contComponentes);
		
		$('.hddBloqueDelBloque'+_posicion+":last").attr("id", "hddBloqueDelBloque"+contComponentes);
		$(".hddBloqueDelBloque"+_posicion+":last").removeClass("hddBloqueDelBloque" + _posicion).addClass("hddBloqueDelBloque" + contComponentes);
		$('.hddSportID'+_posicion+":last").attr("id", "hddSportID"+contComponentes);
		$(".hddSportID"+_posicion+":last").removeClass("hddSportID" + _posicion).addClass("hddSportID"+contComponentes);
		$('.hddBloque'+_posicion+":last").attr("id", "hddBloque"+contComponentes);
		$(".hddBloque"+_posicion+":last").removeClass("hddBloque" + _posicion).addClass("hddBloque" + contComponentes);
		$('.tblComponente_'+_posicion+":last").attr("id", "tblComponente_"+contComponentes);
		$(".tblComponente_"+_posicion+":last").removeClass("tblComponente_" + _posicion).addClass("tblComponente_" + contComponentes);
		$('.hddCarrera'+_posicion+":last").attr("id", "hddCarrera"+contComponentes);
		$(".hddCarrera"+_posicion+":last").removeClass("hddCarrera" + _posicion).addClass("hddCarrera" + contComponentes);
		
		/*$('.hddZona'+(_posicion+1)+":last").attr("id", "hddZona"+(contComponentes+1));
		$(".hddZona"+(_posicion+1)+":last").removeClass("hddZona"+(_posicion+1)).addClass("hddZona" + contComponentes+1);
		$('.hddZona'+(_posicion+2)+":last").attr("id", "hddZona"+(contComponentes+2));
		$(".hddZona"+(_posicion+2)+":last").removeClass("hddZona"+(_posicion+2)).addClass("hddZona" + contComponentes+2);
		$('.hddZona'+(_posicion+3)+":last").attr("id", "hddZona"+(contComponentes+3));
		$(".hddZona"+(_posicion+3)+":last").removeClass("hddZona"+(_posicion+3)).addClass("hddZona" + contComponentes+3);
		  
		$('.hddDist'+(_posicion+1)+":last").attr("id", "hddDist"+(contComponentes+1));
		$(".hddDist"+(_posicion+1)+":last").removeClass("hddDist"+(_posicion+1)).addClass("hddDist"+(contComponentes+1));
		$('.hddDist'+(_posicion+2)+":last").attr("id", "hddDist"+(contComponentes+2));
		$(".hddDist"+(_posicion+2)+":last").removeClass("hddDist"+(_posicion+2)).addClass("hddDist"+(contComponentes+2));
		$('.hddDist'+(_posicion+3)+":last").attr("id", "hddDist"+(contComponentes+3));
		$(".hddDist"+(_posicion+3)+":last").removeClass("hddDist"+(_posicion+3)).addClass("hddDist"+(contComponentes+3));
		
		$('.hddMetricaDist'+(_posicion+1)+":last").attr("id", "hddMetricaDist"+(contComponentes+1));
		$(".hddMetricaDist"+(_posicion+1)+":last").removeClass("hddMetricaDist"+(_posicion+1)).addClass("hddMetricaDist" + (contComponentes+1));
		$('.hddMetricaDist'+(_posicion+2)+":last").attr("id", "hddMetricaDist"+(contComponentes+2));
		$(".hddMetricaDist"+(_posicion+2)+":last").removeClass("hddMetricaDist"+(_posicion+2)).addClass("hddMetricaDist" + (contComponentes+2));
		$('.hddMetricaDist'+(_posicion+3)+":last").attr("id", "hddMetricaDist"+(contComponentes+3));
		$(".hddMetricaDist"+(_posicion+3)+":last").removeClass("hddMetricaDist"+(_posicion+3)).addClass("hddMetricaDist" + (contComponentes+3));*/
	}catch (err) {
        alert(err.message);
    }
}

function getDuplicarBloqueDelBloque(){
	
}
	
function getDistancia(sel) {
$.ajax({
    type: 'get',
    url: "/web/index.php?r=sessionsssession/getdistance",
    data: {
        "id": sel
    },
    success: function(data) {
        document.getElementById('distance_select').innerHTML = data;
        $('#distance_select').val(1);
    },
    error: function(data) {},
});
}

function confirmDelete(key, token) {
alertify.confirm(
    'Confirmación',
    'Seguro que desea eliminar el registro?',
    function() {
        $.ajax({
            type: 'POST',
            url: "index.php?r=sessionsssession/delete",
            data: {
                key: key,
                token: token
            },
            success: function(bool) {
                //console.log('success '+bool);
                if (bool == true) {
                    alertify.success(
                        '<span style="color: #FFFFFF;"><i class="fa fa-trash" aria-hidden="true"></i> &nbsp;&nbsp;Registro eliminado espere un momento ...</span>',
                        2,
                        function() {
                            location.reload();
                        });
                } else {
                    alertify.error(
                        '<span style="color: #FFFFFF;">Ocurrio un error, intenta de nuevo</span>',
                        2,
                        function() {
                            location.reload();
                        });
                }
            },
            error: function(data) {
                // console.log('error '+data);
                alertify.error(
                    '<span style="color: #FFFFFF;">Ocurrio un error, intenta de nuevo</span>',
                    2,
                    function() {
                        location.reload();
                    });
            },
        });
    },
    function() {});
}

function radios(r) {
//console.log(r['id']);

$('input[type="checkbox"]').each(function() {

    $(this).prop("checked", false);
});
$('#' + r['id']).prop('checked', true);

let info = r['value'];
//alert("info: "+info + ' r: '+r + ' r: '+r["id"]);
//console.log(info);
$('#select_blocks').empty();
$(".block_items").each(function() {
    let arr_info = $(this).data('info').split('_');
    //alert($(this).data('info'));
    if (info === $(this).data('info')) {
        console.log('verd')
        $('#select_blocks').append('<option value="' + $(this).data('info') + '" selected>' +
            arr_info[0].toUpperCase() + '</option>');
    } else {
        $('#select_blocks').append('<option value="' + $(this).data('info') + '">' +
            arr_info[0].toUpperCase() + '</option>');
    }

});
}

function call(r_id, deporte, valores) {
let id = r_id['id'];
let zone = $('#' + id).data('zone');
let string_type = $('#' + id).data('string');
let block = $('#' + id).data('block');
let quantity_large = $('#' + id).data('quantity');
let pause = $('#' + id).data('pause');
let pause_type = $('#' + id).data('pauset');
let sport_split = deporte.split('_');
let sport = sport_split[0];
var valores_split = valores.split('|');

switch (block) {
    case 'circuito':
        $('.circuit_input').show();
        $('.drills_input').hide();
        $('.exercise_input').hide();
        $('.exercise_input2').hide();
        $('.default_input').hide();
        $('#set_defaults').hide();
        $('.comment_input').hide();
        break;
    case 'drills':
        $('.drills_input').show();
        $('.circuit_input').hide();
        $('.exercise_input').hide();
        $('.exercise_input2').hide();
        $('.default_input').hide();
        $('#set_defaults').hide();
        $('.comment_input').hide();
        /*$('.exercise_input').show();
        $('.exercise_input2').show();
        $('.circuit_input').hide();
        $('.default_input').hide();
        $('#set_defaults').hide();
        $('.comment_input').hide();*/
        break;
    case 'comentario':
        $('.circuit_input').hide();
        $('.drills_input').hide();
        $('.exercise_input').hide();
        $('.exercise_input2').hide();
        $('.default_input').hide();
        $('#set_defaults').hide();
        $('.comment_input').show();

        break;
    default:
        $('.default_input').show();
        $('.exercise_input2').show();
        $('.exercise_input').hide();
        $('.circuit_input').hide();
        $('.drills_input').hide();
        $('#set_defaults').show();
        $('.comment_input').hide();
        break;
}
switch (string_type) {
    case 'min':
        string_type = '1';
        break;
    case 'seg':
        string_type = '2';
        break;
    case 'hrs':
        string_type = '3';
        break;
    case 'mts':
        string_type = '4';
        break;
}
//alert(deporte);

$('#spanMinKmTexto').html("min/km:");
$('#spanPPM').html(valores_split[0]);
if (sport == "carrera") {
    $('#divWatts').hide();
    $('#divMinKm').show();
    $('#divX100').show();
    $('#divX400').show();
    $('#divDist').show();
    $('#spanMinKm').html(valores_split[1]);
    $('#spanX100').html(valores_split[2]);
    $('#spanX400').html(valores_split[3]);
    $('#spanDist').html(valores_split[4]);
} else if (sport == "natacion") {
    $('#divWatts').hide();
    $('#divMinKm').show();
    $('#divX100').hide();
    $('#divX400').hide();
    $('#divDist').show();
    $('#spanMinKmTexto').html("min/100:");
    $('#spanMinKm').html(valores_split[1]);
    $('#spanDist').html(valores_split[4]);
} else if (sport == "ciclismo") {
    $('#divWatts').show();
    $('#divMinKm').hide();
    $('#divX100').hide();
    $('#divX400').hide();
    $('#divDist').hide();
    $('#spanWatts').html(valores_split[5]);
}
console.log('informacion');
console.log(string_type);
console.log('/informacion');
if (string_type == '1') {
    quantity_large = Number($('#' + id).data('quantity')); //;
}
if (pause_type == 'min') {
    pause = Number($('#' + id).data('pause'));
} else {
    pause = Number($('#' + id).data('pause'));
}

$('#pause_edit').val(pause);
$('#select_zone_edit').val(zone);
$('#select_quantity_large_edit').val(quantity_large);
$('#select_type_large_edit').val(string_type);

$('#button_delete_div').val(id);
$('#button_edit_div').val(id);
$('#exampleModal2').modal('show');

}

function call_trans(r_id) {
let id = r_id['id'];
let pause = $('#' + id).data('rec');
let pause_type = $('#' + id).data('typerec');
pause = Number($('#' + id).data('rec'));
switch (pause_type) {
    case 'min':
        string_type = '1';
        break;
    case 'seg':
        string_type = '2';
        break;
}
$('#pause_edit_trans').val(pause);
$('#select_type_pause_edit_trans').val(string_type);
$('#button_edit_trans').val(id);
$('#exampleModal3').modal('show');

}

$('#alert_demo_3_1').click(function(e) {
swal("Campos requeridos!", "> ", {
    icon: "warning",
    buttons: {
        confirm: {
            className: 'btn btn-warning'
        }
    },
});
});
//== Class Initialization
jQuery(document).ready(function() {
	initGrupoDiv=0;
	grupoID=0;
	ecosFuerza=0;
	totalMinutosSesion=0;
	valorAnterior="";
	contComponentes=0;
	bloqueAnterior="";
	contBloqueDelbloque=0;
	contBloquesEditando=0;
	idBloqueDelbloque=0;
	bloqueAnteriorLoadInicio="";
	contBloqueDelbloqueLoadInicio=0;
	nombreBloque= '';
	deporte_item="";
	iniciando="yes";
	arrdeporteTransicion = [''];
	porcTransicionAdicional = 0;
var metricaEjercicio = 0;
var pausaEjercicio = 0;
var vecesEjercicio = 0;
var tiempoEjercicio = 0;
var zonaEjercicio = 0;
var seriesejercicio = 0;
		$(".hide_sports").click();
		//alert(18);
		$("#hddAccion").val("Editando");
		
			
			metricaEjercicio = 0;
			pausaEjercicio = 0;
			vecesEjercicio = 1;
			tiempoEjercicio = 0;
			zonaEjercicio = 0;
			seriesejercicio = 1;
			string_type_pause = 0;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 0;
			deporte_item = 3;
			exercise_id = 0;
			ecosFuerza += 0;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(0);
			$("#select_type_pause").val(0); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(1); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=2;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("Descansar 15 minutos");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("Descansar 15 minutos");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("Descansar 15 minutos");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("Descansar 15 minutos");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 0;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
			
			
			metricaEjercicio = 0;
			pausaEjercicio = 0;
			vecesEjercicio = 1;
			tiempoEjercicio = 0;
			zonaEjercicio = 0;
			seriesejercicio = 1;
			string_type_pause = 0;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 0;
			deporte_item = 3;
			exercise_id = 0;
			ecosFuerza += 0;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(0);
			$("#select_type_pause").val(0); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(1); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=2;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("Descansar 15 minutos");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("Descansar 15 minutos");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("Descansar 15 minutos");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("Descansar 15 minutos");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 0;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
			
			
			metricaEjercicio = 0;
			pausaEjercicio = 0;
			vecesEjercicio = 1;
			tiempoEjercicio = 0;
			zonaEjercicio = 0;
			seriesejercicio = 1;
			string_type_pause = 0;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 0;
			deporte_item = 3;
			exercise_id = 0;
			ecosFuerza += 0;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(0);
			$("#select_type_pause").val(0); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(1); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=2;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("Descansar 15 minutos");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("Descansar 15 minutos");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("Descansar 15 minutos");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("Descansar 15 minutos");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 0;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
			
			
			metricaEjercicio = 2;
			pausaEjercicio = 0;
			vecesEjercicio = 1;
			tiempoEjercicio = 10;
			zonaEjercicio = 1;
			seriesejercicio = 1;
			string_type_pause = 1;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 1;
			deporte_item = 3;
			exercise_id = 0;
			ecosFuerza += 0;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(2);
			$("#select_type_pause").val(1); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(1); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=6;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 1;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
			
			
			metricaEjercicio = 2;
			pausaEjercicio = 0;
			vecesEjercicio = 1;
			tiempoEjercicio = 10;
			zonaEjercicio = 1;
			seriesejercicio = 1;
			string_type_pause = 1;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 1;
			deporte_item = 3;
			exercise_id = 0;
			ecosFuerza += 0;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(2);
			$("#select_type_pause").val(1); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(1); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=6;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 1;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
			
			
			metricaEjercicio = 2;
			pausaEjercicio = 0;
			vecesEjercicio = 1;
			tiempoEjercicio = 10;
			zonaEjercicio = 1;
			seriesejercicio = 1;
			string_type_pause = 1;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 1;
			deporte_item = 3;
			exercise_id = 0;
			ecosFuerza += 0;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(2);
			$("#select_type_pause").val(1); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(1); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=6;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 1;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
			
			
			metricaEjercicio = 2;
			pausaEjercicio = 0;
			vecesEjercicio = 2;
			tiempoEjercicio = 5;
			zonaEjercicio = 1;
			seriesejercicio = 2;
			string_type_pause = 1;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 1;
			deporte_item = 3;
			exercise_id = 0;
			ecosFuerza += 0;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(2);
			$("#select_type_pause").val(1); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(2); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=1;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 3;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
			
			
			metricaEjercicio = 2;
			pausaEjercicio = 0;
			vecesEjercicio = 2;
			tiempoEjercicio = 5;
			zonaEjercicio = 1;
			seriesejercicio = 2;
			string_type_pause = 1;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 1;
			deporte_item = 3;
			exercise_id = 0;
			ecosFuerza += 0;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(2);
			$("#select_type_pause").val(1); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(2); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=1;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 3;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
			
			
			metricaEjercicio = 2;
			pausaEjercicio = 0;
			vecesEjercicio = 2;
			tiempoEjercicio = 5;
			zonaEjercicio = 1;
			seriesejercicio = 2;
			string_type_pause = 1;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 1;
			deporte_item = 3;
			exercise_id = 0;
			ecosFuerza += 0;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(2);
			$("#select_type_pause").val(1); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(2); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=1;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 3;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
			
			
			metricaEjercicio = 2;
			pausaEjercicio = 0;
			vecesEjercicio = 1;
			tiempoEjercicio = 5;
			zonaEjercicio = 2;
			seriesejercicio = 1;
			string_type_pause = 1;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 1;
			deporte_item = 3;
			exercise_id = 0;
			ecosFuerza += 0;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(2);
			$("#select_type_pause").val(1); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(1); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=1;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 3;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
			
			
			metricaEjercicio = 2;
			pausaEjercicio = 0;
			vecesEjercicio = 1;
			tiempoEjercicio = 5;
			zonaEjercicio = 2;
			seriesejercicio = 1;
			string_type_pause = 1;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 1;
			deporte_item = 3;
			exercise_id = 0;
			ecosFuerza += 0;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(2);
			$("#select_type_pause").val(1); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(1); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=1;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 3;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
			
			
			metricaEjercicio = 2;
			pausaEjercicio = 0;
			vecesEjercicio = 1;
			tiempoEjercicio = 5;
			zonaEjercicio = 2;
			seriesejercicio = 1;
			string_type_pause = 1;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 1;
			deporte_item = 3;
			exercise_id = 0;
			ecosFuerza += 0;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(2);
			$("#select_type_pause").val(1); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(1); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=1;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 3;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
			
			
			metricaEjercicio = 2;
			pausaEjercicio = 0;
			vecesEjercicio = 1;
			tiempoEjercicio = 5;
			zonaEjercicio = 3;
			seriesejercicio = 1;
			string_type_pause = 1;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 1;
			deporte_item = 3;
			exercise_id = 0;
			ecosFuerza += 0;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(2);
			$("#select_type_pause").val(1); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(1); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=1;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 3;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
			
			
			metricaEjercicio = 2;
			pausaEjercicio = 0;
			vecesEjercicio = 1;
			tiempoEjercicio = 5;
			zonaEjercicio = 3;
			seriesejercicio = 1;
			string_type_pause = 1;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 1;
			deporte_item = 3;
			exercise_id = 0;
			ecosFuerza += 0;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(2);
			$("#select_type_pause").val(1); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(1); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=1;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 3;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
			
			
			metricaEjercicio = 2;
			pausaEjercicio = 0;
			vecesEjercicio = 1;
			tiempoEjercicio = 5;
			zonaEjercicio = 3;
			seriesejercicio = 1;
			string_type_pause = 1;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 1;
			deporte_item = 3;
			exercise_id = 0;
			ecosFuerza += 0;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(2);
			$("#select_type_pause").val(1); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(1); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=1;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 3;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
			
			
			metricaEjercicio = 0;
			pausaEjercicio = 0;
			vecesEjercicio = 1;
			tiempoEjercicio = 0;
			zonaEjercicio = 0;
			seriesejercicio = 1;
			string_type_pause = 0;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 0;
			deporte_item = 3;
			exercise_id = 145;
			ecosFuerza += 82;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(0);
			$("#select_type_pause").val(0); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(1); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=5;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 0;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
			
			
			metricaEjercicio = 0;
			pausaEjercicio = 0;
			vecesEjercicio = 1;
			tiempoEjercicio = 0;
			zonaEjercicio = 0;
			seriesejercicio = 1;
			string_type_pause = 0;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 0;
			deporte_item = 3;
			exercise_id = 145;
			ecosFuerza += 82;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(0);
			$("#select_type_pause").val(0); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(1); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=5;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 0;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
			
			
			metricaEjercicio = 0;
			pausaEjercicio = 0;
			vecesEjercicio = 1;
			tiempoEjercicio = 0;
			zonaEjercicio = 0;
			seriesejercicio = 1;
			string_type_pause = 0;
			string_type = metricaEjercicio;

			macro_pause = 0;
			macro_pause_metric = 0;
			deporte_item = 3;
			exercise_id = 145;
			ecosFuerza += 82;
			_porcentajeTransicionSelected = "";
			//alert(ecosFuerza);
			/*heart_rate = "<php?=//$heart_rate?>";
			min_km = "<php?=//$min_km?>";
			watts = "<php?=//$watts?>";
			min_100 = "<php?=//$min_100?>";
			min_400 = "<php?=//$min_400?>";
			min_dist = "<php?=//$min_dist?>";
			exercise_fe = "<phph?=//$exercise_fe?>";
			intensity_factor = "<php?=//$intensity_factor?>";*/

			//$("#select_type_large").val(metricaEjercicio); //del 1 al 3 actualmente
			
			$('#select_type_large').val(0);
			$("#select_type_pause").val(0); //del 1 al 2 actualmente
			$('#pause').val(0);
			$("#times").val(1); //vecesEjercicio
			$("#select_quantity_large").val((tiempoEjercicio)); //es el tiempo
			$("#select_zone").val(zonaEjercicio);
			$("#series").val(seriesejercicio);
			$('#pauseRecuperacion').val(macro_pause);
			$('#type_pauseRecuperacion').val(macro_pause_metric);
			
			//alert(metricaEjercicio);
			
		 	type1=5;
			 bloque_selected='';

			var numBloquesOriginales= 0;
			switch (type1) {
				case 1:
					bloque_selected='secuencia';
					numBloquesOriginales= 2;
					break;
				case 2:
					bloque_selected='comentario';
					
                    $('#comment_input').html("");

					break;
				case 3:
					bloque_selected='transicion';
					
                    $('#comment_input').html("");

					if(_porcentajeTransicionSelected==10){
					   $('#rbTransicion10').prop('checked', true);
					}
					else if(_porcentajeTransicionSelected==15){
						$('#rbTransicion15').prop('checked', true);
					}
					break;
				case 5:
					bloque_selected='circuito';
					$('#text_circuit').html("");
					$('#select_circuit').append('<option value="' + exercise_id + '" selected> </option>');
					break;
				case 6:
					bloque_selected='ejercicio';
					break;
				case 7:
					bloque_selected='calentamiento';
					break;
				case 8:
					bloque_selected='continuo';
					break;
				case 9:
					bloque_selected='intervalos';
					break;
				case 10:
					bloque_selected='drills';
                    
                    $('#text_drills').html("");//agregue drills 10 140524
					$('#select_drills').append('<option value="' + exercise_id + '" selected> </option>');//agregue drills 10 140524
					break;
				case 11:
					bloque_selected='pausa';
					break;
				case 12:
					bloque_selected='vuelta';
					break;
				case 13:
					bloque_selected='progresivo';
					numBloquesOriginales= 4;
					break;
				case 14:
					bloque_selected='farlek';
					numBloquesOriginales= 3;
					break;
				case 15:
					bloque_selected='intermitente';
					break;
				case 16:
					bloque_selected='repeticiones';
					break;
				case 17:
					bloque_selected='sprints';
					break;
			}
		    
		    if(bloque_selected=='secuencia' || bloque_selected=='farlek' || bloque_selected=='progresivo'){
				var tempCont= 0;
				$("#hddNumBloqueDelBloque").val(tempCont);
				//alert(tempCont);
				if(bloqueAnteriorLoadInicio!=bloque_selected){
					bloqueAnteriorLoadInicio= bloque_selected;
					contBloqueDelbloqueLoadInicio= 0;
				}
				contBloqueDelbloqueLoadInicio++;
				if(contBloqueDelbloqueLoadInicio>numBloquesOriginales){
					//addBloqueDelBloque();
					
				}
			}
			//var numBdB= Number($("#hddNumBloqueDelBloque").val()) + 1;
			
	
			//alert(bloque_selected);
			$('#button_make_div').val(bloque_selected);
			$('#hddNombreBloque').val(bloque_selected)
			console.log(deporte_item);
			switch (deporte_item) {
				case 1:
					deporte_item='ciclismo';
					
					break;
				case 2:
					deporte_item='natacion';
					
					break;

				case 3:
					deporte_item='carrera';
					
					break;

				case 4:
					deporte_item='fuerza';
					
					break;
			
				default:
					break;
			}
			//alert(deporte_item);
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'transicion' && bloque_selected != 'drills')//agregue drills 10 140524
				$('#blockSelected').val(deporte_item);
			$('#idBusquedaD').val(exercise_id);
			$('#idBusquedaC').val(exercise_id);
			//$('#select_blocks').append('<option value="' + deporte_item.toUpperCase() + '" selected>' + deporte_item.toUpperCase() + '</option>');
			if(bloque_selected != 'pausa' && bloque_selected != 'comentario' && bloque_selected != 'circuito' && bloque_selected != 'drills'){//agregue drills 10 140524
				//$('#spanSeleccionado').html(deporte_item.toUpperCase());
			}
			/*$('#heart_rate').val(heart_rate);
			$('#min_km').val(min_km);
			$('#watts').val(watts);
			$('#min_100').val(min_100);
			$('#min_400').val(min_400);
			$('#min_dist').val(min_dist);
			$('#exercise_fe').val(exercise_fe);
			$('#intensity_factor').val(intensity_factor);*/
			//$('#ecos').val(ecos);
			//_ecosTotales= rows[i]['ECOsTotal'];
			
			if(bloque_selected != 'pausa'){//&& bloque_selected != 'comentario'
				//alert(deporte_item);
				$(".sports").val(deporte_item);
				$("#hddItemSelected").val(deporte_item);
			}
			
			$(".sports").click();
	//alert(0);
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 0				},
				success: function(data) {
					document.getElementById('sessionsssession-profile_id').innerHTML = data;
				},
				error: function(data) {},
			});
			
			$("#button_make_div").click();
			times = 1;
			deporte = "carrera";
			block = "intervalos";
			
					$("#hddAccion").val("");
								   
	let totalFuerza= $("#divEcosTotales").html();
	try{
		$("#divEcosTotales").html(Number(totalFuerza) + Number(ecosFuerza));
	}
	catch (err) {
		$("#divEcosTotales").html(totalFuerza);
	}
				
	//Regresamos los valores del sport correctos por cada deporte
	$("#sportC").val("carrera");
	$("#sportB").val("ciclismo");
	$("#sportN").val("natacion");
});
function addLibrary() {
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=sessionsssession/sesiondup",
        data: {
            "id": 1187,
        },
        success: function(data) {
            console.log('duplicando');
            console.log(data);
            idn=data;
            $.ajax({
                type: 'get',
                url: "/web/index.php?r=sessionsssession/addlibrary",
                data: {
                    "id": idn,
                    "name": $('#name_library').val(),
                    "descripcion": $('#descripcion_library').val(),
                },
                success: function(data) {
                    console.log('agregando a libreria');
                    console.log(data);
                    $('#libraryModal').modal('hide');
                    swal({
                        title: "Sesión agregada correctamente a la librería!",
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

jQuery(function ($) {
jQuery&&jQuery.pjax&&(jQuery.pjax.defaults.maxCacheLength=0);
if (jQuery('#sessionsssession-profile_id').data('select2')) { jQuery('#sessionsssession-profile_id').select2('destroy'); }
jQuery.when(jQuery('#sessionsssession-profile_id').select2(select2_e6279efa)).done(initS2Loading('sessionsssession-profile_id','s2options_d6851687'));

jQuery('#w0').yiiActiveForm([{"id":"sessionsssession-profile_id","name":"profile_id","container":".field-sessionsssession-profile_id","input":"#sessionsssession-profile_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Profile ID debe ser un número entero.","skipOnEmpty":1});}}], []);
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