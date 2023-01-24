function findMaxConsecutiveOnes(nums: number[]): number {
  let i = 0;
  let counter = 0;
  let max = 0;
  while (i < nums.length) {
    if (nums[i] === 1) {
      counter++;
    } else {
      counter = 0;
    }
    max = Math.max(max, counter);
    i++;
  }

  return max;
}
