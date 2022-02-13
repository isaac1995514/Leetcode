/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var longestOnes = function(nums, k) {
    
    let ones = 0;
    const n = nums.length
    let res = 0;
    for(let l = 0, r = 0; r < n; r++){
        ones += nums[r];
        
        while((r - l + 1) - ones > k){
            ones -= nums[l];
            l++
        }
        
        res = Math.max(res, r - l + 1)
    }
    
    return res;
};