// Import Arithmetic Functions from math.ts

import { addValues, subtractValues, multiplyValues, divideValues } from "./math.js";

let firstValue: number = 40;
let secondValue: number = 8;

console.log("Addition:", addValues(firstValue, secondValue));
console.log("Subtraction:", subtractValues(firstValue, secondValue));
console.log("Multiplication:", multiplyValues(firstValue, secondValue));
console.log("Division:", divideValues(firstValue, secondValue));
