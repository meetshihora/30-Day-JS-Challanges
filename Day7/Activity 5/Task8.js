// . Task 8: Use a for ... in loop to iterate over the properties of the book object and log each property and its value.

// Solution

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
for (let property in book) {
    console.log(property, book[property]);
}

// Output: title The Great Gatsby
//         author F. Scott Fitzgerald