/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    
    const n = s.length;
    const dp = [...Array(n+1)].fill(0);
    
    // Base Case
    dp[n] = 1;
    
    for(let i = n - 1; i >= 0; i--){
        const one = s.substring(i, i + 1);
        const oneNum = Number.parseInt(one, 10);
        if(oneNum >= 1 && oneNum <= 9){
            dp[i] += dp[i + 1];
        }
        
        
        if(i < n - 1){
            const two = s.substring(i, i + 2);
            const twoNum = Number.parseInt(two, 10);
            
            if(twoNum >= 10 && twoNum <= 26){
                dp[i] += dp[i + 2];
            }
        }
    }
    
    return dp[0];
}; 