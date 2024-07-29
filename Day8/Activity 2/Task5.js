// Task 5: Use object destrcturing to extract the title and auther from a book object and them to the console.

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
let { title, author, year } = book;
console.log(title, author, year);