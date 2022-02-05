class Solution:
    
    def helper(self, s, i, j):
        left, right = i, j;
        N = len(s)
        count = 0;
        while left >= 0 and right < N and s[left] == s[right]:
            count+=1;
            left-=1;
            right+=1;
        
        return count;
    
    def countSubstrings(self, s: str) -> int:
        N = len(s);
        count = 0;
        for i in range(N):
            count += self.helper(s, i, i);
            if i > 0:
                count += self.helper(s, i - 1, i);
            
        return count;
        