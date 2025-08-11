// const btn = document.querySelector("#clickbtn");
// const h1 = document.querySelector("h1");

// btn.addEventListener("click", () => {
//   alert("HELLO THERE!");
// });

// btn.addEventListener("click", () => {
//   const rgb = randomColor();
//   document.body.style.backgroundColor = rgb;
//   h1.innerText = `Color: ${rgb}`;
// });

// const randomColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r},${g}, ${b})`;
// };

const form = document.querySelector("#dogguForm");
const input = document.querySelector("#dogName");
const ul = document.querySelector("#dogs");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userInput = input.value;

  const li = document.createElement("li");
  li.textContent = userInput;
  dogs.appendChild(li);
  input.value = "";
});
