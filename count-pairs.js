// add whatever parameters you deem necessary
function countPairs(nums, sum) {
  if (nums.length < 2) return 0;

  const numObj = {};
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    const complement = sum - nums[i];
    if (numObj[complement]) {
      counter += numObj[complement];
    }

    if (numObj[nums[i]]) {
      numObj[nums[i]]++;
    } else {
      numObj[nums[i]] = 1;
    }
  }

  return counter;
}

module.exports = { countPairs };
