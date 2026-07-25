"use strict";
// Create a Student Class with Constructor and Display Student Details
class Student {
    nameOfStudent;
    rollCode;
    departmentName;
    constructor(inputName, inputRoll, inputDepartment) {
        this.nameOfStudent = inputName;
        this.rollCode = inputRoll;
        this.departmentName = inputDepartment;
    }
    printDetails() {
        console.log("Name:", this.nameOfStudent);
        console.log("Roll Number:", this.rollCode);
        console.log("Department:", this.departmentName);
    }
}
let studentInfo = new Student("Jahnavi", 102, "Artificial Intelligence and Data Science");
studentInfo.printDetails();
