// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

const regex = /^\w+/;
const str = "Hello, world! Welcome to regex tasks.";

const matches = str.match(regex);
console.log(matches);
