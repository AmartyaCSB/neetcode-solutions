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
     * @param {number} k
     * @return {number}
     */

    //iterative approach
    kthSmallest(root, k){
        let stack = [];
        let count = 0;
        let current = root;
        while(current !== null || stack.length !== 0)
        {
            while (current !== null)
            {   stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            count++;
            if(count === k)
            {
                return current.val;
            }
            current = current.right;
        }
    }


    //recursive approach
    // answer = 0;
    // count = 0;
    // kthSmallest(root, k){
    //     this.dfs(root, k);
    //     return this.answer;
    // }

    //  dfs(root, k) {
    //         if(root === null)
    //             return false;
    //         if(this.dfs(root.left, k))
    //             return true;
    //         this.count++;
    //         if(this.count === k)
    //         {
    //             this.answer = root.val;
    //             return true;
    //         }
    //         if(this.dfs(root.right, k))
    //             return true;

    //         return false;
    //     }
}
