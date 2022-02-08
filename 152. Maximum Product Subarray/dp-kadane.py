class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        (gMin, gMax) = (nums[0], nums[0])
        res = nums[0];
        
        for i in range(1, len(nums)):
            num = nums[i]
            (gMin, gMax) = (
                min(num, gMin * num, gMax * num),
                max(num, gMax * num, gMin * num)
            )
            res = max(res, gMax)
            
        return res;
