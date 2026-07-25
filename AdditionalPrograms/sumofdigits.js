"use strict";
// Find the Sum of Digits of a Number
let enteredNumber = 5678;
let remainingNumber = enteredNumber;
let digitSum = 0;
while (remainingNumber > 0) {
    let extractedDigit = remainingNumber % 10;
    digitSum += extractedDigit;
    remainingNumber = Math.floor(remainingNumber / 10);
}
console.log("Number:", enteredNumber);
console.log("Sum of Digits:", digitSum);
