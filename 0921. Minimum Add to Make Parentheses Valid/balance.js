/**
 * @param {string} s
 * @return {number}
 */
 var minAddToMakeValid = function(s) {
    
    let balance = 0;
    let res = 0;
    
    for(const ch of s){
        balance += ch === '(' ? 1 : -1;
        
        if(balance < 0){
            res+=1;
            balance = 0;
        }
    }
    
    return res + balance;
    
};