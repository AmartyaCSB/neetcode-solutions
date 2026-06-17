class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        size = len(matrix)
        for j in range(size):
            for i in range(j+1,size):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

        for y,_ in enumerate(matrix):
            matrix[y].reverse()
        return None
