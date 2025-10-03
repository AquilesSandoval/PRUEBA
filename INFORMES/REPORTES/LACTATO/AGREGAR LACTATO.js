var s2options_d6851687 = {"themeCss":".select2-container--krajee","sizeCss":"","doReset":true,"doToggle":false,"doOrder":false};
window.select2_d1834d28 = {"allowClear":true,"theme":"krajee","width":"100%","placeholder":" --- Selecciona --- ","language":"es"};

txtTiempo
	
$(document).ready(function(){
	validaChk();
	
	
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
					dtClear ++;
				 }
			}
			
			var valida=false;
			var sesionesSelecionados= Number($('#hddValida').val());
			if(sesionesSelecionados>0)
				valida=true;
			
			if(dtClear == 0 && valida==true){
				swal("Espere un momento. Cargando...", {
					buttons: false,
				});
				/*$blockBtn = $this.clone();
				$blockBtn.attr('type', 'button');
				$blockBtn.html('Espere un momento ...'); 
				$blockBtn.addClass('submitFormBtnBlock');
				$blockBtn.removeClass('submitFormBtn');
				$blockBtn.insertAfter($this);
				$blockBtn.attr('disabled', 'disabled');
				
				$this.hide();
		 		$blockBtn.show();*/
			}
			
			if(dtClear>0 || sesionesSelecionados==0){
				if(sesionesSelecionados==0)
					errores = "> Debe agrega almenos una registro de datos\n";
				
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

const formato = new Intl.NumberFormat('es-MX', { maximumFractionDigits: 2 });

	
$("#reportsfolder-txtZona2V").keyup(function(){
	if($("#reportsfolder-deporteID1").is(':checked')){//SI ES carrera
		calcula('2Tiempo',$("#reportsfolder-txtZona2V").val());
	}
});
$("#reportsfolder-txtZona4V").keyup(function(){
	/*let result= 0;
	var valor= $("#reportsfolder-txtZona4V").val();
	if(valor!=""){
		result= ((100/(valor*100/60)));
	}
	else result=0;
	$("#spanZona4Tiempo").html(result.toFixed(2));*/
	if($("#reportsfolder-deporteID1").is(':checked')){//SI ES carrera
		calcula('4Tiempo',$("#reportsfolder-txtZona4V").val());
	}
});
$("#reportsfolder-txtZona6V").keyup(function(){
	if($("#reportsfolder-deporteID1").is(':checked')){//SI ES carrera
		calcula('6Tiempo',$("#reportsfolder-txtZona6V").val());
	}
});

function calcula(campo, valor){
	
	$.ajax({
           type: 'get',
            url: "/web/index.php?r=reportsfolder/getformula",
            data:{vKmPorHr:valor},
            success:function(data){
                //var rows = JSON.parse(data);
				//alert(data);
                //console.log(rows);
				$("#spanZona"+campo).html(data);
            },
            error: function(data){ 
            },

        });
}


function validaChk(){
	$('#divDeporte1').addClass("btn-border");
	$('#divDeporte2').addClass("btn-border");
	$('#divDeporte3').addClass("btn-border");
	$('#divTexto1').addClass("textoNegro");
	$('#divTexto2').addClass("textoNegro");
	$('#divTexto3').addClass("textoNegro");
	$("#txtDistancia").val("");
	$("#txtDistancia").attr("placeholder", "----");
	$("#spanZona2Tiempo").html("0.00");
	$("#spanZona4Tiempo").html("0.00");
	$("#spanZona6Tiempo").html("0.00");
	$("#spanTituloTiempoMinKm").html("Ritmo (mins/km)");
	$("#reportsfolder-txtZona2V").attr("placeholder", "--.-");
	$("#reportsfolder-txtZona4V").attr("placeholder", "--.-");
	$("#reportsfolder-txtZona6V").attr("placeholder", "--.-");
		$("#reportsfolder-txtZona2V").val("");
	$("#reportsfolder-txtZona4V").val("");
	$("#reportsfolder-txtZona6V").val("");
		
	$('.tdcolumnaCarrera').hide();
	$('.dtPotenciaCarrera').hide();
	//alert('potencia'+$("#reportsfolder-deporteID1").is(':checked'));
	if($("#reportsfolder-deporteID1").is(':checked')){
		$('#divDeporte1').removeClass("btn-border");
		$('#divTexto1').removeClass("textoNegro");
		$('#divTexto1').addClass("textoBlanco");
		$('#spanZEVkmPorHr').html("V (Km/hr)");
		$('#spanRDCiclo1').html("F. Ciclo1 (T6, ss.dd)");
		$('#spanRDCiclo2').html("F. Ciclo2 (T6, ss.dd)");
		$('#spanRDDistanciaPoder').html("Distancia");
		$('#spanRDTiempo').html("Tiempo (min:ss)");
		$('#spanRDTiempo2').html("*");
		$('#txtTiempo').show();
		$('#txtCiclo1').show();
		$('#txtCiclo2').show();
		$("#reportsfolder-txtZona2V").get(0).type = 'number';
		$("#reportsfolder-txtZona4V").get(0).type = 'number';
		$("#reportsfolder-txtZona6V").get(0).type = 'number';
		$('.dtPotenciaCarrera').show();
		$('.tdcolumnaCarrera').show();
	}
	else if($("#reportsfolder-deporteID2").is(':checked')){
		$('#divDeporte2').removeClass("btn-border");
		$('#divTexto2').removeClass("textoNegro");
		$('#divTexto2').addClass("textoBlanco");
		$('#spanZEVkmPorHr').html("P (w)");
		$('#spanRDCiclo1').html("");
		$('#spanRDCiclo2').html("");
		$('#spanRDDistanciaPoder').html("Potencia (W)");
		$('#spanRDTiempo').html("");
		$('#spanRDTiempo2').html("");
		$('#txtTiempo').hide();
		$('#txtCiclo1').hide();
		$('#txtCiclo2').hide();
		$("#txtDistancia").attr("placeholder", "---");
		$("#spanZona2Tiempo").html("");
		$("#spanZona4Tiempo").html("");
		$("#spanZona6Tiempo").html("");
		$("#spanTituloTiempoMinKm").html("");
		$("#reportsfolder-txtZona2V").attr("placeholder", "---");
		$("#reportsfolder-txtZona4V").attr("placeholder", "---");
		$("#reportsfolder-txtZona6V").attr("placeholder", "---");
		$("#reportsfolder-txtZona2V").get(0).type = 'number';
		$("#reportsfolder-txtZona4V").get(0).type = 'number';
		$("#reportsfolder-txtZona6V").get(0).type = 'number';
		
	}
	else if($("#reportsfolder-deporteID3").is(':checked')){
		$('#divDeporte3').removeClass("btn-border");
		$('#divTexto3').removeClass("textoNegro");
		$('#divTexto3').addClass("textoBlanco");
		$('#spanZEVkmPorHr').html("Ritmo (min/100)");
		$('#spanRDCiclo1').html("F. Ciclo1 (T4, ss.dd)");
		$('#spanRDCiclo2').html("F. Ciclo2 (T4, ss.dd)");
		$('#spanRDDistanciaPoder').html("Distancia");
		$('#spanRDTiempo').html("Tiempo (min:ss)");
		$('#spanRDTiempo2').html("*");
		$('#txtTiempo').show();
		$('#txtCiclo1').show();
		$('#txtCiclo2').show();
		$("#reportsfolder-txtZona2V").attr("placeholder", "--:--");
		$("#reportsfolder-txtZona4V").attr("placeholder", "--:--");
		$("#reportsfolder-txtZona6V").attr("placeholder", "--:--");
		$("#reportsfolder-txtZona2V").get(0).type = 'text';
		$("#reportsfolder-txtZona4V").get(0).type = 'text';
		$("#reportsfolder-txtZona6V").get(0).type = 'text';
		$('.tdcolumnaCarrera').show();
	}
}
	
	//agregar registros a la lista
	$('#add_prod_button').click(function(){
		
		$("#error_agregar").hide();
		
		var txtDistancia = $('#txtDistancia').val();
		var txtTiempo = $('#txtTiempo').val();
		var txtCiclo1 = $('#txtCiclo1').val();
		var txtCiclo2 = $('#txtCiclo2').val();
		var txtFC = $('#txtFC').val();
		var txtRPE = $('#txtRPE').val();
		var txtLA = $('#txtLA').val();
		var txtPotenciaCarrera1 = $('#txtPotenciaCarrera1').val();
		
		var valida= false;
		if(!$("#reportsfolder-deporteID2").is(':checked')){//diferente a ciclismo
			if(txtTiempo != ''){
				valida= true;
			}
		}
		else{
			valida= true;
		}
		if(txtDistancia != '' && txtFC != '' && txtLA != '' && valida == true)
		{
			//alert(91);
			//var prod_nprod = $("#new_prod_producto option:selected").text();
			var row_id = $("#table-body tr").length + 1;
			var nameDistancia = "ProdRow["+row_id+"][distancia]";
			var nameTiempo = "ProdRow["+row_id+"][tiempo]";
			var nameCiclo1 = "ProdRow["+row_id+"][ciclo1]";
			var nameCiclo2 = "ProdRow["+row_id+"][ciclo2]";
			var nameFC = "ProdRow["+row_id+"][fc]";
			var nameRPE = "ProdRow["+row_id+"][rpe]";
			var nameLA = "ProdRow["+row_id+"][la]";
			var namePotenciaCarrera = "ProdRow["+row_id+"][potenciaCarrera]";
			
			if(txtDistancia=="") txtDistancia= "--";
			if(txtTiempo=="") txtTiempo= "";
			if(txtCiclo1=="") txtCiclo1= "--";
			if(txtCiclo2=="") txtCiclo2= "--";
			if(txtFC=="") txtFC= "--";
			if(txtRPE=="") txtRPE= "0";
			if(txtLA=="") txtLA= "--";
			if(txtPotenciaCarrera1=="") txtPotenciaCarrera1 = "--";
			
			var markup = '<tr id="row_'+ row_id +'"><td>'+ txtDistancia +'<input class="form-control" type="hidden" name='+ nameDistancia +' value="'+ txtDistancia +'"/></td><td class="tdcolumnaCarrera">'+ txtTiempo +'<input class="form-control" type="hidden" name='+ nameTiempo +' value="'+ txtTiempo +'"/></td><td class="tdcolumnaCarrera">'+ txtCiclo1 +'<input class="form-control" type="hidden" name='+ nameCiclo1 +' value="'+ txtCiclo1 +'"/></td><td class="prod_subtotal tdcolumnaCarrera">'+ txtCiclo2 +'<input  type="hidden" name='+ nameCiclo2 +' value="'+ txtCiclo2 +'"/></td><td>'+ txtFC +'<input  type="hidden" name='+ nameFC +' value="'+ txtFC +'"/></td><td>'+ txtRPE +'<input  type="hidden" name='+ nameRPE +' value="'+ txtRPE +'"/></td><td>'+ txtLA +'<input  type="hidden" name='+ nameLA +' value="'+ txtLA +'"/></td><td class="dtPotenciaCarrera">'+ txtPotenciaCarrera1 +'<input class="form-control" type="hidden" name='+ namePotenciaCarrera +' value="'+ txtPotenciaCarrera1 +'"/></td><td><a href="javascript:void(0);" class="delete-button" title="Eliminar producto"><i style="color: #C82333" class="fa fa-minus-circle fa-2x"></i></a></td> </tr>';
			//alert(markup);
			//$(".items #table-body").append(markup);
			$("#table-body").append(markup);
			
			//Limpiamos
			$('#txtDistancia').val("");
			$('#txtTiempo').val("");
			$('#txtCiclo1').val("");
			$('#txtCiclo2').val("");
			$('#txtFC').val("");
			$('#txtRPE').val("");
			$('#txtLA').val("");
			$('#abreModal1').show();
			
			$('#hddValida').val(Number($('#hddValida').val())+1);
			validaChk();
		}else{
			//alert(92);
			$("#error_agregar").html('Debe revisar los campos obligatorios marcados con un (*)');
			$("#error_agregar").show();
		}

	});
	
	$('#table-body').on('click', '.delete-button', function(e){
		e.preventDefault();

		var line = $(this).closest('tr').remove();
		$('#hddValida').val(Number($('#hddValida').val())-1);
	});	
	// onClick="verGrafica()"
	$(document).on('click','#abreModal1',function(e) {
		var data = $("#w0").serialize();
		$.ajax({
			 data: data,
			 type: "post",
			 url: "../views/reportsfolder/testajax.php",
			 success: function(data){
				 //alert(data);
				 var urlModal= $('#abreModal1').attr('value');
				 $('#add-modal')
					.modal('show')
					.find('#addModalContent')
					.load(urlModal);
			 }
		});
	});
	
	function verGrafica(){
		//$("div").text($("w0").serialize());
		$.ajax({
			type: 'POST',
			url: "/web/index.php?r=reportsfolder/createmodal",
			data:$("#w0").serialize(),
			//data: $('#w0').serialize(),
			success:function(data){
				//alert(data);
				var urlModal= $('#abreModal1').attr('value');
				$('#add-modal')
					.modal('show')
					.find('#addModalContent')
					.load(urlModal);
			},
			error: function(data){ 
			},
		});
	}
	
	/*$(function () {
		$('.add-modal-click').click(function () {
			$('#add-modal')
					.modal('show')
					.find('#addModalContent')
					.load($(this).attr('value'));
		});
	});*/

	
function llenarTabla(){
	//llenar tabla
	$.ajax({
           type: 'get',
            url: "/web/index.php?r=reportsfolder/getdatos",
            data:{id:"0"},
            success:function(data){
                var rows = JSON.parse(data);
                console.log(rows);
				
                var distance;
                var tiempo;
                var cycle_1;
                var cycle_2;
				var fc;
				var rpe;
				var la;
                var potenciaCarrera;
				var valorHiddenPotenciaCarrera="";
				
                for (i = 0; i < rows.length; ++i) {
                    distance =rows[i]['distance'];
                    tiempo = rows[i]['tiempo'];
                    cycle_1 = rows[i]['cycle_1'];
                    cycle_2 =rows[i]['cycle_2'];
                    fc =rows[i]['fc'];
                    rpe =rows[i]['rpe'];
                    la =rows[i]['la'];
					potenciaCarrera =rows[i]['potenciaEnCarrera'];
					if(potenciaCarrera==null){
						potenciaCarrera="--";
						valorHiddenPotenciaCarrera="";
					}
					else{
						valorHiddenPotenciaCarrera= potenciaCarrera;
					}
					// Agregar a la tabla
					var row_id = $("#table-body tr").length + 1;
					var nameDistancia = "ProdRow["+row_id+"][distancia]";
					var nameTiempo = "ProdRow["+row_id+"][tiempo]";
					var nameCiclo1 = "ProdRow["+row_id+"][ciclo1]";
					var nameCiclo2 = "ProdRow["+row_id+"][ciclo2]";
					var nameFC = "ProdRow["+row_id+"][fc]";
					var nameRPE = "ProdRow["+row_id+"][rpe]";
					var nameLA = "ProdRow["+row_id+"][la]";
					var namePotenciaCarrera = "ProdRow["+row_id+"][potenciaCarrera]";

					if(distance=="") distance= "--";
					if(tiempo=="") tiempo= "--";
					if(cycle_1=="") cycle_1= "--";
					if(cycle_2=="") cycle_2= "--";
					if(fc=="") fc= "--";
					if(rpe=="") rpe= "--";
					if(la=="") la= "--";
					
					var markup = '<tr id="row_'+ row_id +'"><td class="reg_distancia">'+ distance +' <a class="editField pull-right change-fl1" ><i class="icon-note" aria-hidden="true"></i></a> <input class="form-control" type="hidden" name='+ nameDistancia +' value="'+ distance +'"/></td><td class="reg_tiempo">'+ tiempo +' <a class="editField pull-right change-fl2" ><i class="icon-note" aria-hidden="true"></i></a><input class="form-control" type="hidden" name='+ nameTiempo +' value="'+ tiempo +'"/></td><td class="reg_ciclo1">'+ cycle_1 +' <a class="editField pull-right change-fl3" ><i class="icon-note" aria-hidden="true"></i></a> <input class="form-control" type="hidden" name='+ nameCiclo1 +' value="'+ cycle_1 +'"/></td><td class="prod_subtotal reg_ciclo2">'+ cycle_2 +' <a class="editField pull-right change-fl4" ><i class="icon-note" aria-hidden="true"></i></a><input  type="hidden" name='+ nameCiclo2 +' value="'+ cycle_2 +'"/></td><td class="reg_fc">'+ fc +' <a class="editField pull-right change-fl5" ><i class="icon-note" aria-hidden="true"></i></a><input  type="hidden" name='+ nameFC +' value="'+ fc +'"/></td><td class="reg_rpe">'+ rpe +' <a class="editField pull-right change-fl6" ><i class="icon-note" aria-hidden="true"></i></a><input  type="hidden" name='+ nameRPE +' value="'+ rpe +'"/></td><td class="reg_la">'+ la +' <a class="editField pull-right change-fl7" ><i class="icon-note" aria-hidden="true"></i></a><input  type="hidden" name='+ nameLA +' value="'+ la+'"/></td><td class="reg_potenciaCarrera">'+ potenciaCarrera +' <a class="editField pull-right change-fl8" ><i class="icon-note" aria-hidden="true"></i></a><input  type="hidden" name='+ namePotenciaCarrera +' value="'+ valorHiddenPotenciaCarrera +'"/></td><td><a href="javascript:void(0);" class="delete-button" title="Eliminar producto"><i style="color: #C82333" class="fa fa-minus-circle fa-2x"></i></a></td> </tr>';
					var markup = '<tr id="row_'+ row_id +'"><td class="reg_distancia">'+ distance +' <a class="editField pull-right change-fl1" ><i class="icon-note" aria-hidden="true"></i></a> <input class="form-control" type="hidden" name='+ nameDistancia +' value="'+ distance +'"/></td><td class="reg_tiempo tdcolumnaCarrera">'+ tiempo +' <a class="editField pull-right change-fl2" ><i class="icon-note" aria-hidden="true"></i></a><input class="form-control" type="hidden" name='+ nameTiempo +' value="'+ tiempo +'"/></td><td class="reg_ciclo1 tdcolumnaCarrera">'+ cycle_1 +' <a class="editField pull-right change-fl3" ><i class="icon-note" aria-hidden="true"></i></a> <input class="form-control" type="hidden" name='+ nameCiclo1 +' value="'+ cycle_1 +'"/></td><td class="prod_subtotal reg_ciclo2 tdcolumnaCarrera">'+ cycle_2 +' <a class="editField pull-right change-fl4" ><i class="icon-note" aria-hidden="true"></i></a><input  type="hidden" name='+ nameCiclo2 +' value="'+ cycle_2 +'"/></td><td class="reg_fc">'+ fc +' <a class="editField pull-right change-fl5" ><i class="icon-note" aria-hidden="true"></i></a><input  type="hidden" name='+ nameFC +' value="'+ fc +'"/></td><td class="reg_rpe">'+ rpe +' <a class="editField pull-right change-fl6" ><i class="icon-note" aria-hidden="true"></i></a><input  type="hidden" name='+ nameRPE +' value="'+ rpe +'"/></td><td class="reg_la">'+ la +' <a class="editField pull-right change-fl7" ><i class="icon-note" aria-hidden="true"></i></a><input  type="hidden" name='+ nameLA +' value="'+ la+'"/></td><td class="reg_potenciaCarrera dtPotenciaCarrera">'+ potenciaCarrera +' <a class="editField pull-right change-fl8" ><i class="icon-note" aria-hidden="true"></i></a><input  type="hidden" name='+ namePotenciaCarrera +' value="'+ valorHiddenPotenciaCarrera +'"/></td><td><a href="javascript:void(0);" class="delete-button" title="Eliminar producto"><i style="color: #C82333" class="fa fa-minus-circle fa-2x"></i></a></td> </tr>';
					//var markup = '<tr id="row_'+ row_id +'"><td class="reg_distancia">'+ distance +' <a class="editField pull-right change-fl1" ><i class="icon-note" aria-hidden="true"></i></a> <input class="form-control" type="hidden" name='+ nameDistancia +' value="'+ distance +'"/></td><td class="reg_fc">'+ fc +' <a class="editField pull-right change-fl5" ><i class="icon-note" aria-hidden="true"></i></a><input  type="hidden" name='+ nameFC +' value="'+ fc +'"/></td><td class="reg_rpe">'+ rpe +' <a class="editField pull-right change-fl6" ><i class="icon-note" aria-hidden="true"></i></a><input  type="hidden" name='+ nameRPE +' value="'+ rpe +'"/></td><td class="reg_la">'+ la +' <a class="editField pull-right change-fl7" ><i class="icon-note" aria-hidden="true"></i></a><input  type="hidden" name='+ nameLA +' value="'+ la+'"/></td><td><a href="javascript:void(0);" class="delete-button" title="Eliminar producto"><i style="color: #C82333" class="fa fa-minus-circle fa-2x"></i></a></td> </tr>';
					


					//$(".items #table-body").append(markup);
					$("#table-body").append(markup);

					//Limpiamos
					$('#txtDistancia').val("");
					$('#txtTiempo').val("");
					$('#txtCiclo1').val("");
					$('#txtCiclo2').val("");
					$('#txtFC').val("");
					$('#txtRPE').val("");
					$('#txtLA').val("");
					$('#txtPotenciaCarrera1').val("");
					$('#abreModal1').show();
					$('#hddValida').val(Number($('#hddValida').val())+1);
					validaChk();
                }
				
            },
            error: function(data){ 
            },

        });
		
}
	
	
$('#table-body').on('click', '.change-fl1', function(e){
        e.preventDefault();
        var row = $(this).closest('tr');
        var cantidadMax = parseInt(row.find('.reg_distancia').children('input').val());
        var name=$(this).parent().children('input').attr("name");
        alertify.prompt('Input (number):').set('type', 'number');
        alertify.prompt( 'Editar Distancia', '', cantidadMax
            , function(evt, value) {
                if ( value < 0 ){
                        alertify.error('No puede ingresar valores negativos');
                    }else{
                        row.find('.reg_distancia').html(value + '<a class="editField pull-right change-fl1"><i class="icon-note" aria-hidden="true"></i></a>'+'<input type="hidden" name="'+name+'" value="'+ value +'"/>');                       
                    }
            }, function() {
            
        });
        
    });
	
	//reg_tiempo
	//<input type="text" autocomplete="off" placeholder="--:--" id="txtTiempo" name="txtTiempo" class="form-control" aria-invalid="false" onkeypress="return validaFormatoLACTATO('txtTiempo', 'TIEMPO', 5)">
	$('#table-body').on('click', '.change-fl2', function(e){
        e.preventDefault();
        var row = $(this).closest('tr');
        var cantidadMax = parseInt(row.find('.reg_tiempo').children('input').val());
        var name=$(this).parent().children('input').attr("name");
        alertify.prompt('Input (number):').set('type', 'text');
        alertify.prompt( 'Editar Tiempo', '', cantidadMax
            , function(evt, value) {
                if ( value < 0 ){
                        alertify.error('No puede ingresar valores negativos');
                    }else{
                        row.find('.reg_tiempo').html(value + '<a class="editField pull-right change-fl2"><i class="icon-note" aria-hidden="true"></i></a>'+'<input type="hidden" name="'+name+'" value="'+ value +'"/>');                       
                    }
            }, function() {
            
        });
        
    });
	
	//reg_ciclo1
	$('#table-body').on('click', '.change-fl3', function(e){
        e.preventDefault();
        var row = $(this).closest('tr');
        var cantidadMax = parseInt(row.find('.reg_ciclo1').children('input').val());
        var name=$(this).parent().children('input').attr("name");
        alertify.prompt('Input (number):').set('type', 'number');
        alertify.prompt( 'Editar F. Ciclo1 (T6, ss.dd)', '', cantidadMax
            , function(evt, value) {
                if ( value < 0 ){
                        alertify.error('No puede ingresar valores negativos');
                    }else{
                        row.find('.reg_ciclo1').html(value + '<a class="editField pull-right change-fl3"><i class="icon-note" aria-hidden="true"></i></a>'+'<input type="hidden" name="'+name+'" value="'+ value +'"/>');                       
                    }
            }, function() {
            
        });
        
    });
	
	
	//reg_ciclo2
	$('#table-body').on('click', '.change-fl4', function(e){
        e.preventDefault();
        var row = $(this).closest('tr');
        var cantidadMax = parseInt(row.find('.reg_ciclo2').children('input').val());
        var name=$(this).parent().children('input').attr("name");
        alertify.prompt('Input (number):').set('type', 'number');
        alertify.prompt( 'F. Ciclo2 (T6, ss.dd)', '', cantidadMax
            , function(evt, value) {
                if ( value < 0 ){
                        alertify.error('No puede ingresar valores negativos');
                    }else{
                        row.find('.reg_ciclo2').html(value + '<a class="editField pull-right change-fl4"><i class="icon-note" aria-hidden="true"></i></a>'+'<input type="hidden" name="'+name+'" value="'+ value +'"/>');                       
                    }
            }, function() {
            
        });
        
    });
	
	
	//reg_fc
	$('#table-body').on('click', '.change-fl5', function(e){
        e.preventDefault();
        var row = $(this).closest('tr');
        var cantidadMax = parseInt(row.find('.reg_fc').children('input').val());
        var name=$(this).parent().children('input').attr("name");
        alertify.prompt('Input (number):').set('type', 'number');
        alertify.prompt( 'FC (ppm)', '', cantidadMax
            , function(evt, value) {
                if ( value < 0 ){
                        alertify.error('No puede ingresar valores negativos');
                    }else{
                        row.find('.reg_fc').html(value + '<a class="editField pull-right change-fl5"><i class="icon-note" aria-hidden="true"></i></a>'+'<input type="hidden" name="'+name+'" value="'+ value +'"/>');                       
                    }
            }, function() {
            
        });
        
    });
	
	
	//reg_rpe
	$('#table-body').on('click', '.change-fl6', function(e){
        e.preventDefault();
        var row = $(this).closest('tr');
        var cantidadMax = parseInt(row.find('.reg_rpe').children('input').val());
        var name=$(this).parent().children('input').attr("name");
        alertify.prompt('Input (number):').set('type', 'number');
        alertify.prompt( 'RPE (0-10)', '', cantidadMax
            , function(evt, value) {
                if ( value < 0 ){
                        alertify.error('No puede ingresar valores negativos');
                    }else{
                        row.find('.reg_rpe').html(value + '<a class="editField pull-right change-fl6"><i class="icon-note" aria-hidden="true"></i></a>'+'<input type="hidden" name="'+name+'" value="'+ value +'"/>');                       
                    }
            }, function() {
            
        });        
    });
	
	
	//reg_la
	$('#table-body').on('click', '.change-fl7', function(e){
        e.preventDefault();
        var row = $(this).closest('tr');
        var cantidadMax = parseInt(row.find('.reg_la').children('input').val());
        var name=$(this).parent().children('input').attr("name");
        alertify.prompt('Input (number):').set('type', 'number');
		alertify.prompt('Input (number):').set('step', '0.01');
        alertify.prompt( 'LA (mMoI/L)', '', cantidadMax
            , function(evt, value) {
                if ( value < 0 ){
                        alertify.error('No puede ingresar valores negativos');
                    }else{
                        row.find('.reg_la').html(value + '<a class="editField pull-right change-fl7"><i class="icon-note" aria-hidden="true"></i></a>'+'<input type="hidden" name="'+name+'" value="'+ value +'"/>');                       
                    }
            }, function() {
            
        });        
    });
	
	
	//reg_potenciaCarrera
	$('#table-body').on('click', '.change-fl8', function(e){
        e.preventDefault();
        var row = $(this).closest('tr');
        var cantidadMax = parseInt(row.find('.reg_potenciaCarrera').children('input').val());
        var name=$(this).parent().children('input').attr("name");
        alertify.prompt('Input (number):').set('type', 'number');
        alertify.prompt( 'Velocidad(W)', '', cantidadMax
            , function(evt, value) {
                if ( value < 0 ){
                        alertify.error('No puede ingresar valores negativos');
                    }else{
                        row.find('.reg_potenciaCarrera').html(value + '<a class="editField pull-right change-fl7"><i class="icon-note" aria-hidden="true"></i></a>'+'<input type="hidden" name="'+name+'" value="'+ value +'"/>');                       
                    }
            }, function() {
            
        });        
    });

jQuery(function ($) {
jQuery&&jQuery.pjax&&(jQuery.pjax.defaults.maxCacheLength=0);
if (jQuery('#reportsfolder-athlete_id').data('select2')) { jQuery('#reportsfolder-athlete_id').select2('destroy'); }
jQuery.when(jQuery('#reportsfolder-athlete_id').select2(select2_d1834d28)).done(initS2Loading('reportsfolder-athlete_id','s2options_d6851687'));

jQuery('#w0').yiiActiveForm([{"id":"reportsfolder-athlete_id","name":"athlete_id","container":".field-reportsfolder-athlete_id","input":"#reportsfolder-athlete_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"ID Atleta debe ser un número entero.","skipOnEmpty":1});}},{"id":"reportsfolder-sporttestdate","name":"sportTestDate","container":".field-reportsfolder-sporttestdate","input":"#reportsfolder-sporttestdate","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Fecha de prueba deportiva no puede estar vacío."});}},{"id":"reportsfolder-name","name":"name","container":".field-reportsfolder-name","input":"#reportsfolder-name","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Nombre no puede estar vacío."});yii.validation.string(value, messages, {"message":"Nombre debe ser una cadena de caracteres.","max":255,"tooLong":"Nombre debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"reportsfolder-gender","name":"gender","container":".field-reportsfolder-gender","input":"#reportsfolder-gender","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Género debe ser un número entero.","skipOnEmpty":1});}},{"id":"reportsfolder-height","name":"height","container":".field-reportsfolder-height","input":"#reportsfolder-height","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Estatura no puede estar vacío."});yii.validation.number(value, messages, {"pattern":/^\s*[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/,"message":"Estatura debe ser un número.","skipOnEmpty":1});}},{"id":"reportsfolder-created_by_id","name":"created_by_id","container":".field-reportsfolder-created_by_id","input":"#reportsfolder-created_by_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Created By ID debe ser un número entero.","skipOnEmpty":1});}},{"id":"reportsfolder-status","name":"status","container":".field-reportsfolder-status","input":"#reportsfolder-status","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Estado no puede estar vacío."});yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Estado debe ser un número entero.","skipOnEmpty":1});}}], []);
jQuery('#add-modal').modal({"show":false});
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