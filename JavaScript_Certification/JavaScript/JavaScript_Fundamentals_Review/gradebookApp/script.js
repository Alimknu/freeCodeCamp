const scoreRange = { 100: "A+", 90: "A", 80: "B", 70: "C", 60: "D" };

function getAverage(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }

  res /= arr.length;

  return res;
}

function getGrade(score) {
  let roundedScore = Math.floor(score / 10) * 10;

  return scoreRange[roundedScore] ?? "F";
}

function hasPassingGrade(score) {
  let grade = getGrade(score);

  if (grade !== "F") {
    return true;
  }

  return false;
}

function studentMsg(scoresArr, score) {
  let classAvg = getAverage(scoresArr);
  let grade = getGrade(score);
  let hasPassed = hasPassingGrade(score);

  if (hasPassed) {
    return `Class average: ${classAvg}. Your grade: ${grade}. You passed the course.`;
  }

  return `Class average: ${classAvg}. Your grade: ${grade}. You failed the course.`;
}
