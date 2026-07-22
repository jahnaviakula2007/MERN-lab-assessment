"use strict";
var Calculator;
(function (Calculator) {
    function add(a, b) {
        return a + b;
    }
    Calculator.add = add;
})(Calculator || (Calculator = {}));
console.log("Sum =", Calculator.add(5, 8));
