function whatIsInAName(arr, source) {
  const keys = Object.keys(source);

  let res = arr.filter((obj) => {
    return keys.every(
      (key) =>
        Object.prototype.hasOwnProperty.call(obj, key) &&
        obj[key] === source[key],
    );
  });

  return res;
}
