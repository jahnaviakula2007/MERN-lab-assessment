"use strict";
// Rotate an Array by N Positions
let originalArray = [1, 2, 3, 4, 5];
let rotationCount = 2;
let rotatedArray = [];
for (let indexValue = 0; indexValue < originalArray.length; indexValue++) {
    let newPosition = (indexValue + rotationCount) % originalArray.length;
    rotatedArray[newPosition] = originalArray[indexValue];
}
console.log("Original Array:", originalArray);
console.log("Rotated Array:", rotatedArray);
