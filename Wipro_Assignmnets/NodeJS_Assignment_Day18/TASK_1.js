// Encapsulation and Private Properties:

console.log("Encapsulation and Private Properties:");
class BankAccount {
    #balance;
  
    constructor(initialBalance = 0) {
      if (initialBalance < 0) {
        throw new Error('Initial balance cannot be negative.');
      }
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount <= 0) {
        throw new Error('Deposit amount must be positive.');
      }
      this.#balance += amount;
      console.log(`Deposited amount: $${amount} and New Balance amount: $${this.#balance}`);
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        throw new Error('Withdrawal amount must be positive.');
      }
      if (amount > this.#balance) {
        throw new Error('Insufficient funds.');
      }
      this.#balance -= amount;
      console.log(`Withdraw amount: $${amount} and  New Balance amount: $${this.#balance}`);
    }
  
    checkBalance() {
      console.log(`Current Balance is: $${this.#balance}`);
      return this.#balance;
    }
  }
  
  const myAccount = new BankAccount(2500);
  
  myAccount.checkBalance();   
  myAccount.deposit(700);  
  try{  
    myAccount.withdraw(39990); 
  }
  catch(error){
    console.log(error.message);
  }

  myAccount.checkBalance();   
  
  // Trying to access the private balance property directly
  console.log(myAccount.balance);
  
  // Trying to change the private balance property directly
  myAccount.balance = 999987;
  myAccount.checkBalance();


console.log("\nStatic Methods and Properties:");
  
// Static Methods and Properties:
class MathUtility {
    static add(a, b) {
      return a + b;
    }
  
    static subtract(a, b) {
      return a - b;
    }
  
    static multiply(a, b) {
      return a * b;
    }
  
    static divide(a, b) {
      if (b === 0) {
        throw new Error('Cannot divide by zero.');
      }
      return a / b;
    }
  }
  

console.log("Addition: "+MathUtility.add(21, 47));       
console.log("Subtraction: "+MathUtility.subtract(88, 77));  
console.log("Multiplication: "+MathUtility.multiply(7, 8));   
console.log("Division: "+MathUtility.divide(54, 2));    
  