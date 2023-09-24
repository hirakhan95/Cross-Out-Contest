let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentPlayer = "X";

const cells = document.getElementsByClassName("cell");

forEachCall = (element, i) => {
  element.addEventListener("click", function () {
    // Inside Click Event
    const row = Math.floor(i / 3);
    const col = i % 3;

    console.log(i, row, col);
  });
};

Array.from(cells).forEach(forEachCall);
