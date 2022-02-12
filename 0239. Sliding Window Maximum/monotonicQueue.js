/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
   
    const queue = [];
    const n = nums.length;
    
    const last = () => queue[queue.length - 1]
    const first = () => queue[0]
    const res = [];
    
    for(let i = 0; i < n; i++){
        while(queue.length && nums[last()] < nums[i]) queue.pop();
        while(queue.length && first() < i - k + 1) queue.shift();
        queue.push(i)
        
        if(i - k + 1 >= 0){
            res.push(nums[first()])
        }
    }
    
    return res;
    
};