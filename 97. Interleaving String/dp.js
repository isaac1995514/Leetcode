/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
 var isInterleave = function(s1, s2, s3) {

    const N = s1.length, M = s2.length
    const dp = [...Array(N+1)].map(x => [...Array(M+1)].fill(false));
    dp[0][0] = true;    
    
    if(N + M < s3.length) return false;
    
    for(let i = 0; i <= N; i++){
        for(let j = 0; j <= M; j++){
            const len = i + j; // Total characters used
            const p = len - 1;
            
            // If i > 0, we look at the top
            if(i > 0){
                if(s1[i - 1] === s3[p]){
                    dp[i][j] = dp[i-1][j] || dp[i][j]
                }
            }
            
            // If j > 0, we look at the left
            if(j > 0){
                if(s2[j - 1] === s3[p]){
                    dp[i][j] = dp[i][j-1] || dp[i][j]
                }
            }
        }
    }
    
    return dp[N][M]
};