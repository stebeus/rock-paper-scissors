'use strict';

console.log('Welcome to Rock Paper Scissors!');
console.log(`To play the game, type 'getHumanChoice()'.`);

// Store in three constants each one of the following strings: Rock, Paper and Scissors
const rock = 'ROCK';
const paper = 'PAPER';
const scissors = 'SCISSORS';

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
  const choice = prompt('What will you choose?').toUpperCase();

  if (choice === rock || choice === paper || choice === scissors) {
    return choice;
  } else {
    return `INVALID CHOICE! Type 'getHumanChoice()' again and insert either Rock, Paper or Scissors.`;
  }
}

// Store the user and computer scores
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
    console.log(
      `Draw! (Human choice: ${humanChoice}; Computer choice: ${computerChoice})`
    );
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

  // End the round
  if (humanScore === computerScore) {
    console.log(`Game's over! TIE`);
  } else if (humanScore > computerScore) {
    console.log(`Game's over! VICTORY`);
  } else {
    console.log(`Game's over! DEFEAT`);
  }
}

// Store the get choice functions in human and computer selections
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Initiate game with selected inputs
playRound(humanSelection, computerSelection);

/**
 * PROBLEM: Call playRound five times
 *
 * Move functions and variables
 * Stack score
 * End game with victor declaration
 */

function playGame() {}
