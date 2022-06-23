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
    } else if(operator === 'x') {
        return multiply(operand1, operand2)
    } else if(operator === '/') {
        return divide(operand1, operand2);
    } else {
        return console.error('ERROR!');
    }
}

// EVENTS

const btnDigits = document.querySelectorAll('.btn-digits');
const inputOperandDisplay = document.querySelector('.input-operand');
const storedOperandDisplay = document.querySelector('.stored-operand');
const btnClear = document.querySelector('.btn-clear');

let operandOne = '';
let operandTwo = '';
let operator = '';

btnDigits.forEach((btn) => {
    btn.addEventListener('click', () => {
        inputOperandDisplay.textContent = '';
        if(operator === '') {
            operandOne += btn.textContent;
            inputOperandDisplay.textContent += operandOne;
        } else {
            operandTwo += btn.textContent;
            inputOperandDisplay.textContent += operandTwo;
        }
    });
});

const btnOperations = document.querySelectorAll('.btn-operations');

btnOperations.forEach((btn) => {
    btn.addEventListener('click', () => {
        operator = btn.textContent;
        storedOperandDisplay.textContent = operandOne + ' ' + operator;
        inputOperandDisplay.textContent = '0';
        // displayOperator.textContent = operator;
    });
});

const btnEqual = document.querySelector('#btn-equal');

btnEqual.addEventListener('click', () => {
    storedOperandDisplay.textContent = operandOne + ' ' + operator + ' ' + operandTwo;
    inputOperandDisplay.textContent = operate(operator, +operandOne, +operandTwo);
});

btnClear.addEventListener('click')