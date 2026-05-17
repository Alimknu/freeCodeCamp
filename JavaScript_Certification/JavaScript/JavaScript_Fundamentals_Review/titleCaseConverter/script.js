const letters = "abcdefghijklmnopqrstuvwxyz";

function titleCase(str) {
  let res = "";
  let word = str.split(" ");
  console.log(word);

  for (let i = 0; i < word.length; i++) {
    let currWord = "";
    currWord += word[i][0].toUpperCase();

    for (let j = 1; j < word[i].length; j++) {
      if (letters.includes(word[i][j].toLowerCase())) {
        currWord += word[i][j].toLowerCase();
      } else {
        currWord += word[i][j];
      }
    }

    res += currWord + " ";
  }

  return res.trim();
}
