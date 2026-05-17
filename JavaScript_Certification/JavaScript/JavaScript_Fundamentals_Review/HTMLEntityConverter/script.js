const replacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

function convertHTML(str) {
  let res = "";

  for (const letter of str) {
    if (replacements[letter]) {
      res += replacements[letter];
    } else {
      res += letter;
    }
  }

  return res;
}
