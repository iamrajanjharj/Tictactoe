document.addEventListener("DOMContentLoaded", () => {
  const outer = document.getElementById("outer");
  const result = document.getElementById("result");
  let turn = 0; // when chance is 0, we mark 0. When chance is 1, we mark X.
  let arr = Array(9).fill(undefined);
  let noOfUnmarkedCells = 9;
  let ch = "";
  outer.addEventListener("click", (event) => {
    const cell = event.target;
    const cellNumber = cell.dataset.cell;

    if (cell.dataset.clicked) return;

    if (turn) {
      cell.textContent = `X`;
      arr[cellNumber] = "X";
    } else {
      cell.textContent = `0`;
      arr[cellNumber] = "0";
    }

    noOfUnmarkedCells--;
    console.log(noOfUnmarkedCells);
    cell.dataset.clicked = true;
    cell.style.backgroundColor = "#FFFFFF";
    ch = turn ? "X" : "0";

    if (checkWinner(ch)) {
      result.textContent = `${ch} wins!!! Reloading...`;
      setTimeout(() => window.location.reload(), 3000);
    } else if (noOfUnmarkedCells < 1) {
      result.textContent = `Game Over. No winner. Reloading...`;
      setTimeout(() => window.location.reload(), 3000);
    }

    turn = !turn;
  });

  function checkWinner(ch) {
    const winnerByRow =
      (arr[0] === ch && arr[1] === ch && arr[2] === ch) ||
      (arr[3] === ch && arr[4] === ch && arr[5] === ch) ||
      (arr[6] === ch && arr[7] === ch && arr[8] === ch);

    if (winnerByRow) return true;

    const winnerByCol =
      (arr[0] === ch && arr[3] === ch && arr[6] === ch) ||
      (arr[1] === ch && arr[4] === ch && arr[7] === ch) ||
      (arr[2] === ch && arr[5] === ch && arr[8] === ch);

    if (winnerByCol) return true;

    const winnerByDiagonal =
      (arr[0] === ch && arr[4] === ch && arr[8] === ch) ||
      (arr[2] === ch && arr[4] === ch && arr[6] === ch);

    if (winnerByDiagonal) return true;

    return false;
  }
});
