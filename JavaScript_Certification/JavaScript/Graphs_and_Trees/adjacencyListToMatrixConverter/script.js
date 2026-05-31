function adjacencyListToMatrix(list) {
  let n = 0;

  for (const key of Object.keys(list)) {
    n++;
  }

  const matrix = new Array(n).fill(null).map(() => Array(n).fill(0));

  for (const [key, value] of Object.entries(list)) {
    for (let i = 0; i < value.length; i++) {
      matrix[key][value[i]] = 1;
    }
  }

  for (let i = 0; i < n; i++) {
    console.log(matrix[i]);
  }

  return matrix;
}

console.log(
  adjacencyListToMatrix(
    adjacencyListToMatrix({ 0: [2], 1: [2, 3], 2: [0, 1, 3], 3: [1, 2] }),
  ),
);
