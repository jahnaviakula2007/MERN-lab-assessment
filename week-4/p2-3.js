"use strict";
var Student;
(function (Student) {
    class Details {
        show() {
            console.log("Student Details");
        }
    }
    Student.Details = Details;
})(Student || (Student = {}));
let sh = new Student.Details();
sh.show();
