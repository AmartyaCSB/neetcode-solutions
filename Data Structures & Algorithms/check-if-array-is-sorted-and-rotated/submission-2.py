class Solution:
    def check(self, nums: List[int]) -> bool:
        change = 0
        for i in range(len(nums)):
            if nums[i] < nums[i-1]:
                change+=1
        return change < 2
                