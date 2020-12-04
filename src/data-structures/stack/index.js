class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    if (!item) throw Error('you are trying to add an empty value');

    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  toString() {
    return this.items.toString();
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

export default Stack;
