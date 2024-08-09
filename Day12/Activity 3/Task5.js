// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block. 

class InputValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InputValidationError';
  }
}

function validateInput(input) {
  try {
    if (input === '') {
      throw new InputValidationError('Input cannot be empty');
    }
    return input;
  } catch (error) {
    if (error instanceof InputValidationError) {
      console.log('Validation error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
}


try {
  const userInput = validateInput('');
  console.log(userInput);
} catch (error) {
  console.error('Error occurred:', error.message);
}
