/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
  
    const n = heights.length;
    let res = 0;
    for(let i = 0; i < n; i++){
        let minBar = heights[i]
        for(let j = i; j >= 0; j--){
            const len = i - j + 1;
            minBar = Math.min(minBar, heights[j])
            res = Math.max(res, minBar * len)
        }
    }
    
    return res;
};