function getMinMax(str) {
  let arr = str.split(' ');
  let obj = {};

  arr = arr.filter(item => isFinite(item));
  obj.max = Math.max(...arr);
  obj.min = Math.min(...arr);

  return obj;
}
