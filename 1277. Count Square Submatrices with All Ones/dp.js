/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var countSquares = function(matrix) {
  
    let res = 0;
    const H = matrix.length;
    const W = matrix[0].length
    
    for(let i = 0; i < H; i++){
        for(let j = 0; j < W; j++){
            if(matrix[i][j] === 1){
                if(i === 0 || j === 0) res++
                else{
                     matrix[i][j] = Math.min(
                        matrix[i][j-1],
                        matrix[i-1][j],
                        matrix[i-1][j-1]
                    ) + 1
                    
                    res += matrix[i][j]
                }
            }
        }
    }
    
    return res;
};