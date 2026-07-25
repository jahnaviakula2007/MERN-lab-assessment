"use strict";
// Check Armstrong Number
let originalNum = 153;
let copiedNum = originalNum;
let powerTotal = 0;
while (copiedNum > 0) {
    let singleDigit = copiedNum % 10;
    powerTotal += singleDigit ** 3;
    copiedNum = Math.floor(copiedNum / 10);
}
if (powerTotal === originalNum) {
    console.log(originalNum + " is an Armstrong Number.");
}
else {
    console.log(originalNum + " is Not an Armstrong Number.");
}
