class Animal_ {
    sound = "Bark";
}

class Dog_ extends Animal_ {
    show(): void {
        console.log(this.sound);
    }
}

let d = new Dog_();
d.show();