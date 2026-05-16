function chunkArrayInGroups(arr, num) {
  let temp = [...arr];
  let res = [];

  for (let i = 0; i < arr.length; i += num) {
    res.push(temp.slice(i, num + i));
  }

  return res;
}
