// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

sessionStorage.setItem('mySessionKey', 'Session Storage Example');

const retrievedSessionValue = sessionStorage.getItem('mySessionKey');

console.log(retrievedSessionValue);
