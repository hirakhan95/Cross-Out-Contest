const allConstants = {
  noWin: "No Win",
  draw: "Draw",
};

class TicTacToe {
  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.players = ["X", "O"];
    this.currentPlayer = 0;
    this.playerScores = [0, 0];
    this.cells = document.getElementsByClassName("cell");
  }

  whoseTurn() {
    document.getElementById("current-player").textContent = `
  ${this.players[this.currentPlayer]}'s Turn`;
  }

  checkWinner() {
    for (let i = 0; i < 3; i++) {
      // Horizontally check
      if (
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2] &&
        this.board[i][0] !== ""
      ) {
        return this.board[i][0];
      }
      // Vertically check
      if (
        this.board[0][i] === this.board[1][i] &&
        this.board[1][i] === this.board[2][i] &&
        this.board[0][i] !== ""
      ) {
        return this.board[0][i];
      }
    }
    // Check for diagonal
    if (
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2] &&
      this.board[0][0] !== ""
    ) {
      return this.board[0][0];
    }
    // Check for diagonal
    if (
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0] &&
      this.board[0][2] !== ""
    ) {
      return this.board[0][2];
    }
    // Check for draw
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        // If "" exist that no body wins
        if (this.board[i][j] === "") return allConstants["noWin"];
    return allConstants["draw"];
  }

  resetBoard() {
    // Board state reset
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.board[i][j] = "";
      }
    }

    // Board UI reset
    function cellTextReset(element) {
      element.textContent = "";
    }

    Array.from(this.cells).forEach(cellTextReset);
  }

  closePopUp() {
    const resultPopUp = document.getElementById("resultPopUp");
    resultPopUp.style.display = "None";
    this.resetBoard();
  }

  showResults(result) {
    const resultPopUp = document.getElementById("resultPopUp");
    const popUpText = document.getElementById("popUpText");

    if (result === "Draw") {
      popUpText.textContent = "This game is a draw";
    } else {
      popUpText.textContent = ` Hurray! ${this.players[result]} is the winner! :)`;
    }
    resultPopUp.style.display = "flex";
  }

  scoresUpdate() {
    document.getElementById("score0").textContent = this.playerScores[0];
    document.getElementById("score1").textContent = this.playerScores[1];
  }

  createListeners() {
    function onCellClick(element, i) {
      // Inside Click Event
      const row = Math.floor(i / 3);
      const col = i % 3;

      // Check if clicked cell should be triggered
      if (tictactoe.board[row][col] === "") {
        // Getting player character
        let player = tictactoe.players[tictactoe.currentPlayer];
        // Updating UI
        element.textContent = player;
        // Saving state
        tictactoe.board[row][col] = tictactoe.currentPlayer;

        // Updating for next move
        if (tictactoe.currentPlayer === 0) tictactoe.currentPlayer = 1;
        else tictactoe.currentPlayer = 0;

        // Whose turn gets called
        tictactoe.whoseTurn();

        // Check winner logic
        let result = tictactoe.checkWinner();

        if (result !== allConstants["noWin"]) {
          tictactoe.showResults(result);

          if (result !== allConstants["draw"]) {
            tictactoe.playerScores[result]++;

            // Players scores updated
            tictactoe.scoresUpdate();
          }
        }
      }
    }

    function forEachCall(cell, index) {
      cell.addEventListener("click", function () {
        onCellClick(cell, index);
      });
    }

    Array.from(this.cells).forEach(forEachCall);
  }

  manualClickTriggerRaw(index) {
    this.cells[index].click();
  }

  manualClickTriggerWithAxis(row_index, col_index) {
    let index = row_index * 3 + col_index;
    this.cells[index].click();
  }
}
