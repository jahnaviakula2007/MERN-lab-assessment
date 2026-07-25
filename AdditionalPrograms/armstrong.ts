// Check Armstrong Number

let originalNum: number = 153;
let copiedNum: number = originalNum;
let powerTotal: number = 0;

while (copiedNum > 0) {
    let singleDigit: number = copiedNum % 10;
    powerTotal += singleDigit ** 3;
    copiedNum = Math.floor(copiedNum / 10);
}

if (powerTotal === originalNum) {
    console.log(originalNum + " is an Armstrong Number.");
} else {
    console.log(originalNum + " is Not an Armstrong Number.");
}