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

document.getElementById("checkoutForm").addEventListener("submit", function (event) {
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
