$(document).ready(function() {
    $('.plan_level').hide();
    $('.blocks_level').hide();
    $(".show_sports").click(function() {
        $(".sports_level").show();
    });
    $(".hide_sports").click(function() {
        $(".sports_level").hide();
    });
    $(".show_trans").click(function() {
        $(".trans_level").show();
        $(".sports_level").hide();
    });
    $(".hide_trans").click(function() {
        $(".trans_level").hide();
        $(".sports_level").show();
    });
    $(".trans").hide();
    $(".trans_level").hide();
    $(".sports").click(function() {
        $('#first_level').val($(this).val());

        $('#plan_level').empty();
        $('.plan_level').hide();
        $('.blocks_level').hide();

        $(".trans").hide();
        $(".trans_level").show();
        $(".sports_level").hide();
        //alert($(this).val());
        let sport_string = $(this).val();
        var trans = $('.trans');
        $.each(trans, function(index, item) {
            let cadena = $(this).val();
            let posicion = cadena.indexOf(sport_string);
            if (posicion !== -1) {
                $(this).show();
                //console.log($(this).val());
            }

        });
    });
    $(".trans").click(function() {
        $('#second_level').val($(this).val());
        $('.blocks_level').show();
        $('#plan_level').empty();
        $('.plan_level').show();
        let arr = $(this).val();
        let split_arr = arr.split("_");
        //console.log(split_arr.length);
        let arr_colors = ['bg-light', 'bg-light', 'bg-light']
        $.each(split_arr, function(index, item) {
            let r = (Math.random() + 1).toString(36).substring(7);
            r = item + '_' + index + '_' + r;
            //console.log("random", r);
            $('#plan_level').append(
                '<div style="overflow: auto;width:' + (90 / split_arr.length).toFixed() +
                '%" class="chart-wrap horizontal ' + r +
                ' card plan_block_level"><div class="' + r + ' card-header">' + item
                .toUpperCase() +
                '</div><div class="block_items card-body grid ' + r + '" id="' + r +
                '" name="' +
                r + '" data-info="' + r + '"></div></div><br>');
            if (index !== split_arr.length - 1) {
                $('#plan_level').append(
                    '<div class="bg-info" style="opacity:60%;writing-mode: vertical-lr;transform: rotate(180deg);color:white;" align="center">TRANSICION</div>'
                );
            }

        });

    });
    $(".blocks").click(function() {
        $('#modal_title_block').empty();
        $('#select_blocks').empty();
        $('#modal_title_block').append($(this).val().toUpperCase());
        $('#button_make_div').val($(this).val());
        $(".block_items").each(function() {
            let arr_info = $(this).data('info').split('_');
            $('#select_blocks').append('<option value="' + $(this).data('info') + '">' +
                arr_info[0].toUpperCase() + '</option>');
            //console.log($(this).data('info'));
        });
    });
    $("#button_make_div").click(function() {
        /*console.log('div_structure');
        console.log($('#select_blocks').val());
        console.log($('#select_zone').val());
        console.log($('#select_quantity_large').val());
        console.log($('#select_type_large').val());
        console.log($('#pause').val());
        console.log($('#times').val());*/
        let case_type = $('#select_type_large').val();
        let string_type = 'default';
        switch (case_type) {
            case '1':
                string_type = 'min';
                break;
            case '2':
                string_type = 'seg';
                break;
            case '3':
                string_type = 'mts';
                break;
        }
        let times = $('#times').val();
        if (times == '') {
            times = 1;
        }



        block = $(this).val();
        times = Number(times);
        quantity_large = Number($('#select_quantity_large').val());
        if (string_type == 'min') {
            quantity_large = quantity_large * 6;
        }
        zone = $('#select_zone').val();
        pause = Number($('#pause').val()) * 6;
        if (block == 'comentario') {
            $('#' + $('#select_blocks').val()).parent().append(
                '<br><input class="form-control-xs" value="comentario">')
        } else {
            make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                zone, pause, 'min');
        }


        /*for (let i = 0; i < times; i++) {
            $('#' + $('#select_blocks').val()).append('<div class="bar" style="margin-bottom:' + Number(
                    pause) * 6 + 'px;--bar-value:' + Number(zone) * 10 + '%;--bar-thickness: ' +
                Number(quantity_large) * 4 + 'px" data-name="' + quantity_large + ' ' +
                string_type +
                '" title="' + $(this).val() + '&#013; Zona:' + Number(zone) + '; &#013;' +
                quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause +
                ' minuto(s)"></div>');
        }*/
        $('#exampleModal').modal('hide');
    })
    $("#set_defaults").click(function() {
        //set defaults
        let sport_split = $('#select_blocks').val().split('_');
        let sport = sport_split[0];
        let block = $('#button_make_div').val();
        switch (block) {
            case 'calentamiento':
                switch (sport) {
                    case 'carrera':
                        times = 1;
                        quantity_large = 15 * 6;
                        zone = 1;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'ciclismo':
                        times = 1;
                        quantity_large = 30 * 6;
                        zone = 1;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'natacion':
                        times = 3;
                        quantity_large = 200;
                        zone = 1;
                        pause = 10;
                        string_type = 'mts';
                        pause_type = 'seg';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                }
                break;
            case 'drills':

                break;
            case 'continuo':
                switch (sport) {
                    case 'carrera':
                        times = 1;
                        quantity_large = 45 * 6;
                        zone = 1;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'ciclismo':
                        times = 1;
                        quantity_large = 90 * 6;
                        zone = 1;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'natacion':
                        times = 1;
                        quantity_large = 1500;
                        zone = 1;
                        pause = 0;
                        string_type = 'mts';
                        pause_type = 'seg';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                }
                break;
            case 'pausa':
                switch (sport) {
                    case 'carrera':
                        times = 1;
                        quantity_large = 0;
                        zone = 10;
                        pause = 1 * 6;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'ciclismo':
                        times = 1;
                        quantity_large = 0;
                        zone = 10;
                        pause = 1 * 6;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'natacion':
                        times = 1;
                        quantity_large = 0;
                        zone = 10;
                        pause = 1 * 6;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                }
                break;
            case 'continuo':

                break;
            case 'vuelta':
                switch (sport) {
                    case 'carrera':
                        times = 1;
                        quantity_large = 5 * 6;
                        zone = 1;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'ciclismo':
                        times = 1;
                        quantity_large = 10 * 6;
                        zone = 1;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'natacion':
                        times = 4;
                        quantity_large = 50;
                        zone = 1;
                        pause = 10;
                        string_type = 'mts';
                        pause_type = 'seg';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                }
                break;
            case 'comentario':

                break;
            case 'progresivo':
                switch (sport) {
                    case 'carrera':
                        times = 1;
                        quantity_large = 20 * 6;
                        zone = 2;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 1;
                        quantity_large = 15 * 6;
                        zone = 3;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 1;
                        quantity_large = 10 * 6;
                        zone = 4;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'ciclismo':
                        times = 1;
                        quantity_large = 20 * 6;
                        zone = 2;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 1;
                        quantity_large = 15 * 6;
                        zone = 3;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 1;
                        quantity_large = 10 * 6;
                        zone = 4;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'natacion':
                        times = 1;
                        quantity_large = 400;
                        zone = 2;
                        pause = 0;
                        string_type = 'mts';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 1;
                        quantity_large = 300;
                        zone = 3;
                        pause = 0;
                        string_type = 'mts';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 1;
                        quantity_large = 200;
                        zone = 4;
                        pause = 0;
                        string_type = 'mts';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                }
                break;
            case 'farlek':
                switch (sport) {
                    case 'carrera':
                        times = 1;
                        quantity_large = 3 * 6;
                        zone = 4;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 1;
                        quantity_large = 2 * 6;
                        zone = 2;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 1;
                        quantity_large = 1 * 6;
                        zone = 6;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 3;
                        quantity_large = 1 * 6;
                        zone = 2;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);

                        break;
                    case 'ciclismo':
                        times = 1;
                        quantity_large = 3 * 6;
                        zone = 4;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 1;
                        quantity_large = 2 * 6;
                        zone = 2;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 1;
                        quantity_large = 1 * 6;
                        zone = 6;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 3;
                        quantity_large = 1 * 6;
                        zone = 2;
                        pause = 0;
                        string_type = 'min';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);

                        break;
                    case 'natacion':
                        times = 1;
                        quantity_large = 100;
                        zone = 4;
                        pause = 0;
                        string_type = 'mts';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 1;
                        quantity_large = 50;
                        zone = 2;
                        pause = 0;
                        string_type = 'mts';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 1;
                        quantity_large = 50;
                        zone = 6;
                        pause = 0;
                        string_type = 'mts';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 3;
                        quantity_large = 50;
                        zone = 2;
                        pause = 0;
                        string_type = 'mts';
                        pause_type = '';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                }
                break;
            case 'secuencia':
                switch (sport) {
                    case 'carrera':
                        times = 2;
                        quantity_large = 4 * 6;
                        zone = 4;
                        pause = 1 * 6;
                        string_type = 'min';
                        pause_type = 'min';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 2;
                        quantity_large = 500;
                        zone = 5;
                        pause = 1 * 6;
                        string_type = 'mts';
                        pause_type = 'min';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'ciclismo':
                        times = 2;
                        quantity_large = 5 * 6;
                        zone = 4;
                        pause = 1 * 6;
                        string_type = 'min';
                        pause_type = 'min';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 2;
                        quantity_large = 2 * 6;
                        zone = 5;
                        pause = 1 * 6;
                        string_type = 'min';
                        pause_type = 'min';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'natacion':
                        times = 2;
                        quantity_large = 200;
                        zone = 4;
                        pause = 20;
                        string_type = 'mts';
                        pause_type = 'seg';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        times = 2;
                        quantity_large = 100;
                        zone = 5;
                        pause = 40;
                        string_type = 'mts';
                        pause_type = 'seg';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                }
                break;
            case 'intervalos':
                switch (sport) {
                    case 'carrera':
                        times = 6;
                        quantity_large = 5 * 6;
                        zone = 4;
                        pause = 1 * 6;
                        string_type = 'min';
                        pause_type = 'min';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'ciclismo':
                        times = 6;
                        quantity_large = 5 * 6;
                        zone = 4;
                        pause = 1 * 6;
                        string_type = 'min';
                        pause_type = 'min';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'natacion':
                        times = 8;
                        quantity_large = 200;
                        zone = 4;
                        pause = 20;
                        string_type = 'mts';
                        pause_type = 'seg';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                }
                break;
            case 'intermitente':
                switch (sport) {
                    case 'carrera':
                        times = 20;
                        quantity_large = 30;
                        zone = 6;
                        pause = 30;
                        string_type = 'seg';
                        pause_type = 'seg';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'ciclismo':
                        times = 20;
                        quantity_large = 30;
                        zone = 6;
                        pause = 30;
                        string_type = 'seg';
                        pause_type = 'seg';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'natacion':
                        times = 20;
                        quantity_large = 25;
                        zone = 6;
                        pause = 25;
                        string_type = 'mts';
                        pause_type = 'mts';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                }
                break;
            case 'repeticiones':
                switch (sport) {
                    case 'carrera':
                        times = 5;
                        quantity_large = 1000;
                        zone = 5;
                        pause = 2 * 6;
                        string_type = 'mts';
                        pause_type = 'min';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'ciclismo':
                        times = 5;
                        quantity_large = 3 * 6;
                        zone = 5;
                        pause = (1.5) * 6;
                        string_type = 'min';
                        pause_type = 'min';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'natacion':
                        times = 6;
                        quantity_large = 200;
                        zone = 5;
                        pause = 1 * 6;
                        string_type = 'mts';
                        pause_type = 'min';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                }
                break;
            case 'sprints':
                switch (sport) {
                    case 'carrera':
                        times = 4;
                        quantity_large = 30;
                        zone = 10;
                        pause = 30;
                        string_type = 'mts';
                        pause_type = 'seg';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'ciclismo':
                        times = 4;
                        quantity_large = 5;
                        zone = 10;
                        pause = 30;
                        string_type = 'seg';
                        pause_type = 'seg';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                    case 'natacion':
                        times = 4;
                        quantity_large = 10;
                        zone = 10;
                        pause = 30;
                        string_type = 'mts';
                        pause_type = 'seg';
                        console.log('call funcion')
                        make_bar($('#select_blocks').val(), block, times, quantity_large, string_type,
                            zone, pause, pause_type);
                        break;
                }
                break;
        }
    });

    function make_bar(sport, block, times, quantity_large, string_type, zone, pause, pause_type) {
        console.log('inside')
        for (let i = 0; i < times; i++) {
            let r_id = (Math.random() + 1).toString(36).substring(7);
            r_id = sport + '_' + block + '_' + r_id;
            if (string_type == 'min') {
                if (pause_type == 'min') {
                    $('#' + sport).append('<div id="' + r_id + '" name="' + r_id + '" data-pauset="' +
                        pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                        '" data-block="' + block +
                        '" data-zone="' + zone + '" data-quantity="' + quantity_large + '" data-pause="' +
                        pause + '" onclick="console.log(' + pause +
                        ');call(' + r_id + ');" class="bar" style="margin-bottom:' + pause +
                        'px;--bar-value:' +
                        Number(zone) * 10 + '%;--bar-thickness: ' +
                        quantity_large + 'px" data-name="' + quantity_large / 6 + ' ' +
                        string_type +
                        '" title="' + block.toUpperCase() + '&#013; Zona:' + zone + '; &#013; ' +
                        quantity_large / 6 + ' ' + string_type + '; &#013; Pausa: ' + pause / 6 +
                        ' ' + pause_type + '"></div>');
                } else {
                    $('#' + sport).append('<div id="' + r_id + '" name="' + r_id + '" data-pauset="' +
                        pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                        '" data-block="' + block +
                        '" data-zone="' + zone + '" data-quantity="' + quantity_large + '" data-pause="' +
                        pause + '" onclick="console.log(' + pause +
                        ');call(' + r_id + ');" class="bar" style="margin-bottom:' + pause +
                        'px;--bar-value:' +
                        Number(zone) * 10 + '%;--bar-thickness: ' +
                        quantity_large + 'px" data-name="' + quantity_large / 6 + ' ' +
                        string_type +
                        '" title="' + block.toUpperCase() + '&#013; Zona:' + zone + '; &#013; ' +
                        quantity_large / 6 + ' ' + string_type + '; &#013; Pausa: ' + pause +
                        ' ' + pause_type + '"></div>');
                }
            } else {
                if (pause_type == 'min') {
                    $('#' + sport).append('<div id="' + r_id + '" name="' + r_id + '" data-pauset="' +
                        pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                        '" data-block="' + block +
                        '" data-zone="' + zone + '" data-quantity="' + quantity_large + '" data-pause="' +
                        pause + '" onclick="console.log(' + pause +
                        ');call(' + r_id + ');" class="bar" style="margin-bottom:' + pause +
                        'px;--bar-value:' +
                        Number(zone) * 10 + '%;--bar-thickness: ' +
                        quantity_large + 'px" data-name="' + quantity_large + ' ' +
                        string_type +
                        '" title="' + block.toUpperCase() + '&#013; Zona:' + zone + '; &#013; ' +
                        quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause / 6 +
                        ' ' + pause_type + '"></div>');
                } else {
                    $('#' + sport).append('<div id="' + r_id + '" name="' + r_id + '" data-pauset="' +
                        pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                        '" data-block="' + block +
                        '" data-zone="' + zone + '" data-quantity="' + quantity_large + '" data-pause="' +
                        pause + '" onclick="console.log(' + pause +
                        ');call(' + r_id + ');" class="bar" style="margin-bottom:' + pause +
                        'px;--bar-value:' +
                        Number(zone) * 10 + '%;--bar-thickness: ' +
                        quantity_large + 'px" data-name="' + quantity_large + ' ' +
                        string_type +
                        '" title="' + block.toUpperCase() + '&#013; Zona:' + zone + '; &#013; ' +
                        quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause +
                        ' ' + pause_type + '"></div>');
                }
            }




        }
        $('#exampleModal').modal('hide');
    }

    function edit_bar(id, sport, block, times, quantity_large, string_type, zone, pause, pause_type) {
        console.log('edit')
        let r_id = id;
        let string_to_put = '';
        for (let i = 0; i < times; i++) {
            let r_id = (Math.random() + 1).toString(36).substring(7);
            r_id = sport + '_' + block + '_' + r_id;
            if (string_type == 'min') {
                if (pause_type == 'min') {
                    string_to_put += '<div id="' + r_id + '" name="' + r_id + '" data-pauset="' +
                        pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                        '" data-block="' + block +
                        '" data-zone="' + zone + '" data-quantity="' + quantity_large + '" data-pause="' +
                        pause + '" onclick="console.log(' + pause +
                        ');call(' + r_id + ');" class="bar" style="margin-bottom:' + pause +
                        'px;--bar-value:' +
                        Number(zone) * 10 + '%;--bar-thickness: ' +
                        quantity_large + 'px" data-name="' + quantity_large / 6 + ' ' +
                        string_type +
                        '" title="' + block.toUpperCase() + '&#013; Zona:' + zone + '; &#013; ' +
                        quantity_large / 6 + ' ' + string_type + '; &#013; Pausa: ' + pause / 6 +
                        ' ' + pause_type + '"></div>';
                } else {
                    string_to_put += '<div id="' + r_id + '" name="' + r_id + '" data-pauset="' +
                        pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                        '" data-block="' + block +
                        '" data-zone="' + zone + '" data-quantity="' + quantity_large + '" data-pause="' +
                        pause + '" onclick="console.log(' + pause +
                        ');call(' + r_id + ');" class="bar" style="margin-bottom:' + pause +
                        'px;--bar-value:' +
                        Number(zone) * 10 + '%;--bar-thickness: ' +
                        quantity_large + 'px" data-name="' + quantity_large / 6 + ' ' +
                        string_type +
                        '" title="' + block.toUpperCase() + '&#013; Zona:' + zone + '; &#013; ' +
                        quantity_large / 6 + ' ' + string_type + '; &#013; Pausa: ' + pause +
                        ' ' + pause_type + '"></div>';
                }
            } else {
                if (pause_type == 'min') {
                    string_to_put += '<div id="' + r_id + '" name="' + r_id + '" data-pauset="' +
                        pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                        '" data-block="' + block +
                        '" data-zone="' + zone + '" data-quantity="' + quantity_large + '" data-pause="' +
                        pause + '" onclick="console.log(' + pause +
                        ');call(' + r_id + ');" class="bar" style="margin-bottom:' + pause +
                        'px;--bar-value:' +
                        Number(zone) * 10 + '%;--bar-thickness: ' +
                        quantity_large + 'px" data-name="' + quantity_large + ' ' +
                        string_type +
                        '" title="' + block.toUpperCase() + '&#013; Zona:' + zone + '; &#013; ' +
                        quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause / 6 +
                        ' ' + pause_type + '"></div>';
                } else {
                    string_to_put += '<div id="' + r_id + '" name="' + r_id + '" data-pauset="' +
                        pause_type + '" data-string="' + string_type + '" data-sport="' + sport +
                        '" data-block="' + block +
                        '" data-zone="' + zone + '" data-quantity="' + quantity_large + '" data-pause="' +
                        pause + '" onclick="console.log(' + pause +
                        ');call(' + r_id + ');" class="bar" style="margin-bottom:' + pause +
                        'px;--bar-value:' +
                        Number(zone) * 10 + '%;--bar-thickness: ' +
                        quantity_large + 'px" data-name="' + quantity_large + ' ' +
                        string_type +
                        '" title="' + block.toUpperCase() + '&#013; Zona:' + zone + '; &#013; ' +
                        quantity_large + ' ' + string_type + '; &#013; Pausa: ' + pause +
                        ' ' + pause_type + '"></div>';
                }
            }
        }
        $('#' + id).replaceWith(string_to_put);
        $('#exampleModal2').modal('hide');
    }
    $('#button_delete_div').click(function() {
        $('#' + $(this).val()).remove();
        $('#exampleModal2').modal('hide');
    });
    $('#button_edit_div').click(function() {
        //$('#'+$(this).val()).remove();
        let case_type = $('#select_type_large_edit').val();
        let string_type = 'default';
        switch (case_type) {
            case '1':
                string_type = 'min';
                break;
            case '2':
                string_type = 'seg';
                break;
            case '3':
                string_type = 'mts';
                break;
        }
        let times = $('#times_edit').val();
        if (times == '') {
            times = 1;
        }
        //block = $(this).val();
        times = Number(times);
        quantity_large = Number($('#select_quantity_large_edit').val());
        if (string_type == 'min') {
            quantity_large = quantity_large * 6;
        }
        zone = $('#select_zone_edit').val();
        pause = Number($('#pause_edit').val()) * 6;

        edit_bar($(this).val(), $('#' + $(this).val()).data('sport'), $('#' + $(this).val()).data(
                'block'), times, quantity_large,
            string_type,
            zone, pause, 'min');

        /*$('#'+$(this).val()).css('margin-bottom',pause);
        $('#'+$(this).val()).css('--bar-value',Number(zone) * 10);
        $('#'+$(this).val()).css('--bar-thickness',quantity_large);*/
        $('#exampleModal2').modal('hide');
    });
});

function confirmDelete(key, token) {
    alertify.confirm(
        'Confirmación',
        'Seguro que desea eliminar el registro?',
        function() {
            $.ajax({
                type: 'POST',
                url: "index.php?r=sessionsssession/delete",
                data: {
                    key: key,
                    token: token
                },
                success: function(bool) {
                    //console.log('success '+bool);
                    if (bool == true) {
                        alertify.success(
                            '<span style="color: #FFFFFF;"><i class="fa fa-trash" aria-hidden="true"></i> &nbsp;&nbsp;Registro eliminado espere un momento ...</span>',
                            2,
                            function() {
                                location.reload();
                            });
                    } else {
                        alertify.error(
                            '<span style="color: #FFFFFF;">Ocurrio un error, intenta de nuevo</span>',
                            2,
                            function() {
                                location.reload();
                            });
                    }
                },
                error: function(data) {
                    // console.log('error '+data);
                    alertify.error(
                        '<span style="color: #FFFFFF;">Ocurrio un error, intenta de nuevo</span>',
                        2,
                        function() {
                            location.reload();
                        });
                },
            });
        },
        function() {});
}

function call(r_id) {
    let id = r_id['id'];
    let zone = $('#' + id).data('zone');
    let string_type = $('#' + id).data('string');
    let block = $('#' + id).data('block');
    let quanity_large = $('#' + id).data('quantity');
    let pause = $('#' + id).data('pause');
    let pause_type = $('#' + id).data('pauset');

    switch (string_type) {
        case 'min':
            string_type = '1';
            break;
        case 'seg':
            string_type = '2';
            break;
        case 'mts':
            string_type = '3';
            break;
    }

    if (string_type == '1') {
        quantity_large = Number($('#' + id).data('quantity')) / 6;
    }
    if (pause_type == 'min') {
        pause = Number($('#' + id).data('pause')) / 6;
    }

    $('#pause_edit').val(pause);
    $('#select_zone_edit').val(zone);
    $('#select_quantity_large_edit').val(quantity_large);
    $('#select_type_large_edit').val(string_type);

    $('#button_delete_div').val(id);
    $('#button_edit_div').val(id);
    $('#exampleModal2').modal('show');

}

jQuery(function ($) {
jQuery('#w0').yiiGridView({"filterUrl":"\/web\/index.php?r=sessionsssession\/index","filterSelector":"#w0-filters input, #w0-filters select","filterOnFocusOut":true});
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