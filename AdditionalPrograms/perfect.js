"use strict";
// Check Perfect Number
let checkNum = 28;
let factorSum = 0;
for (let divisor = 1; divisor < checkNum; divisor++) {
    if (checkNum % divisor === 0) {
        factorSum += divisor;
    }
}
if (factorSum === checkNum) {
    console.log(checkNum + " is a Perfect Number.");
}
else {
    console.log(checkNum + " is Not a Perfect Number.");
}
