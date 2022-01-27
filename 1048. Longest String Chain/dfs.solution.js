/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    
    const isPredecessor = (pre, curr) => {
        if(pre.length + 1 !== curr.length) return false;
        
        let p = 0;
        let miss = 0;
        for(const ch of curr){
            if(ch === pre[p]) p++;
            else miss++;
        }
        
        return p === pre.length && miss === 1;
    }
    
    const graph = new Map();
    const n = words.length;
    
    words.sort((a, b) => {
        if(a.length !== b.length) return a.length - b.length;
        else a.localeCompare(b);
    })
    
    for(let i = 0; i < n; i++){
        const curr = words[i]
        for(let j = 0; j < i; j++){
            const pre = words[j]
            if(isPredecessor(pre, curr)){
                if(!graph.has(pre)) graph.set(pre, []);
                graph.get(pre).push(curr)
            }
        }
    }
    
    const memo = new Map();
    let max = 1;
    
    const dfs = (str) => {
        if(memo.has(str)) return memo.get(str);

        const children = graph.get(str) || [];
        
        if(children.length > 0){
            let max = 1;
            for(const child of children){
                const nextHeight = dfs(child) + 1;
                max = Math.max(nextHeight, max)
            }
            memo.set(str, max)
            
        }else{
            memo.set(str, 1);
        }
        
        return memo.get(str)
    }
    
    for(const key of graph.keys()){
        const height = dfs(key, new Set());
        max = Math.max(max, height)
    }
    
    return max;
    
};