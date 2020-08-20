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

  /**total event */
  const inputValues = {
    quantity: 0,
    months: 0,
    packageDropdown: 0,
    terminal: 0,
    accounting: 0,
  };

  const inputsMultiplayer = {
    quantity: 0.5,
    months: 2,
    packageDropdown: 1,
    terminal: 5,
    accounting: 35,
  };

  function calculateTotal() {
    return Object.keys(inputValues).reduce(
      (total, key) => total + inputValues[key] * inputsMultiplayer[key],
      0
    );
  }

  function showTotal() {
    let value = calculateTotal();
    total.style.display = "flex";
    total.lastElementChild.innerHTML = `$${value}`;
  }

  /**input event */
  const showProducts = () => {
    if (productsQuantity.value > 0) {
      inputValues.quantity = productsQuantity.value;
      products.style.display = "flex";
      products.firstElementChild.nextElementSibling.innerHTML = `${inputValues.quantity}*$0,5`;
      products.lastElementChild.innerHTML = `$${
        inputValues.quantity * inputsMultiplayer.quantity
      }`;
      showTotal();
    } else {
      products.style.display = "none";
      inputValues.quantity = 0;
      showTotal();
    }
  };
  productsQuantity.addEventListener("change", showProducts);
  const showMonths = () => {
    if (months.value > 0) {
      inputValues.months = months.value;
      orders.style.display = "flex";
      orders.firstElementChild.nextElementSibling.innerHTML = `${inputValues.months}*$0,5`;
      orders.lastElementChild.innerHTML = `$${
        inputValues.months * inputsMultiplayer.months
      }`;
      showTotal();
    } else {
      orders.style.display = "none";
      inputValues.months = 0;
      showTotal();
    }
  };

  productsQuantity.addEventListener("change", showProducts);
  months.addEventListener("change", showMonths);

  /**dropdown event */

  packageDropdown.addEventListener("change", () => {
    inputValues.packageDropdown =
      packageDropdown.options[packageDropdown.selectedIndex].dataset["price"];
    package.style.display = "flex";
    package.firstElementChild.nextElementSibling.innerHTML = `${packageDropdown.value}`;
    package.lastElementChild.innerHTML = `$${inputValues.packageDropdown}`;
    showTotal();
  });

  /**checkboxes event */

  accoutingCheckbox.addEventListener("click", () => {
    if (accoutingCheckbox.checked === true) {
      accounting.style.display = "flex";
      inputValues.accounting = 1;
      showTotal();
    } else {
      accounting.style.display = "none";
      inputValues.accounting = 0;
      showTotal();
    }
  });
  terminalCheckbox.addEventListener("click", () => {
    if (terminalCheckbox.checked === true) {
      terminal.style.display = "flex";
      inputValues.terminal = 1;
      showTotal();
    } else {
      terminal.style.display = "none";
      inputValues.terminal = 0;
      showTotal();
    }
  });
});
