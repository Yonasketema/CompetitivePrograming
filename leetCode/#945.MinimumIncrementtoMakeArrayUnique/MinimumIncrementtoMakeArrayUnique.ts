function minIncrementForUnique(nums: number[]): number {
  let minmov = 0;
  let numsorted = nums.sort((a, b) => a - b);
  let l = 0;
  let r = 1;

  while (r < nums.length) {
    if (numsorted[l] === numsorted[r]) {
      minmov++;
      numsorted[r] = numsorted[r] + 1;
    } else if (numsorted[l] > numsorted[r]) {
      let move = numsorted[l] - numsorted[r] + 1;
      minmov += move;
      numsorted[r] = numsorted[r] + move;
    }
    l++;
    r++;
  }

  return minmov;
}
