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

// EVENTS

const btnDigits = document.querySelectorAll('.btn-digits');
const inputOperandDisplay = document.querySelector('.input-operand');
const storedOperandDisplay = document.querySelector('.stored-operand');
const btnClear = document.querySelector('#btn-clear');

let operandOne = '';
let operandTwo = '';
let operator = '';
inputOperandDisplay.textContent = '0';

btnDigits.forEach((btn) => {
    btn.addEventListener('click', () => {
        inputOperandDisplay.textContent = '';
        if (operator === '') {
            operandOne += btn.textContent;
            inputOperandDisplay.textContent += operandOne;
        } else if (!(operandOne === '')) {
            operandTwo += btn.textContent;
            inputOperandDisplay.textContent += operandTwo;
        }
    });
});

const btnOperations = document.querySelectorAll('.btn-operations');

btnOperations.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (!(operandOne === '')) {
            // ATUALIZA O OPERADOR SOMENTE QUANDO NÃO EXISTE VALOR NO OPERANDO DOIS
            // NA PRIMEIRA INTERAÇÃO, O OPERADOR TERÁ UM VALOR, E PODERÁ SE ATUALIZADO ENQUANTO O OPERADOR DOIS ESTIVER VAZIO
            //
            if (!(operandTwo === '')) {
                operandOne = operate(operator, +operandOne, +operandTwo);
                operator = btn.textContent;
                storedOperandDisplay.textContent = operandOne + ' ' + operator;
                inputOperandDisplay.textContent = '0';
                operandTwo = '';
            } else {
                operator = btn.textContent;
                storedOperandDisplay.textContent = operandOne + ' ' + operator;
                inputOperandDisplay.textContent = '0';
            }
        }
    })
});


const btnEqual = document.querySelector('#btn-equal');

btnEqual.addEventListener('click', () => {
    // se o operando 1 estiver vazio não executa, 
    if (operandTwo === '0' && operator == '/') {
        // alert('hi')
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
});

btnClear.addEventListener('click', () => {
    operandOne = '';
    operandTwo = '';
    operator = '';
    inputOperandDisplay.textContent = '0';
    storedOperandDisplay.textContent = '';
});

const btnFloat = document.querySelector('#btn-float');

btnFloat.addEventListener('click', () => {
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
});

const btnDelete = document.querySelector('#btn-delete');

btnDelete.addEventListener('click', () => {
    if(operator === '') {
        operandOne = operandOne.slice(0, -1);
        inputOperandDisplay.textContent = operandOne;
        if(operandOne === '') inputOperandDisplay.textContent = '0';
    } else {
        operandTwo = operandTwo.slice(0, -1);
        inputOperandDisplay.textContent = operandTwo;
        if(operandTwo === '') inputOperandDisplay.textContent = '0';
    }

});