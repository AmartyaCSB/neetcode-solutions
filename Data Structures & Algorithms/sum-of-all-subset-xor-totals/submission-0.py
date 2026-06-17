class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        if not nums:
            return 0
        res = 0
        for num in nums:
            res |= num
        return res << (len(nums)-1)