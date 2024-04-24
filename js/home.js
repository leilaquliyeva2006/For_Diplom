// import bags from "./bags.js";

// const bagsContainer = document.querySelector(".shop-content");

// bags.forEach((bag) => {
//   bagsContainer.innerHTML += `
//     <div class="product-box">
//       <img src="${bag.images[0]}" alt="" class="product-img" />
//       <h2 class="product-title">${bag.name}</h2>
//       <div class="product-box--footer">
//         <span class="price">$${bag.price}</span>
//         <a href="/html/about.html?id=${bag.id}" class="btn-about">About</a>
//         <i class="bx bx-shopping-bag add-cart"></i>
//       </div>
//     </div>
//   `;
// });

// let cartIcon = document.querySelector("#cart-icon");
// let cart = document.querySelector(".cart");
// let closeCart = document.querySelector("#close-cart");

// cartIcon.onclick = () => {
//   cart.classList.add("active");
// };

// closeCart.onclick = () => {
//   cart.classList.remove("active");
// };

// if (document.readyState == "loading") {
//   document.addEventListener("DOMContentLoaded", ready);
// } else {
//   ready();
// }

// function ready() {
//   let removeCartButtons = document.getElementsByClassName("cart-remove");

//   for (let i = 0; i < removeCartButtons.length; i++) {
//     let button = removeCartButtons[i];
//     button.addEventListener("click", removeCartItem);
//   }
//   let quantityInputs = document.getElementsByClassName("cart-quantity");

//   for (let i = 0; i < quantityInputs.length; i++) {
//     let input = quantityInputs[i];
//     input.addEventListener("change", quantityChanged);
//   }
//   let addCart = document.getElementsByClassName("add-cart");
//   for (let i = 0; i < addCart.length; i++) {
//     let button = addCart[i];
//     button.addEventListener("click", addCartClicked);
//   }
//   loadCartItems();
// }

// function removeCartItem(event) {
//   let buttonClicked = event.target;
//   buttonClicked.parentElement.remove();
//   updateTotal();
//   saveCartItems();
//   updateCartIcon();
// }

// function quantityChanged(event) {
//   let input = event.target;
//   if (isNaN(input.value) || input.value <= 0) {
//     input.value = 1;
//   }
//   updateTotal();
//   saveCartItems();
//   updateCartIcon();
// }

// function addCartClicked(event) {
//   let button = event.target;
//   let shopProducts = button.closest(".product-box");
//   let title = shopProducts.querySelector(".product-title").innerText;
//   let price = shopProducts.querySelector(".price").innerText;
//   let productImg = shopProducts.querySelector(".product-img").src;
//   addProductToCart(title, price, productImg);
//   updateTotal();
//   saveCartItems();
//   updateCartIcon();
// }

// function addProductToCart(title, price, productImg) {
//   let cartShopBox = document.createElement("div");
//   cartShopBox.classList.add("cart-box");
//   let cartItems = document.getElementsByClassName("cart-content")[0];
//   let cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
//   for (let i = 0; i < cartItemsNames.length; i++) {
//     if (cartItemsNames[i].innerText == title) {
//       alert("You have already added this item to cart");
//       return;
//     }
//   }
//   let cartBoxContent = `
//     <img src="${productImg}" alt="" class="card-img" />
//     <div class="detail-box">
//       <div class="cart-product-title">${title}</div>
//       <div class="cart-price">${price}</div>
//       <input type="number" value="1" class="cart-quantity" />
//     </div>
//     <i class="bx bx-trash-alt cart-remove"></i>`;
//   cartShopBox.innerHTML = cartBoxContent;
//   cartItems.append(cartShopBox);
//   cartShopBox
//     .getElementsByClassName("cart-remove")[0]
//     .addEventListener("click", removeCartItem);
//   cartShopBox
//     .getElementsByClassName("cart-quantity")[0]
//     .addEventListener("change", quantityChanged);
//   saveCartItems();
//   updateCartIcon();
// }
// function updateTotal() {
//   let cartContent = document.getElementsByClassName("cart-content")[0];
//   let cartBoxes = cartContent.getElementsByClassName("cart-box");
//   let total = 0;
//   for (let i = 0; i < cartBoxes.length; i++) {
//     let cartBox = cartBoxes[i];
//     let priceElement = cartBox.getElementsByClassName("cart-price")[0];
//     let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
//     let price = Number(priceElement.innerText.replace("$", ""));
//     let quantity = quantityElement.value;
//     total += price * quantity;
//   }
//   document.getElementsByClassName("total-price")[0].innerText = "$" + total;

//   // Проверяем, установлен ли cartTotal в localStorage
//   let cartTotal = localStorage.getItem("cartTotal");
//   if (cartTotal === null) {
//     // Если cartTotal еще не установлен, устанавливаем его в 0
//     localStorage.setItem("cartTotal", "0");
//     cartTotal = 0; // Устанавливаем значение cartTotal в 0
//   } else {
//     // Если cartTotal уже установлен, преобразуем его в число
//     cartTotal = parseInt(cartTotal);
//   }

//   // Обновляем значение cartTotal в localStorage
//   localStorage.setItem("cartTotal", (cartTotal + total).toString());
//   console.log("Total updated:", total);
// }



// function saveCartItems() {
//   let cartContent = document.getElementsByClassName("cart-content")[0];
//   let cartBoxes = cartContent.getElementsByClassName("cart-box");
//   let cartItems = [];
//   for (let i = 0; i < cartBoxes.length; i++) {
//     let cartBox = cartBoxes[i];
//     let titleElement = cartBox.getElementsByClassName("cart-product-title")[0];
//     let priceElement = cartBox.getElementsByClassName("cart-price")[0];
//     let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
//     let productImg = cartBox.getElementsByClassName("card-img")[0].src;
//     let item = {
//       title: titleElement.innerText,
//       price: priceElement.innerText,
//       quantity: quantityElement.value,
//       productImg: productImg,
//     };
//     cartItems.push(item);
//   }
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
// }

// function loadCartItems() {
//   let cartItems = localStorage.getItem("cartItems");
//   if (cartItems) {
//     cartItems = JSON.parse(cartItems);

//     for (let i = 0; i < cartItems.length; i++) {
//       let item = cartItems[i];
//       addProductToCart(item.title, item.price, item.productImg);

//       let cartBoxes = document.getElementsByClassName("cart-box");
//       let cartBox = cartBoxes[cartBoxes.length - 1];
//       let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
//       quantityElement.value = item.quantity;
//     }
//   }
//   let cartTotal = localStorage.getItem("cartTotal");
//   if (cartTotal) {
//     document.getElementsByClassName("total-price")[0].innerText =
//       "$" + cartTotal;
//   }
//   updateCartIcon();
// }

// function updateCartIcon() {
//   let cartBoxes = document.getElementsByClassName("cart-box");
//   let quantity = 0;
//   if (cartBoxes.length > 0) {
//     for (let i = 0; i < cartBoxes.length; i++) {
//       let cartBox = cartBoxes[i];
//       let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
//       quantity += Number(quantityElement.value);
//     }
//   } else {
//     quantity = 0;
//   }
//   let cartIcon = document.querySelector("#cart-icon");
//   cartIcon.setAttribute("data-quantity", quantity);
// }

// document.addEventListener("DOMContentLoaded", function () {
//   let payNowButton = document.querySelector(".btn-buy");

//   payNowButton.addEventListener("click", function () {
//     let cartContent = document.querySelector(".cart-content");
//     if (cartContent.children.length === 0) {
//       alert("Your cart is empty. Please add some products.");
//     } else {
//       let cartTotal = localStorage.getItem("cartTotal");
//       let cartItems = localStorage.getItem("cartItems");
//       window.location.href = `html/checkout.html?total=${cartTotal}&items=${encodeURIComponent(
//         cartItems
//       )}`;
//     }
//   });
// });
// document.addEventListener("DOMContentLoaded", function () {
//   function displayItemsOnPage(currentPage) {
//     const itemsPerPage = 10;
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const itemsToShow = bags.slice(startIndex, endIndex);

//     const shopContent = document.querySelector(".shop-content");
//     shopContent.innerHTML = "";

//     itemsToShow.forEach((item) => {
//       const itemElement = document.createElement("div");
//       itemElement.classList.add("product-box");
//       itemElement.innerHTML = `
//         <img src="${item.images[0]}" alt="" class="product-img" />
//         <h2 class="product-title">${item.name}</h2>
//         <div class="product-box--footer">
//           <span class="price">$${item.price}</span>
//           <a href="/html/about.html?id=${item.id}" class="btn-about">About</a>
//           <i class="bx bx-shopping-bag add-cart"></i>
//         </div>
//       `;
//       shopContent.appendChild(itemElement);
//       const addToCartButton = itemElement.querySelector(".add-cart");
//       addToCartButton.addEventListener("click", () => {
//         addProductToCart(
//           item.brand + " " + item.name,
//           "$" + item.price,
//           item.images[0]
//         );
//       });
//     });

//     const pageInfo = document.getElementById("page-info");
//     pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(
//       bags.length / itemsPerPage
//     )}`;
//   }

//   displayItemsOnPage(1);

//   document.getElementById("prev-page").addEventListener("click", () => {
//     let currentPage = parseInt(
//       document.getElementById("page-info").textContent.split(" ")[1]
//     );
//     if (currentPage > 1) {
//       currentPage--;
//       displayItemsOnPage(currentPage);
//     }
//   });

//   document.getElementById("next-page").addEventListener("click", () => {
//     let currentPage = parseInt(
//       document.getElementById("page-info").textContent.split(" ")[1]
//     );
//     const totalPages = Math.ceil(bags.length / 10);
//     if (currentPage < totalPages) {
//       currentPage++;
//       displayItemsOnPage(currentPage);
//     }
//   });
// });

// function sortByPriceDescending(a, b) {
//   return b.price - a.price;
// }


// function sortByPriceAscending(a, b) {
//   return a.price - b.price;
// }


// function sortByBrandName(a, b) {
//   const brandA = a.brand.toUpperCase();
//   const brandB = b.brand.toUpperCase();
//   if (brandA < brandB) {
//     return -1;
//   }
//   if (brandA > brandB) {
//     return 1;
//   }
//   return 0;
// }

// function sortByName(a, b) {
//   const nameA = a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }
//   return 0;
// }


// function displayItemsOnPage(pageNumber) {
//   const itemsPerPage = 10;
//   const startIndex = (pageNumber - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const itemsToShow = bags.slice(startIndex, endIndex);

//   const shopContent = document.querySelector(".shop-content");
//   shopContent.innerHTML = ""; 

//   itemsToShow.forEach((item) => {
//     const itemElement = document.createElement("div");
//     itemElement.classList.add("product-box");
//     itemElement.innerHTML = `
//       <img src="${item.images[0]}" alt="" class="product-img" />
//       <h2 class="product-title">${item.name}</h2>
//       <div class="product-box--footer">
//         <span class="price">$${item.price}</span>
//         <a href="/html/about.html?id=${item.id}" class="btn-about">About</a>
//         <i class="bx bx-shopping-bag add-cart"></i>
//       </div>
//     `;
//     shopContent.appendChild(itemElement);
//     const addToCartButton = itemElement.querySelector(".add-cart");
//     addToCartButton.addEventListener("click", () => {
//       addProductToCart(
//         item.brand + " " + item.name,
//         "$" + item.price,
//         item.images[0]
//       );
//     });
//   });

//   const pageInfo = document.getElementById("page-info");
//   pageInfo.textContent = `Page ${pageNumber} of ${Math.ceil(
//     bags.length / itemsPerPage
//   )}`;
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const sortButton = document.getElementById("sort-btn");

//   sortButton.addEventListener("click", function () {
//     const sortBy = document.getElementById("sort-select").value;

//     if (sortBy === "price-descending") {
//       bags.sort(sortByPriceDescending);
//     } else if (sortBy === "price-ascending") {
//       bags.sort(sortByPriceAscending);
//     } else if (sortBy === "brand-name") {
//       bags.sort(sortByBrandName);
//     } else if (sortBy === "product-name") {
//       bags.sort(sortByName);
//     }

//     displayItemsOnPage(1);
//   });

//   displayItemsOnPage(1); 
// });


// const contactModal = document.getElementById("contact-modal");
// const openContactModalBtn = document.getElementById("open-contact-modal");
// const closeModalBtn = document.getElementsByClassName("close")[0];


// function openModal() {
//   contactModal.style.display = "block";
// }


// function closeModal() {
//   contactModal.style.display = "none";
// }

// openContactModalBtn.addEventListener("click", openModal);
// closeModalBtn.addEventListener("click", closeModal);


// document.getElementById("open-about-modal").addEventListener("click", function() {
//   document.getElementById("about-modal").style.display = "block";
// });

// // Закрытие модального окна для About
// document.querySelector("#about-modal .close").addEventListener("click", function() {
//   document.getElementById("about-modal").style.display = "none";
// });




import bags from "./bags.js";

const bagsContainer = document.querySelector(".shop-content");

bags.forEach((bag) => {
  bagsContainer.innerHTML += `
    <div class="product-box">
      <img src="${bag.images[0]}" alt="" class="product-img" />
      <h2 class="product-title">${bag.name}</h2>
      <div class="product-box--footer">
        <span class="price">$${bag.price}</span>
        <a href="/html/about.html?id=${bag.id}" class="btn-about">About</a>
        <i class="bx bx-shopping-bag add-cart"></i>
      </div>
    </div>
  `;
});

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
    button.addEventListener("click", addCartClicked);
  }
  loadCartItems();
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
  saveCartItems();
  updateCartIcon();
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
  saveCartItems();
  updateCartIcon();
}

function addCartClicked(event) {
  let button = event.target;
  let shopProducts = button.closest(".product-box");
  let title = shopProducts.querySelector(".product-title").innerText;
  let price = shopProducts.querySelector(".price").innerText;
  let productImg = shopProducts.querySelector(".product-img").src;
  addProductToCart(title, price, productImg);
  updateTotal();
  saveCartItems();
  updateCartIcon();
}

function addProductToCart(title, price, productImg) {
  let cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  let cartItems = document.getElementsByClassName("cart-content")[0];
  let cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (let i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("You have already added this item to cart");
      return;
    }
  }
  let cartBoxContent = `
    <img src="${productImg}" alt="" class="card-img" />
    <div class="detail-box">
      <div class="cart-product-title">${title}</div>
      <div class="cart-price">${price}</div>
      <input type="number" value="1" class="cart-quantity" />
    </div>
    <i class="bx bx-trash-alt cart-remove"></i>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
  saveCartItems();
  updateCartIcon();
  updateTotal()
}

function updateTotal() {
  let cartContent = document.getElementsByClassName("cart-content")[0];
  let cartBoxes = cartContent.getElementsByClassName("cart-box");
  let total = 0;
  for (let i = 0; i < cartBoxes.length; i++) {
    let cartBox = cartBoxes[i];
    let priceElement = cartBox.getElementsByClassName("cart-price")[0];
    let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    let price = Number(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total += price * quantity;
  }
  document.getElementsByClassName("total-price")[0].innerText = "$" + total;
  localStorage.setItem("cartTotal", total.toString());
}

function saveCartItems() {
  let cartContent = document.getElementsByClassName("cart-content")[0];
  let cartBoxes = cartContent.getElementsByClassName("cart-box");
  let cartItems = [];
  for (let i = 0; i < cartBoxes.length; i++) {
    let cartBox = cartBoxes[i];
    let titleElement = cartBox.getElementsByClassName("cart-product-title")[0];
    let priceElement = cartBox.getElementsByClassName("cart-price")[0];
    let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    let productImg = cartBox.getElementsByClassName("card-img")[0].src;
    let item = {
      title: titleElement.innerText,
      price: priceElement.innerText,
      quantity: quantityElement.value,
      productImg: productImg,
    };
    cartItems.push(item);
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function loadCartItems() {
  let cartItems = localStorage.getItem("cartItems");
  if (cartItems) {
    cartItems = JSON.parse(cartItems);

    for (let i = 0; i < cartItems.length; i++) {
      let item = cartItems[i];
      addProductToCart(item.title, item.price, item.productImg);

      let cartBoxes = document.getElementsByClassName("cart-box");
      let cartBox = cartBoxes[cartBoxes.length - 1];
      let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
      quantityElement.value = item.quantity;
    }
  }
  let cartTotal = localStorage.getItem("cartTotal");
  if (cartTotal) {
    document.getElementsByClassName("total-price")[0].innerText =
      "$" + cartTotal;
  }
  updateCartIcon();
}

function updateCartIcon() {
  let cartBoxes = document.getElementsByClassName("cart-box");
  let quantity = 0;
  if (cartBoxes.length > 0) {
    for (let i = 0; i < cartBoxes.length; i++) {
      let cartBox = cartBoxes[i];
      let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
      quantity += Number(quantityElement.value);
    }
  } else {
    quantity = 0;
  }
  let cartIcon = document.querySelector("#cart-icon");
  cartIcon.setAttribute("data-quantity", quantity);
}

document.addEventListener("DOMContentLoaded", function () {
  let payNowButton = document.querySelector(".btn-buy");

  payNowButton.addEventListener("click", function () {
    let cartContent = document.querySelector(".cart-content");
    if (cartContent.children.length === 0) {
      alert("Your cart is empty. Please add some products.");
    } else {
      let cartTotal = localStorage.getItem("cartTotal");
      let cartItems = localStorage.getItem("cartItems");
      window.location.href = `html/checkout.html?total=${cartTotal}&items=${encodeURIComponent(
        cartItems
      )}`;
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  function displayItemsOnPage(currentPage) {
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = bags.slice(startIndex, endIndex);

    const shopContent = document.querySelector(".shop-content");
    shopContent.innerHTML = "";

    itemsToShow.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("product-box");
      itemElement.innerHTML = `
        <img src="${item.images[0]}" alt="" class="product-img" />
        <h2 class="product-title">${item.name}</h2>
        <div class="product-box--footer">
          <span class="price">$${item.price}</span>
          <a href="/html/about.html?id=${item.id}" class="btn-about">About</a>
          <i class="bx bx-shopping-bag add-cart"></i>
        </div>
      `;
      shopContent.appendChild(itemElement);
      const addToCartButton = itemElement.querySelector(".add-cart");
      addToCartButton.addEventListener("click", () => {
        addProductToCart(
          item.brand + " " + item.name,
          "$" + item.price,
          item.images[0]
        );
      });
    });

    const pageInfo = document.getElementById("page-info");
    pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(
      bags.length / itemsPerPage
    )}`;
  }

  displayItemsOnPage(1);

  document.getElementById("prev-page").addEventListener("click", () => {
    let currentPage = parseInt(
      document.getElementById("page-info").textContent.split(" ")[1]
    );
    if (currentPage > 1) {
      currentPage--;
      displayItemsOnPage(currentPage);
    }
  });

  document.getElementById("next-page").addEventListener("click", () => {
    let currentPage = parseInt(
      document.getElementById("page-info").textContent.split(" ")[1]
    );
    const totalPages = Math.ceil(bags.length / 10);
    if (currentPage < totalPages) {
      currentPage++;
      displayItemsOnPage(currentPage);
    }
  });
});

function sortByPriceDescending(a, b) {
  return b.price - a.price;
}


function sortByPriceAscending(a, b) {
  return a.price - b.price;
}


function sortByBrandName(a, b) {
  const brandA = a.brand.toUpperCase();
  const brandB = b.brand.toUpperCase();
  if (brandA < brandB) {
    return -1;
  }
  if (brandA > brandB) {
    return 1;
  }
  return 0;
}

function sortByName(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}


function displayItemsOnPage(pageNumber) {
  const itemsPerPage = 10;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = bags.slice(startIndex, endIndex);

  const shopContent = document.querySelector(".shop-content");
  shopContent.innerHTML = ""; 

  itemsToShow.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("product-box");
    itemElement.innerHTML = `
      <img src="${item.images[0]}" alt="" class="product-img" />
      <h2 class="product-title">${item.name}</h2>
      <div class="product-box--footer">
        <span class="price">$${item.price}</span>
        <a href="/html/about.html?id=${item.id}" class="btn-about">About</a>
        <i class="bx bx-shopping-bag add-cart"></i>
      </div>
    `;
    shopContent.appendChild(itemElement);
    const addToCartButton = itemElement.querySelector(".add-cart");
    addToCartButton.addEventListener("click", () => {
      addProductToCart(
        item.brand + " " + item.name,
        "$" + item.price,
        item.images[0]
      );
    });
  });

  const pageInfo = document.getElementById("page-info");
  pageInfo.textContent = `Page ${pageNumber} of ${Math.ceil(
    bags.length / itemsPerPage
  )}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const sortButton = document.getElementById("sort-btn");

  sortButton.addEventListener("click", function () {
    const sortBy = document.getElementById("sort-select").value;

    if (sortBy === "price-descending") {
      bags.sort(sortByPriceDescending);
    } else if (sortBy === "price-ascending") {
      bags.sort(sortByPriceAscending);
    } else if (sortBy === "brand-name") {
      bags.sort(sortByBrandName);
    } else if (sortBy === "product-name") {
      bags.sort(sortByName);
    }

    displayItemsOnPage(1);
  });

  displayItemsOnPage(1); 
});

const contactModal = document.getElementById("contact-modal");
const openContactModalBtn = document.getElementById("open-contact-modal");
const closeModalBtn = document.getElementsByClassName("close")[0];


function openModal() {
  contactModal.style.display = "block";
}


function closeModal() {
  contactModal.style.display = "none";
}

openContactModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);


document.getElementById("open-about-modal").addEventListener("click", function() {
  document.getElementById("about-modal").style.display = "block";
});


document.querySelector("#about-modal .close").addEventListener("click", function() {
  document.getElementById("about-modal").style.display = "none";
});
