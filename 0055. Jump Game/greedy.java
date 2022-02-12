class Solution {
    public boolean canJump(int[] nums) {
        
        int n = nums.length;
        int last = n - 1;
        
        for(int i = n - 1; i >= 0; i--){
            int steps = nums[i];
            // At step i, we want to check if we can step far enough to get to the last (next) position that can reach the ending index.
            if(i + steps >= last){
                last = i;
            }
        }
        
        return last == 0;
    }
}