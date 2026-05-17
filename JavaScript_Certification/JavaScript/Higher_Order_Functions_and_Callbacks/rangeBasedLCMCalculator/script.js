const gcd = (x, y) => {
  while (y !== 0) {
    const t = x % y;
    x = y;
    y = t;
  }
  return x;
};

const lcm = (x, y) => (x / gcd(x, y)) * y;

function smallestCommons(arr) {
  const [a, b] = arr;
  const low = Math.min(a, b);
  const high = Math.max(a, b);

  let result = low;
  for (let i = low + 1; i <= high; i++) {
    result = lcm(result, i);
  }
  return result;
}
