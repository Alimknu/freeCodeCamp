let year = 2004;

function isLeapYear(year) {
  let result =
    year % 4 == 0 && (!(year % 100 == 0) || year % 400 == 0) ? true : false;

  return result == true
    ? `${year} is a leap year.`
    : `${year} is not a leap year.`;
}

const result = isLeapYear(year);
console.log(result);
