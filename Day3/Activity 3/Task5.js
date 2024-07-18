// Task 5: Write a program that uses a switch case to assign a grade (A, B, C, D, F) based on a score and log the grade to the console.

// Solution

let score = 80;

switch (true) {
    case score >= 90:
        console.log("A");
        break;  
    case score >= 80:
        console.log("B");
        break;
    case score >= 70:
        console.log("C");
        break;
    case score >= 60:
        console.log("D");
        break;
    default:
        console.log("F");
}   

// Output: B