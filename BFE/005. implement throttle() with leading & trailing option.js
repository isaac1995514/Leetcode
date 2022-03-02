/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
 function throttle(func, wait, option = { leading: true, trailing: true }) {

    let lastArgs, lastThisArg, waiting = false
    const {
      leading, trailing } = option
  
    const delay = () => {
      waiting = true;
      setTimeout(() => {
        const args = lastArgs;
        const env = lastThisArg;
        lastArgs = null;
        lastThisArg = null;
        waiting = false;
  
        if (trailing && args) {
          func.call(env, ...args);
          // If a function is call, we have to delay the next call again.
          delay()
        }
      }, wait)
    }
  
  
    return function inner(...args) {
      if(!leading && !trailing) return;
  
      if (!waiting) {
        if (leading) {
          func.call(this, ...args);
        }else{
          // If the call is not leading, we cache the params and env until the end of the interval.
          lastArgs = args;
          lastThisArg = this;
        }
  
        // Intercept all calls after
        delay()
      } else {
        lastArgs = args;
        lastThisArg = this;
      }
    }
  }
  
  
  