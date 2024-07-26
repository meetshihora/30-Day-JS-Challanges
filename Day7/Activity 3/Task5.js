// . Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

// Solution

let library = {
    name: "The library",
    books: [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        }
    ]
};
console.log(library)

// Output: {name: "The library", books: Array(3)}