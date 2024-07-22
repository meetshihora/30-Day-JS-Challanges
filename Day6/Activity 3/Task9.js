// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

// Solution

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)

// Output: 15

// Solution 2

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfArray(numbers))

// Output: 15