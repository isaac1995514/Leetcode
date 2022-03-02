

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {

  let timer

  const delay = (env, args) => {
    if(timer) {
      clearTimeout(timer)
      timer = null;  
    };

    timer = setTimeout(() => {
      func.call(env, ...args)
      timer = null;
    }, wait)
  }

  return function inner(...args){
    delay(this, args)
  }
}

