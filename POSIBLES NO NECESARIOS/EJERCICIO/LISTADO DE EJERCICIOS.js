function confirmDelete(key, token) {
    alertify.confirm(
        'Confirmación',
        'Seguro que desea eliminar el registro?',
        function() {
            $.ajax({
                type: 'POST',
                url: "index.php?r=exercisesexercise/delete",
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

jQuery(function ($) {
jQuery('#w0').yiiGridView({"filterUrl":"\/web\/index.php?r=exercisesexercise\/index","filterSelector":"#w0-filters input, #w0-filters select","filterOnFocusOut":true});
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