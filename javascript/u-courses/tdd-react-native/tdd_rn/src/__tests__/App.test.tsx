function add(x: number, y: number) {
  return x + y;
}

describe('first test', () => {
  it('sum of values', () => {
    expect(add(2, 2)).toBe(4);
  });
});
