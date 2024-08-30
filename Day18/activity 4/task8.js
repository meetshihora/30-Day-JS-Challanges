// Task 8: Write a function to rotate an array by k positions. Log the rotated array.

function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}

const array = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const rotatedArray = rotateArray(array, k);

console.log("Rotated array:", rotatedArray);
