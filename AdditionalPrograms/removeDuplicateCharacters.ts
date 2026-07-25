// Remove Duplicate Characters from a String

let originalText: string = "programming";
let uniqueText: string = "";

for (let symbol of originalText) {
    if (!uniqueText.includes(symbol)) {
        uniqueText += symbol;
    }
}

console.log("Original String:", originalText);
console.log("After Removing Duplicates:", uniqueText);