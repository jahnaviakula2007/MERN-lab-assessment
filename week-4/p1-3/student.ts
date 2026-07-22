export class Student {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log("Name:", this.name);
    }
}