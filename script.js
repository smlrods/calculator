
// EVENTS

const inputOperandDisplay = document.querySelector('.input-operand');
const storedOperandDisplay = document.querySelector('.stored-operand');

let operandOne = '';
let operandTwo = '';
let operator = '';
inputOperandDisplay.textContent = '0';

const btnDigits = document.querySelectorAll('.btn-digits');
btnDigits.forEach((btn) => btn.addEventListener('click', () => writeDigite(btn.textContent)));

const btnOperations = document.querySelectorAll('.btn-operations');
btnOperations.forEach((btn) => btn.addEventListener('click', () => chooseOperation(btn.textContent)));

const btnEqual = document.querySelector('#btn-equal');
btnEqual.addEventListener('click', () => equalOperation());

const btnClear = document.querySelector('#btn-clear');
btnClear.addEventListener('click', () => {
    operandOne = '';
    operandTwo = '';
    operator = '';
    inputOperandDisplay.textContent = '0';
    storedOperandDisplay.textContent = '';
});

const btnFloat = document.querySelector('#btn-float');
btnFloat.addEventListener('click', () => addPointFloat());


const btnDelete = document.querySelector('#btn-delete');
btnDelete.addEventListener('click', deleteDigit);

// KEY DOWN

document.addEventListener('keydown', (e) => {
    if (!isNaN(e.key)) {
        writeDigite(e.key);
    } else if (e.key === '+' || e.key === '-' || e.key === 'x' || e.key === '/') {
        chooseOperation(e.key);
    } else if (e.key === '.') {
        addPointFloat();
    } else if (e.key === '=') {
        equalOperation();
    } else if (e.key === 'Backspace') {
        deleteDigit();
    }
});

// FUNCTIONS FOR EVENTS

function deleteDigit() {
    if (operator === '') {
        operandOne = operandOne.slice(0, -1);
        inputOperandDisplay.textContent = operandOne;
        if (operandOne === '') inputOperandDisplay.textContent = '0';
    } else {
        operandTwo = operandTwo.slice(0, -1);
        inputOperandDisplay.textContent = operandTwo;
        if (operandTwo === '') inputOperandDisplay.textContent = '0';
    }
}

function writeDigite(e) {
    inputOperandDisplay.textContent = '';
    if (operator === '') {
        operandOne += e;
        inputOperandDisplay.textContent += operandOne;
    } else if (!(operandOne === '')) {
        operandTwo += e;
        inputOperandDisplay.textContent += operandTwo;
    }
}

function chooseOperation(e) {
    if (!(operandOne === '')) {
        if (!(operandTwo === '')) {
            operandOne = operate(operator, +operandOne, +operandTwo);
            operator = e;
            storedOperandDisplay.textContent = operandOne + ' ' + operator;
            inputOperandDisplay.textContent = '0';
            operandTwo = '';
        } else {
            operator = e;
            storedOperandDisplay.textContent = operandOne + ' ' + operator;
            inputOperandDisplay.textContent = '0';
        }
    }
}

function equalOperation() {
    if (operandTwo === '0' && operator == '/') {
        storedOperandDisplay.textContent = '';
        inputOperandDisplay.textContent = 'ERROR';
        operandOne = '';
        operandTwo = '';
        operator = '';
    } else if (!(operandTwo === '')) {
        storedOperandDisplay.textContent = operandOne + ' ' + operator + ' ' + operandTwo + ' =';
        inputOperandDisplay.textContent = Math.floor((operate(operator, +operandOne, +operandTwo)) * 1000) / 1000;
        operandOne = '';
        operandTwo = '';
        operator = '';
    }
}

function addPointFloat() {
    if (operator === '') {
        if (operandOne === '') operandOne = '0';
        if (!(operandOne.split('').includes('.'))) {
            operandOne += '.';
            inputOperandDisplay.textContent = operandOne;
        }
    } else {
        if (!(operandTwo.split('').includes('.'))) {
            operandTwo += '.';
            inputOperandDisplay.textContent = operandTwo;
        }
    }
}
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
    if (operator === '+') {
        return add(operand1, operand2);
    } else if (operator === '-') {
        return subtract(operand1, operand2);
    } else if (operator === 'x') {
        return multiply(operand1, operand2)
    } else if (operator === '/') {
        return divide(operand1, operand2);
    } else {
        return console.error('ERROR!');
    }
}
