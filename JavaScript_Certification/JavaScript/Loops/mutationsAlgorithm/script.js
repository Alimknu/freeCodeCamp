function mutation(arr) {
  let first = arr[0].toLowerCase();
  let sec = arr[1].toLowerCase();

  if (first.includes(sec)) {
    return true;
  }

  for (let i = 0; i < sec.length; i++) {
    if (!first.includes(sec[i])) {
      return false;
    }
  }

  return true;
}
