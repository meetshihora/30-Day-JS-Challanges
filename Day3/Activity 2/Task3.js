// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

// Solution 1

let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1 + " is the largest number");
    } else {
        console.log(num3 + " is the largest number");
    }
} else if (num2 > num3) {
    console.log(num2 + " is the largest number");
} else {
    console.log(num3 + " is the largest number");
}

// Output: 30 is the largest number

// Solution 2

let num4 = 10;
let num5 = 20;
let num6 = 30;

if (num4 > num5 && num4 > num6) {
    console.log(num4 + " is the largest number");
} else if (num5 > num6) {
    console.log(num5 + " is the largest number");
} else {
    console.log(num6 + " is the largest number");
}

// Output: 30 is the largest number