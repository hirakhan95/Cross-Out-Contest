let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentPlayer = "X";

const cells = document.querySelectorAll(".cell");

functionForEach = (cell, index) => {
  clickEventOnCell = () => {
    console.log(index);
  };
  cell.addEventListener("click", clickEventOnCell);
};

cells.forEach(functionForEach);
