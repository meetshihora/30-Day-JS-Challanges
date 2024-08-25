// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

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

function add(a, b) {
    return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(2, 3)); 