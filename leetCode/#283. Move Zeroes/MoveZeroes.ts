/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    if (nums[left] == 0 && nums[right] !== 0) {
      let temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;

      left++;
    } else if (nums[left] !== 0) {
      left++;
    }
    right++;
  }
}

