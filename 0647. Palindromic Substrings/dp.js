/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
  
    let res = 0;
    const n = s.length;
    const dp = [...Array(n)].map(x => [...Array(n)].fill(false))
    
    // Precompute i + 1, j - 1
    for(let i = n - 1; i >= 0; i--){
        for(let j = i; j < n; j++){
            if(i === j) dp[i][j] = true;
            else if(s[i] === s[j]) {
                dp[i][j] = (i + 1 === j) ? true : dp[i+1][j-1]
            }
            
            if(dp[i][j]) res++;
        }
    }
    
    return res;
};