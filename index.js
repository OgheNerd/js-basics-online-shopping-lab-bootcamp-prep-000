var cart = [];

function getCart(itemName) {
 return cart.push(itemName);
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
  const price = Math.floor(Math.random() * 100) + 1;

  cart.push({ [item]: price });

  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  // write your code here
  const l = cart.length;

  if (!l) {
    console.log("Your shopping cart is empty.");
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
    return false
  }
}
