// const userNameGen = (name) => {
//     const [firstName, lastName] = name.split(" ");
//     const userName =
// }

const names = ["Fritz Symon", "Good Game"];

const userNameGen = names.map((username) => {
  const [firstName, lastName] = username.split(" ");
  const generatedName =
    firstName.slice(0, 1).toLowerCase() + lastName.toLowerCase();
  return {
    fullName: username,
    generatedName,
  };
});

console.table(userNameGen);
