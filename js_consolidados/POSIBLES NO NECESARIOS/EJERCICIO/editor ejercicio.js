$(document).ready(function() {
        $('#title_img').text('exercises/images/e31748bcebb04f0ea1b628fdd0d6de57.jpg');
    $('#title_video').text('exercises/videos/f43406affebf46d1a1730d4092b57f74.mp4');
        $('#file_img').change(function() {
        $('#title_img').text($(this).val());
    });
    $('#file_video').change(function() {
        $('#title_video').text($(this).val());
    });
    $('.submitFormBtn').click(function() {


        var $this = $(this);
        var $next = $this.next();
        if ($next.hasClass('submitFormBtnBlock')) {
            $blockBtn = $next;
        } else {

            var form = document.getElementById('w0');
            var dtClear = 0;
            for (var i = 0; i < form.elements.length; i++) {
                if (form.elements[i].value === '' && form.elements[i].hasAttribute('required')) {
                    dtClear++;
                }
            }

            if (dtClear == 0) {
                $blockBtn = $this.clone();
                $blockBtn.attr('type', 'button');
                $blockBtn.html(
                    'Espere un momento...'
                );
                $blockBtn.addClass('submitFormBtnBlock');
                $blockBtn.removeClass('submitFormBtn');
                $blockBtn.insertAfter($this);
                $blockBtn.attr('disabled', 'disabled');

                $this.hide();
                $blockBtn.show();
            }
        }


    });


    $('.submitFormBtn').parents('form').on('afterValidate', function(event, messages, errorAttributes) {
        if (errorAttributes.length > 0) {
            $('.submitFormBtn').show();
            $('.submitFormBtnBlock').hide();
        }
    });

});

function confirmDelete(){
		var key = "S2gra2g5MnM1Y0dhZ2E0K1NSYlZzZz09"; 
		var token = "";
		
        alertify.confirm('Confirmación', 'Seguro que desea eliminar el registro?', 
            function(){
                $.ajax({
                     type: 'POST',
                     url: "index.php?r=exercisesexercise/delete",
                     data:{key:key, token:token},
                     success:function(bool){
						 //console.log('success '+bool);
                        if (bool == true){
                            alertify.success('<span style="color: #FFFFFF;"><i class="fa fa-trash" aria-hidden="true"></i> &nbsp;&nbsp;Registro eliminado espere un momento ...</span>', 2 , function (){
								window.location.href = "index.php?r=exercisesexercise/index&del=true&cp="; 
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
jQuery('#w0').yiiActiveForm([{"id":"exercisesexercise-name","name":"name","container":".field-exercisesexercise-name","input":"#exercisesexercise-name","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Nombre no puede estar vacío."});yii.validation.string(value, messages, {"message":"Nombre debe ser una cadena de caracteres.","max":255,"tooLong":"Nombre debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"exercisesexercise-athlete_description","name":"athlete_description","container":".field-exercisesexercise-athlete_description","input":"#exercisesexercise-athlete_description","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Descripción atleta no puede estar vacío."});yii.validation.string(value, messages, {"message":"Descripción atleta debe ser una cadena de caracteres.","skipOnEmpty":1});}},{"id":"exercisesexercise-level_id","name":"level_id","container":".field-exercisesexercise-level_id","input":"#exercisesexercise-level_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Nivel debe ser un número entero.","skipOnEmpty":1});}},{"id":"exercisesexercise-sport_id","name":"sport_id","container":".field-exercisesexercise-sport_id","input":"#exercisesexercise-sport_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Deporte debe ser un número entero.","skipOnEmpty":1});}},{"id":"exercisesexercise-type_id","name":"type_id","container":".field-exercisesexercise-type_id","input":"#exercisesexercise-type_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Tipo debe ser un número entero.","skipOnEmpty":1});}},{"id":"exercisesexercise-technical_description","name":"technical_description","container":".field-exercisesexercise-technical_description","input":"#exercisesexercise-technical_description","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Descripción técnica no puede estar vacío."});yii.validation.string(value, messages, {"message":"Descripción técnica debe ser una cadena de caracteres.","skipOnEmpty":1});}},{"id":"exercisesexercise-updated_at","name":"updated_at","container":".field-exercisesexercise-updated_at","input":"#exercisesexercise-updated_at","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Updated At no puede estar vacío."});}},{"id":"exercisesexercise-activoexcercise","name":"activoExcercise","container":".field-exercisesexercise-activoexcercise","input":"#exercisesexercise-activoexcercise","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.boolean(value, messages, {"trueValue":"1","falseValue":"0","message":"Activo ejercicio debe ser \"1\" o \"0\".","skipOnEmpty":1});}},{"id":"exercisesexercise-status","name":"status","container":".field-exercisesexercise-status","input":"#exercisesexercise-status","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Estado no puede estar vacío."});yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Estado debe ser un número entero.","skipOnEmpty":1});}},{"id":"exercisesexercise-selected","name":"selected","container":".field-exercisesexercise-selected","input":"#exercisesexercise-selected","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Seleccionado no puede estar vacío."});yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Seleccionado debe ser un número entero.","skipOnEmpty":1});}},{"id":"exercisesexercise-calories","name":"calories","container":".field-exercisesexercise-calories","input":"#exercisesexercise-calories","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/,"message":"Calorías debe ser un número.","skipOnEmpty":1});}}], []);
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