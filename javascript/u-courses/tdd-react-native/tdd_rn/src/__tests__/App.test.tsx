function sum(a: number, b: number): number {
    return a + b;
}

describe('Test function sum', () => {
    it('should be return a correct value of function', () => {
        expect(sum(1, 2)).toBe(3);
    });
})

export { }
