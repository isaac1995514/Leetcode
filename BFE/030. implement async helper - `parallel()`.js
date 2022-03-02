/**
 * With Promise
 * @param {*} funcs
 * @returns
 */
function parallel(funcs) {
  const n = funcs.length;

  return function (finalCb, init) {
    let res = [];
    let state = "pending";
    let resCount = 0;

    const promisify = (func, i) => {
      new Promise((rs, rj) => {
        const cb = (err, data) => (err ? rj(err) : rs(data));

        func(cb);
      })
        .then((value) => {
          if (state === "rejected") return;
          res[i] = value;
          resCount++;

          if (resCount === n) finalCb(undefined, res);
        })
        .catch((e) => {
          if (state === "rejected") return;
          state = "rejected";
          finalCb(e, undefined);
        });
    };

    funcs.forEach((func, i) => promisify(func, i));
  };
}

/**
 * No Proimse
 * @param {*} funcs 
 * @returns 
 */
function parallel(funcs) {
  const n = funcs.length;

  return function (finalCb, init) {
    let res = [];
    let state = "pending";
    let resCount = 0;

    funcs.forEach((func, index) => {
      const innerCallback = (err, data) => {
        if (state === "rejected") return;
        if (err) {
          state = "rejected";
          finalCb(err, undefined);
        } else {
          res[index] = data;
          resCount++;

          if (resCount === n) finalCb(err, res);
        }
      };
      func(innerCallback);
    });
  };
}
