/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

/* Array is disabled in your code */

// you need to complete the following Class
class Queue {

  constructor(){
    this.stack = new Stack()
    this.reverse = new Stack()
  }

  enqueue(element) {
    while(this.reverse.size()){
      this.stack.push(this.reverse.pop())
    }
    this.stack.push(element)
    while(this.stack.size()){
      this.reverse.push(this.stack.pop())
    }
  }

  peek() {
    return this.reverse.peek()
  }

  size() { 
    return this.reverse.size()
  }

  dequeue() {
    return this.reverse.pop()
  }
}

/**
 * Trade off
 * 
 * There must be one operation that requires O(N) operation
 * 
 * If we are constantly maintaining the this.stack, peek(), dequeue() will be both O(N)
 * 
 * However, if we only maintain this.reverse, only enqueue will be O(N)
 */


