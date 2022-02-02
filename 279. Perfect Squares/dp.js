/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
  
    const dp = [...Array(n+1)].fill(Infinity);
    dp[0] = 0;
    
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= Math.floor(Math.sqrt(i)); j++){
            if(i - (j * j) >= 0){
                dp[i] = Math.min(
                    dp[i],
                    dp[i - (j * j)] + 1
                )
            }
        }
    }
    
    return dp[n];
    
};