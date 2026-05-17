function sumPrimes(num) {
  if (num < 2) {
    return 0;
  }

  const primes = [];
  let curr = 2;
  let res = 0;

  while (curr <= num) {
    if (!primes.some((a) => curr % a === 0)) {
      primes.push(curr);
      res += curr;
    }

    curr++;
  }

  return res;
}
