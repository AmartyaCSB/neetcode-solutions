class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let start = 0;
        for(let end=0; end < nums.length;end++)
        {
            if(nums[end] !== val)
            {
                nums[start++] = nums[end];
            }
        }
        return start;
    }
}
