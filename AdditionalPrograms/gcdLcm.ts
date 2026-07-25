// Find GCD and LCM of Two Numbers

let firstNum: number = 24;
let secondNum: number = 36;

let valueOne: number = firstNum;
let valueTwo: number = secondNum;

// Find GCD using Euclidean Algorithm
while (valueTwo !== 0) {
    let remainder: number = valueOne % valueTwo;
    valueOne = valueTwo;
    valueTwo = remainder;
}

let gcdResult: number = valueOne;

// Find LCM
let lcmResult: number = (firstNum * secondNum) / gcdResult;

console.log("First Number:", firstNum);
console.log("Second Number:", secondNum);
console.log("GCD =", gcdResult);
console.log("LCM =", lcmResult);