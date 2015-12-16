
 
$(document).ready(function() {

var rounds = 1;
var ties = 0;
var userScore = 0;
var computerScore = 0;
var computerChoice = "The computer has not decided yet.";
var userChoice;

  $("#game-running p").html("Game is off. Click on red button to turn the game on.");
      // $(".image").on("click", function(){
      //   $(".image").off("click");
    
  $("#toggleBtn").on("click", function() {
    if($(this).attr("data-status") === "on") {
        $('.image').removeClass("hidden");
        // $('.image').addClass("slideUp");
        $("#game-running p").html("GAME IS ON");
        $(this)
          .html("ON")//GREEN the text in the parentheses 
          //after .html refers to the text in the button itself
          .addClass("btn-success")
          .removeClass("btn-danger")
          .attr("data-status", "off");
    } else {
      // $(".image").click(function(){
      //   $.unbind();
      $('.image').addClass("hidden");
      $("#game-running p").html("Game is off");
      $(this)
        .html("OFF")//RED
        .addClass("btn-danger")
        .removeClass("btn-success")
        .attr("data-status", "on")
        .removeClass("bigEntrance");
      $('#rounds').html("Round number: " + rounds);
      $('#ties').html("Ties: " + ties);
      $('#userScore').html("Your score: " + userScore);
      $('#computerScore').html("Computer score: " +computerScore);
      $('#computerChoice').html("Computer choice: " + computerChoice);

      // $(".image").on("click", function(){
      //   $(".image").off("click");
    }

  });
});
        // $(".image").on("click", function(){
        // $ (".image").off("click");
 //        });
 //      }
 //    });
 // });     
        // $("img").removeClass("hidden");



     
 

  //     $("#game-running p").html("GAME IS ON");
  //     $(this)
  //       .html("GREEN")//the text in the parentheses 
  //       //after .html refers to the text in the button itself
  //       .addClass("btn-success")
  //       .removeClass("btn-danger")
  //       .attr("data-status", "off");
  //     // $(".btn-warning").off();

  //   } else {
  //     // $(".image").click(function(){
  //     //   $.unbind();
  //     $("#game-running p").html("Game is off");
  //     $(this)
  //       .html("RED")
  //       .addClass("btn-danger")
  //       .removeClass("btn-success")
  //       .attr("data-status", "on")
  //       .removeClass("bigEntrance");
  //     // $(".image").on("click", function(){
  //     //   $(".image").off("click");
  //     }
  //       // $('.image').off("click");

    
  //     // bindControls();
  //     // enableAnimation();
    
  // });

  // function bindControls() {
  //   $(".btn-warning").on("click", function() {
  //     alert("I AM HERE");
  //   });
  // }

  // function enableAnimation() {
  //   $(".btn-warning").on("mouseenter", function() {
  //     $(this).toggleClass("slideLeft");
  //   }).on("mouseleave", function() {
  //     $(this).toggleClass("slideRight");
  //   });
  // }

  // bindControls();
  // enableAnimation();
//});