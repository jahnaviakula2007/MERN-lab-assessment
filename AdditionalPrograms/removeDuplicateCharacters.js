"use strict";
// Remove Duplicate Characters from a String
let originalText = "programming";
let uniqueText = "";
for (let symbol of originalText) {
    if (!uniqueText.includes(symbol)) {
        uniqueText += symbol;
    }
}
console.log("Original String:", originalText);
console.log("After Removing Duplicates:", uniqueText);
