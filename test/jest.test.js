test('Sample Test', () => {
    let num1 = 5;
    let num2 = 10;
    let sum = num1 + num2;
    expect(sum).toBe(15);
});

test('Deve ser um objeto', () => {
    const obj = { name: 'John', age: 30 };
    expect(obj).toEqual(expect.objectContaining({ name: 'John' }));
});
