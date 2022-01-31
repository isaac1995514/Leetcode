class Solution {
    public int maxProduct(int[] nums) {
        
        int minSoFar = nums[0], maxSoFar = nums[0];
        int max = nums[0];
        for(int i = 1; i < nums.length; i++){
            int num = nums[i];
            int tempMin = Math.min(minSoFar * num, maxSoFar * num);
            int tempMax = Math.max(minSoFar * num, maxSoFar * num);
            minSoFar = Math.min(num, tempMin);
            maxSoFar = Math.max(num, tempMax);
            max = Math.max(maxSoFar, max);
        }
        
        return max;
    }
}