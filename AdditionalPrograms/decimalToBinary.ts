// Convert Decimal to Binary

let decimalValue: number = 25;
let binaryResult: string = "";

let tempValue: number = decimalValue;

while (tempValue > 0) {
    let binaryDigit: number = tempValue % 2;
    binaryResult = binaryDigit + binaryResult;
    tempValue = Math.floor(tempValue / 2);
}

console.log("Decimal Number:", decimalValue);
console.log("Binary Number:", binaryResult);