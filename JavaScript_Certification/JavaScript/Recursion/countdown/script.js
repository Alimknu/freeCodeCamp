function countdown(number) {
  let res = [];

  if (number < 1) {
    return [];
  } else {
    res = countdown(number - 1);
    res.unshift(number);
  }

  return res;
}
