/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    
    const res = s.split('');
    
    const stack = [];
    
    for(let i = 0; i < res.length; i++){
        if(res[i] === '('){
            stack.push(i);            
        }else if(res[i] === ')'){
            if(stack.length > 0){
                stack.pop()
            }else{
                res[i] = ""
            }
        }
    }
    
    for(const openIdx of stack){
        res[openIdx] = ""
    }
    
    return res.join('')
};