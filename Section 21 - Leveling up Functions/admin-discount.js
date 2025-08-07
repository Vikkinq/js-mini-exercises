// MINI PROJECT: "Simulated Admin Discount Dashboard (CLI Version)"

// 🎯 Goal:
// Build a CLI-style system where the admin can:
// Input item name, original price, and discount percentage
// System will:
// Calculate the discounted price
// Save the item + discount info in a local discountDB object or array
// View all discounts added so far using a method like showAllDiscounts()

const adminPanel = {
  discounts: [],
  addDiscount(name, price, percent) {
    const total = price - (price * percent) / 100;

    if (percent < 0 || percent > 100 || price === 0) {
      return "Invalid Input | Please Try Again";
    }

    const discountedProduct = {
      name,
      originalPrice: price,
      discountedPercent: percent,
      finalPrice: total,
    };

    this.discounts.push(discountedProduct);
  },
  showAllDiscout() {
    console.table(adminPanel.discounts);
  },
  clearDiscounts() {
    this.discounts.splice(0, this.discounts.length);
  },
};
