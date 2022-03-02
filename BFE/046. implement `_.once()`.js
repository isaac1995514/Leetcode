/**
 * @param {Function} func
 * @return {Function}
 */
 function once(func) {
    let callCount = 0
    let res;
    return function(...args){
      if(callCount === 0) res = func.call(this, ...args)
      callCount++;
  
      return res;
    }
  }