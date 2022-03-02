
/**
 * @param {HTMLElement} el - element to be wrapped
 */
 function $(el) {

    return {
      element: el,
      css(key, value){
        this.element.style[key] = value;
        return this;
      }
    }
  }