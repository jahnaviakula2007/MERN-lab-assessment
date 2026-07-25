"use strict";
// Convert Decimal to Binary
let decimalValue = 25;
let binaryResult = "";
let tempValue = decimalValue;
while (tempValue > 0) {
    let binaryDigit = tempValue % 2;
    binaryResult = binaryDigit + binaryResult;
    tempValue = Math.floor(tempValue / 2);
}
console.log("Decimal Number:", decimalValue);
console.log("Binary Number:", binaryResult);
