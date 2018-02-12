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

  (!l) ? console.log("Your shopping cart is empty.") : ''

  let itemAndPrices = [];

  for (var i = 0; i < l; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price =  itemAndPrice[item];

    itemAndPrices.push(`${item} at \$${price}`);
  }

  switch (itemAndPrices.length) {
    case 1:
      break;
    case 2:
      itemAndPrices = itemAndPrices.join(` and `);
      break;
    default:
      itemAndPrices[l-1] = "and ".concat(itemAndPrices[l-1]);
      
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
