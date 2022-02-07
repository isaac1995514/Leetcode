class Solution:
    def longestArithSeqLength(self, nums: List[int]) -> int:
        N = len(nums)
        dp = [{} for i in range(N)]
        res = 0
        
        for i in range(1, N):
            for j in range(i):
                diff = nums[i] - nums[j]
                dp[i][diff] = 1 + dp[j].get(diff, 1)
                res = max(res, dp[i][diff])
                
        return res;
        