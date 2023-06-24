// function for counting the occurences of letters
function frequencyCounter(string) {
  let frequencies = new Map();

  for (let val of string) {
    if (val !== " ") {
      let valCount = frequencies.get(val) || 0;
      frequencies.set(val, valCount + 1);
    }
  }
  return frequencies;
}

// add whatever parameters you deem necessary
function constructNote(message, letters) {
  if (message.length === 0) return true;
  if (letters.length === 0) return false;
  const messageMap = frequencyCounter(message);
  const lettersMap = frequencyCounter(letters);
  if (messageMap.size > lettersMap.size) return false;
  for (let letter of messageMap.keys()) {
    if (lettersMap.get(letter) < messageMap.get(letter)) return false;
  }
  return true;
}

module.exports = { constructNote, frequencyCounter };
