function fearNotLetter(str) {
  const letterOrder = "abcdefghijklmnopqrstuvwxyz";
  let index = letterOrder.indexOf(str[0]);

  for (let i = 0; i < str.length; i++) {
    console.log(i);
    if (letterOrder[index] != str[i]) {
      return letterOrder[index];
    }

    index++;
  }

  return undefined;
}
