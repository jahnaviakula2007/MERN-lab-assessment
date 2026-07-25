// Create a MathOperations Namespace with Arithmetic Functions

namespace MathOperations {

    export function addNumbers(firstValue: number, secondValue: number): number {
        return firstValue + secondValue;
    }

    export function subtractNumbers(firstValue: number, secondValue: number): number {
        return firstValue - secondValue;
    }

    export function multiplyNumbers(firstValue: number, secondValue: number): number {
        return firstValue * secondValue;
    }

    export function divideNumbers(firstValue: number, secondValue: number): number {
        return firstValue / secondValue;
    }
}

let firstInput: number = 20;
let secondInput: number = 5;

console.log("Addition:", MathOperations.addNumbers(firstInput, secondInput));
console.log("Subtraction:", MathOperations.subtractNumbers(firstInput, secondInput));
console.log("Multiplication:", MathOperations.multiplyNumbers(firstInput, secondInput));
console.log("Division:", MathOperations.divideNumbers(firstInput, secondInput));