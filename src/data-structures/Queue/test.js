import Queue from '.';

describe('Queue', () => {
  it('should create empty', () => {
    const queue = new Queue();

    expect(queue.items).toEqual([]);
  });

  it('should enqueue two items', () => {
    const queue = new Queue();

    queue.enqueue('any_text');
    queue.enqueue('any_text02');

    expect(queue.items).toEqual(['any_text', 'any_text02']);
  });

  it('should dequeue first add element', () => {
    const queue = new Queue();

    queue.enqueue('any_text');

    expect(queue.dequeue()).toBe('any_text');
  });

  it('should check size', () => {
    const queue = new Queue();

    queue.enqueue('any_text');
    queue.enqueue('any_text02');

    expect(queue.size()).toBe(2);
  });

  it('should returns the front element', () => {
    const queue = new Queue();

    queue.enqueue('any_text');
    queue.enqueue('any_text02');

    expect(queue.front()).toBe('any_text');
  });

  it('should throws an error if try to get front element from empty items', () => {
    const queue = new Queue();

    expect(() => queue.front()).toThrow();
  });

  it('should returns if is empty', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBeTruthy();
  });

  it('should shows a string of elements', () => {
    const queue = new Queue();

    queue.enqueue('any_text');
    queue.enqueue('any_text02');

    expect(queue.print()).toBe('any_text,any_text02');
  });
});
