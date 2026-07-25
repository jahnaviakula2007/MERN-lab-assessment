"use strict";
// Find GCD and LCM of Two Numbers
let firstNum = 24;
let secondNum = 36;
let valueOne = firstNum;
let valueTwo = secondNum;
// Find GCD using Euclidean Algorithm
while (valueTwo !== 0) {
    let remainder = valueOne % valueTwo;
    valueOne = valueTwo;
    valueTwo = remainder;
}
let gcdResult = valueOne;
// Find LCM
let lcmResult = (firstNum * secondNum) / gcdResult;
console.log("First Number:", firstNum);
console.log("Second Number:", secondNum);
console.log("GCD =", gcdResult);
console.log("LCM =", lcmResult);
