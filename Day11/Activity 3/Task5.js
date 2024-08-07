// Task 5: Write an async function that handles a rejected promise using try-catch and los the error message.


async function handleRejectedPromise() {
    try {
        await Promise.reject(new Error("This promise has been rejected"));
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}
