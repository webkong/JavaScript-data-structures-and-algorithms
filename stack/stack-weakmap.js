const items = new WeakMap();

class Stack {
  constructor() {
    items.set(this, []);
  }
  push(element) {
    const s = items.get(this);
    s.push(element);
  }
  pop() {
    const s = items.get(this);
    return s.pop();
  }
  peek() {
    const s = items.get(this);
    return s[this.size() - 1];
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    const s = items.get(this);
    s = [];
  }
  size() {
    const s = items.get(this);
    return s.length;
  }
}
module.exports = Stack;

// https://es6.ruanyifeng.com/#docs/set-map#WeakMap-%E7%9A%84%E7%94%A8%E9%80%94
