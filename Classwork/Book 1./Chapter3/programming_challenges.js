// Programming Challenges

// #1
// let randomBodyParts = ["  Shoulder ", " Eyebrow ", " Chin ", " Elbow " ];
// let randomAdjectives = [" clumsy "," Stubborn "," Soft "," Raised "];
// let randomWords = ["Square", "Thick","Small","Cold"];

// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// let randomAdjective = randomAdjectives[Math.floor(Math.random()* randomAdjectives.length)];
// let randomWord = randomWords[Math.floor(Math.random()* randomWords.length)];

// let randomInsult = " Your " + randomBodyPart + " is like " + randomAdjective + " " + randomWord + " ! ";
// console.log(randomInsult);

//#2
// let randomBodyParts=["Jaw", "Collarbone", "Heel"];
// let randomAdjectives=["Smooth","Rough","Narrow"];
// let randomAnimals=["Wolf","Fox","Bear"];
// let randomAnimalBodyParts=["Tail","Horn","Paw"];

// let bodyPart= randomBodyParts[Math.floor(Math.random()* randomBodyParts.length)];
// let adjective=randomAdjectives[Math.floor(Math.random()* randomAdjectives.length)];
// let animal= randomAnimals[Math.floor(Math.random()* randomAnimals.length)];
// let animalBodyPart= randomAnimalBodyParts[Math.floor(Math.random()* randomAnimalBodyParts.length)];

// let randomInsult = "Your " + bodyPart + " is more " + adjective + " than a " + animal + " 's " + animalBodyPart + "!";
// console.log(randomInsult);

//#3
let randomBodyParts=["Jaw", "Collarbone", "Heel"];
let randomAdjectives=["Smooth","Rough","Narrow"];
let randomAnimals=["Wolf","Fox","Bear"];
let randomAnimalBodyParts=["Tail","Horn","Paw"];

let bodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let adjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let animal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
let animalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * randomAnimalBodyParts.length)];

//version 1: using +
let insultPlus = "Your " + bodyPart + " is more " + adjective + " than a " + animal + "'s " + animalBodyPart + "!";
console.log("Plus version:", insultPlus);

//version 2: using join
let insultJoin = ["Your", bodyPart, "is", "more", adjective, "than", "a", animal + "'s", animalBodyPart + "!"].join(" ");
console.log("Join version", insultJoin);

//#4
let numbers = [ 3 ,2 ,1 ];
let numberSentence = numbers.join (" is bigger than ");
console.log(numberSentence);


