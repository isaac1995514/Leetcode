
/**
 * @param {object} obj
 * @param {string} methodName
 */
 function spyOn(obj, methodName) {
    const func = obj[methodName];
  
    if(!func) throw Error();
  
    const calls = []
    const wrapper = (...args) => {
      calls.push(args);
      func(...args)
    }
    
    obj[methodName] = wrapper
  
    return {
      calls
    }
  }