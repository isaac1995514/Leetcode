/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
   
    const freq = new Map();
    let res = 0;
    let sum = 0;
    freq.set(0, 1)
    for(const num of nums){
        sum += num;
        const diff = sum - k
        if(freq.has(diff)){
            res += freq.get(diff)
        }
        freq.set(sum, 1 + (freq.get(sum) || 0))
    }
    
    return res;
    
};