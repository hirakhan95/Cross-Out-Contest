let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let players = ["X", "O"];
let currentPlayer = 0;

let playerScores = [0, 0];

const cells = document.getElementsByClassName("cell");

function whoseTurn() {
  document.getElementById("current-player").textContent = `
${players[currentPlayer]}'s Turn`;
}

checkWinner = () => {
  for (let i = 0; i < 3; i++) {
    // Horizontally check
    if (
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2] &&
      board[i][0] !== ""
    ) {
      return board[i][0];
    }
    // Vertically check
    if (
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i] &&
      board[0][i] !== ""
    ) {
      return board[0][i];
    }
  }
  // Check for diagonal
  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] !== ""
  ) {
    return board[0][0];
  }
  // Check for diagonal
  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2] !== ""
  ) {
    return board[0][2];
  }
  // Check for draw
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      // If "" exist that no body wins
      if (board[i][j] === "") return "Nowin";
  return "Draw";
};

function resetBoard() {
  // Board state reset
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      board[i][j] = "";
    }
  }

  // Board UI reset
  function cellTextReset(element) {
    element.textContent = "";
  }

  Array.from(cells).forEach(cellTextReset);
}

function closePopUp() {
  const resultPopUp = document.getElementById("resultPopUp");
  resultPopUp.style.display = "None";
  resetBoard();
}

function showResults(result) {
  const resultPopUp = document.getElementById("resultPopUp");
  const popUpText = document.getElementById("popUpText");

  if (result === "Draw") {
    popUpText.textContent = "This game is a draw";
  } else {
    popUpText.textContent = ` Hurray! ${players[result]} is the winner! :)`;
  }
  resultPopUp.style.display = "flex";
}

function scoresUpdate() {
  document.getElementById("score0").textContent = playerScores[0];
  document.getElementById("score1").textContent = playerScores[1];
}

forEachCall = (element, i) => {
  element.addEventListener("click", function () {
    // Inside Click Event
    const row = Math.floor(i / 3);
    const col = i % 3;
    
    if (board[row][col] === "") {
      // Getting player character
      player = players[currentPlayer];
      // Updating UI
      element.textContent = player;
      // Saving state
      board[row][col] = currentPlayer;

      // Updating for next move
      if (currentPlayer === 0) currentPlayer = 1;
      else currentPlayer = 0;

      // Whose turn gets called
      whoseTurn();

      // Check winner logic
      result = checkWinner();

      if (result !== "Nowin") {
        showResults(result);

        if (result !== "Draw") {
          playerScores[result]++;

          // Players scores updated
          scoresUpdate();
        }
      }
    }
  });
};

Array.from(cells).forEach(forEachCall);
