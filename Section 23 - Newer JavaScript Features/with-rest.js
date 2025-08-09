expenseList = [];
function addExpense(name, amount, ...tags) {
  const listOfExpenses = {
    name,
    amount,
    tags,
  };

  this.expenseList.push(listOfExpenses);
  console.table(expenseList);
}
