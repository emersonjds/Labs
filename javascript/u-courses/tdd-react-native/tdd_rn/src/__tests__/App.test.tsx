function sum(a: number, b: number): number {
    return a + b;
}

describe('should be return a correct value of function', () => {
    it('should be return a correct value of function', () => {
        expect(sum(1, 2)).toBe(3);
    });
})

export { }
