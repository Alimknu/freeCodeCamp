let num = 8;

function factorialCalculator(num) {
  let result = 1;
  let i = 0;

  while (i < num) {
    i++;
    result *= i;
  }

  return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
