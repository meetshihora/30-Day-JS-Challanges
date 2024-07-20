// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the  second parameter.

// Solution

function product(num1, num2 = 1) {
    return num1 * num2;
}

console.log(product(10, 20))

// Output: 200