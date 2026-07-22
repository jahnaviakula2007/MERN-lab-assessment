interface Length {
    length: number;
}

function printLength<T extends Length>(value: T): void {
    console.log("Length =", value.length);
}

printLength("TypeScript");
printLength([1, 2, 3, 4, 5]);