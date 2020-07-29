$(document).ready(function () {

    //NavBar activo

    $('#inicio').addClass('active');

    $('#inicio').click(function () {
        limpiarActive();
        $('#inicio').addClass('active');
    })

    $('#graficas').click(function () {
        limpiarActive();
        $('#graficas').addClass('active');
    })

    function limpiarActive() {
        $('.nav-item').removeClass('active');

    }

})