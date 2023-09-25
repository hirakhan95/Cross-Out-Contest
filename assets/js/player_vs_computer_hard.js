let tictactoe = new TicTacToe((players = ["X", "Comp"]));
tictactoe.createListeners();

function runFunction() {
  if (tictactoe.currentPlayer === 1) {
    let possibleIndexes = [];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (tictactoe.board[i][j] === "") {
          possibleIndexes.push(i * 3 + j);
        }
      }
    }

    computerSelection =
      possibleIndexes[Math.floor(Math.random() * possibleIndexes.length)];
    tictactoe.manualClickTriggerRaw(computerSelection);
  }
}

var t = setInterval(runFunction, 500);
