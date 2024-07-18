// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

// Solution

let year = 2024;
let isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
console.log(isLeapYear)

// Output: true

// Solution 2

let y = 2023;

if (y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}

// Output: Not a leap year