class NodeStore {
   
    constructor(){
      this.map = {}
      this.id = 0;
    }
    
    /**
    * @param {Node} node
    * @param {any} value
    */
   set(node, value) {
     const next = this.id++;
     // Using dataset to store information in a HTML node
     node.dataset.storeId = next;
     this.map[next] = value;
   }
   /**
    * @param {Node} node
    * @return {any}
    */
   get(node) {
     const storeId = node.dataset.storeId;
     return this.map[storeId]
   }
   
   /**
    * @param {Node} node
    * @return {Boolean}
    */
   has(node) {
     return !!node.dataset.storeId
   }
 }