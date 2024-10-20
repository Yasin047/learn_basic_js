class Car {
  #realPrice = 1000;
  #sensitiveInfo() {
    return `This is sensitive info.`;
  }
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  play() {
    return `${this.name} is running...`;
  }
  pause() {
    return `${this.name} is stopped.`;
  }
  static age = 27;
  static info() {
    return `This car is running well...`;
  }
  getPrivateInfo() {
    return {
      privateProperty: this.#realPrice,
      privateMethod: this.#sensitiveInfo,
    };
  }
}

const car_1 = new Car("Ford", 2000);

class BankAccount {
  // Private property
  #balance = 0;

  // Getter for balance
  get balance() {
    return this.#balance;
  }

  // Setter for balance with validation
  set setBalance(amount) {
    if (amount < 0) {
      console.error("Balance cannot be negative");
    } else {
      this.#balance = amount;
    }
  }

  // Method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    } else {
      console.error("Deposit amount must be positive");
    }
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.error("Invalid withdrawal amount");
    }
  }
}

// Creating a new bank account instance
const myAccount = new BankAccount();

// Deposit money
myAccount.deposit(1000);
console.log(myAccount.balance); // Output: 1000

// Withdraw money
myAccount.withdraw(500);
console.log(myAccount.balance); // Output: 500

// Attempt to set an invalid balance
myAccount.setBalance = -200; // Output: "Balance cannot be negative"
console.log(myAccount.balance); // Output: 500

// Attempt to directly modify the balance (it’s controlled by the setter)
myAccount.balance = 1500;
console.log(myAccount.balance); // Output: 1500
