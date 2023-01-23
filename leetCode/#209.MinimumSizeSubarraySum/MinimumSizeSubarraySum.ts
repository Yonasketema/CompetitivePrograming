function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let right = 0;
  let sum = 0;
  let minlen = Number.MAX_SAFE_INTEGER;

  while (right < nums.length) {
    sum += nums[right];

    if (sum >= target) {
      while (sum >= target) {
        sum -= nums[left++];
      }

      minlen = Math.min(minlen, right - left + 2);
    }
    right++;
  }

  return minlen === Number.MAX_SAFE_INTEGER ? 0 : minlen;
}
