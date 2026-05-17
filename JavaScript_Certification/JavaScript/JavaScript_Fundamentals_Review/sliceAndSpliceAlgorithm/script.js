function frankenSplice(arrOne, arrTwo, index) {
  let res = [...arrTwo];
  res.splice(index, 0, ...arrOne);

  return res;
}
