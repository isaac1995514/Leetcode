/**
 * The solution uses monotonic queue to keep track on the maximum of the
 * previous k values.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxResult = function(nums, k) {
    
    const n = nums.length;
    const deque = [], dp = [...Array(n)];
    
    const last = () => deque[deque.length - 1];
    const first = () => deque[0];
    
    for(let i = n - 1, j = n - 1; i >= 0; i--){
        // Shrink the window to size k;
        while(j - i + 1 > k + 1){
            j--;
            while(deque.length && first() > j) deque.shift();
        }
        
        // The max of the curr element is dp[i] = nums[i] + max(deque);
        dp[i] = nums[i] + (deque.length > 0 ? dp[first()] : 0);
        
        // Clean up the max for the next iteration
        while(deque.length && dp[last()] <= dp[i]) deque.pop();
        
        deque.push(i);
    }
    
    return dp[0]
};