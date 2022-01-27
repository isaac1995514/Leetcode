var longestStrChain = function(words) {
    
    const n = words.length;
    
    const isPredecessor = (pre, curr) => {
        
        if(pre.length + 1 !== curr.length) return false;
        
        let p = 0;
        let miss = 0;
        for(const ch of curr){
            if(ch === pre[p]) p++;
            else miss++;
        }
        
        return p === pre.length && miss === 1;
    }
        
    words.sort((a, b) => {
        if(a.length !== b.length) return a.length - b.length;
        else a.localeCompare(b);
    })
    
    const dp = [...Array(n)].fill(1)
    let max = 1;
    
    for(let i = 0; i < n; i++){
        const curr = words[i]
        for(let j = 0; j < i; j++){
            const pre = words[j]
            // Check if the current is a child of the previous str, if so, updat the dp[i] to the maximum of dp[i] (any prev mark down) or
            // the current prev element + 1 (plus itself)
            if(isPredecessor(pre, curr)){
                dp[i] = Math.max(dp[i], dp[j] + 1)
                max = Math.max(max, dp[i])
            }
        }
    }
    
    return max;
    
};