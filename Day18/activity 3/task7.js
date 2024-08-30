// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function longestUniqueSubstringLength(str) {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = new Map();

    for (let end = 0; end < str.length; end++) {
        const char = str[end];

        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }

        charIndexMap.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

const inputString = "abcabcbb";
const length = longestUniqueSubstringLength(inputString);

console.log("Length of the longest substring without repeating characters:", length);
