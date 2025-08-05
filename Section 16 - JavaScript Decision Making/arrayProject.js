console.log("Welcome to Grocery List Manager!");

const store = { Fruits: [], Beverages: [], Snacks: [] };

// Add
const grocery = prompt("Choose an Action: Add | Remove | List | Exit");
if (grocery === "Add" || grocery === "1") {
  const choice = prompt("Choose a Category: Fruits | Beverages | Snacks");
  if (
    choice === "Fruits" ||
    choice === "1" ||
    choice.toLowerCase() === "fruits"
  ) {
    category = "Fruits";
    const fruit = prompt("Enter an Item to Add");
    store.Fruits.push(fruit);
    console.log(store);
  } else if (choice === "Beverages" || choice === 2) {
    const beverages = prompt("Enter an Item to Add");
    console.log(beverages);
    store.Beverages.push(beverages);
  } else if (choice === "Snacks" || choice === 3) {
    const snack = prompt("Enter an Item to Add");
    console.log(snack);
    store.Snacks.push(snack);
  }

  // Remove
} else if (grocery === "remove" || grocery === "2") {
  const choice = prompt(
    "Choose a Category to Remove: Fruits | Beverages | Snacks"
  );
  if (choice === "Fruits" || choice === "fruits") {
    store[choice].pop;
  } else if (choice === "Beverages" || choice === 2) {
    store[choice].pop;
  } else if (choice === "Snacks" || choice === 3) {
    store[choice].pop;
  }
}

// List
else if (grocery === "List" || grocery === "3") {
  let choice = prompt(
    "Choose a Category to Remove: Fruits | Beverages | Snacks"
  );
  if (choice === "Fruits" || choice === "fruits") {
    const fruitList = store[choice].pop;
    fruitList;
  } else if (choice === "Beverages" || choice === 2) {
    store[choice].pop;
  } else if (choice === "Snacks" || choice === 3) {
    store[choice].pop;
  }
}
