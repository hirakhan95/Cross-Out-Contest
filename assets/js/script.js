let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentPlayer = "X";

const cells = document.querySelectorAll(".cell");

////

clickEventOnCell = () => {
  console.log(index);
};

functionForEach = (cell, index) => {
  cell.addEventListener("click", clickEventOnCell);
};

cells.forEach(functionForEach);
