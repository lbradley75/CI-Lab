const { sum, product } = require('./app');

// sum function

test('sum function exists', () => {
  expect(sum).toBeDefined();
});

test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
});

test('adds 100 + 100 to equal 200', () => {
        expect(sum(100, 100)).toBe(200);
});

// product function

test('product function exists', () => {
  expect(product).toBeDefined();
});

test('multiply 2 * 2 to equal 4', () => {
        expect(product(2, 2)).toBe(4);
});

test('multiply 3 * 200 to equal 600', () => {
        expect(product(3, 200)).toBe(600);
});
