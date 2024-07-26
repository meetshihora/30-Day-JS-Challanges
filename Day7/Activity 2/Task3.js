// . Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

// Solution

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
let bookInfo = book.title + " by " + book.author;
console.log(bookInfo)

// Output: The Great Gatsby by F. Scott Fitzgerald