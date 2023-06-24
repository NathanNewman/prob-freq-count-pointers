// add whatever parameters you deem necessary
function separatePositive(nums) {
  if (!nums) return true;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] < 0 && nums[right] > 0) {
      // Swap positive and negative elements
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    } else {
      if (nums[left] > 0) {
        left++;
      }
      if (nums[right] < 0) {
        right--;
      }
    }
  }

  return nums;
}

module.exports = { separatePositive };
