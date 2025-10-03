$(document).ready(function(){
	 
	 $('.submitFormBtn').click(function(){
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
					//alert(form.elements[i].name);
					if(form.elements[i].name=="Circuitscircuit[name]"){
						//errores += "> Nombre del circuito\n";
						//alert(form.elements[i].name);
					}
					if(form.elements[i].name=="")
						errores += errores += "> Nombre del Ejercicio\n";
					
					if(form.elements[i].name=="reps[]")
						errores += "> Repeticiones\n";
					
					if(form.elements[i].name=="orden[]")
						errores += "> Orden\n";
					
					dtClear ++;
				 }
			}
			
			if(dtClear == 0){
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
				if($("#circuitscircuit-name").val()=="") 
					errores = "> Nombre del circuito\n" + errores;
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
        }
	
	
		$('.submitFormBtn').parents('form').on('afterValidate', function (event, messages, errorAttributes) {				
			if(errorAttributes.length > 0) {
				$('.submitFormBtn').show();
				$('.submitFormBtnBlock').hide();
			}
		});
	});
	
});
$(document).ready(function() {
    cont = 0;
    cont = 8;
    $("#add_line").click(function() {
        //cont = cont + 1;
        console.log(cont);
        $("#circuits_items>tbody").append('<tr id="fila_' + cont + '">' +
            '<td><div><img id="image' + cont +
            '" src="require/img/race-blue-icon.png" style="border-radius:18px; position:relative;" width="45px" height="45px" /></div></td>' +
            '<td>' +
            '<input type="text" id="exer' + cont + '" onkeyup="getE(' +
            cont +
            ');" class="form-control" placeholder="Ingrese ejercicio" autocomplete="off" required> <div id="exerList' +
            cont + '"> </div>' +
            '<input type="hidden" id="exerid' + cont + '" name="exer[]">' +
            '</td>' +
            '<td><select class="custom-select custom-select-style" id="category' + cont +
            '" name="category[]" required>' +
            '<option value="1">1</option>' +
            '<option value="2">2</option>' +
            '<option value="3">3</option>' +
            '<option value="4">4</option>' +
            '<option value="5">5</option>' +
            '</select></td>' +
            '<td><input class="form-control form-control-sm" type="number" id="series'+cont+'" name="series[]" min="1" value="1" required></td>' +
            '<td>x</td>' +
            '<td><input class="form-control form-control-sm" type="number" onChange="getEcosCalorias(' + cont + ')" id="reps'+cont+'" name="reps[]" min="1" value="1" required></td>' +
            '<td><input class="form-control form-control-sm" type="number" name="rir[]" min="0"></td>' +
            '<td><input class="form-control form-control-sm" type="text" name="peso_otros[]"></td>' +
            '<td><select class="custom-select custom-select-style" id="" name="velocidad[]" required>' +
            '<option value="1">Controlada</option>' +
            '<option value="2">Máxima al subir</option>' +
            '<option value="3">1s subir, 1s bajar</option>' +
            '<option value="4">1s subir, 2s bajar</option>' +
            '<option value="5">Max subir/bajar 2"</option>' +
            '<option value="6">N/A</option>' +
            '</select>' +
            '</td>' +
            '<td><input onclick="kcal_tot();" onkeyup="kcal_tot();" class="kcal form-control form-control-sm" type="number" id="kcal'+cont+'" name="kcal[]" min="0" step="0.01" required></td>' +
            '<td><input class="orden form-control form-control-sm" type="number" name="orden[]" min="0" required></td>' +
            '<td><input onclick="ecos_tot()" onkeyup="ecos_tot()" class="ecos form-control form-control-sm" type="number" id="ecos'+cont+'" name="ecos[]" min="0" required></td>' +
            '<td><button type="button" onclick="eliminarFila(' + cont +
            ');" class=" remove_line btn btn-danger btn-sm">x</button></td>' +
            '</tr>');
            cont+=1;
    });
    //$('.remove_line').click(DeleteRow);
    $('#ecos_0').click(function() {

        if ($(this).prop('checked')) {
            alert('ECOS = 0');
            $('.ecos').each(function() {
                $(this).val(0);
            });
        } else {
            alert('ECOS sin valor');
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
    })
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

});

function DeleteRow() {
    $(this).parents('tr').first().remove();
}

function eliminarFila(index) {
    $("#fila_" + index).remove();
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

function ecos_tot() {
    $('#ecos_tot').empty();
    tot_ecos = 0;
    $('.ecos').each(function() {
        tot_ecos += Number($(this).val());
    });
    $('#ecos_tot').append(tot_ecos);
    $('#circuitscircuit-total_ecos').val(tot_ecos);
    console.log(tot_ecos);
}

function kcal_tot() {
    $('#kcal_tot').empty();
    tot = 0;
    $('.kcal').each(function() {
        tot += Number($(this).val());
    });
    $('#kcal_tot').append('<br>' + tot);
    $('#circuitscircuit-total_calories').val(tot);
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
            console.log(data);
            //document.getElementById('exerList').innerHTML = data;
            $("#image" + id_exer).attr("src", "../../media/" + data + "");
            $("#exerid" + id_exer).val(id);
            //$('#exerList' + id_exer).html(data);
        },
        error: function(data) {},
    });

}

function confirmDelete() {
    var key = "SHlXQk1MaGVMVzdIQ1lGbFpSU0lFdz09";
    var token = "";

    alertify.confirm(
        'Confirmación',
        'Seguro que desea eliminar el registro?',
        function() {
            $.ajax({
                type: 'POST',
                url: "index.php?r=circuitscircuit/delete",
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
                                window.location.href = "index.php?r=circuitscircuit/index&del=true";
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

jQuery(function ($) {
jQuery('#w0').yiiActiveForm([{"id":"circuitscircuit-status","name":"status","container":".field-circuitscircuit-status","input":"#circuitscircuit-status","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Estado no puede estar vacío."});yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Estado debe ser un número entero.","skipOnEmpty":1});}},{"id":"circuitscircuit-updated_at","name":"updated_at","container":".field-circuitscircuit-updated_at","input":"#circuitscircuit-updated_at","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Updated At no puede estar vacío."});}}], []);
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