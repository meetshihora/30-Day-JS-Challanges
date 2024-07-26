// . Task 6: Access and log the name of the library and the titles of all the books in the library.

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
console.log(library.books[0].title, library.books[1].title, library.books[2].title)