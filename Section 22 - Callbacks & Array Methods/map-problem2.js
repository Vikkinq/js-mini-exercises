const products = [
  { name: "Laptop", price: 40000 },
  { name: "Phone", price: 15000 },
  { name: "Headphones", price: 2000 },
];

const finalProduct = products.map((item) => {
  return {
    name: item.name,
    originalPrice: item.price,
    finalPrice: item.price + item.price * 0.12,
  };
});

console.table(finalProduct);
