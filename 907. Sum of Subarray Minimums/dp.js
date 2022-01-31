/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumSubarrayMins = function(arr) {
    
    const lastSmaller = [];
    const stack = [];
    const n = arr.length;
    const mod = Math.pow(10, 9) + 7
    
    const top = () => stack[stack.length - 1];
    
    // Usinig monotonic stack, find the last smaller number
    for(let i = 0; i < n; i++){
        while(stack.length && arr[top()] >= arr[i]) stack.pop();
        
        if(stack.length){
            lastSmaller[i] = top();
        }else{
            lastSmaller[i] = -1;
        }
        
        stack.push(i)
    }
    
    const dp = [...Array(n)].fill(0);
    
    for(let i = 0; i < n; i++){
        if(lastSmaller[i] === -1){
            const len = i - 0 + 1;
            dp[i] = (arr[i] * len) % mod;
        // There is some smaller number in front of this current number
        }else{
            // Find the length from i to lastSmaller + 1;
            const lenWithI = i - lastSmaller[i];
            dp[i] = (dp[lastSmaller[i]] + (lenWithI * arr[i])) % mod;
        }
    }
    
    return dp.reduce((acc, num) => acc + num, 0) % mod;
};