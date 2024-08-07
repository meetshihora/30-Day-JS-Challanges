// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.


const message = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Two seconds have passed"), 2000);
});

message.then((msg) => {
    console.log(msg);
});
