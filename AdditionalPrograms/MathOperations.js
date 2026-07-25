"use strict";
// Create a MathOperations Namespace with Arithmetic Functions
var MathOperations;
(function (MathOperations) {
    function addNumbers(firstValue, secondValue) {
        return firstValue + secondValue;
    }
    MathOperations.addNumbers = addNumbers;
    function subtractNumbers(firstValue, secondValue) {
        return firstValue - secondValue;
    }
    MathOperations.subtractNumbers = subtractNumbers;
    function multiplyNumbers(firstValue, secondValue) {
        return firstValue * secondValue;
    }
    MathOperations.multiplyNumbers = multiplyNumbers;
    function divideNumbers(firstValue, secondValue) {
        return firstValue / secondValue;
    }
    MathOperations.divideNumbers = divideNumbers;
})(MathOperations || (MathOperations = {}));
let firstInput = 20;
let secondInput = 5;
console.log("Addition:", MathOperations.addNumbers(firstInput, secondInput));
console.log("Subtraction:", MathOperations.subtractNumbers(firstInput, secondInput));
console.log("Multiplication:", MathOperations.multiplyNumbers(firstInput, secondInput));
console.log("Division:", MathOperations.divideNumbers(firstInput, secondInput));
