import Stack from '.';

describe('Stack', () => {
  it('should create an empty Stack', () => {
    const stack = new Stack();

    expect(stack.items).toEqual([]);
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

  it('should return the top element from Stack', () => {
    const stack = new Stack();

    stack.push('any_text');
    stack.push('any_text2');

    expect(stack.peek()).toBe('any_text2');
  });

  it('should parse Stack items to string', () => {
    const stack = new Stack();

    stack.push('any_text');
    stack.push('any_text2');

    expect(stack.toString()).toBe('any_text,any_text2');
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
    const stack = new Stack();

    stack.push('any_text');

    expect(stack.size()).toBe(1);
  });
});
