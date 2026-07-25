// Find the Missing Number in an Array

let givenArray: number[] = [1, 2, 3, 5, 6];
let arrayLength: number = givenArray.length + 1;

let expectedTotal: number = (arrayLength * (arrayLength + 1)) / 2;
let actualTotal: number = 0;

for (let element of givenArray) {
    actualTotal += element;
}

let missingValue: number = expectedTotal - actualTotal;

console.log("Array Elements:", givenArray);
console.log("Missing Number:", missingValue);