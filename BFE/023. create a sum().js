/**
 * @param {number} num
 */
 function sum(num) {
    const func = (next) => sum(num + next)
    // ValueOf can be used to return a value
    func.valueOf = () => num;
    return func
  }