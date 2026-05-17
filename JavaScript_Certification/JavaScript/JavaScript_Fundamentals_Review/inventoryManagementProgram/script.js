const inventory = [];

function findProductIndex(productName) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i]["name"] == productName.toLowerCase()) {
      return i;
    }
  }

  return -1;
}

function addProduct(product) {
  const idx = findProductIndex(product.name);

  if (idx !== -1) {
    inventory[idx].quantity += product.quantity;
    console.log(inventory[idx].name + " quantity updated");
  } else {
    inventory.push({
      name: product.name.toLowerCase(),
      quantity: product.quantity,
    });
    console.log(product.name.toLowerCase() + " added to inventory");
  }
  }

function removeProduct(productName, quantity) {
  const idx = findProductIndex(productName);

  if (idx === -1) {
    console.log(productName.toLowerCase() + " not found");
    return;
  }

  const available = inventory[idx].quantity;
  if (quantity > available) {
    console.log(
      `Not enough ${productName.toLowerCase()} available, remaining pieces: ${available}`,
    );
    return;
  }

  inventory[idx].quantity -= quantity;

  if (inventory[idx].quantity === 0) {
    inventory.splice(idx, 1);
  } else {
    console.log(
      `Remaining ${productName.toLowerCase()} pieces: ${inventory[idx].quantity}`,
    );
  }
}
