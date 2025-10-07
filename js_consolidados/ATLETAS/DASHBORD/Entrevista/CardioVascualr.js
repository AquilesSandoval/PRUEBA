function dataChkdata(){
		var total = document.getElementById("data").value;
		//console.log(total);
		var datosChk = 0;
		for (var i = 1; i <= total; i++) {
			if($('#cbox_'+i).is(":checked")){
				//console.log('#cbox_'+i);
				datosChk++;
			}				
		}
		console.log(datosChk);
		if(datosChk != 0){
		   document.getElementById("signos").checked = true;
		   $('#signos').bootstrapToggle('on');
		}else{
			document.getElementById("signos").checked = false;
			$('div.signos').removeClass('btn-black off');
			$('#signos').bootstrapToggle('off');
		}
	}
	
	function dataChk(){
		if($('#signos').is(":checked")){
			//console.log("Si");
			var total = document.getElementById("data").value;
			var datosChk = 0;
			for (var i = 1; i <= total; i++) {
				if($('#cbox_'+i).is(":checked")){
					datosChk++;
				}
			}
			if(datosChk == 0){
				document.getElementById("cbox_1").checked = true;
			}
			
		}else{
			//console.log("No");
			//document.getElementById("cbox_1").checked = false;			
			var total = document.getElementById("data").value;
			for (var i = 1; i <= total; i++) {
				document.getElementById("cbox_"+i).checked = false;
			}
		}
		
		factorRiesgo();
		
	}
	
	
	function generaNum(){
		console.log("generando riesgo");
		var num = 0;
		
		var d1 = 0; var d2 = 0; var d3 = 0; var d4 = 0; var d5 = 0; var d6 = 0; var d7 = 0; var d8 = 0; var d9 = 1; var d10 = 0;
		
		if($('#athletescardiacrisk-senior_human').is(":checked")){
			d1 = 1;
		}
		
		if($('#athletescardiacrisk-infarct_parents').is(":checked")){
			d2 = 1;
		}
		
		if($('#athletescardiacrisk-is_smoker').is(":checked")){
			d3 = 1;
		}
		
		if($('#athletescardiacrisk-has_blood_pressure').is(":checked")){
			d4 = 1;
		}
		
		if($('#athletescardiacrisk-glucose_level').is(":checked")){
			d5 = 1;
		}
		
		if($('#athletescardiacrisk-has_high_cholesterol').is(":checked")){
			d6 = 1;
		}
		
		if($('#has_low_cholesterol').is(":checked")){
			d7 = 1;
		}
		
		if($('#athletescardiacrisk-has_highdl_cholesterol').is(":checked")){
			d8 = 1;
		}
		
		if($('#athletescardiacrisk-do_exercise').is(":checked")){
			d9 = 0;
		}
		
		if($('#athletescardiacrisk-high_imc').is(":checked")){
			d10 = 1;
		}
		
		
		
				
		num = num + d1 + d2 + d3 + d4 + d5 + d10 + d9;
		if(d6==1 || d7==1){
			num = num + 1;
		}
		
		num = num - d8;
		if(num<0){
			num=0;
		}
		document.getElementById('athletescardiacrisk-number_risk_factor').value = num;
		factorRiesgo();
		
	}
	
	function factorRiesgo(){
		 var numDatos = document.getElementById('athletescardiacrisk-number_risk_factor').value;
		
		//text-stratifica
		//athletescardiacrisk-initial_stratification
		var d1 = 0; var d2 = 0;
		if($('#athletescardiacrisk-has_some_disease').is(":checked")){
			d1 = 1;
		}
		
		if($('#signos').is(":checked")){
			d2 = 1;
		}
		
		
		if(d1==1 || d2==1){
			//Alto Riesgo
			document.getElementById('text-stratifica').innerHTML = "Alto Riesgo";
			document.getElementById('athletescardiacrisk-initial_stratification').value = 3;
			document.getElementById('text-stratifica').style.background = '#003b5c';
			//background: #767676;
		}else{
			if(numDatos < 2){
				//Bajo Riesgo
				document.getElementById('text-stratifica').innerHTML = "Bajo Riesgo";
				document.getElementById('athletescardiacrisk-initial_stratification').value = 1;
				document.getElementById('text-stratifica').style.background = '#43b02a';
			}else{
				//Riesgo Moderado
				document.getElementById('text-stratifica').innerHTML = "Riesgo Moderado";
				document.getElementById('athletescardiacrisk-initial_stratification').value = 2;
				document.getElementById('text-stratifica').style.background = '#9b9b9b';
			}
		}
	}
	generaNum();

jQuery(function ($) {
jQuery('#w0').yiiActiveForm([{"id":"athletescardiacrisk-has_some_disease","name":"has_some_disease","container":".field-athletescardiacrisk-has_some_disease","input":"#athletescardiacrisk-has_some_disease","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Tiene alguna enfermedad debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletescardiacrisk-senior_human","name":"senior_human","container":".field-athletescardiacrisk-senior_human","input":"#athletescardiacrisk-senior_human","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Adulto mayor debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletescardiacrisk-infarct_parents","name":"infarct_parents","container":".field-athletescardiacrisk-infarct_parents","input":"#athletescardiacrisk-infarct_parents","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Padres de infarto debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletescardiacrisk-is_smoker","name":"is_smoker","container":".field-athletescardiacrisk-is_smoker","input":"#athletescardiacrisk-is_smoker","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Es fumador debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletescardiacrisk-has_blood_pressure","name":"has_blood_pressure","container":".field-athletescardiacrisk-has_blood_pressure","input":"#athletescardiacrisk-has_blood_pressure","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Tiene presión arterial debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletescardiacrisk-glucose_level","name":"glucose_level","container":".field-athletescardiacrisk-glucose_level","input":"#athletescardiacrisk-glucose_level","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Nivel de glucosa debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletescardiacrisk-has_high_cholesterol","name":"has_high_cholesterol","container":".field-athletescardiacrisk-has_high_cholesterol","input":"#athletescardiacrisk-has_high_cholesterol","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Tiene colesterol alto debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletescardiacrisk-has_low_cholesterol","name":"has_low_cholesterol","container":".field-athletescardiacrisk-has_low_cholesterol","input":"#athletescardiacrisk-has_low_cholesterol","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Tiene colesterol bajo debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletescardiacrisk-has_highdl_cholesterol","name":"has_highdl_cholesterol","container":".field-athletescardiacrisk-has_highdl_cholesterol","input":"#athletescardiacrisk-has_highdl_cholesterol","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Tiene colesterol alto debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletescardiacrisk-do_exercise","name":"do_exercise","container":".field-athletescardiacrisk-do_exercise","input":"#athletescardiacrisk-do_exercise","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Hace ejercicio debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletescardiacrisk-high_imc","name":"high_imc","container":".field-athletescardiacrisk-high_imc","input":"#athletescardiacrisk-high_imc","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Imc alto debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletescardiacrisk-number_risk_factor","name":"number_risk_factor","container":".field-athletescardiacrisk-number_risk_factor","input":"#athletescardiacrisk-number_risk_factor","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Número factor de riesgo debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletescardiacrisk-initial_stratification","name":"initial_stratification","container":".field-athletescardiacrisk-initial_stratification","input":"#athletescardiacrisk-initial_stratification","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Estratificación inicial debe ser un número entero.","skipOnEmpty":1});}},{"id":"athletescardiacrisk-athlete_id","name":"athlete_id","container":".field-athletescardiacrisk-athlete_id","input":"#athletescardiacrisk-athlete_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"ID Atleta debe ser un número entero.","skipOnEmpty":1});}}], []);
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