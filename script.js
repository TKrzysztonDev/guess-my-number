"use strict";

// Variables from HTML

const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const againButton = document.querySelector(".again");
const checkButton = document.querySelector(".check");
const body = document.querySelector("body");
const bestScore = document.querySelector(".highscore");
const guess = document.querySelector(".guess");

// Variables to game functionality

let userScore = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

// Helper Functions

const displayMessage = function(mess) {
    message.textContent = mess;
};

// Game Logic

checkButton.addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        displayMessage("No number!");
        if (userScore > 1) {
            userScore--;
            score.textContent = userScore;
        } else {
            displayMessage("You lost!");
        }
    } else if (guess === secretNumber) {
        displayMessage("Correct Number!");
        number.textContent = secretNumber;
        body.style.backgroundColor = "#60b347";
        number.style.width = "30rem";
        if (userScore > highscore) {
            highscore = userScore;
            bestScore.textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (userScore > 1) {
            userScore--;
            score.textContent = userScore;
            displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
        } else {
            displayMessage("You lost the game!");
            score.textContent = 0;
        }
    }
});

// Reset Button

againButton.addEventListener("click", function() {
    userScore = 20;
    body.style.backgroundColor = "#222";
    number.style.width = "15rem";
    guess.value = "";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score.textContent = userScore;
    displayMessage("Start guessing...");
    number.textContent = "?";
});