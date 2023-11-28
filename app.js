"use strict";
const $ = document;

// theme btns
const theme = $.querySelector(".theme-trigger");
const themeBtn = $.querySelectorAll(".theme-control");
// number keys
const calcKeys = $.querySelectorAll(".key");
const numberInput = $.querySelector(".number-input");

// theme changing ↓↓↓
themeBtn.forEach((btn) => {
  btn.addEventListener("click", (el) => {
    theme.href = `./style/theme${el.target.dataset.theme}.css`;
  });
});

// calculator function ↓↓↓
const calcFunction = () => {};
