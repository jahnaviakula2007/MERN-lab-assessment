// Create a Class with a static College Name and a static Method

class CollegeInfo {
    studentName: string;
    static collegeTitle: string = "Shri Vishnu Engineering College for Women";

    constructor(nameValue: string) {
        this.studentName = nameValue;
    }

    displayStudent(): void {
        console.log("Student Name:", this.studentName);
        console.log("College Name:", CollegeInfo.collegeTitle);
    }

    static showCollege(): void {
        console.log("Welcome to:", CollegeInfo.collegeTitle);
    }
}

let collegeStudent = new CollegeInfo("Jahnavi");

collegeStudent.displayStudent();
CollegeInfo.showCollege();