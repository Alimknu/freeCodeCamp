function insertionSort(arr) {
  if (arr.length <= 0) {
    return [];
  }

  const res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
    let currIndex = res.length - 1;

    for (let j = currIndex; j >= 0; j--) {
      if (arr[i] < res[j]) {
        const temp = res[j];
        res[j] = arr[i];
        res[currIndex] = temp;
        currIndex = j;
      }
    }
  }

  return res;
}
