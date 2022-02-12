/**
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function(fruits) {
    
    const map = new Map();
    let n = fruits.length;
    let res = 1;
    
    for(let l = 0, r = 0; r < n; r++){
        map.set(fruits[r], 1 + (map.get(fruits[r]) || 0));
        
        while(map.size > 2){
            map.set(fruits[l], (map.get(fruits[l]) - 1));
            
            if(map.get(fruits[l]) === 0){
                map.delete(fruits[l])
            }
            l++
        }
        res = Math.max(res, r - l + 1);
    }
    
    return res;
    
};