class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        dq = deque();
        res = [];
        
        for i, n in enumerate(nums):
            while len(dq) > 0 and nums[dq[-1]] < n:
                dq.pop();
            while len(dq) > 0 and dq[0] < i - k + 1:
                dq.popleft();
            
            dq.append(i)
    
            if i - k + 1 >= 0:
                res.append(nums[dq[0]])
                
        return res;
            