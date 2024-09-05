// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.

function clearBothStorages() {
    localStorage.clear();
    sessionStorage.clear();
  
    const isLocalStorageEmpty = localStorage.length === 0;
    const isSessionStorageEmpty = sessionStorage.length === 0;
  
    console.log(`Is localStorage empty? ${isLocalStorageEmpty}`);
    console.log(`Is sessionStorage empty? ${isSessionStorageEmpty}`);
  }
  
  clearBothStorages();
  