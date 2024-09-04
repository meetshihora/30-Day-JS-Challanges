// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9-._~:?#[@!$&'()*+,;=]*)?$/;

const validateURL = (url) => {
    return regex.test(url);
};

const url = "https://www.example.com/path/to/resource?query=123#fragment";

const isValid = validateURL(url);
console.log(`URL is ${isValid ? 'valid' : 'invalid'}`);
