const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const images = document.querySelectorAll(".gallery img");
let currentIndex = 0;

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateGallery();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateGallery();
});

function updateGallery() {
  images.forEach((img, index) => {
    if (index === currentIndex) {
      img.classList.add("selected");
    } else {
      img.classList.remove("selected");
    }
  });
}

document.querySelector(".hm").addEventListener("click", function() {
  window.location.href = "/home.html";
});
