const generateBtn = document.getElementById("generate-btn");
const startingArray = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");
const sortBtn = document.getElementById("sort-btn");

function generateElement() {
  return Math.floor(Math.random() * 100 + 1);
}

function generateArray() {
  const res = new Array(5);

  for (let i = 0; i < res.length; i++) {
    res[i] = generateElement();
  }

  return res;
}

function generateContainer() {
  return document.createElement("div");
}

function fillArrContainer(el, arr) {
  el.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    const span = document.createElement("span");
    span.textContent = arr[i];
    el.appendChild(span);
  }
}

function isOrdered(a, b) {
  return a <= b;
}

function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    const temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
  }
}

function highlightCurrentEls(el, index) {
  if (!el || !el.children) return;
  Array.from(el.children).forEach((child) => {
    child.style.border = "";
  });

  const first = el.children[index];
  const second = el.children[index + 1];

  if (first) {
    first.style.border = "3px dashed red";
  }
  if (second) {
    second.style.border = "3px dashed red";
  }
}

generateBtn.addEventListener("click", () => {
  arrayContainer.innerHTML = "";

  const arr = generateArray();
  const startDiv = generateContainer();
  startDiv.id = "starting-array";
  fillArrContainer(startDiv, arr);
  arrayContainer.appendChild(startDiv);
});

sortBtn.addEventListener("click", () => {
  const startDiv = document.getElementById("starting-array");
  if (!startDiv) return;

  const spans = startDiv.querySelectorAll("span");
  if (spans.length === 0) return;

  const arr = Array.from(spans).map((s) => parseInt(s.textContent, 10));

  arrayContainer.innerHTML = "";
  const startingStep = generateContainer();
  startingStep.id = "starting-array";
  fillArrContainer(startingStep, arr);
  arrayContainer.appendChild(startingStep);
  highlightCurrentEls(startingStep, 0);
  const working = arr.slice();
  let swapped = true;
  let pass = 0;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < working.length - 1; i++) {
      if (!(pass === 0 && i === 0)) {
        const step = generateContainer();
        fillArrContainer(step, working);
        highlightCurrentEls(step, i);
        arrayContainer.appendChild(step);
      }

      if (!isOrdered(working[i], working[i + 1])) {
        swapElements(working, i);
        swapped = true;
      }
    }

    pass++;
  }

  const finalStep = generateContainer();
  fillArrContainer(finalStep, working);
  arrayContainer.appendChild(finalStep);
});
