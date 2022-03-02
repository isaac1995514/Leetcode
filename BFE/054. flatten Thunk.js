
/**
 * @param {Thunk} thunk
 * @return {Thunk}
 */
 function flattenThunk(thunk) {

    return function inner(cb){
  
      // Callback use to intercept the error and data
      const innerCallback = (error, data) => {
        // If there is an error, call the final callback
        if(error){
          cb.call(this, error, undefined)
        // If data is a function, continue passing the innerCallback to intercept the error and data
        }else if(typeof data === 'function') data(innerCallback);
        // If data is not a function, then call final callback with the data
        else cb.call(this, undefined, data)
      }
  
      thunk(innerCallback)
    }
  }