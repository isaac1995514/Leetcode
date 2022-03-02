
/**
 * @param {integer} from
 * @param {integer} to
 */
 function range(from, to) {

    function* gen (){
      for(let i = from; i <= to; i++){
        yield i
      }
    }
  
    return gen();
  }