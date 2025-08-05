let maxNum = parseInt(prompt("Enter the maximum Number: "));

while (!maxNum) {
  maxNum = parseInt(prompt("Enter the maximum Number: "));
}

const targetNum = Math.floor(Math.random() * maxNum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter Guess: "));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Too High! Enter new Guess");
  } else if (guess === "q") {
    break;
  } else {
    guess = prompt("Too Low! Enter New Guess: ");
  }
}

console.log(`Congrats! You Guessed ${attempts} times :)`);
