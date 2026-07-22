class Book {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    print() {
        console.log(this.title);
    }
}

let b = new Book("Java");
b.print();