var s2options_d6851687 = {"themeCss":".select2-container--krajee","sizeCss":"","doReset":true,"doToggle":false,"doOrder":false};
window.select2_d1834d28 = {"allowClear":true,"theme":"krajee","width":"100%","placeholder":" --- Selecciona --- ","language":"es"};

$('.btn-reportecsv').hide();
$('#btnAgregarReposo').click(function() {
    let id_reposo = $('#select_reposo').val();
    
    $.ajax({
        url: "/web/index.php?r=reportes/getdatareposos", // URL del controlador
        type: 'GET',
        data: {
            "reportID": id_reposo,
        },
        dataType: 'json',
        success: function(response) {
            console.log(response);
            if (response) {
                $('#reportsfolder-txtVo2Reposo').val(response.promedioVo2);
                $('#reportsfolder-txtGastoDiarioReposo').val(response.CaloriasDias);
                $('#reportsfolder-txtRQReposo').val(response.promedioRer);
                $('#reportsfolder-txtFCReposo').val(response.promedioFC);
                //$('#reportsfolder-txtComentarioGastoEnergeticoReposo').val(0);
                $('#modalReposo').modal('hide');
            } else {
                swal("No se encontraron datos",
                    "", {
                        icon: "error",
                        buttons: {
                            confirm: {
                                className: 'btn btn-warning'
                            }
                        },
                    });

            }
        }
    });
});
$('#btnAgregarConstante').click(function() {
    let id_constante = $('#select_constante').val();
    
    $.ajax({
        url: "/web/index.php?r=reportes/getdataconstante", // URL del controlador
        type: 'GET',
        data: {
            "reportID": id_constante,
        },
        dataType: 'json',
        success: function(response) {
            console.log(response);
            if (response) {
                $('#reportsfolder-txtVCargaConstante').val('');
                $('#reportsfolder-txtVo2CargaConstante').val(response.promedioVo2);
                $('#reportsfolder-txtFCCargaConstante').val(response.promedioFC);
                $('#reportsfolder-txtRQCargaConstante').val(response.promedioRer);
                //$('#reportsfolder-txtPotenciaCarrera1').val(0);
                $('#modalConstante').modal('hide');
            } else {
                swal("No se encontraron datos",
                    "", {
                        icon: "error",
                        buttons: {
                            confirm: {
                                className: 'btn btn-warning'
                            }
                        },
                    });

            }
        },
        error: function(xhr, status, error) {
                console.error("Error en la solicitud AJAX:", xhr, status, error);
            }
    });
});
$('#btnAgregarProgresivo').click(function() {
    let id_progresivo = $('#select_progresivo').val();
    $.ajax({
        url: "/web/index.php?r=reportes/getdatatabprogresivotablagrafica", // URL del controlador
        type: 'GET',
        data: {
            "reportID": id_progresivo,
        },
        dataType: 'json',
        success: function(response) {
            console.log(response);
            if (response && response.length > 0) {
                response.forEach(item => {
                    if (!item || !item.name) return;
                    switch (item.name) {

                        case 'VO2 pico/max':
                            $('#reportsfolder-txtVO2PicoVelocidad').val(item.v);
                            $('#reportsfolder-txtVO2PicoVO2').val(item.vo2);
                            $('#reportsfolder-txtVO2PicoFC').val(item.fc);
                            $('#reportsfolder-txtVO2PicoRQ').val(item.rq);
                            //$('#reportsfolder-txtPotenciaCarrera2VO2').val(0);
                            break;
                        case '2do umbral':
                            $('#reportsfolder-txtUmbral2Velocidad').val(item.v);
                            $('#reportsfolder-txtUmbral2VO2').val(item.vo2);
                            $('#reportsfolder-txtUmbral2FC').val(item.fc);
                            $('#reportsfolder-txtUmbral2RQ').val(item.rq);
                            //$('#reportsfolder-txtPotenciaCarrera2Umbral2').val(0);
                            break;
                        case '1er umbral':
                            $('#reportsfolder-txtUmbral1Velocidad').val(item.v);
                            $('#reportsfolder-txtUmbral1VO2').val(item.vo2);
                            $('#reportsfolder-txtUmbral1FC').val(item.fc);
                            $('#reportsfolder-txtUmbral1RQ').val(item.rq);
                            //$('#reportsfolder-txtPotenciaCarrera2Umbral1').val(0);
                            break;
                        case 'FAT MAX':
                            $('#reportsfolder-txtVelocidad').val(item.v);
                            $('#reportsfolder-txtVO2FatMax').val(item.vo2);
                            $('#reportsfolder-txtFCFatMax').val(item.fc);
                            $('#reportsfolder-txtRQFatMax').val(item.rq);
                            break;

                        default:
                            break;
                    }

                });
            } else {
                swal("No se encontraron datos",
                    "", {
                        icon: "error",
                        buttons: {
                            confirm: {
                                className: 'btn btn-warning'
                            }
                        },
                    });

            }
        }
    });







    $('#modalProgresivo').modal('hide');
});
$(document).ready(function() {
    validaChk();
    validaVerComentario();

    $(document).ready(function() {

        $("#w0").submit(function(event) {
            //event.preventDefault();
            var valida = false;
            if ($("#reportsfolder-deporteID1").is(':checked')) {
                if ($("#reportsfolder-txtVO2PicoVelocidad").val() == "" || $(
                        "#reportsfolder-txtUmbral2Velocidad").val() == "" || $(
                        "#reportsfolder-txtUmbral1Velocidad").val() == "") {
                    valida = false;
                } else {
                    valida = true;
                }
            } else {
                if ($("#reportsfolder-txtVO2PicoPotencia").val() == "" || $(
                        "#reportsfolder-txtUmbral2Potencia").val() == "" || $(
                        "#reportsfolder-txtUmbral1Potencia").val() == "") {
                    //alert("P2");
                    valida = false;
                } else {
                    valida = true;
                }
            }
            if (valida == false)
                alert(
                    "Verifique los campos obligatorios (marcados en *)"
                );
            return valida;
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
                    if (form.elements[i].value === '' && form.elements[i].hasAttribute(
                            'required')) {
                        dtClear++;
                    }
                }

                if (dtClear == 0) {
                    /*$blockBtn = $this.clone();
				$blockBtn.attr('type', 'button');
				$blockBtn.html('Espere un momento ...'); 
				$blockBtn.addClass('submitFormBtnBlock');
				$blockBtn.removeClass('submitFormBtn');
				$blockBtn.insertAfter($this);
				$blockBtn.attr('disabled', 'disabled');
				
				$this.hide();
		 		$blockBtn.show();*/
                } else {
                    alert(
                        "Verifique los campos obligatorios (marcados en *)"
                        );
                }
            }


        });


        $('.submitFormBtn').parents('form').on('afterValidate', function(event, messages,
            errorAttributes) {
            if (errorAttributes.length > 0) {
                $('.submitFormBtn').show();
                $('.submitFormBtnBlock').hide();
            }
        });

    });

    $('.submitFormBtn').parents('form').on('afterValidate', function(event, messages, errorAttributes) {
        if (errorAttributes.length > 0) {
            $('.submitFormBtn').show();
            $('.submitFormBtnBlock').hide();
        }
    });

});

function validaVerComentario() {
    if ($('#reportsfolder-cmbContraindicacion').val() == 1) {
        $('#reportsfolder-txtComentarioIsTestMax').show();
    } else {
        $('#reportsfolder-txtComentarioIsTestMax').hide();
    }
}

function validaChk() {
    $('#divDeporte1').addClass("btn-border");
    $('#divDeporte2').addClass("btn-border");
    $('#divDeporte3').addClass("btn-border");
    $('#divTexto1').addClass("textoNegro");
    $('#divTexto2').addClass("textoNegro");
    $('#divTexto3').addClass("textoNegro");
    $('#reportsfolder-cmbDeporteCarrera').hide();
    $('#reportsfolder-cmbDeporteCiclismo').hide();

    if ($("#reportsfolder-deporteID1").is(':checked')) {
        $('#divDeporte1').removeClass("btn-border");
        $('#divTexto1').removeClass("textoNegro");
        $('#divTexto1').addClass("textoBlanco");
        $('#divPotencia1').hide();
        $('#divPotencia2').hide();
        $('#divPotencia3').hide();
        $('#divPotencia4').hide();
        $('#divPotencia14').hide();
        $('#divPotencia24').hide();
        $('#divPotencia5').hide();
        $('#divVelocidad1').show();
        $('#divVelocidad2').show();
        $('#divVelocidad3').show();
        $('#divVelocidad4').show();
        $('#divVelocidad14').show();
        $('#divVelocidad24').show();
        $('#divVelocidad21').show();
        $('#divVelocidad5').show();
        $('#reportsfolder-cmbDeporteCarrera').show();

        $('.tdPotenciaCarrera').show();
    } else if ($("#reportsfolder-deporteID2").is(':checked')) {
        $('#divDeporte2').removeClass("btn-border");
        $('#divTexto2').removeClass("textoNegro");
        $('#divTexto2').addClass("textoBlanco");
        $('#divPotencia1').show();
        $('#divPotencia2').show();
        $('#divPotencia3').show();
        $('#divPotencia4').show();
        $('#divPotencia14').show();
        $('#divPotencia24').show();
        $('#divPotencia5').show();
        $('#divVelocidad1').hide();
        $('#divVelocidad2').hide();
        $('#divVelocidad3').hide();
        $('#divVelocidad4').hide();
        $('#divVelocidad14').hide();
        $('#divVelocidad24').hide();
        $('#divVelocidad21').hide();
        $('#divVelocidad5').hide();
        $('#reportsfolder-cmbDeporteCiclismo').show();

        $('.tdPotenciaCarrera').hide();
    }
    /*else if($("#reportsfolder-deporteID3").is(':checked')){
    	$('#divDeporte3').removeClass("btn-border");
    	$('#divTexto3').removeClass("textoNegro");
    	$('#divTexto3').addClass("textoBlanco");
    }*/
}

//agregar registros a la lista
$('#add_prod_button').click(function() {

    $("#error_agregar").hide();

    var txtDistancia = $('#txtDistancia').val();
    var txtTiempo = $('#txtTiempo').val();
    var txtCiclo1 = $('#txtCiclo1').val();
    var txtCiclo2 = $('#txtCiclo2').val();
    var txtFC = $('#txtFC').val();
    var txtRPE = $('#txtRPE').val();
    var txtLA = $('#txtLA').val();

    if (txtDistancia != '' || txtTiempo != '' || txtCiclo1 != '' || txtCiclo2 != '' || txtFC != '' || txtRPE !=
        '' || txtLA != '') {
        //alert(91);
        //var prod_nprod = $("#new_prod_producto option:selected").text();
        var row_id = $("#table-body tr").length + 1;
        var nameDistancia = "ProdRow[" + row_id + "][distancia]";
        var nameTiempo = "ProdRow[" + row_id + "][tiempo]";
        var nameCiclo1 = "ProdRow[" + row_id + "][cliclo1]";
        var nameCiclo2 = "ProdRow[" + row_id + "][ciclo2]";
        var nameFC = "ProdRow[" + row_id + "][fc]";
        var nameRPE = "ProdRow[" + row_id + "][rpe]";
        var nameLA = "ProdRow[" + row_id + "][la]";

        if (txtDistancia == "") txtDistancia = "--";
        if (txtTiempo == "") txtTiempo = "--";
        if (txtCiclo1 == "") txtCiclo1 = "--";
        if (txtCiclo2 == "") txtCiclo2 = "--";
        if (txtFC == "") txtFC = "--";
        if (txtRPE == "") txtRPE = "--";
        if (txtLA == "") txtLA = "--";

        var markup = '<tr id="row_' + row_id + '"><td>' + txtDistancia +
            '<input class="form-control" type="hidden" name=' + nameDistancia + ' value="' + txtDistancia +
            '"/></td><td>' + txtTiempo + '<input class="form-control" type="hidden" name=' + nameTiempo +
            ' value="' + txtTiempo + '"/></td><td>' + txtCiclo1 +
            '<input class="form-control" type="hidden" name=' + nameCiclo1 + ' value="' + txtCiclo1 +
            '"/></td><td class="prod_subtotal">' + txtCiclo2 + '<input  type="hidden" name=' + nameCiclo2 +
            ' value="' + txtCiclo2 + '"/></td><td>' + txtFC + '<input  type="hidden" name=' + nameFC +
            ' value="' + txtFC + '"/></td><td>' + txtRPE + '<input  type="hidden" name=' + nameRPE +
            ' value="' + txtRPE + '"/></td><td>' + txtLA + '<input  type="hidden" name=' + nameLA + ' value="' +
            txtLA +
            '"/></td><td><a href="javascript:void(0);" class="delete-button" title="Eliminar producto"><i style="color: #C82333" class="fa fa-minus-circle fa-2x"></i></a></td> </tr>';

        $(".items #table-body").append(markup);

        //Limpiamos
        $('#txtDistancia').val("");
        $('#txtTiempo').val("");
        $('#txtCiclo1').val("");
        $('#txtCiclo2').val("");
        $('#txtFC').val("");
        $('#txtRPE').val("");
        $('#txtLA').val("");
    } else {
        //alert(92);
        $("#error_agregar").html(
            'Debe establecer por lo menos un parámetro para registrar'
        );
        $("#error_agregar").show();
    }

});

$('#table-body').on('click', '.delete-button', function(e) {
    e.preventDefault();

    var line = $(this).closest('tr').remove();

});

jQuery(function ($) {
jQuery&&jQuery.pjax&&(jQuery.pjax.defaults.maxCacheLength=0);
if (jQuery('#reportsfolder-athlete_id').data('select2')) { jQuery('#reportsfolder-athlete_id').select2('destroy'); }
jQuery.when(jQuery('#reportsfolder-athlete_id').select2(select2_d1834d28)).done(initS2Loading('reportsfolder-athlete_id','s2options_d6851687'));

if (jQuery('#select_reposo').data('select2')) { jQuery('#select_reposo').select2('destroy'); }
jQuery.when(jQuery('#select_reposo').select2(select2_d1834d28)).done(initS2Loading('select_reposo','s2options_d6851687'));

if (jQuery('#select_constante').data('select2')) { jQuery('#select_constante').select2('destroy'); }
jQuery.when(jQuery('#select_constante').select2(select2_d1834d28)).done(initS2Loading('select_constante','s2options_d6851687'));

if (jQuery('#select_progresivo').data('select2')) { jQuery('#select_progresivo').select2('destroy'); }
jQuery.when(jQuery('#select_progresivo').select2(select2_d1834d28)).done(initS2Loading('select_progresivo','s2options_d6851687'));

jQuery('#w0').yiiActiveForm([{"id":"reportsfolder-athlete_id","name":"athlete_id","container":".field-reportsfolder-athlete_id","input":"#reportsfolder-athlete_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"ID Atleta debe ser un número entero.","skipOnEmpty":1});}},{"id":"reportsfolder-sporttestdate","name":"sportTestDate","container":".field-reportsfolder-sporttestdate","input":"#reportsfolder-sporttestdate","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Fecha de prueba deportiva no puede estar vacío."});}},{"id":"reportsfolder-name","name":"name","container":".field-reportsfolder-name","input":"#reportsfolder-name","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Nombre no puede estar vacío."});yii.validation.string(value, messages, {"message":"Nombre debe ser una cadena de caracteres.","max":255,"tooLong":"Nombre debería contener como máximo 255 letras.","skipOnEmpty":1});}},{"id":"reportsfolder-gender","name":"gender","container":".field-reportsfolder-gender","input":"#reportsfolder-gender","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Género debe ser un número entero.","skipOnEmpty":1});}},{"id":"reportsfolder-height","name":"height","container":".field-reportsfolder-height","input":"#reportsfolder-height","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Estatura no puede estar vacío."});yii.validation.number(value, messages, {"pattern":/^\s*[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/,"message":"Estatura debe ser un número.","skipOnEmpty":1});}},{"id":"reportsfolder-created_by_id","name":"created_by_id","container":".field-reportsfolder-created_by_id","input":"#reportsfolder-created_by_id","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Created By ID debe ser un número entero.","skipOnEmpty":1});}},{"id":"reportsfolder-status","name":"status","container":".field-reportsfolder-status","input":"#reportsfolder-status","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Estado no puede estar vacío."});yii.validation.number(value, messages, {"pattern":/^\s*[+-]?\d+\s*$/,"message":"Estado debe ser un número entero.","skipOnEmpty":1});}}], []);
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