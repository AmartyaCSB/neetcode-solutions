class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        //create a copy of nums 1 till m elements
        const nums1Copy = nums1.slice(0,m);
         // use 3 pointers for merge
        let idx=0 , i=0 ,j=0;
        //compare and write smaller one
        while(idx < (m+n))
        {
              // increment pointer and continue until all elements are placed
            if(j >= n || (i < m && nums1Copy[i] <= nums2[j]))
            {
                nums1[idx] = nums1Copy[i];
                i++;
            }
            else
            {
                nums1[idx] = nums2[j];
                j++;
            }
            idx++;
        }
    }
}
