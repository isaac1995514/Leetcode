class Solution {
    public int uniquePathsWithObstacles(int[][] grid) {
        
        int H = grid.length, W = grid[0].length;
        
        int[][] dp = new int[H][W];
        
        for(int y = 0; y < H; y++){
            for(int x = 0; x < W; x++){
                if(y == 0 && x == 0 && grid[y][x] != 1){
                    dp[0][0] = 1;
                    continue;
                }
                dp[y][x] = 0;
                if(grid[y][x] == 1) continue;
                
                if(y != 0) dp[y][x] += dp[y-1][x];
                if(x != 0) dp[y][x] += dp[y][x-1];
            }
        }
        
        return dp[H-1][W-1];
    }
}