class MinStack {
  minstack: number[];

  constructor() {
    this.minstack = [];
  }

  push(val: number): void {
    this.minstack.push(val);
  }

  pop(): void {
    if (this.minstack.length > 0) {
      this.minstack.pop();
    }
  }

  top(): number {
    if (this.minstack.length > 0) {
      return this.minstack[this.minstack.length - 1];
    }
  }

  getMin(): number {
    let min = this.minstack[0];
    for (let i = 1; i < this.minstack.length; i++) {
      if (this.minstack[i] < min) {
        min = this.minstack[i];
      }
    }

    return min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
