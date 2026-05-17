function steamrollArray(arr) {
  let res = [];

  arr.forEach((e) => {
    if (Array.isArray(e)) {
      const rolled = steamrollArray(e);
      console.log(rolled);
      res.push(...rolled);
    } else {
      res.push(e);
    }
  });

  return res;
}
