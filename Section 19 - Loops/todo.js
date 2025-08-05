let choice = prompt("Choose an Action: Add | List | Delete | Quit");
const toDoList = ["Gym"];

while (choice.toLowerCase() !== "quit") {
  choice = prompt("Choose an Action: Add | List | Delete | Quit");
  if (choice.toLowerCase() === "add" || choice === "1") {
    const addToDo = prompt("Add: ");
    toDoList.push(addToDo);
    console.log(`You Have Added ${addToDo}`);
  } else if (choice.toLowerCase() === "list" || choice === "2") {
    console.log("-=-=-=-=-=-=-");
    console.log("To Do List: ");
    for (let i = 0; i < toDoList.length; i++) {
      console.log(`${i}: ${toDoList[i]}`);
    }
    console.log("-=-=-=-=-=-=-");
  } else if (choice.toLowerCase() === "delete" || choice === "3") {
    let removeToDo = prompt("Select a List to Remove: ");

    // // Using Int or Number to Remove
    // const deleted = toDoList.splice(removeToDo, 1);
    // console.warn(`${deleted} has Been Deleted`);

    // Using String to Remove
    const index = toDoList.indexOf(removeToDo);
    if (index !== -1) {
      toDoList.splice(index, 1);
      console.warn(`${removeToDo} has Been Deleted`);
    } else {
      console.log("Item Not Found");
    }
  } else {
    break;
  }
}

console.warn("You have Left the App");
