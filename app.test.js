const sum = require('./app');

test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
});

test('adds 100 + 100 to equal 200', () => {
        expect(sum(100, 100)).toBe(200);
});

