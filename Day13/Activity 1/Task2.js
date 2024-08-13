// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script. 

// solution
const person = {
  name: 'John',
  age: 25,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old!`);
  }
};

module.exports = person;

const personModule = require('./Task2');

personModule.greet();
