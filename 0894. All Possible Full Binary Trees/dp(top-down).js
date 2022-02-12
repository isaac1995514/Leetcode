/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var allPossibleFBT = function(n) {
    
    if(n % 2 === 0) return [];
    if(n === 0) return [];
    
    const dp = [...Array(n+1)].map(x => []);
    dp[1] = [new TreeNode(0)]
    
    for(let i = 3; i <= n; i++){
        if(i % 2 === 0) continue;
        for(let j = 1; j < i; j++){
            const leftSize = i - 1 - j;
            const rightSize = i - 1 - leftSize;
            for(const left of dp[leftSize]){
                for(const right of dp[rightSize]){
                    const root = new TreeNode(0)
                    root.left = left;
                    root.right = right;
                    dp[i].push(root)
                }
            }
            
        }
    }
    
    return dp[n]
};