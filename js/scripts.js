$(document).ready(function () {
  $(".clickable").click(function() {
    $("body").removeClass();
    $(".function-show").fadeToggle('slow');
    $(".function-hide").fadeToggle('slow');

  });

});
