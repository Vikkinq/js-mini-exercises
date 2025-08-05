console.log("WELCOME TO THE VOTING SYSTEM!");

const userName = prompt("Enter your name: ");
const choice = prompt("Enter | Exit");

const candidates = {
  Gabriel: 0,
  Eury: 0,
  Fritz: 0,
};

while (choice !== "quit") {
  const choice = prompt("Enter an Action: Vote | Results | Exit");
  if (choice.toLowerCase() === "vote" || choice === "1") {
    const chosenVote = prompt("Vote: Gabriel | Eury | Fritz");
    candidates[chosenVote]++;
    console.log("Thank you for Voting!");
  } else if (choice.toLowerCase() === "result" || choice === "2") {
    console.log("-=-=-=-=-=-");
    console.log("  RESULTS  ");
    for (let result in candidates) {
      console.log(`${result}: ${candidates[result]}`);
    }
    console.log("-=-=-=-=-=-");
  } else {
    console.log("You have left the Voting System.. Thank you!");
    break;
  }
}

console.log("Congrats!");
