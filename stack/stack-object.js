class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  isEmpty() {
    return this.count === 0;
  }
  clear() {
    this.items = {};
    this.count = 0;
  }
  size() {
    return this.count;
  }
}
module.exports = Stack;

// 对于类和数据结构，要保护内容数据，只有暴露的方法可以使用，来修改和访问
// 1. 约定_命名私有变量，治标不治本。还是可以通过原型链的方式访问到。Object.getOwnPropertyNames(stack) stack.items
// 2. 用ES6的Symbol实现类属性，虽然它是不可变的可以用作对象属性，但是也可以通过Object.getOwnPropertySymbols获取到Symbols属性
// 3. 是用ES6的WeakMap实现
