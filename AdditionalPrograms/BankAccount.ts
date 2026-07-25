// Create a BankAccount Class with deposit(), withdraw(), and displayBalance() Methods

class BankAccount {
    accountHolder: string;
    accountNumber: number;
    currentBalance: number;

    constructor(holderName: string, accountId: number, initialAmount: number) {
        this.accountHolder = holderName;
        this.accountNumber = accountId;
        this.currentBalance = initialAmount;
    }

    deposit(depositAmount: number): void {
        this.currentBalance += depositAmount;
        console.log(depositAmount + " deposited successfully.");
    }

    withdraw(withdrawAmount: number): void {
        if (withdrawAmount <= this.currentBalance) {
            this.currentBalance -= withdrawAmount;
            console.log(withdrawAmount + " withdrawn successfully.");
        } else {
            console.log("Insufficient balance.");
        }
    }

    displayBalance(): void {
        console.log("Account Holder:", this.accountHolder);
        console.log("Account Number:", this.accountNumber);
        console.log("Available Balance:", this.currentBalance);
    }
}

let myAccount = new BankAccount("Jahnavi", 12345, 5000);

myAccount.deposit(2000);
myAccount.withdraw(1500);
myAccount.displayBalance();