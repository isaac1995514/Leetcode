/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
 var longestSubarray = function(nums, limit) {
    
    const minQueue = [], maxQueue = []
    const n = nums.length;

    const last = (dq) => dq[dq.length - 1];
    const first = (dq) => dq[0]
    let res = 0;
    
    for(let i = 0, j = 0; i < n; i++){
        while(minQueue.length && nums[last(minQueue)] > nums[i]) minQueue.pop();
        while(maxQueue.length && nums[last(maxQueue)] < nums[i]) maxQueue.pop();
        
        minQueue.push(i);
        maxQueue.push(i);

        while(j < i && Math.abs(nums[first(maxQueue)] - nums[first(minQueue)]) > limit){
            while(minQueue.length && first(minQueue) <= j) minQueue.shift()
            while(maxQueue.length && first(maxQueue) <= j) maxQueue.shift()
            j++
        }
        
        res = Math.max(res, i - j + 1);
    }    
    
    return res;
};