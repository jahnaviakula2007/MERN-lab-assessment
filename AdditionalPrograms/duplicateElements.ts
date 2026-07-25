// Find Duplicate Elements in an Array

let dataValues: number[] = [10, 20, 30, 20, 40, 10, 50];

let duplicateList: number[] = [];

for (let currentValue of dataValues) {
    let firstPosition: number = dataValues.indexOf(currentValue);
    let lastPosition: number = dataValues.lastIndexOf(currentValue);

    if (firstPosition !== lastPosition && !duplicateList.includes(currentValue)) {
        duplicateList.push(currentValue);
    }
}

console.log("Array Elements:", dataValues);
console.log("Duplicate Elements:", duplicateList);