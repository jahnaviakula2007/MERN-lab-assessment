"use strict";
// Create a Class with a static College Name and a static Method
class CollegeInfo {
    studentName;
    static collegeTitle = "Shri Vishnu Engineering College for Women";
    constructor(nameValue) {
        this.studentName = nameValue;
    }
    displayStudent() {
        console.log("Student Name:", this.studentName);
        console.log("College Name:", CollegeInfo.collegeTitle);
    }
    static showCollege() {
        console.log("Welcome to:", CollegeInfo.collegeTitle);
    }
}
let collegeStudent = new CollegeInfo("Jahnavi");
collegeStudent.displayStudent();
CollegeInfo.showCollege();
