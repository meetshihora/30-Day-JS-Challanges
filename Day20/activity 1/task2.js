// Task 2: Write a script to save an object to localstorage by converting it to a JSON string. Retrieve and parse the object, then log it.

const myObject = {
    name: 'John Doe',
    age: 30,
    profession: 'Web Developer'
  };
  
  localStorage.setItem('myObjectKey', JSON.stringify(myObject));
  
  const retrievedObject = JSON.parse(localStorage.getItem('myObjectKey'));
  
  console.log(retrievedObject);
  