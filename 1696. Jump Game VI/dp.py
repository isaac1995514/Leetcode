class Solution:
    def maxResult(self, nums: List[int], k: int) -> int:
        n = len(nums)
        dq = deque()
        dp = [0] * n;
        
        right = n - 1
        for left in reversed(range(n)):
            # Shrink the window until the size is k + 1 (includeing current element)
            while right - left + 1 > k + 1:
                right -= 1;
                while len(dq) > 0 and dq[0] > right:
                    dq.popleft();
                    
            maxVal = dp[dq[0]] if len(dq) > 0 else 0;
            dp[left] = nums[left] + maxVal;

            while(len(dq) > 0 and dp[dq[-1]] <= dp[left]):
                dq.pop();

            dq.append(left)
        
        return dp[0];