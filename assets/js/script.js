let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentPlayer = "X";

const cells = document.querySelectorAll(".cell");

cells.forEach((cell, index) => {
  console.log(cell, index);
});
