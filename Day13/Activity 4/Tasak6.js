// npm install lodash

const _ = require('lodash'); 

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = _.chunk(array, 3);

console.log('Original array:', array);
console.log('Chunked array:', chunkedArray);
