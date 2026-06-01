function addTogether(a, b) {
  if (!isNum(a)) {
    return undefined;
  }

  if (arguments.length === 1) {
    return function sum(c) {
      if (!isNum(c)) {
        return undefined;
      }

      return a + c;
    };
  }

  if (!isNum(b)) {
    return undefined;
  }

  return a + b;
}

function isNum(num) {
  return typeof num === "number";
}
