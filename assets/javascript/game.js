//PSEUDO CODE

//Declare Global Variables

//Start:
//generate random number between 19 and 120, display on screen
//assign random value to each crystal
//Player score needs to be set to zero

//Play:
//Click events that accumulate score and display on screen
//if.else for comparing player score to target score
//win - alert user and update win score, display on screen
//loss - alert user and update loss score, display on screen

//Reset:
//clear target score and player score
//full reset to clear wins/loss count


//Global Variables
var targetScore = 0;
var playerScore = 0;
var crystal1 = 0;
var crystal2 = 0
var crystal3 = 0
var crystal4 = 0
var wins = 0;
var losses = 0;


//To copy paste into functions
$("#wins-text").text(wins);
$("#losses-text").text(losses);
$("#target-score-text").text(targetScore);
$("#player-score-text").text(playerScore);


$(document).ready(function () {
    generateRandomTargetScore();
    generateRandomCrystalValues();

            $('#start-button').click(function () {
                generateRandomTargetScore();
                generateRandomCrystalValues();
                playerScore = 0;
                $("#player-score-text").text(playerScore);
 
            });


            function generateRandomTargetScore() {
                targetScore = Math.round((Math.random() * 101) + 19);
                $("#target-score-text").text(targetScore);

            }

            function generateRandomCrystalValues() {
                crystal1 = Math.round((Math.random() * 11) +1);
                console.log("crystal1 is ", crystal1);
                crystal2 = Math.round((Math.random() * 11) +1), !crystal1;
                console.log("crystal2 is ", crystal2);
                crystal3 = Math.round((Math.random() * 11) +1), !crystal1, !crystal2;
                console.log("crystal3 is ", crystal3);
                crystal4 = Math.round((Math.random() * 11) +1), !crystal1, !crystal2, !crystal3;
                console.log("crystal4 is ", crystal4);
            }


            $('#reset-button').click(function () {
                generateRandomTargetScore();
                playerScore = 0;
                $("#player-score-text").text(playerScore);
                wins = 0;
                $("#wins-text").text(wins);
                losses = 0;
                $("#losses-text").text(losses);

            });



            function winner() {
                alert("Winner! Winner!");
                //AUDIO
                wins++;
                $("#wins-text").text(wins);
            }


            function loser() {
                alert("Sad Day! Please try again!");
                //AUDIO
                losses++;
                $("#losses-text").text(losses);

            }

            $("#crystal1").on("click", function () {
                playerScore += crystal1;
                $("#player-score-text").text(playerScore);
                if (playerScore === targetScore) {
                    winner();
                } else if (playerScore > targetScore) {
                    loser();


                }

            });

            $("#crystal2").on("click", function () {
                playerScore += crystal2;
                $("#player-score-text").text(playerScore);
                if (playerScore === targetScore) {
                    winner();
                } else if (playerScore > targetScore) {
                    loser();
    
                    }

                });

            $("#crystal3").on("click", function () {
                playerScore += crystal3;
                $("#player-score-text").text(playerScore);
                if (playerScore === targetScore) {
                    winner();
                } else if (playerScore > targetScore) {
                    loser();
        
                    }
    
                });
                
            $("#crystal4").on("click", function () {
                playerScore += crystal4;
                $("#player-score-text").text(playerScore);
                if (playerScore === targetScore) {
                    winner();
                } else if (playerScore > targetScore) {
                    loser();
            
                    }
        
                });
                
                
            });