// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

const regex = /JavaScript/g;
const str = "JavaScript is a versatile language. Many developers use JavaScript for web development.";

const matches = str.match(regex);
console.log(matches);
