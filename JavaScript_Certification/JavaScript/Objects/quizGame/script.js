const questions = [
  {
    category: "category",
    question: "question?",
    choices: ["a", "b", "c"],
    answer: "a",
  },
  {
    category: "category",
    question: "question?",
    choices: ["a", "b", "c"],
    answer: "a",
  },
  {
    category: "category",
    question: "question?",
    choices: ["a", "b", "c"],
    answer: "a",
  },
  {
    category: "category",
    question: "question?",
    choices: ["a", "b", "c"],
    answer: "a",
  },
  {
    category: "category",
    question: "question?",
    choices: ["a", "b", "c"],
    answer: "a",
  },
];

function getRandomQuestion(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function getRandomComputerChoice(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function getResults(qObj, choice) {
  if (qObj.answer === choice) {
    return "The computer's choice is correct!";
  }

  return `The computer's choice is wrong. The correct answer is: ${qObj.answer}`;
}
