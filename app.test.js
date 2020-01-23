const { sum, product, difference } = require('./app');

// sum function

test('sum function exists', () => {
  expect(sum).toBeDefined();
});

test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
});

test('adds 101 + 101 to equal 200', () => {
        expect(sum(101, 101)).toBe(202);
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


// difference function

test('difference function exists', () => {
  expect(difference).toBeDefined();
});

test('subtract 10 - 2 to equal 8', () => {
        expect(difference(10, 2)).toBe(8);
});

test('subtract 200 - 50 to equal 150', () => {
        expect(difference(200, 50)).toBe(150);
});

// add difference tests here...
