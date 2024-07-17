// Activity-3/Task 10: Write a program to compare two numbers using == and === and log the result to the console.

// Solution

let num1 = 10;
let num2 = 20;

if (num1 == num2) {
    console.log(num1 + " is equal to " + num2);
} else if (num1 === num2) {
    console.log(num1 + " is strictly equal to " + num2);
} else {
    console.log(num1 + " is not equal to " + num2);
}

// Output: 10 is not equal to 20