console.log("Welcome to Grocery List Manager!");

const store = [];

const actionStore = prompt("Choose an Action: Add | Remove | List | Exit");
if (actionStore.toLowerCase === "add" || actionStore === "1") {
  let addStore = prompt("Enter an Item: ");
  store.push(addStore);
} else if (actionStore.toLowerCase === "remove" || actionStore === "2") {
  let removeStore = prompt("Remove an Item: ");
  store.pop();
}
