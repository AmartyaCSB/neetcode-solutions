class Solution:
    def canJump(self, nums: List[int]) -> bool:
        coverage = 0
        for i in range(len(nums)):
            if i > coverage:
                return False
            coverage = max(coverage, i+nums[i])
        return True
            