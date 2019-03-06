const { sum, product } = require('./app');

test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
});

test('adds 100 + 100 to equal 200', () => {
        expect(sum(100, 100)).toBe(200);
});

test('multiply 1 * 10 to equal 10', () => {
        expect(product(1, 10)).toBe(10);
});

test('multiply 3 * 200 to equal 600', () => {
        expect(product(3, 200)).toBe(600);
});
