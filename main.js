//all the requirerd variables
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var score = document.getElementById("score");
var high_Score = document.getElementById("highScore");
var jumping = 0;
var counter = 0;
var lastScore;
var highScore = 0;
var preScore = 0;

alert("Welcome to Flappy Donald (Click to start)")

//making random whole in the game
hole.addEventListener('animationiteration', () => {
  var random = -((Math.random() * 300) + 150);
  hole.style.top = random + "px";


});
//fall the ball every 10 millisecond
setInterval(function() {
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  counter++;
  points = counter - 1;
  //print the score every 10ms
  score.innerHTML = points;


  lastScore = points;

  if (lastScore >= highScore) {
    highScore = lastScore;
  }

  //only change the position of the ball if the jump function is called
  if (jumping == 0) {
    character.style.top = (characterTop + 3) + "px";
  }

  //decisions for game over
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
  var cTop = -(500 - characterTop);
  if ((characterTop > 455) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
    alert("Good game! Your score is " + (points - 1));
    //print the high score
    high_Score.innerHTML = highScore - 1;


    //alert("characterTop= "+characterTop+" blockLeft= "+blockLeft+" holeTop= "+holeTop+" cTop= "+cTop);
    character.style.top = 100 + "px";
    counter = 0;


  }
}, 15);

//when html is clicked perform the jump
function jump() {
  jumping = 1;
  let jumpCount = 0;
  var jumpInterval = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if ((characterTop > 6) && (jumpCount < 15)) {
      character.style.top = (characterTop - 5) + "px";
    }
    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
    }
    jumpCount++;
  }, 10);
};
