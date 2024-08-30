// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

function countCharacterOccurrences(str) {
    const charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}

const inputString = "hello world";
const characterCounts = countCharacterOccurrences(inputString);

console.log("Character counts:", characterCounts);
