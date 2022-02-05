class Solution:
    def countSquares(self, grid: List[List[int]]) -> int:
        H, W = len(grid), len(grid[0])
        dp = [[0 for x in range(W)] for y in range(H)];
        res = 0
        
        for y in range(H):
            for x in range(W):
                if grid[y][x] == 1:
                    if(y == 0 or x == 0):
                        dp[y][x] = 1
                    else:
                        dp[y][x] = min(
                            dp[y-1][x],
                            dp[y][x-1],
                            dp[y-1][x-1]
                        ) + 1
                        
                    res += dp[y][x]
        
        return res;
        