function truncate(str, maxlength) {
  if (maxlength < str.length) {
    let resultStr = str.slice(0, maxlength - 1);
    return resultStr + '…';
  } else {
    return str;
  }
}