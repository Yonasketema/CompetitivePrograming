class Solution:
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
        if len(nums) == 1:
            if target in nums:
                return [0]
            else:
                return []
        else:
            if target in nums:
                nums.sort()
                count = nums.count(target)
                reference = nums.index(target)
                values = [reference]
                for i in range(1, count):
                    reference += 1
                    values += [nums.index(target, reference)]
                return values
            else:
                return []