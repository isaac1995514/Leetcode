
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
 function any(promises) {
    let err = 0;
    let errors = []
    return new Promise((rs, rj) => {
  
      promises.forEach((p, i) => {
        p.then((value) => {
          rs(value)
        }).catch((e) => {
          errors[i] = e
          err++
        }).finally((e) => {
          if (err === promises.length) {
            rj(new AggregateError(
              'No Promise in Promise.any was resolved',
              errors
            ))
          }
        })
      })
    })
  }