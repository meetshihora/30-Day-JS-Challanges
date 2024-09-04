// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

const validatePassword = (password) => {
    return regex.test(password);
};

const password = "Password1!";

const isValid = validatePassword(password);
console.log(`Password is ${isValid ? 'valid' : 'invalid'}`);
