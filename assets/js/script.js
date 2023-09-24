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

    player = players[currentPlayer];
    element.textContent = player;
    board[row][col] = player;

    if (currentPlayer === 0) currentPlayer = 1;
    else currentPlayer = 0;

    console.log(board);
  });
};

Array.from(cells).forEach(forEachCall);
