
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
 function all(promises) {

    let res = [];
    let count = 0;
  
    return new Promise((resolve, reject) => {
      const n = promises.length
  
      if(n === 0) resolve([])
  
      for (let i = 0; i < n; i++) {
        // Use Promise resolve to return a promise with a given value.
        // If the given is a proimse, it returns that promise, else it returns a promise resolve to the given value
        Promise.resolve(promises[i]).then((value) => {
          res[i] = value;
          count++;
  
          if (count === n) {
            resolve(res)
          }
        }).catch((e) => {
          reject(e)
        })
      }
    })
  }