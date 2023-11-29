"use strict";

// Get references to DOM elements
const $ = document;
const theme = $.querySelector(".theme-trigger");
const themeBtn = $.querySelectorAll(".theme-control");
const calcKeys = $.querySelectorAll(".key");
const numberInput = $.querySelector(".number-input");

// Initialize variables
let expression = "";
let operations = ["+", "-", "×", "/", "reset", "del", "="];

// Theme changing event listeners
themeBtn.forEach((btn) => {
  btn.addEventListener("click", (el) => {
    theme.href = `./style/theme${el.target.dataset.theme}.css`;
  });
});

// Calculator function event listeners
calcKeys.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update Input Number
    const updateInputValue = (exp) => {
      return (numberInput.value = exp);
    };

    // add calc function and buttons
    if (expression === "" && operations.includes(btn.textContent)) {
      return;
    } else if (btn.textContent === "=") {
      expression = eval(expression);
      updateInputValue(eval(expression.toString()));
    } else if (btn.textContent === "del") {
      expression = expression.toString().slice(0, -1);
      updateInputValue(expression);
    } else if (btn.textContent === "reset") {
      expression = "";
      updateInputValue(expression);
    } else {
      expression += btn.textContent;
      updateInputValue(expression);
    }
  });
});
