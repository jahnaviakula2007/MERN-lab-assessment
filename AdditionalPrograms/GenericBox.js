"use strict";
// Create a Generic Box<T> Class to Store and Display Different Types of Data
class Box {
    storedValue;
    constructor(inputValue) {
        this.storedValue = inputValue;
    }
    displayValue() {
        console.log("Stored Value:", this.storedValue);
    }
}
let numberBox = new Box(100);
let textBox = new Box("TypeScript");
let booleanBox = new Box(true);
numberBox.displayValue();
textBox.displayValue();
booleanBox.displayValue();
