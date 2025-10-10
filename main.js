'use strict';

console.log('Welcome to Rock Paper Scissors!');
console.log(`To play the game, type 'console.log(getComputerChoice())'.`);

// Store in three constants each one of the following strings: Rock, Paper and Scissors
const rock = 'ROCK';
const paper = 'PAPER';
const scissors = 'SCISSORS';

// Simplify return console log with print function
function print(value = `To insert text, wrap it around single quotes ('')`) {
  return console.log(value);
}

// CALL the get computer choice to return the three global constants randomly
function getComputerChoice() {
  // Store a three random number generator in the get random choice constant
  const getRandomChoice = Math.floor(Math.random() * 3);

  if (getRandomChoice === 0) {
    return console.log(rock);
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
    return `INVALID CHOICE! Type 'console.log(getHumanChoice())' again and insert either Rock, Paper or Scissors.`;
  }
}

// Store the user and computer scores
let computerScore = 0;
let humanScore = 0;
