// Our first function
// let ourFirstFunction = function () {
//     console.log("Hello World!");
// };
// ourFirstFunction();

// let sayHelloTo = function (name) {
//     console.log("Hello " + name);
// }
// sayHelloTo("Sisipho");

// let drawCats = function (howManyTimes) {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log(i + " =^.^=");

//     }

// };

// drawCats(5);
// drawCats(100);

// function drawCats(howManyTimes) {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log(i + " =^.^=");

//     }

// };


// function ourFirstFunction() {
//     console.log("Hello World!");
// };
// ourFirstFunction();

// function printMultipleTimes(howManyTimes, WhatToDraw){
//     for (let i =0; i< howManyTimes; i ++){
//         console.log(i + " " + WhatToDraw);
//     }
// }
// printMultipleTimes(10, "=^.^=");

// console.log(5 + Math.floor(1.2345));

// function double(number){
//     return number * 2;
// }
// console.log(double(3));

// let sum = double(5) + (6);

// console.log(sum);
// console.log(double(5) + double (6));
// console.log(double(5) + double(6));
// console.log(double(double(3)));

// function pickRandomWord(words){
//     let word = words[Math.floor(Math.random()* words.length)];
//     return word;
// }
// var randomBodyParts = ["Face", "Nose", "Hair"];
// var randomAdjectives = ["Smelly", "Boring", "Stupid"];
// var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// // Pick a random body part from the randomBodyParts array:
// var randomBodyPart = pickRandomWord(randomBodyParts);
// // Pick a random adjective from the randomAdjectives array:
// var randomAdjective = pickRandomWord(randomAdjectives);
// // Pick a random word from the randomWords array:
// var randomWord = pickRandomWord(randomWords);
// // Join all the random strings into a sentence:
// var randomString = "Your " + randomBodyPart + " is like a " + 
// randomAdjective + " " + randomWord + "!!!";
// console.log(randomString);

// function fifthLetter(name){
//     if (name.length < 5){
//         return;
//     }
//     return "The fifth letter in your name is  " + name[4];
// }
// alert(fifthLetter("Angel"));

function medalForScore(score) {
    if (score < 3){
        return "Bronze";
    }
    if (score< 7){
        return "Silver";
    }
    return "Gold";
}

console.log(medalForScore(3));
