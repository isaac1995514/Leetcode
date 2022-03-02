
// please complete the implementation
class EventEmitter {

    constructor(){
      this.map = new Map()
    }
  
    subscribe(eventName, callback) {
        if(!this.map.has(eventName)) this.map.set(eventName, new Map());
      const key = Symbol(callback);
      this.map.get(eventName).set(key, callback);
  
      return {
        release: () => {
          this.map.get(eventName).delete(key)
        }
      }
    }
    
    emit(eventName, ...args) {
      const funcs = this.map.get(eventName).values();
  
      for(const func of funcs){
          func.call(this, ...args)
      }
    }
  }