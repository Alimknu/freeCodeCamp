function fibonacci(n) {
  const sequence = [0, 1];

  if (n <= 1) {
    return sequence[n];
  }

  let a = sequence[0];
  let b = sequence[1];

  for (let i = 1; i < n; i++) {
    sequence[i] = a + b;
    a = b;
    b = sequence[i];
  }

  return sequence[sequence.length - 1];
}
