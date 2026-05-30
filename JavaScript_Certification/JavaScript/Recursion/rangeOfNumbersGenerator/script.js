function rangeOfNumbers(startNum, endNum) {
  let res = [];

  if (startNum == endNum) {
    return [startNum];
  } else {
    res = rangeOfNumbers(startNum, endNum - 1);
    res.push(endNum);
  }

  return res;
}
