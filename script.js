// MATH OPERATORS FUNCTIONS

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// OPERATE FUNCTION

function operate(operator, operand1, operand2) {
    if(operator === '+') {
        return add(operand1, operand2);
    } else if(operator === '-') {
        return subtract(operand1, operand2);
    } else if(operator === '*') {
        return multiply(operand1, operand2)
    } else if(operator === '/') {
        return divide(operand1, operand2);
    } else {
        return console.error('ERROR!');
    }
}

// EVENTS

const btnDigits = document.querySelectorAll('.btn-digits');
const display = document.querySelector('#display');
let operandOne = 0;

btnDigits.forEach((btn) => {
    btn.addEventListener('click', () => {
        display.textContent += btn.textContent;
        operandOne = display.textContent;
    });
});