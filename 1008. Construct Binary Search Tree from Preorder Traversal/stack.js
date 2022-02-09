/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
 var bstFromPreorder = function(preorder) {
    const stack = [];
    let res;
    
    const top = () => stack[stack.length - 1]
    
    for(const num of preorder){
        const node = new TreeNode(num);
    
        if(stack.length === 0){
            stack.push(node);
            res = node;
        }else if(stack.length && num < top().val){
            top().left = node;
            stack.push(node);
        }else{
            let last;
            while(stack.length && num > top().val){
                last = stack.pop();
            }
            last.right = node
            stack.push(node);
        }
    }
    
    return res;
};