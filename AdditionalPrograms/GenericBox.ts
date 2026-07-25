// Create a Generic Box<T> Class to Store and Display Different Types of Data

class Box<T> {
    private storedValue: T;

    constructor(inputValue: T) {
        this.storedValue = inputValue;
    }

    displayValue(): void {
        console.log("Stored Value:", this.storedValue);
    }
}

let numberBox = new Box<number>(100);
let textBox = new Box<string>("TypeScript");
let booleanBox = new Box<boolean>(true);

numberBox.displayValue();
textBox.displayValue();
booleanBox.displayValue();