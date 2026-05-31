function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];

  let arrLess = [];
  let arrMore = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      arrMore.push(arr[i]);
    } else {
      arrLess.push(arr[i]);
    }
  }

  arrLess = quicksort(arrLess);
  arrMore = quicksort(arrMore);

  return [...arrLess, pivot, ...arrMore];
}

console.log(
  quicksort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ]),
);
