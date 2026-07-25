class Animal3 {
    sound = "Bark";
}

class Dog3 extends Animal3 {
    show() {
        console.log(this.sound);
    }
}

let dogObj = new Dog3();
dogObj.show();