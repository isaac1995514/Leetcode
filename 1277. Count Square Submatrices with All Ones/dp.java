class Solution {
    public int countSquares(int[][] matrix) {
        int res = 0, H = matrix.length, W = matrix[0].length;
    
        for(int y = 0; y < H; y++){
            for(int x = 0; x < W; x++){
                if(matrix[y][x] == 1){
                    if(y == 0 || x == 0){
                        res++;
                        continue;
                    }
                    
                    matrix[y][x] = Math.min(
                        matrix[y-1][x-1],
                        Math.min(
                            matrix[y-1][x],
                            matrix[y][x-1]
                        )
                    ) + 1;

                    res += matrix[y][x];
                }
            }
        }
    
        return res;
    }
}