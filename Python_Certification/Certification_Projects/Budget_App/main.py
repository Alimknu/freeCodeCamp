class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []

    def __str__(self):
        string = [self.name.center(30, "*")]

        for item in self.ledger:
            description = item["description"][:23]
            amount = f"{item['amount']:.2f}"
            string.append(f"{description:<23}{amount:>7}")
            
        string.append(f"Total: {self.get_balance():.2f}")

        return "\n".join(string)
    
    def deposit(self, amount, description = ''):
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description = ''):
        if (self.check_funds(amount)):
            self.ledger.append({"amount": -amount, "description": description})
            return True
        return False

    def get_balance(self):
        balance = 0

        for transfer in self.ledger:
            balance += transfer["amount"]
        
        return balance

    def transfer(self, amount, category):
        if (self.check_funds(amount)):
            self.withdraw(amount, f"Transfer to {category.name}")
            category.deposit(amount, f"Transfer from {self.name}")
            return True
        else:
            return False

    def check_funds(self, amount):
        funds = self.get_balance()

        if (funds >= amount):
            return True
        
        return False

def create_spend_chart(categories):
    spend_per_cat = []

    for category in categories:
        spending = sum(-item["amount"] for item in category.ledger if item["amount"] < 0)
        spend_per_cat.append(spending)

    total_spending = sum(spend_per_cat)

    percentages = []

    for spending in spend_per_cat:
        if total_spending == 0:
            percentages.append(0)
        else:
            percent = (spending / total_spending) * 100
            percentages.append(int(percent // 10) * 10)
    
    string = "Percentage spent by category\n"

    for i in range(100, -1, -10):
        string += f"{i:>3}| "
        
        for perc in percentages:
            if perc >= i:
                string += "o  "
            else:
                string += "   "
        string += "\n"

    string += "    " + "-" * (len(categories) * 3 + 1) + "\n"

    max_len = max(len(category.name) for category in categories)

    for row in range(max_len):
        string += "     "

        for category in categories:
            if row < len(category.name):
                string += f"{category.name[row]}  "
            else:
                string += "   "
        
        if row < max_len - 1:
            string += "\n"
        
    return string