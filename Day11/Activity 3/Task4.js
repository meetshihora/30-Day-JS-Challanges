// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.


async function logPromiseResolution(promise) {
    try {
        const value = await promise;
        console.log(value);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

