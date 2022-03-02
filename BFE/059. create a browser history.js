class BrowserHistory {
  
  /**
   * @param {string} url
   * if url is set, it means new tab with url
   * otherwise, it is empty new tab
   */
  constructor(url) {
    this.history = [url]
    this.curr = 0;
  }
  /**
   * @param { string } url
   */
  visit(url) {
    while(this.history.length > this.curr + 1) this.history.pop();
    this.history.push(url)
    this.curr++;
  }
  
  /**
   * @return {string} current url
   */
  get current() {
    return this.history[this.curr]
  }
  
  // go to previous entry
  goBack() {
    if(this.curr > 0) this.curr--;
  }
  
  // go to next visited url
  forward() {
    if(this.curr < this.history.length - 1) this.curr++
  }
}