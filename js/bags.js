class Bag {
  #name;
  #price;
  #id;
  #features;
  #desinger_color;
  #material;

  constructor(name, price, id, features, desinger_color, material) {
    this.#name = name;
    this.#price = price;
    this.#id = id;
    this.#features = features;
    this.#desinger_color = desinger_color;
    this.#material = material;
  }
  get name() {
    return this.#name;
  }
  get price() {
    return this.#price;
  }
  get id() {
    return this.#id;
  }
  get features() {
    return this.#features;
  }
  get desinger_color() {
    return this.#desinger_color;
  }
  get material() {
    return this.#material;
  }
}
const bags = [
  new Bag("Marc Jacobs",120,'product1'),
  new Bag(" Coach Cargo Tote",220,'product2'),
  new Bag(" The Tote Bag",190,'product3'),
  new Bag("MJ",500,'product4'),
  new Bag("Valentino Alexia",420,'product5'),
  new Bag(" Marc Saddle Bag",600,'product6'),
  new Bag("Ted Baker",340,'product7'),
  new Bag("Michael Kors",200,'product8'),
];

{/* <div class="product-box">
<img src="/all_images/bags_images/product1.jpg" alt="" class="product-img" />
<h2 class="product-title">Marc Jacobs </h2>
<span class="price">$120</span>
<i class="bx bx-shopping-bag add-cart"></i>
<button id="product1" class="btn-about">About</button>
</div> */}
// <div class="product-box">
// <img src="/all_images/bags_images/product2.jpg" alt="" class="product-img" />
// <h2 class="product-title">Coach Cargo Tote</h2>
// <span class="price">$220</span>
// <i class="bx bx-shopping-bag add-cart"></i>
// <button   id="product2"  class="btn-about">About</button>
// </div>
// <div class="product-box">
// <img src="/all_images/bags_images/product3.jpg" alt="" class="product-img" />
// <h2 class="product-title">The Tote Bag</h2>
// <span class="price">$190</span>
// <i class="bx bx-shopping-bag add-cart"></i>
// <button  id="product3"  class="btn-about">About</button>
// </div>
// <div class="product-box">
// <img src="/all_images/bags_images/product4.jpg" alt="" class="product-img" />
// <h2 class="product-title">Marc Jacobs</h2>
// <span class="price">$500</span>
// <i class="bx bx-shopping-bag add-cart"></i>
// <button id="product4"  class="btn-about">About</button>
// </div>
// <div class="product-box">
// <img src="/all_images/bags_images/product5.jpg" alt="" class="product-img" />
// <h2 class="product-title">Valentino Alexia</h2>
// <span class="price">$420</span>
// <i class="bx bx-shopping-bag add-cart"></i>
// <button id="product5" class="btn-about">About</button>
// </div>
// <div class="product-box">
// <img src="/all_images/bags_images/product6.jpg" alt="" class="product-img" />
// <h2 class="product-title"> Marc Saddle Bag</h2>
// <span class="price">$600</span>
// <i class="bx bx-shopping-bag add-cart"></i>
// <button id="product6" class="btn-about">About</button>
// </div>

// <div class="product-box">
// <img src="/all_images/bags_images/product7.jpg" alt="" class="product-img" />
// <h2 class="product-title">Ted Baker</h2>
// <span class="price">$340</span>
// <i class="bx bx-shopping-bag add-cart"></i>
// <button id="product7" class="btn-about">About</button>
// </div>

// <div class="product-box">
// <img src="/all_images/bags_images/product8.jpg" alt="" class="product-img" />
// <h2 class="product-title">Michael Kors</h2>
// <span class="price">$200</span>
// <i class="bx bx-shopping-bag add-cart"></i>
// <button id="product8" class="btn-about">About</button>
// </div>
