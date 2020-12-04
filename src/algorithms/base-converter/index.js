import Stack from '../../data-structures/Stack';

export function baseConverter(decimalNumber, base) {
  const digits = '0123456789ABCDEF';
  let remainder;
  let remainderStack = new Stack();

  while (decimalNumber > 0) {
    remainder = Math.floor(decimalNumber % base);
    remainderStack.push(remainder);
    decimalNumber = Math.floor(decimalNumber / base);
  }

  let baseString = '';
  while (!remainderStack.isEmpty()) {
    baseString += digits[remainderStack.pop()];
  }

  return baseString;
}
