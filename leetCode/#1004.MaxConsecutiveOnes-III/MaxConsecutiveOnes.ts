function longestOnes(nums: number[], k: number): number {
  let left = 0;
  let right = 0;
  let max = 0;

  while (right < nums.length) {
    if (nums[right] === 0) k--;

    if (k < 0) {
      if (nums[left] === 0) {
        k++;
      }
      left++;
    } else {
      max = Math.max(max, right - left + 1);
    }

    right++;
  }
  return max;
}
