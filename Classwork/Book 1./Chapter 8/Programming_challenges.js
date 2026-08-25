// CHALLENGE 1
// var add = function (a, b) {
//     return a + b
// };

// var multiply = function (a, b) {
//     return a * b;
// };

// var answer = add(multiply(36325, 9824), 777);
// console.log(answer);

// // CHALLENGE 2

// var areArraysSame = function (arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (var i = 0; i < arr1.length; i++){


//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }
//         return true;
// };

// console.log(areArraysSame([1,2,3],[4,5,6]));
// console.log(areArraysSame([1,2,3],[1,2,3]));
// console.log(areArraysSame([1,2,3],[1,2,3,4]));

// // CHALLENGE 3

let words = ["javascript", "monkey", "amazing", "pancake", "sunshine", "ocean", "keyboard"];
let word = pickWord();
let answerArray = setupAnswerArray(word);



let remainingLetters = word.length;
let maxGuesses = 10;
let guessesLeft = maxGuesses;

while (remainingLetters > 0 && guessesLeft > 0) {
    showProgress();

    // TAKE INPUT FROM THE PLAYER
    let guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        updateGameState(guess);
    } else {
        alert("Please enter a single letter");
        updateGameState(guess);
    }
}

// CHECK IF PLAYER QUIT
showFinalResult();

// 
function pickWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function showProgress() {
    alert(answerArray.join(" "));
    alert("Guesses left: " + guessesLeft);
}

function getGuess() {
    return prompt("Guess a letter or click Cancel to stop playing");
}

function updateGameState(guess) {
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
function showFinalResult() {
    alert(answerArray.join(" "));
    if (remainingLetters === 0) {
        //CONGRATS THE PLAYER
        alert("Good job! The answer was " + word);
    } else {
        alert("Game over! The answer was " + word);
    }
}

function setupAnswerArray(word) {
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}