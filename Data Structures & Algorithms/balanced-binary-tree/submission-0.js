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
     * @return {boolean}
     */
    isBalanced(root) {
        let result = this.dfs(root);
        return result.balance;
    }

    dfs(root) {
        if (root == null)
        {
            return ({height: 0, balance: true});
        }
        let left = this.dfs(root.left);
        let right = this.dfs(root.right);

        let balance = left.balance && right.balance && Math.abs(left.height - right.height) <= 1;

        let height = 1+ Math.max(left.height, right.height);

        return ({height: height, balance: balance});
    }
}
