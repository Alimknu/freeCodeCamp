let lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);

  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);

  return arr;
}

function removeLastLunch(arr) {
  let item = arr.pop();
  if (item) {
    console.log(`${item} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }

  return arr;
}

function removeFirstLunch(arr) {
  let item = arr.shift();
  if (item) {
    console.log(`${item} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }

  return arr;
}

function getRandomLunch(arr) {
  if (!arr || arr.length === 0) {
    console.log("No lunches available.");
    return;
  }

  const index = Math.floor(Math.random() * arr.length);
  const item = arr[index];

  console.log(`Randomly selected lunch: ${item}`);
}

function showLunchMenu(arr) {
  if (!arr || arr.length === 0) {
    console.log("The menu is empty.");
    return;
  }

  console.log(`Menu items: ${arr.join(", ")}`);
}
