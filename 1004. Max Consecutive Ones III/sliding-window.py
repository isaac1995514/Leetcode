class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        ones = 0
        res = 0

        l = 0;
        for r in range(len(nums)):
            ones += nums[r];
            
            while r - l + 1 - ones > k:
                ones -= nums[l]
                l+=1;
            
            res = max(res, r - l + 1)
        
        return res;
        