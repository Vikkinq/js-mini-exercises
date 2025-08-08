const products = ["Shirt", "Cap", "Shoes"];

const updatedList = products.map((item) => {
  const price = Math.floor(Math.random() * 2000) + 100;
  return `${item} - P${price}`;
});

console.table(updatedList);
