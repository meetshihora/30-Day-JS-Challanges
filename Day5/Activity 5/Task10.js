// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

// Solution

const higherOrderFunction = (firstFunction, secondFunction, value) => {
    return secondFunction(firstFunction(value));
}

higherOrderFunction(x => x + 1, x => x * 2, 5);

// Output: 20