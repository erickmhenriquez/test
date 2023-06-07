const processNumbers = require('./processNumbers')
test('calculate max and sum correctly', () => {
    const numbers = [1,2,3,4,5]
    const result = processNumbers(numbers);

    expect(result.max).toBe(5);
    expect(result.sum).toBe(15);
});

