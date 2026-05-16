function findLongestWordLength(sentence) {
  let longest = 0;
  let temp = sentence;

  temp = temp.split(" ");

  for (let i = 0; i < temp.length; i++) {
    let letterCount = 0;
    for (const char in temp[i]) {
      ++letterCount;
    }

    if (longest < letterCount) {
      longest = letterCount;
    }
  }

  return longest;
}
