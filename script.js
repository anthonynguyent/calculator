document.addEventListener("DOMContentLoaded", function () {
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
        return Math.floor(firstNumber / secondNumber);
    }

    function operate(firstNumber, operand, secondNumber){
        if(operand === '+') return add(firstNumber, secondNumber);
        if(operand === '-') return subtract(firstNumber, secondNumber);
        if(operand === '*') return multiply(firstNumber, secondNumber);
        if(operand === '/') return divide(firstNumber, secondNumber);
    }

    let firstNumber;
    let secondNumber;
    let operand;
});