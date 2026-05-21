const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let res = "";

  if (caseInsensitiveFlag.checked) {
    res += "i";
  }

  if (globalFlag.checked) {
    res += "g";
  }

  return res;
}

testButton.addEventListener("click", () => {
  const patternText = regexPattern.value;
  const flags = getFlags();
  let regex;
  try {
    regex = new RegExp(patternText, flags);
  } catch (e) {
    testResult.innerText = "no match";
    return;
  }

  const originalText = stringToTest.textContent;
  const matches = originalText.match(regex);

  if (!matches) {
    testResult.innerText = "no match";
    return;
  }

  const highlighted = originalText.replace(regex, (m) => `<span class="highlight">${m}</span>`);
  stringToTest.innerHTML = highlighted;

  if (regex.global) {
    testResult.innerText = matches.join(", ");
  } else {
    testResult.innerText = matches[0];
  }
})