// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static greet() {
        return 'Hello, my name is ${this.name} and I am ${this.age} years old.';
    }
}

console.log(Person.greet());
