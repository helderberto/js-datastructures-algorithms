class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  front() {
    if (this.isEmpty()) {
      throw Error('You are trying to get front element of an empty array.');
    }
    return this.items[0];
  }

  print() {
    return this.items.toString();
  }
}

export default Queue;
