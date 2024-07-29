// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5));