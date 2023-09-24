document.addEventListener("DOMContentLoaded", function () {
  let turn = "X";
  let board = ["", "", "", "", "", "", "", "", ""];
  let end = false;

  const boxes = document.querySelectorAll(".box");

  const h1Element = document.getElementById("name");

  function play(index) {
    if (end || board[index] !== "") return;
    board[index] = turn;
    boxes[index].textContent = turn;

    if (checkWin()) {
      h1Element.textContent = `Player ${turn} wins!`;
      end = true;
      return;
    }

    if (board.indexOf("") === -1) {
      h1Element.textContent = "It's a draw!";
      end = true;
      return;
    }

    turn = turn === "X" ? "O" : "X";
  }

  function checkWin() {
    const winCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const x of winCombo) {
      const [a, b, c] = x;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  }

  function restar() {
    turn = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    end = false;

    boxes.forEach((box) => {
      box.textContent = "";
    });

    h1Element.textContent = "Tic Tac Toe";
  }

  const restartButton = document.querySelector(".btn");
  restartButton.addEventListener("click", restar);

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => play(i));
  }
});
