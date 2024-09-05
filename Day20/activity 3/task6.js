// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

const userObject = {
    name: 'Jane Smith',
    age: 28,
    occupation: 'Software Engineer'
  };
  
  sessionStorage.setItem('userObjectKey', JSON.stringify(userObject));
  
  const retrievedUserObject = JSON.parse(sessionStorage.getItem('userObjectKey'));
  
  console.log(retrievedUserObject);
  