var s2options_d6851687 = {"themeCss":".select2-container--krajee","sizeCss":"","doReset":true,"doToggle":false,"doOrder":false};
window.select2_110cffd1 = {"allowClear":true,"theme":"krajee","width":"100%","placeholder":" --- Selecciona--- ","language":"es"};

$(document).ready(function() {
	
	$("#athletesathlete-email").focus();
	//$('.save_b').attr("disabled", true);
    $('.save_b').click(function() {
        let email = $("#athletesathlete-email").val();
		let pass = $("#pass").val();
		let id='118';
        if (!isValidEmail(email)) {
            swal("Email invalido", {
                icon: "error",
                //buttons: false,
                timer: 5000,
            });
            //$('.save_b').attr("disabled", true);
			$('#athletesathlete-email').val('');
        } else {
			if(pass==""){
				swal("Debe escribir una contraseña", {
					icon: "error",
					//buttons: false,
					timer: 5000,
				});
			}
            else if (email != '') {
                $.ajax({
                    type: 'get',
                    url: "/web/index.php?r=athletesathlete/obtainemail",
                    data: {
                        "email": email,
						"id":id,
                    },
                    success: function(data) {
                        console.log(data);
                        if (data == 'Existe') {
                            swal("Correo registrado, intente con otro", {
                                icon: "error",
                                //buttons: false,
                                timer: 5000,
                            });
                            $('#athletesathlete-email').val('');
                            //$('.save_b').attr("disabled", true)
                        } else {
                            /*swal("Email disponible", {
                                icon: "success",
                                buttons: false,
                                timer: 2000,
                            });*/
                            //$('.save_b').attr("disabled", false)
							$('#w0').submit();
                        }


                    },
                    error: function(data) {
                        swal("Ha ocurrido un error inesperado", {
                            icon: "error",
                            //buttons: false,
                            timer: 5000,
                        });
                    },
                });
            }
        }


    });
	//$('#athletesathlete-email').change()
	
});

function isValidEmail(emailText) {
    var pattern = new RegExp(
        /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
    );
    return pattern.test(emailText);
};

function confirmDelete(){
		var key = "M2lua05hTTJSdVNTVnNwdnJOTG85UT09"; 
		var token = "";
		
        alertify.confirm('Confirmación', 'Seguro que desea eliminar el registro', 
            function(){
                $.ajax({
                     type: 'POST',
                     url: "index.php?r=athletesathlete/delete",
                     data:{key:key, token:token},
                     success:function(bool){
						 //console.log('success '+bool);
                        if (bool == true){
                            alertify.success('<span style="color: #FFFFFF;"><i class="fa fa-trash" aria-hidden="true"></i> &nbsp;&nbsp;Registro eliminado. Espere un momento...</span>', 2 , function (){
								window.location.href = "index.php?r=athletesathlete/index&del=true"; 
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
if (jQuery('#athletesathlete-sport_id').data('select2')) { jQuery('#athletesathlete-sport_id').select2('destroy'); }
jQuery.when(jQuery('#athletesathlete-sport_id').select2(select2_110cffd1)).done(initS2Loading('athletesathlete-sport_id','s2options_d6851687'));

if (jQuery('#athletesathlete-contract_type_id').data('select2')) { jQuery('#athletesathlete-contract_type_id').select2('destroy'); }
jQuery.when(jQuery('#athletesathlete-contract_type_id').select2(select2_110cffd1)).done(initS2Loading('athletesathlete-contract_type_id','s2options_d6851687'));

jQuery('#w0').yiiActiveForm([{"id":"athletesathlete-first_name","name":"first_name","container":".field-athletesathlete-first_name","input":"#athletesathlete-first_name","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Nombre(s) no puede estar vacío."});yii.validation.string(value, messages, {"message":"Nombre(s) debe ser una cadena de caracteres.","max":255,"tooLong":"Nombre(s) debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-last_name","name":"last_name","container":".field-athletesathlete-last_name","input":"#athletesathlete-last_name","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Apellidos no puede estar vacío."});yii.validation.string(value, messages, {"message":"Apellidos debe ser una cadena de caracteres.","max":255,"tooLong":"Apellidos debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-birthday","name":"birthday","container":".field-athletesathlete-birthday","input":"#athletesathlete-birthday","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Fecha Nacimiento no puede estar vacío."});yii.validation.string(value, messages, {"message":"Fecha Nacimiento debe ser una cadena de caracteres.","max":255,"tooLong":"Fecha Nacimiento debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-company","name":"company","container":".field-athletesathlete-company","input":"#athletesathlete-company","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.string(value, messages, {"message":"Empresa debe ser una cadena de caracteres.","max":255,"tooLong":"Empresa debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-email","name":"email","container":".field-athletesathlete-email","input":"#athletesathlete-email","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Correo no puede estar vacío."});yii.validation.string(value, messages, {"message":"Correo debe ser una cadena de caracteres.","max":255,"tooLong":"Correo debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-contact","name":"contact","container":".field-athletesathlete-contact","input":"#athletesathlete-contact","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Telefono no puede estar vacío."});yii.validation.string(value, messages, {"message":"Telefono debe ser una cadena de caracteres.","max":255,"tooLong":"Telefono debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-form","name":"form","container":".field-athletesathlete-form","input":"#athletesathlete-form","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Forma debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesathlete-fatigue","name":"fatigue","container":".field-athletesathlete-fatigue","input":"#athletesathlete-fatigue","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Fatiga debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesathlete-recovery","name":"recovery","container":".field-athletesathlete-recovery","input":"#athletesathlete-recovery","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Recuperación debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesathlete-default_c_zona_carrera","name":"default_c_zona_carrera","container":".field-athletesathlete-default_c_zona_carrera","input":"#athletesathlete-default_c_zona_carrera","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.string(value, messages, {"message":"Default Control Zonas para Carrera debe ser una cadena de caracteres.","max":255,"tooLong":"Default Control Zonas para Carrera debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-default_c_zona_natacion","name":"default_c_zona_natacion","container":".field-athletesathlete-default_c_zona_natacion","input":"#athletesathlete-default_c_zona_natacion","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.string(value, messages, {"message":"Default Control Zonas para Natación debe ser una cadena de caracteres.","max":255,"tooLong":"Default Control Zonas para Natación debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-default_c_zona_ciclismo","name":"default_c_zona_ciclismo","container":".field-athletesathlete-default_c_zona_ciclismo","input":"#athletesathlete-default_c_zona_ciclismo","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.string(value, messages, {"message":"Default Control Zonas para Ciclismo debe ser una cadena de caracteres.","max":255,"tooLong":"Default Control Zonas para Ciclismo debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-sport_id","name":"sport_id","container":".field-athletesathlete-sport_id","input":"#athletesathlete-sport_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Deporte debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesathlete-contract_type_id","name":"contract_type_id","container":".field-athletesathlete-contract_type_id","input":"#athletesathlete-contract_type_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Tipo de contrato debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesathlete-activoatleta","name":"activoAtleta","container":".field-athletesathlete-activoatleta","input":"#athletesathlete-activoatleta","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.boolean(value, messages, {"trueValue":"1","falseValue":"0","message":"1 debe ser \"1\" o \"0\".","skipOnEmpty":1});}},{"id":"athletesathlete-contacto_emergencia","name":"contacto_emergencia","container":".field-athletesathlete-contacto_emergencia","input":"#athletesathlete-contacto_emergencia","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.string(value, messages, {"message":"Contacto emergencia debe ser una cadena de caracteres.","max":255,"tooLong":"Contacto emergencia debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-telefono_emergencia","name":"telefono_emergencia","container":".field-athletesathlete-telefono_emergencia","input":"#athletesathlete-telefono_emergencia","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.string(value, messages, {"message":"Telefono emergencia debe ser una cadena de caracteres.","max":255,"tooLong":"Telefono emergencia debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-parentesco","name":"parentesco","container":".field-athletesathlete-parentesco","input":"#athletesathlete-parentesco","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.string(value, messages, {"message":"Parentesco debe ser una cadena de caracteres.","max":255,"tooLong":"Parentesco debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-contacto_emergencia2","name":"contacto_emergencia2","container":".field-athletesathlete-contacto_emergencia2","input":"#athletesathlete-contacto_emergencia2","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.string(value, messages, {"message":"Contacto emergencia debe ser una cadena de caracteres.","max":255,"tooLong":"Contacto emergencia debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-telefono_emergencia2","name":"telefono_emergencia2","container":".field-athletesathlete-telefono_emergencia2","input":"#athletesathlete-telefono_emergencia2","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.string(value, messages, {"message":"Telefono emergencia debe ser una cadena de caracteres.","max":255,"tooLong":"Telefono emergencia debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-parentesco2","name":"parentesco2","container":".field-athletesathlete-parentesco2","input":"#athletesathlete-parentesco2","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.string(value, messages, {"message":"Parentesco debe ser una cadena de caracteres.","max":255,"tooLong":"Parentesco debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-tipo_sangre","name":"tipo_sangre","container":".field-athletesathlete-tipo_sangre","input":"#athletesathlete-tipo_sangre","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.string(value, messages, {"message":"Tipo de sangre: debe ser una cadena de caracteres.","max":255,"tooLong":"Tipo de sangre: debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-alergias","name":"alergias","container":".field-athletesathlete-alergias","input":"#athletesathlete-alergias","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.string(value, messages, {"message":"Alergias a medicamentos: debe ser una cadena de caracteres.","max":255,"tooLong":"Alergias a medicamentos: debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-datos_gastos_medicos","name":"datos_gastos_medicos","container":".field-athletesathlete-datos_gastos_medicos","input":"#athletesathlete-datos_gastos_medicos","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.string(value, messages, {"message":"Datos Seguro Gastos Médicos: debe ser una cadena de caracteres.","max":255,"tooLong":"Datos Seguro Gastos Médicos: debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-hospital","name":"hospital","container":".field-athletesathlete-hospital","input":"#athletesathlete-hospital","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.string(value, messages, {"message":"Hospital al que trasladar: debe ser una cadena de caracteres.","max":255,"tooLong":"Hospital al que trasladar: debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-numero_afiliacion_federacion","name":"numero_afiliacion_federacion","container":".field-athletesathlete-numero_afiliacion_federacion","input":"#athletesathlete-numero_afiliacion_federacion","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.string(value, messages, {"message":"Numero Afiliacion Federacion debe ser una cadena de caracteres.","max":100,"tooLong":"Numero Afiliacion Federacion debería contener como máximo 100 letras.","skipOnEmpty":1});}},{"id":"athletesathlete-updated_at","name":"updated_at","container":".field-athletesathlete-updated_at","input":"#athletesathlete-updated_at","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Updated At no puede estar vacío."});}}], []);
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