// Find the Sum of Digits of a Number

let enteredNumber: number = 5678;
let remainingNumber: number = enteredNumber;
let digitSum: number = 0;

while (remainingNumber > 0) {
    let extractedDigit: number = remainingNumber % 10;
    digitSum += extractedDigit;
    remainingNumber = Math.floor(remainingNumber / 10);
}

console.log("Number:", enteredNumber);
console.log("Sum of Digits:", digitSum);