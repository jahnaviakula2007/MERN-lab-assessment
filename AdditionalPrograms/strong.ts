// Check Strong Number

let givenValue: number = 145;
let duplicateValue: number = givenValue;
let factorialTotal: number = 0;

while (duplicateValue > 0) {
    let currentDigit: number = duplicateValue % 10;
    let factorialValue: number = 1;

    for (let step = 1; step <= currentDigit; step++) {
        factorialValue *= step;
    }

    factorialTotal += factorialValue;
    duplicateValue = Math.floor(duplicateValue / 10);
}

if (factorialTotal === givenValue) {
    console.log(givenValue + " is a Strong Number.");
} else {
    console.log(givenValue + " is Not a Strong Number.");
}