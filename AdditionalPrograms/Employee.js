"use strict";
// Demonstrate public, private, and protected Access Modifiers Using an Employee Class
class Employee {
    employeeName;
    employeeSalary;
    employeeDepartment;
    constructor(personName, salaryAmount, departmentType) {
        this.employeeName = personName;
        this.employeeSalary = salaryAmount;
        this.employeeDepartment = departmentType;
    }
    showEmployeeName() {
        console.log("Employee Name:", this.employeeName);
    }
    showSalary() {
        console.log("Salary:", this.employeeSalary);
    }
    showDepartment() {
        console.log("Department:", this.employeeDepartment);
    }
    displayDetails() {
        this.showSalary();
        this.showDepartment();
    }
}
let employeeRecord = new Employee("Jahnavi", 50000, "AI & DS");
employeeRecord.showEmployeeName();
employeeRecord.displayDetails();
