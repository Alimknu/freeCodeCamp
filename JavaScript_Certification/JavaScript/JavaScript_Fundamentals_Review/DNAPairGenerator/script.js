function pairElement(str) {
  let res = [];

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        res.push(["A", "T"]);
        break;
      case "T":
        res.push(["T", "A"]);
        break;
      case "C":
        res.push(["C", "G"]);
        break;
      case "G":
        res.push(["G", "C"]);
        break;
      default:
        console.log("Unknown string value");
        break;
    }
  }

  return res;
}
