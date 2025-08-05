const account = {
  Symon: {
    number: "09943462821",
    email: "fritzsymon23@gmail.com",
  },
  Faith: {
    number: "09563462821",
    email: "faith@gmail.com",
  },
};

const choiceInput = prompt("Enter an Action: Add Contact | List all");

if (choiceInput.toLowerCase() === "add" || choiceInput === "1") {
  const addedName = prompt("Enter Name: ");
  const addedNumber = prompt("Enter Number: ");
  const addedEmail = prompt("Enter Email: ");

  account[addedName] = {
    number: addedNumber,
    email: addedEmail,
  };
} else if (choiceInput.toLowerCase() === "view" || choiceInput === "2") {
  console.log(account);
}
