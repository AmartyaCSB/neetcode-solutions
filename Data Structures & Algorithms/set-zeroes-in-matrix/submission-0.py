class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        r,c = len(matrix), len(matrix[0])
        index = []
        for i in range(r):
            for j in range(c):
                if matrix[i][j] == 0:
                    index.append((i,j))
        for r,c in index:
            matrix[r] = [0] * len(matrix[r])
            for row in matrix:
                row[c] = 0
        