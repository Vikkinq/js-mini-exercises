const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Can use forEach
// number.forEach(function (num) {
//   console.log(num * 10);
// });

// // using for..of for this is much simpler
// for (let el of number) {
//   console.log(el);
// }

// number.map(function (num) {
//   return num * 2;
// });

// const add = (x, y) => {
//   console.log(x + y);
// };

// const square = (x) => {
//   console.log(x * x);
// };

// const rollDie = () => Math.floor(Math.random() * 6) + 1;

// const add = (a, b) => a + b;

// setTimeout(() => {
//   console.log("HEEELOOO!?");
// }, 2000);

// setInterval(() => {
//   console.log(Math.random());
// }, 1000);

// movies.some(movie => movie.year > 2025);

// const allEvens = (num) => {
//   return num.every((num) => num % 2 === 0);
// };

// Normal way to Function with Arrow Function
// const total = number.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });

// Explicit Function (Shorts the Top Function)
// const total = number.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

const minPrice = number.reduce((min, num) => {
  if (num > min) {
    return num;
  }

  return min;
});
