// add whatever parameters you deem necessary
function averagePair(nums, average) {
  if (nums.length < 2) return false;
  if (nums[0] > average || nums[length - 1] < average) return false;

  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const avg = (nums[left] + nums[right]) / 2;
    if (avg === average) return true;
    if (avg < average) left++;
    if (avg > average) right--;
  }
  return false;
}

module.exports = { averagePair };
