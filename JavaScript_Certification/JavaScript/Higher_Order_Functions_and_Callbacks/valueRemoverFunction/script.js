function destroyer(arr, ...restArgs) {
  let res = arr.filter((a) => !restArgs.includes(a));

  return res;
}
