class Solution:
    def numSquares(self, n: int) -> int:
        dp = [sys.maxsize] * (n + 1);
        dp[0] = 0
        
        max = int(math.sqrt(n)) + 1
        # Doing this in nested arr cost a lot of memory
        square = [i**2 for i in range(1, max)];
        
        for i in range(n+1):
            max = int(math.sqrt(i))
            for sq in square:
                if i - sq < 0:
                    break;
                dp[i] = min(dp[i], dp[i - sq] + 1)
        
        return dp[n]
            
        
                
            
        