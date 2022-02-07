/**
 * O(N ^ 2) is still to slow
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
 var maxTaxiEarnings = function(n, rides) {
    rides.sort((a, b) => {
        if(a[0] === b[0]) return a[1] - b[1];
        else return a[0] - b[0]
    })
    
    const N = rides.length;
    const dp = [...Array(N)].fill(0);
    
    let max = 0;
    
    for(let i = 0; i < N ; i++){
        const ride = rides[i]
        const gain = ride[1] - ride[0] + ride[2];
        
        let maxGain = gain;
        for(let j = 0; j < i; j++){
            const prev = rides[j]
            // If there is a ride in the front that ends before I start or when I start
            if(prev[1] <= ride[0]){
                maxGain = Math.max(
                    maxGain,
                    gain + dp[j]
                )
            }
        }
        dp[i] = maxGain;
        max = Math.max(max, dp[i]);
    }
    
    return max;
    
};