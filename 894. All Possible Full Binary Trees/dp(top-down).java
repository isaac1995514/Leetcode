/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<TreeNode> allPossibleFBT(int n) {
        
        Map<Integer, List<TreeNode>> memo = new HashMap<>();
        return build(n, memo);
        
    }
    
    public List<TreeNode> build(int n, Map<Integer, List<TreeNode>> memo){
        
        if(memo.containsKey(n)) return memo.get(n);
        
        List<TreeNode> res = new ArrayList<TreeNode>();

        if(n == 1){
            res.add(new TreeNode(0));
            return res;
        }
        
        for(int i = 1; i < n - 1; i++){
            if(i % 2 == 0) continue;
            int rightCount = n - i - 1;
            List<TreeNode> left = build(i, memo);
            List<TreeNode> right = build(rightCount, memo);
            for(TreeNode lNode: left){
                for(TreeNode rNode: right){
                    TreeNode root = new TreeNode(0, lNode, rNode);
                    res.add(root);
                }
            }
        }
        
        memo.put(n, res);
        return memo.get(n);
    }
}