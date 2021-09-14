$(function () {

  $('[data-toggle="tooltip"]').tooltip();


  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente");
  });

  $("h3[id='ingredientes']").on("dblclick", function () {
    $(this).css("color", "#DC3545");
  });

  $("h3[id='preparacion']").on("dblclick", function () {
    $(this).css("color", "#DC3545");
  });

  $(".card-title").click(function () {
    $('.card-text').toggle();
  });

});
