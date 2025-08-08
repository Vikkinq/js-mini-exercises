const users = [
  { name: "Fritz", active: true },
  { name: "Joost", active: false },
  { name: "Majad", active: true },
  { name: "Ryandale", active: false },
  { name: "Leo", active: true },
];

const activeUsers = users.filter((areActive) => {
  return areActive.active === true;
});

for (let users of activeUsers) {
  console.log(`${users.name} is Active`);
}

console.table(activeUsers);
