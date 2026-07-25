// Merge Two Arrays Using the Spread Operator

let firstCollection: number[] = [10, 20, 30];
let secondCollection: number[] = [40, 50, 60];

let combinedCollection: number[] = [...firstCollection, ...secondCollection];

console.log("First Array:", firstCollection);
console.log("Second Array:", secondCollection);
console.log("Merged Array:", combinedCollection);