const form = document.querySelector("form");
const ul = document.querySelector("#list");

const productInput = document.querySelector("#product");
const qtyInput = document.querySelector("#qty");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const product = productInput.value;
  const qty = qtyInput.value;

  const li = document.createElement("li");
  li.textContent = `${qty} ${product}`;
  ul.appendChild(li);
  productInput.value = "";
  qtyInput.value = "";
});
