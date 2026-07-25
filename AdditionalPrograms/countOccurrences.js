"use strict";
// Count Occurrences of Each Element in an Array
let valueList = [1, 2, 3, 2, 4, 1, 3, 2];
let occurrenceRecord = {};
for (let numberItem of valueList) {
    if (occurrenceRecord[numberItem]) {
        occurrenceRecord[numberItem]++;
    }
    else {
        occurrenceRecord[numberItem] = 1;
    }
}
console.log("Array Elements:", valueList);
console.log("Element Occurrences:");
for (let elementKey in occurrenceRecord) {
    console.log(elementKey + " occurs " + occurrenceRecord[elementKey] + " times");
}
