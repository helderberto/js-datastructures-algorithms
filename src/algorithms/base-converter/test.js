import { baseConverter } from '.';

describe('baseConverter', () => {
  it('should ensures method is defined', () => {
    expect(baseConverter).toBeDefined();
  });

  it('should returns base 2 from number 100', () => {
    const baseString = baseConverter(100, 2);

    expect(baseString).toBe('1100100');
  });
});
