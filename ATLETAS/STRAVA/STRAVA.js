$(document).ready(function() {
    $('#vincular').click(function() {
        window.location.href = "https://www.strava.com/oauth/authorize?client_id=132659&response_type=code&redirect_uri=https://app.allinyourmind.es/web/index.php?r=athletesathlete/vincularstrava&atletaID=146&approval_prompt=force&state=146&scope=read,activity:write,activity:read_all";
    });
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