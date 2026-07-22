"use strict";
class Car {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    show() {
        console.log(this.brand);
    }
}
let c = new Car("Honda");
c.show();
