# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        # 中間順序（inorder）の問題
        # 左->真ん中->右
        def inorder(node):
            if node:
                inorder(node.left)  # 左の子ノードを巡回
                result.append(node.val)  # 自分自身の値を追加
                inorder(node.right)  # 右の子ノードを巡回
        inorder(root)
        return result
        