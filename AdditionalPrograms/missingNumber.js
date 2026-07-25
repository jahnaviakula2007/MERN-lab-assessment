"use strict";
// Find the Missing Number in an Array
let givenArray = [1, 2, 3, 5, 6];
let arrayLength = givenArray.length + 1;
let expectedTotal = (arrayLength * (arrayLength + 1)) / 2;
let actualTotal = 0;
for (let element of givenArray) {
    actualTotal += element;
}
let missingValue = expectedTotal - actualTotal;
console.log("Array Elements:", givenArray);
console.log("Missing Number:", missingValue);
