// Activity-1/Task 7: Write a program to print a pattern using nested for loops:

// Solution

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j + " ");
    }    
    console.log();
}   

// Output: 
/*
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
*/