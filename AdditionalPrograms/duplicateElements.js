"use strict";
// Find Duplicate Elements in an Array
let dataValues = [10, 20, 30, 20, 40, 10, 50];
let duplicateList = [];
for (let currentValue of dataValues) {
    let firstPosition = dataValues.indexOf(currentValue);
    let lastPosition = dataValues.lastIndexOf(currentValue);
    if (firstPosition !== lastPosition && !duplicateList.includes(currentValue)) {
        duplicateList.push(currentValue);
    }
}
console.log("Array Elements:", dataValues);
console.log("Duplicate Elements:", duplicateList);
