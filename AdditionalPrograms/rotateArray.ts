// Rotate an Array by N Positions

let originalArray: number[] = [1, 2, 3, 4, 5];
let rotationCount: number = 2;

let rotatedArray: number[] = [];

for (let indexValue = 0; indexValue < originalArray.length; indexValue++) {
    let newPosition: number = (indexValue + rotationCount) % originalArray.length;
    rotatedArray[newPosition] = originalArray[indexValue];
}

console.log("Original Array:", originalArray);
console.log("Rotated Array:", rotatedArray);