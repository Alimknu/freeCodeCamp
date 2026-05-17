function sumFibs(num) {
  let sum = 0;

  let a = 0;
  let b = 1;
  let temp = a;

  while (a <= num && b <= num) {
    temp = a;
    a = b;
    b = temp + b;

    if (a % 2 == 0) {
      continue;
    }

    sum += a;
  }

  return sum;
}
