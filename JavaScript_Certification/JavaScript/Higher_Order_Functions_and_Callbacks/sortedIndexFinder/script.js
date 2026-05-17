function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  const res = arr.findIndex((element) => element >= num);
  if (res == -1) {
    return arr.length;
  }

  return res;
}
