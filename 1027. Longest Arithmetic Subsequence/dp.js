/**
 * T: O(N^2), S: O(N^2)
 * @param {number[]} nums
 * @return {number}
 */
 var longestArithSeqLength = function(nums) {
    
    const n = nums.length;
    const dp = [...Array(n)].map(x => new Map());
    let max = 0;
    
    for(let i = 1; i < n; i++){
        for(let j = 0; j < i; j++){
            const diff = nums[i] - nums[j];
            dp[i].set(diff, 1 + (dp[j].get(diff) || 1))
            
            max = Math.max(max, dp[i].get(diff))
        }
    }
    
    return max;
    
 }