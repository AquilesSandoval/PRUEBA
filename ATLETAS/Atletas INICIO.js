function activarEmergencia(_id, _action, user) {
		alertify.confirm(
            'Confirmación', (_action==1 ? 'Si activa esta opción, el usuario podrá consultar los contactos de emergencia de los atletas desde la APP' : '¿Realmente desea desactivar la consulta de contactos de emergencia para este usuario?'),
            function() {
                $.ajax({
                    type: 'GET',
                    url: "index.php?r=athletesathlete/activaemergencia",
                    data: {
                        userid: _id,
						activarDesactivar: _action
                    },
                    success: function(bool) {
                        //console.log('success '+bool);
                        if (bool == true) {
							swal("Registro guardado correctamente", {
                                icon: "success",
                                //buttons: false,
                                timer: 5000,
                            }).then((result) => {
								location.reload();
							});
                        } else {
							swal("Ocurrio un error, intenta de nuevo", {
								icon: "error",
								//buttons: false,
								timer: 5000,
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

    function confirmDelete(key, token){

        alertify.confirm('Confirmación', 'Seguro que desea eliminar el registro', 

            function(){

                $.ajax({

                     type: 'get',

                     url: "index.php?r=athletesathlete/delete",

                     data:{key:key, token:token},

                     success:function(bool){

						 //console.log('success '+bool);

                        if (bool == true){

                            alertify.success('<span style="color: #FFFFFF;"><i class="fa fa-trash" aria-hidden="true"></i> &nbsp;&nbsp;Registro eliminado. Espere un momento...</span>', 2 , function (){location.reload(); }); 

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
$(document).ready(function() {
	$('.toggle-select').on('change', function() {
		//alert(this.value);
		$.ajax({
			 type: 'GET',
			 url: "index.php?r=athletesathlete/updatestatus",
			 data:{key:$(this).data('key'), status:this.value},
			 success:function(bool){
				if (bool == true){
					/*swal("Registro actualizado", "Espere un momento ...", {
						icon: "success",
						buttons: {
							confirm: {
								className: 'btn btn-success'
							}
						},
						timer: 1500,
					}).then((result) => {
						//if (result.isConfirmed) {}
						location.reload();
					});*/
					alertify.success('<span style="color: #FFFFFF;"><i class="fa fa-trash" aria-hidden="true"></i> &nbsp;&nbsp;Registro actualizado. Espere un momento...</span>', 2 , function (){/*location.reload();*/}); 
				}else{
					alertify.error('<span style="color: #FFFFFF;">Ocurrio un error, intenta de nuevo</span>', 2 , function (){location.reload(); }); 
				}
			 },
			 error: function(data){ 
				// console.log('error '+data);
				alertify.error('<span style="color: #FFFFFF;">Ocurrio un error, intenta de nuevo</span>', 2 , function (){location.reload(); }); 
			 },
		});
	});
	
    $('.toggle-label').on('click', function() {
        var checkboxId = $(this).attr('for');
        var checkbox = $('#' + checkboxId);
		//alert(checkbox.prop('checked'));
        $("#option13").prop('checked', !checkbox.prop('checked'));
        //alert(checkbox.prop('checked'));
		//$("#option13").removeProp("checked");
        if (checkbox.prop('checked')) {
            $(this).addClass('active');
			$('#label-' + checkboxId).html("Si");
			$('#label-' + checkboxId).css('color', 'white');
        } else {
            $(this).removeClass('active');
			$(this).css('background-color', '#ddd');
			$(this).css('border-color', '#ccc');
			$('#label-' + checkboxId).html("No");
			$('#label-' + checkboxId).css('color', 'black');
        }
    });
});

jQuery(function ($) {
jQuery('#w0').yiiGridView({"filterUrl":"\/web\/index.php?r=athletesathlete\/index","filterSelector":"#w0-filters input, #w0-filters select","filterOnFocusOut":true});
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