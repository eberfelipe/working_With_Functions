const bankAccount = {
    name: "Maria",
    balance: 0,
    history: [],
    deposit(amount) {
        this.balance += amount;
        this.history.push({ type: "Deposit", amount: amount });
        return `Deposit of $${(amount / 100).toFixed(2)} made for the customer: ${this.name}.`;
    },
    withdraw(amount) {
        if (amount > this.balance) {
            return `Insufficient balance for the withdrawal of: ${this.name}.`;
        } else {
            this.balance -= amount;
            this.history.push({ type: "Withdrawal", amount: amount });
            return `Withdrawal of $${(amount / 100).toFixed(2)} made for the customer: ${this.name}.`;
        }
    },
    getStatement() {
        let statementStr = `Statement of ${this.name} - Balance: $${(this.balance / 100).toFixed(2)}\nHistory:\n`;
        this.history.forEach(transaction => {
            const formattedAmount = `$${(transaction.amount / 100).toFixed(2)}`;
            statementStr += `${transaction.type} of ${formattedAmount}\n`;
        });
        return statementStr.trim();
    }
};

// Testing
console.log(bankAccount.deposit(10000));
console.log(bankAccount.withdraw(50000));
console.log(bankAccount.withdraw(5000));
console.log(bankAccount.getStatement());
