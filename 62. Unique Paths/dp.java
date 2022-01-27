class Solution {
    public int uniquePaths(int m, int n) {
        
        int[][] dp = new int[m][n];
        dp[0][0] = 1;
        
        for(int y = 0; y < m; y++){
            for(int x = 0; x < n; x++){
                if(y == 0 && x == 0) continue;
                
                dp[y][x] = 0;
                
                if(y > 0) dp[y][x] += dp[y-1][x];
                if(x > 0) dp[y][x] += dp[y][x-1];
            }
        }
        
        return dp[m-1][n-1];
    }
}