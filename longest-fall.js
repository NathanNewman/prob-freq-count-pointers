// add whatever parameters you deem necessary
function longestFall(nums) {
  let longest = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) count++;
    if (nums[i] < nums[i + 1]) count = 0;
    if (count > longest) longest = count;
  }
  return longest;
}

module.exports = { longestFall };
