// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

localStorage.setItem('name', 'John Doe');
localStorage.setItem('email', 'john@example.com');

console.log('Before removal:', localStorage);

localStorage.removeItem('email');

console.log('After removal:', localStorage);
