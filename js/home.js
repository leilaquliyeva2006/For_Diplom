let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
  cart.classList.add("active");
};

closeCart.onclick = () => {
  cart.classList.remove("active");
};

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let removeCartButtons = document.getElementsByClassName("cart-remove");

  for (let i = 0; i < removeCartButtons.length; i++) {
    let button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  let quantityInputs = document.getElementsByClassName("cart-quantity");

  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  let addCart = document.getElementsByClassName("add-cart");
  for (let i = 0; i < addCart.length; i++) {
    let button = addCart[i];
    button.addEventListener("click", addCartClecked);
  }
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
}
function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
}
