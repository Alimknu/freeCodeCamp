function dfsNQueens(n) {
  if (n < 1) {
    return [];
  }

  const res = [];
  const board = new Array(n).fill(undefined);

  function placeQueen(row) {
    if (row == n) {
      res.push([...board]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (isSafe(row, i, board)) {
        board[row] = i;
        placeQueen(row + 1);
        board[row] = undefined;
      }
    }
  }

  placeQueen(0);
  return res;
}

function isSafe(row, col, board) {
  for (let i = 0; i < row; i++) {
    if (board[i] === col) {
      return false;
    }

    if (Math.abs(board[i] - col) === row - i) {
      return false;
    }
  }

  return true;
}

console.log(dfsNQueens(4));
