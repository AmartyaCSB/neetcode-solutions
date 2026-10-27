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
    rightSideView(root) {
        //initialize queue and result
        let result = [];
        let queue = new Queue();
        queue.push(root);
        //capture current level
        while(!queue.isEmpty()) {
            let qLen = queue.size();
            let rightView = null;
            for(let i =0; i < qLen; i++)
            {
                //Process each node and record the last one.
                const node = queue.pop();
                if(node){
                    rightView = node;
                    queue.push(node.left);
                    queue.push(node.right);
                }
            }
            if(rightView) {
                result.push(rightView.val);
            }
        }
        return result;
    }
}
