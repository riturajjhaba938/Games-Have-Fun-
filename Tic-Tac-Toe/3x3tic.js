// Player names
let player1 = prompt("Enter Player 1 name (O):") || "Player O";
let player2 = prompt("Enter Player 2 name (X):") || "Player X";

// Scores (session based)
sessionStorage.setItem(player1, sessionStorage.getItem(player1) || 0);
sessionStorage.setItem(player2, sessionStorage.getItem(player2) || 0);

const boxes = document.querySelectorAll(".box");
const turnText = document.getElementById("turn");
const p1Score = document.getElementById("p1Score");
const p2Score = document.getElementById("p2Score");
const restartBtn = document.getElementById("restart");
const resetBtn = document.getElementById("reset");

let isPlayerO = true;
let gameOver = false;

const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function updateScoreboard() {
  p1Score.innerText = `${player1} (O): ${sessionStorage.getItem(player1)}`;
  p2Score.innerText = `${player2} (X): ${sessionStorage.getItem(player2)}`;
}

function resetBoard() {
  boxes.forEach(box => {
    box.innerText = "";
    box.disabled = false;
    box.classList.remove("win");
  });
  isPlayerO = true;
  gameOver = false;
  turnText.innerText = `${player1}'s Turn (O)`;
}

function checkWinner() {
  for (let pattern of winPatterns) {
    const [a,b,c] = pattern;
    if (
      boxes[a].innerText &&
      boxes[a].innerText === boxes[b].innerText &&
      boxes[b].innerText === boxes[c].innerText
    ) {
      boxes[a].classList.add("win");
      boxes[b].classList.add("win");
      boxes[c].classList.add("win");

      let winnerName = boxes[a].innerText === "O" ? player1 : player2;
      sessionStorage.setItem(
        winnerName,
        Number(sessionStorage.getItem(winnerName)) + 1
      );

      turnText.innerText = `🎉 ${winnerName} Wins!`;
      gameOver = true;
      boxes.forEach(box => box.disabled = true);
      updateScoreboard();
      return;
    }
  }

  if ([...boxes].every(box => box.innerText !== "")) {
    turnText.innerText = "🤝 Draw!";
  }
}

boxes.forEach(box => {
  box.addEventListener("click", () => {
    if (gameOver) return;

    box.innerText = isPlayerO ? "O" : "X";
    box.disabled = true;
    isPlayerO = !isPlayerO;
    turnText.innerText = isPlayerO
      ? `${player1}'s Turn (O)`
      : `${player2}'s Turn (X)`;
    checkWinner();
  });
});

restartBtn.addEventListener("click", resetBoard);

resetBtn.addEventListener("click", () => {
  sessionStorage.setItem(player1, 0);
  sessionStorage.setItem(player2, 0);
  updateScoreboard();
  resetBoard();
});

// Init
updateScoreboard();
resetBoard();
