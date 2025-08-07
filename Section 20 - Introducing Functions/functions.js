// DEFINE YOUR FUNCTION BELOW:

// DEFINE YOUR FUNCTION BELOW:

// function lastElement(array) {
//   if (array.length > 0) {
//     let result = array[array.length - 1];
//     return result;
//   } else if (array.length === 0) {
//     return null;
//   }
// }

// lastElement([3, 5, 7]);
// lastElement([1]);
// lastElement([]);

// DEFINE YOUR FUNCTION BELOW:

function capitalize(word) {
  let firstWord = word[0];
  let capital = firstWord.toUpperCase();

  let word1 = word.slice(1);

  console.log(capital + word1);

  return capital + word1;
}

capitalize("eggplant");
capitalize("pamplemousse");
capitalize("squid");
