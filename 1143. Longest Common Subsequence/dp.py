class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        N, M = len(text1), len(text2)
        dp = [[0 for x in range(M+1)] for y in range(N+1)];
        
        for y in range(0, N):
            for x in range(0, M):
                if text1[y] == text2[x]:
                    dp[y+1][x+1] = 1 + dp[y][x]
                else:
                    dp[y+1][x+1] = max(
                        dp[y+1][x],
                        dp[y][x+1]
                    )
        
        print(dp)
                
        return dp[N][M]
        
        