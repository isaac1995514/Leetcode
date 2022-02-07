/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
 var maxTaxiEarnings = function(n, rides) {

    const endMap = new Map();
    
    for(const ride of rides){
        if(!endMap.has(ride[1])) endMap.set(ride[1], []);
        endMap.get(ride[1]).push(ride);
    }
    
    const dp = [...Array(n + 1)].fill(0);
    
    for(let i = 1; i <= n; i++){
        // If no ride ends at i
        if(!endMap.has(i)) dp[i] = dp[i-1];
        else{
            let max = 0;
            for(const ride of endMap.get(i)){
                const currRideCost = ride[1] - ride[0] + ride[2];
                
                // Current ride gain + the greatest gain up to point (start of current ride)
                max = Math.max(
                    max,
                    currRideCost + dp[ride[0]]
                )
            }
            dp[i] = Math.max(
                dp[i-1],
                max
            )
        }
    }
    
    return dp[n];
    
};