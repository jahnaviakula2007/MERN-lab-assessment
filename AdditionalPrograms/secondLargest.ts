// Find the Second Largest Number in an Array

let numberList: number[] = [10, 45, 23, 89, 67];

let largestValue: number = numberList[0];
let secondLargestValue: number = numberList[0];

for (let item of numberList) {
    if (item > largestValue) {
        secondLargestValue = largestValue;
        largestValue = item;
    } else if (item > secondLargestValue && item !== largestValue) {
        secondLargestValue = item;
    }
}

console.log("Array Elements:", numberList);
console.log("Second Largest Number:", secondLargestValue);