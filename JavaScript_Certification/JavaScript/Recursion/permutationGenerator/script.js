function permuteString(str, prefix = "", res = []) {
  if (str.length === 0) {
    res.push(prefix);
    return res;
  } else {
    for (let i = 0; i < str.length; i++) {
      let remainder = str.slice(0, i) + str.slice(i + 1);
      let pre = prefix + str[i];

      if (!res.includes(pre)) {
        permuteString(remainder, pre, res);
      }
    }
  }

  return res;
}

console.log(permuteString("far"));
console.log(permuteString("fcc"));
