class Transaction {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
  }
}

class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push(new Transaction("deposit", amount));
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }

    return `Deposit amount must be greater than zero.`;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push(new Transaction("withdraw", amount));
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }

    return `Insufficient balance or invalid amount.`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    let res = [];

    this.transactions.forEach((deposit) => {
      if (deposit.type == "deposit") {
        res.push(deposit.amount);
      }
    });

    return "Deposits: " + res.join(",");
  }

  listAllWithdrawals() {
    let res = [];

    this.transactions.forEach((withdrawal) => {
      if (withdrawal.type == "withdraw") {
        res.push(withdrawal.amount);
      }
    });

    return "Withdrawals: " + res.join(",");
  }
}

const myAccount = new BankAccount();
myAccount.deposit(5);
myAccount.deposit(3);
myAccount.withdraw(1);
myAccount.withdraw(7);
myAccount.deposit(3000);

console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());
