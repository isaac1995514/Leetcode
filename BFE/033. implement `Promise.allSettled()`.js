
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
 function allSettled(promises) {

    let res = []
    let count = 0;
    let error = 0;
    
    return new Promise((resolve, reject) => {
      const n = promises.length
      if(n === 0) resolve([])
  
      for(let i = 0; i < n; i++){
        Promise.resolve(promises[i]).then((value) => {
          res[i] = {status: 'fulfilled', value }
        }).catch((reason) => {
          res[i] = {status: 'rejected', reason}
          error++;
        }).finally(() => {
          count++;
  
          if(error === n) reject(res)
          if(count === n) resolve(res)
        })
      }
    })
  }
  
  