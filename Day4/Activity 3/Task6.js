// Activity-1/Task 6: Write a program to calculate the factorial of a number using a do... while loop.

// Solution

let num = 5;
let fact = 1;
let i = 1;
do {
    fact *= i;
    i++;
} while (i <= num);
console.log(fact)

// Output: 120