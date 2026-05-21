function myReplace(str, toReplace, replacement) {
  const firstInstance = str.indexOf(toReplace);

  if (firstInstance === -1) {
    return str;
  }

  if (toReplace[0] == toReplace[0].toUpperCase()) {
    replacement = replacement[0].toUpperCase() + replacement.slice(1);
  } else if (toReplace[0] == toReplace[0].toLowerCase()) {
    replacement = replacement[0].toLowerCase() + replacement.slice(1);
  }

  return (
    str.slice(0, firstInstance) +
    replacement +
    str.slice(firstInstance + toReplace.length)
  );
}
