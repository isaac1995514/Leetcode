/**
 * @param {number} n
 * @return {number}
 */
 var knightDialer = function(n) {
    
    const steps = [
        [4, 6], // 0
        [8, 6], // 1
        [7, 9], // 2
        [4, 8], // 3
        [3, 9, 0], // 4
        [], // 5
        [1, 7, 0], // 6
        [2, 6], // 7
        [1, 3], // 8
        [4, 2] // 9
    ]
    const mod = Math.pow(10, 9) + 7;
    let last = [...Array(10)].fill(1)
    let curr = [...Array(10)].fill(0);
    
    for(let i = 2; i <= n; i++){
        
        curr.fill(0); // Reset curr;
        for(let j = 0; j <= 9; j++){
            if(j === 5) continue; // Skip 5 since there is no way for 5 to go anywhere
            let total = 0;
            for(const step of steps[j]){
                total += last[step]
            }
            curr[j] = total % mod;
        }
        
        [curr, last] = [last, curr]
    }
    
    return (last.reduce((acc, num) => acc + num, 0) % mod)
};