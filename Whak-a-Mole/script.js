//declaring Variables

const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#timeLeft');
const maxScoreDisplay = document.querySelector('#maxScore');
const startBtn = document.querySelector('#startBtn');
const holes = document.querySelectorAll('.hole');
console.log(holes);
const moles = document.querySelectorAll('.mole');
const hitMessage = document.querySelector('#hitMessage');
const hitsBtns = document.querySelector('#hit-counter');


//  Audio elements
const bgMusic = new Audio('https://res.cloudinary.com/dtqsbbz5r/video/upload/v1762769891/Le_madarchod_Pakad_benke_laude_ko_meme_template_CID_9WcihCqTjGM_lmusmi.mp3');
const bonkSound = new Audio('https://res.cloudinary.com/dtqsbbz5r/video/upload/v1762770251/BEHEN_KE_LAUDE_MODI_JI_VOICE_COMEDY_REEL-_AudioTrimmer.com_oubsjs.mp3');
const endSound = new Audio('https://res.cloudinary.com/dtqsbbz5r/video/upload/v1762770509/MAA_CHUD_GAYI_HINDUSTANI_BHAU_BEST_LINES_MAA_CHUD_GAYI720p-_AudioTrimmer.com_vxhla1.mp3');

// Set some defaults
bgMusic.loop = true; // background loops continuously
bgMusic.volume = 0.3; // softer background
bonkSound.volume = 0.8;
endSound.volume = 0.7;

// Required variable
var score = 0;
var time = 30;
var bestScore = 0;
var hits = 0;
var playGame = false;     //To give signal to user to start the game
var gameId = null;


function webLoad() {
  onLoad();
  displayContent();
}


//Step-2.  1.phase load the entire data

function onLoad() {
  var temp = localStorage.getItem('highScoreGame'); // consistent key
  if (temp != null) {
    bestScore = parseInt(temp);
  }
  else {
    bestScore = 0;
  }
}

//Step-2 2. Reflecting the actual value in the required html element using textContent

function displayContent() {
  scoreDisplay.textContent = score;
  timeLeftDisplay.textContent = time;
  maxScoreDisplay.textContent = bestScore;
}

//Calling webload function here

webLoad();

//Random time generator implementation
function randomTimeGenerator(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//Random Index function here
function randomIndex() {
  var index = Math.floor(Math.random() * holes.length);
  return holes[index];
}

//pop game implementation for image appear and disappear purpose
function popImageGame() {
  if (!playGame) return; // stop recursion when game is over

  // Mole speed increases when time < 10
  let minTime = 500;
  let maxTime = 1500;

  if (time < 10) {
    minTime = 300;   // faster pop-in
    maxTime = 900;   // faster pop-out
  }

  var randomTime = randomTimeGenerator(minTime, maxTime);
  var hole = randomIndex();
  var mole = hole.querySelector('.mole');

  mole.classList.add('up');

  setTimeout(function () {
    mole.classList.remove('up');
    popImageGame();
  }, randomTime);
}


//Endgame implementation
function endGame() {
  playGame = false;
  clearInterval(gameId);
  bgMusic.pause(); // 
  bgMusic.currentTime = 0;
  endSound.play(); // 

  if (score > bestScore) {
    bestScore = score;
    localStorage.setItem('highScoreGame', bestScore);
    alert(`Your score is higher than previous one: ${score}`);
  }
  else {
    alert(`Your score is: ${score}`);
  }

  score = 0;
  displayContent();

  //  CHANGE BUTTON TEXT TO "Play Again"
  startBtn.innerText = "Play Again";    //3. Start Button Says "Play Again"

  startBtn.disabled = false;
}

//ACTUAL IMPLEMENTATION OF START GAME FUNCTION
function startGame() {
  startBtn.innerText = "Start Game";  // reset label
  score = 0;
  time = 30;
  playGame = true;
  startBtn.disabled = true;
  scoreDisplay.style.color="white";

  bgMusic.play(); // start background music
  popImageGame();

  //disabled -> true which means button is disabled...
  gameId = setInterval(function () {
    time--;
    if (time <= 0) {
      clearInterval(gameId);
      endGame(); // call endGame when time is up
    }
    displayContent();
  }, 1000);
}

// Bonk (hit mole) implementation
function bonk(event) {
  if (playGame == false) return;
  if (event.target.classList.contains('up')) {
    score = score + 40;

    // GOLD WHEN > 50, OTHERWISE NORMAL COLOR
    if (score > 50) {
      scoreDisplay.style.color = "gold";  // 1. Score Turns Gold When > 50
    } else {
      scoreDisplay.style.color = "white";
    }

    //SHOW "Whack!" MESSAGE
    hitMessage.textContent = "Whack!";   //2. "Whack!" Message on Hit
    hitMessage.style.opacity = 1;

    setTimeout(() => {
      hitMessage.style.opacity = 0;
    }, 300);

    bonkSound.currentTime = 0; //  restart sound if clicked fast
    bonkSound.play(); //  play bonk sound
    event.target.classList.remove('up');
    event.target.classList.add('bonked');
  }
  setTimeout(function () {
    event.target.classList.remove('bonked');
  }, 300);
  displayContent();
}


//ADD EVENT LISTENER PART:

startBtn.addEventListener('click', startGame);

moles.forEach((box) => {
  box.addEventListener('click', bonk);
});
