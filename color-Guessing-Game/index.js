const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');

const colorBoxes = document.querySelectorAll('.color-box');
console.log(colorBoxes);

const newRoundBtn = document.querySelector('#newRoundBtn');

const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const resetStreakBtn = document.querySelector('#resetStreakBtn');
const newGame = document.querySelector('.newgame');
const attemptDisplay = document.querySelector('.attempt');

// variables

var currentStreak = 0; //user-> track
//previous data store -> fetch
var bestStreakEasy = 0;
var bestStreakHard = 0;
var bestStreak = 0; // current displayed best based on mode
var currentMode = "hard"; // default
var pickCorrectColor = 0; //-> random color
var color = []; // -> empty array -> 6 - color index - by - index
var num = 6; // -> loop control
var maxAtempt = 3;
var heart = [' ', '❤️', '❤️❤️', '❤️❤️❤️'];
var attemptLeft = maxAtempt;

// Funtion to call other funtions together which needed to call again and again
function webLoad() {
  onLoad();
  // ensure default attempts for initial load
  maxAtempt = 3;
  setGame();
  displayContent();
}

// Step 1.  Whenever the website will load then first it will load the entire data...
function onLoad() {
  bestStreakEasy = parseInt(localStorage.getItem("bestStreakEasy")) || 0;    // -> here the localsotrage contains the data so it will return that data
  bestStreakHard = parseInt(localStorage.getItem("bestStreakHard")) || 0;    //--> if there is no data in the localstorage then it will return null so we will assign 0 to bestStreak

  // load initial bestStreak based on mode
  if (currentMode === "easy") {
    bestStreak = bestStreakEasy;
  } else {
    bestStreak = bestStreakHard;
  }
}

function updateModeButtons(mode) {
  if (mode === "easy") {
    easyBtn.style.backgroundColor = "green";
    hardBtn.style.backgroundColor = "";
  } else {
    hardBtn.style.backgroundColor = "green";
    easyBtn.style.backgroundColor = "";
  }
}

function handleCorrectGuess() {
  // Apply border to ALL color boxes
  colorBoxes.forEach(box => {   
    box.style.border = "2px solid yellow";     //1. Correct Color Glows When Clicked
    if (currentStreak === 3) {                //2. "Streak!" Message When Streak ≥ 3
      messageDisplay.textContent = "❤️‍🔥Streak!"
    }
  });
  if (currentStreak === 1) {                  //4. Show "First Win!" on First Correct Answer
    messageDisplay.textContent = "First Win!🎶"
  }

}

//displaying the attempt no. 
function attemptHearts() {
  attemptDisplay.textContent = heart[maxAtempt];
}

// here we will define the display content message in a function format..
function displayContent() {
  currentStreakDisplay.textContent = currentStreak;
  bestStreakDisplay.textContent = bestStreak;
  attemptHearts();
}

// random color generate
function colorGenerate() {
  var a = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var c = Math.floor(Math.random() * 256);
  return `rgb(${a}, ${b}, ${c})`;
}

// generate array of colors 
function generateColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(colorGenerate());
  }
  return arr;
}

// pick random color from array
function pickGenerate() {
  const index = Math.floor(Math.random() * color.length);
  return color[index];
}

// set game function
function setGame() {
  color = generateColors(num);
  pickCorrectColor = pickGenerate();
  console.log(pickCorrectColor);
  console.log(color);

  colorDisplay.textContent = pickCorrectColor;

  for (var i = 0; i < colorBoxes.length; i++) {
    // If we have fewer colors than boxes, hide the extras; otherwise set background
    if (i < color.length) {
      colorBoxes[i].style.display = ""; // show
      colorBoxes[i].style.backgroundColor = color[i];
      colorBoxes[i].style.pointerEvents = "auto";
      colorBoxes[i].style.border = "none"; // clear previous border
    } else {
      colorBoxes[i].style.display = "none"; // hide extra boxes for easy mode
      colorBoxes[i].style.pointerEvents = "none";
    }
  }

  // DO NOT increase attempts on newRound — keep attempts as-is for the mode.
  // When switching modes we explicitly reset maxAtempt
  attemptHearts();
}

webLoad();

function winGuess(event) {

  var tempBox = event.target;

  if (pickCorrectColor === tempBox.style.backgroundColor) {

    messageDisplay.textContent = "You won";

    currentStreak++;


    handleCorrectGuess();

    // increase hearts only in hard mode
    if (currentMode === "hard") {
      maxAtempt++;
      if (maxAtempt > 3) maxAtempt = 3;
    }
    // easy mode: do NOT increase hearts

    attemptDisplay.textContent = heart[maxAtempt];

    if (currentStreak > bestStreak) {
      bestStreak = currentStreak;
      colorDisplay.style.fontWeight = 'bold'   //5. Header Text Becomes Bold on New Best Streak

      if (currentMode === "easy") {
        bestStreakEasy = bestStreak;
        localStorage.setItem('bestStreakEasy', bestStreakEasy);
      } else {
        bestStreakHard = bestStreak;
        localStorage.setItem('bestStreakHard', bestStreakHard);
      }
    }

    displayContent();
  }

  else {

    messageDisplay.textContent = "Try again";


    if (maxAtempt > 0) {
      maxAtempt--;
      attemptDisplay.textContent = heart[maxAtempt];

      tempBox.classList.add("shake");                //6. Wrong Box Shakes When Clicked
      setTimeout(() => {
        tempBox.classList.remove("shake");
      }, 400);
      if (maxAtempt == 0) {

        colorBoxes.forEach((box) => {
          box.style.pointerEvents = "none";
          box.style.backgroundColor = "#232323";
          box.style.border = "none";
        });
        messageDisplay.textContent = "You Lost";
        currentStreak = 0;
      }
    }

    tempBox.style.backgroundColor = "#232323";
    tempBox.style.pointerEvents = "none";

    displayContent();
  }
}

colorBoxes.forEach((box) => {
  console.log(box);
  box.addEventListener('click', winGuess);
})

function resetStreak() {
  // clear both stored bests and reset displays
  bestStreakEasy = 0;
  bestStreakHard = 0;
  currentStreak = 0;
  localStorage.removeItem('bestStreakEasy');
  localStorage.removeItem('bestStreakHard');


  // reset displayed best according to current mode
  if (currentMode === "easy") bestStreak = bestStreakEasy;
  else bestStreak = bestStreakHard;

  webLoad();
}

function newRound() {
  messageDisplay.textContent = "Next Round";
  // newRound should NOT increase hearts — setGame will set up the colors only
  setGame();
  colorBoxes.forEach((box) => {
    box.style.pointerEvents = "auto";
    // ensure hidden boxes remain hidden for easy mode
    if (currentMode === "easy") {
      // hide boxes beyond num (3)
      for (var i = 3; i < colorBoxes.length; i++) {
        colorBoxes[i].style.display = "none";
        colorBoxes[i].style.pointerEvents = "none";
      }
    } else {
      // show all in hard mode
      for (var i = 0; i < colorBoxes.length; i++) {
        colorBoxes[i].style.display = "";
      }
    }
  });
  if (maxAtempt == 0) {
    newRoundBtn.style.disable = true
  }
}

newRoundBtn.addEventListener('click', newRound);
resetStreakBtn.addEventListener('click', resetStreak);

// mode buttons: set currentMode, reset attempts for the mode, and refresh UI

easyBtn.addEventListener("click", function () {
  num = 3;                     // easy mode -> 3 boxes
  currentMode = "easy";
  // reset attempts to default for easy mode and load its best
  maxAtempt = 3;
  bestStreak = bestStreakEasy;
  updateModeButtons("easy");   // 3. Easy Mode Button Turns Green When Selected
  // hide extra boxes immediately
  for (var i = 3; i < colorBoxes.length; i++) {
    colorBoxes[i].style.display = "none";
    colorBoxes[i].style.pointerEvents = "none";
  }
  newRound();                  // start new round
});


hardBtn.addEventListener("click", function () {
  num = 6;                     // hard mode -> 6 boxes
  currentMode = "hard";
  // reset attempts to default for hard mode and load its best
  maxAtempt = 3;
  bestStreak = bestStreakHard;
  updateModeButtons("hard");   // turn hard button green
  // show all boxes
  for (var i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].style.display = "";
    colorBoxes[i].style.pointerEvents = "auto";
  }
  newRound();                  // start new round
});

