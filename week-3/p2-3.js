"use strict";
class Animal_ {
    sound = "Bark";
}
class Dog_ extends Animal_ {
    show() {
        console.log(this.sound);
    }
}
let d = new Dog_();
d.show();
