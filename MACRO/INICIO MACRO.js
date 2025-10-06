function modalMove(_id, _cp, _name){
	$('#hddMesoID').val(_id);
	$('#hddfolderID').val(_cp);
	$(".rowPaso3").hide();
	$('#modalCopy').modal('show');
	$("#hddAccion").val("Mover");
	$("#spanTitleCopyMove").html("Mover mesociclo " + _name);
}

function modalCopy(_id, _cp, _name){
	$('#hddMesoID').val(_id);
	$('#hddfolderID').val(_cp);
	$(".rowPaso3").show();
	$('#modalCopy').modal('show');
	$("#hddAccion").val("Copiar");
	$("#spanTitleCopyMove").html("Copiar mesociclo " + _name);
}

	$('#txtBuscar').keydown(function (e) {
		if (e.keyCode == 13) {
			$('#btnBuscar').click();
		  	return false;
		}
		else if (e.ctrlKey) {
			return false;
		}
	});
    
	$('#btnBuscar').click(function() {
		$('#btnPrevisualizar').hide();
        let sel = $('#txtBuscar').val();
		if(sel.trim()==""){
			swal("Campos requeridos!", "Debe escribir almenos 3 caráteres para buscar", {
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
				url: "/web/index.php?r=mesocyclesmesocycle/getfolder",
				data: {
					"type" : "MESO",
					"word": sel
				},
				success: function(data) {
					document.getElementById('folder_select').innerHTML = data;
				},
				error: function(data) {},
			});
		}
    });
	
	$('#folder_select').change(function() {
		$('#btnCopiar').addClass("d-none");
		$('#btnMover').addClass("d-none");
		if(this.value != ""){
			if($("#hddAccion").val()=="Mover"){
				validaMover(false);

				$('#btnMover').removeClass("d-none");
			}
			else{
				if(validaMover(false)){
					$('#btnCopiar').removeClass("d-none");
				}
			}
		}
	});
	
	function validaMover(_msg){
		$('#btnCopiar').addClass("d-none");
		$('#btnMover').addClass("d-none");
		var valida= false;
		var errores="";
		var dtClear= 0;

		if($('#folder_select').val()=="") {errores += "> Seleccione una carpeta\n"; dtClear ++;}

		if(dtClear==0){
			valida=true;
		}
		//alert(valida);
		if(valida){
			//$('#btnCopiar').removeClass("d-none");
			return true;
		}
		else{
			if(_msg){
				swal("Campos requeridos!", "" + errores, {
					icon : "warning",
					buttons: {        			
						confirm: {
							className : 'btn btn-warning'
						}
					},
				});
			}
			return false;
		}
	}
	
	
function dup() {
	var valida= false;
	if($('#folder_select').val()!="" && $('#hddMesoID').val()!=""){
		 valida= true;
	}
	else{
		swal("Campos requeridos!", "Seleccione un circuito", {
			icon : "warning",
			buttons: {        			
				confirm: {
					className : 'btn btn-warning'
				}
			},
		});
	}
	
	//valida = validaMover(true);
		
	if(valida){
		alertify.confirm(
		'Confirmación',
		'¿Seguro que desea duplicar el registro?',
		function() {
			swal("Espere un momento. Cargando...", {
				buttons: false,
				timer: 3000,
			});

			var origen_id = $('#hddMesoID').val() + '_';
			var folderOrigenID = $('#hddfolderID').val();
			var folderDestinoID = $('#folder_select').val();
			var _name = $('#txtName').val();
			
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=mesocyclesmesocycle/mesodup",
				data: {
					"origen_id": origen_id,
					"folderOrigenID": folderOrigenID,
					"folderDestinoID": folderDestinoID,
					"name" : _name,
					"type" : "MESO",
					"option" : 2, //mesociclo
				},
				success: function(data) {
					console.log(data);
					if(data=="Exito"){
						swal("Mesociclo copiado correctamente", "", {
							icon : "success",
							buttons: {        			
								confirm: {
									className : 'btn btn-warning'
								}
							},
						}).then(
						function() {
							location.reload();
						}
						);
					}
					else{
						swal("Error!", "" + data, {
							icon : "error",
							buttons: {        			
								confirm: {
									className : 'btn btn-warning'
								}
							},
						});
					}
				},
				error: function(data) {},
			});
		},
		function() {});
	}
}
	
	
function move() {
	var valida= false;
	if($('#folder_select').val()!="" && $('#hddMesoID').val()!=""){
		 valida= true;
	}
	else{
		swal("Campos requeridos!", "Seleccione un circuito", {
			icon : "warning",
			buttons: {        			
				confirm: {
					className : 'btn btn-warning'
				}
			},
		});
	}
	if(valida){
		alertify.confirm(
		'Confirmación',
		'¿Seguro que desea mover el registro?',
		function() {
			swal("Espere un momento. Cargando...", {
				buttons: false,
				timer: 3000,
			});

			var origen_id = $('#hddMesoID').val();
			var folderOrigenID = $('#hddfolderID').val();
			var folderDestinoID = $('#folder_select').val();
			
			$.ajax({
				type: 'get',
				url: "/web/index.php?r=mesocyclesmesocycle/mesomove",
				data: {
					"origen_id": origen_id,
					"folderOrigenID": folderOrigenID,
					"folderDestinoID": folderDestinoID,
				},
				success: function(data) {
					console.log(data);
					if(data=="Exito"){
						swal("El mesociclo fué movido correctamente", "", {
							icon : "success",
							buttons: {        			
								confirm: {
									className : 'btn btn-warning'
								}
							},
						}).then(
						function() {
							location.reload();
						}
						);
					}
					else{
						swal("Error!", "" + data, {
							icon : "error",
							buttons: {        			
								confirm: {
									className : 'btn btn-warning'
								}
							},
						});
					}
				},
				error: function(data) {},
			});
		},
		function() {});
	}
}
	
function confirmDelete(key, token) {
    alertify.confirm('Confirmación', 'Seguro que desea eliminar el registro',
        function() {
            $.ajax({
                type: 'POST',
                url: "index.php?r=mesocyclesmesocycle/delete",
                data: {
                    key: key,
                    token: token
                },
                success: function(bool) {
                    //console.log('success '+bool);
                    if (bool == true) {
                        alertify.success(
                            '<span style="color: #FFFFFF;"><i class="fa fa-trash" aria-hidden="true"></i> &nbsp;&nbsp;Registro eliminado<br>Espere un momento...</span>',
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

jQuery(function ($) {
jQuery('#w0').yiiGridView({"filterUrl":"\/web\/index.php?r=mesocyclesfolder\/macrociclo","filterSelector":"#w0-filters input, #w0-filters select","filterOnFocusOut":true});
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