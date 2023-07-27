let firstNumber;
let secondNumber;
let operator;
let displayValue = "0";

function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber){
    if (secondNumber === 0) {
        return "Cannot divide by zero";
    }
    return firstNumber / secondNumber;
}

document.addEventListener("DOMContentLoaded", function () {
    let displayValue = "0";
    let firstNumber = null;
    let operator = null;
    let waitingForNextNumber = false;
  
    function updateDisplay() {
      const displayElement = document.querySelector(".display");
      displayElement.textContent = displayValue;
    }
  
    function clearDisplay() {
      displayValue = "0";
      firstNumber = null;
      operator = null;
      waitingForNextNumber = false;
      updateDisplay();
    }
  
    function evaluate() {
      if (!waitingForNextNumber && operator && firstNumber !== null && displayValue !== "") {
        const secondNumber = parseFloat(displayValue);
        const result = operate(firstNumber, operator, secondNumber);
        if (isNaN(result) || result === Infinity) {
          displayValue = "Error";
        } else {
          displayValue = roundNumber(result).toString();
        }
        firstNumber = displayValue; // Store the result as the new first number
        waitingForNextNumber = true;
        updateDisplay();
      }
    }
  
    function roundNumber(number) {
      const precision = 10;
      return Math.round(number * 10 ** precision) / 10 ** precision;
    }
  
    function appendToDisplay(value) {
      if (displayValue === "Error") {
        clearDisplay();
      }
  
      if (waitingForNextNumber) {
        displayValue = value;
        waitingForNextNumber = false;
      } else {
        if (displayValue === "0" || displayValue === 0) {
          displayValue = value;
        } else {
          displayValue += value;
        }
      }
      updateDisplay();
    }
  
    function operate(num1, operator, num2) {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
  
      switch (operator) {
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "x":
          return num1 * num2;
        case "/":
          if (num2 === 0) {
            return NaN; // Division by zero error
          }
          return num1 / num2;
        default:
          return NaN; // Invalid operator
      }
    }
  
    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");
    const equalButton = document.querySelector(".equal");
    const clearButton = document.querySelector(".clear");
  
    numberButtons.forEach((button) => {
      button.addEventListener("click", function () {
        appendToDisplay(button.dataset.value);
      });
    });
  
    operatorButtons.forEach((button) => {
      button.addEventListener("click", function () {
        if (!waitingForNextNumber) {
          if (firstNumber === null && displayValue !== "") {
            firstNumber = displayValue;
            operator = button.dataset.value;
            displayValue = ""; // Clear the display for the next input
          } else {
            evaluate();
            if (displayValue !== "Error") {
              operator = button.dataset.value;
            }
          }
        }
      });
    });
  
    equalButton.addEventListener("click", evaluate);
    clearButton.addEventListener("click", clearDisplay);
});  