// let str = "LOL";

// for (let i = 0; i <= 4; i++) {
//   console.log("Outer:", i);
//   for (let j = 0; j < str.length; j++) {
//     console.log("   Inner:", str[j]);
//   }
// }

const seatingChart = [
  ["Eury", "Sy", "Gab"],
  ["Lei", "Gard", "Kyubs"],
  ["Paps", "Steph", "Allen"],
];

// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`Row #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(`   Seat #${j + 1}:`, row[j]);
//   }
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// const secretKey = "pitoypisot";

// let guess = prompt("Enter the Secret Key: ");
// while (guess !== secretKey) {
//   prompt("Enter again: ");
// }

// console.log("Congrats!");

// Break Keyword
// let input = prompt("Word");
// while (true) {
//   input = prompt(input);
//   if (input === "tae") {
//     break;
//   }
// }

// console.log("Nice one");

// For ... of Loop
// for (let row of seatingChart) {
//   for (let student of row) {
//     console.log(student);
//   }
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:

for (let rowNum of numbers) {
  console.log(rowNum * rowNum);
}
