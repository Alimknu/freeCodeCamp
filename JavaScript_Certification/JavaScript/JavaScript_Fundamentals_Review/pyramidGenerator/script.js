function pyramid(pattern, rows, isDown) {
  let res = "\n";

  for (let i = 0; i < rows; i++) {
    if (isDown === false) {
      res += " ".repeat(rows - i - 1);
      for (let j = 2 * i + 1; j > 0; j--) {
        res += pattern;
      }
    } else if (isDown === true) {
      res += " ".repeat(i);
      for (let j = 0; j < 2 * rows - 2 * i - 1; j++) {
        res += pattern;
      }
    }

    res += "\n";
  }

  return res;
}
