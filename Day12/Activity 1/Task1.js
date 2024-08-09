// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.


function throwError() {
  try {
    throw new Error('This is an intentional error');
  } catch (error) {
    console.log('An error has occurred:', error.message);
  }
}

throwError();
