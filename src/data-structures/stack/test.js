import Stack from '.';

describe('Stack', () => {
  it('should create an empty Stack', () => {
    const stack = new Stack();

    expect(stack.items).toEqual([]);
  });

  it('should throws an error if try to add empty value', () => {
    const stack = new Stack();

    expect(() => stack.push('')).toThrow(Error);
  });

  it('should add an item to Stack', () => {
    const stack = new Stack();

    stack.push('any_text');

    expect(stack.items).toEqual(['any_text']);
  });

  it('should remove an item from Stack', () => {
    const stack = new Stack();

    stack.push('any_text1');
    stack.push('any_text2');
    stack.pop();

    expect(stack.items).toEqual(['any_text1']);
  });

  it('should return the element at the top of the Stack', () => {
    const stack = new Stack(['any_text1', 'any_text2']);

    expect(stack.peek()).toBe('any_text2');
  });

  it('should print Stack as a string', () => {
    const stack = new Stack();

    stack.push('any_text');
    stack.push('any_text2');

    expect(stack.print()).toBe('any_text,any_text2');
  });

  it('should clear Stack', () => {
    const stack = new Stack(['any_text']);

    stack.clear();

    expect(stack.items).toEqual([]);
  });

  it('should check if Stack is empty', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBeTruthy();
  });

  it('should returns Stack size', () => {
    const stack = new Stack(['any_text']);

    expect(stack.size()).toBe(1);
  });
});
