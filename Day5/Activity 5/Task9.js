// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

// Solution

function higherOrderFunction(func, num) {
    for (let i = 0; i < num; i++) {
        func();
    }
}

higherOrderFunction(() => console.log("Hello"), 5)

// Output: 
    // Hello 
    // Hello 
    // Hello 
    // Hello 
    // Hello 
    // Hello