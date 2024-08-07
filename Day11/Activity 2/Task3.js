// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.


const getDataFromServer = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching data from ${url}`);
            resolve(`Data fetched from ${url}`);
        }, 2000);
    });
};

getDataFromServer('https://api.example.com/data1')
    .then((data1) => {
        console.log(data1);
        return getDataFromServer('https://api.example.com/data2');
    })
    .then((data2) => {
        console.log(data2);
        return getDataFromServer('https://api.example.com/data3');
    })
    .then((data3) => {
        console.log(data3);
    })
    .catch((error) => {
        console.error(`Error fetching data: ${error.message}`);
    });
