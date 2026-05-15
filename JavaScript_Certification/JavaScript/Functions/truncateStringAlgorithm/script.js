function truncateString(str, num) {
  if (str.length > num) {
    let res = str.slice(0, num);
    res += "...";
    return res;
  }

  return str;
}
