// npm install axios

const axios = require('axios');  // Importing axios

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    // Handle success
    console.log('Data received:', response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error fetching data:', error);
  });
