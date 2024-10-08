// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 3000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 1000);
});

Promise.all([promise1, promise2, promise3])
    .then(values => {
        values.forEach(value => {
            console.log(value);
        });
    })
    .catch(error => {
        console.error(`Error: ${error.message}`);
    });
