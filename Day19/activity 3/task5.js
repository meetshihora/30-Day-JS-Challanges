// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const str = "(123) 456-7890";

const matches = str.match(regex);
console.log(matches);
