// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().


const errorMessage = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Error message after 2 seconds")), 2000);
});

errorMessage
    .catch((error) => {
        console.error(error.message);
    });
