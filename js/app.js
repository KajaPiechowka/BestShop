document.addEventListener("DOMContentLoaded", function () {
  /**Kalkulator */
  const calculator = document.getElementById("calculator");
  const calculatorLeft = calculator.querySelector(".calculator-left");
  /**input */
  const productsQuantity = calculator.querySelector("#quantity");
  const months = calculator.querySelector("#months");
  /**dropdown */
  const packageDropdown = calculator.querySelector("#packageDropdown");
  /**checkboxy */
  const accoutingCheckbox = calculator.querySelector("#accountingChbx");
  const terminalCheckbox = calculator.querySelector("#terminalChbx");
  /**zielona lista */
  const greenList = calculator.querySelectorAll(".green-list");
  const products = calculator.querySelector("#products");
  const orders = calculator.querySelector("#orders");
  const package = calculator.querySelector("#package");
  const accounting = calculator.querySelector("#accounting");
  const terminal = calculator.querySelector("#terminal");
  /**niebieska lista */
  const total = calculator.querySelector("#total");
  const totalPrice = calculator.querySelector("output#total-price");
  /**total */

  /**input event */

  const showProducts = () => {
    if (productsQuantity.value > 0) {
      products.style.display = "flex";
      products.firstElementChild.nextElementSibling.innerHTML = `${productsQuantity.value}*$0,5`;
      products.lastElementChild.innerHTML = `$${productsQuantity.value * 0.5}`;
    } else {
      products.style.display = "none";
    }
  };
  productsQuantity.addEventListener("change", showProducts);
  const showMonths = () => {
    if (months.value > 0) {
      orders.style.display = "flex";
      orders.firstElementChild.nextElementSibling.innerHTML = `${months.value}*$0,5`;
      orders.lastElementChild.innerHTML = `$${months.value * 0.25}`;
    } else {
      orders.style.display = "none";
    }
  };

  productsQuantity.addEventListener("change", showProducts);
  months.addEventListener("change", showMonths);

  /**dropdown event */

  packageDropdown.addEventListener("change", () => {
    package.style.display = "flex";
    package.firstElementChild.nextElementSibling.innerHTML = `${packageDropdown.value}`;
    package.lastElementChild.innerHTML = `$${
      packageDropdown.options[packageDropdown.selectedIndex].dataset["price"]
    }`;
  });

  /**checkboxes event */

  accoutingCheckbox.addEventListener("click", () => {
    if (accoutingCheckbox.checked === true) {
      accounting.style.display = "flex";
    } else {
      accounting.style.display = "none";
    }
    showValue(accounting);
  });
  terminalCheckbox.addEventListener("click", () => {
    if (terminalCheckbox.checked === true) {
      terminal.style.display = "flex";
    } else {
      terminal.style.display = "none";
    }
  });
  /**total event */
  let sum = 0;
  const showValue = function (el) {
    console.log(el.dataset["price"]);
  };
});
