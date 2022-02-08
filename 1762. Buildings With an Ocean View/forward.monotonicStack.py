class Solution:
    def findBuildings(self, heights: List[int]) -> List[int]:
        n = len(heights);
        stack = [];
        
        for i in range(n):
            while len(stack) > 0 and heights[stack[-1]] <= heights[i]:
                stack.pop();
            
            stack.append(i)
        
        return stack;
        