// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.


const randomPromise = () => {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  });
}

randomPromise()
  .then(result => console.log(result))
  .catch(error => console.log(error));
