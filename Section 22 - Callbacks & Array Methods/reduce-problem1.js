const scores = [88, 95, 72, 60, 99, 84];

// const totalScore = scores.reduce((prev, current) => {
//   return prev + current;
// });

// console.log(totalScore);

const users = [
  { name: "Fritz", active: true },
  { name: "Joost", active: false },
  { name: "Majad", active: true },
  { name: "Leo", active: true },
];

const totalActive = users.reduce((count, user) => {
  if (user.active === true) {
    return count + 1;
  }
  return count;
}, 0);

console.log(totalActive);
