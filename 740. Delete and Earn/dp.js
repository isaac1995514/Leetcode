/**
 * @param {number[]} nums
 * @return {number}
 */
 var deleteAndEarn = function(nums) {
  
    const freq = new Map();
    for(const num of nums){
        freq.set(num, 1 + (freq.get(num) || 0));
    }

    const set = new Set(nums);
    const unique = [...set.keys()].sort((a, b) => a - b);
    const n = unique.length;
    const dp = [...Array(n+1)].fill(0);
    dp[1] = unique[0] * freq.get(unique[0]);
    
    for(let i = 1; i < n; i++){
        const dpIdx = i + 1;
        
        const lastValid = (unique[i-1] + 1 === unique[i]) ? dpIdx - 2 : dpIdx - 1;
        
        dp[dpIdx] = Math.max(
            dp[dpIdx - 1],
            unique[i] * freq.get(unique[i]) + dp[lastValid]
        )
    }
    
    return dp[n];
};