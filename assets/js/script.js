let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentPlayer = "X";

const cells = document.querySelectorAll(".cell");

// function clickEventOnCell(index) {
//   const row = Math.floor(index / 3);
//   const col = index % 3;
//   if (board[row][col] === "") {
//     board[row][col] = currentPlayer;
//     cell.textContent = currentPlayer;
//     const winner = checkWinner();
//     if (winner) {
//       showWinner(winner);
//       setTimeout(resetBoard, 2000);
//     } else {
//       currentPlayer = currentPlayer === "X" ? "O" : "X";
//     }
//   }
// }

// function abc(asd, j) {
//   console.log(asd, j);
// }

// cells.forEach(abc);

a1 = (i, k, l) => {
  console.log(i, k, l);
};

function a2(i) {
  console.log(i);
}

[1, 2, 3].forEach(function (i) {
  console.log(i);
});
