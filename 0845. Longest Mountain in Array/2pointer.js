/**
 * @param {number[]} arr
 * @return {number}
 */
 var longestMountain = function(arr) {
    
    const n = arr.length;
    let l = 0, r = 1;
    let res = 0;
    
    if(n < 3) return 0;
    
    while(r < n){
        // If r and r - 1 is equal, move to next pair
        if(arr[r] === arr[r - 1]){
            l = r;
            r++
        // If r is decreasing, move to next pair
        }else if(arr[r] < arr[r - 1]){
            l = r;
            r++;
        // If r is increasing, start building the mountain
        }else if(arr[r] > arr[r - 1]){
            
            // Builds up
            while(r < n && arr[r] > arr[r - 1]){
                r++;
            }
            
            // Builds down
            while(r < n && arr[r] < arr[r - 1]){
                // Only record the length when building down
                // Since it is possible there is only an uphill
                res = Math.max(res, r - l + 1)
                r++;
            }
            
            // Reset left bound;
            l = r - 1;
        }
    }
    
    return res;
    
};