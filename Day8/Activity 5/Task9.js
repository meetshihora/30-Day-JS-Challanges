// Task 9: Create an object with computed property names based on variables and log the object to the console.

let name = "John";
let age = 25;
let person = {
    [name]: "John",
    [age]: 25
};
console.log(person);