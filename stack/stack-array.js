class Stack {
  constructor() {
    this.items = [];
  }
  push(elements) {
    if (Object.prototype.toString(elements) === '[object Array]') {
      this.items.splice(this.size, 0, elements);
    } else {
      this.items.push(elements);
    }
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.size() - 1];
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
}
module.exports = Stack;

// 数组有序集合，为保证顺兴，需要跟多的内存空间
//  直接获取元素，占用较少的内存空间，可以使用对象来存储。
