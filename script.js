"use strict";

const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const againButton = document.querySelector(".again");

let userScore = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        message.textContent = "No number!";
        if (userScore > 1) {
            userScore--;
            score.textContent = userScore;
        } else {
            message.textContent = "You Lost";
        }
    } else if (guess === secretNumber) {
        message.textContent = "Correct Number!";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if (userScore > highscore) {
            highscore = userScore;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess > secretNumber) {
        message.textContent = "Too High!";
        if (userScore > 1) {
            userScore--;
            score.textContent = userScore;
        } else {
            message.textContent = "You Lost";
        }
    } else if (guess < secretNumber) {
        message.textContent = "Too Low!";
        if (userScore > 1) {
            userScore--;
            score.textContent = userScore;
        } else {
            message.textContent = "You Lost";
        }
    }
});

againButton.addEventListener("click", function() {
    userScore = 20;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = "";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score.textContent = userScore;
    message.textContent = "Start guessing...";
});