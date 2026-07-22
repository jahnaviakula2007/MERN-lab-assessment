"use strict";
class Book {
    title;
    constructor(title) {
        this.title = title;
    }
    print() {
        console.log(this.title);
    }
}
let b = new Book("Java");
b.print();
