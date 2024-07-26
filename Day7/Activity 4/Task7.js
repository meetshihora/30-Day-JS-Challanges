// . Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

// Solution

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925  
};
let bookInfo = book.title + " by " + book.author + " (" + book.year + ")";
console.log(bookInfo)

// Output: The Great Gatsby by F. Scott Fitzgerald (1925)