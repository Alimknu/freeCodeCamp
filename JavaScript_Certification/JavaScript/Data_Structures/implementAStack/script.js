function initStack() {
  return { collection: [] };
}

function push(stack, el) {
  stack.collection.push(el);
}

function pop(stack) {
  return stack.collection.pop();
}

function peek(stack) {
  return stack.collection[stack.collection.length - 1];
}

function isEmpty(stack) {
  return stack.collection.length == 0;
}

function clear(stack) {
  stack.collection = [];
}

const stack = initStack();
push(stack, 5);
push(stack, 2);
push(stack, 78);
console.log(stack);
