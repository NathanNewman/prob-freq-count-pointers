// add whatever parameters you deem necessary
function isSubsequence(sub, string) {
  if (sub.length === 0) return true;
  if (string.length < sub.length) return false;
  let truthCounter = 0;
  let strIdx = 0;
  for (let letter of sub) {
    const beforeCount = truthCounter;
    for (let i = strIdx; i < string.length; i++) {
      if (letter === string[i]) {
        truthCounter++;
        strIdx = i + 1;
        break;
      }
    }
    // added to decrease runtime if false
    if (beforeCount === truthCounter) return false;
  }
  return sub.length === truthCounter;
}

module.exports = { isSubsequence };
