// using AND Operator

let pw = prompt("Enter your Password: ");

if (pw.length >= 6 && pw.indexOf(" ") === -1) {
  console.log("Valid Password");
  console.log(pw);
} else {
  console.log("Enter a Valid Password");
  console.log(pw);
}
