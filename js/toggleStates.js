
$(document).ready(function() {
  $("#toggleBtn").on("click", function() {
    if($(this).attr("data-status") === "on") {
      $("#game-running p").html("Game is running");
      $(this)
        .html("GAME OFF")
        .addClass("btn-success")
        .removeClass("btn-danger")
        .attr("data-status", "off");
      $(".btn-warning").off();

    } else {
      $("#game-running p").empty();
      $(this)
        .html("GAME ON")
        .addClass("btn-danger")
        .removeClass("btn-success")
        .attr("data-status", "on");
      bindControls();
      enableAnimation();
    }
  });

  function bindControls() {
    $(".btn-warning").on("click", function() {
      alert("I AM HERE");
    });
  }

  function enableAnimation() {
    $(".btn-warning").on("mouseenter", function() {
      $(this).toggleClass("slideLeft");
    }).on("mouseleave", function() {
      $(this).toggleClass("slideRight");
    });
  }

  bindControls();
  enableAnimation();
});