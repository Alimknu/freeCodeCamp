function sumAll(arr) {
  let sum = 0;
  let highest = arr[0] > arr[1] ? arr[0] : arr[1];
  let lowest = arr[0] > arr[1] ? arr[1] : arr[0];

  for (let i = lowest; i <= highest; i++) {
    sum += i;
  }

  return sum;
}
