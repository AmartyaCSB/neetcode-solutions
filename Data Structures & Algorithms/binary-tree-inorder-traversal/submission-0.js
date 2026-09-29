/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root) {
        const result = [];
        this.dfs(root, result);
        return result;
    }

    dfs(root, result) {
        if(!root) return;
        this.dfs(root.left, result);
        result.push(root.val);
        this.dfs(root.right, result);
    }
}
