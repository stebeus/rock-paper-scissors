'use strict';

console.log('Welcome to Rock Paper Scissors!');
console.log(`To play the game, type 'getHumanChoice()'.`);

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
    print(rock);
  } else if (getRandomChoice === 1) {
    print(paper);
  } else {
    print(scissors);
  }
}

// CALL a prompt to store and validate the user's input
function getHumanChoice() {
  const choice = prompt('What will you choose?').toUpperCase();

  if (choice === rock || choice === paper || choice === scissors) {
    print(choice);
  } else {
    print(
      `INVALID CHOICE! Type 'getHumanChoice()' again and insert either Rock, Paper or Scissors.`
    );
  }
}

// Store the user and computer scores
let computerScore = 0;
let humanScore = 0;

/**
 * PROBLEM: Run a single round
 *
 * 1. Ask for user to insert his input
 * 2. INPUTS: Store human and computer choices as arguments
 * 3. Validates Victory, Defeat and Draw cases by round
 *    3.1 Output case
 * 4. Increment the victor's score
 *    4.1 Output score
 * 5. Output game is over
 *    5.1 Output winner
 */
