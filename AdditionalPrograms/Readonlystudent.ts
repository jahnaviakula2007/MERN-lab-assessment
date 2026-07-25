// Create a Student Class with a readonly Student ID

class StudentDetails {
    candidateName: string;
    readonly uniqueId: number;
    specialization: string;

    constructor(receivedName: string, assignedId: number, branchName: string) {
        this.candidateName = receivedName;
        this.uniqueId = assignedId;
        this.specialization = branchName;
    }

    displayRecord(): void {
        console.log("Student Name:", this.candidateName);
        console.log("Student ID:", this.uniqueId);
        console.log("Specialization:", this.specialization);
    }
}

let profileData = new StudentDetails("Jahnavi", 203, "AI & DS");

profileData.displayRecord();