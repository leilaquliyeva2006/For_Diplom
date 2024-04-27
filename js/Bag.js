class Bag {
  /**
   * @type {string}
   */
  #id;

  /**
   * @type {string}
   */
  #brand;

  /**
   * @type {string}
   */
  #name;

  /**
   * @type {number}
   */
  #price;

  /**
   * @type {BagDataInfoType}
   */
  #info;

  /**
   * @type {string[]}
   */
  #images;

  /**
   * @param {BagDataType} cachedData
   * @return {Bag}
   */
  static fromCached = (cachedData) => new Bag(cachedData);

  /**
   * @param {BagDataType} params
   */
  constructor({ brand, name, price, info, images, id }) {
    this.#id = id ?? crypto.randomUUID();
    this.#brand = brand;
    this.#name = name;
    this.#price = price;
    this.#info = info;
    this.#images = images;
  }

  /**
   * @return {string}
   */
  get id() {
    return this.#id;
  }

  /**
   * @return {string}
   */
  get brand() {
    return this.#brand;
  }

  /**
   * @return {string}
   */
  get name() {
    return this.#name;
  }

  /**
   * @return {number}
   */
  get price() {
    return this.#price;
  }

  /**
   * @return {string}
   */
  get description() {
    return this.#info.description;
  }

  /**
   * @return {string[]}
   */
  get benefits() {
    return [...this.#info.benefits];
  }

  /**
   * @return {string[]}
   */
  get features() {
    return [...this.#info.features];
  }

  /**
   * @return {[string,string][]}
   */
  get details() {
    return [...this.#info.details];
  }

  /**
   * @return {string[]}
   */
  get images() {
    return [...this.#images];
  }

  toJSON() {
    return {
      id: this.#id,
      brand: this.#brand,
      name: this.#name,
      price: this.#price,
      info: this.#info,
      images: this.#images,
    };
  }
}

export default Bag;
