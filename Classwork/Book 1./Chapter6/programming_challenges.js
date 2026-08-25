//FOR LOOP

// let animals = ["Cat","Fish","Lemur","Komodo Dragon"];
// for(let i = 0; i < animals.length; i++){
//     animals[i] = "Awesome " + animals [i];
// }
// console.log(animals);

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let randomString = " ";
// let targetLength = 6;

// while (randomString.length < targetLength){
//     let randomIndex = Math.floor(Math.random() * alphabet.length);
//     randomString += alphabet[randomIndex];
// }
// console.log(randomString);

var input = "javascript is awesome";
var output = " "

for(let i = 0; i < input.length; i++){
    let letter = input[i];
    if (letter === "a") {
        output += "4";
    } else if (letter === "e") {
        output += "3";
    } else if (letter === "i") {
        output += "1";
    } else if (letter === "o") {
        output += "0"
    } else {
        output += letter;
    }
}

console.log(output);