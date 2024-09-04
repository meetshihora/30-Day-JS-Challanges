// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

const regex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const str = "example.user123@example-domain.com";

const matches = str.match(regex);
console.log(matches);
