function truthCheck(collection, pre) {
  return collection.every((obj) => {
    return obj[pre];
  });
}
