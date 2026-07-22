class Student_ {
    readonly rollNo: number;

    constructor(rollNo: number) {
        this.rollNo = rollNo;
    }
}

let sb = new Student_(101);
console.log(sb.rollNo);