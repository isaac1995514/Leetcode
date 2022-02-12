/**
 * @param {number[]} arr
 * @return {number}
 */
 var maxTurbulenceSize = function(arr) {
    
    // Finding up and down peak
    // arr[i] < arr[i-1] and arr[i-2] < arr[i-1] or arr[i] > arr[i-1] and arr[i-2] > arr[i-1]
    // arr[i] !== arr[i-1], from left pointer to i
    
    const n = arr.length;
    
    if(n < 2) return n;
    
    let res = 1;
    
    for(let l = 0, r = 1; r < arr.length; r++){
        if(arr[r] === arr[r - 1]){
            l = r
        }else{
            if(r > 1){
                const downwardPeak = arr[r] > arr[r-1] && arr[r-2] > arr[r-1]
                const upwardPeak = arr[r] < arr[r-1] && arr[r-2] < arr[r-1]
                
                if(!downwardPeak && !upwardPeak) l = r - 1
            }
            
            res = Math.max(res, r - l + 1)
        }
    }
    
    return res;
};