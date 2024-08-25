// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerFunction() {
    let outerVariable = "Hello from the outer function!";

    function innerFunction() {
        return outerVariable;
    }

    return innerFunction;
}

const innerFunc = outerFunction(); 
const result = innerFunc(); 
console.log(result); 
