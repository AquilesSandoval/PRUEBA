jQuery(function ($) {
jQuery('#register-form').yiiActiveForm([], {"errorSummary":".alert.alert-danger","errorCssClass":"is-invalid","successCssClass":"is-valid","validationStateOn":"input"});
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