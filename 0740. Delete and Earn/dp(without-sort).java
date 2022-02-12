class Solution {
    public int deleteAndEarn(int[] nums) {
        Map<Integer, Integer> freq = new HashMap<>();
        
        int maxNum = Integer.MIN_VALUE;
        
        for(int num: nums){
            freq.put(num, 1 + freq.getOrDefault(num, 0));
            maxNum = Math.max(maxNum, num);
        }
        
        int[] dp = new int[maxNum+1];

        for(int i = 0; i <= maxNum; i++){
            int last = (i > 0) ? dp[i - 1]: 0;
            int prev = i * freq.getOrDefault(i, 0) + (i - 2 < 0 ? 0 : dp[i-2]);
            dp[i] = Math.max(
                last,
                prev
            );
        }
        
        return dp[maxNum];
    }
}