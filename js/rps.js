$(document).ready(function(){
// alert("hi");

var rounds = 1;
var userScore = 0;
var computerScore = 0;
var computerChoice = "The computer hasn't chosen yet";

$('#rounds').html("Rounds: " + rounds);
$('#userScore').html("Your score: " + userScore);
$('#computerScore').html("Computer score: " +computerScore);


var array = ["rock","paper","scissors"];
var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = array[0];
} else if(computerChoice <= 0.67) {
  computerChoice = array[1];
} else {
  computerChoice = array[2];
} 

$('#computerChoice').html("Computer choice: " + computerChoice);



var userChoice;
 $('img').on('click', function(){
    // alert("hi");
        $(this)
        .addClass('bigEntrance')
        .addClass('addBorder');
        // .removeClass('bigEntrance');
    userChoice = $(this).attr('id');

    console.log(userChoice);

    // compare(userChoice,computerChoice);
    // $('your_score').html("Your Score" + userScore);
    //     $(this).removeClass('expandOpen');
    });




// // var choice1 = userChoice;
// // var choice2 = computerChoice;

// var compare = function (userChoice, computerChoice) 
// {
//     if (userChoice === computerChoice) 
//         {
//             // console.log("");
//             return "The result is a tie!"; 
//         }

// else if(userChoice === "rock") 
//     {

//         if(computerChoice === "scissors") 
//         {   
//             userScore++;
//             return "rock wins";
//         }

//         else 
//         {   
//             computerScore++;
//             return "paper wins";
//         }
//     }

// else if(userChoice === "paper") 
//     {
    
//         if(computerChoice === "rock") 
//         {
//             userScore++;
//             return "paper wins";
//         }
//         else 
//         {
//             computerScore++;
//             return "scissors wins";
//         }
//     }

// else if(userChoice ==="scissors") 
//     {

    
//         if(computerChoice === "rock") 

//         {
//             computerScore++;
//             return "rock wins";
//         }
//         else 
//         {
//             userScore++;
//             return "scissors wins";
//         }    

//     }
    
});

