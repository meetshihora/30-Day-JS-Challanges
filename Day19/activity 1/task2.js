// Task 2: Write a regular expression to match all digits in a string. Log the matches.

const regex = /\d+/g;
const str = "The event starts at 10:00 AM on 2024-09-04.";

const matches = str.match(regex);
console.log(matches);
