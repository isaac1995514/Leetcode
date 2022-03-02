/**
 * cancel all timer from window.setTimeout
 */
 const clearAllTimeout = (function() {

    const _setTimeout = window.setTimeout;
    let timers = []
  
    window.setTimeout = (cb, wait) => {
      timers.push(_setTimeout(cb, wait))
      return timers[timers.length - 1]
    }
  
    return function(){
      timers.forEach((t) => {
        clearTimeout(t)
      })
    }
  })()
  
  