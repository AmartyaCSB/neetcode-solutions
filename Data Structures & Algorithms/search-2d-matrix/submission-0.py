class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        l=0
        r=len(matrix) - 1
        while l<=r:
            mid = (l+r)//2
            if matrix[mid][0] == target:
                return True
            elif matrix[mid][0] > target:
                r = mid-1
            else:
                l=mid+1
        row = r
        if row < 0:
            return False
        left = 0
        right = len(matrix[0]) - 1
        while left<=right:
            mid = (left+right)//2
            if matrix[row][mid] == target:
                return True
            elif matrix[row][mid] > target:
                right = mid-1
            else:
                left=mid+1
        return False