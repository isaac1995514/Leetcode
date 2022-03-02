
/**
 * @param {any} data
 * @return {string}
 */
 function detectType(data) {
    const basic = new Set(['number', 'string', 'boolean', 'function', 'null', 'undefined'])
    const typeStr = typeof data;
    if(basic.has(typeStr)) return typeStr
  
    if(data === null) return 'null'
    if(Array.isArray(data)) return 'array';
  
    const constructorName = data.constructor.name.toLowerCase();
  
    if(constructorName === 'filereader') return 'object'
    return constructorName
  }

  /**
   * undefined is it's own type
   * basic type includes number, string, boolean, function
   */