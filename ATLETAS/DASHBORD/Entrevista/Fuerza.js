function clasifica(){
	if($('#athletesstrengthtraining-training').is(":checked")){
		document.getElementById('nameClasifica').value = "A definir por el entrenador";
		document.getElementById("athletesstrengthtraining-estimated_classification").value = 8;
	}else{
		document.getElementById('nameClasifica').value = "Sedentario";
		document.getElementById("athletesstrengthtraining-estimated_classification").value = 1;
	}		
}

jQuery(function ($) {
jQuery('#w0').yiiActiveForm([{"id":"athletesstrengthtraining-training","name":"training","container":".field-athletesstrengthtraining-training","input":"#athletesstrengthtraining-training","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Entrenamiento debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesstrengthtraining-time_training","name":"time_training","container":".field-athletesstrengthtraining-time_training","input":"#athletesstrengthtraining-time_training","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Tiempo entrenamiento debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesstrengthtraining-week_training","name":"week_training","container":".field-athletesstrengthtraining-week_training","input":"#athletesstrengthtraining-week_training","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Semana entrenamiento debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesstrengthtraining-difficulty_training","name":"difficulty_training","container":".field-athletesstrengthtraining-difficulty_training","input":"#athletesstrengthtraining-difficulty_training","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Dificultad de entrenamiento debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesstrengthtraining-correct_training","name":"correct_training","container":".field-athletesstrengthtraining-correct_training","input":"#athletesstrengthtraining-correct_training","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Entrenamiento correcto debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesstrengthtraining-estimated_classification","name":"estimated_classification","container":".field-athletesstrengthtraining-estimated_classification","input":"#athletesstrengthtraining-estimated_classification","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Clasificación estimada debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesstrengthtraining-coach_classification","name":"coach_classification","container":".field-athletesstrengthtraining-coach_classification","input":"#athletesstrengthtraining-coach_classification","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Clasificación de Entrenador debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesstrengthtraining-athlete_id","name":"athlete_id","container":".field-athletesstrengthtraining-athlete_id","input":"#athletesstrengthtraining-athlete_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"ID Atleta debe ser un número entero.","skipOnEmpty":1});}}], []);
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