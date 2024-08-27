// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str) {
    if (str.length === 0) {
        return "";
    }
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); 
console.log(reverseString("world")); 
console.log(reverseString("abc")); 
console.log(reverseString(""));    
