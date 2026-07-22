class Car {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    show() {
        console.log(this.brand);
    }
}

let c = new Car("Honda");
c.show();