
/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(func, wait) {
  let lastArgs;
  let lastEnv;
  let waiting = false

  const delay = () => {
    setTimeout(() => {
      if(lastArgs){
        func.call(lastEnv, ...lastArgs)
        lastArgs = null;
        lastEnv = null;
        waiting = false;
      }
    }, wait)
  }

  return function inner(...args){
    // If no previous call, call the function immediately and trigger a delay for calling the subsequent call
    if(!waiting){
      func.call(this, ...args)
      waiting = true;
      delay()
    // Else if it is waiting, cache the current args and env for the next call
    }else{
      lastArgs = args;
      lastEnv = this;
    }
  }
}

