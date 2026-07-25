"use strict";
// Count Frequency of Characters in a String
let messageText = "typescript";
let frequencyMap = {};
for (let letter of messageText) {
    if (frequencyMap[letter]) {
        frequencyMap[letter]++;
    }
    else {
        frequencyMap[letter] = 1;
    }
}
console.log("String:", messageText);
console.log("Character Frequency:");
for (let characterKey in frequencyMap) {
    console.log(characterKey + " : " + frequencyMap[characterKey]);
}
