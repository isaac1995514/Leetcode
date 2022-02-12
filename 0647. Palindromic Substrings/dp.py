class Solution:
    def countSubstrings(self, s: str) -> int:
        N = len(s)
        dp = [[False for i in range(N)] for j in range(N)]
        res = 0;
        
        for i in reversed(range(N)):
            for j in range(i, N):
                if i == j:
                    dp[i][i] = True;
                elif s[i] == s[j]:
                    dp[i][j] = True if i + 1 == j else dp[i+1][j-1];
                
                if dp[i][j]:
                    res+=1;
        
        return res;
        