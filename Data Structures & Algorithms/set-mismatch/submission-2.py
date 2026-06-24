from collections import Counter
class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        counts = Counter(nums)
        dup = -1
        miss = -1
        for i in range(1, len(nums)+1):
            if counts[i]==2:
                dup = i
            if counts[i]==0:
                miss = i
        return [dup, miss]