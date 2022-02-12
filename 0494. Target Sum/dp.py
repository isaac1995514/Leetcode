class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        total = sum(nums)
        min, max = total * -1, total
        N = (2 * total + 1)
        prev, curr = [0] * N, [0] * N;
        prev[total] = 1;
        
        if(target < min or target > max):
            return 0;
        
        for num in nums:
            curr = [0] * N;
            for i in range(N):
                val = i - total
                
                if(val - num >= min):
                    idx = val - num + total;
                    curr[i] += prev[idx]
                    
                if(val + num <= max):
                    idx = val + num + total;
                    curr[i] += prev[idx]
            
            prev, curr = curr, prev
        
        return prev[target + total]