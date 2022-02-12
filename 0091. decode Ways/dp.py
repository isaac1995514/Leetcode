class Solution:
    def numDecodings(self, s: str) -> int:
        n = len(s)
        dp = [0 for i in range(n + 1)];
        dp[n] = 1;
        
        for i in reversed(range(n)):
            one = int(s[i: i+1])
            if one >= 1 and one <= 9:
                dp[i] += dp[i+1];
                
            if i < n - 1:
                two = int(s[i: i+2])
                if two >= 10 and two <= 26:
                    dp[i] += dp[i+2];
        
        return dp[0]