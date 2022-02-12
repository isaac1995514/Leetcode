/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {

    let n = nums1.length, m = nums2.length;
    const dp = [...Array(n)].map(val => [...Array(m)].fill(0))
    
    let max = 0;
    for(let y = 0; y < n; y++){
        for(let x = 0; x < m; x++){
            if(nums1[y] === nums2[x]){
                dp[y][x] = 1 + (y > 0 && x > 0 ? dp[y-1][x-1] : 0)
                max = Math.max(max, dp[y][x])
            }
        }
    }
    
    return max;
};