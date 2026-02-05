// DOM elements
const board = document.getElementById('board');
const movesEl = document.getElementById('moves');
const pairsEl = document.getElementById('pairs');
const timeEl = document.getElementById('timeleft');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const resetBtn = document.getElementById('resetBtn');
const bestScoreEl = document.getElementById('bestScore');
const overlay = document.getElementById('countdownOverlay');

//Game configuration
const rows = 3; //grid layout chosen via; css use 6x3 = 18 cards (9 pairs)
const cols = 6;
const totalPairs = 9;
const initialTime = 60; //seconds

// State
let firstCard = null;
let secondCard = null;
let busy = false;
let moves = 0;
let matchedPairs = 0;
let timeLeft = initialTime;
let timerId = null;
let pendingTimeouts = [];
let bestScore = null;


//Step-1 
// call -> entire previous data -> store -> bestscore variables...
function onload(){
   var temp = localStorage.getItem('highScoreGame');
   if(temp != null){
    bestScore = parseInt(temp);
   }
   else {
    bestScore = 0;
   }
}

//Actaul COntent reflect -> html file me......
function displayContent(){
  timeEl.textContent = timeLeft;
  bestScore.textContent = bestScore;
}

onload()
displayContent();

var arr1=[1,2,3,4,5,6,7,8,9];

function cardMaking (){

  //destructuring method concept...
  var arr3=[...arr1, ...arr1];
  console.log(arr3)

  //shuffeling -> position exchange...
  for(let i = arr3.length - 1; i > 0; i--){ 
    var j = Math.floor(Math.random() * (i + 1));  // pick random index
    var temp = arr3[i];                            // store current
    arr3[i] = arr3[j];                             // swap
    arr3[j] = temp;                                // complete swap
  }

  console.log("After shuffle method " + arr3)
}


cardMaking()