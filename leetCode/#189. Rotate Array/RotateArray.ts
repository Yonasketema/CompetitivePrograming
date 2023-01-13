/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  //    Space complexity: O(N)
  let copyNums: Array<number> = [...nums];

  for (let i = 0; i < copyNums.length; i++) {
    if (i + k > copyNums.length - 1) {
      nums[(i + k) % copyNums.length] = copyNums[i];
    } else {
      nums[i + k] = copyNums[i];
    }
  }
}

