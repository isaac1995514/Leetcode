# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def bstFromPreorder(self, preorder: List[int]) -> Optional[TreeNode]:
        def recursive(start, end):
            if start > end:
                return None;
            elif start == end:
                return TreeNode(preorder[start])
            else:
                root = TreeNode(preorder[start])
                
                # Find the first value greater than root
                firstGreater = -1;
                for i in range(start + 1, end + 1):
                    if preorder[i] > root.val:
                        firstGreater = i;
                        break;
                
                # All elements are greater
                if firstGreater == start + 1:
                    root.right = recursive(start + 1, end)
                # No greater element;
                elif firstGreater == -1:
                    root.left = recursive(start + 1, end);
                else:
                    root.left = recursive(start + 1, firstGreater - 1)
                    root.right = recursive(firstGreater, end)
                    
                return root;
        return recursive(0, len(preorder) - 1)