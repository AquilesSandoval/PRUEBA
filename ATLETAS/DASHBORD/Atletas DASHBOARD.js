function pronostico(sport,type){
        console.log('pronostico',sport,type);
        if(sport === 'B'){
            if(type=='kms'||type=='m'){
                $('#divVelocidadPronostico').hide();
                $('#divRitmoPronostico').hide();
                $('#divWattsPronostico').show();
                $('#divTiempoPronostico').hide();
                $('#divDistanciaPronostico').hide();
            }else{
                $('#divVelocidadPronostico').hide();
                $('#divRitmoPronostico').hide();
                $('#divWattsPronostico').show();
                $('#divTiempoPronostico').hide();
                $('#divDistanciaPronostico').show();
            }
        }else{
            if(type=='kms'||type=='m'){
                $('#divVelocidadPronostico').show();
                $('#divRitmoPronostico').show();
                $('#divWattsPronostico').hide();
                $('#divTiempoPronostico').show();
                $('#divDistanciaPronostico').hide();
            }else{
                $('#divVelocidadPronostico').show();
                $('#divRitmoPronostico').show();
                $('#divWattsPronostico').hide();
                $('#divTiempoPronostico').hide();
                $('#divDistanciaPronostico').show();
            }
        }
    }
    $('#cmbTipoDuracionDist').change(function() {
        
        let type = $('#cmbTipoDuracionDist').val();
        if(type == ''){
            type='kms';
        }
        let sport = $('#sport_sostenibilidad').val();
        pronostico(sport,type);
        
    });
    
    $('#sport_sostenibilidad').change(function() {
        console.log('cambio2')
        let type = $('#cmbTipoDuracionDist').val();
        if(type == ''){
            type='kms';
        }
        let sport = $('#sport_sostenibilidad').val();
        pronostico(sport,type);
    });
    $('#cmbTipoDuracionDist').change();

const clearButtons = document.querySelectorAll('.clear-btn');


clearButtons.forEach(button => {
    button.addEventListener('click', function() {

        const fieldsToClear = this.getAttribute('data-clear').split(' ');

        fieldsToClear.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.value = '';
            }
        });
    });
});

$('#fecha_sostenibilidad').change(function() {
    let per = $('#fecha_sostenibilidad').val();
    if (per == "4w") {
        per = "4 semanas";
    }
    if (per == "3m") {
        per = "3 meses";
    }
    if (per == "6m") {
        per = "6 meses";
    }
    if (per == "1y") {
        per = "1 año";
    }
    $("#divPeriodo").html(per);
    $('#cmbCriterio').val($('#fecha_sostenibilidad').val());
});

let criterio = 0;
$('#sport_sostenibilidad').change(function() {

    let sport = $('#sport_sostenibilidad').val();
    console.log(sport);

    let opciones_cu1 = [{
            value: '84.2',
            text: '84.2% VC'
        },
        {
            value: '85',
            text: '85% Z4'
        },
        {
            value: '83.2',
            text: '83.2% VC'
        },
        {
            value: '71',
            text: '71% VAM'
        },
    ];
    let opciones_cu2 = [{
            value: '104',
            text: '104% VC'
        },
        {
            value: '107',
            text: '107% VC'
        },
        {
            value: 'Z4',
            text: 'Z4'
        },
        {
            value: '81',
            text: '81% VAM'
        },
    ];

    let opciones_cu3 = [{
            value: '116',
            text: '116% Z4'
        },
        {
            value: '117',
            text: '117% Z4'
        },
        {
            value: 'VAM/PAM',
            text: 'VAM'
        },
        {
            value: '120',
            text: '120% VC'
        },
    ];
    if (sport == 'B') {
        opciones_cu1 = [{
                value: '84',
                text: '84% PC'
            },
            {
                value: '85',
                text: '85% Z4'
            },
            {
                value: '80',
                text: '80% PC'
            },
            {
                value: '71',
                text: '71% PAM'
            },
        ];
        opciones_cu2 = [{
                value: '98',
                text: '98% VC'
            },
            {
                value: '105',
                text: '105% VC'
            },
            {
                value: 'Z4',
                text: 'Z4'
            },
            {
                value: '81',
                text: '81% PAM'
            },
        ];
        opciones_cu3 = [{
                value: '116',
                text: '116% Z4'
            },
            {
                value: '117',
                text: '117% Z4'
            },
            {
                value: 'VAM/PAM',
                text: 'PAM'
            },
            {
                value: '120',
                text: '120% PC'
            },
        ];
    }
    $('#Cu1').empty(); // Limpia las opciones actuales
    $('#Cu2').empty(); // Limpia las opciones actuales
    $('#Cu3').empty(); // Limpia las opciones actuales

    opciones_cu1.forEach(opcion => {
        $('#Cu1').append(`<option value="${opcion.value}">${opcion.text}</option>`);
    });
    opciones_cu2.forEach(opcion => {
        $('#Cu2').append(`<option value="${opcion.value}">${opcion.text}</option>`);
    });
    opciones_cu3.forEach(opcion => {
        $('#Cu3').append(`<option value="${opcion.value}">${opcion.text}</option>`);
    });



    $(".vc-label").html('VC (m/s)');
    $(".dprima-label").html('D');
    if (sport == 'B') {
        $(".d1-label").html('P1');
        $(".d2-label").html('P2');
        $(".d3-label").html('P3');
        $(".d4-label").html('P4');
        $(".d5-label").html('P5');
        $(".d6-label").html('P6');
        // Cambiar placeholders
        $("#d1").attr('placeholder', 'Watts');
        $("#d2").attr('placeholder', 'Watts');
        $("#d3").attr('placeholder', 'Watts');
        $("#d4").attr('placeholder', 'Watts');
        $("#d5").attr('placeholder', 'Watts');
        $("#d6").attr('placeholder', 'Watts');

        $(".vc-label").html('PC');
        $(".dprima-label").html('W');
        $("#label-z4").html('Z4 (W)');
        $(".div-vc_minkm").hide();
    }
    if (sport == 'C') {
        $(".d1-label").html('D1');
        $(".d2-label").html('D2');
        $(".d3-label").html('D3');
        $(".d4-label").html('D4');
        $(".d5-label").html('D5');
        $(".d6-label").html('D6');
        // Cambiar placeholders
        $("#d1").attr('placeholder', 'Metros');
        $("#d2").attr('placeholder', 'Metros');
        $("#d3").attr('placeholder', 'Metros');
        $("#d4").attr('placeholder', 'Metros');
        $("#d5").attr('placeholder', 'Metros');
        $("#d6").attr('placeholder', 'Metros');
        $("#label-z4").html('Z4 (km/h)');
        $(".div-vc_minkm").show();
    }
    if (sport == 'N') {
        $(".d1-label").html('D1');
        $(".d2-label").html('D2');
        $(".d3-label").html('D3');
        $(".d4-label").html('D4');
        $(".d5-label").html('D5');
        $(".d6-label").html('D6');
    }
    //$('.form-controlx').val('');
    $('.form-controlx').html('');
    $('.inputsettings').val('');
    $('.inputdt').val('');
    $('.span-zonas').html('');
    $('#containerzonasdinamicas').html('');
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=athletesathlete/getsettings",
        data: {
            "athlete_id": 146,
            "sport": $('#sport_sostenibilidad').val(),
        },
        success: function(data) {
            console.log('getdatasettings', data);
            data = JSON.parse(data);
            if (data.result !== 'error') {
                /*swal("Datos obtenidos!", {
                    icon: "success",
                    buttons: {
                        confirm: {
                            className: 'btn btn-warning'
                        }
                    },
                });/** */
                $("#d1").val(data.medias.d1);
                $("#d2").val(data.medias.d2);
                $("#d3").val(data.medias.d3);
                $("#d4").val(data.medias.d4);
                $("#d5").val(data.medias.d5);
                $("#d6").val(data.medias.d6);
                //tiempo
                $("#t1").val(data.medias.t1);
                $("#t2").val(data.medias.t2);
                $("#t3").val(data.medias.t3);
                $("#t4").val(data.medias.t4);
                $("#t5").val(data.medias.t5);
                $("#t6").val(data.medias.t6);

                $("#Cu1").val(data.settings.cumbral1);
                $("#Cu2").val(data.settings.cumbral2);
                $("#Cu3").val(data.settings.cumbral3);
                $("#vam").val(data.settings.vp);
                $("#z4").val(data.settings.z4);
            } else {
                /*swal("No se encontraron resultados", {
                    icon: "error",
                    buttons: false,
                    timer: 3000,
                });*/
            }
        },
        error: function(data) {
            console.log(data);
            swal("Error al obtener datos", {
                icon: "error",
                buttons: false,
                timer: 3000,
            });
        },
    });
});
$('#sport_sostenibilidad').change();
function saveDT() {
    let d1 = $("#d1").val();
    let d2 = $("#d2").val();
    let d3 = $("#d3").val();
    let d4 = $("#d4").val();
    let d5 = $("#d5").val();
    let d6 = $("#d6").val();
    //tiempo
    let t1 = $("#t1").val();
    let t2 = $("#t2").val();
    let t3 = $("#t3").val();
    let t4 = $("#t4").val();
    let t5 = $("#t5").val();
    let t6 = $("#t6").val();
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=athletesathlete/savemedias",
        data: {
            "athlete_id": 146,
            "d1": d1,
            "d2": d2,
            "d3": d3,
            "d4": d4,
            "d5": d5,
            "d6": d6,

            "t1": t1,
            "t2": t2,
            "t3": t3,
            "t4": t4,
            "t5": t5,
            "t6": t6,
            "sport": $('#sport_sostenibilidad').val(),

        },
        success: function(data) {
            console.log(data);
            if (data != 'error') {
                swal("Registro guardado!", {
                    icon: "success",
                    buttons: {
                        confirm: {
                            className: 'btn btn-warning'
                        }
                    },
                });
            } else {
                swal("Error al guardar", {
                    icon: "error",
                    buttons: false,
                    timer: 3000,
                });
            }

        },
        error: function(data) {
            console.log(data);
            swal("Error al guardar", {
                icon: "error",
                buttons: false,
                timer: 3000,
            });
        },
    });
}

function saveSettings() {
    let cumbral1 = $("#Cu1").val();
    let cumbral2 = $("#Cu2").val();
    let cumbral3 = $("#Cu3").val();
    let vp = $("#vam").val();
    let z4 = $("#z4").val();
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=athletesathlete/savesettings",
        data: {
            "athlete_id": 146,
            "cumbral1": cumbral1,
            "cumbral2": cumbral2,
            "cumbral3": cumbral3,
            "vp": vp,
            "z4": z4,
            "sport": $('#sport_sostenibilidad').val(),
        },
        success: function(data) {

            console.log(data);
            if (data != 'error') {
                swal("Registro guardado!", {
                    icon: "success",
                    buttons: {
                        confirm: {
                            className: 'btn btn-warning'
                        }
                    },
                });
            } else {
                swal("Error al guardar", {
                    icon: "error",
                    buttons: false,
                    timer: 3000,
                });
            }
        },
        error: function(data) {
            console.log(data);
            swal("Error al guardar", {
                icon: "error",
                buttons: false,
                timer: 3000,
            });
        },
    });
}

function limpiarUmbralSeleccionados() {}

function calculoZonasDinamicas() {
    //zonas dinamicas estimadas
    let zde1 = $("#zde1").val();
    let zde2 = $("#zde2").val();
    let zde3 = $("#zde3").val();
    let zde4 = $("#zde4").val();
    let zde5 = $("#zde5").val();
    let zde6 = $("#zde6").val();
    //
    let z2de1 = $("#z2de1").val();
    let z2de2 = $("#z2de2").val();
    let z2de3 = $("#z2de3").val();
    let z2de4 = $("#z2de4").val();
    let z2de5 = $("#z2de5").val();
    let z2de6 = $("#z2de6").val();

    //zonas dinamicas elegidas
    let zde1e = $("#zde1e").val();
    let zde2e = $("#zde2e").val();
    let zde3e = $("#zde3e").val();
    let zde4e = $("#zde4e").val();
    let zde5e = $("#zde5e").val();
    let zde6e = $("#zde6e").val();
    //
    let z2de1e = $("#z2de1e").val();
    let z2de2e = $("#z2de2e").val();
    let z2de3e = $("#z2de3e").val();
    let z2de4e = $("#z2de4e").val();
    let z2de5e = $("#z2de5e").val();
    let z2de6e = $("#z2de6e").val();

    let vc1 = $("#vc1").val();
    let d = $("#d").val();

    let Cu1 = $("#Cu1").val();
    let Cu2 = $("#Cu2").val();
    let Cu3 = $("#Cu3").val();

    let toFixed = 1; //carrera


    if ($("#sport_sostenibilidad").val() == 'B') {
        //minimo z4
        zde4 = vc1 * 0.98;
        $("#zde4").val(zde4.toFixed(0));
        //máximo z4
        z2de4 = vc1 * 1.05;
        $("#z2de4").val(z2de4.toFixed(0));
        //media z4
        $("#spanMedia1Zona4").html(((zde4 + z2de4) / 2).toFixed(0));

        //minimo z2
        zde2 = (zde4 * 0.80);
        $("#zde2").val(zde2.toFixed(0));
        //máximo z2
        z2de2 = z2de4 * 0.84;
        $("#z2de2").val(z2de2.toFixed(0));
        //media z2
        $("#spanMedia1Zona2").html(((zde2 + z2de2) / 2).toFixed(0));

        //minimo z6
        zde6 = (zde4 * 1.17);
        $("#zde6").val(zde6.toFixed(0));
        //máximo z6
        z2de6 = z2de4 * 1.16;
        $("#z2de6").val(z2de6.toFixed(0));
        //media z6
        $("#spanMedia1Zona6").html(((zde6 + z2de6) / 2).toFixed(0));



        //minimo z1
        zde1 = (zde2 * 0.60);
        $("#zde1").val(zde1.toFixed(0));
        //máximo z1
        z2de1 = zde2 - 1;
        $("#z2de1").val(z2de1.toFixed(0));
        //media z1
        $("#spanMedia1Zona1").html(((zde1 + z2de1) / 2).toFixed(0));
        //Ritmo minimo z1
        // $("#spanRitmo1Zona1").html(getRitmo(zde1));
        // $("#spanRitmo1Zona11").html(getRitmo(z2de1));

        //minimo z3
        zde3 = z2de2 + 1;
        $("#zde3").val(zde3.toFixed(0));
        //máximo z3
        z2de3 = zde4 - 1;
        $("#z2de3").val(z2de3.toFixed(0));
        //media z3
        $("#spanMedia1Zona3").html(((zde3 + z2de3) / 2).toFixed(0));
        // //Ritmo minimo z3
        // $("#spanRitmo1Zona3").html(getRitmo(zde3));
        // $("#spanRitmo1Zona31").html(getRitmo(z2de3));

        //minimo z5
        zde5 = z2de4 + 1;
        $("#zde5").val(zde5.toFixed(0));
        //máximo z5
        z2de5 = zde6 - 1;
        $("#z2de5").val(z2de5.toFixed(0));
        //media z5
        $("#spanMedia1Zona5").html(((zde5 + z2de5) / 2).toFixed(0));
        // //Ritmo minimo z5
        // $("#spanRitmo1Zona5").html(getRitmo(zde5));
        // $("#spanRitmo1Zona51").html(getRitmo(z2de5));
    } else { //carrera
        //minimo z4
        zde4 = vc1 * 1.04;
        zde4 = (zde4 / 1000) * 3600;
        $("#zde4").val(zde4.toFixed(1));
        //máximo z4
        z2de4 = vc1 * 1.07;
        z2de4 = (z2de4 / 1000) * 3600;
        $("#z2de4").val(z2de4.toFixed(toFixed));
        //media z4
        $("#spanMedia1Zona4").html(((zde4 + z2de4) / 2).toFixed(toFixed));
        //Ritmo minimo z4
        $("#spanRitmo1Zona4").html(getRitmo(zde4));
        $("#spanRitmo1Zona41").html(getRitmo(z2de4));

        //minimo z2
        let coeficienteZ2 = 0;
        if (vc1 <= 3.33) {
            coeficienteZ2 = 0.832;
        } else if (vc1 > 3.33 && vc1 < 3.88) {
            coeficienteZ2 = 0.842;
        } else if (vc1 > 3.88) {
            coeficienteZ2 = 0.86;
        }

        // alert('coeficienteZ2 ' + coeficienteZ2);
        zde2 = (zde4 * coeficienteZ2);
        // alert('zde4 ' + zde4);
        // alert('zde4*coeficienteZ2 ' + zde2);
        //zde2 = (zde2 / 1000) * 3600;
        $("#zde2").val(zde2.toFixed(1));
        //máximo z2
        z2de2 = zde2 + 0.5;
        // alert('zde2 + 0.5 ' + z2de2);
        //z2de2 = (z2de2 / 1000) * 3600;
        // alert('(z2de2 / 1000) * 3600== ' + z2de2);
        $("#z2de2").val(z2de2.toFixed(1));
        //media z2
        $("#spanMedia1Zona2").html(((zde2 + z2de2) / 2).toFixed(1));
        //Ritmo minimo z2
        $("#spanRitmo1Zona2").html(getRitmo(zde2));
        $("#spanRitmo1Zona21").html(getRitmo(z2de2));

        //minimo z6
        zde6 = (zde4 * 1.17);
        $("#zde6").val(zde6.toFixed(1));
        //máximo z6
        z2de6 = z2de4 * 1.17;
        $("#z2de6").val(z2de6.toFixed(1));
        //media z6
        $("#spanMedia1Zona6").html(((zde6 + z2de6) / 2).toFixed(1));
        //Ritmo minimo z6
        $("#spanRitmo1Zona6").html(getRitmo(zde6));
        $("#spanRitmo1Zona61").html(getRitmo(z2de6));

        //minimo z1
        zde1 = (zde2 * 0.70);
        $("#zde1").val(zde1.toFixed(1));
        //máximo z1
        z2de1 = zde2 - 0.1;
        $("#z2de1").val(z2de1.toFixed(1));
        //media z1
        $("#spanMedia1Zona1").html(((zde1 + z2de1) / 2).toFixed(1));
        //Ritmo minimo z1
        $("#spanRitmo1Zona1").html(getRitmo(zde1));
        $("#spanRitmo1Zona11").html(getRitmo(z2de1));

        //minimo z3
        zde3 = z2de2 + 0.1;
        $("#zde3").val(zde3.toFixed(1));
        //máximo z3
        z2de3 = zde4 - 0.1;
        $("#z2de3").val(z2de3.toFixed(1));
        //media z3
        $("#spanMedia1Zona3").html(((zde3 + z2de3) / 2).toFixed(1));
        //Ritmo minimo z3
        $("#spanRitmo1Zona3").html(getRitmo(zde3));
        $("#spanRitmo1Zona31").html(getRitmo(z2de3));

        //minimo z5
        zde5 = z2de4 + 0.1;
        $("#zde5").val(zde5.toFixed(1));
        //máximo z5
        z2de5 = zde6 - 0.1;
        $("#z2de5").val(z2de5.toFixed(1));
        //media z5
        $("#spanMedia1Zona5").html(((zde5 + z2de5) / 2).toFixed(1));
        //Ritmo minimo z5
        $("#spanRitmo1Zona5").html(getRitmo(zde5));
        $("#spanRitmo1Zona51").html(getRitmo(z2de5));
    }

    if ($("#sport_sostenibilidad").val() == 'B') {
        $("#label-media").html('Watts');
        $("#label-velocidad").html('Watts a Watts');
        $("#label-media2").html('Watts');
        $("#label-velocidad2").html('Watts a Watts');
        $("#label-z4").html('Z4 (W)');
        $(".div-vc_minkm").hide();
        $(".tdRitmo").hide();
        // $(".tdRitmo").css('display','none');
        // alert(99);
    } else {
        $("#label-media").html('Media');
        $("#label-velocidad").html('Velocidad');
        $("#label-media2").html('Media');
        $("#label-velocidad2").html('Velocidad');
        $("#label-z4").html('Z4 (km/h)');
        $(".div-vc_minkm").show();
        $(".tdRitmo").show();
    }

    //zonas dinamicas elegidas CALCULOS
    let vam = $("#vam").val();
    let z4 = $("#z4").val();

    ////////////////////////////////////////
    //////////////// CU 1-1 ////////////////
    ////////////////////////////////////////
    if ($("#sport_sostenibilidad").val() == 'B') {
        let seleccionCoach1 = 0;
        let seleccionCoach2 = 0;
        let seleccionCoach3 = 0;
        if (Cu1 == 84) {
            seleccionCoach1 = ((0.84 * vc1));
        } else if (Cu1 == 85) {
            seleccionCoach1 = 0.85 * z4;
        } else if (Cu1 == 80) {
            seleccionCoach1 = ((0.80 * vc1));
        } else if (Cu1 == 71) {
            seleccionCoach1 = (0.71 * vam);
        }

        if (Cu2 == 98) {
            seleccionCoach2 = ((0.98 * vc1));
        } else if (Cu2 == 105) {
            seleccionCoach2 = ((1.05 * vc1));
        } else if (Cu2 == 'Z4') {
            seleccionCoach2 = z4;
        } else if (Cu2 == 81) {
            seleccionCoach2 = (0.81 * vam);
        }

        if (Cu3 == 116) {
            seleccionCoach3 = (1.16 * z4);
        } else if (Cu3 == 117) {
            seleccionCoach3 = (1.17 * z4);
        } else if (Cu3 == 'VAM/PAM') {
            seleccionCoach3 = vam;
        } else if (Cu3 == 120) {
            seleccionCoach3 = ((1.20 * vc1));
        }


        //minimo z2
        zde2e = (seleccionCoach1 * 0.98);
        $("#zde2e").val(zde2e.toFixed(0));
        //maximo z2
        z2de2e = (seleccionCoach1 * 1.02);
        $("#z2de2e").val(z2de2e.toFixed(0));
        //media z2
        $("#spanMedia2Zona2").html(((zde2e + z2de2e) / 2).toFixed(0));
        // //Ritmo minimo z2
        // $("#spanRitmo2Zona2").html(getRitmo(zde2e));
        // $("#spanRitmo2Zona21").html(getRitmo(z2de2e));

        //minimo z4
        zde4e = (seleccionCoach2 * 0.98);
        $("#zde4e").val(zde4e.toFixed(0));
        //maximo z4
        z2de4e = (seleccionCoach2 * 1.02);
        $("#z2de4e").val(z2de4e.toFixed(0));
        //media z4
        $("#spanMedia2Zona4").html(((zde4e + z2de4e) / 2).toFixed(0));
        // //Ritmo minimo z4
        // $("#spanRitmo2Zona4").html(getRitmo(zde4e));
        // $("#spanRitmo2Zona41").html(getRitmo(z2de4e));

        //minimo z6
        zde6e = (seleccionCoach3 * 0.98);
        $("#zde6e").val(zde6e.toFixed(0));
        //maximo z6
        z2de6e = (seleccionCoach3 * 1.02);
        $("#z2de6e").val(z2de6e.toFixed(0));
        //media z6
        $("#spanMedia2Zona6").html(((zde6e + z2de6e) / 2).toFixed(0));
        // //Ritmo minimo z6
        // $("#spanRitmo2Zona6").html(getRitmo(zde6e));
        // $("#spanRitmo2Zona61").html(getRitmo(z2de6e));

        //minimo z1
        zde1e = zde2e * 0.60;
        $("#zde1e").val(zde1e.toFixed(0));
        //maximo z1
        z2de1e = zde2e - 1;
        $("#z2de1e").val(z2de1e.toFixed(0));
        //media z1
        $("#spanMedia2Zona1").html(((zde1e + z2de1e) / 2).toFixed(0));
        // //Ritmo minimo z1
        // $("#spanRitmo2Zona1").html(getRitmo(zde1e));
        // $("#spanRitmo2Zona11").html(getRitmo(z2de1e));

        //minimo z3
        zde3e = z2de2e + 1;
        $("#zde3e").val(zde3e.toFixed(0));
        //maximo z3
        z2de3e = zde4e - 1;
        $("#z2de3e").val(z2de3e.toFixed(0));
        //media z3
        $("#spanMedia2Zona3").html(((zde3e + z2de3e) / 2).toFixed(0));
        // //Ritmo minimo z3
        // $("#spanRitmo2Zona3").html(getRitmo(zde3e));
        // $("#spanRitmo2Zona31").html(getRitmo(z2de3e));

        //minimo z5
        zde5e = z2de4e + 1;
        $("#zde5e").val(zde5e.toFixed(0));
        //maximo z5
        z2de5e = zde6e - 1;
        $("#z2de5e").val(z2de5e.toFixed(0));
        //media z5
        $("#spanMedia2Zona5").html(((zde5e + z2de5e) / 2).toFixed(0));
        // //Ritmo minimo z5
        // $("#spanRitmo2Zona5").html(getRitmo(zde5e));
        // $("#spanRitmo2Zona51").html(getRitmo(z2de5e));
    } else { //carrera
        let seleccionCoach1 = 0;
        let seleccionCoach2 = 0;
        let seleccionCoach3 = 0;
        if (Cu1 == 84.2) {
            seleccionCoach1 = ((0.842 * vc1) / 1000) * 3600;
        } else if (Cu1 == 85) {
            seleccionCoach1 = 0.85 * z4;
        } else if (Cu1 == 83.2) {
            seleccionCoach1 = ((0.832 * vc1) / 1000) * 3600;
        } else if (Cu1 == 71) {
            seleccionCoach1 = (0.71 * vam);
        }

        if (Cu2 == 104) {
            seleccionCoach2 = ((1.04 * vc1) / 1000) * 3600;
        } else if (Cu2 == 107) {
            seleccionCoach2 = ((1.07 * vc1) / 1000) * 3600;
        } else if (Cu2 == 'Z4') {
            seleccionCoach2 = z4;
        } else if (Cu2 == 81) {
            seleccionCoach2 = (0.81 * vam);
        }

        if (Cu3 == 116) {
            seleccionCoach3 = (1.16 * z4);
        } else if (Cu3 == 117) {
            seleccionCoach3 = (1.17 * z4);
        } else if (Cu3 == 'VAM/PAM') {
            seleccionCoach3 = vam;
        } else if (Cu3 == 120) {
            seleccionCoach3 = ((1.20 * vc1) / 1000) * 3600;
        }


        //minimo z2
        zde2e = (seleccionCoach1 * 0.98);
        $("#zde2e").val(zde2e.toFixed(1));
        //maximo z2
        z2de2e = (seleccionCoach1 * 1.02);
        $("#z2de2e").val(z2de2e.toFixed(1));
        //media z2
        $("#spanMedia2Zona2").html(((zde2e + z2de2e) / 2).toFixed(1));
        //Ritmo minimo z2
        $("#spanRitmo2Zona2").html(getRitmo(zde2e));
        $("#spanRitmo2Zona21").html(getRitmo(z2de2e));

        //minimo z4
        zde4e = (seleccionCoach2 * 0.98);
        $("#zde4e").val(zde4e.toFixed(1));
        //maximo z4
        z2de4e = (seleccionCoach2 * 1.02);
        $("#z2de4e").val(z2de4e.toFixed(1));
        //media z4
        $("#spanMedia2Zona4").html(((zde4e + z2de4e) / 2).toFixed(1));
        //Ritmo minimo z4
        $("#spanRitmo2Zona4").html(getRitmo(zde4e));
        $("#spanRitmo2Zona41").html(getRitmo(z2de4e));

        //minimo z6
        zde6e = (seleccionCoach3 * 0.98);
        $("#zde6e").val(zde6e.toFixed(1));
        //maximo z6
        z2de6e = (seleccionCoach3 * 1.02);
        $("#z2de6e").val(z2de6e.toFixed(1));
        //media z6
        $("#spanMedia2Zona6").html(((zde6e + z2de6e) / 2).toFixed(1));
        //Ritmo minimo z6
        $("#spanRitmo2Zona6").html(getRitmo(zde6e));
        $("#spanRitmo2Zona61").html(getRitmo(z2de6e));

        //minimo z1
        zde1e = zde2e * 0.70;
        $("#zde1e").val(zde1e.toFixed(1));
        //maximo z1
        z2de1e = zde2e - 0.1;
        $("#z2de1e").val(z2de1e.toFixed(1));
        //media z1
        $("#spanMedia2Zona1").html(((zde1e + z2de1e) / 2).toFixed(1));
        //Ritmo minimo z1
        $("#spanRitmo2Zona1").html(getRitmo(zde1e));
        $("#spanRitmo2Zona11").html(getRitmo(z2de1e));

        //minimo z3
        zde3e = z2de2e + 0.1;
        $("#zde3e").val(zde3e.toFixed(1));
        //maximo z3
        z2de3e = zde4e - 0.1;
        $("#z2de3e").val(z2de3e.toFixed(1));
        //media z3
        $("#spanMedia2Zona3").html(((zde3e + z2de3e) / 2).toFixed(1));
        //Ritmo minimo z3
        $("#spanRitmo2Zona3").html(getRitmo(zde3e));
        $("#spanRitmo2Zona31").html(getRitmo(z2de3e));

        //minimo z5
        zde5e = z2de4e + 0.1;
        $("#zde5e").val(zde5e.toFixed(1));
        //maximo z5
        z2de5e = zde6e - 0.1;
        $("#z2de5e").val(z2de5e.toFixed(1));
        //media z5
        $("#spanMedia2Zona5").html(((zde5e + z2de5e) / 2).toFixed(1));
        //Ritmo minimo z5
        $("#spanRitmo2Zona5").html(getRitmo(zde5e));
        $("#spanRitmo2Zona51").html(getRitmo(z2de5e));
    }

    ////////////////////////////////////////
    ////////////// fin CU 1-1 //////////////
    ////////////////////////////////////////
}

//alert(getRitmo(10.8));
function getRitmo(kmh) {
    // let ms = kmh*1000/3600;
    // let minkm = ms * 60;
    // let min = Math.floor(minkm / 60);
    // let sec = Math.round((minkm - min) * 60);
    // // Formateamos el resultado como "mm:ss"
    // let res = min + ":" + (sec < 10 ? "0" + sec : sec);
    // return res;

    // let valorStr = String(kmh);// let tm = valorStr.split('.');
    if (isNaN(kmh) || kmh <= 0) {
        console.log("km/h debe ser mayor a 0", kmh);
        return 0;
    }
    let minPerKm = 60 / kmh;
    if (!isFinite(minPerKm)) {
        console.log("Error: Invalida la conversión", kmh);
        return 0;
    }
    if (kmh < 1) {
        console.log("Error: valor debe ser mayor a 1", kmh);
        return 0;
    }
    console.log('exito', kmh);
    // Extraemos los minutos y los segundos
    let minutes = Math.floor(minPerKm);
    let seconds = Math.round((minPerKm - minutes) * 60);
    // Formateamos el resultado como "mm:ss"
    let result = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

    return result;
}

function calculoMediasMaximas() {
    //Mejores marcas actuales o estimadas
    //distancia
    let d1 = $("#d1").val();
    let d2 = $("#d2").val();
    let d3 = $("#d3").val();
    let d4 = $("#d4").val();
    let d5 = $("#d5").val();
    let d6 = $("#d6").val();
    //tiempo
    let t1 = $("#t1").val();
    let t2 = $("#t2").val();
    let t3 = $("#t3").val();
    let t4 = $("#t4").val();
    let t5 = $("#t5").val();
    let t6 = $("#t6").val();

    /*d1 == '' ? 0 : (d1);
    d2 == '' ? 0 : (d2);
    d3 == '' ? 0 : (d3);
    d4 == '' ? 0 : (d4);
    d5 == '' ? 0 : (d5);
    d6 == '' ? 0 : (d6);*/

    let segt1 = t1 == '' ? 0 : getSegundos(t1);
    let segt2 = t2 == '' ? 0 : getSegundos(t2);
    let segt3 = t3 == '' ? 0 : getSegundos(t3);
    let segt4 = t4 == '' ? 0 : getSegundos(t4);
    let segt5 = t5 == '' ? 0 : getSegundos(t5);
    let segt6 = t6 == '' ? 0 : getSegundos(t6);


    if ($("#sport_sostenibilidad").val() == 'B') {
        if (segt1 != 0) {
            segt1 = 1 / segt1;
        }
        if (segt2 != 0) {
            segt2 = 1 / segt2;
        }
        if (segt3 != 0) {
            segt3 = 1 / segt3;
        }
        if (segt4 != 0) {
            segt4 = 1 / segt4;
        }
        if (segt5 != 0) {
            segt5 = 1 / segt5;
        }
        if (segt6 != 0) {
            segt6 = 1 / segt6;
        }
    }
    console.log('segT1=', segt1);
    console.log('segT2=', segt2);
    console.log('segT3=', segt3);
    console.log('segT4=', segt4);
    console.log('segT5=', segt5);
    console.log('segT6=', segt6);
    //let y = [Number(d1), Number(d2), Number(d3), Number(d4), Number(d5), Number(d6)];
    let y = [];
    let x = [];
    //let x = [segt1, segt2, segt3, segt4, segt5, segt6];
    //let xy=[[Number(d1),segt1],[Number(d2),segt2],[Number(d3),segt3],[Number(d4),segt4],[Number(d5),segt5],[Number(d6),segt6]];
    // let xy = [
    //     [segt1, Number(d1)],
    //     [segt2, Number(d2)],
    //     [segt3, Number(d3)],
    //     [segt4, Number(d4)],
    //     [segt5, Number(d5)],
    //     [segt6, Number(d6)]
    // ];

    let xy = [];

    // Condición para agregar [segt1, Number(d1)] solo si segt1 > 0
    if (Number(segt1) > 0) {
        x.push(segt1);
        y.push(Number(d1));
        xy.push([segt1, Number(d1)]);
    }

    // Agregar los demás elementos siempre
    if (Number(segt2) > 0) {
        x.push(segt2);
        y.push(Number(d2));
        xy.push([segt2, Number(d2)]);
    }
    if (Number(segt3) > 0) {
        x.push(segt3);
        y.push(Number(d3));
        xy.push([segt3, Number(d3)]);
    }
    if (Number(segt4) > 0) {
        x.push(segt4);
        y.push(Number(d4));
        xy.push([segt4, Number(d4)]);
    }
    if (Number(segt5) > 0) {
        x.push(segt5);
        y.push(Number(d5));
        xy.push([segt5, Number(d5)]);
    }
    // Agregar segt6 solo si es mayor a 0
    if (Number(segt6) > 0) {
        x.push(segt6);
        y.push(Number(d6));
        xy.push([segt6, Number(d6)]);
    }

    getZonasDinamicas(x, y, xy);
}


function getSegundos(tiempo) {
    const [horas, minutos, segundos] = tiempo.split(":").map(Number);
    return (horas * 3600) + (minutos * 60) + segundos;
}

function calculateLogarithmicTrend(data) {
    let sumLnX = 0,
        sumY = 0,
        sumLnX2 = 0,
        sumLnXY = 0;
    const n = data.length;

    data.forEach(([x, y]) => {
        const lnX = Math.log(x);
        sumLnX += lnX;
        sumY += y;
        sumLnX2 += lnX * lnX;
        sumLnXY += lnX * y;
    });

    const b = (n * sumLnXY - sumLnX * sumY) / (n * sumLnX2 - sumLnX * sumLnX);
    const a = (sumY - b * sumLnX) / n;

    return {
        a,
        b
    };
}

function roundRegresion(num, dec) {
    var exp = Math.pow(10, dec || 2); // 2 decimales por defecto
    return parseInt(num * exp, 10) / exp;
}

function chartZonasDinamicas(x, y, xy, vc, d_prima, r2, vc_minkm, toFixed, deporte) {
    console.log(x, y, xy, vc, d_prima, r2);
    $('#vc_minkm').val(vc_minkm);
    if (deporte == "B") { //solo en bici se invierte
        $("#vc1").val(d_prima.toFixed(0));
        $("#d").val(vc.toFixed(toFixed));
    } else {
        $("#vc1").val(vc.toFixed(toFixed));
        $("#d").val(d_prima.toFixed(0));
    }
    $("#r2_1").val(r2);
    const lineaAjustada = x.map(t => [Number(t), vc * Number(t) + d_prima]);
    const {
        a,
        b
    } = calculateLogarithmicTrend(xy);
    const logarithmicTrendline = xy.map(([x]) => [x, a + b * Math.log(x)]);
    console.log('linea tendencia: ', lineaAjustada);
    Highcharts.chart('containerzonasdinamicas', {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            width: null,
            //height: 400
        },
        title: {
            text: 'Tiempo (s) / Distancia (m)'
        },
        xAxis: {
            title: {
                text: 'Tiempo'
            }
        },
        yAxis: {
            title: {
                text: 'Distancia'
            }
        },


        series: [{
                name: 'Datos D y T',
                type: 'scatter',
                data: xy,
                marker: {
                    radius: 8,
                    symbol: 'circle'
                },
                color: 'rgba(80, 180, 50, 0.8)'
            },
            {
                name: 'Tendencia',
                type: 'line',
                data: lineaAjustada,
                color: '#00395E',
                marker: {
                    enabled: false
                },
                dashStyle: 'Solid'
            }
            /*,
                        {
                            name: 'Tendencia (Logarítmica)',
                            type: 'line',
                            data: logarithmicTrendline,
                            color: 'rgba(5, 141, 199, 0.8)',
                            marker: {
                                enabled: false
                            },
                            dashStyle: 'Dash'
                        }/* */
        ]
    });
    /*Highcharts.chart('containerzonasdinamicas', {

        title: {
            text: 'Distancia (m)',
            style: {
                fontSize: '12px' // Cambia el tamaño de la fuente del título
            }
        },

        accessibility: {
            point: {
                valueDescriptionFormat: '{xDescription}{separator}{value} million(s)'
            }
        },

        xAxis: {
            //categories: data.ejex,
            title: {
                text: 'Tiempo'
            }
        },

        yAxis: {
            type: 'logarithmic',
            title: {
                text: '',
                style: {
                    fontSize: '11px' // Cambia el tamaño de la fuente del título del eje Y
                }
            },

        },

        tooltip: {
            headerFormat: '<b>{series.name}</b><br />',
            pointFormat: '{point.y}',
            style: {
                fontSize: '10px' // Cambia el tamaño de la fuente del tooltip
            }
        },

        series: [{
            name: 'Tiempo',
            //keys: ['y', 'color'],
            data: xy
                
                ,
            dataLabels: {
                style: {
                    fontSize: '12px' // Cambia el tamaño de la fuente de las etiquetas de los puntos
                }
            }
        }]
    });/* */
}

function getZonasDinamicas(x, y, xy) {
    console.log(x, y, xy);
    swal("Espere un momento. Cargando..", {
        buttons: false,
        timer: 700,
    });
    let toFixed = 1;
    if ($("#sport_sostenibilidad").val() == 'B') {
        toFixed = 0;
    }
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=athletesathlete/getmediasmaximasseleccionadas",
        data: {
            "x": x,
            "y": y,
            "deporte": $("#sport_sostenibilidad").val(),
        },
        success: function(data) {
            data = JSON.parse(data);

            console.log('test:::', data);
            chartZonasDinamicas(x, y, xy, data.vc, data.d_prima, data.r2, data.vc_minkm, toFixed, $(
                "#sport_sostenibilidad").val());
        },
        error: function(data) {},
    }); //content

}
//calculoMediasMaximas();calculoZonasDinamicas();

$(function() {
    $('#btnCombinar').click(function() {
        $('#modalCombinarMeso').modal('show');
    });
    $('#btnMover').click(function() {
        if ($("#txtFechaInicial").val() == "") {
            swal("Campos requeridos!",
                "Seleccione una fecha para poder realizar el cambio", {
                    icon: "warning",
                    buttons: {
                        confirm: {
                            className: 'btn btn-warning'
                        }
                    },
                });
        } else {
            alertify.confirm(
                'Confirmación',
                'Seguro que desea cambiar de fecha?',
                function() {
                    //mover
                    swal("Espere un momento. Cargando..", {
                        buttons: false,
                        timer: 1000,
                    });

                    $.ajax({
                        type: 'get',
                        url: "/web/index.php?r=athletesathlete/movermm",
                        data: {
                            "id": $('#txtIDDachMover').val(),
                            "txtFechaInicial": $("#txtFechaInicial").val(),
                            "profileID": "146",
                        },
                        success: function(data) {
                            if (data == "Exito") {
                                swal("Registro guardado!",
                                    "Espere un momento.", {
                                        icon: "success",
                                        buttons: {
                                            confirm: {
                                                className: 'btn btn-warning'
                                            }
                                        },
                                    });
                                /*swal("Fecha cambiada correctamente", {
                                	icon: "success",
                                	buttons: false,
                                	timer: 3000,
                                });*/
                                setTimeout(function() {
                                    location.reload();
                                }, 3000);
                            } else if (data == "fecha_ocupada") {
                                swal("Fecha ocupada",
                                    "Seleccione otra fecha", {
                                        icon: "warning",
                                        buttons: {
                                            confirm: {
                                                className: 'btn btn-warning'
                                            }
                                        },
                                    });
                            } else {
                                swal("Error al guardar", {
                                    icon: "error",
                                    buttons: false,
                                    timer: 3000,
                                });
                            }
                        },
                        error: function(data) {},
                    });
                    //fin mover
                },
                function() {

                }
            );
        }
    });
    $('#buttonConfiguracionSemanal').click(function(){
        $('#modalConfiguracionSemanal').modal('show');
    });
});

function llamaComentario(idfeedback) {
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=athletesathlete/getcoments",
        data: {
            "idfeedback": idfeedback
        },
        success: function(data) {
            $("#modalComentarioAtleta").modal("show");
            var resp = data.split("###");
            $("#comentDato1").html(resp[0]);
            $("#comentDato2").html(resp[1]);
            $("#comentDato3").html(resp[2]);
            $("#comentDato4").html(resp[3]);
            $("#comentDato5").html(resp[4]);
            /*swal("Registro guardado!", "Espere un momento.", 
			{
				icon: "success",
			}).then((result) => {
			  //window.location.reload();
			});*/
        },
        error: function(data) {},
    }); //content
}

function filtrarCombinacion() {
    //todos
    //alert($('#distance_select').val() + ' - ' + $('#sport_select').val() + ' - ' + $('#nlevel_select').val() + ' - ' + $('#ncontain_select').val() + ' - ' + $('#numero_select').val() + ' - ');
    /*alert($('#distance_select').val() + ' - ' + $('#sport_select').val() + ' - ' + $('#numero_select').val() + ' - ');
    alert($('#blevel_select').val() + ' - ' + $('#nlevel_select').val() + ' - ' + $('#clevel_select').val() + ' - ');
    alert($('#bcontain_select').val() + ' - ' + $('#ncontain_select').val() + ' - ' + $('#ccontain_select').val());
    /*return;*/

    let codigoMesociclo = $('#distance_select').val();

    if ($('#distance_select').val().trim() == "" || $('#numero_select').val() == "") {
        swal("Campos requeridos!",
            "Seleccione los datos del formulario para poder filtrar.", {
                icon: "warning",
                buttons: {
                    confirm: {
                        className: 'btn btn-warning'
                    }
                },
            });
        return false;
    }

    swal("Espere un momento", {
        buttons: false,
        timer: 1000,
    });
    $("#add_ss").hide();
    $("#btnAddFiltro").show();
    load_frameCombinarMeso(codigoMesociclo, 2);
}

function getEspere() {
    swal("Espere un momento.. Eliminando", {
        icon: "warning",
        buttons: false,
    });
}

function load_frameCombinarMeso(id, type) {
    $('#modalCombinarMeso').modal('hide');
    $('#previewModal').modal('show');
    //$('#add_ss').hide();
    var dist = $('#distance_select').val();
    var sport = $('#hddCombinaMesoDeporteID').val();
    var numM = $('#numero_select').val();
    //level por deporte
    var blevel = $('#blevel_select').val();
    var nlevel = $('#nlevel_select').val();
    var clevel = $('#clevel_select').val();
    //content por deporte
    var bcont = $('#bcontain_select').val();
    var ncont = $('#ncontain_select').val();
    var ccont = $('#ccontain_select').val();

    var urlCombinar = '&dis=' + dist + '&spor=' + sport + '&blevel=' + blevel + '&nlevel=' + nlevel + '&clevel=' +
        clevel + '&bcont=' + bcont + '&ncont=' + ncont + '&ccont=' + ccont + '&numM=' + numM;

    ss = id.split('_');
    url = 'index.php?r=mesocyclesmesocycle/update&id=' + 1 + '&cp=' + 0 +
        '&preview=true&combinar=true&orgn=dash&perfilsel=146' + urlCombinar;

    console.log(url);
    $('#iframe').attr('src', url);
    $('#iframe').reload();

}


function scrollvideo() {
    //window.scrollTo(0, 330);
}
$("#pronostico").hide();
$('#btn-actualizar').hide();
var data_grafica = '';

function getSostenibilidad(update) {
    const loadingSwal = swal({
        text: "Espere un momento. Cargando..",
        buttons: false, // Desactiva botones
        closeOnEsc: false, // No se cierra al presionar "Escape"
        closeOnClickOutside: false, // No se cierra al hacer clic fuera del modal
    });
    if (update) {
        data = {
            "id": 146,
            "sport_sostenibilidad": $('#sport_sostenibilidad').val(),
            "fecha_sostenibilidad": $('#fecha_sostenibilidad').val(),
            '5s': $('#5s').is(':checked'),
            '15s': $('#15s').is(':checked'),
            '30s': $('#30s').is(':checked'),
            '60s': $('#60s').is(':checked'),
            '180s': $('#180s').is(':checked'),
            '300s': $('#300s').is(':checked'),
            '1200s': $('#1200s').is(':checked'),
            '2400s': $('#2400s').is(':checked'),
            '3600s': $('#3600s').is(':checked'),
            '5400s': $('#5400s').is(':checked'),
            '7200s': $('#7200s').is(':checked'),
            '9000s': $('#9000s').is(':checked'),
            '10800s': $('#10800s').is(':checked')
        };
    } else {
        data = {
            "id": 146,
            "sport_sostenibilidad": $('#sport_sostenibilidad').val(),
            "fecha_sostenibilidad": $('#fecha_sostenibilidad').val(),
        };
    }
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=athletesathlete/getsostenibilidad",
        data: data,
        success: function(data) {
            console.log('assas', data);
            data = JSON.parse(data);

            $("#htmlsostenibilidad").html(data.html);
            if (data.html !== 'No se encontraron resultados') {
                $("#pronostico").show();
                $('#btn-actualizar').show();
            } else {
                $("#pronostico").hide();
                $('#btn-actualizar').hide();
            }
            data_grafica = data;
            swal.close();
            doChart(data);


        },
        error: function(data) {
            console.error("Error en la solicitud AJAX:", data);
            swal.close();
            swal("Error", "No se pudo cargar la sostenibilidad. Intenta nuevamente.", "error");


        },
    }); //content
}

function calcularR2Logaritmica(x, y, m, b) {
    const n = x.length;
    let ssTot = 0; // Suma de cuadrados totales
    let ssRes = 0; // Suma de cuadrados residuales
    const yMean = y.reduce((sum, value) => sum + value, 0) / n;

    for (let i = 0; i < n; i++) {
        const yPred = a * Math.log(b * x[i]) + c; // Predicción con el modelo logarítmico
        ssTot += Math.pow(y[i] - yMean, 2); // Suma de cuadrados totales
        ssRes += Math.pow(y[i] - yPred, 2); // Suma de cuadrados residuales
    }

    return 1 - (ssRes / ssTot);
    // const n = x.length;
    // let ssTot = 0; // Suma de cuadrados totales
    // let ssRes = 0; // Suma de cuadrados residuales
    // const yMean = y.reduce((sum, value) => sum + value, 0) / n;

    // for (let i = 0; i < n; i++) {
    //     const yPred = m * x[i] + b;
    //     ssTot += Math.pow(y[i] - yMean, 2);
    //     ssRes += Math.pow(y[i] - yPred, 2);
    // }

    // return 1 - (ssRes / ssTot);
}

function calculateLogarithmicTrend(data) {
    let sumLnX = 0,
        sumY = 0,
        sumLnX2 = 0,
        sumLnXY = 0;
    const n = data.length;
    console.log('distanciaLog-init', data);
    data.forEach(([x, y]) => {
        if (x != 0 && y != 0) {
            const lnX = Math.log(x);
            console.log('calculo:', x, y, lnX);
            sumLnX += lnX;
            sumY += y;
            sumLnX2 += lnX * lnX;
            sumLnXY += lnX * y;
        }
    });

    let b = (n * sumLnXY - sumLnX * sumY) / (n * sumLnX2 - sumLnX * sumLnX);
    let a = (sumY - b * sumLnX) / n;
    //console.log({ a, b });
    return {
        a,
        b
    };
}

function calculateLogarithmicTrendLog(data) {
    // Inicializar las variables necesarias
    console.log('test-data', data);
    let n = data.length;
    let sumLnX = 0;
    let sumY = 0;
    let sumLnXTimesY = 0;
    let sumLnXSquared = 0;

    let yObserved = [];
    let yPredicted = [];

    // Calcular los valores necesarios para la regresión logarítmica
    data.forEach(([x, y]) => {
        if (x !== 0 && y !== 0) {
      //      console.log('test-data-X,Y', x, y);
            let lnX = Math.log(x); // Logaritmo natural de x

            sumLnX += lnX;
            sumY += y;
            sumLnXTimesY += lnX * y;
            sumLnXSquared += lnX * lnX;

            // Guardar los valores de y observados
            yObserved.push(y);

            // Predecir los valores de y utilizando la regresión logarítmica
        }
    });

    // Calcular los coeficientes de la regresión logarítmica
    let b = (n * sumLnXTimesY - sumLnX * sumY) / (n * sumLnXSquared - sumLnX * sumLnX);
    let a = (sumY - b * sumLnX) / n;

    // Calcular los valores predichos de y usando la ecuación de regresión logarítmica
    data.forEach(([x, y]) => {
        if (x !== 0 && y !== 0) {
            let yPred = a + b * Math.log(x); // y = a + b * ln(x)
            yPredicted.push(yPred);
        }
    });

    // Calcular la media de y
    let meanY = sumY / n;
    console.log('meanY', meanY);
    // Calcular la suma de los cuadrados totales (SST)
    let SST = 0;
    for (let i = 0; i < n; i++) {
    //    console.log('forsst', i, yObserved[i], meanY, Math.pow(yObserved[i] - meanY, 2));
        if (yObserved[i]) {
            SST += Math.pow(yObserved[i] - meanY, 2);
        }

    }

    // Calcular la suma de los cuadrados de los residuos (SSE)
    let SSE = 0;
    for (let i = 0; i < n; i++) {
      //  console.log('forsse', i, yObserved[i], yPredicted[i], Math.pow(yObserved[i] - yPredicted[i], 2));

        if (yObserved[i] && yPredicted[i]) {
            SSE += Math.pow(yObserved[i] - yPredicted[i], 2);
        }
    }
    //console.log('SSE', SSE);
    //console.log('SST', SST);

    // Calcular el coeficiente de determinación (R^2)
    let r2 = 1 - (SSE / SST); // R²
    console.log('R²:', r2);
    //return { a, b, r2 };

    // Devolver los coeficientes y el valor de R^2
    return {
        a: a,
        b: b,
        r2: r2,
        equation: `y = ${a.toFixed(4)} + ${b.toFixed(4)} * ln(x)`, // Mostrar la ecuación ajustada
        R2value: r2.toFixed(4) // Mostrar el valor de R^2
    };
}

function calculateLogarithmicTrendLogDELETED(data) {
    let sumLnX = 0,
        sumY = 0,
        sumLnX2 = 0,
        sumLnXY = 0;
    const n = data.length;

    console.log('distanciaLog-init', data);
    data.forEach(([x, y]) => {
        if (x !== 0 && y !== 0) {
            const lnX = Math.log(x);
            console.log('calculo:', x, y, lnX);
            sumLnX += lnX;
            sumY += y;
            sumLnX2 += lnX * lnX;
            sumLnXY += lnX * y;
        }
    });

    let b = (n * sumLnXY - sumLnX * sumY) / (n * sumLnX2 - sumLnX * sumLnX);
    let a = (sumY - b * sumLnX) / n;
    console.log({
        a,
        b
    });

    // Ahora calculamos el R²
    let ssTot = 0; // Suma de cuadrados totales
    let ssRes = 0; // Suma de cuadrados residuales
    const yMean = sumY / n;

    // Calculamos los valores predichos y las sumas de cuadrados
    data.forEach(([x, y]) => {
        if (x !== 0 && y !== 0) {
            const lnX = Math.log(x);
            const yPred = a + b * lnX; // Predicción según el modelo logarítmico
            ssTot += Math.pow(y - yMean, 2); // Suma de cuadrados totales
            ssRes += Math.pow(y - yPred, 2); // Suma de cuadrados residuales
        }
    });

    const r2 = 1 - (ssRes / ssTot); // R²
    console.log('R²:', r2);
    return {
        a,
        b,
        r2
    };
}
var A_distancia = -1.9665490881722816;
var B_distancia = 31.099783710544287;
var R2_distancia = 0.9139556532956203;

var A_tiempo = -1.7815536957701041;
var B_tiempo = 27.052760783206512;
var R2_tiempo = 0.9362979388559064;

function doChart(data) {
    console.log('doChart', data);

    // Data retrieved from https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/
    let varA = [];
    let varB = [];
    let varC = [];
    let varDA = [];
    let varDB = [];
    let varATitle = 'Ritmo';
    let varBTitle = $('#sport_sostenibilidad').val() == 'B' ? 'Potencia' : 'Velocidad';
    let varDATitle = 'Ritmo';
    let varDBTitle = 'Velocidad'; //$('#sport_sostenibilidad').val() == 'B' ? 'Potencia' : 
    if (data.sport == 'C') {
        varA = data.max_g.ritmo;
        varB = data.max_g.velocidad;
        varC = data.max_g.distancia;
        varARecord = data.record_g.ritmo;
        varBRecord = data.record_g.velocidad;
        varDA = data.diff_g.ritmo;
        varDB = data.diff_g.velocidad;

        vc = data.max.ritmo.vc;
        d_prima = data.max.ritmo.d_prima;
        r2 = data.max.ritmo.r2;
        console.log('d_prima1', d_prima);

        //para varC:
        try {
            vc4 = data.max.distancia.vc;
            d_prima4 = data.max.distancia.d_prima;
            r2_4 = data.max.distancia.r2;

            console.log('test-');
            console.log('test-vc4', vc4);
            console.log('test-d_prima4', d_prima4);
            console.log('test-r2_4', r2_4);
        } catch (error) {
            //
        }
    }
    if (data.sport == 'N') {
        varA = data.max_g.ritmo;
        varARecord = data.record_g.ritmo;
        varDA = data.diff_g.ritmo;

        vc = data.max.ritmo.vc;
        d_prima = data.max.ritmo.d_prima;
        r2 = data.max.ritmo.r2;
    }
    if (data.sport == 'B') {
        varATitle = 'Potencia';
        varA = data.max_g.potencia;
        varB = data.max_g.velocidad;
        varC = data.max_g.distancia;
        varARecord = data.record_g.potencia;
        varBRecord = data.record_g.velocidad;
        varDA = data.diff_g.potencia;
        varDB = data.diff_g.velocidad;

        vc = data.max.potencia.vc;
        d_prima = data.max.potencia.d_prima;
        r2 = data.max.potencia.r2;
    }
    console.log(vc, d_prima, r2);
    $('#vc').html('VC = ' + (vc.toFixed(2)));
    $('#d_prima').html("D' = " + (d_prima.toFixed(0)));
    $('#r2').html('R2 = ' + roundRegresion(r2, 2));
    tx = data.ejex;
    //const lineaAjustada = tx.map(t => [Number(t), vc * t + d_prima]);
    let ritmo = calculateLogarithmicTrendLog(varA);
    const logarithmicTrendline = varA.map(([x]) => [x, ritmo.a + ritmo.b * Math.log(x)]);
    //console.log(calculateLogarithmicTrend(varB))
    let varA_B = varB;
    if ($('#sport_sostenibilidad').val() == 'B') {
        varA_B = varA;
    }
    let velocidad = calculateLogarithmicTrendLog(varA_B);
    console.log('array varB', varB, velocidad);
    console.log('varb-a', velocidad.a);
    console.log("varb-b", velocidad.b);
    console.log('varb-r2', velocidad.r2);
    //console.log(velocidad);
    const logarithmicTrendlinet2 = varB.map(([xt2]) => [xt2, velocidad.a + velocidad.b * Math.log(xt2)]);

    let distanciaLog = calculateLogarithmicTrendLog(varC);
    console.log('test-distanciaLog', distanciaLog);
    const logarithmicTrendlinet4 = varC.map(([xt2]) => [xt2, distanciaLog.a + distanciaLog.b * Math.log(xt2)]);
    console.log('test-lineaLogaritmica', logarithmicTrendlinet4);
    //const r2Log = calcularR2Logaritmica(data.ejexdistancia, data.max.velocidad, distanciaLog.a, distanciaLog.b);
    console.log('test-a = VC', distanciaLog.a);
    console.log("test-b = D'", distanciaLog.b);
    console.log('test-r2Log', distanciaLog.r2);
    $('#r2Pronostico').val(distanciaLog.r2.toFixed(3)); //


    A_distancia = distanciaLog.b;
    B_distancia = distanciaLog.a;
    R2_distancia = distanciaLog.r2;

    A_tiempo = velocidad.b;
    B_tiempo = velocidad.a;
    R2_tiempo = velocidad.r2;


    Highcharts.chart('container', {
        chart: {
            type: 'area',
            //type: 'spline',
        },
        title: {
            text: 'Comparativa Medias Máximas del período de tiempo vs Récords Personales'
        },
        xAxis: {
            //categories: data.ejex,
            title: {
                text: 'Tiempo (segundos)'
            }
        },
        yAxis: [{
                // Primer eje y
                title: {
                    text: 'Medias Máximas del período de tiempo'
                },
                minorGridLineWidth: 1,
                gridLineWidth: 1,
                alternateGridColor: null,
                labels: {
                    format: '{value}'
                },
                opposite: false,
                lineWidth: 2,
                tickInterval: 5
            }
            /*, {
            			// Segundo eje y
            			title: {
            				text: 'Diff'
            			},
            			minorGridLineWidth: 1,
            			gridLineWidth: 1,
            			alternateGridColor: null,
            			labels: {
            				format: '{value}'
            			},
            			opposite: true
            		}/** */
        ],
        plotOptions: {
            spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                },
            }
        },
        series: [
            /*{
            			name: 'Max - '+varATitle,
            			data: varA,
            			yAxis: 0,
            			color: '#003A5D'
            		}, {
            			name: 'Record - '+varATitle,
            			data: varARecord,
            			yAxis: 1,
            			color: '#25d366'
            		},{
            			name: 'Diff - '+varATitle,
            			data: varDA,
            			yAxis: 0,
            			color: '#dc3545'
            		},
            		*/
            {
                name: 'Max - ' + varBTitle,
                data: varB,
                yAxis: 0,
                color: '#0081b6'
            }, {
                name: 'Record - ' + varBTitle,
                data: varBRecord,
                yAxis: 0,
                color: '#00913b'
            }, {
                name: 'Diff - ' + varBTitle,
                data: varDB,
                yAxis: 0,
                color: '#bb2d3b'
            }
            /*,{
            			name:'Linea ajustada',
            			data:lineaAjustada,
            			yaxis:0,
            			color: '#000',
            		}*/
        ]
    }); /**/
    if (data.sport == 'C') {
        Highcharts.chart('container2', {
            chart: {
                type: 'scatter',
                zoomType: 'xy',
                width: null,
                height: 400
            },
            title: {
                text: 'Tendencia de Sostenibilidad según Medias Máximas del período de tiempo'
            },
            xAxis: {
                title: {
                    text: 'Tiempo (segundos)'
                }
            },
            yAxis: {
                title: {
                    text: 'Ritmo / km'
                },
                reversed: true,
            },


            series: [{
                    name: 'Max - ' + varATitle,
                    type: 'scatter',
                    data: varA,
                    marker: {
                        radius: 5,
                        symbol: 'circle'
                    },
                    color: 'rgba(80, 180, 50, 0.8)'
                },
                /*{
                    name: 'Tendencia - '+varATitle,
                    type: 'line',
                    data: lineaAjustada,
                    color: 'rgba(237, 86, 27, 0.8)',
                    marker: {
                        enabled: false
                    },
                    dashStyle: 'Solid'
                },*/
                {
                    name: 'Línea de Tendencia (Logarítmica)',
                    type: 'line',
                    data: logarithmicTrendline,
                    color: 'rgba(5, 141, 199, 0.8)',
                    marker: {
                        enabled: false
                    },
                    dashStyle: 'Dash'
                }
            ]
        });
    }else{
        $('#container2').html('');
    }
    Highcharts.chart('container3', {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            width: null,
            height: 400
        },
        title: {
            text: 'Tendencia de Sostenibilidad según Medias Máximas del período de tiempo'
        },
        xAxis: {
            title: {
                text: 'Tiempo (segundos)'
            }
        },
        yAxis: {
            title: {
                text: $('#sport_sostenibilidad').val() == 'B' ? 'Potencia (W)' : 'Velocidad (km/h)'
            }
        },


        series: [{
                name: 'Max - ' + varBTitle,
                type: 'scatter',
                data: $('#sport_sostenibilidad').val() == 'B' ? varA : varB,
                marker: {
                    radius: 5,
                    symbol: 'circle'
                },
                color: 'rgba(80, 180, 50, 0.8)'
            },
            /*{
            	name: 'Tendencia - '+varATitle,
            	type: 'line',
            	data: lineaAjustada,
            	color: 'rgba(237, 86, 27, 0.8)',
            	marker: {
            		enabled: false
            	},
            	dashStyle: 'Solid'
            },*/
            {
                name: 'Línea de Tendencia (Logarítmica)',
                type: 'line',
                data: logarithmicTrendlinet2,
                color: 'rgba(5, 141, 199, 0.8)',
                marker: {
                    enabled: false
                },
                dashStyle: 'Dash'
            }
        ]
    });
    /* DISTANCIA */
    console.log("dataC", varC);
    //alert(varC);
    Highcharts.chart('container4', {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            width: null,
            height: 400
        },
        title: {
            text: 'Tendencia de Sostenibilidad según Medias Máximas del período de tiempo'
        },
        xAxis: {
            title: {
                text: 'Distancia (metros)'
            }
        },
        yAxis: {
            title: {
                text: $('#sport_sostenibilidad').val() == 'B' ? 'Potencia (W)' : 'Velocidad (km/h)'
            }
        },


        series: [{
                name: 'Max - ' + varBTitle,
                type: 'scatter',
                data: varC,
                marker: {
                    radius: 5,
                    symbol: 'circle'
                },
                color: 'rgba(80, 180, 50, 0.8)'
            },
            {
                name: 'Línea de Tendencia (Logarítmica)',
                type: 'line',
                data: logarithmicTrendlinet4,
                color: 'rgba(5, 141, 199, 0.8)',
                marker: {
                    enabled: false
                },
                dashStyle: 'Dash'
            }
        ]
    });

}

$('#btnPronostico').click(function() {
    const deporte = $('#sport_sostenibilidad').val();
    const criterio = $('#cmbCriterio').val();
    const duracionDist = $('#txtDur_dist').val();
    const tipoDuracionDist = $('#cmbTipoDuracionDist').val();
    const ritmo = $('#txtRitmo').val();
    const watts = $('#txtWatts').val();
    const tiempo = $('#txtTiempoPronostico').val();
    const distancia = $('#txtDistanciaPronostico').val();
    const r2 = $('#r2Pronostico').val();

    //buscar datos de A y B segun la grafica deseada:
    /*
    	Si es km o mt, entonces tomar grafica de velocidad / distancia (grafica 4)
    	Si es hr o min, entonces tomar grafica de velocidad / Tiempo (grafica 3)
    */
    /*const B_distancia = 31.099783710544287;
    const A_distancia = -1.9665490881722816;
    const R2_distancia = 0.9139556532956203;
    const A_tiempo = -1.7815536957701041;
    const B_tiempo = 27.052760783206512;
    const R2_tiempo = 0.9362979388559064;*/

    console.log('A y B Dis', A_distancia, B_distancia, R2_distancia);
    console.log('A y B Tiempo', A_tiempo, B_tiempo, R2_tiempo);

    let velocidad = 0;
    let marcaMinutos = 0;
    let hrs = 0;
    let min = 0;
    let seg = 0;
    let minRitmo = 0;
    let segRitmo = 0;
    let distanciaMetros = 0;
    if (deporte == "C") {
        if (tipoDuracionDist == 'kms') {
            velocidad = (A_distancia * Math.log(duracionDist * 1000)) + B_distancia;
            //informarlo despues del campo "Duración/Distancia"
            marcaMinutos = (duracionDist * 1000) * 60 / (velocidad * 1000);
            //split = id.split('.');
            hrs = Math.trunc(marcaMinutos / 60);
            min = Math.trunc(marcaMinutos);
            seg = Math.trunc((marcaMinutos - min) * 60);
            let mtsMin = 1000 / ((velocidad * 1000) / 3600);
            minRitmo = Math.trunc(mtsMin / 60);
            segRitmo = Math.trunc((mtsMin - (minRitmo * 60)));
        } else if (tipoDuracionDist == 'm') {
            velocidad = (A_distancia * Math.log(duracionDist)) + B_distancia;
            //informarlo despues del campo "Duración/Distancia"
            marcaMinutos = (duracionDist) * 60 / (velocidad * 1000);
            //split = id.split('.');
            hrs = Math.trunc(marcaMinutos / 60);
            min = Math.trunc(marcaMinutos);
            seg = Math.trunc((marcaMinutos - min) * 60);
            let mtsMin = 1000 / ((velocidad * 1000) / 3600);
            minRitmo = Math.trunc(mtsMin / 60);
            segRitmo = Math.trunc((mtsMin - (minRitmo * 60)));
        } else if (tipoDuracionDist == 'h') {
            velocidad = (A_tiempo * Math.log(duracionDist * 3600)) + B_tiempo;
            console.log('velocidad= ', duracionDist, velocidad);
            //informarlo despues del campo "Duración/Distancia"
            distanciaMetros = velocidad * 1000 * duracionDist;
            //split = id.split('.');
            hrs = Math.trunc(marcaMinutos / 60);
            min = Math.trunc(marcaMinutos);
            seg = Math.trunc((marcaMinutos - min) * 60);
            let mtsMin = 1000 / ((velocidad * 1000) / 3600);
            minRitmo = Math.trunc(mtsMin / 60);
            segRitmo = Math.trunc((mtsMin - (minRitmo * 60)));
        } else if (tipoDuracionDist == 'min') {
            velocidad = (A_tiempo * Math.log(duracionDist * 60)) + B_tiempo;
            console.log('velocidad= ', duracionDist, velocidad);
            //informarlo despues del campo "Duración/Distancia"
            distanciaMetros = (velocidad * 1000) / (60 / duracionDist);
            //split = id.split('.');
            hrs = Math.trunc(marcaMinutos / 60);
            min = Math.trunc(marcaMinutos);
            seg = Math.trunc((marcaMinutos - min) * 60);
            let mtsMin = 1000 / ((velocidad * 1000) / 3600);
            minRitmo = Math.trunc(mtsMin / 60);
            segRitmo = Math.trunc((mtsMin - (minRitmo * 60)));
        }
        $('#txtVelocidadPronostico').val(velocidad.toFixed(1));
        $('#txtRitmo').val((minRitmo < 10 ? '0' : '') + minRitmo + ':' + (segRitmo < 10 ? '0' : '') + segRitmo);
        $('#txtDistanciaPronostico').val(distanciaMetros.toFixed(0));
        const tiempoPron = (hrs < 10 ? '0' : '') + hrs.toString() + ':' + (min < 10 ? '0' : '') + min
        .toString() +
            ':' + (seg < 10 ? '0' : '') + seg.toString();
        $('#txtTiempoPronostico').val(tiempoPron);
    } else if (deporte == "B") {
        if (tipoDuracionDist == 'kms') {
            velocidad = (A_distancia * Math.log(duracionDist * 1000)) + B_distancia;
            //informarlo despues del campo "Duración/Distancia"
            marcaMinutos = (duracionDist * 1000) * 60 / (velocidad * 1000);
            //split = id.split('.');
            hrs = Math.trunc(marcaMinutos / 60);
            min = Math.trunc(marcaMinutos);
            seg = Math.trunc((marcaMinutos - min) * 60);
            let mtsMin = 1000 / ((velocidad * 1000) / 3600);
            minRitmo = Math.trunc(mtsMin / 60);
            segRitmo = Math.trunc((mtsMin - (minRitmo * 60)));
        } else if (tipoDuracionDist == 'm') {
            velocidad = (A_distancia * Math.log(duracionDist)) + B_distancia;
            //informarlo despues del campo "Duración/Distancia"
            marcaMinutos = (duracionDist) * 60 / (velocidad * 1000);
            //split = id.split('.');
            hrs = Math.trunc(marcaMinutos / 60);
            min = Math.trunc(marcaMinutos);
            seg = Math.trunc((marcaMinutos - min) * 60);
            let mtsMin = 1000 / ((velocidad * 1000) / 3600);
            minRitmo = Math.trunc(mtsMin / 60);
            segRitmo = Math.trunc((mtsMin - (minRitmo * 60)));
        } else if (tipoDuracionDist == 'h') {
            velocidad = (A_tiempo * Math.log(duracionDist * 3600)) + B_tiempo;
            console.log('velocidad= ', duracionDist, velocidad);
            //informarlo despues del campo "Duración/Distancia"
            distanciaMetros = velocidad * 1000 * duracionDist;
            //split = id.split('.');
            hrs = Math.trunc(marcaMinutos / 60);
            min = Math.trunc(marcaMinutos);
            seg = Math.trunc((marcaMinutos - min) * 60);
            let mtsMin = 1000 / ((velocidad * 1000) / 3600);
            minRitmo = Math.trunc(mtsMin / 60);
            segRitmo = Math.trunc((mtsMin - (minRitmo * 60)));
        } else if (tipoDuracionDist == 'min') {
            velocidad = (A_tiempo * Math.log(duracionDist * 60)) + B_tiempo;
            console.log('velocidad= ', duracionDist, velocidad);
            //informarlo despues del campo "Duración/Distancia"
            distanciaMetros = (velocidad * 1000) / (60 / duracionDist);
            //split = id.split('.');
            hrs = Math.trunc(marcaMinutos / 60);
            min = Math.trunc(marcaMinutos);
            seg = Math.trunc((marcaMinutos - min) * 60);
            let mtsMin = 1000 / ((velocidad * 1000) / 3600);
            minRitmo = Math.trunc(mtsMin / 60);
            segRitmo = Math.trunc((mtsMin - (minRitmo * 60)));
        }
        $('#txtWatts').val(velocidad.toFixed(0));
        $('#txtRitmo').val('');
        $('#txtDistanciaPronostico').val(distanciaMetros.toFixed(0));
        $('#txtTiempoPronostico').val('');
    }

    console.log(deporte + ', ' + tipoDuracionDist + ', velocidad= ', velocidad);
    console.log('log= ', Math.log(duracionDist * 1000));
    console.log('marcaMinutos= ', marcaMinutos);
    console.log('tiempo H:m:s= ', hrs + ':' + min + ':' + seg);
    console.log('Ritmo m:s= ', minRitmo + ':' + segRitmo);
    console.log('distanciaMetros', distanciaMetros);
});

scrollvideo();

$(document).ready(function() {

    //$('.test').select2();
    valorSeleccionado = '';
    validaChk(3);
    validaChkCombinaMeso(3);



    $.ajax({
        type: 'get',
        url: "/web/index.php?r=sessionsssession/getcontain",
        data: {
            "structure": 4,
        },
        success: function(data) {
            document.getElementById('contain_select').innerHTML = data;
            document.getElementById('ncontain_select').innerHTML = data;
            document.getElementById('bcontain_select').innerHTML = data;
            document.getElementById('ccontain_select').innerHTML = data;
            /*document.getElementById('contain_duatlon').innerHTML = data;
            document.getElementById('contain_aquatlon').innerHTML = data;*/
        },
        error: function(data) {},
    }); //content
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=sessionsssession/getlevel",
        data: {},
        success: function(data) {
            document.getElementById('level_select').innerHTML = data;
            document.getElementById('nlevel_select').innerHTML = data;
            document.getElementById('blevel_select').innerHTML = data;
            document.getElementById('clevel_select').innerHTML = data;

            document.getElementById('nivelN').innerHTML = data;
            document.getElementById('nivelB').innerHTML = data;
            document.getElementById('nivelC').innerHTML = data;
            /*document.getElementById('level_duatlon').innerHTML = data;
            document.getElementById('level_aquatlon').innerHTML = data;*/

                        $("#nivelN").val();
            $("#nivelB").val();
            $("#nivelC").val(4);
                    },
        error: function(data) {},
    }); //level

    $('#nivelN').change(function() {
        setNivelAtleta('nivelN', this.value);
    });

    $('#nivelB').change(function() {
        setNivelAtleta('nivelB', this.value);
    });

    $('#nivelC').change(function() {
        setNivelAtleta('nivelC', this.value);
    });

    function setNivelAtleta(_nivel, _valor) {
        $("#spanMensjaeNivel").html(
            "Guardando, espere..."
        );
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=athletesathlete/savenivel",
            data: {
                "valor": _valor,
                "campo": _nivel,
                "athlete_id": 146,

            },
            success: function(data) {
                $("#spanMensjaeNivel").html("");
                swal(data, {
                    icon: "success",
                    buttons: false,
                    timer: 2000,
                });
            },
            error: function(data) {
                $("#spanMensjaeNivel").html(
                    "Error al guardar" +
                    data);
            },
        });
    }

    $('#sport_select').change(function() {
        /*$('#divLevel').hide();
        $('#divbLevel').hide();
        $('#divnLevel').hide();
        $('#divcLevel').hide();
        $('#divContent').hide();
        $('#divbContent').hide();
        $('#divnContent').hide();
        $('#divcContent').hide();
        
        if($('#sport_select').val()=="1"){
        	$('#divbLevel').show();
        	$('#divbContent').show();
        }
        else if($('#sport_select').val()=="2"){
        	$('#divnLevel').show();
        	$('#divnContent').show();
        }
        else if($('#sport_select').val()=="3"){
        	$('#divcLevel').show();
        	$('#divcContent').show();
        }
        else{
        	$('#divLevel').show();
        	$('#divContent').show();
        }*/
    });








    //$('#previewModal').modal('show');
    /*$('li').click(function() {
        var url = $(this).attr('rel');
        $('#iframe').attr('src', url);
        $('#iframe').reload();
    });*/
    $('#add_log').click(function() {
        let name = $("#name_logro").val();
        let date = $("#date_logro").val();
        let distance = $("#distance_logro").val();
        let place = $("#place_logro").val();
        let others = $("#others_logro").val();
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=athletesathlete/savelogro",
            data: {
                "name": name,
                "date": date,
                "distance": distance,
                "location": place,
                "others": others,
                "athlete_id": 146,

            },
            success: function(data) {
                console.log(data);
                //$("#seguimiento_table").empty();
                window.location.reload();
                let string = '<div class="row"><div aign="left" class="col">' + name +
                    ' - ' + date + '</div>' +
                    '<div aign="right" class="col">' +
                    '<button class="btn btn-xs btn_delete_logro" id="" type="button" data-identifier="' +
                    data +
                    '"><i aria-hidden="" class="fas fa-trash-alt"></i></button></div></div>' +
                    '<br>';
                $("#logro_table").append(string);

                $('#exampleModal2').modal('hide');
            },
            error: function(data) {},
        });
    });

    //$(".save").click(function() {
    $("#save_home").click(function() {
        let inicio = $('#inicio').val();
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=athletesathlete/createfromdata",
            data: {
                "inicio": inicio,
                "id": 146,
            },
            success: function(data) {
                //console.log(data);
                swal(data, {
                    icon: "success",
                    buttons: false,
                    timer: 2000,
                });
            },
            error: function(data) {},
        });
    });
    $("#save_form").click(function() {
        /*let jsonObj = [];
        $(".transicion").each(function() {
            let created_at = $('#created_at').val();
            let updated_at = $('#updated_at').val();
            item = {}
            item["created_at"] = created_at;
            item["updated_at"] = updated_at;
            jsonObj.push(item);
        });
        console.log(jsonObj);*/
        let consigna = $('#consigna').val();
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=athletesathlete/createfromdata",
            data: {
                "consigna": consigna,
                "id": 146,
            },
            success: function(data) {
                //console.log(data);
                swal(data, {
                    icon: "success",
                    buttons: false,
                    timer: 2000,
                });
            },
            error: function(data) {},
        });
    });
    $('#values2').empty();
    $('#values2').append($('#consigna').val().length +
        ' Caracteres');
    $('#values1').empty();
    $('#values1').append($('#inicio').val().length +
        ' Caracteres');

    $('.contenedor2').scrollLeft(3315);
    $('#seguimiento').click(function() {
        $('#exampleModal').modal('show');
    });
    $('.mensaje').click(function() {
        let id = $(this).data('id');
        if (id == 0) {
            $('#texto_mensaje').prop("required", true);
        } else {
            $('#texto_mensaje').prop("required", false);
        }
        let tema = $(this).data('tema');
        console.log(id, tema);
        $('#tema_id').val(id);
        $('#titulo_mensaje').val(tema);
        $('#mensajeModal').modal('show');
    });
    $('.edit-tema').click(function() {
        let id = $(this).data('id');
        let tema = $(this).data('tema');
        console.log(id, tema);
        $('#tema_id_tema').val(id);
        $('#titulo_mensaje_tema').val(tema);
        $('#mensajeModalEditTema').modal('show');
    });
    $('.edit-mensaje').click(function() {
        let id = $(this).data('id');
        let mensaje = $(this).data('mensaje');
        console.log(id, mensaje);
        $('#mensaje_id').val(id);
        $('#texto_mensaje_mensaje').text(mensaje);
        $('#mensajeModalEditMensaje').modal('show');
    });
    $('.delete-mensaje').click(function() {
        let id = $(this).data('id');
        let mensaje = $(this).data('mensaje');
        console.log(id, mensaje);
        alertify.confirm(
            'Confirmación',
            '¿Seguro que desea eliminar el mensaje?',
            function() {
                $.ajax({
                    type: 'get',
                    url: "/web/index.php?r=athletesathlete/deletemensaje",
                    data: {
                        "id": id
                    },
                    success: function(data) {
                        if (data == "Exito") {
                            swal("Mensaje eliminado!",
                                "", {
                                    icon: "success",
                                    buttons: {
                                        confirm: {
                                            className: 'btn btn-warning'
                                        }
                                    },
                                });
                            window.location.reload();
                            //window.location.href='#mensajes'
                        } else {
                            swal("Error al eliminar!",
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
                    error: function(data) {},
                });
            },
            function() {

            });
    })

    $('.tab-link').click(function() {
        $('.tab-link').removeClass('text-white bg-primary');
        $('.tab-link').addClass('bg-white');
        $(this).addClass('text-white bg-primary');
    })
    $('#logro').click(function() {
        $('#exampleModal2').modal('show');
    });
    $(".contenedor2").on("scroll", function() {
        $(".contenedor2").scrollLeft($(this).scrollLeft());
    });
    $('.show_events').click(function() {
        start_date = $(this).data('startdate');
        end_date = $(this).data('enddate');
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=athletesathlete/events",
            data: {
                "start_date": start_date,
                "end_date": end_date
            },
            success: function(data) {
                console.log(data);
                $('#modal_body_eventos').empty();
                $('#modal_body_eventos').append(data);

                //document.getElementById('sport_select').innerHTML = data;
            },
            error: function(data) {},
        });
        $('#exampleModal3').modal('show');
    });
    $('#add_event2').click(function() {
        $('#exampleModal5').modal('show');
    });
    $('#add_event').click(function() {
        let code = $('#code_event_new').val();
        let color = $('#color_event_new').val();
        let name = $('#name_event_new').val();
        let location = $('#location_event_new').val();
        let date = $('#date_event_new').val();
        let hour = $('#hour_event_new').val();
        let notes = $('#notes_event_new').val();
        let is_default = $('#is_default_event_new').is(':checked');

        //let id = $('#identifier_event_new').val();
        if (code == "" || name == "" || date == "") {
            swal("Campos requeridos!",
                "Los campos marcados con asterisco son obligatorios", {
                    icon: "warning",
                    buttons: {
                        confirm: {
                            className: 'btn btn-warning'
                        }
                    },
                });
            return false;
        }

        $.ajax({
            type: 'get',
            url: "/web/index.php?r=athletesathlete/newevent",
            data: {
                "is_default": is_default,
                "code": code,
                "color": color,
                "name": name,
                "location": location,
                "date": date,
                "hour": hour,
                "notes": notes,
            },
            success: function(data) {
                console.log(data);

                $('#exampleModal5').modal('hide');
                $('#exampleModal3').modal('hide');
                //window.location.reload();
                swal("Registro guardado!",
                    "Espere un momento.", {
                        icon: "success",
                        buttons: {
                            confirm: {
                                className: 'btn btn-warning'
                            }
                        },
                    }).then((result) => {
                    window.location.reload();
                });
            },
            error: function(data) {},
        });
    });
    $('#add_seg').click(function() {
        let name = $("#name_seguimiento").val();
        let date = $("#date_seguimiento").val();
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=athletesathlete/saveseguimiento",
            data: {
                "name": name,
                "date": date,
                "athlete_id": 146,

            },
            success: function(data) {
                console.log(data);
                window.location.reload();
                //$("#seguimiento_table").empty();
                let string = '<div class="row"><div aign="left" class="col">' + name +
                    ' - ' + date + '</div>' +
                    '<div aign="right" class="col"><button class="btn btn-xs btn_edit_seguimiento" onclick="update_seguimiento(' +
                    data + ')" type="button" data-identifier="' +
                    data +
                    '" id=""><i aria-hidden="" class="fas fa-check-circle"></i></button>' +
                    '<button class="btn btn-xs btn_delete_seguimiento" onclick="delete_seguimiento(' +
                    data + ')" id="" type="button" data-identifier="' +
                    data +
                    '"><i aria-hidden="" class="fas fa-trash-alt"></i></button></div></div>' +
                    '<br>';
                $("#seguimiento_table").append(string);

                $('#exampleModal').modal('hide');
            },
            error: function(data) {},
        });
    });
    $('.show_competition').click(function() {
        start_date = $(this).data('startdate');
        end_date = $(this).data('enddate');
        var btnID = $(this).data("btn");
        $('.fondoPermanece').css("background-color", "#FFF");
        $(this).css("background-color", "#003B5C");
        $(this).css("z-index", "999");
        //alert(btnID);
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=athletesathlete/competitions",
            data: {
                "start_date": start_date,
                "end_date": end_date
            },
            success: function(data) {
                console.log(data);
                $('#modal_body_competiciones').empty();
                $('#modal_body_competiciones').append(data);


            },
            error: function(data) {},
        });
        $('#identifier_competitions').val($(this).data('identifier'));
        $('#exampleModal4').modal('show');
    });
    $('.show_test').click(function() {
        let start_date = $(this).data('startdate');
        let end_date = $(this).data('enddate');
        let athlete_id = 146;
        var btnID = $(this).data("btn");
        $('.fondoPermanece').css("background-color", "#FFF");
        $(this).css("background-color", "#003B5C");
        $(this).css("z-index", "999");
        $('#identifier_tests').val($(this).data('identifier'));
        $('#date_tests').val(start_date);
        $('#testModal').modal('show');
    });
    $('#add_test').click(function() {
        let siglas = $("#siglas_test").val();
        let descripcion = $("#descripcion_test").val();
        let date = $('#date_tests').val();
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=athletesathlete/savetest",
            data: {
                "siglas": siglas,
                "descripcion": descripcion,
                "date": date,
                "athlete_id": 146,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
                $('#testModal').modal('hide');
            },
            error: function(data) {},
        });
    });
    $('#edit_test').click(function() {
        let siglas = $("#edit_siglas_test").val();
        let descripcion = $("#edit_descripcion_test").val();
        let date = $('#edit_date_tests').val();
        let id = $('#edit_identifier_tests').val();
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=athletesathlete/edittest",
            data: {
                "siglas": siglas,
                "descripcion": descripcion,
                "date": date,
                "id": id,
                "athlete_id": 146,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
                $('#testModal').modal('hide');
            },
            error: function(data) {},
        });
    })
    $('.menu').click(function() {
        $('.fondoPermanece').css("background-color", "#FFF");
        $(this).css("background-color", "#003B5C");
        $(this).css("z-index", "999");
        //console.log($(this).id);
        exist_w = $('#' + $(this).data('identifier') + '_comment').css('width');
        exist_l = $('#' + $(this).data('identifier') + '_comment').css('left');
        exist_affect = $(this).data("affect"); //agregado
        //if (!exist_w||exist_affect=="1") {
        if (!exist_w || exist_affect == "0") {
            console.log($(this).data('identifier'));
            $('#identifier_options').val($(this).data('identifier'));
            $('#identifier_options2').val($(this).data('identifier'));
            if ($('#hddAccion').val() == 1)
                $('#hddAccion').val(0);
            else
                $('#modalOptions').modal('show');
        }
        $('#hddFechaInicial').val($(this).data('startdate'));
    });
    $('.nums').keyup(function() {
        id = $(this).data('identifier');

        console.log(id);
        valor = $(this).val();
        v_id = id.slice(1);
        console.log(v_id);
        $(".nums").each(function(index, element) {
            id2 = $(this).data('identifier');
            v_id2 = id2.slice(1);
            if (Number(v_id2) > Number(v_id)) {
                valor = Number(valor) + 1;
                $(this).val(valor);
            }
        });
    });
    $('#consigna').keyup(function() {
        $('#values2').empty();
        $('#values2').append($(this).val().length +
            ' Caracteres'
        );
    });
    $('#inicio').keyup(function() {
        $('#values1').empty();
        $('#values1').append($(this).val().length +
            ' Caracteres'
        );
    });

    $('#add_text_options').click(function() {
        text = $('#text_options').val();
        id = $('#identifier_options').val();
        let comment = $('#text_options').val();
        let weeks = $('#text_options_weeks').val();
        let created_at = $('#athletesathlete-created_at').val();
        let updated_at = $('#athletesathlete-updated_at').val();
        let start_date = $('#' + id).data('startdate');
        let end_date = $('#' + id).data('enddate');
        let xn = $('#' + id).data('xn');
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=athletesathlete/savecomments",
            data: {
                "comment": comment,
                "created_at": created_at,
                "updated_at": updated_at,
                "start_date": start_date,
                "end_date": end_date,
                "athlete_id": 146,
                "width": (64 * weeks),
                "xn": xn,
                "weeks": weeks
            },
            success: function(data) {
                console.log(data);
                //alert(data);
                window.location.reload();
                $('#' + id).append('<div data-identifier="' + data + '" id="' + id +
                    '_comment" style="background-color:white;align-items:center;position: absolute; left: 0px; top: 0px; z-index: 1;border:1px solid #003B5C;color:#003B5C;border-radius:25px;width:' +
                    (64 * weeks) +
                    'px;height:60px;"><div style="font-size:12px;padding-top:0px;padding-bottom:0px"><b> ' +
                    text +
                    '</b></div><button type="button" style="padding:1px" title="' +
                    'Disminuir ancho' +
                    '" class="btn btn-xs" onclick="menos(' +
                    id +
                    '_comment)" > <i class="fa fa-caret-left" aria-hidden="true"></i></button><button type="button" style="padding:1px" class="btn btn-xs" title="' +
                    'Aumentar ancho' +
                    '" onclick="mas(' +
                    id +
                    '_comment)" > <i class="fa fa-caret-right" aria-hidden="true"></i> </button><button type="button" style="padding:1px" title="' +
                    'Eliminar comentario' +
                    '" class="btn btn-xs" onclick="remove(' +
                    id +
                    '_comment)" > <i class="fa fa-trash" aria-hidden="true"></i> </button></div>'
                );
                $('#modalOptions').modal('hide');
                //document.getElementById('sport_select').innerHTML = data;
            },
            error: function(data) {},
        });


    });
    $('#search_mi').click(function() {
        $('#btnCombinar').show();
        $('#btnAddFiltro').show();
        $('#btnPrevisualizarM').hide();
        let sel = $('#search_microciclo').val();
        if (sel.trim() == "") {
            swal("Campos requeridos!",
                "Debe escribir almenos 3 caráteres para buscar", {
                    icon: "warning",
                    buttons: {
                        confirm: {
                            className: 'btn btn-warning'
                        }
                    },
                });
        } else {
            swal("Espere un momento. Cargando..", {
                buttons: false,
                timer: 2000,
            });
            $.ajax({
                type: 'get',
                url: "/web/index.php?r=progressionsprogression/getmicrociclo",
                data: {
                    "word": sel
                },
                success: function(data) {
                    document.getElementById('microciclo_select').innerHTML = data;
                },
                error: function(data) {},
            });
        }
    });
    /*$('#microciclo_select').select2({
    	placeholder: 'Buscar...',
    	minimumInputLength: 3, // Número mínimo de caracteres para activar la búsqueda
    	ajax: {
    		url: '/web/index.php?r=progressionsprogression/getmicrociclo', // Ruta del script que procesa la búsqueda
    		dataType: 'json',
    		delay: 250, // Retraso en milisegundos antes de enviar la solicitud
    		data: function (params) {
    			return {
    				word: params.term, // Término de búsqueda introducido por el usuario
    				check:$('#checkmic').is(':checked')
    			};
    		},
    		processResults: function (data) {
    			console.log(data);
    			$('#btnPrevisualizarM').show();

    			return {
    				results: data
    			};
    		},
    		cache: true
    	},
    	width:'100%'
    });*/
    $('#search_ma').click(function() {

        $('#btnPrevisualizarM').hide();
        let sel = $('#search_macrociclo').val();
        if (sel.trim() == "") {
            swal("Campos requeridos!",
                "Debe escribir almenos 3 caráteres para buscar", {
                    icon: "warning",
                    buttons: {
                        confirm: {
                            className: 'btn btn-warning'
                        }
                    },
                });
        } else {
            swal("Espere un momento. Cargando..", {
                buttons: false,
                timer: 2000,
            });
            $.ajax({
                type: 'get',
                url: "/web/index.php?r=progressionsprogression/getmacrociclo",
                data: {
                    "word": sel
                },
                success: function(data) {
                    document.getElementById('macrociclo_select').innerHTML = data;
                    //$('#btnCombinar').hide();
                    //$('#btnAddFiltro').hide();
                },
                error: function(data) {},
            });
        }
    });
    $('.close').click(function() {
        $('#btnCombinar').show();
        $('#btnAddFiltro').show();
        $('.text_options').hide();
    })
    $('.add_ma').click(function() {
        $('#btnCombinar').hide();
        $('#btnAddFiltro').hide();
        $('.text_options').show();
    })
    $('.add_mm').click(function() {
        $('#btnCombinar').show();
        $('#btnAddFiltro').show();
        $('.text_options').hide();
        $("#microciclo_select").prop("selectedIndex", 0).val();
        $("#mesociclo_select").prop("selectedIndex", 0).val();

    })
    $('#search_me').click(function() {
        $('#btnCombinar').show();
        $('#btnAddFiltro').show();
        $('#btnPrevisualizarM').hide();
        let sel = $('#search_mesociclo').val();
        if (sel.trim() == "") {
            swal("Campos requeridos!",
                "Debe escribir almenos 3 caráteres para buscar", {
                    icon: "warning",
                    buttons: {
                        confirm: {
                            className: 'btn btn-warning'
                        }
                    },
                });
        } else {
            swal("Espere un momento. Cargando..", {
                buttons: false,
                timer: 3000,
            });
            $.ajax({
                type: 'get',
                url: "/web/index.php?r=progressionsprogression/getmesociclo",
                data: {
                    "word": sel
                },
                success: function(data) {
                    $("#btnAddFiltro").hide();
                    document.getElementById('mesociclo_select').innerHTML = data;
                },
                error: function(data) {},
            });
        }
    });

    $('#search_per').click(function() {
        $('#btnCombinar').show();
        $('#btnAddFiltro').show();
        $('#btnPrevisualizarM').hide();
        let sel = $('#search_personal').val();
        if (sel.trim() == "") {
            swal("Campos requeridos!",
                "Debe escribir almenos 3 caráteres para buscar", {
                    icon: "warning",
                    buttons: {
                        confirm: {
                            className: 'btn btn-warning'
                        }
                    },
                });
        } else {
            console.log({
                "word": sel,
                "fromDashboard": true
            })
            swal("Espere un momento. Cargando..", {
                buttons: false,
                timer: 3000,
            });
            $.ajax({
                type: 'get',
                url: "/web/index.php?r=progressionsprogression/getmesociclo",
                data: {
                    "word": sel,
                    "fromDashboard": true,
                    "isPersonal": true
                },
                success: function(data) {
                    $("#btnAddFiltro").hide();
                    document.getElementById('personal_select').innerHTML = data;
                },
                error: function(data) {},
            });
        }
    });

    $('#search_perMi').click(function() {
        $('#btnCombinar').show();
        $('#btnAddFiltro').show();
        $('#btnPrevisualizarM').hide();
        let sel = $('#search_personalMi').val();
        if (sel.trim() == "") {
            swal("Campos requeridos!",
                "Debe escribir almenos 3 caráteres para buscar", {
                    icon: "warning",
                    buttons: {
                        confirm: {
                            className: 'btn btn-warning'
                        }
                    },
                });
        } else {
            swal("Espere un momento. Cargando..", {
                buttons: false,
                timer: 2000,
            });
            $.ajax({
                type: 'get',
                url: "/web/index.php?r=progressionsprogression/getmicrociclo",
                data: {
                    "word": sel,
                    "fromDashboard": true
                },
                success: function(data) {
                    document.getElementById('personalMi_select').innerHTML = data;
                },
                error: function(data) {},
            });
        }
    });

    $("#search_microciclo").on('keypress', function(e) {
        var keycode = e.keyCode || e.which;
        if (keycode == 13) {
            $('#search_mi').click();
            return false;
        }
    });
    $('#microciclo_select').click(function() {
        var contSelect = $("#microciclo_select").find("option").length;
        if ((contSelect == 1 && this.value != "null") && this.value != "Microciclos") {
            $('#add_ss').data('option', '1');
            //alert(this.value);
            getModal();
        }
    });
    $('#microciclo_select').change(function() {
        $('#add_ss').data('option', '1');

        getModal();
    });


    $('#macrociclo_select').change(function() {
        $('#add_ss').data('option', '3');
        getModalMacrociclo();
    });


    $("#search_mesociclo").on('keypress', function(e) {
        var keycode = e.keyCode || e.which;
        if (keycode == 13) {
            $('#search_me').click();
            return false;
        }
    });

    $('#mesociclo_select').click(function() {
        var contSelect = $("#mesociclo_select").find("option").length;
        if ((contSelect == 1 && this.value != "null") && this.value != "Mesociclos") {
            //alert(this.value);
            $('#add_ss').data('option', '2');
            getModalMesociclo();
        }
    });
    $('#mesociclo_select').change(function() {
        $('#add_ss').data('option', '2');
        getModalMesociclo();
    });


    //nuevo libreria personal
    $("#search_personal").on('keypress', function(e) {
        var keycode = e.keyCode || e.which;
        if (keycode == 13) {
            $('#search_per').click();
            return false;
        }
    });

    $('#personal_select').click(function() {
        var contSelect = $("#personal_select").find("option").length;
        if ((contSelect == 1 && this.value != "null") && this.value != "Librería personal") {
            //alert(this.value);
            $('#add_ss').data('option', '4');
            getModalPersonal();
        }
    });
    $('#personal_select').change(function() {
        $('#add_ss').data('option', '4');
        getModalPersonal();
    });

    //microciclo personal
    $("#search_personalMi").on('keypress', function(e) {
        var keycode = e.keyCode || e.which;
        if (keycode == 13) {
            $('#search_perMi').click();
            return false;
        }
    });

    $('#personalMi_select').click(function() {
        var contSelect = $("#personalMi_select").find("option").length;
        if ((contSelect == 1 && this.value != "null") && this.value != "Librería personal") {
            //alert(this.value);
            $('#add_ss').data('option', '5');
            getModalPersonalMi();
        }
    });
    $('#personalMi_select').change(function() {
        $('#add_ss').data('option', '5');
        getModalPersonalMi();
    });



    $('#btnPrevisualizar').click(function() {
        getModal();
    });
    $('#add_ss').click(function() {
        $('#add_ss').html('Espere ...');
        $('#add_ss').addClass('submitFormBtnBlock');
        $('#add_ss').removeClass('submitFormBtn');
        $('#add_ss').attr('disabled', 'disabled');
        let option = $('#add_ss').data('option')
        console.log($('#add_ss').data('option'));

        switch (option) {
            case '1':
                microciclo = $('#microciclo_select').val();
                microciclo_text = $('select[name="microciclo_select"] option:selected').text();
                break;
            case '2':
                microciclo = $('#mesociclo_select').val();
                microciclo_text = $('select[name="mesociclo_select"] option:selected').text();
                break;
            case '3':
                microciclo = $('#macrociclo_select').val();
                microciclo_text = $('select[name="macrociclo_select"] option:selected').text();
                break;
            case '4': //libreria personal mesociclo
                microciclo = $('#personal_select').val();
                microciclo_text = $('select[name="personal_select"] option:selected').text();
                option = 2;
                break;
            case '5': //libreria personal microciclo
                microciclo = $('#personalMi_select').val();
                microciclo_text = $('select[name="personalMi_select"] option:selected').text();
                option = 1;
                break;

            default:
                break;
        }

        //alert(microciclo);
        let start_date = $('#' + id).data('startdate');
        let end_date = $('#' + id).data('enddate');
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=mesocyclesmesocycle/clone",
            data: {
                "athlete_id": 146,
                "option": option, //determina si es mesociclo microciclo y macrociclo
                "id": microciclo, //puede ser entero ej. 1775, o en formato 1775_1 donde 1775 es el mesociclo y 1 es la carpeta 
                "start_date": start_date,
                "end_date": end_date,
                "width": 64
            },
            success: function(data) {
                //console.log(data);
                if (data == "Exito") {
                    id = $('#identifier_options2').val();
                    swal("Registro guardado!",
                        "Espere un momento.", {
                            icon: "success",
                            buttons: {
                                confirm: {
                                    className: 'btn btn-warning'
                                }
                            },
                        });
                    setTimeout(function() {
                        location.reload();
                    }, 2000);
                } else if (data == "fecha_ocupada") {
                    swal("Fecha ocupada",
                        "Seleccione otra fecha", {
                            icon: "warning",
                            buttons: {
                                confirm: {
                                    className: 'btn btn-warning'
                                }
                            },
                        });
                } else {
                    swal("Error al seleccionar el registro!",
                        "" + microciclo + "<->" +
                        data, {
                            icon: "warning",
                            buttons: {
                                confirm: {
                                    className: 'btn btn-warning'
                                }
                            },
                        });
                }
                $('#previewModal').modal('hide');
                $('#modalOptions').modal('hide');
            },
            error: function(data) {},
        });
        //console.log(microciclo);

    });
    $('#ed_ev').click(function() {
        let code = $('#code_event_details').val();
        let color = $('#color_event_details').val();
        let name = $('#name_event_details').val();
        let location = $('#location_event_details').val();
        let date = $('#date_event_details').val();
        let hour = $('#hour_event_details').val();
        let notes = $('#notes_event_details').val();
        let id = $('#identifier_event_details').val();
        let is_default = $('#is_default_event_edit').is(':checked');
        console.log(is_default);
        let arr_desactivate = [];
        $(".btn_edit_event").each(function(index, element) {
            console.log(element, $(this).data('identifier'));
            if ($(this).data('identifier') !== id) {
                arr_desactivate.push($(this).data('identifier'));
            }
        });
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=athletesathlete/editevent",
            data: {
                "id": id,
                "code": code,
                "color": color,
                "name": name,
                "location": location,
                "date": date,
                "hour": hour,
                "notes": notes,
                "is_default": is_default,
                "arr_desactivate": arr_desactivate
            },
            success: function(data) {
                console.log(data);

                $('#editarEvento').modal('hide');
                $('#exampleModal3').modal('hide');
                window.location.reload();

            },
            error: function(data) {},
        });
    });


    $('#btnAddFiltro').click(function() {
        $('#btnAddFiltro').html('Espere ...');
        $('#btnAddFiltro').addClass('submitFormBtnBlock');
        $('#btnAddFiltro').removeClass('submitFormBtn');
        $('#btnAddFiltro').attr('disabled', 'disabled');

        var dist = $('#distance_select').val();
        var sport = $('#sport_select').val();
        sport = $('#hddCombinaMesoDeporteID').val();
        /*alert($('#hddCombinaMesoDeporteID').val());
        return;/**/
        var numM = $('#numero_select').val();
        //level por deporte
        var blevel = $('#blevel_select').val();
        var nlevel = $('#nlevel_select').val();
        var clevel = $('#clevel_select').val();
        //content por deporte
        var bcont = $('#bcontain_select').val();
        var ncont = $('#ncontain_select').val();
        var ccont = $('#ccontain_select').val();

        var urlCombinar = '&dis=' + dist + '&spor=' + sport + '&blevel=' + blevel + '&nlevel=' +
            nlevel + '&clevel=' + clevel + '&bcont=' + bcont + '&ncont=' + ncont + '&ccont=' + ccont +
            '&numM=' + numM;

        let start_date = $('#hddFechaInicial').val();

        //let end_date = $('#txtFechaFinalCopiar').val();

        $.ajax({
            type: 'get',
            url: "/web/index.php?r=mesocyclesmesocycle/combinar",
            data: {
                "athlete_id": 146,
                "option": 2, //determina que es mesociclo
                "id": 0,
                "combinar": true,
                "dis": dist,
                "spor": sport,
                "blevel": blevel,
                "nlevel": nlevel,
                "clevel": clevel,
                "bcont": bcont,
                "ncont": ncont,
                "ccont": ccont,
                "numM": numM,
                "start_date": start_date,
                "atletaID": "146"
            },
            success: function(data) {
                //console.log(data);
                if (data == "Exito") {
                    swal("Registro guardado!",
                        "Espere un momento.", {
                            icon: "success",
                            buttons: {
                                confirm: {
                                    className: 'btn btn-warning'
                                }
                            },
                        });
                    window.location.reload();
                    //console.log('+++' + id);

                } else {
                    swal("Error al guardar!",
                        "Contacte con el administrador del sistema." +
                        data, {
                            icon: "warning",
                            buttons: {
                                confirm: {
                                    className: 'btn btn-warning'
                                }
                            },
                        });
                }
                $('#previewModal').modal('hide');
                $('#modalOptions').modal('hide');
            },
            error: function(data) {},
        });
        //console.log(microciclo);

    });

    function getModal() {
        valorSeleccionado = '';
        id = $('#identifier_options').val();
        sesion = $('#microciclo_select');
        console.log(sesion.val().trim());
        if (sesion.val().trim() == "" || sesion.val() == "" || sesion.val() == "null") {
            swal("Campos requeridos!",
                "Seleccione una sesión para poder visualizar.", {
                    icon: "warning",
                    buttons: {
                        confirm: {
                            className: 'btn btn-warning'
                        }
                    },
                });
            return false;
        }
        $('#add_ss').html(
            'Agregar');
        $('#add_ss').addClass('submitFormBtn');
        $('#add_ss').removeClass('submitFormBtnBlock');
        $('#add_ss').attr('disabled', false);

        swal("Espere un momento.", {
            buttons: false,
            timer: 1000,
        });
        $("#add_ss").show();
        $("#btnAddFiltro").hide();
        load_frame(sesion.val(), 1);
        //$("#microciclo_select").prop("selectedIndex", 0).val();
    }

    function getModalMacrociclo() {
        valorSeleccionado = '';
        id = $('#identifier_options').val();
        sesion = $('#macrociclo_select');
        console.log(sesion.val().trim());
        if (sesion.val().trim() == "" || sesion.val() == "" || sesion.val() == "null") {
            swal("Campos requeridos!",
                "Seleccione una sesión para poder visualizar.", {
                    icon: "warning",
                    buttons: {
                        confirm: {
                            className: 'btn btn-warning'
                        }
                    },
                });
            return false;
        }
        $('#add_ss').html(
            'Agregar');
        $('#add_ss').addClass('submitFormBtn');
        $('#add_ss').removeClass('submitFormBtnBlock');
        $('#add_ss').attr('disabled', false);

        swal("Espere un momento.", {
            buttons: false,
            timer: 1000,
        });
        load_frame(sesion.val(), 3);
    }

    function getModalMesociclo() {
        valorSeleccionado = '';
        id = $('#identifier_options').val();
        sesion = $('#mesociclo_select');
        if (sesion.val().trim() == "" || sesion.val() == "" || sesion.val() == "null") {
            swal("Campos requeridos!",
                "Seleccione una sesión para poder visualizar.", {
                    icon: "warning",
                    buttons: {
                        confirm: {
                            className: 'btn btn-warning'
                        }
                    },
                });
            return false;
        }
        $('#add_ss').html(
            'Agregar');
        $('#add_ss').addClass('submitFormBtn');
        $('#add_ss').removeClass('submitFormBtnBlock');
        $('#add_ss').attr('disabled', false);

        swal("Espere un momento.", {
            buttons: false,
            timer: 1000,
        });
        $("#add_ss").show();
        $("#btnAddFiltro").hide();
        load_frame(sesion.val(), 2);
        //$("#mesociclo_select").prop("selectedIndex", 0).val();

    }

    function getModalPersonal() {
        valorSeleccionado = 'Me';
        id = $('#identifier_options').val();
        sesion = $('#personal_select');
        if (sesion.val().trim() == "" || sesion.val() == "" || sesion.val() == "null") {
            swal("Campos requeridos!",
                "Seleccione una sesión para poder visualizar.", {
                    icon: "warning",
                    buttons: {
                        confirm: {
                            className: 'btn btn-warning'
                        }
                    },
                });
            return false;
        }
        $('#add_ss').html(
            'Agregar');
        $('#add_ss').addClass('submitFormBtn');
        $('#add_ss').removeClass('submitFormBtnBlock');
        $('#add_ss').attr('disabled', false);

        swal("Espere un momento.", {
            buttons: false,
            timer: 1000,
        });
        $("#add_ss").show();
        $("#btnAddFiltro").hide();
        load_frame(sesion.val(), 2);
        //$("#personal_select").prop("selectedIndex", 0).val();

    }

    function getModalPersonalMi() {
        valorSeleccionado = 'Mi';
        id = $('#identifier_options').val();
        sesion = $('#personalMi_select');
        if (sesion.val().trim() == "" || sesion.val() == "" || sesion.val() == "null") {
            swal("Campos requeridos!",
                "Seleccione una sesión para poder visualizar.", {
                    icon: "warning",
                    buttons: {
                        confirm: {
                            className: 'btn btn-warning'
                        }
                    },
                });
            return false;
        }
        $('#add_ss').html(
            'Agregar');
        $('#add_ss').addClass('submitFormBtn');
        $('#add_ss').removeClass('submitFormBtnBlock');
        $('#add_ss').attr('disabled', false);

        swal("Espere un momento.", {
            buttons: false,
            timer: 1000,
        });
        $("#add_ss").show();
        $("#btnAddFiltro").hide();
        load_frame(sesion.val(), 1);
        //$("#personal_select").prop("selectedIndex", 0).val();

    }
    function obtenerRegistrosPorDia(athleteID) {
        $.ajax({
            url: 'index.php?r=athletesathlete/obtener-configuracion-semanal',
            method: 'GET',
            data: {
                athleteID: athleteID
            },
            success: function (response) {
                console.log('Datos recibidos:', response);
                // Aquí puedes recorrer y mostrar los registros por día
                if (response.success) {
                    response.data.forEach(function (registro) {
                        console.log('Día:', registro.day, 'Deporte:', registro.sport, 'Actividad:', registro.activity);
                        hora = registro.hour;
                        if(hora){
                            horaFormateada = hora.split('.')[0]; 
                        }else{
                            horaFormateada = '';
                        }
                        
                        $('#hora'+registro.orderSesion+'_'+registro.day).val(horaFormateada);
                        $('#cmbDeporte'+registro.orderSesion+'_'+registro.day).val(registro.sport);
                        $('#activity'+registro.orderSesion+'_'+registro.day).val(registro.activity);
                    });
                } else {
                    //alertify.error(response.message || 'No se encontraron registros.');
                    console.log(response.message + 'No se encontraron registros.')
                }
            },
            error: function (xhr) {
                console.error('Error en la petición:', xhr);
            }
        });
    }
    obtenerRegistrosPorDia(146); // 123 es el athleteID

    $('#btnGuardarConfiguracionSemanal').click(function(){
        let error_string='';
        let days=['','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
        for (let index = 1; index < 8; index++) {
            day=index;
            sport=$('#cmbDeporte1_'+index).val();
            activity=$('#activity1_'+index).val();
            hour=$('#hora1_'+index).val();
            athleteID=146;
            
            if(true||day&&sport&&activity&&athleteID){
                console.log(day,sport,activity,athleteID);
                // Enviar por AJAX
                $.ajax({
                    url: 'index.php?r=athletesathlete/guardar-configuracion-semanal',
                    method: 'POST',
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest' // Esto marca el request como AJAX
                    },
    
                    data: {
                        day: index,
                        sport: sport,
                        activity: activity,
                        athleteID: athleteID,
                        hour:hour,
                        orderSesion:1
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
                    },
                    success: function (res) {
                        console.log(`Día ${days[index]} guardado correctamente`, res);
                    },
                    error: function (xhr, status, error) {
                        console.error(`Error al guardar día ${days[index]}:`, error);
                        error_string=`Error al guardar día ${days[index]}`;
                        swal("Error al guardar!",
                            error_string, {
                            icon: "error",
                            buttons: {
                                confirm: {
                                    className: 'btn btn-warning'
                                }
                            },
                        });
                    }
                });
            }
        }
        for (let index = 1; index < 8; index++) {
            day=index;
            sport=$('#cmbDeporte2_'+index).val();
            activity=$('#activity2_'+index).val();
            hour=$('#hora2_'+index).val();
            athleteID=146;
            
            if(true||day&&sport&&activity&&athleteID){
                console.log(day,sport,activity,athleteID);
                // Enviar por AJAX
                $.ajax({
                    url: 'index.php?r=athletesathlete/guardar-configuracion-semanal',
                    method: 'POST',
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest' // Esto marca el request como AJAX
                    },
    
                    data: {
                        day: index,
                        sport: sport,
                        activity: activity,
                        athleteID: athleteID,
                        hour:hour,
                        orderSesion:2
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
                    },
                    success: function (res) {
                        console.log(`Día ${days[index]} guardado correctamente`, res);
                    },
                    error: function (xhr, status, error) {
                        console.error(`Error al guardar día ${days[index]}:`, error);
                        error_string=`Error al guardar día ${days[index]}`;
                        swal("Error al guardar!",
                            error_string, {
                            icon: "error",
                            buttons: {
                                confirm: {
                                    className: 'btn btn-warning'
                                }
                            },
                        });
                    }
                });
            }
        }
        for (let index = 1; index < 8; index++) {
            day=index;
            sport=$('#cmbDeporte3_'+index).val();
            activity=$('#activity3_'+index).val();
            hour=$('#hora3_'+index).val();
            athleteID=146;
            
            if(true||day&&sport&&activity&&athleteID){
                console.log(day,sport,activity,athleteID);
                // Enviar por AJAX
                $.ajax({
                    url: 'index.php?r=athletesathlete/guardar-configuracion-semanal',
                    method: 'POST',
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest' // Esto marca el request como AJAX
                    },
    
                    data: {
                        day: index,
                        sport: sport,
                        activity: activity,
                        athleteID: athleteID,
                        hour:hour,
                        orderSesion:3
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
                    },
                    success: function (res) {
                        console.log(`Día ${days[index]} guardado correctamente`, res);
                    },
                    error: function (xhr, status, error) {
                        console.error(`Error al guardar día ${days[index]}:`, error);
                        error_string=`Error al guardar día ${days[index]}`;
                        swal("Error al guardar!",
                            error_string, {
                            icon: "error",
                            buttons: {
                                confirm: {
                                    className: 'btn btn-warning'
                                }
                            },
                        });
                    }
                });
            }
        }
        
        swal("Registro guardado!",
            "", {
            icon: "success",
            buttons: {
                confirm: {
                    className: 'btn btn-success'
                }
            },
        });
        $('#modalConfiguracionSemanal').modal('hide');
        
    });
});

/*
	$('#add_ss').data('option', '2');
    getModalMesociclo();
	*/

function activarDistancia() {
    let sel = $('#hddCombinaMesoDeporteID').val();
    //alert(sel);
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=sessionsssession/getdistance",
        data: {
            "id": sel
        },
        success: function(data) {
            document.getElementById('distance_select').innerHTML = data;
            /*document.getElementById('distance_duatlon').innerHTML = data;
            document.getElementById('distance_aquatlon').innerHTML = data;*/
        },
        error: function(data) {},
    });
}

function activarCombosNivelContenido(_valor) {
    $('#divLevel').hide();
    $('#divnLevel').hide();
    $('#divbLevel').hide();
    $('#divcLevel').hide();
    $('#divContent').hide();
    $('#divnContent').hide();
    $('#divbContent').hide();
    $('#divcContent').hide();
    if (_valor == 3) { //Triatlón
        $('#divnLevel').show();
        $('#divbLevel').show();
        $('#divcLevel').show();
        $('#divnContent').show();
        $('#divbContent').show();
        $('#divcContent').show();
    } else if (_valor == 2) { //duatlón
        $('#divbLevel').show();
        $('#divcLevel').show();
        $('#divbContent').show();
        $('#divcContent').show();
    } else if (_valor == 1) { //Acuatlón
        $('#divnLevel').show();
        $('#divcLevel').show();
        $('#divnContent').show();
        $('#divcContent').show();
    } else {
        $('#divLevel').show();
        $('#divContent').show();
    }
}

function validaChkCombinaMeso(valor) {
    $('#divDeporteCombinaMeso1').addClass("btn-border");
    $('#divDeporteCombinaMeso2').addClass("btn-border");
    $('#divDeporteCombinaMeso3').addClass("btn-border");
    $('#divTextoCombinaMeso1').addClass("textoNegro");
    $('#divTextoCombinaMeso2').addClass("textoNegro");
    $('#divTextoCombinaMeso3').addClass("textoNegro");
    $('#hddCombinaMesoDeporteID').val(0);

    /*$("#divTriatlon").hide();
	$("#divDuatlon").hide();
	$("#divAquatlon").hide();
    /*$('.spanVistaNatacion').hide();
    $('.spanVistaCiclismo').hide();
    $('.spanVistaCarrera').hide();
	*/

    if (valor == 1) {
        $('#divDeporteCombinaMeso1').removeClass("btn-border");
        $('#divTextoCombinaMeso1').removeClass("textoNegro");
        $('#divTextoCombinaMeso1').addClass("textoBlanco");
        $('#hddCombinaMesoDeporteID').val(6);
        var sele = '<option value="">-- --</option><option value="2">' +
            'Natación ' +
            '</option><option value="3">' +
            'Carrera' + '</option>';
        //$("#divAquatlon").show();
    } else if (valor == 2) {
        $('#divDeporteCombinaMeso2').removeClass("btn-border");
        $('#divTextoCombinaMeso2').removeClass("textoNegro");
        $('#divTextoCombinaMeso2').addClass("textoBlanco");
        $('#hddCombinaMesoDeporteID').val(5);
        var sele = '<option value="">-- --</option><option value="1">' +
            'Ciclismo' +
            '</option><option value="3">' +
            'Carrera' + '</option>';
        //$("#divDuatlon").show();
    } else if (valor == 3) {
        $('#divDeporteCombinaMeso3').removeClass("btn-border");
        $('#divTextoCombinaMeso3').removeClass("textoNegro");
        $('#divTextoCombinaMeso3').addClass("textoBlanco");
        $('#hddCombinaMesoDeporteID').val(4);
        var sele = '<option value="">-- --</option><option value="1">' +
            'Ciclismo' +
            '</option><option value="2">' +
            'Natación ' +
            '</option><option value="3">' +
            'Carrera' + '</option>';
        //$("#divTriatlon").show();
    }
    $('#sport_select').html(sele);

    activarDistancia();
    activarCombosNivelContenido(valor);
}

function validaChk(valor) {

    $('#divDeporte1').addClass("btn-border");
    $('#divDeporte2').addClass("btn-border");
    $('#divDeporte3').addClass("btn-border");
    $('#divTexto1').addClass("textoNegro");
    $('#divTexto2').addClass("textoNegro");
    $('#divTexto3').addClass("textoNegro");
    $('#athleteszonesathlete-deporteID').val(valor);
    /*$('.claseOcultarRitmo').hide();
    $('.claseOcultarPotencia').hide();
    $('.claseOcultarVelocidad').hide();
    $('.claseOcultarVelocidadCarrera').hide();
    */
    $('.spanVistaNatacion').hide();
    $('.spanVistaCiclismo').hide();
    $('.spanVistaCarrera').hide();

    if (valor == 1) {
        $('#divDeporte1').removeClass("btn-border");
        $('#divTexto1').removeClass("textoNegro");
        $('#divTexto1').addClass("textoBlanco");
        /*$('.claseOcultarVelocidad').show();
        $('.claseOcultarVelocidadCarrera').show();*/
        $('.spanVistaCarrera').show();
    } else if (valor == 2) {
        $('#divDeporte2').removeClass("btn-border");
        $('#divTexto2').removeClass("textoNegro");
        $('#divTexto2').addClass("textoBlanco");
        /*$('.claseOcultarPotencia').show();
        $('.claseOcultarVelocidad').show();*/
        $('.spanVistaCiclismo').show();
    } else if (valor == 3) {
        $('#divDeporte3').removeClass("btn-border");
        $('#divTexto3').removeClass("textoNegro");
        $('#divTexto3').addClass("textoBlanco");
        /*$('.claseOcultarRitmo').show();*/
        $('.spanVistaNatacion').show();
    }
}

function load_frame(id, type) {
    $('#modalOptions').modal('hide');
    $('#previewModal').modal('show');
    $('#btnPrevisualizar').show();
    switch (type) {
        case 1:
            url = 'index.php?r=mesocyclesmesocycle/microciclo&mrc=tr&id=' + id + '&cp=0&preview=true&orgn=dash';
            //&preview=true
            break;
        case 2:
            ss = id.split('_');
            url = 'index.php?r=mesocyclesmesocycle/update&id=' + ss[0] + '&cp=' + ss[1] + '&preview=true&orgn=dash';
            //&preview=true
            break;
        case 3:
            //&preview=true
            url = 'index.php?r=mesocyclesmesocycle/update&mac=tr&id=' + id + '&cp=0&preview=true&orgn=dash';
            break;

        default:
            break;
    }
    console.log(url);
    $('#iframe').attr('src', url);
    //$('#iframe').reload();

}

function menos(id) {

    type = id['id'].slice(0, 2);
    num_id = id['id'].slice(2, -8);
    num_id = Number(num_id);
    num_id = num_id + 1;
    $('#' + type + num_id).data("affect", "0"); //agregado
    console.log('menos');
    width = $('#' + id['id']).css('width');
    width = width.slice(0, -2);
    //console.log(width);
    width = Number(width);
    if (width == 64) {
        width = 64;
    } else {
        width = width - 64;
    }
    /*if (width == 62) {
        width = 62;
    } else {
        width = width - 62;
    }*/

    console.log(width);
    //update
    identifier = $('#' + id['id']).data('identifier');
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=athletesathlete/updatecomment",
        data: {
            "id": identifier,
            "width": width,
        },
        success: function(data) {
            console.log(data);
            //$('#' + id['id']).css('left', left + 'px');
            $('#' + id['id']).css('width', width + 'px');
            $('#modalOptions').modal('hide');

        },
        error: function(data) {},
    });


}

function mas(id) {
    type = id['id'].slice(0, 2);
    num_id = id['id'].slice(2, -8);
    num_id = Number(num_id);
    num_id = num_id + 1;
    console.log(type + num_id);
    $('#' + type + num_id).data("affect", "1"); //agregado

    console.log($('#' + id['id']).css('width'));
    console.log('mas');

    width = $('#' + id['id']).css('width');
    width = width.slice(0, -2);

    width = Number(width);
    //width = width + 62;
    width = width + 64;
    console.log(width);
    //update
    identifier = $('#' + id['id']).data('identifier');
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=athletesathlete/updatecomment",
        data: {
            "id": identifier,
            "width": width,
        },
        success: function(data) {
            console.log(data);
            $('#' + id['id']).css('width', width + 'px');
            $('#modalOptions').modal('hide');

        },
        error: function(data) {},
    });
}

function editComment(id) {
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=athletesathlete/getcomment",
        data: {
            "id": id
        },
        success: function(data) {
            console.log(data);
            $('#editCommentModal').modal('show');
            $('#text_comment').val(data);
            $('#save_comment').data('identifier', id);

        },
        error: function(data) {},
    });
}
$('#save_comment').click(function() {
    let id = $(this).data('identifier');
    let text = $('#text_comment').val();
    console.log(id, text);
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=athletesathlete/editcomment",
        data: {
            "id": id,
            "text": text
        },
        success: function(data) {
            console.log(data);
            if (data) {
                swal("Registro actualizado!",
                    "Espere un momento.", {
                        icon: "success",
                        buttons: {
                            confirm: {
                                className: 'btn btn-warning'
                            }
                        },
                    });
                window.location.reload();
            } else {

            }
        },
        error: function(data) {},
    });
});

function remove(id) {
    alertify.confirm(
        'Confirmación',
        'Seguro que desea eliminar?',
        function() {
            //mover
            swal("Espere un momento. Cargando..", {
                buttons: false,
                timer: 1000,
            });

            console.log('remove');
            /*type = id['id'].slice(0, 2);
            num_id = id['id'].slice(2, -8);
            num_id = Number(num_id);
            num_id = num_id - 1;

            type = id['id'].slice(0, 2);
            num_id = id['id'].slice(2, -8);
            num_id = Number(num_id);
            num_id = num_id + 1;*/

            //identifier = $('#' + id['id']).data('identifier');
            identifier = id;
            $.ajax({
                type: 'get',
                url: "/web/index.php?r=athletesathlete/deletecomment",
                data: {
                    "id": identifier
                },
                success: function(data) {
                    console.log(data);
                    $('#' + id['id']).remove();
                    swal("Registro eliminado!",
                        "Espere un momento.", {
                            icon: "success",
                            buttons: {
                                confirm: {
                                    className: 'btn btn-warning'
                                }
                            },
                        });
                    setTimeout(function() {
                        location.reload();
                    }, 3000);
                },
                error: function(data) {},
            });
        },
        function() {

        }
    );

}

function remove_competicion(id, idDel) {
    alertify.confirm(
        'Confirmación',
        'Seguro que desea eliminar?',
        function() {
            //mover
            swal("Espere un momento. Cargando..", {
                buttons: false,
                timer: 1000,
            });

            console.log('remove_competition' + idDel);
            identifier = idDel;
            id_padre = id;
            $.ajax({
                type: 'get',
                url: "/web/index.php?r=athletesathlete/deletecompetition",
                data: {
                    "id": identifier
                },
                success: function(data) {
                    console.log(data);
                    //$('#' + id_padre).addClass('show_competition');
                    $('#' + idDel).remove();

                    swal("Registro eliminado!",
                        "Espere un momento.", {
                            icon: "success",
                            buttons: {
                                confirm: {
                                    className: 'btn btn-warning'
                                }
                            },
                        });
                    setTimeout(function() {
                        location.reload();
                    }, 3000);
                },
                error: function(data) {
                    alert(data);
                },
            });
        },
        function() {

        }
    );
}

function remove_test(id) {
    alertify.confirm(
        'Confirmación',
        'Seguro que desea eliminar?',
        function() {
            //mover
            swal("Espere un momento. Cargando..", {
                buttons: false,
                timer: 1000,
            });

            console.log('remove_test');
            identifier = $('#' + id['id']).data('identifier');
            //id_padre = id['id'].slice(0, -12);
            $.ajax({
                type: 'get',
                url: "/web/index.php?r=athletesathlete/deletetest",
                data: {
                    "id": identifier
                },
                success: function(data) {
                    console.log(data);
                    //$('#' + id_padre).addClass('show_test');
                    $('#' + id['id']).remove();

                    swal("Registro eliminado!",
                        "Espere un momento.", {
                            icon: "success",
                            buttons: {
                                confirm: {
                                    className: 'btn btn-warning'
                                }
                            },
                        });
                    setTimeout(function() {
                        location.reload();
                    }, 3000);
                },
                error: function(data) {},
            });
        },
        function() {

        }
    );
}

function edit_test(id) {
    console.log('edit_test');
    identifier = $('#' + id['id']).data('identifier');
    siglas = $('#' + id['id']).data('siglas');
    descripcion = $('#' + id['id']).data('descripcion');
    date = $('#' + id['id']).data('date');
    console.log(identifier, siglas, descripcion, date);

    $('#edit_siglas_test').val(siglas);
    $('#edit_descripcion_test').val(descripcion);
    $('#edit_date_tests').val(date);
    $('#edit_identifier_tests').val(identifier);

    $('#editModalTest').modal('show');
}

function moverDash(id, _fecha) {
    identifier = $('#' + id['id']).data('identifier');
    type = $('#' + id['id']).data('type');
    id_padre = id['id'].slice(0, -10);

    $('#txtFechaInicial').val(_fecha);
    $('#txtIDDachMover').val(identifier);
    $('#modalMover').modal('show');
}

function copiarA(id, microMesoID, _fechaI, _fechaF, codeDashboard) {
    identifier = $('#' + id['id']).data('identifier'); //id de dashboards_dashboard
    type = $('#' + id['id']).data('type'); //dashboards_dashboard es: 1=meso, 2=macro, 3=micro
    id_padre = id['id'].slice(0, -10);

    let option = "";
    if (type == "1") option = "2"; //meso
    if (type == "2") option = "3"; //macro
    if (type == "3") option = "1"; //micro
    $('#txtFechaInicialCopiar').val(_fechaI);
    $('#txtIDDachCopiar').val(identifier);
    $('#optionMicroMeso').val(option);
    $('#txtMicroMesoID').val(microMesoID);
    $('#txtFechaFinalCopiar').val(_fechaF);
    $('#txtCodeDashboard').val(codeDashboard);
    $('#modalCopiarA').modal('show');
}

function copiarAAtleta(atletaBuscadoID, _atletaSelected) {
    let fecha = $('#txtFechaInicialCopiar').val();
    if (fecha == "") {
        swal("Campos requeridos!",
            "Debe seleccionar una fecha", {
                icon: "warning",
                buttons: {
                    confirm: {
                        className: 'btn btn-warning'
                    }
                },
            });
    } else {
        alertify.confirm(
            'Confirmación',
            '¿Seguro que desea copiar al atleta seleccionado?',
            function() {
                //clonamos el meso/micro al nuevo atleta
                swal("Espere un momento. Cargando..", {
                    buttons: false,
                    timer: 3000,
                });

                let option = $('#optionMicroMeso').val();
                let microMesoID = $('#txtMicroMesoID').val();
                let start_date = $('#txtFechaInicialCopiar').val();
                let end_date = $('#txtFechaFinalCopiar').val();
                let codeDash = $('#txtCodeDashboard').val();
                /*alert(option + ' -- ' + microMesoID + ' -- ' + start_date + ' -- ' + end_date + ' -- ' + codeDash + " -- " + _atletaSelected);
                return false;/**/
                $.ajax({
                    type: 'get',
                    url: "/web/index.php?r=mesocyclesmesocycle/clone",
                    data: {
                        "athlete_id": atletaBuscadoID,
                        "option": option, //determina si es mesociclo microciclo y macrociclo
                        "id": microMesoID, //puede ser entero ej. 1775, o en formato 1775_1 donde 1775 es el mesociclo y 1 es la carpeta 
                        "start_date": start_date,
                        "end_date": end_date,
                        "codeDash": codeDash,
                        "width": 64
                    },
                    success: function(data) {
                        //console.log(data);
                        if (data == "Exito") {
                            id = $('#identifier_options2').val();
                            swal("Registro copiado!",
                                "Se copió al atleta " +
                                _atletaSelected, {
                                    icon: "success",
                                    buttons: {
                                        confirm: {
                                            className: 'btn btn-warning'
                                        }

                                    },
                                });
                            setTimeout(function() {
                                location.reload();
                            }, 5000);
                        } else if (data == "fecha_ocupada") {
                            swal("Fecha ocupada",
                                "Seleccione otra fecha", {
                                    icon: "warning",
                                    buttons: {
                                        confirm: {
                                            className: 'btn btn-warning'
                                        }
                                    },
                                });
                        } else {
                            swal("Error al seleccionar el registro!",
                                "" + data, {
                                    icon: "warning",
                                    buttons: {
                                        confirm: {
                                            className: 'btn btn-warning'
                                        }
                                    },
                                });
                        }
                    },
                    error: function(data) {},
                });
            },
            function() {

            }
        );
    }
}


$("#txtBuscarAtleta").on('keypress', function(e) {
    var keycode = e.keyCode || e.which;
    if (keycode == 13) {
        $('#btnBuscarAtleta').click();
        return false;
    }
});

$('#btnBuscarAtleta').click(function() {
    let sel = $('#txtBuscarAtleta').val();
    if (sel.trim() == "") {
        swal("Campos requeridos!",
            "Debe escribir almenos 3 caráteres para buscar", {
                icon: "warning",
                buttons: {
                    confirm: {
                        className: 'btn btn-warning'
                    }
                },
            });
    } else {
        swal("Espere un momento. Cargando..", {
            buttons: false,
            timer: 1000,
        });
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=athletesathlete/buscaratleta",
            data: {
                "word": sel
            },
            success: function(data) {
                document.getElementById('divAtletasBuscados').innerHTML = data;
            },
            error: function(data) {},
        });
    }
});


function remove_dashboard(id) {
    alertify.confirm(
        'Confirmación',
        'Seguro que desea eliminar?',
        function() {
            getEspere();
            console.log('remove_dashboard');
            identifier = $('#' + id['id']).data('identifier');
            type = $('#' + id['id']).data('type');
            id_padre = id['id'].slice(0, -10);
            $.ajax({
                type: 'get',
                url: "/web/index.php?r=athletesathlete/deletemm",
                data: {
                    "id": identifier,
                    "type": type,
                },
                success: function(data) {
                    console.log(data);
                    $('#' + id['id']).remove();
                    swal("Registro Eliminado!",
                        "Espere un momento.", {
                            icon: "success",
                            buttons: false,
                            timer: 2000,
                        });
                    setTimeout(function() {
                        location.reload();
                    }, 2000);
                },
                error: function(data) {},
            });
        },
        function() {

        }
    );
}

function call(id) {
    console.log($('#ma' + id).data('identifier'));
    $('#identifier_options').val($('#ma' + id).data('identifier'));
    $('#modalOptions').modal('show');
};

function show_event_details(id) {

    $.ajax({
        type: 'get',
        url: "/web/index.php?r=athletesathlete/getevent",
        data: {
            "id": id,
        },
        success: function(data) {
            console.log(data);
            $('#modal_body_editar_evento').empty()
            $('#modal_body_editar_evento').append(data);
            $('#editarEvento').modal('show');
            console.log('THIS:' + $('#identifier_event_details').val())

        },
        error: function(data) {},
    });
}

function eliminarActividad(actividadID) {
    alertify.confirm('Confirmación',
        'Seguro que desea eliminar el registro',
        function() {
            $.ajax({
                type: 'get',
                url: "/web/index.php?r=site/deleteactividad",
                data: {
                    "actividadID": actividadID
                },
                success: function(data) {
                    if (data == "Exito") {
                        swal("Registro Eliminado!",
                            "", {
                                icon: "success",
                                buttons: {
                                    confirm: {
                                        className: 'btn btn-warning'
                                    }
                                },
                            });
                        $("#trID" + actividadID).remove();
                    } else {
                        swal("Error al eliminar!",
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
                error: function(data) {},
            });
        },
        function() {

        });
}

function eliminarActividadStrava(actividadID) {
    alertify.confirm('Confirmación',
        'Seguro que desea eliminar el registro',
        function() {
            $.ajax({
                type: 'get',
                url: "/web/index.php?r=site/deleteactividadstrava",
                data: {
                    "actividadID": actividadID
                },
                success: function(data) {
                    if (data == "Exito") {
                        swal("Registro Eliminado!",
                            "", {
                                icon: "success",
                                buttons: {
                                    confirm: {
                                        className: 'btn btn-warning'
                                    }
                                },
                            });
                        $("#trID" + actividadID).remove();
                    } else {
                        swal("Error al eliminar!",
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
                error: function(data) {},
            });
        },
        function() {

        });
}

function delete_event_details(id) {
    alertify.confirm(
        'Confirmación',
        'Seguro que desea eliminar el registro?',
        function() { //////
            $.ajax({
                type: 'get',
                url: "/web/index.php?r=athletesathlete/deleteevent",
                data: {
                    "id": id,
                },
                success: function(data) {
                    console.log(data);
                    $('#exampleModal3').modal('hide');
                    swal("Registro Eliminado!",
                        "Espere un momento.", {
                            icon: "success",
                            buttons: {
                                confirm: {
                                    className: 'btn btn-warning'
                                }
                            },
                        }).then((result) => {
                        window.location.reload();
                    });
                },
                error: function(data) {},
            });
        },
        function() {

        }
    );
}

function add_event_competition(id) {
    identifier = $('#identifier_competitions').val();
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=athletesathlete/addcompetition",
        data: {
            "event_id": id,
            "athlete_id": 146,
        },
        success: function(data) {
            console.log(data);
            //$('#' + identifier).append(data);
            $('#exampleModal4').modal('hide');
            location.reload();
        },
        error: function(data) {},
    });
}

function delete_seguimiento(id) {
    alertify.confirm('Confirmación',
        'Seguro que desea eliminar el registro',
        function() {
            $.ajax({
                type: 'get',
                url: "/web/index.php?r=athletesathlete/deleteseguimiento",
                data: {
                    "id": id,
                },
                success: function(data) {
                    console.log(data);
                    location.reload();
                },
                error: function(data) {},
            });
        },
        function() {}
    )

}

function update_seguimiento(id, name, date) {
    $('#exampleModalEdit').modal('show');
    $('#name_seguimiento_edit').val(name);
    $('#date_seguimiento_edit').val(date);
    $('#id_seguimiento_edit').val(id);
}

function update_seguimiento2() {
    $('#exampleModalEdit').modal('hide');
    let id = $('#id_seguimiento_edit').val();
    let name = $('#name_seguimiento_edit').val();
    let date = $('#date_seguimiento_edit').val();

    $.ajax({
        type: 'get',
        url: "/web/index.php?r=athletesathlete/updateseguimiento",
        data: {
            "id": id,
            "name": name,
            "date": date,
        },
        success: function(data) {
            console.log(data);
            location.reload();
        },
        error: function(data) {},
    });

}

function delete_logro(id) {
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=athletesathlete/deletelogro",
        data: {
            "id": id,
        },
        success: function(data) {
            console.log(data);
            location.reload();
        },
        error: function(data) {},
    });
}

function update_logro(id) {
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=athletesathlete/updatelogro",
        data: {
            "id": id,
        },
        success: function(data) {
            console.log(data);
            location.reload();
        },
        error: function(data) {},
    });
}
banderaReporte = 1; //1 = ACTIVIDADES RECIBIDAS 	|| 	2 = ACTIVIDADES PROGRAMADAS
function selecciona(_opt) {
    banderaReporte = _opt;
    if (_opt == 1) {
        $('#actividades').show();
        $('#spanTotalRecords').show();
        $('#spanTotalRecordsStrava').hide();
        $('#actividadesStrava').hide();
    } else {
        $('#actividades').hide();
        $('#spanTotalRecords').hide();
        $('#spanTotalRecordsStrava').show();
        $('#actividadesStrava').show();

    }
}
selecciona(1);
$("#txtAtleta").on('keypress', function(e) {
    var keycode = e.keyCode || e.which;
    if (keycode == 13) {
        filtro_buscar('', '1');
        return false;
    }
});

function filtro_buscar(limite, pg) {
    let fi = $('#txtFechaI').val();
    let ff = $('#txtFechaF').val();
    let atl = 'JOURDAN MENDIETA';
    let dep = 0;
    let deporteText = "";
    if (banderaReporte == 2) { //ACTIVIDADES PROGRAMADAS
        dep = $('#cmbDeporte').val();
    } else {
        deporteText = $('#txtDeporte').val();
    }
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=site/filtrogarmin",
        data: {
            fi: fi,
            ff: ff,
            atl: atl,
            pg: pg,
            limite: limite,
            deporte: dep,
            deporteText: deporteText,
            opcionReporte: banderaReporte
        },
        success: function(data) {
            let arData = data.split("||||");
            console.log("resp: ", data);
            if (banderaReporte == 1) {
                $("#trResults").html(arData[0]);
                $("#spanPaginacion").html(arData[1]);
                $("#spanTotalRecords").html(arData[2]);
            } else if (banderaReporte == 4) {
                $("#trResultsStrava").html(arData[0]);
                $("#spanPaginacionStrava").html(arData[1]);
                $("#spanTotalRecordsStrava").html(arData[2]);
            }
        },
        error: function(data) {
            alert(fi + ff + atl + data.responseText + '/web/index.php?r=site/filtrogarmin');
            console.log("=", data.responseText);
        },
    });
}
$.ajax({
    type: 'get',
    url: "/web/index.php?r=progressionsprogression/getdatafases",
    data: {
        "perfilSelectedID": 146,
        "id":''
    },
    success: function(data) {
        console.log(data);
        $("#tdTiempo1").html(data.porcentajeTiempo.fase1.toFixed(0));
        $("#tdCarga1").html(data.porcentajeCarga.fase1.toFixed(0));
        $("#tdCargaTotal1").html(data.porcentajeCargaTotal.fase1.toFixed(0));

        $("#tdTiempo2").html(data.porcentajeTiempo.fase2.toFixed(0));
        $("#tdCarga2").html(data.porcentajeCarga.fase2.toFixed(0));
        $("#tdCargaTotal2").html(data.porcentajeCargaTotal.fase2.toFixed(0));

        $("#tdTiempo3").html(data.porcentajeTiempo.fase3.toFixed(0));
        $("#tdCarga3").html(data.porcentajeCarga.fase3.toFixed(0));
        $("#tdCargaTotal3").html(data.porcentajeCargaTotal.fase3.toFixed(0));
    },
    error: function(data) {},
});
function copiarHora(fila,dia){
    let hora=$('#hora'+fila+'_'+dia).val();
    $(".hora_esquema_"+fila).val(hora);

}
function copiarDeporte(fila,dia){
    let deporte=$('#cmbDeporte'+fila+'_'+dia).val();
    $(".deporte_esquema_"+fila).val(deporte);
}

jQuery(function ($) {
jQuery('#w0').yiiActiveForm([{"id":"athletesathlete-updated_at","name":"updated_at","container":".field-athletesathlete-updated_at","input":"#athletesathlete-updated_at","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Updated At no puede estar vacío."});}},{"id":"athletesathlete-created_at","name":"created_at","container":".field-athletesathlete-created_at","input":"#athletesathlete-created_at","error":".help-block.errorHiden","validate":function (attribute, value, messages, deferred, $form) {yii.validation.required(value, messages, {"message":"Created At no puede estar vacío."});}}], []);
jQuery('#w1').yiiActiveForm([], []);
jQuery('#w2').yiiActiveForm([], []);
jQuery('#w3').yiiActiveForm([], []);
jQuery('#w4').yiiActiveForm([], []);
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