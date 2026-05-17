function diffArray(arrOne, arrTwo) {
  let resOne = arrOne.filter((a) => arrTwo.some((b) => b === a) !== true);
  let resTwo = arrTwo.filter((a) => arrOne.some((b) => b === a) !== true);

  let res = [...resOne, ...resTwo];

  return res;
}
