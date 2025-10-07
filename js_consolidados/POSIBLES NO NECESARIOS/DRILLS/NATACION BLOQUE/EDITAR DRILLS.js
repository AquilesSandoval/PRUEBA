var s2options_d6851687 = {"themeCss":".select2-container--krajee","sizeCss":"","doReset":true,"doToggle":false,"doOrder":false};
window.select2_e6279efa = {"allowClear":true,"minimumInputLength":3,"language":{"errorLoading":function () { return 'No se encontraron datos'; }},"ajax":{"url":"\/web\/index.php?r=sessionsssession\/getcitylist","dataType":"json","data":function(params) { return {q:params.term}; }},"escapeMarkup":function (markup) { return markup; },"templateResult":function(city) { return city.text; },"templateSelection":function (city) { return city.text; },"theme":"krajee","width":"100%","placeholder":"Escribe almenos 3 caracteres para buscar..."};

$(document).ready(function() {
    cont = 4;
	//alert("4");
    $("#add_line").click(function() {
        cont = cont + 1;
        $("#circuits_items>tbody").append('<tr id="fila_' + cont + '">' +
            '<td><div><img src="require/img/default.png" class="rounded-circle imgshadow" style="width: 45px; height:45px; object-fit: fill;" alt="..." id="image' + cont + '"></div></td>' +
            '<td>' +
            '<input type="text" id="exer' + cont + '" onkeyup="getE(' +
            cont +
            ');" class="form-control" placeholder="Ingrese ejercicio" autocomplete="off" required> <div id="exerList' +
            cont + '" style="font-size:12px"> </div>' +
            '<input type="hidden" id="exerid' + cont + '" name="exer[]">' +
            '<td>' +
            '<select class="form-control-sm custom-select" id="sport_id'+cont+'" name="sport_id[]" onChange="getEcosCalorias(' + cont + ')">' +
            '<option value="">Deporte</option>' +
            '<option value="1">Ciclismo</option>' +
            '<option value="2">Natación </option>' +
            '<option value="3">Carrera</option>' +
            '</select>' +
            '</td>' +					  
            //'<td>' +
            '<select class="custom-select custom-select-style d-none" id="category'+cont+'" name="category[]" required>' +
            '<option value="1">1</option>' +
            '<option value="2">2</option>' +
            '<option value="3">3</option>' +
            '<option value="4">4</option>' +
            '<option value="5">5</option>' +
            '</select>' +
            //'</td>' +
            '<!--<td><input class="form-control form-control-sm" type="number" id="series'+cont+'" name="series[]" min="1" value="1" required></td>-->' +
            '<td><input class="form-control form-control-sm styloMB" type="number" onChange="getEcosCalorias(' + cont + ')" id="reps'+cont+'" name="reps[]" min="1" value="" required></td>' +
            '<td>' +
            '<input class="form-control form-control-sm" type="number" id="time'+cont+'" name="time[]" min="0">' +
            '</td>' +					  
            '<td>' +
            '<select class="form-control-sm custom-select" id="time_metrica'+cont+'" name="time_metrica[]" onChange="getEcosCalorias(' + cont + ')" style="max-width:160px !important;">' +
            '<option value="1">Seg</option>' +
            '<option value="2">Min</option>' +
            '<option value="3">Hrs</option>' +
            '<option value="4">Mts</option>' +
            '<option value="5">Kms</option>' +
            '</select>' +
            '</td>' +					  
            '<td>' +
            '<select class="form-control-sm custom-select" id="zone'+cont+'" name="zone[]" onChange="getEcosCalorias(' + cont + ')" style="">' +
            '<option value="">Zona</option>' +
            '<option value="1">Zona 1</option>' +
            '<option value="2">Zona 2</option>' +
            '<option value="3">Zona 3</option>' +
            '<option value="4">Zona 4</option>' +
            '<option value="5">Zona 5</option>' +
            '<option value="6">Zona 6</option>' +
            '<option value="7">Zona 7</option>' +
            '<option value="8">Zona 8</option>' +
            '<option value="9">Zona 9</option>' +
            '<option value="10">Zona 10</option>' +
            '</select>' +
            '</td>' +					  
            '<td>' +
            '<input class="form-control form-control-sm styloMB" type="number" id="pause'+cont+'" name="pause[]" min="0">' +
            '</td>' +
            '<td>' +
            '<select class="form-control custom-select" id="pause_metrica'+cont+'" name="pause_metrica[]">' +
            '<option value="1">Min</option>' +
            '<option value="2">Seg</option>' +
            '</select>' +
            '</td>' +
			'<td>' +
			'<input type="text" id="consigna'+cont+'" name="consigna[]" class="form-control" placeholder="Ingrese consigna" autocomplete="off" value="" style="font-size:12px">'+
			'</td>' +
            '<td><input class="orden form-control form-control-sm" type="number" id="orden'+cont+'" name="orden[]" min="0" onChange="getEcosCalorias(' + cont + ')" required></td>' +
            '<td><input onclick="kcal_tot();" onkeyup="kcal_tot();" class="kcal form-control form-control-sm" type="number" value="0" id="kcal'+cont+'" name="kcal[]" min="0" step="1"></td>' +
            '<td><input onclick="ecos_tot()" onkeyup="ecos_tot()" class="ecos form-control form-control-sm styloMB" type="number" value="0" id="ecos'+cont+'" name="ecos[]" min="0" step="1"></td>' +
            '<td><button type="button" onclick="eliminarFila(' + cont +
            ');" class=" remove_line btn btn-danger btn-sm">x</button></td>' +
            '</tr>');
    });
    //$('.remove_line').click(DeleteRow);
    $('#ecos_0').click(function() {

        if ($(this).prop('checked')) {
            alert('ECOS = 0');
            $('.ecos').each(function() {
                $(this).val(0);
            });
        } else {
            //alert('ECOS sin valor');
            $(this).val('');
        }
        ecos_tot();
    });
    $('#exercise').keyup(function() {
        console.log('exercise');
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=circuitscircuit/getexercise",
            data: {
                word: $(this).val()
            },
            success: function(data) {
                console.log(data);
                document.getElementById('exercise').innerHTML = data;
            },
            error: function(data) {},
        });
    });
    $('#exer').keyup(function() {
        console.log('exercise');
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=circuitscircuit/getexercises",
            data: {
                word: $(this).val()
            },
            success: function(data) {
                console.log(data);
                //document.getElementById('exerList').innerHTML = data;
                $('#exerList').fadeIn();
                $('#exerList').html(data);
            },
            error: function(data) {},
        });
    });
    $('.liexerlist').click(function() {
        //console.log('liiiii')
        /*$('#exer').val($(this).text());
        $('#exerList').fadeOut();*/
    });
    $('#save').click(function() {
        swal({
            title: "Datos guardados",
            text: "",
            icon: "success",
            buttons: {
                confirm: {
                    text: "Confirmación",
                    value: true,
                    visible: true,
                    className: "btn btn-success",
                    closeModal: true
                }
            }
        });
        /*swal("Campos requeridos!", "" + errores, {
            icon: "warning",
            buttons: {
                confirm: {
                    className: 'btn btn-warning'
                }
            },
        });
        swal("Espere un momento", {
            buttons: false,
            timer: 3000,
        });*/
    })

			$.ajax({
			type: 'get',
			url: "/web/index.php?r=sessionsssession/getatletas",
			data: {"id":57},
			success: function(data) {
				document.getElementById('drills-profile_id').innerHTML = data;
			},
			error: function(data) {},
		});
	});

function DeleteRow() {
    $(this).parents('tr').first().remove();
}

function eliminarFila(index) {
    $("#fila_" + index).remove();
}

function getEcosCalorias3(_id) {
	//alert($("#exerid" + _id).val() + ' ' + $("#category" + _id).val() + ' ' + $("#series" + _id).val() + ' ' + $("#reps" + _id).val() + ' ');
	if($("#exerid" + _id).val()==""){
		$("#reps" + _id).val("");
		swal("Debe seleccionar un ejercicio", {
            buttons: false,
            timer: 1000,
        });
		return;
	}
	//alert($("#series" + _id).val());
	$.ajax({
        type: 'get',
        url: "/web/index.php?r=circuitscircuit/getecoscalorias",
        data: {
            //tipo: "ecos",
            ejercicio: $("#exerid" + _id).val(),
			categoria: $("#category" + _id).val(),
            serie: $("#series" + _id).val(),
			repeticiones: $("#reps" + _id).val(),
			
        },
        success: function(data) {
			//alert(data);
			var porciones = data.split('|');
			//ECOS
			$('#ecos'+ _id).val(porciones[0]);
            $('#ecos_tot').empty();
			var tot_ecos = 0;
			$('.ecos').each(function() {
				//alert($(this).val());
				tot_ecos += Number($(this).val());
				//alert(":"+tot_ecos);
			});
			tot_ecos= tot_ecos.toFixed(0);
			//alert(tot_ecos);
			$('#ecos_tot').append(tot_ecos);
			$('#circuitscircuit-total_ecos').val(tot_ecos);
			
			//KILOCALORIAS
			$('#kcal'+ _id).val(porciones[1]);
			 $('#kcal_tot').empty();
			var tot = 0;
			$('.kcal').each(function() {
				tot += Number($(this).val());
			});
			$('#kcal_tot').append('<br>' + tot);
			$('#circuitscircuit-total_calories').val(tot);
        },
        error: function(data) {},
    });
}

function getEcosCalorias(_id) {
	//alert($("#exerid" + _id).val() + ' ' + $("#category" + _id).val() + ' ' + $("#series" + _id).val() + ' ' + $("#reps" + _id).val() + ' ');
	if($("#exerid" + _id).val()==""){
		$("#reps" + _id).val("");
		swal("Debe seleccionar un ejercicio", {
            buttons: false,
            timer: 1000,
        });
		return;
	}
	
	var _iconoFE="C";
	var opcionVelocidadRitmo = "CARRERA";
	if($("#sport_id" + _id).val()=="1"){
		_iconoFE="B";
	}
	if($("#sport_id" + _id).val()=="2"){
		_iconoFE="N";
		opcionVelocidadRitmo = "NATACION";
	}
    var _series = 1;//$("#series" + _id).val();
	var _repeticiones = $("#reps" + _id).val();
	
	var zona = $("#zone" + _id).val();
	var minutosRepeticion = $("#time" + _id).val();
	var _distTiempoMetrica = $("#time_metrica" + _id).val();
	var distancia = $("#time" + _id).val();
	var minutosPausa = $("#pause" + _id).val();
	if(minutosPausa.trim()==""){
		minutosPausa=0;
	}
	var pause_type = $("#pause_metrica" + _id).val();
	var minutosRecuperacion = 0;
	var kmPorHr = 16.4;
	var _sport_id = $("#sport_id" + _id).val();
	
	//alert("DM: " + _distTiempoMetrica);
	if(zona=="" || minutosRepeticion=="" || minutosPausa=="" || _sport_id=="" || _repeticiones==""){
		console.log("sele");
		return;
	}
	
	if(pause_type=="2"){//para segundos
		minutosPausa = minutosPausa/60;
	}
	try{
		if(minutosPausa>0){
			minutosPausa = minutosPausa * _series;
		}
		if(minutosRecuperacion>0){
			minutosRecuperacion = minutosRecuperacion * _series;
		}
	}
	catch (err) {
		minutosPausa = 0;
		minutosRecuperacion = 0;
	}
	
	let i = 0;
	let _profileID = "57";
	_profileID = (_profileID == "0" ? 61 : _profileID);
	//alert(_repeticiones + '--' + minutosRepeticion + '--' + minutosPausa + '--' + minutosRecuperacion + '--' + opcionVelocidadRitmo + '--' + _distTiempoMetrica+ '--' + distancia+ '--' + kmPorHr);
	$.ajax({
		type: 'get',
		async: false,
		url: "/web/index.php?r=sessionsssession/getformulas",
		data: {
			"zona": zona,
			"iconoFE": _iconoFE,
			"series": _series,
			"repeticiones": _repeticiones,
			"minutosRepeticion": minutosRepeticion,
			"minutosPausa": minutosPausa,
			"minutosRecuperacion": minutosRecuperacion,
			"kmPorHr": kmPorHr,
			"distancia": distancia,
			"opcionVelocidadRitmo": opcionVelocidadRitmo,
			"distTiempoMetrica": _distTiempoMetrica,
			"ultimoBloqueAgregado": "Drills",
			"perfilID": _profileID
		},
		success: function(data) {
			var rows = JSON.parse(data);
			console.log(rows);
			var cantTemp = 0;
			if(rows[i]['errorDato']!=""){
				swal("" + rows[i]['errorDato'], {
					icon : "warning",
					buttons: {        			
						confirm: {
							className : 'btn btn-warning'
						}
					},
				});
			}

			/*_ppm = rows[i]['ppm'];
			_minKm= rows[i]['min_km'];

			_watts= rows[i]['potencia'];

			_min100= rows[i]['min_100'];
			_min400= rows[i]['min_400'];
			_minDist= rows[i]['min_dist'];
			_factorEjer= rows[i]['FactorEjerccion'];
			_factorInten= rows[i]['FactorIntensidad'];
			_duracionEjercicio= rows[i]['duracionEjercicio'];
			_average= rows[i]['average'];
			_totalMinutosPausa= rows[i]['totalMinutosPausa'];
			_minutosEjercicio= rows[i]['minutosEjercicio'];
			*/
			var _ecosTotales= rows[i]['ECOsTotal'];
			var _calories= rows[i]['calories_minuto'];
			try {
				_calories = _calories.replace(",", "");
			}
			catch (err) {
			}
			//alert(_ecosTotales + " || " + _calories);
			var porciones = null;//data.split('|');
			//ECOS
			$('#ecos'+ _id).val(Number(_ecosTotales));
            $('#ecos_tot').empty();
			var tot_ecos = 0;
			$('.ecos').each(function() {
				//alert($(this).val());
				tot_ecos += Number($(this).val());
				//alert(":"+tot_ecos);
			});
			tot_ecos= tot_ecos.toFixed(0);
			//alert(tot_ecos);
			$('#ecos_tot').append(tot_ecos);
			$('#drills-total_ecos').val(tot_ecos);
			
			//KILOCALORIAS
			$('#kcal'+ _id).val(_calories);
			 $('#kcal_tot').empty();
			var tot = 0;
			$('.kcal').each(function() {
				tot += Number($(this).val());
			});
			$('#kcal_tot').append('' + tot);
			$('#drills-total_calories').val(tot);
			
		},
		error: function(data) {
			alert("error drill ->>" + data);
		},

	});
	/*
	$.ajax({
        type: 'get',
        url: "/web/index.php?r=circuitscircuit/getecoscalorias",
        data: {
            //tipo: "ecos",
            ejercicio: $("#exerid" + _id).val(),
			categoria: 1,
            serie: $("#series" + _id).val(),
			repeticiones: $("#reps" + _id).val(),
			
        },
        success: function(data) {
			//alert(data);
			var porciones = data.split('|');
			//ECOS
			$('#ecos'+ _id).val(porciones[0]);
            $('#ecos_tot').empty();
			var tot_ecos = 0;
			$('.ecos').each(function() {
				//alert($(this).val());
				tot_ecos += Number($(this).val());
				//alert(":"+tot_ecos);
			});
			tot_ecos= tot_ecos.toFixed(0);
			//alert(tot_ecos);
			$('#ecos_tot').append(tot_ecos);
			$('#drills-total_ecos').val(tot_ecos);
			
			//KILOCALORIAS
			$('#kcal'+ _id).val(porciones[1]);
			 $('#kcal_tot').empty();
			var tot = 0;
			$('.kcal').each(function() {
				tot += Number($(this).val());
			});
			$('#kcal_tot').append('' + tot);
			$('#drills-total_calories').val(tot);
        },
        error: function(data) {},
    });*/
}

function getEcosCaloriasAnterios(_id) {
	//alert($("#exerid" + _id).val() + ' ' + $("#category" + _id).val() + ' ' + $("#series" + _id).val() + ' ' + $("#reps" + _id).val() + ' ');
	if($("#exerid" + _id).val()==""){
		$("#reps" + _id).val("");
		swal("Debe seleccionar un ejercicio", {
            buttons: false,
            timer: 1000,
        });
		return;
	}
	
	$.ajax({
        type: 'get',
        url: "/web/index.php?r=circuitscircuit/getecoscalorias",
        data: {
            //tipo: "ecos",
            ejercicio: $("#exerid" + _id).val(),
			categoria: 1,
            serie: $("#series" + _id).val(),
			repeticiones: $("#reps" + _id).val(),
			
        },
        success: function(data) {
			//alert(data);
			var porciones = data.split('|');
			//ECOS
			$('#ecos'+ _id).val(porciones[0]);
            $('#ecos_tot').empty();
			var tot_ecos = 0;
			$('.ecos').each(function() {
				//alert($(this).val());
				tot_ecos += Number($(this).val());
				//alert(":"+tot_ecos);
			});
			tot_ecos= tot_ecos.toFixed(0);
			//alert(tot_ecos);
			$('#ecos_tot').append(tot_ecos);
			$('#drills-total_ecos').val(tot_ecos);
			
			//KILOCALORIAS
			$('#kcal'+ _id).val(porciones[1]);
			 $('#kcal_tot').empty();
			var tot = 0;
			$('.kcal').each(function() {
				tot += Number($(this).val());
			});
			$('#kcal_tot').append('' + tot);
			$('#drills-total_calories').val(tot);
        },
        error: function(data) {},
    });
}
	
function ecos_tot() {
    $('#ecos_tot').empty();
    tot_ecos = 0;
    $('.ecos').each(function() {
        tot_ecos += Number($(this).val());
    });
    $('#ecos_tot').append(tot_ecos);
    $('#drills-total_ecos').val(tot_ecos);
    console.log(tot_ecos);
}

function kcal_tot() {
    $('#kcal_tot').empty();
    tot = 0;
    $('.kcal').each(function() {
        tot += Number($(this).val());
    });
    $('#kcal_tot').append('' + tot);
    $('#drills-total_calories').val(tot);
    console.log(tot);
}

function getE(id_exer) {
    console.log('exercise');
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=circuitscircuit/getexercises",
        data: {
            word: $('#exer' + id_exer).val(),
            index: id_exer,
        },
        success: function(data) {
            console.log(data);
            //document.getElementById('exerList').innerHTML = data;
            $('#exerList' + id_exer).fadeIn();
            $('#exerList' + id_exer).html(data);
        },
        error: function(data) {},
    });
}

function clickli(id_exer, item, category, id) {
    $('#exer' + id_exer).val($('#li_item_' + id_exer + '_' + item).text());
    $('#category' + id_exer).val(category);
    $('#exerList' + id_exer).fadeOut();
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=circuitscircuit/getimgexercises",
        data: {
            index: id,
        },
        success: function(data) {
            //alert(id_exer);
            //document.getElementById('exerList').innerHTML = data;
            $("#image" + id_exer).attr("src", "../../media/" + data + "");
            $("#exerid" + id_exer).val(id);
            //$('#exerList' + id_exer).html(data);
        },
        error: function(data) {},
    });

}
function eliminarFila(index) {
    $("#fila_" + index).remove();
}

function confirmDelete(){
		var key = "MDZHT3hpOTk0dWxlcWZWbDBOV1lpUT09"; 
		var token = "";
		
        alertify.confirm('Confirmación', 'Seguro que desea eliminar el registro', 
            function(){
                $.ajax({
                     type: 'POST',
                     url: "index.php?r=drills/delete",
                     data:{key:key, token:token},
                     success:function(bool){
						 //console.log('success '+bool);
                        if (bool == true){
                            alertify.success('<span style="color: #FFFFFF;"><i class="fa fa-trash" aria-hidden="true"></i> &nbsp;&nbsp;Registro eliminado<br> Espere un momento...</span>', 2 , function (){
								window.location.href = "index.php?r=drills/index&del=true"; 
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
if (jQuery('#drills-profile_id').data('select2')) { jQuery('#drills-profile_id').select2('destroy'); }
jQuery.when(jQuery('#drills-profile_id').select2(select2_e6279efa)).done(initS2Loading('drills-profile_id','s2options_d6851687'));

jQuery('#w0').yiiActiveForm([{"id":"drills-name","name":"name","container":".field-drills-name","input":"#drills-name","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Name no puede estar vacío."});yii.validation.string(value, messages, {"message":"Name debe ser una cadena de caracteres.","max":255,"tooLong":"Name debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"drills-profile_id","name":"profile_id","container":".field-drills-profile_id","input":"#drills-profile_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/,"message":"Perfil debe ser un número.","skipOnEmpty":1});}},{"id":"drills-specific_organization","name":"specific_organization","container":".field-drills-specific_organization","input":"#drills-specific_organization","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.string(value, messages, {"message":"Organización especifica debe ser una cadena de caracteres.","skipOnEmpty":1});}},{"id":"drills-general_organization","name":"general_organization","container":".field-drills-general_organization","input":"#drills-general_organization","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.string(value, messages, {"message":"Organización general debe ser una cadena de caracteres.","skipOnEmpty":1});}},{"id":"drills-total_ecos","name":"total_ecos","container":".field-drills-total_ecos","input":"#drills-total_ecos","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Total Ecos debe ser un número entero.","skipOnEmpty":1});}},{"id":"drills-total_calories","name":"total_calories","container":".field-drills-total_calories","input":"#drills-total_calories","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/,"message":"Total Calories debe ser un número.","skipOnEmpty":1});}},{"id":"drills-updated_at","name":"updated_at","container":".field-drills-updated_at","input":"#drills-updated_at","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Updated At no puede estar vacío."});}}], []);
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