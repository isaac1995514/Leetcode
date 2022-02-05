/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
  
    const H = grid.length;
    const W = grid[0].length;
    
    for(let y = 0; y < H; y++){
        for(let x = 0; x < W; x++){
            if(y === 0 && x === 0) continue;
            const cost = grid[y][x]
            const top = (y > 0) ? grid[y-1][x] + cost : Infinity;
            const left = (x > 0) ? grid[y][x-1] + cost : Infinity;

            grid[y][x] = Math.min(top, left)
        }
    }
    
    return grid[H-1][W-1];
};