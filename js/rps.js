$(document).ready(function(){
// // alert("hi");
 if game === on {

var rounds = 1;
var ties = 0;
var userScore = 0;
var computerScore = 0;
var computerChoice = "The computer has not decided yet.";
var userChoice;
// var imgPaper = "http://images.freeimages.com/images/premium/large-thumbs/5011/50114248-cartoon-toilet-roll.jpg"


    


$('#rounds').html("Round number: " + rounds);
$('#ties').html("Ties: " + ties);
$('#userScore').html("Your score: " + userScore);
$('#computerScore').html("Computer score: " +computerScore);
$('#computerChoice').html("Computer choice: " + computerChoice);

// -----------------------------------------------------------
// Function for computer to generate rock, paper, or scissors.
// -----------------------------------------------------------

function comp_rps(){
    var array = ["rock","paper","scissors"];
        computerChoice = Math.random();
        if (computerChoice < 0.34) 
            {computerChoice = array[0];
            } 
        else if(computerChoice <= 0.67) 
            {computerChoice = array[1];
            } 
        else 
            {computerChoice = array[2];
            } 
    $('#computerChoice').html("Computer choice: " + computerChoice);
        console.log("Computer's choice:" + computerChoice);
}

// ----------------------------------------------------------------------
// Function that compares the player's choice with the computer's choice.
// ----------------------------------------------------------------------

function compare(userChoice, computerChoice) 
{   
    rounds++;

    if (userChoice === computerChoice) 
        {   ties++;

            // $('#modalheadingaboveicons').html("You both chose the same thing.  We have a tie!");
            // $('#Modal').modal('show');
            return ("The result is a tie!");

        } 

    else if(userChoice === "rock") 
        {
            if(computerChoice === "scissors") 
            {   userScore++;
                return ("rock wins");
            }
            else 
            {   computerScore++;
                return ("paper wins");
            }
        }

    else if(userChoice === "paper") 
        {
            if(computerChoice === "rock") 
            {   userScore++;
                return ("paper wins");
            }
            else 
            {   computerScore++;
                return ("scissors wins");
            }
        }

    else if(userChoice ==="scissors") 
        {
            if(computerChoice === "rock") 
            {   computerScore++;
                return ("rock wins");
            }
            else 
            {   userScore++;
                return ("scissors wins");
            }    

        }
            
}


if (rounds >= 7){
//create modal and suspend activity
//reset, etc.

}

    $('.image').on('click', function(){
        $(this).addClass('bigEntrance');
            setTimeout(function() {
                $(this).removeClass('bigEntrance');
            }.bind(this), 500);
        // 'this' on line 93 affects the window(browser), which represents the
        // global scope.
        // 'this' on line 95 will bind to the 'this' of the scope of the 
        // on click action. 
        userChoice = $(this).attr('id');
        //console.log("User's Choice:" + userChoice);
        comp_rps();
        // console.log("Computer's Choice:" +computerChoice);
        compare(userChoice,computerChoice);

    // if (userChoice === computerChoice)
    //     {
    //         $('#modalTie').modal('show');
            
    //     }
    
    if (computerChoice === "rock" && userChoice === "rock") 
            // && userChoice === "paper")
        {   
            $('#rockTieModal').modal('show');
        }
    else if(computerChoice === "paper" && userChoice === "paper") 
        {
            $('#paperTieModal').modal('show');
        }
    else if(computerChoice === "scissors" && userChoice === "scissors") 
        {
            $('#scissorsTieModal').modal('show');
        }
    else if(computerChoice === "paper" && userChoice === "rock")
        {
            $('#CwinPaperRock').modal('show');
        }  
    else if(computerChoice === "rock" && userChoice === "paper")
        {
            $('#UwinPaperRock').modal('show');
        }
    else if(computerChoice === "rock" && userChoice === "scissors")
        {
            $('#CwinScissorsRock').modal('show');  
        } 
    else if(computerChoice === "scissors" && userChoice === "rock")
        {
            $('#UwinScissorsRock').modal('show');

        } 
    else if(computerChoice === "scissors" && userChoice === "paper")
        {
            $('#CwinPaperScissors').modal('show');
              
        }
    else if(computerChoice === "paper" && userChoice === "scissors")
        {          
            $('#UwinPaperScissors').modal('show');
        
        }

          

    // else{
    //         $('#UwinpPaperScissors').modal('show');
    //     }
                        
        //               
        // ----------------------------------------------
        // modals go here --- open modal and display info
        // ----------------------------------------------

        // $("#twitter").on("click", function(){
        //   $('#modalTwitter').modal('show');
        // });



    $('#userScore').html("Your score is: " + userScore);
    $('#computerScore').html("The computer's score is: " + computerScore);
    $('#rounds').html("Round number: " + rounds);
    $('#ties').html("Ties: " + ties);

    // $('#')
    // $('your_score').html("Your Score" + userScore);
    //     $(this).removeClass('expandOpen');
    
});

// } else {
//Let player know that the game is off
//};





// compare(userChoice,computerChoice);
// console.log("User score:" + userScore);
// console.log("Computer score:" +computerScore);


});
