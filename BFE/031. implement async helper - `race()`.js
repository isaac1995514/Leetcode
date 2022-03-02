/**
 * Without Proimse
 * @param {*} funcs
 * @returns
 */
function race(funcs) {
  return function (finalCb, init) {
    let state = "pending";

    const innerCallback = (error, data) => {
      if (state !== "pending") return;
      finalCb(error, data);
      state = error ? "rejected" : "fulfilled";
    };

    funcs.forEach((func) => {
      func(innerCallback);
    });
  };
}

function race(funcs) {
  return function (finalCb, init) {
    let state = "pending";

    const promisify = (func) => {
      new Promise((rs, rj) => {
        func((err, data) => {
          err ? rj(err) : rs(data);
        });
      })
        .then((value) => {
          if (state !== "pending") return;
          finalCb(undefined, value);
          state = "fulfilled";
        })
        .catch((e) => {
          if (state !== "pending") return;
          finalCb(e, undefined);
          state = "rejected";
        });
    };

    funcs.forEach((func) => {
      promisify(func);
    });
  };
}
