/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindromeSubseq = function(s) {
    const n = s.length;
    
    const dp = [...Array(n)].map(x => [...Array(n)].fill(0))
    let max = 0
    
    for(let i = n-1; i >= 0; i--){
        for(let j = i; j < n; j++){
            if(i === j){
                dp[i][j] = 1;             
            }else{
                if(s[i] === s[j]){
                    if(i + 1 === j){
                        dp[i][j] = 2
                    }else{
                        dp[i][j] = 2 + dp[i+1][j-1]
                    }
                }else{
                    if(i + 1 === j) dp[i][j] = 1;
                    else dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
                }
            }
            max = Math.max(max, dp[i][j])
        }
    }
    
    return max;
};