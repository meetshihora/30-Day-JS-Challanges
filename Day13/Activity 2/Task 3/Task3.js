// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

// solution

const { add, subtract, multiply, divide } = require('./mathoprator');

console.log(`Add: 5 + 3 = ${add(5, 3)}`);
console.log(`Subtract: 5 - 3 = ${subtract(5, 3)}`);
console.log(`Multiply: 5 * 3 = ${multiply(5, 3)}`);
console.log(`Divide: 6 / 3 = ${divide(6, 3)}`);
