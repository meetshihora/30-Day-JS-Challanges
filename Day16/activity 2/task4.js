// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    const maxOfRest = findMax(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

console.log(findMax([1, 5, 3, 9, 2])); 
console.log(findMax([10, 20, 5, 15])); 
console.log(findMax([7]));             
console.log(findMax([-5, -2, -9, -1]));  
