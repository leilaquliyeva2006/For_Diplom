import bags from "./bags.js";
import Gallery from "../gallery/gallery.js";

const urlParams = new URLSearchParams(window.location.search);
const bagId = urlParams.get("id");
const bag = bags.find((bag) => bag.id === bagId);

console.log(bags, bagId);

if (typeof bag === "undefined") window.location.href = "../html/404.html";

const bagImagesSrc = bag.images;

new Gallery(document.querySelector(".gallery-container"), bagImagesSrc);

document.querySelector(".name").textContent = bag.name;
document.querySelector(".price").textContent = `$${bag.price}`;
document.querySelector(".description").textContent = bag.description;

const benefits = document.querySelector(".benefits");

bag.benefits.forEach((benefit) => {
  const li = document.createElement("li");

  li.textContent = benefit;

  benefits.append(li);
});

const features = document.querySelector(".features");

bag.features.forEach((feature) => {
  const li = document.createElement("li");

  li.textContent = feature;

  features.append(li);
});

const productDetails = document.querySelector(".product-details");

bag.details.forEach((detail) => {
  const li = document.createElement("li");

  li.textContent = detail[0] + ": " + detail[1];

  productDetails.append(li);
});
