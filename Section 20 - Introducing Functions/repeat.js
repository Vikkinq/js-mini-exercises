function repeatString(word, n) {
  result = "";
  for (let i = 0; i < n; i++) {
    result += word;
    console.log(result);
  }
  return result;
}

const wordTime = prompt("Enter Word: ");
const numTimes = parseInt(prompt("Enter 'N' Times: "));

repeatString(wordTime, numTimes);
