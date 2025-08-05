// using If and Else If Statement

let age = prompt("Enter Age: ");

if (age <= 5) {
  console.warn("You Are Free to Go");
} else if (age <= 10) {
  console.warn("CHILD! You must pay $10");
} else if (age <= 65) {
  console.warn("ADULT! You must pay $20");
} else if (age > 65) {
  console.warn("You are Old as hell.. Give me $10");
}
