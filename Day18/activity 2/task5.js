// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value. 

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }

    return -1; 
}

const array = [11, 12, 22, 25, 64, 90];
const target = 22;
const index = binarySearch(array, target);

console.log(index !== -1 ? `Target found at index: ${index}` : "Target not found");
