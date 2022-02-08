class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        N = len(nums);
        res = [-1] * N;
        stack = [];

        for i in reversed(range(2 * N - 1)):
            idx = i % N;
            
            while len(stack) > 0 and nums[stack[-1]] <= nums[idx]:
                stack.pop();
                
            if i < N and len(stack) > 0:
                res[i] = nums[stack[-1]];
            
            stack.append(idx);
        
        return res;