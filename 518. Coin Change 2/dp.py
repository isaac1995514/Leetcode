class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        dp = [[0 for j in range(amount+1)] for i in range(len(coins))];
        
        for i in range(len(coins)):
            for j in range(amount + 1):
                if j == 0:
                    dp[i][j] = 1;
                else:
                    coin = coins[i];
                    top = dp[i-1][j] if i > 0 else 0
                    left = dp[i][j - coin] if j - coin >= 0 else 0;
                    dp[i][j] = top + left;
       
        return dp[len(coins) - 1][amount]