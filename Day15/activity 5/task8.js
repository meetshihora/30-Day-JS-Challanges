// Task 8: Create a memoized version of a function that calculates the factorial of a number.

function memoize(fn) {
    const cache = {}; 

    return function(...args) {
        const key = JSON.stringify(args); 
        if (cache[key]) {
            console.log("Returning cached result for:", key);
            return cache[key];
        } else {
            const result = fn(...args); 
            cache[key] = result; 
            console.log("Computing and storing result for:", key);
            return result;
        }
    };
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6)); 
