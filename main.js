"use strict";

// Store in three constants each one of the following strings: Rock, Paper and Scissors
const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

const gameResultsLog = document.querySelector("#game-results");

// CALL the get computer choice to return the three global constants randomly
function getComputerChoice() {
  // Store a three random number generator in the get random choice constant
  const getRandomChoice = Math.floor(Math.random() * 3);

  if (getRandomChoice === 0) {
    return rock;
  } else if (getRandomChoice === 1) {
    return paper;
  } else {
    return scissors;
  }
}

// Store score and initialize five rounds
function playGame() {
  console.log("GAME LOADED");

  let computerScore = 0;
  let humanScore = 0;
  let loggedInfo;

  // Store human and computer inputs for one round
  function playRound(humanChoice, computerChoice) {
    // Validate human and computer inputs, then increment score based on draw, victory and defeat cases.
    if (
      (humanChoice === rock && computerChoice === rock) ||
      (humanChoice === scissors && computerChoice === scissors) ||
      (humanChoice === paper && computerChoice === paper)
    ) {
      loggedInfo = document.createElement("p");
      loggedInfo.textContent = `Draw! ${humanChoice} doesn't beat ${computerChoice}...`;
    } else if (
      (humanChoice === rock && computerChoice === scissors) ||
      (humanChoice === scissors && computerChoice === paper) ||
      (humanChoice === paper && computerChoice === rock)
    ) {
      loggedInfo = document.createElement("p");
      loggedInfo.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      ++humanScore;
    } else {
      loggedInfo = document.createElement("p");
      loggedInfo.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      ++computerScore;
    }

    // Display score
    const gameScore = document.createElement("p");
    const gameVictor = document.createElement("p");
    const restartPageMessage = document.createElement("p");
    restartPageMessage.textContent =
      "Click on one of the three choice buttons to restart the game";

    gameScore.textContent = `USER SCORE: ${humanScore}; COMPUTER SCORE: ${computerScore}`;

    gameResultsLog.appendChild(loggedInfo);
    gameResultsLog.appendChild(gameScore);
    gameResultsLog.appendChild(gameVictor);

    if (humanScore === 5) {
      gameVictor.textContent = "Game over! VICTORY";
      gameResultsLog.appendChild(restartPageMessage);
    } else if (computerScore === 5) {
      gameVictor.textContent = "Game over! DEFEAT";
      gameResultsLog.appendChild(restartPageMessage);
    } else if (humanScore === 5 && computerScore === 5) {
      gameVictor.textContent = "Game over! TIE";
      gameResultsLog.appendChild(restartPageMessage);
    } else if (humanScore > 4 || computerScore > 4) {
      window.location.reload();
    }
  }

  btnRock.addEventListener("click", () => {
    playRound(rock, scissors);
  });

  btnPaper.addEventListener("click", () => {
    playRound(paper, getComputerChoice());
  });

  btnScissors.addEventListener("click", () => {
    playRound(scissors, getComputerChoice());
  });
}

// Initiate game
playGame();
