// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let person = {
    name: "John",
    age: 25,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
person.greet();