// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods. 

class Account {
    #balance;
    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}`);
        } else if (amount > this.#balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }
    getBalance() {
        return this.#balance;
    }
}

const myAccount = new Account(100);
myAccount.deposit(50);
myAccount.withdraw(30);
console.log(`Current Balance: $${myAccount.getBalance()}`);
myAccount.withdraw(150); 
