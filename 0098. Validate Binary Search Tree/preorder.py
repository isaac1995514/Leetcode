# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def validate(min, max, r):
            if not r:
                return True; 
            elif not r.left and not r.right:
                return min < r.val and r.val < max;
            else:
                return (min < r.val and r.val < max) and validate(min, r.val, r.left) and validate(r.val, max, r.right)
        
        return validate(-sys.maxsize, sys.maxsize, root)
        