function confirmEnding(check, against) {
  if (check.substring(check.length - against.length, check.length) == against) {
    return true;
  }

  return false;
}
