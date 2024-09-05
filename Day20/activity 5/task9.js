// Task 9: Write a function that accepts a key and a value, and saves the value to both localstorage and sessionStorage. Retrieve and log the values from both storage mechanisms.

function saveToBothStorages(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
  
    const localStorageValue = localStorage.getItem(key);
    const sessionStorageValue = sessionStorage.getItem(key);
  
    console.log(`Value from localStorage: ${localStorageValue}`);
    console.log(`Value from sessionStorage: ${sessionStorageValue}`);
  }
  
  saveToBothStorages('user', 'Alice');
  