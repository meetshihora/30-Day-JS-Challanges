// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students. 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
class Student extends Person {
    static count = 0;
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.count++;
    }

    getStudentId() {
        return this.studentId;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.studentId}.`;
    }

    static getStudentCount() {
        return Student.count;
    }
}

const student = new Student("John", 25, 12345);
console.log(student.greet());
console.log(Student.getStudentCount());