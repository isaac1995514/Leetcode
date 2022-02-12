/**
 * This algorithm calculates the total satisifed customer in normal flow.
 * For each for the window in size k, it removes the normal satisifed customer in that window,
 * and add the total possible satisifed customer for that window to find the max
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
 var maxSatisfied = function(cus, gru, k) {
 
    let total = 0;
    const n = cus.length;
    for(let i = 0; i < n; i++){
        if(gru[i] === 0){
            total += cus[i]
        }
    }
    
    let normal = 0;
    let window = 0;
    let res = 0;
    for(let l = 0, r = 0; r < n; r++){
        window += cus[r]
        
        if(gru[r] === 0){
            normal += cus[r]
        }
            
        if(r - l + 1 > k){
            window -= cus[l]
            
            if(gru[l] === 0){
                normal -= cus[l]
            }
            l++;
        }
        
        if(r - l + 1 === k){
            const curr = total - normal + window;
            res = Math.max(res, curr)
        }
    }
    
    return res;
}