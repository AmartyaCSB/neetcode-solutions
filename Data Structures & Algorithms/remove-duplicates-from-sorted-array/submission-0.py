class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        l = 0
        set_nums = set()
        for r in range(len(nums)):
            if nums[r] not in set_nums:
                set_nums.add(nums[r])
                nums[l] = nums[r]
                l+=1
        return len(set_nums)