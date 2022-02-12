/**
 * This algorithm calculate the maximum different of the each window
 * similar to opt 1, it finds the customer that is satisifed with the technique - customer that is satisifed
 * without the techinuqe, then record the max of such difference.
 * Then answer if the total + the max different (max gain customer)
 * @param {*} cus 
 * @param {*} gru 
 * @param {*} k 
 * @returns 
 */
var maxSatisfied = function(cus, gru, k) {
 
    let total = 0;
    const n = cus.length;
    let min = 0, max = 0;
    let res = 0;
    for(let l = 0, r = 0; r < n; r++){
        max += cus[r];
        
        if(gru[r] === 0){
            min += cus[r]
            total += cus[r]
        }
        
        if(r - l + 1 > k){
            max -= cus[l];
            
            if(gru[l] === 0){
                min -= cus[l]
            }
            l++
        }
        
        if(r - l + 1 === k){
            res = Math.max(res, max - min)
        }
    }
    
    return total + res;
}