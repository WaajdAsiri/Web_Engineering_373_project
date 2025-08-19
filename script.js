// script.js
let total = 0;

function addToCart(item, price) {
  const cartItems = document.getElementById("cart-items");
  const li = document.createElement("li");
  li.innerHTML = `${item} - <span class="price">$${price.toFixed(2)}</span>`;
  cartItems.appendChild(li);
  total += price;
  document.getElementById(
    "total"
  ).innerHTML = `Total: <span class="price">$${total.toFixed(2)}</span>`;
}
