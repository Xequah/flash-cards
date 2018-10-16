$(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
    $(".textcolor").removeClass();
    $(".textcolor").addClass(".textcolor");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });

});
