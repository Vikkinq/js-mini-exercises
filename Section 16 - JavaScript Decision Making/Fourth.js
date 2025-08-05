// OR Operator

const age = prompt("Enter your Age: ");

if ((age >= 0 && age < 5) || age >= 65) {
  console.log("You are " + age + ". Therefore its Free");
} else if (age >= 5 && age < 10) {
  console.log("$10");
} else if (age >= 10 && age < 65) {
  console.log("$20");
}
