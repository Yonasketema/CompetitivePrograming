function searchInsert(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length;

  do {
    const mid = Math.floor(low + (high - low) / 2);
    const midValue = nums[mid];

    if (low == high) {
      if (nums[high] < target) {
        return high + 1;
      } else {
        return high;
      }
    }

    if (midValue === target) {
      return mid;
    } else if (midValue > target) {
      high = mid - 1;
    } else {
      //(midValue <  target)
      low = mid + 1;
    }
  } while (low <= high);

  return low;
}
