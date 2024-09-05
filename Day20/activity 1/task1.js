// Task 1: Write a script to save a string value to localstorage and retrieve it. Log the retrieved value.

localStorage.setItem('myKey', 'Hello, World!');
const retrievedValue = localStorage.getItem('myKey');

console.log(retrievedValue);
