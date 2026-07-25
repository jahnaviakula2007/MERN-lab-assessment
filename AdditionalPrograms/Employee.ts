// Demonstrate public, private, and protected Access Modifiers Using an Employee Class

class Employee {
    public employeeName: string;
    private employeeSalary: number;
    protected employeeDepartment: string;

    constructor(personName: string, salaryAmount: number, departmentType: string) {
        this.employeeName = personName;
        this.employeeSalary = salaryAmount;
        this.employeeDepartment = departmentType;
    }

    public showEmployeeName(): void {
        console.log("Employee Name:", this.employeeName);
    }

    private showSalary(): void {
        console.log("Salary:", this.employeeSalary);
    }

    protected showDepartment(): void {
        console.log("Department:", this.employeeDepartment);
    }

    public displayDetails(): void {
        this.showSalary();
        this.showDepartment();
    }
}

let employeeRecord = new Employee("Jahnavi", 50000, "AI & DS");

employeeRecord.showEmployeeName();
employeeRecord.displayDetails();