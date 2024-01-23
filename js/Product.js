export class Product {
  #component;
  constructor(id, name, type, quantity, value) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.quantity = quantity;
    this.value = value;
  }

  createComponent() {
    const table = document.querySelector("#products-section-table-body");

    const product = document.createElement("tr");
    product.classList.add("product");
    product.id = `product#${this.id}`;

    table.appendChild(product);

    const productId = document.createElement("td");
    productId.classList.add("product-id");
    productId.innerText = `#${this.id}`;

    const productName = document.createElement("td");
    productName.classList.add("product-name");
    productName.innerText = this.name;

    const productType = document.createElement("td");
    productType.classList.add("product-type");
    productType.innerText = this.type;
    product.setAttribute("data-type", this.type);

    const productQuantity = document.createElement("td");
    productQuantity.classList.add("product-quantity");
    productQuantity.innerText = this.quantity;

    const productValue = document.createElement("td");
    productValue.classList.add("product-value");
    productValue.innerText = this.value;

    const removeBtnTd = document.createElement("td");
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerText = "Remover";
    removeBtnTd.appendChild(removeBtn);
    removeBtn.addEventListener("click", () => {
      table.removeChild(product);
    });

    product.append(
      productId,
      productName,
      productType,
      productQuantity,
      productValue,
      removeBtnTd
    );

    this.#component = product;
  }

  get component() {
    return this.#component;
  }
}
