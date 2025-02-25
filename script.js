//  <---------- Declaration of Variables ---------->

const numberButtons = document.querySelectorAll("[data-type='number']");
const operationButtons = document.querySelectorAll("[data-type='operation']");
const calculateButton = document.querySelector("[data-type='calculate']");
const decimalButton = document.querySelector("[data-type='decimal']");
const clearButton = document.querySelector("[data-type='clear']");
const deleteButton = document.querySelector("[data-type='delete']");
const inputDisplay = document.getElementById('display__input');
const resultDisplay = document.getElementById('display__result');

//  <---------- Event Listeners ---------->

numberButtons.forEach((button) => {
  button.addEventListener('click', () =>
    appendNumberToInputDisplay(button.textContent)
  );
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => setOperation(button.textContent));
});

calculateButton.addEventListener('click', evaluate);
decimalButton.addEventListener('click', addDecimal);
clearButton.addEventListener('click', clearDisplay);
deleteButton.addEventListener('click', deleteNumber);

//  <---------- Math Functions ---------->

function add(val1, val2) {
  return val1 + val2;
}

function subtract(val1, val2) {
  return val1 - val2;
}

function divide(val1, val2) {
  return val1 / val2;
}

function multiply(val1, val2) {
  return val1 * val2;
}

//  <---------- Buttons Functions ---------->

function appendNumberToInputDisplay() {}
function setOperation() {}
function evaluate() {}
function addDecimal() {}
function clearDisplay() {}
function deleteNumber() {}
