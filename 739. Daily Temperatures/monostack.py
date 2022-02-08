class Solution:
    def dailyTemperatures(self, temp: List[int]) -> List[int]:
        n = len(temp);
        res = [0] * n;
        stack = []
        
        for i in range(n):
            while len(stack) > 0 and temp[stack[-1]] < temp[i]:
                day = stack.pop();
                res[day] = i - day;
            stack.append(i)
            
        return res;