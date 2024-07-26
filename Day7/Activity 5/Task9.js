// . Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

// Solution

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
console.log(Object.keys(book), Object.values(book))

// Output: (3) ['title', 'author', 'year']
//         (3) ['The Great Gatsby', 'F. Scott Fitzgerald', 1925]