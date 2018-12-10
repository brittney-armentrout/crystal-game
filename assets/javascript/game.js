//declare global variables

OnStart:
//generate random number between 19 and 120 display on screen 
//assign random value to each crystal
//Player score needs to be set to zero

Play:
//Click events that accumulate score and display on screen
//if.else for comparing player score to target score
//win - alert user and update win score, display on screen
//loss - alert user and update loss score, display on screen

Reset: 
//clear target score and player score


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
var gameWinner = false;
var isPlayerLower = false;


// Create variables that hold references to the places in the HTML where we want to display things
$("#wins-text").text(wins);
$("#losses-text").text(losses);
var $targetScoreText = $("#target-score-text");
$("#player-score-text").text(playerScore);

$(document).ready(function() {

function startGame() {
    generateRandomCrystalValues();
    generateRandomTargetScore();


}
    
function generateRandomTargetScore () {
    targetScore = Math.round((Math.random() * 101) + 19);
    $("#target-score-text").text(targetScore);
}

function generateRandomCrystalValues() {
    for (var i = 0; i < crystals.length; i++) {
        crstyals[i].value = Math.round(Math.random() * 11) + 1;
    }
}

for (var i = 0; i < crystals.length; i++) {
    $(crystals[i].id).on('click', function () {
        console.log('clicked on crystal', this);
    });
}

function gamePlay() {
    $("img").click(function(){
        
    });
}

function resetGame() {

}

startGame();