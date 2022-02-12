class Solution {
    public int findLength(int[] nums1, int[] nums2) {
        
        int[][] dp = new int[nums1.length][nums2.length];
        
        int max = 0;
        
        for(int y = 0; y < nums1.length; y++){
            for(int x = 0; x < nums2.length; x++){
                if(nums1[y] == nums2[x]){
                    if(y > 0 && x > 0){
                        dp[y][x] = 1 + dp[y-1][x-1];
                    }else{
                        dp[y][x] = 1;
                    }
                    max = Math.max(max, dp[y][x]);
                }else{
                    dp[y][x] = 0;
                }
            }
        }
        
        return max;
    }
}