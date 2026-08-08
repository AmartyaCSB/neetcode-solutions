class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        for(let i = 0; i < operations.length; i++)
        {
            if(operations[i] === "+")
            {
                let top = stack.pop();
                let sum = top + stack[stack.length-1];
                stack.push(top);
                stack.push(sum);
            }
            else if(operations[i] === "D")
            {
                let num = stack[stack.length-1];
                stack.push(2*num);
            }
            else if (operations[i] === "C")
            {
                stack.pop();
            }
            else
            {
                stack.push(parseInt(operations[i]));
            }
        }
        let ans = stack.reduce((sum, val) => sum+val, 0);
        return ans;
    }
}
