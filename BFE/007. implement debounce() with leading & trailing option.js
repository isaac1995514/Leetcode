/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait, option = { leading: false, trailing: true }) {
  const { leading, trailing } = option;
  let timer;
  let lastArgs, lastThisArg;

  const delay = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      const args = lastArgs;
      const env = lastThisArg;
      lastArgs = null;
      lastThisArg = null;

      if (trailing && args) {
        func.call(env, ...args);
      }

      timer = null;
    }, wait);
  };

  return function inner(...args) {
    if (!leading && !trailing) return;

    if (!timer) {
      if (leading) {
        func.call(this, ...args);
      } else {
        // New sets of paramters
        lastArgs = args;
        lastThisArg = this;
      }

      delay();
    } else {
      lastArgs = args;
      lastThisArg = this;

      delay();
    }
  };
}
