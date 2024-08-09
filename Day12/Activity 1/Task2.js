// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.


function divideNumbers(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error('Cannot divide by zero');
    }
    return numerator / denominator;
  } catch (error) {
    console.log('An error has occurred:', error.message);
    return NaN;
  }
}

console.log(divideNumbers(10, 2)); // Output: 5
console.log(divideNumbers(10, 0)); // Output: An error has occurred: Cannot divide by zero
