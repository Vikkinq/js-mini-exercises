const applyDiscount = {
  monthlyDiscount(price, discount) {
    const total = price - (price * discount) / 100;
    console.log(`Discount: ${discount}%`);
    console.log(`Total: P${total}`);
    return total;
  },
  yearlyDIscount(price, discount) {
    const total = price - (price * discount) / 100;
    console.log(`Discount: ${discount}%`);
    console.log(`Total: P${total}`);
    return total;
  },
};

applyDiscount.monthlyDiscount(500, 20);
applyDiscount.yearlyDIscount(1000, 50);
