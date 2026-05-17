function dropElements(arr, func) {
  const res = [...arr];

  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      res.shift();
    } else {
      return res;
    }
  }

  return res;
}
