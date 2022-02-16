/**
 * @param {string} s
 * @return {number}
 */
 var minSwaps = function(s) {
  
    // Observation 1: when there is a close bracket with no open bracket in the front of it, there is one in the back. Swapping them will make the str balance no matter whats in the middle
    // Observation 2: where there are 2+ close bracket with no open brackets in front of it, swapping an open and a close bracket with create 2 balance pair.
    
    let close = 0;
    let balance = 0;
    
    for(const ch of s){
        balance += (ch === '[' ? 1 : -1);
        
        if(balance < 0){
            close+=1;
            balance = 0;
        }
    }
    
    return Math.floor(close / 2) + close % 2
    
};