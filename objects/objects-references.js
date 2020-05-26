let myAccount = {
  name: 'Andrew Mead',
  expenses: 0,
  income: 0,
}

let addExpense = function(account, amount) {
  account.expenses += amount;
}

// addIncome
let addIncome = function(account, amount) {
  account.income += amount;
}

// resetAccount
let resetAccount = function(account) {
  account.income = 0;
  account.expenses = 0;
}

// getAccountSummary
let getAccountSummary = function(account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
}

// Account for Andrew has $900. $1000 in come. $100 in expense. 

// addIncome
addIncome(myAccount, 1000);
// addExpense
addExpense(myAccount, 50);
// addExpense
addExpense(myAccount, 50);
// getAccountSummary
console.log(getAccountSummary(myAccount));
// resetAccount
resetAccount(myAccount);
// getAccountSummary
console.log(getAccountSummary(myAccount));