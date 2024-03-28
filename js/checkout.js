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
