function checkSpam(str) {
  let string = str.toLowerCase();

if (string.includes('1xBet'.toLowerCase()) || string.includes('XXX'.toLowerCase())) {
  return true;
  } else {
  return false;
  }
}
