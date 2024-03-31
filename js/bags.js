class Bag {
  #name;
  #price;
  #id;
  #features;
  #color;
  #material;

  constructor(name, price, id, material, features, color) {
    this.#name = name;
    this.#price = price;
    this.#id = id;
    this.#material = material;
    this.#features = features;
    this.#color = color;
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
  get material() {
    return this.#material;
  }
  get features() {
    return this.#features;
  }
  get color() {
    return this.#color;
  }
}
const bags = [
  new Bag(
    "Marc Jacobs",
    120,
    "product1",
    "Leather",
    " Removable jacquard shoulder strap,silver-tone double-J hardware, slip pocket",
    " Black/Multi"
  ),
  new Bag(
    " Coach Cargo Tote",
    220,
    "product2",
    " Beige cotton-canvas",
    " Detachable shoulder strap, Two top handles,Embroidered logo, Snap-fastening pocket,Twist-lock fasteningpocket, Designer tab, Silver-tone hardware",
    " Dark Natural"
  ),
  new Bag(
    " The Tote Bag",
    190,
    "product3",
    " Pink grained leather",
    " Top handle, Removable shoulder strap, Debossed branding",
    " Fluro Candy"
  ),
  new Bag(
    "MJ",
    500,
    "product4",
    " Grey saffiano leather",
    " Removable jacquard shoulder strap, Gold-tone double-J hardware, Slip pocket",
    " Cement/Multi"
  ),
  new Bag("Valentino Alexia", 420, "product5",' Faux leather',' Shoulder strap, Designer plaque, Gold-tone hardware',' Black'),
  new Bag(" Marc Saddle Bag", 600, "product6",' Small Saddle bag',' Detachable logo shoulder strap,Leather-covered detailing, Gold-toned hardware',' Cream Leather'),
  new Bag("Ted Baker", 340, "product7",' Ted Baker Stunnie Mini Camera Bag',' Adjustable webbing strap, Embossed logo',' Light/Blue'),
  new Bag("Michael Kors", 200, "product8",'  Kendall Bracelet Pouchette bag',' Adjustable shoulder strap and top handle, Designer plaque, Gold-tone hardware',' Black Leather'),
];

