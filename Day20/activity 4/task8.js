// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

sessionStorage.setItem('name', 'Jane Doe');
sessionStorage.setItem('email', 'jane@example.com');

console.log('Before removal:', sessionStorage);

sessionStorage.removeItem('email');

console.log('After removal:', sessionStorage);
