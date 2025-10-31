"use strict";

// Store in three constants each one of the following strings: Rock, Paper and Scissors
const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

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

// CALL a prompt to store and validate the user's input
function getHumanChoice() {
  const choice = prompt("Choose Rock, Paper or Scissors!").toUpperCase();

  if (choice === rock || choice === paper || choice === scissors) {
    return choice;
  } else {
    return `INVALID CHOICE! Insert either Rock, Paper or Scissors.`;
  }
}

// Store score and initialize five rounds
function playGame() {
  console.log("GAME LOADED");

  let computerScore = 0;
  let humanScore = 0;

  // Store human and computer inputs for one round
  function playRound(humanChoice, computerChoice) {
    // Validate human and computer inputs, then increment score based on draw, victory and defeat cases.
    if (
      (humanChoice === rock && computerChoice === rock) ||
      (humanChoice === scissors && computerChoice === scissors) ||
      (humanChoice === paper && computerChoice === paper)
    ) {
      console.log(`Draw! ${humanChoice} doesn't beat ${computerChoice}...`);
    } else if (
      (humanChoice === rock && computerChoice === scissors) ||
      (humanChoice === scissors && computerChoice === paper) ||
      (humanChoice === paper && computerChoice === rock)
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      ++humanScore;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      ++computerScore;
    }

    // Display score
    console.log(`USER SCORE: ${humanScore}; COMPUTER SCORE: ${computerScore}`);
  }

  btnRock.addEventListener("click", () => {
    playRound(rock, getComputerChoice());
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
