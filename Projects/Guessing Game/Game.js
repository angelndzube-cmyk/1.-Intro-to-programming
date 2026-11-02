// Global variables to track the game state
let secretNumber;
let isPlaying = false;

// DOM Elements
const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const guessInput = document.getElementById('guess-input');
const message = document.getElementById('message');
const setupSection = document.getElementById('setup-section');
const playSection = document.getElementById('play-section');
const sparkleContainer = document.getElementById('sparkle-container');

// 1. Initial Prompt using parseInt to ask if they want to play
startBtn.addEventListener('click', () => {
    let wantToPlay = parseInt(prompt("Do you want to play a guessing game? Enter 1 for Yes or 0 for No:"));

    if (wantToPlay === 1) {
        startGame();
    } else {
        message.innerText = "Maybe next time! Goodbye.";
    }
});

// Function to initialize variables and show game inputs
function startGame() {
    // 2. Generate random number between 1 and 20 using Math.floor and Math.random
    secretNumber = Math.floor(Math.random() * 20) + 1;
    isPlaying = true;
    
    // UI adjustment to switch from the prompt button to the input text box
    setupSection.style.display = 'none';
    playSection.style.display = 'block';
    message.innerText = "Guess a number between 1 and 20:";
    guessInput.focus();
}

// 3. Handle the guess action when user clicks the button
submitBtn.addEventListener('click', processGuess);

// Also process guess if user presses 'Enter' key inside the text box
guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') processGuess();
});

function processGuess() {
    if (!isPlaying) return;

    // Read the text box input value and convert to integer
    const userGuess = parseInt(guessInput.value);

    // 4. If statements to evaluate the guess and swap CSS classes
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
        message.innerText = "Please enter a number from 1 to 20!";
        return;
    }

    if (userGuess > secretNumber) {
        message.innerText = "Guess is too high";
        document.body.className = "wrong-guess"; // Turns background Red
        guessInput.value = '';
        guessInput.focus();
    } 
    else if (userGuess < secretNumber) {
        message.innerText = "Guess is too low";
        document.body.className = "wrong-guess"; // Turns background Red
        guessInput.value = '';
        guessInput.focus();
    } 
    else if (userGuess === secretNumber) {
        message.innerText = "correct guess yey";
        document.body.className = "correct-guess"; // Turns background Green
        
        // Disable inputs since the game is over
        guessInput.disabled = true;
        submitBtn.disabled = true;
        
        // Trigger the sparkling visual effects
        createSparkles();
    }
}

// Function to dynamically generate floating star elements
function createSparkles() {
    for (let i = 0; i < 40; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        // Randomize horizontal starting positions across the width of screen
        sparkle.style.left = Math.random() * 100 + 'vw';
        
        // Give each sparkle a different flight arc and speed variance
        sparkle.style.setProperty('--random-x', (Math.random() * 200 - 100) + 'px');
        sparkle.style.animationDuration = (Math.random() * 1.5 + 1) + 's';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        
        sparkleContainer.appendChild(sparkle);
    }
}