// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.


const randomPromise = () => {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  });
};

const handleRandomPromise = async () => {
  try {
    const result = await randomPromise();
    console.log(result);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

handleRandomPromise();
