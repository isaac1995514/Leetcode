/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(cus, gru, k) {
    
    // Keep track of regular satisfaction from 0 to i (Can be done during iteration of window)
    // Precalculate the satisfaction from right to left n to i (right-bound  + 1) keep extra slot in cache array;
    // Run a window for size of minutes
    const n = cus.length;
    const fromRight = [...Array(n+1)].fill(0);
    
    // Construct normal satisfaction from right to left without the technique
    
    for(let i = n - 1; i >= 0; i--){
        fromRight[i] = fromRight[i + 1] + (gru[i] === 0 ? cus[i] : 0);    
    }
        
    let fromLeft = 0;
    let window = 0;
    let res = 0;
    for(let l = 0, r = 0; r < n; r++){
        
        window += cus[r];
        
        if(r - l + 1 > k){
            window -= cus[l];
            fromLeft += (gru[l] === 0 ? cus[l] : 0);
            l++;
        }
        
        if(r - l + 1 === k){
            const curr = fromLeft + window + fromRight[r + 1]
            res = Math.max(res, curr)
        }
    }
    
    return res;
};

/**
    [1,  0, 1, 2, 1, 1, 7, 5]
    [10, 9, 9, 8, 8, 7, 7, 0, 0]
    
    
    window 3
    fromLeft 1
    res 10
*/