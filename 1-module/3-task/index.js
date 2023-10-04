function ucFirst (str) {
  if (str) {
    let firstLetter = str[0].toUpperCase();
    let result = firstLetter + str.slice(1);
  
    return result;
  } else {
    return str;
  }
}