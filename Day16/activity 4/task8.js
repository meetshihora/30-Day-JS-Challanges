// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countOccurrences(arr, target) {
    if (arr.length === 0) {
        return 0;
    }
    const countInRest = countOccurrences(arr.slice(1), target);
    return (arr[0] === target ? 1 : 0) + countInRest;
}

console.log(countOccurrences([1, 2, 3, 2, 2], 2)); 
console.log(countOccurrences([4, 4, 4, 4, 4], 4));
console.log(countOccurrences([1, 3, 5, 7], 2));    
console.log(countOccurrences([10, 20, 10, 30, 10], 10)); 
console.log(countOccurrences([], 1)); 
