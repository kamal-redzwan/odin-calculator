// TODO:
// - Keyboard input
// - Error handling (floating point precision)
// - Error handling (error state management)
// - Error handling (input length limit to prevent overflow numbers)
// - Visual feedback for errors handling

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
  if (number === '0' && currentInput === '0') return;

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

function evaluate() {
  // Dont calculate if missing input or operator
  if (previousInput === '' || currentInput === '' || currentOperation === '')
    return;

  // Convert inputs to numbers
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  // Check for invalid inputs
  if (isNaN(prev) || isNaN(current)) return;

  // Calculate result based on operation
  let result;
  switch (currentOperation) {
    case '+':
      result = add(prev, current);
      break;
    case '-':
      result = subtract(prev, current);
      break;
    case '×':
    case '&times;':
      result = multiply(prev, current);
      break;
    case '÷':
    case '&divide;':
      // Check for division by zero
      if (current === 0) {
        resultDisplay.value = `Cannot divide by 0`;
        return;
      }
      result = divide(prev, current);
      break;
    default:
      return;
  }

  // Update displays
  inputDisplay.value =
    previousInput + ' ' + currentOperation + ' ' + currentInput + ' = ';
  resultDisplay.value = result;

  // Reset for next calculation
  currentInput = result.toString();
  previousInput = '';
  currentOperation = '';
}

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
