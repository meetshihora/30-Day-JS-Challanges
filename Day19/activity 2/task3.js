// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

const regex = /\b[A-Z][a-z]*\b/g;
const str = "The Quick Brown Fox Jumps Over The Lazy Dog.";

const matches = str.match(regex);
console.log(matches);
