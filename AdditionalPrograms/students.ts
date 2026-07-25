// Create a Student Class with Constructor and Display Student Details

class Student {
    nameOfStudent: string;
    rollCode: number;
    departmentName: string;

    constructor(inputName: string, inputRoll: number, inputDepartment: string) {
        this.nameOfStudent = inputName;
        this.rollCode = inputRoll;
        this.departmentName = inputDepartment;
    }

    printDetails(): void {
        console.log("Name:", this.nameOfStudent);
        console.log("Roll Number:", this.rollCode);
        console.log("Department:", this.departmentName);
    }
}

let studentInfo = new Student("Jahnavi", 102, "Artificial Intelligence and Data Science");

studentInfo.printDetails();