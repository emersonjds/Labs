function add(a, b) {
  return a + b;
}

describe('first test', () => {
  it('sum of values', () => {
    expect(add(2, 2)).toBe(4);
  });
});
