let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let players = ["X", "O"];
let currentPlayer = 0;

const cells = document.getElementsByClassName("cell");

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

forEachCall = (element, i) => {
  element.addEventListener("click", function () {
    // Inside Click Event
    const row = Math.floor(i / 3);
    const col = i % 3;

    // Getting player character
    player = players[currentPlayer];
    // Updating UI
    element.textContent = player;
    // Saving state
    board[row][col] = player;

    // Updating for next move
    if (currentPlayer === 0) currentPlayer = 1;
    else currentPlayer = 0;

    // Check winner logic
    result = checkWinner();

    if (result !== "Draw" && result !== "Nowin") {
        
    } else if (result === "Draw") {

    }

    console.log(result);
  });
};

Array.from(cells).forEach(forEachCall);
