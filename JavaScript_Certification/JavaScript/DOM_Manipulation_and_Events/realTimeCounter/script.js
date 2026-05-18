document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("text-input");
  const charCount = document.getElementById("char-count");
  const maxLength = 50;

  textInput.addEventListener("input", () => {
    let count = textInput.value.length;
    if (count >= maxLength) {
      charCount.classList.add("red");
      textInput.value = textInput.value.slice(0, maxLength);
      count = maxLength;
    } else {
      charCount.classList.remove("red");
    }

    charCount.innerHTML = `Character Count: ${count}/50`;
  });
});
