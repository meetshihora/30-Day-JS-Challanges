// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

// Solution

function greet(name, age = 18) {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet("John", 25));
console.log(greet("Jane"))

// Output:
    // Hello, John! You are 25 years old.
    // Hello, Jane! You are 18 years old.