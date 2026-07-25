"use strict";
// Convert Binary to Decimal
let binaryValue = "11001";
let decimalResult = 0;
let lengthValue = binaryValue.length - 1;
for (let position = 0; position < binaryValue.length; position++) {
    if (binaryValue[position] === "1") {
        decimalResult += Math.pow(2, lengthValue - position);
    }
}
console.log("Binary Number:", binaryValue);
console.log("Decimal Number:", decimalResult);
