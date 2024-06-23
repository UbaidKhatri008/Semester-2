class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}. New Balance: ${this.balance}`);
        } else {
            console.log("Insufficient balance.");
        }
    }
    getBalance() {
        return this.balance;
    }

    getAccountDetails() {
        return {
            accountNumber: this.accountNumber,
            accountHolder: this.accountHolder,
            balance: this.balance
        };
    }
}


const myAccount = new BankAccount("42332323", "Ubaid Khatri", 1000);
console.log(myAccount.getAccountDetails());


myAccount.deposit(500);


myAccount.withdraw(200);

