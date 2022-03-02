/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
 function memo(func, resolver) {
    const defaultResolver = (...args) => Array.from(args).join('_');
    const r = resolver || defaultResolver;
  
    const memo = new Map();
  
    return function inner(...args){
      const key = r(...args)
      const thisKey = Symbol.for(this);
      // The function can be called within various obj, so it may be important to map the "this" as well
      if(!memo.has(thisKey)) memo.set(thisKey, new Map());
      if(!memo.get(thisKey).has(key)) memo.get(thisKey).set(key, func.call(this, ...args));
  
      return memo.get(thisKey).get(key)
    }
  }