for (let i = 0; i < 3; i++) {
  const card = document.querySelector("#cards");
  const cardCreation = document.createElement("div");
  cardCreation.classList.add("card");

  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  h2.textContent = `Card ${i}`;
  p.textContent = `Paragraph ${i}`;

  cardCreation.appendChild(h2);
  cardCreation.appendChild(p);
  card.appendChild(cardCreation);
}
