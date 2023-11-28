'use strict';
const $ = document;

// theme btns
const theme = $.querySelector('.theme-trigger');
const themeBtn = $.querySelectorAll('.theme-control');
// number keys 
const calcKeys = $.querySelectorAll('.key');
const numberInput = $.querySelector('.number-input');
let action = false;
let numberStr = '';
let enteredNumber1 = 0;
let enteredNumber2 = 0;
let result = 0;
let operator = '';
// theme changing
themeBtn.forEach(btn => {
    btn.addEventListener('click', (el) => {
        theme.href = `./style/theme${el.target.dataset.theme}.css`;
    })
});
// calculator
const calcFunction = function (event) {
    if (event.target.classList.contains('number-keys')) {
        numberStr += event.target.textContent;
        numberInput.value = numberStr;
    }
    if (event.target.classList.contains('dot')) {
        if (numberStr.includes('.')) {
            numberInput.value = numberStr;
        } else {
            numberStr += '.';
            numberInput.value = numberStr;
        }
    }
    if (event.target.classList.contains('operation')) {
        numberInput.value = '';

        // delete and reset 
        if (event.target.classList.contains('delete')) {
            numberStr = numberStr.slice(0, -1);
            numberInput.value = numberStr;
        }

        if (event.target.classList.contains('reset')) {
            numberStr = '';
            enteredNumber1 = enteredNumber2 = 0;
            numberInput.value = numberStr;
        }

        // other operations 
        if (event.target.classList.contains('plus')) {
            enteredNumber1 = parseFloat(numberStr);
            numberStr = '';
            operator = "+";
        }
        if (event.target.classList.contains('minus')) {
            enteredNumber1 = parseFloat(numberStr);
            numberStr = '';
            operator = "-";
        }
        if (event.target.classList.contains('multiply')) {
            enteredNumber1 = parseFloat(numberStr);
            numberStr = '';
            operator = "*";
        }
        if (event.target.classList.contains('divide')) {
            enteredNumber1 = parseFloat(numberStr);
            numberStr = '';
            operator = "/";
        }

        if (event.target.classList.contains('equal')) {
            enteredNumber2 = parseFloat(numberStr);
            numberStr = '';

            if (operator === '+') {
                result = enteredNumber1 + enteredNumber2;
            } else if (operator === '-') {
                result = enteredNumber1 - enteredNumber2;
            } else if (operator === '*') {
                result = enteredNumber1 * enteredNumber2;
            } else if (operator === '/') {
                result = enteredNumber1 / enteredNumber2;
            }
            numberInput.value = result;
            enteredNumber1 = parseFloat(numberInput.value);
        }
    }
}

calcKeys.forEach(key => {
    key.addEventListener('click', calcFunction);
});
