let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// let players = ["F", "H"];
let currentPlayer = 0;

const cells = document.getElementsByClassName("cell");

forEachCall = (element, i) => {
  element.addEventListener("click", function () {
    // Inside Click Event
    const row = Math.floor(i / 3);
    const col = i % 3;

    element.textContent = currentPlayer;
    
    if (currentPlayer === 0) currentPlayer = 1;
    else currentPlayer = 0;

    console.log(currentPlayer);
  });
};

Array.from(cells).forEach(forEachCall);
