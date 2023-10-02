$(function () {
    $('#Store').hide()
    $('#Registro').hide()
    $('#Contacto').hide()
    $('#Index .home').on('click',function (event) {
        $('#Index').show();
        $('#Store').hide();
        $('#Registro').hide();
        $('#Contacto').hide();
    })
    $('#Index .tienda').on('click',function (event) {
        $('#Index').hide();
        $('#Store').show();
        $('#Registro').hide();
        $('#Contacto').hide();
    })
    $('#Index .register').on('click',function (event) {
        $('#Index').hide();
        $('#Store').hide();
        $('#Registro').show();
        $('#Contacto').hide();
    })
    $('#Index .contact').on('click',function (event) {
        $('#Index').hide();
        $('#Store').hide();
        $('#Registro').hide();
        $('#Contacto').show();
    })
    $('#Store .home').on('click',function (event) {
        $('#Index').show();
        $('#Store').hide();
        $('#Registro').hide();
        $('#Contacto').hide();
    })
    $('#Store .tienda').on('click',function (event) {
        $('#Index').hide();
        $('#Store').show();
        $('#Registro').hide();
        $('#Contacto').hide();
    })
    $('#Store .register').on('click',function (event) {
        $('#Index').hide();
        $('#Store').hide();
        $('#Registro').show();
        $('#Contacto').hide();
    })
    $('#Store .contact').on('click',function (event) {
        $('#Index').hide();
        $('#Store').hide();
        $('#Registro').hide();
        $('#Contacto').show();
    })
    $('#Registro .home').on('click',function (event) {
        $('#Index').show();
        $('#Store').hide();
        $('#Registro').hide();
        $('#Contacto').hide();
    })
    $('#Registro .tienda').on('click',function (event) {
        $('#Index').hide();
        $('#Store').show();
        $('#Registro').hide();
        $('#Contacto').hide();
    })
    $('#Registro .register').on('click',function (event) {
        $('#Index').hide();
        $('#Store').hide();
        $('#Registro').show();
        $('#Contacto').hide();
    })
    $('#Registro .contact').on('click',function (event) {
        $('#Index').hide();
        $('#Store').hide();
        $('#Registro').hide();
        $('#Contacto').show();
    })
    $('#Contacto .home').on('click',function (event) {
        $('#Index').show();
        $('#Store').hide();
        $('#Registro').hide();
        $('#Contacto').hide();
    })
    $('#Contacto .tienda').on('click',function (event) {
        $('#Index').hide();
        $('#Store').show();
        $('#Registro').hide();
        $('#Contacto').hide();
    })
    $('#Contacto .register').on('click',function (event) {
        $('#Index').hide();
        $('#Store').hide();
        $('#Registro').show();
        $('#Contacto').hide();
    })
    $('#Contacto .contact').on('click',function (event) {
        $('#Index').hide();
        $('#Store').hide();
        $('#Registro').hide();
        $('#Contacto').show();
    })
})