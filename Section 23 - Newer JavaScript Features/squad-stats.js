function handleOrders(...orders) {
  let total = 0;

  for (let order of orders) {
    const qty = order.quantity || 1;
    const subtotal = qty * order.price;
    console.log(`${order.item} x${qty} = ₱${subtotal}`);
    total += subtotal;
  }
  console.log(`Total: ₱${total}`);
}
