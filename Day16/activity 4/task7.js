// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; 
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid; 
    }

    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1); 
    } else {
        return binarySearch(arr, target, mid + 1, right); 
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); 
console.log(binarySearch([10, 20, 30, 40, 50], 40)); 
console.log(binarySearch([5, 6, 7, 8, 9], 10)); 
console.log(binarySearch([2, 4, 6, 8, 10], 8));
console.log(binarySearch([1, 3, 5, 7, 9], 1));
