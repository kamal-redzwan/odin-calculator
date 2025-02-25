//  <---------- Declaration of Variables ---------->

let currentInput = '';
let previousInput = '';
let currentOperation = '';

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

function appendNumberToInputDisplay(number) {
  // Prevent multiple zeros at the beginning
  if (number === 0 && currentInput === 0) return;

  // Add the number input
  currentInput += number;

  // Update the display
  resultDisplay.value = currentInput;
}

function setOperation(operation) {
  // Dont set operation if no input
  if (currentInput === '') return;

  // If we already have a previous input, perform the calculation
  if (previousInput !== '') evaluate();

  // Save current input and operation
  previousInput = currentInput;
  currentOperation = operation;

  // Show operation input display
  inputDisplay.value = previousInput + ' ' + currentOperation;

  // Reset current input for next number
  currentInput = '';
}

function evaluate() {}

function addDecimal() {
  // Dont add decimal if there's one
  if (currentInput.includes('.')) return;

  // Add 0 if the input is empty
  if (currentInput === '') currentInput = '0';

  currentInput += '.';
  resultDisplay.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  currentOperation = '';
  inputDisplay.value = '';
  resultDisplay.value = '';
}

function deleteNumber() {
  // Delete the last input number
  currentInput = currentInput.toString().slice(0, -1);
  resultDisplay.value = currentInput;
}
