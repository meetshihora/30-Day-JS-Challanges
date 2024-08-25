// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function createGreeting(name) {
    return function() {
        return `Hello, ${name}!`;
    };
}

const greetUser = createGreeting("Alice");
console.log(greetUser()); 
