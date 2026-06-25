const flashcardEl = document.getElementById("flashcard") as HTMLDivElement;
const deleteButton = document.getElementById("delete-btn") as HTMLButtonElement;

const frontText = document.getElementById("front-text") as HTMLTextAreaElement;
const backText = document.getElementById("back-text") as HTMLTextAreaElement;

const entryForm = document.getElementById("entry-form") as HTMLFormElement;

const displayFront = document.getElementById(
  "front-text-display",
) as HTMLDivElement;
const displayBack = document.getElementById(
  "back-text-display",
) as HTMLDivElement;

interface FlashCard {
  questionText: string;
  questionAnswer: string;
}

class InvalidUserInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidUserInputError";
  }
}

const currentCards: FlashCard[] = [];

flashcardEl.addEventListener("click", () => {
  flashcardEl.classList.toggle("flipped");
});

deleteButton.addEventListener("click", () => {
  if (currentCards.length <= 0) {
    return;
  }

  currentCards.pop();

  displayFront.textContent = currentCards[currentCards.length - 1].questionText;
  displayBack.textContent =
    currentCards[currentCards.length - 1].questionAnswer;
});

entryForm.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const frontValue = frontText.value;
  const backValue = backText.value;

  if (frontValue.trim() === "" || backValue.trim() === "") {
    throw new InvalidUserInputError("Fields cannot be empty.");
  }

  const newCard: FlashCard = {
    questionText: frontValue,
    questionAnswer: backValue,
  };

  currentCards.push(newCard);

  displayFront.textContent = newCard.questionText;
  displayBack.textContent = newCard.questionAnswer;

  entryForm.reset();
});
