// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

const functionArray = [];

for (let i = 0; i < 5; i++) {
    functionArray.push((function(index) {
        return function() {
            console.log(index);
        };
    })(i));
}

functionArray[0](); 
functionArray[1](); 
functionArray[2](); 
functionArray[3](); 
functionArray[4](); 
