/**
 * @param {number[]} stones
 * @return {number[]}
 */
 var numMovesStonesII = function(stones) {
    
    // Keep track of the number of stones in the window
    let left = Infinity, right = -Infinity, k = stones.length;
    const set = new Set(stones);
    for(const idx of stones){
        left = Math.min(left, idx)
        right = Math.max(right, idx)
    }
    const n = right - left + 1;    
    
    // Number of stones in the window
    let win = 0;
    let res = [Infinity, -Infinity];
    
    const calc = (slot) => {
        res = [
            Math.min(res[0], slot),
            Math.max(res[1], slot)
        ]
    }
    
    for(let l = left, r = left; r <= right; r++){
        if(set.has(r)){
            win+=1;
        }
        
        if(r - l + 1 > k){
            if(set.has(l)){
                win-=1;
            }
            l++
        }
        
        if(r - l + 1 === k){
            // If the remaining slot in the window [l, r] is greater than 1, it can always be filled
            const slot = k - win;
            if(slot === 0){
                calc(slot)
                
            // There is a single slot and it is not on the left or right bound
            }else if(slot === 1 && set.has(l) && set.has(r)){
                calc(slot)
            }else if(slot > 1){
                calc(slot)
            }
        }
    }
    
    return res;
};