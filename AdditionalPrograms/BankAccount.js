"use strict";
// Create a BankAccount Class with deposit(), withdraw(), and displayBalance() Methods
class BankAccount {
    accountHolder;
    accountNumber;
    currentBalance;
    constructor(holderName, accountId, initialAmount) {
        this.accountHolder = holderName;
        this.accountNumber = accountId;
        this.currentBalance = initialAmount;
    }
    deposit(depositAmount) {
        this.currentBalance += depositAmount;
        console.log(depositAmount + " deposited successfully.");
    }
    withdraw(withdrawAmount) {
        if (withdrawAmount <= this.currentBalance) {
            this.currentBalance -= withdrawAmount;
            console.log(withdrawAmount + " withdrawn successfully.");
        }
        else {
            console.log("Insufficient balance.");
        }
    }
    displayBalance() {
        console.log("Account Holder:", this.accountHolder);
        console.log("Account Number:", this.accountNumber);
        console.log("Available Balance:", this.currentBalance);
    }
}
let myAccount = new BankAccount("Jahnavi", 12345, 5000);
myAccount.deposit(2000);
myAccount.withdraw(1500);
myAccount.displayBalance();
