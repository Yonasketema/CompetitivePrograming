function maxSubArray(nums: number[]): number {
  let sum = nums[0];
  let right = 1;
  let maxSum = nums[0];

  while (right < nums.length) {
    if (sum + nums[right] < nums[right]) {
      sum = nums[right];
    } else {
      sum += nums[right];
    }
    right++;
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
}
