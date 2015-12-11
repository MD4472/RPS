$(document).ready(function(){


// var array=["rock", "paper", "scissors"];
// // var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
//     computerChoice = array[0];
// } else if(computerChoice <= 0.67) {
//     computerChoice = array[1];
// } else {
//     computerChoice = array[2];
// } 
//     console.log(computerChoice);
// $('computerChoice').html("Computer: " + computerChoice);


// $.each([ 52, 97 ], function( index, value ) {
//   console.log( index + ": " + value );
// });

    var rounds = 1;
    var yourWins = 0;
    var computerWins = 0;

    $('#rounds').html(rounds);
    $('#yourWins').html(yourWins);
    $('#computerWins').html(computerWins);

    $('#roundUp').on('click', function(){
        rounds++;
        $('#rounds').html(rounds);
    });

    $('#yourWinsUp').on('click', function(){
        yourWins++;
        $('#yourWins').html(yourWins);
    });

    $('#computerWinsUp').on('click', function(){
        computerWins++;
        $('#computerWins').html(computerWins);
    });

    $('#everythingGoesDown').on('click',function(){
        rounds--;
        yourWins--;
        computerWins--;
        $('#rounds').html(rounds);
        $('#yourWins').html(yourWins);
        $('#computerWins').html(computerWins);
        //console.log($('p'));
        // $('p').each(function() {
        //     $('p')--.html();
        // });
    });
});