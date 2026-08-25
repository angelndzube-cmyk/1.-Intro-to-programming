let words = ["javascript", "monkey", "amazing", "pancake", "sunshine", "ocean", "keyboard"];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;
let maxGuesses = 10;
let guessesLeft = maxGuesses;
while (remainingLetters > 0 && guessesLeft > 0) {
    alert(answerArray.join(" "));
    alert("Guesses left : " + guessesLeft);

    // TAKE INPUT FROM THE PLAYER 

    let guess = prompt("Guess a letter or click Cancel to stop playing");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter");
    } else {
        // UPDATE ANSWERARRAY AND REMAININGLETTERS FOR EVERY CORRECT GUESS
    }

    guess = guess.toLowerCase();
    let found = false;
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            if (answerArray[j] === "_") {
                found = true;
                answerArray[j] = guess;
                remainingLetters--;
            } else {
                alert("You have already guessed this letter!");
            }
        }
    }
    if (!found) {
        guessesLeft--;
    }
}
    // 
    // CHECK IF PLAYER QUIT

    alert(answerArray.join(" "));
    if (remainingLetters === 0) {
        //CONGRATS THE PLAYER
        alert("Good job! The answer was " + word);
    } else {
        alert("Game over! The answer was " + word);
    }

