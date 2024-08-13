// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

// solution
const math = {
    add: function(num1, num2) {
        return num1 + num2;
    }
};

module.exports = math;

const mathModule = require('./Task1');

console.log(mathModule.add(5, 10));
