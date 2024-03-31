const urlParams = new URLSearchParams(window.location.search);
const totalPrice = urlParams.get("total");
const encodedItems = urlParams.get("items");
const items = JSON.parse(decodeURIComponent(encodedItems));

document.getElementById("totalPrice").innerText = `$${totalPrice}`;

const itemsList = document.getElementById("itemsList");
items.forEach((item) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = item.productImg;
  img.alt = item.title;
  img.classList.add("product-image");
  li.appendChild(img);
  li.innerHTML += `<span>${item.title} - ${item.price}</span>`;
  itemsList.appendChild(li);
});

const expirationYearSelect = document.getElementById("expiration-year");
const currentYear = new Date().getFullYear();
const yearsAhead = 10;

for (let i = 0; i <= yearsAhead; i++) {
  const option = document.createElement("option");
  const year = currentYear + i;
  option.text = year;
  option.value = year;
  expirationYearSelect.add(option);
}

document
  .getElementById("checkoutForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const address = formData.get("address");
    const paymentMethod = formData.get("payment-method");
    const cardNumber = formData.get("card-number");
    const cvv = formData.get("cvv");

    if (!name || !email || !address || !paymentMethod) {
      alert("Please complete all fields.");
      return;
    }

    if (!isEmailValid(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isCardValid(cardNumber) || !isCvvValid(cvv)) {
      alert("Please enter a valid card number and CVV.");
      return;
    }

    completeOrder(name, email, address, paymentMethod);
  });

function completeOrder(name, email, address, paymentMethod) {
  localStorage.removeItem("cartItems");
  localStorage.removeItem("cartTotal");
  window.location.href = "success.html";
}

function back() {
  window.location.href = "home.html";
}

const cardNumberInput = document.getElementById("card-number");
const cvvInput = document.getElementById("cvv");

cardNumberInput.addEventListener("input", function (event) {
  this.value = this.value.replace(/\D/g, "");
});

cvvInput.addEventListener("input", function (event) {
  this.value = this.value.replace(/\D/g, "");
});

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isCardValid(cardNumber) {
  const cardNumArr = cardNumber.replace(/\D/g, "").split("").reverse();

  let sum = 0;
  for (let i = 0; i < cardNumArr.length; i++) {
    let cardNum = parseInt(cardNumArr[i]);

    if ((i + 1) % 2 === 0) {
      cardNum *= 2;
      if (cardNum > 9) {
        cardNum -= 9;
      }
    }
    sum += cardNum;
  }
  return sum % 10 === 0;
}

function isCvvValid(cvv) {
  return /^\d{3}$/.test(cvv);
}
