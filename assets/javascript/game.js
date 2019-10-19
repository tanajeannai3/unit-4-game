var crystalValue = Math.floor(Math.random() * 11) + 1;
var crystalValue2 = Math.floor(Math.random() * 11) + 1; 
var crystalValue3 = Math.floor(Math.random() * 11) + 1;
var crystalValue4 = Math.floor(Math.random() * 11) + 1;
var randNum = Math.floor(Math.random() * 101) + 19;
$("#currentNumber").text("Your random number is: " + randNum);
var wins = 0;
$("#wScore").text("Wins: " + wins);
var losses = 0;
$("#lScore").text("Losses: " + losses);
var totalNum = 0;
$("#totalNum").text("Your total number is: " + totalNum);

$(document).ready(function() {

    function resetGame(){
        randNum = Math.floor(Math.random() * 101) + 19;
        $("#currentNumber").text("Your random number is: " + randNum);
        totalNum = 0;        console.log("Crystal 1 value is: " + crystalValue);
        console.log("Crystal 2 value is: " + crystalValue2);
        console.log("Crystal 3 value is: " + crystalValue3);
        console.log("Crystal 4 value is: " + crystalValue4);
        }

    $(".gem1").on("click", function() {
        totalNum += crystalValue;
		$("#totalNum").text("Your total score is: " + totalNum);
        if (totalNum === randNum) {
            winGame();
            console.log("Your total score was: " + totalNum);
            console.log("Your random number was: " + randNum);
          } else if (totalNum > randNum) {
              console.log("Your total score was: " + totalNum);
              console.log("Your random number was: " + randNum);
            loseGame();
          }
    });

    $(".gem2").on("click", function() {
        totalNum += crystalValue2;
		$("#totalNum").text("Your total score is: " + totalNum);
        if (totalNum === randNum) {
            winGame();
            console.log("Your total score was: " + totalNum);
            console.log("Your random number was: " + randNum);
          } else if (totalNum > randNum) {
            console.log("Your total score was: " + totalNum);
            console.log("Your random number was: " + randNum);
            loseGame();
          }
    });

    $(".gem3").on("click", function() {
        totalNum += crystalValue3;
		$("#totalNum").text("Your total score is: " + totalNum);
        if (totalNum === randNum) {
            winGame();
            console.log("Your total score was: " + totalNum);
            console.log("Your random number was: " + randNum);
          } else if (totalNum > randNum) {
            console.log("Your total score was: " + totalNum);
            console.log("Your random number was: " + randNum);
            loseGame();
          }
    });

    $(".gem4").on("click", function() {
        totalNum += crystalValue4;
		$("#totalNum").text("Your total score is: " + totalNum);
        if (totalNum === randNum) {
            winGame();
            console.log("Your total score was: " + totalNum);
            console.log("Your random number was: " + randNum);
          } else if (totalNum > randNum) {
            console.log("Your total score was: " + totalNum);
            console.log("Your random number was: " + randNum);
            loseGame();
          }
    });

    function winGame() {
        alert("Winner!");
        wins++;
        $("#wScore").text("Wins: " + wins);
        resetGame();
      }
    
    function loseGame() {
        alert("You lose!");
        losses++;
        $("#lScore").text("Losses: " + losses);
        resetGame();
      }
});
