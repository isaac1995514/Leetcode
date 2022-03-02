
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
 function race(promises) {

    let resolved = false
  
    return new Promise((rs, rj) => {
  
      promises.forEach((p) => {
        p.then((value) => {
          if (!resolved) rs(value)
        }).catch((e) => {
          if (!resolved) rj(e)
        }).finally(() => resolved = true)
      })
    })
  }