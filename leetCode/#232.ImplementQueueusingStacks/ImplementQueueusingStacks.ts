var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  while (this.s1.length) {
    this.s2.push(this.s1.pop());
  }
  this.s1.push(x);
  while (this.s2.length) {
    this.s1.push(this.s2.pop());
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.s1.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.s1.slice(-1)[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.s1.length && !this.s2.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
