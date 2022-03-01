/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
 function curry(fn) {
    return function inner(...args){
      // If the provided arguments list is greater or equal to the required length, call the function
      if(args.length >= fn.length) return fn.call(this, ...args);

      // Else return another function to continue collecting args.
      else return (...next) => inner(...args, ...next);
    }
  }
  
  
  