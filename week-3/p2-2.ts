class Bank {
    private balance: number = 5000;

    showBal() {
        console.log(this.balance);
    }
}

let br = new Bank();
br.showBal();