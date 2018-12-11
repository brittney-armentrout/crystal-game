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
var crystals = [
    {
        id: "#crystal1",
        value: 0
    },

    {
        id: "#crystal2",
        value: 0

    },

    {
        id: "#crystal3",
        value: 0
    },

    {
        id: "#crystal4",
        value: 0
    }

];


var wins = 0;
var losses = 0;


//Declaring variables that hold references to the places in the HTML where we want to display things

$("#wins-text").text(wins);
$("#losses-text").text(losses);
$("#target-score-text").text(targetScore);
$("#player-score-text").text(playerScore);


$(document).ready(function () {

            $('#start-button').click(function () {
                generateRandomTargetScore();
                generateRandomCrystalValues();
            });


            function generateRandomTargetScore() {
                targetScore = Math.round((Math.random() * 101) + 19);
                $("#target-score-text").text(targetScore);

            }



            function generateRandomCrystalValues() {
                for (var i = 0; i < crystals.length; i++) {
                    crstyals[i].value = Math.round(Math.random() * 11) + 1;

                }

            }


            $('#reset-button').click(function (fullReset) {
                targetScore = 0;
                $("#target-score-text").text(TargetScore);
                playerScore = 0;
                $("#player-score-text").text(playerScore);

                startGame()

                if (fullReset);
                wins = 0;
                $("#wins-text").text(wins);
                losses = 0;
                $("#losses-text").text(losses);

            });



            function winner() {
                alert("Winner! Winner!");
                wins++;
                $("#wins-text").text(wins);
                resetGame();
            }



            function loser() {
                alert("Sad Day! Please try again!");
                losses++;
                $("#losses-text").text(losses);
                resetGame();

            }



            for (var i = 0; i < crystals.length; i++) {
                $(crystals[i].id).on('click', function () {
                        console.log('clicked on crystal', this);

                        playerScore = playerScore + crystals[i].id
                        $("#player-score-text").text(playerScore);



                        if (playerScore === targetScore) {
                            winner();
                        } else if (playerScore > targetScore) {
                            loser();
                        }

                        startGame();


                }

                )}
                
            });