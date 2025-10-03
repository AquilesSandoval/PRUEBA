var s2options_d6851687 = {"themeCss":".select2-container--krajee","sizeCss":"","doReset":true,"doToggle":false,"doOrder":false};
window.select2_e6279efa = {"allowClear":true,"minimumInputLength":3,"language":{"errorLoading":function () { return 'No se encontraron datos'; }},"ajax":{"url":"\/web\/index.php?r=sessionsssession\/getcitylist","dataType":"json","data":function(params) { return {q:params.term}; }},"escapeMarkup":function (markup) { return markup; },"templateResult":function(city) { return city.text; },"templateSelection":function (city) { return city.text; },"theme":"krajee","width":"100%","placeholder":"Escribe almenos 3 caracteres para buscar..."};

function confirmDeleteRep(_id, _type){
		//_type =  1=ergoespirometrico		2=lactato
		alertify.confirm('Confirmación', 'Seguro que desea eliminar el registro', 
            function(){
                $.ajax({
                     type: 'get',
                     url: "index.php?r=reportsfolder/deletereporte",
                     data:{_id:_id, _type: _type},
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
	
	$("#btnVincular").click(function(){
		if($("#reportsfolder-athlete_id").val()==""){
			swal({
				title: "Debe seleccionar un atleta para vincular",
				text: "Alerta!",
				icon: "warning",
				buttons: false,
				timer: 3000
			});
			return;
		}
		
		$.ajax({
			type: 'get',
			url: "/web/index.php?r=reportsfolder/vicularatleta",
			data: {
				"athleteID": $("#reportsfolder-athlete_id").val(),
				"reportID": 671			},
			success: function(data) {
				if(data=="Exito"){
					swal({
						title: "Atleta vinculado correctamente!",
						text: "Exito!",
						icon: "success",
						buttons: false,
						timer: 3000
					});
				}
			},
			error: function(data) {},
		});
	});
	
	$(document).ready(function() {
					$.ajax({
				type: 'get',
				url: "/web/index.php?r=sessionsssession/getatletas",
				data: {
					"id": 146				},
				success: function(data) {
					document.getElementById('reportsfolder-athlete_id').innerHTML = data;
				},
				error: function(data) {},
			});
			});

function confirmDelete(){
		var key = "bS9YN081Q2FyRDMxaUU4TXFUaWF3QT09"; 
		var token = "";
		
        alertify.confirm('Confirmación', 'Seguro que desea eliminar el registro?', 
            function(){
                $.ajax({
                     type: 'POST',
                     url: "index.php?r=reportsfolder/delete",
                     data:{key:key, token:token},
                     success:function(bool){
						 //console.log('success '+bool);
                        if (bool == true){
                            alertify.success('<span style="color: #FFFFFF;"><i class="fa fa-trash" aria-hidden="true"></i> &nbsp;&nbsp;Registro eliminado. Espere un momento...</span>', 2 , function (){
								window.location.href = "index.php?r=reportsfolder/index&del=true"; 
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
if (jQuery('#reportsfolder-athlete_id').data('select2')) { jQuery('#reportsfolder-athlete_id').select2('destroy'); }
jQuery.when(jQuery('#reportsfolder-athlete_id').select2(select2_e6279efa)).done(initS2Loading('reportsfolder-athlete_id','s2options_d6851687'));

jQuery('#w0').yiiActiveForm([{"id":"reportsfolder-athlete_id","name":"athlete_id","container":".field-reportsfolder-athlete_id","input":"#reportsfolder-athlete_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"ID Atleta debe ser un número entero.","skipOnEmpty":1});}}], []);
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