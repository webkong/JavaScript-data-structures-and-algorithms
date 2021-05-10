const StackArray = require('./stack-array');
const StackObject = require('./stack-object');
const StackWeakMap = require('./stack-weakmap');

// let stack = new StackArray();
// let stack = new StackArray();
let stack = new StackWeakMap();

test('add element to Stack', () => {
  stack.push(2);
  expect(stack.size()).toBe(1);
});
test('pop element from Stack', () => {
  expect(stack.pop()).toBe(2);
});
