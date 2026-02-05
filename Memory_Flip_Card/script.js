// DOM elements
const board = document.getElementById('board');
const movesEl = document.getElementById('moves');
const pairsEl = document.getElementById('pairs');
const timeEl = document.getElementById('timeLeft');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const resetBtn = document.getElementById("resetBtn");
const bestScoreEl = document.getElementById('bestScore');
const overlay = document.getElementById('countdownOverlay');

// Game configuration
const rows = 3; // grid layout chosen via CSS; use 6x3 = 18 cards (9 pairs)
const cols = 6;
const totalPairs = 9;
const initialTime = 60; // seconds

//state
let firstCard = null;
let secondCard = null;
let busy = false;
let moves = 0;
let matchedPairs = 0;
let timeLeft = initialTime;
let timerId = null;
let pendingTimeouts = [];
let bestScore = null;

// step-1
// call -> entire previous data -> store -> bestscore variable...
function onLoad() {
    var temp = localStorage.getItem('highScoreGame');
    if (temp != null) {
        bestScore = parseInt(temp);
    }
    else {
        bestScore = 0;
    }
}

// actial content reflect -> in html file
function disaplyContent() {
    timeEl.textContent = timeLeft;
    bestScoreEl.textContent = bestScore;
}

onLoad();
disaplyContent();

function restartGame() {
    clearInterval(timerId);

    moves = 0;
    matchedPairs = 0;
    timeLeft = initialTime;

    movesEl.innerText = moves;
    pairsEl.innerText = matchedPairs;
    timeEl.textContent = timeLeft;

    // remove old cards
    board.innerHTML = "";

    // clear flipped & matched states
    firstCard = null;
    secondCard = null;

    // rebuild cards
    cardMaking();
}

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function createCard(value) {
    const card = document.createElement('div')
    card.classList.add('card');

    const inner = document.createElement('div');
    inner.classList.add('inner');

    const front = document.createElement('div');
    front.classList.add('front');

    const back = document.createElement('div');
    back.classList.add('back');
    back.textContent = value;

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner)
    return card
}

function matchFound(card) {
    if (card === firstCard || card.classList.contains('matched')) return;

    card.classList.add('flipped')

    if (firstCard == null) {
        firstCard = card;
        return;
    }

    secondCard = card;
    moves++;
    movesEl.innerHTML = moves;

    var a = firstCard.querySelector('.back')
    var b = secondCard.querySelector('.back')

    if (a.textContent === b.textContent) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        firstCard = null;
        secondCard = null;
        matchedPairs++;
        pairsEl.textContent = matchedPairs;

        if (matchedPairs == 9) {
            alert(`endgame`);
        }
    }
    else {
        setTimeout(function () {
            firstCard.classList.remove('flipped')
            secondCard.classList.remove('flipped')
            firstCard = null;
            secondCard = null;
        }, 700);
    }
}

function cardMaking() {

    // destrucutre method concept...
    var arr3 = [...arr1, ...arr1];

    // shuffeling -> positon exhcange..
    for (let i = arr3.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var a = arr3[i];
        arr3[i] = arr3[j];
        arr3[j] = a;
    }

    var i = 0
    arr3.forEach((value) => {
        i++
        const card = createCard(value)
        board.appendChild(card);
        card.addEventListener('click', function () {
            matchFound(card);
        });
    })
}

restartBtn.addEventListener('click', function () {
    restartGame();
})

cardMaking();
