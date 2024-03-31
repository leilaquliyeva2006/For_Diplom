const urlParams = new URLSearchParams(window.location.search);
const bagId = urlParams.get("id");
const bag = bags.find((bag) => bag.id === bagId);

if (typeof bag === "undefined") window.location.href = "/html/404.html";

const galleryPhotos = document.querySelectorAll(".gallery img");

galleryPhotos.forEach(
  (galleryPhoto, i) =>
    (galleryPhoto.src = `/all_images/${bagId}-img/${bagId}-img${i + 1}.jpeg`)
);

document.querySelector(".material span").textContent = bag.material;
document.querySelector(".features span").textContent = bag.features;
document.querySelector(".color span").textContent = bag.color;
