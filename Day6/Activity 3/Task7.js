// Task 7: Use the map method to create a new array where each number is doubled and log the new? ray.

// Solution

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers)

// Output: [2, 4, 6, 8, 10]

// Solution 2

let num = [1, 2, 3, 4, 5];
let doubledNum = numbers.map(function (number) {
    return number * 2
});
console.log(doubledNum)

// Output: [2, 4, 6, 8, 10]