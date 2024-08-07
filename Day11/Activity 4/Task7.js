// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.


async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}

fetchData();
