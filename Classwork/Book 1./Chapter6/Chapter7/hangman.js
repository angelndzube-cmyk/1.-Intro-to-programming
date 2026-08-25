let words = ["javascript", "momkey", "amazing", "pancake"];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;
while (remainingLetters > 0) {
    // Game code goes here
    // Show the player their progress
    alert(answerArray.join(" "));
    // Take input from the player
    let guess = prompt("Guess a letter, or click Cancel to stop playing");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // Update answerArray and remainingLetters for every correct guess 
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
// CHECK IF PLAYER QUIT
if (remainingLetters > 0) {
    alert("Sorry that you are quitting. The answer is : " + word);
} else {
    // CONGRATS PLAYER
    alert("Congratulations!");
}

