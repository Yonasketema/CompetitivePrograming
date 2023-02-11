function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let result = [];
  for (let num of nums1) {
    let flag = -1;
    for (let i = nums2.indexOf(num) + 1; i < nums2.length; i++) {
      if (nums2[i] > num) {
        flag = nums2[i];
        break;
      }
    }
    result.push(flag);
  }
  return result;
}
