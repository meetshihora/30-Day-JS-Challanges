// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function createUniqueIdGenerator() {
    let lastId = 0; 

    return function() {
        lastId++; 
        return lastId; 
    };
}

const generateUniqueId = createUniqueIdGenerator();

console.log(generateUniqueId()); 
console.log(generateUniqueId()); 
console.log(generateUniqueId()); 
