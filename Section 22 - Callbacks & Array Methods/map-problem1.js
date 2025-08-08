const names = ["juan dela cruz", "maria clara", "pedro penduko"];

// for (let el of names) {
//   console.log(el);
// }

const contacts = names.map((str) => {
  let splitName = str.split(" ");
  const capitalWord = splitName.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalWord.join(" ");
});

console.table(contacts);
