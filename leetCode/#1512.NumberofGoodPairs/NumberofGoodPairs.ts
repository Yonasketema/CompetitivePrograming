/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let goodpair = 0;
  let map = {};
  let i = 0;

  while (i < nums.length) {
    if (map[nums[i]]) {
      goodpair += map[nums[i]];
      map[nums[i]] = map[nums[i]] + 1;
    } else {
      map[nums[i]] = 1;
    }

    i++;
  }
  return goodpair;
};
