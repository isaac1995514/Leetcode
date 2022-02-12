class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        freq = {}
        for num in nums:
            freq[num] = freq.get(num, 0) + 1;
        
        keys = sorted(freq.keys())
        n = len(keys)
        
        dp = [0 for i in range(n+1)];
                
        for i in range(0, n):
            p = i + 1
            num = keys[i]
            take = num * freq[num]
            if i == 0:
                dp[p] = take
            else:
                dp[p] = max(
                    dp[p-1],
                    take + (dp[p-2] if keys[i] - 1 == keys[i-1] else dp[p-1])
                )
        return dp[n];
            
        