/**
 * @param {number[]} rating
 * @return {number}
 */
 var numTeams = function(rating) {
        
    const n = rating.length;
    const smaller = [...Array(n)].fill(0), greater = [...Array(n)].fill(0);
    let res = 0;
    // Using i as last integer in the subset
    for(let i = 0; i < n; i++){
        
        // Check all element on its left
        for(let j = 0; j < i; j++){
            // For element smaller than i, j, a new subset can be form with any number smaller than j
            if(rating[j] < rating[i]){
                smaller[i]++;
                res += smaller[j];
                
            }
            // For element greater than i, j, a new subset can be form with any number greater than j
            if(rating[j] > rating[i]){
                greater[i]++;
                res += greater[j];
            }
        }
    }
    
    return res;
    
};