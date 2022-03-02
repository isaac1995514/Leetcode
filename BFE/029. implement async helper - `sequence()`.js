/**
 * Without promise
 * @param {*} funcs
 * @returns
 */
function sequence(funcs) {
  let p = 1;
  const n = funcs.length;

  return function inner(finalCb, init) {
    if (n === 0) finalCb(undefined, init);

    const innerCallback = (error, data) => {
      if (error) finalCb(error, data);
      else if (p === n) finalCb(error, data);
      else {
        funcs[p++](innerCallback, data);
      }
    };

    funcs[0](innerCallback, init);
  };
}

/**
 * With Promise
 * @param {*} funcs 
 * @returns 
 */
function sequence(funcs) {
  const n = funcs.length;
  const list = [...funcs];

  return function inner(finalCb, init) {
    if (n === 0) finalCb(undefined, init);

    function callNext(acc) {
      new Promise((rs, rj) => {
        const cb = (err, data) => (err ? rj(err) : rs(data));
        const next = list.shift();

        next(cb, acc);
      })
        .then((data) => {
          if (list.length) {
            callNext(data);
          } else {
            finalCb(undefined, data);
          }
        })
        .catch((e) => {
          finalCb(e);
        });
    }

    callNext(init);
  };
}
