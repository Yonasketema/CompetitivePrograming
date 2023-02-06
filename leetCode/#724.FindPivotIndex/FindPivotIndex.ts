function pivotIndex(nums: number[]): number {
  let total = 0
  for (let i =0;i < nums.length;i++){
      total +=nums[i]
  }
  let leftsum = 0
   for (let i =0;i < nums.length;i++){
     let rightsum = total - nums[i] - leftsum
     if (leftsum === rightsum){
         return i
     }
     leftsum +=nums[i]
  }
  return -1
};