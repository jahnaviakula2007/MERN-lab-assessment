"use strict";
// Create a Student Class with a readonly Student ID
class StudentDetails {
    candidateName;
    uniqueId;
    specialization;
    constructor(receivedName, assignedId, branchName) {
        this.candidateName = receivedName;
        this.uniqueId = assignedId;
        this.specialization = branchName;
    }
    displayRecord() {
        console.log("Student Name:", this.candidateName);
        console.log("Student ID:", this.uniqueId);
        console.log("Specialization:", this.specialization);
    }
}
let profileData = new StudentDetails("Jahnavi", 203, "AI & DS");
profileData.displayRecord();
