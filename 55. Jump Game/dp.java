class Solution {
    public boolean canJump(int[] nums) {
        
        int n = nums.length;
        boolean[] dp = new boolean[n];
        Arrays.fill(dp, false);
        dp[n-1] = true;
        
        if(n == 1) return true;
        
        for(int i = n - 2; i >= 0; i--){
            int steps = nums[i];

            for(int j = 1; j <= steps; j++){
                if(i + j < n){
                    dp[i] = dp[i] || dp[i + j];
                    if(dp[i]) break;
                }
            }
        }
        
        return dp[0];
    }
}