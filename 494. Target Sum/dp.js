/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function(nums, target) {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    let min = -sum, max = sum, N = 2 * sum + 1; // sum = 10, [-10, -1], 0 ,[1, 10]
    let prev = [...Array(N)].fill(0), curr = [...Array(N)].fill(0);
    prev[sum] = 1;
    
    if(target > max || target < min) return 0;
    
    for(const num of nums){
        curr.fill(0);
        for(let i = 0; i < N; i++){
            const val = i - sum;
            
            if(val - num >= min){
                const idx = val - num + sum;
                curr[i] += prev[idx]                
            }
            
            if(val + num <= max){
                const idx = val + num + sum;
                curr[i] += prev[idx]
            }
        }
        
        [prev, curr] = [curr, prev]
    }
    
    
    return prev[target + sum];
};