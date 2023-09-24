let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let players = ["X", "O"];
let currentPlayer = 0;

const cells = document.getElementsByClassName("cell");

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

    console.log(board);
  });
};

Array.from(cells).forEach(forEachCall);
