var player = prompt ("Enter your name: ");
console.log(player)

// Six element:

var currentScore = document.querySelector('#currentScore');
var highScore = document.querySelector('#highScore');
var clickButton = document.querySelector('#clickButton');
var timer = document.querySelector('#timer');
var startButton = document.querySelector('#startButton');
var statusMessage = document.querySelector('#statusMessage');
var resetButton = document.querySelector('#resetButton');
var pauseButton = document.querySelector('#pauseButton');
var resumeButton = document.querySelector('#resumeButton');
var video = document.querySelector('#video');

//  Extra variables required:  total:5

var current = 0;
var high = 0;
var timer1 = 10;
var flag = false;
var timeId = null;

function onWebsite() {
    loadData();
    displayContent();
}

function loadData() {
    var temp = localStorage.getItem('highScore');
    if (temp != null) {
        high = temp;
    }
    else {
        high = 0;
    }

}

function updateDisplay (){
    currentScore.style.color="red"
}

function displayContent() {
    currentScore.textContent = current;
    highScore.textContent = high;
    timer.textContent = timer1;
}

function statusMsg(msg) {
    statusMessage.textContent = msg;
}

let currentScale = 1

function handleClick() {
    if (currentScale < 2) {
        currentScale += 0.1;                     
        clickButton.style.transform = `scale(${currentScale})`;
    }
}


function endGame() {
    flag = false;
    startButton.textContent="Play Again"  //5. Start Button Says "Play Again" After Game
    clickButton.disabled = true;
    startButton.disabled = false;
    clearInterval(timeId);
    currentScale = 1;
//    handleClick()
    if (current > high) {
        high = current;
        localStorage.setItem('highScore', high);
        statusMsg("Game Over! New High Score: " + high);  
               // Show video after 2 seconds
        setTimeout(() => {
            video.style.display = "block";

            //Hide again after 1 second (flash effect)
            setTimeout(() => {
                video.style.display = "none";   //6. Confetti on New High Score
            }, 1000);

        }, 2000);

     

         statusMsg(`${player} got new high score & Won`);
    }
    else{
        statusMsg(`${player} Loose, score ${current} points`)
    }
  alert(`You clicked ${Math.floor(current / 10)} times per second!`)   //4. Show Clicks Per Second (CPS)
    
}

function startGame() {
    video.style.display ="none"
    currentScale = 1;
    currentScore.style.color ="white"
    clickButton.disabled = false;
    startButton.disabled = true;
    pauseButton.disabled = false;
    current=0
    flag = true;
    timer1 = 10;
    statusMsg(`${player} The game is started! Click as fast as you can.`);   //2. "Click Me!" Message Flashes on Start
    timeId = setInterval(function () {
        timer1--;
        if (timer1 <= 0) {
            endGame();
        }
        displayContent()
    }, 1000)
    handleClick()
}

function resetGame() {
    current = 0;
    timer1 = 10;
    high = 0;
    flag = false;
    currentScore.style.color="white"
    startButton.textContent="Start Game"
    clickButton.style.transform ="scale(1)";
    clickButton.disabled = true;
    clearInterval(timeId);
    statusMsg("Game Reset! Click Start to Play Again.");
    displayContent();
    startButton.disabled = false;
    pauseButton.disabled = true;
    video.style.display = "none";
}

function pauseGame() {
    pauseButton.style.width = "50%"
    resumeButton.style.display = "block";
    resumeButton.disabled = false;
    startButton.disabled = true;
    clickButton.disabled = true;
    flag = false;
    statusMsg("Game Paused! Click Resume to Continue.");
    clearInterval(timeId);

}
function resumeGame() {
        resumeButton.style.display = "none";
        pauseButton.disabled = true;
        clickButton.disabled = false;
        resetButton.disabled = false;
        pauseButton.style.width = "100%";
        flag = true;
        statusMsg("Game Resumed! Click as fast as you can.");
        timeId = setInterval(function () {
            timer1--;
            if (timer1 <= 0) {
                endGame();
            }
            displayContent();
        }, 1000);
}
function userClick() {
   handleClick() //3. Button Grows When You Click
    if (flag) {
        current = current +1;
       
        if(current>20){     //1. Click Counter Turns Red When > 20
            updateDisplay()
        }
        displayContent();
    }
}



startButton.addEventListener('click', startGame);

clickButton.addEventListener('click', userClick);

resetButton.addEventListener('click', resetGame);

pauseButton.addEventListener('click', pauseGame);

resumeButton.addEventListener('click', resumeGame);

onWebsite();