import { Product } from "./Product.js";

export class Stock {
  #products = [];
  #stock;

  addProduct() {
    const id = this.#products.length;
    const name = document.querySelector("#product-name-input").value;
    const type = document.querySelector("#product-type-input").value;
    const quantity = document.querySelector("#product-quantity-input").value;
    const unitPrice = document.querySelector("#unit-price-input").value;

    const product = new Product(id, name, type, quantity, unitPrice);

    product.createComponent();
    this.#products.push(product);
    console.log(this.#products);
    this.#stock = document.querySelectorAll(".product");
  }

  filterStock() {
    const filter = document.querySelector("#product-filter-input").value;
    this.#stock.forEach((element) => {
      if (element.dataset.type !== filter) {
        element.style.display = "none";
      } else {
        element.style.display = "table-row";
      }
    });
  }

  removeFilter() {
    this.#stock.forEach((element) => {
      element.style.display = "table-row";
    });
  }

  get stock() {
    return this.#stock;
  }
}
