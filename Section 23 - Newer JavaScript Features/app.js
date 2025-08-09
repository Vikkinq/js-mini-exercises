// const cats = ["Blue", "Scout", "Rocket"];
// const dogs = ["Tanya", "Moss", "Shadow"];

// const allPets = [...cats, ...dogs];

// const feline = {
//   legs: 4,
//   family: "Felidae",
// };

// const canine = {
//   isFurry: true,
//   family: "Caniene",
// };

// const catDog = {
//   ...feline,
//   ...canine,
// };

// function sum(...nums) {
//   return nums.reduce((total, el) => total + el);
// }

const user = {
  email: "taemo@gmail.com",
  password: "taemotaemo",
  firstName: "Symon",
  lastName: "Blancalfor",
  born: "2002",
  died: "3000",
  city: "Pontevedra",
};

const { firstName, lastName } = user;

const { born: birthYear } = user;
