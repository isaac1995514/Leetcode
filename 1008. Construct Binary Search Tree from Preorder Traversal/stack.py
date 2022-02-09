# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def bstFromPreorder(self, preorder: List[int]) -> Optional[TreeNode]:
        stack = [];
        res = None;
        for num in preorder:
            node = TreeNode(num);
            
            if len(stack) == 0:
                stack.append(node);
                res = node;
            elif len(stack) > 0 and num < stack[-1].val:
                stack[-1].left = node;
                stack.append(node)
            else:
                last = None
                while len(stack) > 0 and num > stack[-1].val:
                    last = stack.pop();
                last.right = node;
                stack.append(node)
        return res;