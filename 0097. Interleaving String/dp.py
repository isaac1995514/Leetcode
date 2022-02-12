class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        N = len(s1)
        M = len(s2)
        dp = [[False for j in range(M+1)] for i in range(N+1)];
        dp[0][0] = True;
        
        if N + M != len(s3):
            return False;
        
        for i in range(N+1):
            for j in range(M+1):
                length = i + j
                p = length - 1;
                
                if i > 0:
                    if s1[i-1] == s3[p]:
                        dp[i][j] = dp[i-1][j] or dp[i][j]
                
                if j > 0:
                    if s2[j-1] == s3[p]:
                        dp[i][j] = dp[i][j-1] or dp[i][j]
                       
        
        return dp[N][M]
        