import { Stock } from "./Stock.js";

const stock = new Stock();
const productForm = document.querySelector("#product-form");
const filterBtn = document.querySelector("#product-filter-btn");
const removeFilterBtn = document.querySelector("#product-remove-filter-btn");

productForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  stock.addProduct();
});

filterBtn.addEventListener("click", () => {
  stock.filterStock();
  filterBtn.style.display = "none";
  removeFilterBtn.style.display = "inline";
});

removeFilterBtn.addEventListener("click", () => {
  stock.removeFilter();
  removeFilterBtn.style.display = "none";
  filterBtn.style.display = "inline";
});
