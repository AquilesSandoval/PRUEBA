$(document).ready(function() {
    console.log('h')
    let flag = false;
    $('input[type="checkbox"]').each(function(index) {
        console.log(index + ": " + $(this).text());
        if ($(this).is(":checked")) {
            flag = true;
        }
    });
    if (flag == true) {
        document.getElementById('text-stratifica').innerHTML = "Alto Riesgo, se debe recabar información y autorización médica específica antes de iniciar con un programa de ejercicio.";
        document.getElementById('text-stratifica').style.background = '#DC3545';
    } else {
        document.getElementById('text-stratifica').innerHTML = "Sin Riesgo Aparente";
        document.getElementById('text-stratifica').style.background = '#43b02a';
    }
    $('input[type="checkbox"]').change(function() {
        console.log($(this).val());
        let flag = false;
        $('input[type="checkbox"]').each(function(index) {
            console.log(index + ": " + $(this).text());
            if ($(this).is(":checked")) {
                flag = true;
            }
        });
        if (flag == true) {
            document.getElementById('text-stratifica').innerHTML = "Alto Riesgo, se debe recabar información y autorización médica específica antes de iniciar con un programa de ejercicio.";
            document.getElementById('text-stratifica').style.background = '#DC3545';
        } else {
            document.getElementById('text-stratifica').innerHTML = "Sin Riesgo Aparente";
            document.getElementById('text-stratifica').style.background = '#43b02a';
        }

    })
})

jQuery(function ($) {
jQuery('#w0').yiiActiveForm([{"id":"athletesparq-has_heart_disease","name":"has_heart_disease","container":".field-athletesparq-has_heart_disease","input":"#athletesparq-has_heart_disease","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Tiene una enfermedad del corazón debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesparq-has_chestpain","name":"has_chestpain","container":".field-athletesparq-has_chestpain","input":"#athletesparq-has_chestpain","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Tiene dolor de pecho debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesparq-has_chestpain_lastmonth","name":"has_chestpain_lastmonth","container":".field-athletesparq-has_chestpain_lastmonth","input":"#athletesparq-has_chestpain_lastmonth","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Tiene dolor de pecho el mes pasado debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesparq-has_loss_balance","name":"has_loss_balance","container":".field-athletesparq-has_loss_balance","input":"#athletesparq-has_loss_balance","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Tiene balance de pérdida debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesparq-has_bone_problems","name":"has_bone_problems","container":".field-athletesparq-has_bone_problems","input":"#athletesparq-has_bone_problems","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Tiene problemas de huesos debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesparq-has_medication","name":"has_medication","container":".field-athletesparq-has_medication","input":"#athletesparq-has_medication","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Tiene medicación debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesparq-has_practice_physical","name":"has_practice_physical","container":".field-athletesparq-has_practice_physical","input":"#athletesparq-has_practice_physical","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Tiene Práctica Física debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletesparq-athlete_id","name":"athlete_id","container":".field-athletesparq-athlete_id","input":"#athletesparq-athlete_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"ID Atleta debe ser un número entero.","skipOnEmpty":1});}}], []);
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