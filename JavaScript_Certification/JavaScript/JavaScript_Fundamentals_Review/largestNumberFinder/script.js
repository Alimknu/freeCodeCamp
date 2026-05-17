function largestOfAll(arr) {
  let res = new Array(arr.length);
  console.log(res);

  for (let i = 0; i < arr.length; i++) {
    res[i] = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (res[i] < arr[i][j]) {
        res[i] = arr[i][j];
      }
    }
  }

  return res;
}
