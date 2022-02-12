class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        H, W = len(grid), len(grid[0])
        for y in range(H):
            for x in range(W):
                if y == 0 and x == 0:
                    continue;
                else:
                    cost = grid[y][x]
                    left = (cost + grid[y-1][x]) if y > 0 else sys.maxsize
                    right = (cost + grid[y][x-1]) if x > 0 else sys.maxsize
                    
                    grid[y][x] = min(left, right)
        
        return grid[H-1][W-1];
        
        