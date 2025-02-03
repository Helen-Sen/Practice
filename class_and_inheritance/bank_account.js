// Task: Bank Account System
// Create a class BankAccount with the following features:
// 1️⃣ Properties:
// #balance (private): Stores the account balance.
// ownerName (public): Stores the account owner's name.
// 2️⃣ Methods:
// deposit(amount): Adds money to the balance (only if amount > 0).
// withdraw(amount): Deducts money only if there is enough balance. Otherwise, print "Insufficient funds!".
//     checkBalance(): Returns the current balance.
// Bonus Challenge 🏆
// Create a subclass SavingsAccount that:

// Inherits from BankAccount.
// Adds a #interestRate (private) property.
// Has a addInterest() method that increases the balance based on the interest rate.

class BankAccount {
  #balance;
  constructor(ownerName, balance) {
    this.ownerName = ownerName;
    this.#balance = balance;
  }

  get balance() {
    return this.#balance;
  }

  set balance(newBalance) {
    this.#balance = newBalance;
    console.log(`BankAccount: New balance is ${this.#balance}`);
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance = this.#balance + amount;
      console.log(`Your new balance equal ${this.#balance}`);
      // return this.#balance;
    } else {
      console.log("For deposit operation amount should be more then 0");
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance = this.#balance - amount;
      console.log(`Please, take your ${amount} units`);
    } else {
      console.log("Insufficient funds!");
    }
  }
  checkBalance() {
    return this.#balance;
  }
}

class SavingsAccount extends BankAccount {
  #interestRate;
  constructor(ownerName, balance, interestRate) {
    super(ownerName, balance);
    this.#interestRate = interestRate;
  }

  addInterest() {
    // increases the balance based on the interest rate
    console.log(`SavingsAccount: Current balance is ${this.balance}`);
    this.balance = this.balance * (1 + this.#interestRate / 100);
    // console.log(`New balance is ${super.balance}`);
    return super.balance;
  }
}

const user1 = new BankAccount("Alice", 500);
user1.deposit(200);
user1.withdraw(100);
console.log(user1.checkBalance()); // Expected: 600

const user2 = new SavingsAccount("Bob", 1000, 5);
console.log(user2.balance);
user2.balance = 1200; 
user2.addInterest();
console.log(user2.checkBalance()); // Expected: 1050
