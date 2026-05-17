function pushNewNum(arr, num) {
  if (!arr.includes(num)) {
    arr.push(num);
  }
}

function uniteUnique(arrOne, arrTwo, ...restArgs) {
  let res = [];

  for (const num of arrOne) {
    pushNewNum(res, num);
  }

  for (const num of arrTwo) {
    pushNewNum(res, num);
  }

  for (const args of restArgs) {
    for (const num of args) {
      pushNewNum(res, num);
    }
  }

  return res;
}
