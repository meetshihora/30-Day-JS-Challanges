// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

const regex = /\w+$/;
const str = "This is the final task";

const matches = str.match(regex);
console.log(matches);
