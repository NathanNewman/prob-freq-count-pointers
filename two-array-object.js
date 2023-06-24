// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
  const obj = {};
  for (let i = 0; i < keys.length; i++) {
    const value = values[i] ? values[i] : null;
    obj[keys[i]] = value;
  }
  return obj;
}

module.exports = { twoArrayObject };
