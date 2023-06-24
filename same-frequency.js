const { frequencyCounter } = require("./construct-note");

// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);
  if (str1.length !== str2.length) return false;
  const numMap1 = frequencyCounter(str1);
  const numMap2 = frequencyCounter(str2);
  if (numMap1.size !== numMap2.size) return false;
  for (let num of numMap1.keys()) {
    if (numMap2.get(num) !== numMap1.get(num)) return false;
  }
  return true;
}

module.exports = { sameFrequency };
