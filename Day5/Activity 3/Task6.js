// Activity 3/Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

// Solution
const containsCharacter = (str, char) => str.includes(char);

console.log(containsCharacter("hello", "e")); 
console.log(containsCharacter("hello", "a"));

// Output:
    // true
    // false
