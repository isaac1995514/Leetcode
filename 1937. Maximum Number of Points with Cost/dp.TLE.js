/**
 * Time: O(N^3), Space: O(1)
 * @param {number[][]} points
 * @return {number}
 */
 var maxPoints = function(grid) {
    const H = grid.length, W = grid[0].length
    
    for(let y = 1; y < H; y++){
        for(let x = 0; x < W; x++){
            const curr = grid[y][x];
            grid[y][x] = 0;
            for(let k = 0; k < W; k++){
                grid[y][x] = Math.max(
                    grid[y][x],
                    curr + grid[y-1][k] - (Math.abs(x - k))
                )
            }
        }
    }
    
    return Math.max(...grid[H-1])
};