
function validaFormatoERGO(campo, opcion, numDigtos){
	// onKeyPress="return validaFormatoERGO('txtReservaPotencia', 'UNDECIMAL', 3)"
	if($('#reportsfolder-' + campo).val() != ""){
		var formato;
		var formatoText="";
		if(opcion == "ANAEROBICA_V" || opcion == "UNDECIMAL"){
			formato = /^(\d+)$|^(\d+\.{0,0}\d{0,0})$/;//un solo decimal
			formatoText= "2 enteros, 1 decimal [00.0]";
		}
		else if(opcion == "ANAEROBICA_P" || opcion == "SOLOENTEROS"){
			formato = /^\d*$/;//numerico
			formatoText= numDigtos +" enteros [000]";
			//alert(campo + ' ' + opcion + ' ' + numDigtos);
		}
		else if(opcion == "txtTAPreEsfuerzo" || opcion == "CONDIAGONAL3DIGITOS"){
			formato = /^(\d+)$|^(\d+\/\d{0,2})$/;
			formatoText= "3 enteros, / 3 enteros [000/000]";
			
			if($('#reportsfolder-' + campo).val().length==3){
				if(event.keyCode != 47)
					$('#reportsfolder-' + campo).val($('#reportsfolder-' + campo).val()+'/')
			}
		}
		else if(opcion == "DOSDECIMALES"){
			//formato = /^\d+(\.\d{1,2})?$/;//DOS decimales
			formato = /^\d+\.\d{0,2}$/;
			formato = /^(\d+)$|^(\d+\.{0,1}\d{0,1})$/;//un solo decimales
			formatoText= "1 enteros, 2 decimales [0.00]";
			numDigtos += 1;
		}
		/*if(in_array(opcion,array)!= -1){
		}*/
		let cantidad = document.getElementById('reportsfolder-' + campo).value;
		
		if(!formato.test(cantidad)){
			//alert(opcion+" Formato incorrecto: " + formatoText);
			alert("Formato incorrecto: " + formatoText);// +"-"+cantidad+"-|"+numDigtos+"|-"
			return false;
		}else{
			if($('#reportsfolder-' + campo).val().length < numDigtos){
				//alert(formato);
				/*var str = $('#reportsfolder-' + campo).val();
				alert(str);
				if(opcion == "SOLOENTEROS")
					$('#reportsfolder-' + campo).val(str.replace(".", ""));*/
				return true;
			}else{
				alert("Formato completo: " + formatoText);// +"-"+cantidad+"-|"+numDigtos+"|-"
				return false;
			}
		}
	}
}
function validaValor(campo, min, max){
	var valorCampo= $('#' + campo).val()
	//if(valorCampo != ""){
	//alert(valorCampo);
   if(valorCampo>=min && valorCampo<=max){
	   return true
   }
	else{
		if(valorCampo<0) $('#' + campo).val(min);
		else $('#' + campo).val(max);
	}
  // }
	return false;
}

function validaFormatoLACTATO(campo, opcion, numDigtos){
	// onKeyPress="return validaFormatoERGO('txtReservaPotencia', 'UNDECIMAL', 3)"
	if($('#' + campo).val() != ""){
		var formato;
		var formatoText="";
		if(opcion == "ANAEROBICA_V" || opcion == "UNDECIMAL"){
			formato = /^(\d+)$|^(\d+\.{0,0}\d{0,0})$/;//un solo decimal
			formatoText= "2 enteros, 1 decimal [00.0]";
		}
		else if(opcion == "ANAEROBICA_P" || opcion == "SOLOENTEROS"){
			formato = /^\d*$/;//numerico
			if(numDigtos==4)
				formatoText= numDigtos +" enteros [0000]";
			if(numDigtos==3)
				formatoText= numDigtos +" enteros [000]";
			//alert(campo + ' ' + opcion + ' ' + numDigtos);
		}
		else if(opcion == "TIEMPO"){
			formato = /^(\d+)$|^(\d+\:\d{0,1})$/;
			formatoText= "minutos:segundos [00:00]";
			//alert(event.keyCode);
			if($('#' + campo).val().length==2){
				if(event.keyCode != 58)
					$('#' + campo).val($('#' + campo).val()+':')
			}
		}
		else if(opcion == "DOSDECIMALES"){
			//formato = /^\d+(\.\d{1,2})?$/;//DOS decimales
			formato = /^\d+\.\d{0,2}$/;
			formato = /^(\d+)$|^(\d+\.{0,1}\d{0,1})$/;//un solo decimales
			formatoText= "1 enteros, 2 decimales [0.00]";
			numDigtos += 1;
		}
		else if(opcion == "ENTEROS_DISTANCIA_POTENCIA"){
			formato = /^\d*$/;//numerico
			if($("#reportsfolder-deporteID2").is(':checked')){//ciclismo
				numDigtos= 3;
				formatoText= numDigtos +" enteros [000]";
			}
			else{
				formatoText= numDigtos +" enteros [0000]";
			}
			//alert(campo + ' ' + opcion + ' ' + numDigtos);
		}
		else if(opcion == "UNDECIMAL_ZONA_POTENCIA"){
			if($("#reportsfolder-deporteID2").is(':checked')){//ciclismo
				formato = /^\d*$/;//numerico
				formatoText= "3 enteros [000]";
			}
			else{
				formato = /^(\d+)$|^(\d+\.{0,0}\d{0,0})$/;//un solo decimal
				formatoText= "2 enteros, 1 decimal [00.0]";
				//alert(3);
			}
		}
		/*if(in_array(opcion,array)!= -1){
		}*/
		let cantidad = document.getElementById('' + campo).value;
		
		if(!formato.test(cantidad)){
			//alert(opcion+" Formato incorrecto: " + formatoText);
			alert("Formato incorrecto: " + formatoText);// +"-"+cantidad+"-|"+numDigtos+"|-"
			return false;
		}else{
			if($('#' + campo).val().length < numDigtos){
				//alert(formato);
				/*var str = $('#reportsfolder-' + campo).val();
				alert(str);
				if(opcion == "SOLOENTEROS")
					$('#reportsfolder-' + campo).val(str.replace(".", ""));*/
				return true;
			}else{
				alert("Formato completo: " + formatoText);// +"-"+cantidad+"-|"+numDigtos+"|-"
				return false;
			}
		}
	}
}

/*opcion == "txtPeso" || opcion == "txtFCReposo" || opcion == "txtPotencia" || opcion == "txtFCFatMax" || opcion ==  "txtFCMaxPico" || opcion ==  "txtFCRecuperacion1min" || opcion ==  "txtFCRecuperacion3min" || opcion ==  "txtPCargaConstante" || opcion ==  "txtFCCargaConstante" || opcion ==  "txtVO2PicoPotencia" || opcion ==  "txtVO2PicoFC" || opcion ==  "txtUmbral2FC" || opcion ==  "txtUmbral1FC"*/