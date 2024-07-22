// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

// Solution

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers)

// Output: [2, 4, 6, 8, 10]

// Solution 2

function isEven(num) {
    return num % 2 === 0;
}   

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNum = num.filter(isEven);
console.log(evenNum)

// Output: [2, 4, 6, 8, 10]