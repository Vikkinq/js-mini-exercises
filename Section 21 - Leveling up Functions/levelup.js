// function collectEggs() {
//   let totalEggs = 6;
//   console.log(totalEggs);
// }

// let greet = "Hello There";
// function greeting() {
//   let greet = "Heeeelllooooo!!!";
// }

// greeting();
// console.log(greet);

// const add = function (x, y) {
//   return x + y;
// };

// function isBetween(num) {
//   return num >= 50 && num <= 100;
// }

// function makeBetweenFunc(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   };
// }

// const child = makeBetweenFunc(0, 11);
// const kid = makeBetweenFunc(12, 18);
// const teen = makeBetweenFunc(19, 25);

// const myMath = {
//   PI: 3.1459,
//   square: function (num) {
//     return num * num;
//   },
//   cube: function (num) {
//     return num ** 3;
//   },
// };

// Can be used without function keyword
// const myMath = {
//   PI: 3.1459,
//   square(num) {
//     return num * num;
//   },
//   cube(num) {
//     return num ** 3;
//   },
// };

// Code Exercise for Function Methods Objects
// const square = {
//   area(side) {
//     return side * side;
//   },
//   perimeter(side) {
//     return side * 4;
//   },
// };

// square.area(10);
// square.perimeter(10);

// const dog = {
//   name: "Tanya",
//   color: "Brown",
//   breed: "Labrador",
//   bark() {
//     console.log(this.name);
//   },
// };

// Code Exercise Egg Laying Exercise
// const hen = {
//   name: "Helen",
//   eggCount: 0,
//   layAnEgg() {
//     this.eggCount++;
//     return "EGG";
//   },
// };

// Try / Catch
try {
  hello.toUpperCase();
} catch {
  console.log("It didnt work dumbass");
}
