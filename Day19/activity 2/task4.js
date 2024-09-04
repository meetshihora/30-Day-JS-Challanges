// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const regex = /\d+/g;
const str = "The event will be held on 2024-09-04 at 10:00 AM.";

const matches = str.match(regex);
console.log(matches);
